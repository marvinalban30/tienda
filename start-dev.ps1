Set-StrictMode -Version Latest
# Script para arrancar el servidor de desarrollo y abrir el navegador (Windows / PowerShell)
# Ubicar en la raíz del proyecto y ejecutar: .\start-dev.ps1

# Moverse a la carpeta del script (raíz del repo)
Set-Location $PSScriptRoot

# Python launcher y versión que se usará
$py = "py"
$pyVersionArg = "-3.10"

# Comprobar si pipenv está disponible para esa versión de Python
try {
    & $py $pyVersionArg -m pipenv --version > $null 2>&1
} catch {
    Write-Output "pipenv no encontrado para Python 3.10: instalando pipenv en el usuario..."
    & $py $pyVersionArg -m pip install --user pipenv
}

# Crear/actualizar entorno e instalar dependencias si es necesario (skip-lock acelera)
Write-Output "Instalando dependencias (si es necesario)..."
& $py $pyVersionArg -m pipenv install --skip-lock

# Iniciar servidor en segundo plano (Start-Process) para que no dependa de esta terminal
Write-Output "Iniciando servidor de desarrollo (0.0.0.0:8000)..."
Start-Process -FilePath $py -ArgumentList @($pyVersionArg, '-m', 'pipenv', 'run', 'python', 'store\manage.py', 'runserver', '0.0.0.0:8000') -WindowStyle Hidden

# Esperar unos segundos para que el servidor arranque y abrir el navegador
Start-Sleep -Seconds 2
Write-Output "Abriendo navegador en http://127.0.0.1:8000/login"
Start-Process "http://127.0.0.1:8000/login"

Write-Output "Servidor arrancado (si no hubo errores). Usa el Task de VS Code o ejecuta este script cuando quieras iniciar el entorno."