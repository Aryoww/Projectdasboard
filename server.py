"""
PT MUSASHI AUTO PARTS INDONESIA - UTILITY DIVISION
ENERGY MANAGEMENT SYSTEM & ELECTRICAL ROOM SCADA
Server Hosting & Akses Multi-Device (Local LAN / WiFi & Online)
"""

import http.server
import os
import sys
import webbrowser
import threading
import time
import socket

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

def get_local_ip():
    """Detect local LAN / WiFi IP address so other devices can connect."""
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.settimeout(0.5)
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        try:
            return socket.gethostbyname(socket.gethostname())
        except Exception:
            return '127.0.0.1'

class MusashiDashboardHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        # Serve index.html for root, /dashboard, or /index
        clean_path = self.path.split('?')[0].rstrip('/')
        if clean_path in ('', '/dashboard', '/index'):
            self.path = '/index.html'
        return super().do_GET()

    def end_headers(self):
        # Enable CORS and disable aggressive caching for seamless multi-device testing
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def log_message(self, format, *args):
        # Realtime clean logging
        sys.stdout.write(f"[{time.strftime('%H:%M:%S')}] {self.address_string()} - {format % args}\n")
        sys.stdout.flush()

def open_browser_delayed(url):
    time.sleep(0.7)
    print(f"⚡ Membuka browser lokal ke {url} ...", flush=True)
    webbrowser.open(url)

def run_server():
    os.chdir(DIRECTORY)
    server_address = ('0.0.0.0', PORT)
    local_ip = get_local_ip()

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

    local_url = f"http://localhost:{PORT}/dashboard"
    lan_url = f"http://{local_ip}:{PORT}/dashboard"
    online_url = "https://aryoww.github.io/Projectdasboard/"

    print("=" * 70, flush=True)
    print("⚡ PT MUSASHI AUTO PARTS INDONESIA - UTILITY DIVISION", flush=True)
    print("⚡ SISTEM SCADA & MONITORING ELECTRICAL ROOM SIAP DIAKSES", flush=True)
    print("=" * 70, flush=True)
    print(f"💻 1. AKSES DI KOMPUTER INI (LOKAL):", flush=True)
    print(f"      {local_url}", flush=True)
    print(f"      http://127.0.0.1:{PORT}/dashboard\n", flush=True)
    print(f"📱 2. AKSES DI HP / TAB / LAPTOP LAIN (WIFI / LAN YANG SAMA):", flush=True)
    print(f"      👉 {lan_url}", flush=True)
    print(f"      (Pastikan perangkat lain terhubung ke WiFi/jaringan yang sama)\n", flush=True)
    print(f"🌐 3. AKSES ONLINE DI INTERNET (BEBAS DIBUKA DI JARINGAN APA SAJA):", flush=True)
    print(f"      👉 {online_url}", flush=True)
    print(f"      (Bisa dibuka dari paket data HP / jaringan mana pun di luar kantor)", flush=True)
    print("=" * 70, flush=True)
    print("Tekan Ctrl+C untuk menghentikan server.\n", flush=True)

    # Launch browser automatically on localhost
    threading.Thread(target=open_browser_delayed, args=(local_url,), daemon=True).start()

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer dihentikan.", flush=True)
    finally:
        httpd.server_close()

if __name__ == '__main__':
    run_server()
