"""
=============================================================================
PT MUSASHI AUTO PARTS INDONESIA - MAINTENANCE UTILITY DIVISION
ENERGY MANAGEMENT SYSTEM (EMS) & SCADA - STREAMLIT EDITION
=============================================================================
Menjalankan dashboard SCADA & EMS lengkap PT Musashi di dalam framework Streamlit,
sehingga dapat diakses oleh perangkat lain di jaringan lokal (LAN / Wi-Fi).

Akses:
- Laptop Lokal: http://localhost:8501
- Rekan Kerja / Supervisor: http://192.168.100.182:8501
=============================================================================
"""

import streamlit as st
import streamlit.components.v1 as components
import socket
import os
import base64

# =============================================================================
# 1. DETEKSI IP JARINGAN LOKAL (UNTUK AKSES REKAN KERJA)
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
STREAMLIT_PORT = 8501

# =============================================================================
# 2. KONFIGURASI HALAMAN STREAMLIT
# =============================================================================
st.set_page_config(
    page_title="Monitoring Power Meter Digital – PT Musashi",
    page_icon="⚡",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# =============================================================================
# 3. STREAMLIT FULL-WIDTH STYLING
# =============================================================================
st.markdown("""
<style>
    /* Styling agar dashboard memenuhi layar dengan rapi */
    .block-container {
        padding-top: 0.35rem !important;
        padding-bottom: 0rem !important;
        padding-left: 0.5rem !important;
        padding-right: 0.5rem !important;
        max-width: 100% !important;
    }
    header[data-testid="stHeader"] {
        background: #0f172a !important;
        height: 2.5rem !important;
    }
    footer {
        display: none !important;
    }
    iframe {
        border-radius: 12px !important;
        border: 1px solid #cbd5e1 !important;
        width: 100% !important;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }
</style>
""", unsafe_allow_html=True)

# =============================================================================
# 4. LAN SHARING BANNER (INFORMASI AKSES MULTI-USER)
# =============================================================================
st.markdown(f"""
<div style="background:#ffffff; border:1px solid #e2e8f0; border-left:4px solid #2563eb; border-radius:10px; padding:0.6rem 1.25rem; margin-bottom:0.75rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; font-size:0.82rem; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; box-shadow:0 1px 3px rgba(0,0,0,0.05);">
    <div style="display:flex; align-items:center; gap:0.5rem;">
        <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#10b981;"></span>
        <strong style="color:#0f172a;">🌐 Streamlit Server PT Musashi Aktif:</strong>
        <span style="color:#64748b;">Dashboard telemetry & energy monitoring siap diakses multi-user.</span>
    </div>
    <div style="display:flex; gap:0.75rem; align-items:center;">
        <span style="color:#64748b; font-size:0.78rem;">URL LAN / Wi-Fi:</span>
        <span style="font-family:Consolas, monospace; font-weight:700; color:#2563eb; background:#eff6ff; padding:0.25rem 0.65rem; border-radius:6px; border:1px solid #bfdbfe;">http://{LOCAL_IP}:{STREAMLIT_PORT}</span>
        <span style="color:#64748b; font-size:0.78rem;">Lokal:</span>
        <span style="font-family:Consolas, monospace; font-weight:700; color:#0f172a; background:#f8fafc; padding:0.25rem 0.65rem; border-radius:6px; border:1px solid #e2e8f0;">http://localhost:{STREAMLIT_PORT}</span>
    </div>
</div>
""", unsafe_allow_html=True)

# =============================================================================
# 5. BUNDLING DASHBOARD UTAMA PT MUSASHI (MODERN SAAS TELEMETRY)
# =============================================================================
def load_bundled_dashboard():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    
    html_path = os.path.join(base_dir, "index.html")
    css_path = os.path.join(base_dir, "style.css")
    chart_path = os.path.join(base_dir, "chart.umd.min.js")
    data_path = os.path.join(base_dir, "data.js")
    app_path = os.path.join(base_dir, "app.js")
    img_path = os.path.join(base_dir, "schneider_room.jpg")
    
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
    
    # Inlining Image as base64
    if os.path.exists(img_path):
        with open(img_path, "rb") as img_file:
            img_b64 = base64.b64encode(img_file.read()).decode("utf-8")
            html = html.replace('src="schneider_room.jpg"', f'src="data:image/jpeg;base64,{img_b64}"')
    
    # Inlining Scripts
    html = html.replace('<script src="chart.umd.min.js"></script>', f"<script>\n{chart_js}\n</script>")
    html = html.replace('<script src="data.js"></script>', f"<script>\n{data_js}\n</script>")
    html = html.replace('<script src="app.js"></script>', f"<script>\n{app_js}\n</script>")
    
    return html

try:
    dashboard_html = load_bundled_dashboard()
    # Render dashboard lengkap di dalam Streamlit
    components.html(dashboard_html, height=2400, scrolling=True)
except Exception as e:
    st.error(f"Gagal memuat dashboard: {e}")
