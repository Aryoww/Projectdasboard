"""
=============================================================================
PT MUSASHI AUTO PARTS INDONESIA - MAINTENANCE UTILITY DIVISION
ENERGY MANAGEMENT SYSTEM (EMS) & SCADA - STREAMLIT EDITION
=============================================================================
Menjalankan dashboard SCADA & EMS lengkap PT Musashi di dalam framework Streamlit,
sehingga dapat diakses oleh perangkat lain di jaringan lokal (LAN / Wi-Fi)
maupun di-hosting publik ke Streamlit Community Cloud (share.streamlit.io).

Akses Multi-Device:
- Laptop Lokal: http://localhost:8501
- Rekan Kerja / HP / Tablet (WiFi yang sama): http://192.168.100.182:8501
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
    page_title="Musashi Utility – Monitoring Electrical Room & Power Meter",
    page_icon="⚡",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# =============================================================================
# 3. STREAMLIT FULL-WIDTH & CLEAN STANDALONE STYLING
# =============================================================================
st.markdown(f"""
<style>
    /* Header & footer Streamlit */
    header[data-testid="stHeader"], [data-testid="stHeader"] {{
        background: #8b1e19 !important;
        height: 2.2rem !important;
    }}
    footer {{
        display: none !important;
    }}

    /* Container utama Streamlit dibuat edge-to-edge */
    html, body, [data-testid="stAppViewContainer"], .main {{
        overflow-x: hidden !important;
        width: 100% !important;
        max-width: 100vw !important;
        margin: 0 !important;
        padding: 0 !important;
        background-color: #f4f5f9 !important;
    }}
    
    .block-container {{
        padding-top: 0.45rem !important;
        padding-bottom: 0rem !important;
        padding-left: 0.5rem !important;
        padding-right: 0.5rem !important;
        margin: 0 !important;
        max-width: 100% !important;
        overflow-x: hidden !important;
    }}

    /* LAN Sharing Banner Styling (Persis seperti versi lama) */
    .lan-banner-wrapper {{
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-left: 4px solid #8b1e19;
        border-radius: 10px;
        padding: 0.65rem 1.15rem;
        margin-bottom: 0.65rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.6rem;
        font-size: 0.82rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        box-shadow: 0 1px 4px rgba(0,0,0,0.06);
        box-sizing: border-box;
        width: 100%;
    }}
    .lan-banner-status {{
        display: flex;
        align-items: center;
        gap: 0.45rem;
        flex-wrap: wrap;
    }}
    .lan-status-dot {{
        display: inline-block;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: #10b981;
        box-shadow: 0 0 8px #10b981;
        flex-shrink: 0;
    }}
    .lan-banner-urls {{
        display: flex;
        gap: 0.65rem;
        align-items: center;
        flex-wrap: wrap;
    }}
    .lan-url-group {{
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
    }}
    .lan-pill-badge {{
        font-family: Consolas, monospace;
        font-weight: 700;
        font-size: 0.78rem;
        padding: 0.22rem 0.6rem;
        border-radius: 6px;
        white-space: nowrap;
    }}
    .lan-pill-badge.wifi {{
        color: #8b1e19;
        background: #fee2e2;
        border: 1px solid #fca5a5;
    }}
    .lan-pill-badge.local {{
        color: #0f172a;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
    }}

    /* Iframe dashboard utama responsif penuh edge-to-edge */
    iframe {{
        border: none !important;
        width: 100% !important;
        max-width: 100% !important;
        border-radius: 8px !important;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08) !important;
        margin: 0 !important;
        padding: 0 !important;
        display: block !important;
    }}
    
    @media (max-width: 768px) {{
        .lan-banner-wrapper {{
            flex-direction: column;
            align-items: flex-start;
            padding: 0.55rem 0.75rem;
        }}
        .lan-banner-urls {{
            width: 100%;
            flex-direction: column;
            align-items: stretch;
            gap: 0.35rem;
        }}
        .lan-url-group {{
            justify-content: space-between;
        }}
    }}
</style>
""", unsafe_allow_html=True)

# =============================================================================
# 4. LAN SHARING BANNER (PERSIS SEPERTI DULU)
# =============================================================================
st.markdown(f"""
<div class="lan-banner-wrapper">
    <div class="lan-banner-status">
        <span class="lan-status-dot"></span>
        <strong style="color:#0f172a;">🌐 Server SCADA PT Musashi Aktif</strong>
        <span style="color:#64748b; font-size:0.75rem;">(Siap diakses orang lain di HP / Laptop)</span>
    </div>
    <div class="lan-banner-urls">
        <div class="lan-url-group">
            <span style="color:#64748b; font-size:0.75rem;">Akses Wi-Fi / LAN Orang Lain:</span>
            <span class="lan-pill-badge wifi">http://{LOCAL_IP}:{STREAMLIT_PORT}</span>
        </div>
        <div class="lan-url-group">
            <span style="color:#64748b; font-size:0.75rem;">Lokal:</span>
            <span class="lan-pill-badge local">http://localhost:{STREAMLIT_PORT}</span>
        </div>
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

try:
    dashboard_html = load_bundled_dashboard()
    # Render dashboard lengkap di dalam Streamlit
    components.html(dashboard_html, height=2200, scrolling=True)
except Exception as e:
    st.error(f"Gagal memuat dashboard: {e}")
