@echo off
title Dashboard Musashi Utility - Streamlit Edition
cd /d "%~dp0"
cls
echo ========================================================
echo  PT MUSASHI AUTO PARTS INDONESIA - UTILITY DIVISION
echo  Memulai Dashboard SCADA via Streamlit (Port 8501)...
echo ========================================================

set "PY_EXE=python"
if exist "C:\Users\Acer Aspire Lite\AppData\Local\Programs\Python\Python313\python.exe" (
    set "PY_EXE=C:\Users\Acer Aspire Lite\AppData\Local\Programs\Python\Python313\python.exe"
)

echo Menggunakan Python: %PY_EXE%
echo.
echo Akses Komputer Lokal : http://localhost:8501
echo Akses HP / LAN WiFi : http://192.168.100.182:8501
echo.
"%PY_EXE%" -m streamlit run app_streamlit.py --server.port 8501 --server.address 0.0.0.0
pause
