"""
PT MUSASHI AUTO PARTS INDONESIA - UTILITY DIVISION
ENERGY MANAGEMENT SYSTEM & ELECTRICAL ROOM SCADA
Local Server for Dashboard: http://127.0.0.1:8000/dashboard
"""

import http.server
import os
import sys
import webbrowser
import threading
import time

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class MusashiDashboardHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        # Serve index.html for root or /dashboard
        clean_path = self.path.split('?')[0].rstrip('/')
        if clean_path in ('', '/dashboard'):
            self.path = '/index.html'
        return super().do_GET()

    def log_message(self, format, *args):
        # Clean realtime logging in terminal
        sys.stdout.write(f"[{time.strftime('%H:%M:%S')}] {self.address_string()} - {format % args}\n")
        sys.stdout.flush()

def open_browser_delayed(url):
    time.sleep(0.7)
    print(f"⚡ Membuka browser ke {url} ...", flush=True)
    webbrowser.open(url)

def run_server():
    os.chdir(DIRECTORY)
    server_address = ('', PORT)
    
    try:
        httpd = http.server.ThreadingHTTPServer(server_address, MusashiDashboardHandler)
    except OSError as e:
        print(f"⚠️ Port {PORT} terkendala di 0.0.0.0: {e}", flush=True)
        try:
            httpd = http.server.ThreadingHTTPServer(('127.0.0.1', PORT), MusashiDashboardHandler)
        except Exception as e2:
            print(f"⚠️ Port {PORT} gagal dibuka: {e2}", flush=True)
            print("Mencoba fallback membuka index.html...", flush=True)
            webbrowser.open(os.path.join(DIRECTORY, "index.html"))
            return

    target_url = f"http://127.0.0.1:{PORT}/dashboard"
    print("=" * 65, flush=True)
    print("⚡ PT MUSASHI AUTO PARTS INDONESIA - UTILITY DIVISION", flush=True)
    print(f"⚡ Server aktif di:  {target_url}", flush=True)
    print(f"⚡ URL Alternatif:   http://localhost:{PORT}/dashboard", flush=True)
    print(f"⚡ Folder web:       {DIRECTORY}", flush=True)
    print("=" * 65, flush=True)
    print("Tekan Ctrl+C untuk menghentikan server.\n", flush=True)

    # Launch browser automatically after server is verified listening
    threading.Thread(target=open_browser_delayed, args=(target_url,), daemon=True).start()

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer dihentikan.", flush=True)
    finally:
        httpd.server_close()

if __name__ == '__main__':
    run_server()
