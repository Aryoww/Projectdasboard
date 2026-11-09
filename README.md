# ⚡ PT Musashi Auto Parts Indonesia – Utility Division
### Energy Management System (EMS) & Electrical Room SCADA Dashboard

[![GitHub Pages](https://img.shields.io/badge/Live_Demo-GitHub_Pages-brightgreen?logo=github)](https://aryoww.github.io/Projectdasboard/)
[![SCADA](https://img.shields.io/badge/SCADA-Schneider_SM6_20kV-red?logo=target)](https://github.com/Aryoww/Projectdasboard)
[![Power Meters](https://img.shields.io/badge/Digital_Meters-38_Units_Live-blue)](#daftar-gardu--meter)
[![ESG Carbon](https://img.shields.io/badge/ESG_Audit-Jamali_Grid_0.79_kg%2FkWh-teal)](#laporan--audit-esg)

Sistem pemantauan energi dan telemetri digital realtime untuk gardu listrik tegangan menengah (20kV), transformator penurun tegangan, panel distribusi daya utama (LMVDP), lini produksi **Forging Press**, **Heat Treatment (HT)**, serta otomatisasi kompensasi daya reaktif **Capacitor Bank (APFC)** pada **Factory 1, Factory 2, dan Factory 3** PT Musashi Auto Parts Indonesia.

---

## 🌟 Fitur Utama Dashboard

1. **Dashboard Eksekutif & Multi-View Monitoring:**
   - **Dashboard Utama:** Ringkasan konsumsi daya (kW), energi harian (kWh), estimasi biaya tarif PLN golongan I-3/TM, rata-rata Power Factor ($\cos \varphi$), meter online, dan audit emisi karbon $\text{CO}_2\text{e}$.
   - **Electrical Room 1 (Substation Fac 1):** 15 unit power meter (Trafo TRF 11–16, LMVDP 210V/400V, APFC 600 kVAR).
   - **Electrical Room 2 (Substation Fac 2):** 12 unit power meter (Trafo TRF 01–04 penyuplai Forging Line 1–2).
   - **Electrical Room 3 (Substation Fac 3):** 11 unit power meter (Trafo TRF 05–08 penyuplai Pompa Cooling Tower & Annealing).
   - **Forging Lines:** Monitoring khusus 15 feeder mesin press kapasitas 1.600T, 2.500T, dan 4.000T.
   - **Heat Treatment (HT):** Monitoring khusus 15 unit trafo dan furnace (Billet Induction Heater 6.6kV, Continuous Carburizing, dan Annealing Furnaces).
   - **Pusat Laporan & Rekap:** Audit tagihan WBP/LWBP, denda kVARh PLN, dan pelaporan ESG ramah lingkungan.

2. **Pencegahan Denda kVARh PLN (Power Factor Alert System):**
   - Mendeteksi penurunan nilai $\cos \varphi < 0,85$ secara instan.
   - Panel peringatan otomatis untuk inspeksi step regulator Capacitor Bank APFC guna mencegah penalti beban reaktif bulanan PLN.

3. **Ekspor Laporan Resmi (Excel Berformat & CSV):**
   - **Laporan Excel (.xls):** Lengkap dengan kop resmi Musashi, ringkasan KPI eksekutif, **grafik visual batang distribusi daya**, formula, dan tabel 38 meter berformat border rapi.
   - **Raw CSV:** Format data mentah standar ISO untuk integrasi ke ERP atau SAP.

4. **Navigasi Profesional & Responsif (Mobile, Tablet, Desktop):**
   - **Desktop:** Sidebar *editorial tech blog* yang selalu menempel saat di-scroll (*fixed height 100vh*), dilengkapi kapsul status SCADA live.
   - **Mobile & Tablet:** Off-canvas drawer dengan dark frosted backdrop dan kontrol tombol tutup `✕` yang ramah sentuhan.

---

## 🚀 Cara Menjalankan Aplikasi

### 💻 1. Menjalankan di Komputer Lokal (Windows)
Cukup klik ganda pada file batch:
```cmd
Jalankan_Dashboard.bat
```
Atau jalankan melalui command line / terminal:
```bash
python server.py
```
Browser akan otomatis terbuka di `http://localhost:8000/dashboard`.

---

### 📱 2. Membuka di HP / Tablet Lain (Jaringan WiFi / LAN Lokal)
Saat server Python aktif, perangkat lain (smartphone, tablet, laptop rekan kerja) yang terhubung ke WiFi atau jaringan kantor yang sama dapat mengakses dashboard melalui alamat IP lokal komputer Anda:
```text
http://192.168.100.182:8000/dashboard
```
*(Ganti IP di atas dengan IP lokal yang tertera pada jendela terminal `server.py`).*

---

### 🌐 3. Hosting Online Bebas Akses (Internet)

#### A. Mengaktifkan GitHub Pages (Gratis & Otomatis)
1. Buka repository: [https://github.com/Aryoww/Projectdasboard](https://github.com/Aryoww/Projectdasboard)
2. Klik tab **Settings** &rarr; menu **Pages** di sisi kiri.
3. Pada opsi **Build and deployment**, di dropdown **Source** pilih **GitHub Actions** *(file `.github/workflows/deploy.yml` sudah tersedia)* atau pilih branch **main**.
4. Website akan langsung aktif di URL publik:
   ```text
   https://aryoww.github.io/Projectdasboard/
   ```

#### B. Menggunakan Vercel atau Netlify
Repository ini sudah dilengkapi file konfigurasi `vercel.json` dan `netlify.toml`. Anda dapat mengimpor repository ini secara instan di [Vercel](https://vercel.com) atau [Netlify](https://netlify.com) untuk mendapatkan tautan cloud aktif dalam 30 detik.

---

## 📁 Struktur Direktori

```text
Projectdasboard/
├── .github/workflows/deploy.yml   # Workflow deployment otomatis ke GitHub Pages
├── index.html                     # Antarmuka utama dashboard & modal sistem
├── style.css                      # Desain sistem responsif, dark/light theme, dan editorial sidebar
├── app.js                         # Logika kontrol navigasi, Chart.js, ekspor Excel, & modal telemetri
├── data.js                        # Database 38 digital power meter Schneider & Mitsubishi
├── server.py                      # Multi-threaded HTTP server lokal & pendeteksi IP LAN
├── Jalankan_Dashboard.bat         # Launcher 1-klik untuk Windows
├── vercel.json                    # Konfigurasi routing platform Vercel
├── netlify.toml                   # Konfigurasi routing platform Netlify
├── musashi_logo_clean.png         # Logo resmi PT Musashi Auto Parts Indonesia
└── chart.umd.min.js               # Library visualisasi grafik Chart.js offline
```

---

## 🔒 Lisensi & Hak Cipta
Hak Cipta © 2026 PT Musashi Auto Parts Indonesia.  
Dikembangkan untuk Departemen Utility & Engineering - Proyek Energy Management System & SCADA Monitoring.
