@echo off
title Server Dashboard Musashi Utility
cd /d "%~dp0"
echo ========================================================
echo  PT MUSASHI AUTO PARTS INDONESIA - UTILITY DIVISION
echo  Membuka Dashboard di browser: http://127.0.0.1:8000/dashboard
echo ========================================================
start "" "http://127.0.0.1:8000/dashboard"
python server.py
pause
