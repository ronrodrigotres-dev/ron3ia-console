# Ruta escritorio
$desktop = [Environment]::GetFolderPath("Desktop")

# Carpetas
$folders = @("IPG","RON3IA","Imagenes","Videos","Documentos","Otros")

foreach ($folder in $folders) {
    $path = Join-Path $desktop $folder
    if (!(Test-Path $path)) {
        New-Item -ItemType Directory -Path $path
    }
}

$imageExt = ".jpg",".jpeg",".png",".webp",".gif",".bmp"
$videoExt = ".mp4",".mov",".avi",".mkv"
$docExt = ".pdf",".docx",".doc",".xlsx",".pptx",".txt"

Get-ChildItem $desktop -File | ForEach-Object {

    $name = $_.Name.ToLower()
    $ext = $_.Extension.ToLower()

    if ($name -match "ipg") {
        Move-Item $_.FullName "$desktop\IPG" -Force
    }
    elseif ($name -match "ron3ia|ronrodrigo3") {
        Move-Item $_.FullName "$desktop\RON3IA" -Force
    }
    elseif ($imageExt -contains $ext) {
        Move-Item $_.FullName "$desktop\Imagenes" -Force
    }
    elseif ($videoExt -contains $ext) {
        Move-Item $_.FullName "$desktop\Videos" -Force
    }
    elseif ($docExt -contains $ext) {
        Move-Item $_.FullName "$desktop\Documentos" -Force
    }
    else {
        Move-Item $_.FullName "$desktop\Otros" -Force
    }

}