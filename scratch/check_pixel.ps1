Add-Type -AssemblyName System.Drawing

$srcFile = "D:\Projects\Manjula-Constructions\public\images\logo.png"
$bmp = [System.Drawing.Bitmap]::FromFile($srcFile)
$px = $bmp.GetPixel(10, 10)
Write-Output "Pixel 10,10 R:$($px.R) G:$($px.G) B:$($px.B) A:$($px.A)"
$bmp.Dispose()
