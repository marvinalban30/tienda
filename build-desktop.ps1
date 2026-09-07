$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot
$python = "py"
$pythonArgs = @("-3.10")

Write-Host "Instalando dependencias de empaquetado..."
& $python @pythonArgs -m pip install -r requirements.txt

Write-Host "Construyendo TiendaPOS..."
& $python @pythonArgs -m PyInstaller --clean --noconfirm tienda.spec

Write-Host "Aplicacion creada en dist\TiendaPOS.exe"