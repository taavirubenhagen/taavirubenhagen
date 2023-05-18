param ($path)




If (!(Test-Path -Path $path)) {
  Write-Host $(Test-Path $path)
  New-Item -Path $path
}