$ErrorActionPreference = "Stop"
$projectRoot = "."
$dataDir = ".."

$extract1 = "$dataDir\extract-data-2026-02-21 (1).json"
$extract2 = "$dataDir\extract-data-2026-02-21 (2).json"
$extract3 = "$dataDir\extract-data-2026-02-20.json"
$thunderbit = "$dataDir\Thunderbit_bf0174_20260220_160404.json"

$allDogs = New-Object System.Collections.ArrayList
$allCats = New-Object System.Collections.ArrayList

function Add-Product {
    param($dep, $item)
    # Check if $dep contains 'dog' or char 0x05DB (Kaf - for Kelev)
    if ($dep -match "dog" -or $dep -match [char]0x05DB) {
        $null = $allDogs.Add($item)
    } 
    # Check if $dep contains 'cat' or char 0x05D7 (Chet - for Chatul)
    elseif ($dep -match "cat" -or $dep -match [char]0x05D7) {
        $null = $allCats.Add($item)
    }
}

foreach ($file in @($extract1, $extract2)) {
    if (Test-Path $file) {
        $jsonStr = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)
        $data = $jsonStr | ConvertFrom-Json
        if ($data) {
            foreach ($prop in $data.psobject.properties) {
                $item = $prop.Value
                $n = $item.n
                if ($n -and $n.ToString() -ne "" -and $n.ToString().Length -gt 2) {
                    # Avoid 'bedika' word (char 0x05D1, 0x05D3, 0x05D9, 0x05E7, 0x05D4)
                    if ($n.ToString() -match "$([char]0x05D1)$([char]0x05D3)$([char]0x05D9)$([char]0x05E7)$([char]0x05D4)") { continue }
                    
                    $b = if ($item.b) { $item.b.ToString().Trim() } else { "Other" }
                    if ($item.c) { $c = $item.c.ToString().Trim() } else { $c = "Food" }
                    if ($item.d) { $d = $item.d.ToString().Trim() } else { $d = "" }
                    
                    $sList = New-Object System.Collections.ArrayList
                    if ($item.s) {
                        foreach ($sz in $item.s) {
                            $szStr = $sz.ToString()
                            if ($szStr -notmatch "$([char]0x05D1)$([char]0x05D3)$([char]0x05D9)$([char]0x05E7)$([char]0x05D4)") {
                                $null = $sList.Add($szStr)
                            }
                        }
                    }
                    $img = if ($item.img) { $item.img.ToString().Trim() } else { "" }
                    
                    $obj = @{
                        n = $n.ToString().Trim()
                        b = $b
                        c = $c
                        d = $d
                        s = $sList.ToArray()
                        img = $img
                    }
                    Add-Product $item.department.ToString() $obj
                }
            }
        }
    }
}

if (Test-Path $extract3) {
    $jsonStr = [System.IO.File]::ReadAllText($extract3, [System.Text.Encoding]::UTF8)
    $data = $jsonStr | ConvertFrom-Json
    if ($data.nbi_shop_products) {
        foreach ($item in $data.nbi_shop_products) {
            if ($item.hebrew_name) {
                $b = if ($item.brand) { $item.brand.ToString().Trim() } else { "Other" }
                if ($item.hebrew_category) { $c = $item.hebrew_category.ToString().Trim() } else { $c = "Food" }
                if ($item.hebrew_description) { $d = $item.hebrew_description.ToString().Trim() } else { $d = "" }
                
                $sList = New-Object System.Collections.ArrayList
                if ($item.sizes_and_weights) {
                    foreach ($sz in $item.sizes_and_weights) {
                        $null = $sList.Add($sz.value.ToString())
                    }
                }
                $img = if ($item.image_url) { $item.image_url.ToString().Trim() } else { "" }
                
                $obj = @{
                    n = $item.hebrew_name.ToString().Trim()
                    b = $b
                    c = $c
                    d = $d
                    s = $sList.ToArray()
                    img = $img
                }
                Add-Product $item.department.ToString() $obj
            }
        }
    }
}

if (Test-Path $thunderbit) {
    $jsonStr = [System.IO.File]::ReadAllText($thunderbit, [System.Text.Encoding]::UTF8)
    $dataItems = $jsonStr | ConvertFrom-Json
    foreach ($item in $dataItems) {
        $props = $item.psobject.properties
        $img = $props[0].Value
        $name = $props[2].Value
        $dep = $props[4].Value
        $brandRaw = $props[5].Value
        
        if ($name) {
            $b = "Other"
            if ($brandRaw) {
                $parts = $brandRaw.ToString() -split '-'
                $b = $parts[0].Trim()
            }
            $imgStr = if ($img) { $img.ToString().Trim() } else { "" }
            
            $obj = @{
                n = $name.ToString().Trim()
                b = $b
                c = "Food"
                d = ""
                s = @()
                img = $imgStr
            }
            Add-Product $dep.ToString() $obj
        }
    }
}

function Dedupe {
    param($arr)
    $seen = @{}
    $res = New-Object System.Collections.ArrayList
    foreach ($item in $arr) {
        $n = $item.n
        if ($n -and -not $seen.ContainsKey($n)) {
            $seen[$n] = $true
            $null = $res.Add($item)
        }
    }
    return $res.ToArray()
}

$uniqueDogs = Dedupe $allDogs.ToArray()
$uniqueCats = Dedupe $allCats.ToArray()

# Convert back to JSON and format
# Note: we disable charset escaping using -EscapeHandling (PowerShell 6+) or regex replacement
$dogsJson = $uniqueDogs | ConvertTo-Json -Depth 5 -Compress
$catsJson = $uniqueCats | ConvertTo-Json -Depth 5 -Compress

# Remove unicode escapes generated by PS 5.1 ConvertTo-Json
$dogsJson = [System.Text.RegularExpressions.Regex]::Unescape($dogsJson)
$catsJson = [System.Text.RegularExpressions.Regex]::Unescape($catsJson)

$outPath = "$projectRoot\src\data\importedData.ts"
$content = "import { Product } from '../types';`n`n"
$content += "export const IMPORTED_DOGS: Product[] = $dogsJson;`n`n"
$content += "export const IMPORTED_CATS: Product[] = $catsJson;`n"

[IO.File]::WriteAllText($outPath, $content, [Text.Encoding]::UTF8)

Write-Host "Extracted $($uniqueDogs.Length) dogs and $($uniqueCats.Length) cats products."
