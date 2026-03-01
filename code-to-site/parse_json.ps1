$ErrorActionPreference = "Stop"
$projectRoot = "c:\Users\User\Downloads\אתר החיי והצומח\code-to-site"
$dataDir = "c:\Users\User\Downloads\אתר החיי והצומח"

$extract1 = "$dataDir\extract-data-2026-02-21 (1).json"
$extract2 = "$dataDir\extract-data-2026-02-21 (2).json"
$extract3 = "$dataDir\extract-data-2026-02-20.json"
$thunderbit = "$dataDir\Thunderbit_bf0174_20260220_160404.json"

$allDogs = @()
$allCats = @()

function Add-Product {
    param($dep, $item)
    if ($dep -eq 'dogs' -or $dep -eq 'כלב') {
        $script:allDogs += $item
    } elseif ($dep -eq 'cats' -or $dep -eq 'חתול') {
        $script:allCats += $item
    }
}

foreach ($file in @($extract1, $extract2)) {
    if (Test-Path $file) {
        $jsonStr = Get-Content -LiteralPath $file -Raw -Encoding UTF8
        # ConvertFrom-Json can be buggy with deeply nested or large files, let's see
        $data = $jsonStr | ConvertFrom-Json
        if ($data) {
            foreach ($prop in $data.psobject.properties) {
                $item = $prop.Value
                if ($item -and $item.n -and $item.n -ne "בדיקה") {
                    $b = if ($item.b) { $item.b.Trim() } else { "מגוון" }
                    $c = if ($item.c) { $item.c.Trim() } else { "מזון יבש" }
                    $d = if ($item.d) { $item.d.Trim() } else { "" }
                    $sList = @()
                    if ($item.s) {
                        foreach ($sz in $item.s) {
                            if ($sz -ne "בדיקה") { $sList += $sz }
                        }
                    }
                    $img = if ($item.img) { $item.img.Trim() } else { "" }
                    
                    $obj = @{
                        n = $item.n.Trim()
                        b = $b
                        c = $c
                        d = $d
                        s = $sList
                        img = $img
                    }
                    Add-Product $item.department $obj
                }
            }
        }
    }
}

if (Test-Path $extract3) {
    $jsonStr = Get-Content -LiteralPath $extract3 -Raw -Encoding UTF8
    $data = $jsonStr | ConvertFrom-Json
    if ($data.nbi_shop_products) {
        foreach ($item in $data.nbi_shop_products) {
            if ($item.hebrew_name) {
                $b = if ($item.brand) { $item.brand.Trim() } else { "מגוון" }
                $c = if ($item.hebrew_category) { $item.hebrew_category.Trim() } else { "מזון יבש" }
                $d = if ($item.hebrew_description) { $item.hebrew_description.Trim() } else { "" }
                $sList = @()
                if ($item.sizes_and_weights) {
                    foreach ($sz in $item.sizes_and_weights) {
                        $sList += $sz.value
                    }
                }
                $img = if ($item.image_url) { $item.image_url.Trim() } else { "" }
                
                $obj = @{
                    n = $item.hebrew_name.Trim()
                    b = $b
                    c = $c
                    d = $d
                    s = $sList
                    img = $img
                }
                Add-Product $item.department $obj
            }
        }
    }
}

if (Test-Path $thunderbit) {
    # Fix for weird property names:
    $jsonStr = Get-Content -LiteralPath $thunderbit -Raw -Encoding UTF8
    $dataItems = $jsonStr | ConvertFrom-Json
    foreach ($item in $dataItems) {
        $name = $item.'שם המוצר'
        if ($name) {
            $rawBrand = $item.'מותג'
            $b = if ($rawBrand) { ($rawBrand -split '-')[0].Trim() } else { "מגוון" }
            $dep = $item.'מתאים לחיה מסוג'
            $img = if ($item.'תמונת המוצר') { $item.'תמונת המוצר'.Trim() } else { "" }
            
            $obj = @{
                n = $name.Trim()
                b = $b
                c = "מזון יבש"
                d = ""
                s = @()
                img = $img
            }
            Add-Product $dep $obj
        }
    }
}

function Dedupe {
    param($arr)
    $seen = @{}
    $res = @()
    foreach ($item in $arr) {
        if ($item.n -and -not $seen.ContainsKey($item.n)) {
            $seen[$item.n] = $true
            $res += $item
        }
    }
    return $res
}

$uniqueDogs = Dedupe $allDogs
$uniqueCats = Dedupe $allCats

# Convert to JSON string
$dogsJson = $uniqueDogs | ConvertTo-Json -Depth 5
$catsJson = $uniqueCats | ConvertTo-Json -Depth 5

$outPath = "$projectRoot\src\data\importedData.ts"
$content = "import { Product } from '../types';`n`n"
$content += "export const IMPORTED_DOGS: Product[] = $dogsJson;`n`n"
$content += "export const IMPORTED_CATS: Product[] = $catsJson;`n"

[IO.File]::WriteAllText($outPath, $content, [Text.Encoding]::UTF8)

Write-Host "Extracted $($uniqueDogs.Length) dogs and $($uniqueCats.Length) cats products."
