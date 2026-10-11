Add-Type -AssemblyName System.Drawing
$img1 = [System.Drawing.Image]::FromFile("C:\Users\HARIPRASATH G\.gemini\antigravity-ide\brain\1fcf5385-dac1-462f-8667-db7a0419b14d\media__1790357046214.jpg")
$bmp1 = new-object System.Drawing.Bitmap($img1)
$rect = new-object System.Drawing.Rectangle(0, 0, $img1.Width, [math]::Floor($img1.Height / 2))
$croppedImg1 = $bmp1.Clone($rect, $bmp1.PixelFormat)
$croppedImg1.Save("d:\portfolio\src\assets\cybernautix.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$img1.Dispose()
$bmp1.Dispose()
$croppedImg1.Dispose()

Copy-Item "C:\Users\HARIPRASATH G\.gemini\antigravity-ide\brain\1fcf5385-dac1-462f-8667-db7a0419b14d\media__1790357052077.jpg" -Destination "d:\portfolio\src\assets\tetrinox.jpg"
