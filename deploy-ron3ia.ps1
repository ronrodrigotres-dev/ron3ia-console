Write-Host "--- INICIANDO PROTOCOLO DE DESPLIEGUE: RON3IA.CL ---" -ForegroundColor Cyan

# 1. Limpieza de compilaciones anteriores
if (Test-Path "dist") {
    Write-Host "[1/4] Limpiando carpeta dist..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force "dist"
}

# 2. Instalación de dependencias (Seguridad)
Write-Host "[2/4] Verificando dependencias..." -ForegroundColor Yellow
npm install

# 3. Compilación de producción (Vite + TS)
Write-Host "[3/4] Compilando interfaz de alta gama..." -ForegroundColor Yellow
npm run build

# 4. Verificación de CNAME para GitHub Pages / Hosting Propio
Write-Host "[4/4] Configurando dominio ron3ia.cl..." -ForegroundColor Yellow
if (!(Test-Path "public/CNAME")) {
    Set-Content -Path "public/CNAME" -Value "ron3ia.cl"
}
Copy-Item "public/CNAME" "dist/CNAME" -Force

Write-Host "`n--- DESPLIEGUE LISTO PARA SUBIR ---" -ForegroundColor Green
Write-Host "Siguiente paso sugerido: git add dist -f && git commit -m 'Deploy: Interfaz Elegant Glow'"
