Add-Type -AssemblyName System.Drawing

$srcFile = "D:\Projects\Manjula-Constructions\public\images\logo.png"
$bmp = [System.Drawing.Bitmap]::FromFile($srcFile)

$w = $bmp.Width
$h = $bmp.Height

$outBmp = New-Object System.Drawing.Bitmap $w, $h, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
        $p = $bmp.GetPixel($x, $y)
        if ($p.R -lt 40 -and $p.G -lt 40 -and $p.B -lt 40) {
            $outBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } else {
            $outBmp.SetPixel($x, $y, $p)
        }
    }
}

$bmp.Dispose()

$targets = @(
    "D:\Projects\Manjula-Constructions\public\images\logo.png",
    "D:\Projects\Manjula-Constructions\public\logo.png",
    "D:\Projects\Manjula-Constructions\src\app\icon.png",
    "D:\Projects\Manjula-Constructions\src\app\apple-icon.png"
)

foreach ($t in $targets) {
    if (Test-Path $t) { Remove-Item $t -Force }
    $outBmp.Save($t, [System.Drawing.Imaging.ImageFormat]::Png)
}

$outBmp.Dispose()
Write-Output "Successfully removed black background and made logo transparent!"
