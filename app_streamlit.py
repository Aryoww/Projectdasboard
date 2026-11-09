"""
=============================================================================
PT MUSASHI AUTO PARTS INDONESIA - MAINTENANCE UTILITY DIVISION
ENERGY MANAGEMENT SYSTEM (EMS) & SCADA - STREAMLIT CLOUD & LAN EDITION
=============================================================================
Dashboard SCADA & EMS lengkap PT Musashi teroptimasi penuh untuk:
- Streamlit Community Cloud (hosting publik)
- Jaringan LAN / Wi-Fi lokal (multi-device)
- Desktop, Laptop, Tablet, dan Smartphone (HP)
=============================================================================
"""

import streamlit as st
import streamlit.components.v1 as components
import socket
import os
import base64

# =============================================================================
# 1. DETEKSI IP JARINGAN LOKAL (LOGGING CONSOLE)
# =============================================================================
def get_network_ip():
    hostname = socket.gethostname()
    local_ip = "127.0.0.1"
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.settimeout(0.5)
        s.connect(("8.8.8.8", 80))
        local_ip = s.getsockname()[0]
        s.close()
    except Exception:
        try:
            local_ip = socket.gethostbyname(hostname)
        except Exception:
            local_ip = "127.0.0.1"
    return hostname, local_ip

HOSTNAME, LOCAL_IP = get_network_ip()

# =============================================================================
# 2. KONFIGURASI HALAMAN STREAMLIT
# =============================================================================
st.set_page_config(
    page_title="Musashi Utility – Monitoring Electrical Room & Power Meter",
    page_icon="⚡",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# =============================================================================
# 3. STREAMLIT FULLSCREEN EDGE-TO-EDGE SEAMLESS STYLING
# =============================================================================
# Menyembunyikan seluruh UI bawaan Streamlit (header red bar, footer, toolbar, menu)
# dan mengunci iframe agar 100% responsif mengikuti ukuran layar (desktop, tablet, HP).
st.markdown("""
<style>
    /* 1. Sembunyikan seluruh header, footer, & toolbar native Streamlit */
    header[data-testid="stHeader"], [data-testid="stHeader"], header {
        display: none !important;
        visibility: hidden !important;
        height: 0 !important;
        min-height: 0 !important;
        max-height: 0 !important;
        padding: 0 !important;
        margin: 0 !important;
        border: none !important;
    }
    footer, [data-testid="stToolbar"], #MainMenu, div[data-testid="stDecoration"] {
        display: none !important;
        visibility: hidden !important;
        height: 0 !important;
        min-height: 0 !important;
        max-height: 0 !important;
        padding: 0 !important;
        margin: 0 !important;
    }

    /* 2. Lock root container Streamlit tanpa margin, padding, atau outer scrollbar */
    html, body, [data-testid="stAppViewContainer"], [data-testid="stMain"], .main, .block-container {
        overflow: hidden !important;
        width: 100vw !important;
        max-width: 100vw !important;
        height: 100vh !important;
        height: 100dvh !important;
        max-height: 100vh !important;
        margin: 0 !important;
        padding: 0 !important;
        background-color: #f4f5f9 !important;
    }

    /* 3. Streamlit Custom Component Wrapper */
    [data-testid="stCustomComponentV1"] {
        width: 100vw !important;
        height: 100vh !important;
        height: 100dvh !important;
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
        border: none !important;
        z-index: 10 !important;
    }

    /* 4. Iframe dashboard utama edge-to-edge fullscreen */
    [data-testid="stCustomComponentV1"] > iframe, iframe {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        height: 100dvh !important;
        border: none !important;
        margin: 0 !important;
        padding: 0 !important;
        display: block !important;
        z-index: 10 !important;
        background: transparent !important;
    }
</style>
""", unsafe_allow_html=True)

# =============================================================================
# 4. BUNDLING DASHBOARD UTAMA PT MUSASHI (HTML, CSS, JS, LOGO BASE64)
# =============================================================================
def load_bundled_dashboard():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    
    html_path = os.path.join(base_dir, "index.html")
    css_path = os.path.join(base_dir, "style.css")
    chart_path = os.path.join(base_dir, "chart.umd.min.js")
    data_path = os.path.join(base_dir, "data.js")
    app_path = os.path.join(base_dir, "app.js")
    
    with open(html_path, "r", encoding="utf-8") as f:
        html = f.read()
    with open(css_path, "r", encoding="utf-8") as f:
        css = f.read()
    with open(chart_path, "r", encoding="utf-8") as f:
        chart_js = f.read()
    with open(data_path, "r", encoding="utf-8") as f:
        data_js = f.read()
    with open(app_path, "r", encoding="utf-8") as f:
        app_js = f.read()
        
    # Inlining CSS
    if '<link rel="stylesheet"' in html:
        start_tag = html.find('<link rel="stylesheet"')
        end_tag = html.find('>', start_tag) + 1
        html = html[:start_tag] + f"<style>\n{css}\n</style>" + html[end_tag:]
    
    # Inlining Logo as base64
    logo_path = os.path.join(base_dir, "musashi_logo_clean.png")
    if os.path.exists(logo_path):
        with open(logo_path, "rb") as logo_file:
            logo_b64 = base64.b64encode(logo_file.read()).decode("utf-8")
            html = html.replace('src="musashi_logo_clean.png"', f'src="data:image/png;base64,{logo_b64}"')
    
    # Inlining Scripts
    html = html.replace('<script src="chart.umd.min.js"></script>', f"<script>\n{chart_js}\n</script>")
    html = html.replace('<script src="data.js"></script>', f"<script>\n{data_js}\n</script>")
    html = html.replace('<script src="app.js"></script>', f"<script>\n{app_js}\n</script>")
    
    return html

# =============================================================================
# 5. RENDER DASHBOARD EDGE-TO-EDGE
# =============================================================================
try:
    dashboard_html = load_bundled_dashboard()
    # Height diset ke 1000px fallback; CSS !important di atas menguncinya ke 100vh/100dvh
    components.html(dashboard_html, height=1000, scrolling=False)
except Exception as e:
    st.error(f"Gagal memuat dashboard: {e}")
