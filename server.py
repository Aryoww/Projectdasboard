"""
PT MUSASHI AUTO PARTS INDONESIA - UTILITY DIVISION
ENERGY MANAGEMENT SYSTEM & ELECTRICAL ROOM SCADA
Local Server for Dashboard: http://127.0.0.1:8000/dashboard
"""

import http.server
import socketserver
import os
import sys

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

def run_server():
    os.chdir(DIRECTORY)
    # Enable address reuse to avoid port already in use errors
    socketserver.TCPServer.allow_reuse_address = True
    try:
        with socketserver.TCPServer(("127.0.0.1", PORT), MusashiDashboardHandler) as httpd:
            print("=" * 65)
            print("⚡ PT MUSASHI AUTO PARTS INDONESIA - UTILITY DIVISION")
            print(f"⚡ Server aktif di:  http://127.0.0.1:{PORT}/dashboard")
            print(f"⚡ URL Alternatif:   http://127.0.0.1:{PORT}/")
            print(f"⚡ Melayani folder:  {DIRECTORY}")
            print("=" * 65)
            print("Tekan Ctrl+C untuk menghentikan server.")
            httpd.serve_forever()
    except OSError as e:
        print(f"⚠️ Port {PORT} mungkin sedang digunakan atau perlu ditutup: {e}")
        # Try fallback port if needed
        alt_port = 8001
        print(f"Mencoba port alternatif: http://127.0.0.1:{alt_port}/dashboard")
        with socketserver.TCPServer(("127.0.0.1", alt_port), MusashiDashboardHandler) as httpd:
            httpd.serve_forever()

if __name__ == '__main__':
    run_server()

