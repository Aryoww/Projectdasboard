@echo off
title Server Dashboard Musashi Utility
cd /d "%~dp0"
cls
echo ========================================================
echo  PT MUSASHI AUTO PARTS INDONESIA - UTILITY DIVISION
echo  Memulai Server SCADA & Monitoring Electrical Room...
echo ========================================================

set "PY_EXE=python"
if exist "C:\Users\Acer Aspire Lite\AppData\Local\Programs\Python\Python313\python.exe" (
    set "PY_EXE=C:\Users\Acer Aspire Lite\AppData\Local\Programs\Python\Python313\python.exe"
)

echo Menggunakan Python: %PY_EXE%
"%PY_EXE%" server.py

if errorlevel 1 (
    echo.
    echo Server Python gagal dimulai, membuka berkas langsung...
    start "" "index.html"
)
pause
