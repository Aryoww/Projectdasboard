@echo off
title Dashboard Musashi Utility - EMS & SCADA
cd /d "%~dp0"
cls
echo ========================================================
echo  PT MUSASHI AUTO PARTS INDONESIA - UTILITY DIVISION
echo  ENERGY MANAGEMENT SYSTEM & SCADA DASHBOARD
echo ========================================================
echo.
echo  PILIH METODE MENJALANKAN DASHBOARD:
echo  [1] Streamlit Edition (Port 8501 - Seperti Dulu, Siap LAN)
echo  [2] Server Standalone (Port 8000)
echo.
echo ========================================================
set "CHOICE=1"
set /p "CHOICE=Pilih nomor [1 atau 2] (Tekan Enter untuk Streamlit): "

set "PY_EXE=python"
if exist "C:\Users\Acer Aspire Lite\AppData\Local\Programs\Python\Python313\python.exe" (
    set "PY_EXE=C:\Users\Acer Aspire Lite\AppData\Local\Programs\Python\Python313\python.exe"
)

if "%CHOICE%"=="2" (
    echo.
    echo Menjalankan Server Standalone di port 8000...
    echo Akses Lokal : http://localhost:8000/dashboard
    echo Akses LAN   : http://192.168.100.182:8000/dashboard
    echo.
    "%PY_EXE%" server.py
) else (
    echo.
    echo Menjalankan Streamlit Edition di port 8501...
    echo Akses Lokal : http://localhost:8501
    echo Akses LAN   : http://192.168.100.182:8501
    echo.
    "%PY_EXE%" -m streamlit run app_streamlit.py --server.port 8501 --server.address 0.0.0.0 --browser.gatherUsageStats false
)

if errorlevel 1 (
    echo.
    echo Server gagal dimulai, membuka file HTML langsung...
    start "" "index.html"
)
pause
