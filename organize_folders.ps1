$baseDir = "c:\Users\User\Downloads"

$tomerDirs = @(
    "תומר פרידמן\זיכרון",
    "תומר פרידמן\SKILLS",
    "תומר פרידמן\אתר",
    "תומר פרידמן\פרוייקטים מזדמנים"
)

$hayDirs = @(
    "החיי והצומח\זיכרון",
    "החיי והצומח\SKILLS",
    "החיי והצומח\פרוייקטים מזדמנים"
)

foreach ($dir in $tomerDirs) {
    $path = Join-Path $baseDir $dir
    if (-not (Test-Path $path)) {
        New-Item -ItemType Directory -Force -Path $path
    }
}

foreach ($dir in $hayDirs) {
    $path = Join-Path $baseDir $dir
    if (-not (Test-Path $path)) {
        New-Item -ItemType Directory -Force -Path $path
    }
}

Write-Host "Folders created successfully in $baseDir"
