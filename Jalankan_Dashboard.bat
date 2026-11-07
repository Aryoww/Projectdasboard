@echo off
title Server Dashboard Musashi Utility
cd /d "%~dp0"
echo ========================================================
echo  PT MUSASHI AUTO PARTS INDONESIA - UTILITY DIVISION
echo  Membuka Dashboard di browser...
echo ========================================================

set "PY_EXE=python"
if exist "C:\Users\Acer Aspire Lite\AppData\Local\Programs\Python\Python313\python.exe" (
    set "PY_EXE=C:\Users\Acer Aspire Lite\AppData\Local\Programs\Python\Python313\python.exe"
)

REM Buka browser ke alamat server
start "" "http://127.0.0.1:8000/dashboard"

REM Jalankan server lokal port 8000
"%PY_EXE%" server.py

REM Cadangan jika port 8000 terblokir
if errorlevel 1 (
    echo Membuka berkas index.html langsung...
    start "" "index.html"
)
pause
