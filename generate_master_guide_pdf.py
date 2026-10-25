import os
import sys
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import cm, mm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.pdfgen import canvas

class MasterGuideNumberedCanvas(canvas.Canvas):
    """Canvas supporting running headers and two-pass 'Halaman X dari Y' footers."""
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_decorations(self, page_count):
        self.saveState()
        
        # We do not draw running headers on Page 1 (Cover Page)
        if self._pageNumber > 1:
            # Running Header
            self.setFont("Helvetica-Bold", 7.5)
            self.setFillColor(colors.HexColor("#0f172a"))
            self.drawString(1.8 * cm, 28.3 * cm, "PANDUAN KOMPREHENSIF & SOP INTEGRASI TELEMETRI POWER METER SCHNEIDER")
            self.setFont("Helvetica", 7.5)
            self.setFillColor(colors.HexColor("#64748b"))
            self.drawRightString(19.2 * cm, 28.3 * cm, "PT MUSASHI AUTO PARTS INDONESIA")
            
            self.setStrokeColor(colors.HexColor("#cbd5e1"))
            self.setLineWidth(0.6)
            self.line(1.8 * cm, 28.1 * cm, 19.2 * cm, 28.1 * cm)

            # Running Footer
            self.setStrokeColor(colors.HexColor("#e2e8f0"))
            self.setLineWidth(0.6)
            self.line(1.8 * cm, 1.5 * cm, 19.2 * cm, 1.5 * cm)
            
            self.setFont("Helvetica-Bold", 7.5)
            self.setFillColor(colors.HexColor("#dc2626"))
            self.drawString(1.8 * cm, 1.15 * cm, "RAHASIA & INTERNAL")
            
            self.setFont("Helvetica", 7.5)
            self.setFillColor(colors.HexColor("#64748b"))
            self.drawString(4.5 * cm, 1.15 * cm, "- Standard Operating Procedure & Data Integrity Framework")
            self.drawRightString(19.2 * cm, 1.15 * cm, f"Halaman {self._pageNumber} dari {page_count}")
        
        self.restoreState()


def build_pdf():
    output_pdf = r"d:\Projectdasboard\Panduan_Komprehensif_Sukses_Proyek_EMS_Schneider.pdf"
    
    doc = SimpleDocTemplate(
        output_pdf,
        pagesize=A4,
        leftMargin=1.8 * cm,
        rightMargin=1.8 * cm,
        topMargin=1.8 * cm,
        bottomMargin=1.8 * cm
    )

    styles = getSampleStyleSheet()

    # Color Palette
    PRIMARY = colors.HexColor("#0f172a")      # Slate 900
    NAVY = colors.HexColor("#1e3a8a")         # Blue 900
    SKY = colors.HexColor("#0284c7")          # Sky 600
    TEXT_DARK = colors.HexColor("#1e293b")    # Slate 800
    TEXT_MUTED = colors.HexColor("#475569")   # Slate 600
    BG_LIGHT = colors.HexColor("#f8fafc")     # Slate 50
    BG_HIGHLIGHT = colors.HexColor("#f0f9ff") # Sky 50
    BORDER = colors.HexColor("#cbd5e1")       # Slate 300
    WARN_BG = colors.HexColor("#fffbeb")      # Amber 50
    WARN_BORDER = colors.HexColor("#f59e0b")  # Amber 500
    WARN_TEXT = colors.HexColor("#92400e")    # Amber 800
    GREEN_BG = colors.HexColor("#f0fdf4")     # Green 50
    GREEN_TEXT = colors.HexColor("#166534")   # Green 800

    # Typography Styles
    st_cover_title = ParagraphStyle(
        'CoverTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=25,
        textColor=PRIMARY,
        spaceAfter=10
    )

    st_cover_subtitle = ParagraphStyle(
        'CoverSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=11,
        leading=16,
        textColor=NAVY,
        spaceAfter=18
    )

    st_h1 = ParagraphStyle(
        'Heading1_Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=NAVY,
        spaceBefore=8,
        spaceAfter=4,
        keepWithNext=True
    )

    st_h2 = ParagraphStyle(
        'Heading2_Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13.5,
        textColor=PRIMARY,
        spaceBefore=5,
        spaceAfter=3,
        keepWithNext=True
    )

    st_body = ParagraphStyle(
        'Body_Custom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12.5,
        textColor=TEXT_DARK,
        spaceAfter=4,
        alignment=4 # Justify
    )

    st_body_bold = ParagraphStyle(
        'BodyBold_Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=12.5,
        textColor=TEXT_DARK
    )

    st_callout = ParagraphStyle(
        'CalloutText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11.5,
        textColor=WARN_TEXT
    )

    st_th = ParagraphStyle(
        'TableHead',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10.5,
        textColor=colors.white
    )

    st_td = ParagraphStyle(
        'TableData',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.8,
        leading=10.5,
        textColor=TEXT_DARK
    )

    st_td_bold = ParagraphStyle(
        'TableDataBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7.8,
        leading=10.5,
        textColor=TEXT_DARK
    )

    story = []

    # =========================================================================
    # HALAMAN 1: COVER PAGE RESMI & MASTER METADATA
    # =========================================================================
    story.append(Spacer(1, 1.5 * cm))
    story.append(Paragraph("PT MUSASHI AUTO PARTS INDONESIA", ParagraphStyle('Company', fontName='Helvetica-Bold', fontSize=12, leading=15, textColor=NAVY, spaceAfter=4)))
    story.append(Paragraph("DEPARTEMEN ENGINEERING, MAINTENANCE & INDUSTRIAL AUTOMATION", ParagraphStyle('Dept', fontName='Helvetica-Bold', fontSize=9, leading=12, textColor=TEXT_MUTED, spaceAfter=20)))
    story.append(HRFlowable(width="100%", thickness=3, color=NAVY, spaceAfter=20, spaceBefore=0))

    story.append(Paragraph("MASTER PLAYBOOK & SOP:<br/>PANDUAN KOMPREHENSIF KESUKSESAN PROYEK INTEGRASI TELEMETRI POWER METER SCHNEIDER & ELECTRICAL ROOM", st_cover_title))
    story.append(Paragraph("Pedoman Langkah Kerja Lapangan, Protokol Validasi Data Akurat, Standar Integrasi IoT-IT, dan Manajemen Keandalan Energi Pabrik", st_cover_subtitle))
    
    story.append(Spacer(1, 1.5 * cm))

    # Meta Table Box
    meta_data = [
        [Paragraph("<b>Kode Dokumen:</b>", st_td_bold), Paragraph("SOP-EMS-ENG-2026-V1.0", st_td), Paragraph("<b>Status Proyek:</b>", st_td_bold), Paragraph("Aktif / Tahap Integrasi", st_td)],
        [Paragraph("<b>Penyusun (Project Lead):</b>", st_td_bold), Paragraph("Engineering Project Lead", st_td), Paragraph("<b>Target Fasilitas:</b>", st_td_bold), Paragraph("Gardu 20kV & 2 Electrical Room", st_td)],
        [Paragraph("<b>Kolaborator Internal:</b>", st_td_bold), Paragraph("Tim IoT, Tim Network IT, Maintenance", st_td), Paragraph("<b>Tipe Perangkat:</b>", st_td_bold), Paragraph("Schneider SM6 & PM Series", st_td)],
        [Paragraph("<b>Tanggal Efektif:</b>", st_td_bold), Paragraph("25 Oktober 2026", st_td), Paragraph("<b>Klasifikasi:</b>", st_td_bold), Paragraph("Dokumen Internal Sangat Penting", st_td)],
    ]
    t_meta = Table(meta_data, colWidths=[4.2 * cm, 4.5 * cm, 4.0 * cm, 4.7 * cm])
    t_meta.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), BG_LIGHT),
        ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    story.append(t_meta)

    story.append(Spacer(1, 2.0 * cm))
    
    cover_note = [
        [Paragraph("<b>PANDUAN PENGGUNAAN DOKUMEN INI:</b><br/>"
                   "Dokumen ini dirancang sebagai panduan operasional langkah-demi-langkah bagi Project Lead untuk memastikan setiap tahapan teknis, "
                   "mulai dari penarikan data Ethernet hari Senin, verifikasi keabsahan angka Modbus, pemenuhan pengadaan hardware IoT, hingga transformasi "
                   "menjadi dashboard analitik eksekutif, dapat berjalan tanpa kesalahan (zero-error) dan tepat waktu.", st_callout)]
    ]
    t_cover_note = Table(cover_note, colWidths=[17.4 * cm])
    t_cover_note.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), WARN_BG),
        ('BOX', (0, 0), (-1, -1), 1, WARN_BORDER),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('LEFTPADDING', (0, 0), (-1, -1), 10),
        ('RIGHTPADDING', (0, 0), (-1, -1), 10),
    ]))
    story.append(t_cover_note)
    
    story.append(PageBreak())

    # =========================================================================
    # HALAMAN 2: DAFTAR ISI & BAB 1 (EXECUTIVE ROADMAP & KRITERIA SUKSES)
    # =========================================================================
    story.append(Paragraph("Daftar Isi & Sistematika Panduan", st_h1))
    
    toc_data = [
        [Paragraph("<b>Bab</b>", st_th), Paragraph("<b>Topik Pembahasan</b>", st_th), Paragraph("<b>Fokus & Kunci Keberhasilan</b>", st_th), Paragraph("<b>Hal.</b>", st_th)],
        [Paragraph("1", st_td_bold), Paragraph("Roadmap Strategis & Indikator Kunci Kesuksesan (KPI Proyek)", st_td), Paragraph("Definisi sukses, kriteria penerimaan data, dan tahapan milestone", st_td), Paragraph("2", st_td_bold)],
        [Paragraph("2", st_td_bold), Paragraph("Langkah Eksekusi Hari Senin: Uji Tarik Data Electrical Room", st_td), Paragraph("SOP verifikasi kabel Ethernet fisik, subnet IP, dan ping test Modbus", st_td), Paragraph("3", st_td_bold)],
        [Paragraph("3", st_td_bold), Paragraph("Protokol Memastikan Validitas & Integritas Data (Zero Error)", st_td), Paragraph("Metode komparasi 3 titik, kalibrasi CT/PT ratio, dan toleransi akurasi", st_td), Paragraph("4", st_td_bold)],
        [Paragraph("4", st_td_bold), Paragraph("Teknis Komunikasi Modbus TCP / RTU & Register Mapping", st_td), Paragraph("Daftar alamat register Schneider, polling frequency, dan buffer offline", st_td), Paragraph("5", st_td_bold)],
        [Paragraph("5", st_td_bold), Paragraph("Standardisasi Hardware: Box Panel, PSU 24V & Stop Kontak", st_td), Paragraph("Spesifikasi teknis, instalasi anti-debu IP54/65, grounding < 2 Ohm", st_td), Paragraph("6", st_td_bold)],
        [Paragraph("6", st_td_bold), Paragraph("Manajemen Sinergi Lintas Tim (Matriks RACI IoT - IT - Maintenance)", st_td), Paragraph("Pembagian wewenang, batasan tanggung jawab, dan alur eskalasi", st_td), Paragraph("7", st_td_bold)],
        [Paragraph("7", st_td_bold), Paragraph("Transformasi Data Mentah IoT ke Dashboard Analitik Modern", st_td), Paragraph("Mengubah 'angka lewat di IT' menjadi kurva 24h, ranking, dan cost", st_td), Paragraph("8", st_td_bold)],
        [Paragraph("8", st_td_bold), Paragraph("Sistem Peringatan Dini (Early Warning System) & Threshold Alarm", st_td), Paragraph("Ambang batas tegangan, arus over, drop PF < 0.85, dan notifikasi", st_td), Paragraph("9", st_td_bold)],
        [Paragraph("9", st_td_bold), Paragraph("Matriks Troubleshooting & Failure Mode Mitigation (FMEA)", st_td), Paragraph("Penanganan packet loss, angka anomali, reverse polarity, dan gateway drop", st_td), Paragraph("10", st_td_bold)],
        [Paragraph("10", st_td_bold), Paragraph("Master Checklist Audit Akhir (FAT/SAT) & Lembar Pengesahan", st_td), Paragraph("20 daftar periksa serah terima dan tanda tangan komitmen 3 pihak", st_td), Paragraph("11", st_td_bold)],
    ]
    t_toc = Table(toc_data, colWidths=[1.0 * cm, 6.2 * cm, 8.8 * cm, 1.4 * cm])
    t_toc.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), NAVY),
        ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
        ('ALIGN', (0, 0), (0, -1), 'CENTER'),
        ('ALIGN', (3, 0), (3, -1), 'CENTER'),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, BG_LIGHT]),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    story.append(t_toc)
    story.append(Spacer(1, 3 * mm))

    story.append(Paragraph("BAB 1: Roadmap Strategis & Indikator Kunci Kesuksesan Proyek", st_h1))
    story.append(Paragraph(
        "Tujuan utama proyek ini adalah membangun sistem telemetri energi terintegrasi yang andal di PT Musashi Auto Parts Indonesia. "
        "Selama ini, data energi masih terpecah: data panel Schneider utama sudah ditarik, namun dua Electrical Room belum terintegrasi, "
        "dan data IoT eksisting hanya melintas sebagai angka mentah di jaringan IT. Proyek ini dinyatakan sukses apabila memenuhi 5 kriteria utama:",
        st_body
    ))

    kpi_data = [
        [Paragraph("Kriteria Keberhasilan", st_th), Paragraph("Target Kuantitatif", st_th), Paragraph("Cara Memastikan / Tolok Ukur", st_th)],
        [Paragraph("<b>1. Kelengkapan Penarikan Data</b>", st_td), Paragraph("100% Seluruh Meter Terbaca", st_td), Paragraph("Semua meter di Panel Schneider Utama dan 2 Electrical Room mengirim data aktif tanpa ada yang offline.", st_td)],
        [Paragraph("<b>2. Akurasi & Integritas Nilai</b>", st_td), Paragraph("Deviasi Maksimal ±0.5%", st_td), Paragraph("Perbandingan angka display fisik panel vs angka dashboard sama persis sesuai spesifikasi Class 0.5S.", st_td)],
        [Paragraph("<b>3. Keandalan Jaringan (Uptime)</b>", st_td), Paragraph("Availability ≥ 99.5%", st_td), Paragraph("Komunikasi Ethernet/Modbus stabil 24/7; tidak sering time-out atau kehilangan paket data.", st_td)],
        [Paragraph("<b>4. Kualitas Visualisasi</b>", st_td), Paragraph("Actionable Dashboard", st_td), Paragraph("Bukan hanya angka lewat, melainkan grafik beban 24h, ranking konsumsi, estimasi biaya, dan jejak karbon.", st_td)],
        [Paragraph("<b>5. Keamanan Fisik & Kelistrikan</b>", st_td), Paragraph("Zero Incident & Standardized", st_td), Paragraph("Semua gateway terlindung box panel ber-ventilasi, PSU 24V terisolasi, dan grounding terukur < 2 Ohm.", st_td)],
    ]
    t_kpi = Table(kpi_data, colWidths=[4.5 * cm, 3.5 * cm, 9.4 * cm])
    t_kpi.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), NAVY),
        ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, BG_LIGHT]),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    story.append(t_kpi)

    story.append(PageBreak())

    # =========================================================================
    # HALAMAN 3: BAB 2 (LANGKAH EKSEKUSI HARI SENIN DI ELECTRICAL ROOM A)
    # =========================================================================
    story.append(Paragraph("BAB 2: Panduan Langkah Eksekusi Hari Senin di Electrical Room", st_h1))
    story.append(Paragraph(
        "Hari Senin adalah momentum kritis pertama untuk membuktikan bahwa penarikan data dari <b>Electrical Room A (yang kabel Ethernet-nya sudah terhubung)</b> "
        "dapat terealisasi secara nyata. Berikut adalah urutan tahapan yang wajib Anda pastikan dan kawal di lapangan:",
        st_body
    ))

    story.append(Paragraph("Fase A: Prosedur Keselamatan Kerja (Safety First) di Gardu 20kV", st_h2))
    story.append(Paragraph(
        "1. <b>Izin Masuk & APD Lengkap:</b> Pastikan memakai helm safety, kacamata pelindung, sepatu safety tahan tegangan (ESR), dan pakaian kerja standar pabrik. "
        "Jangan menyentuh bagian konduktif atau busbar kubikel Schneider SM6 bertegangan menengah 20.000 Volt.<br/>"
        "2. <b>Area Kerja Terisolasi:</b> Aktivitas penarikan data hanya dilakukan pada kompartemen tegangan rendah (Low Voltage Compartment) tempat modul meter digital dan terminal komunikasi berada.",
        st_body
    ))

    story.append(Paragraph("Fase B: Pengujian Fisik Kabel Ethernet & Sambungan Switch IT", st_h2))
    story.append(Paragraph(
        "1. <b>Inspeksi Kabel UTP:</b> Pastikan kabel LAN Cat6 terpasang rapi di dalam trunking/conduit pelindung. Pastikan pinout RJ45 standar T568B tidak longgar.<br/>"
        "2. <b>Status LED Switch:</b> Periksa port switch IT tempat kabel dicolokkan. Pastikan lampu indikator Link (hijau solid) dan Activity (oranye berkedip) menyala.<br/>"
        "3. <b>Pengetesan Panjang Kabel:</b> Jika kabel lebih dari 80 meter, pastikan tidak ada redaman sinyal berlebih yang memicu packet loss berkala.",
        st_body
    ))

    story.append(Paragraph("Fase C: Konfigurasi Jaringan IP Bersama Tim IT", st_h2))
    story.append(Paragraph(
        "1. <b>Alokasi IP Statis:</b> Jangan gunakan DHCP untuk gateway Modbus. Minta IP Address statis permanen ke tim IT beserta Subnet Mask dan Default Gateway.<br/>"
        "2. <b>Uji Ping Latency:</b> Hubungkan laptop Anda ke subnet yang sama, lalu lakukan ping berkelanjutan: <font face='Courier'>ping -t [IP_Gateway]</font>. "
        "Latency harus stabil di bawah 5 ms tanpa ada 'Request Timed Out'.<br/>"
        "3. <b>Firewall & Port Opening:</b> Pastikan port <b>502 (Modbus TCP)</b> dan port HTTP 80/443 (untuk interface web gateway) telah di-whitelist di firewall switch IT.",
        st_body
    ))

    story.append(Paragraph("Fase D: Pengujian Akuisisi Data Perdana (Test Read Polling)", st_h2))
    story.append(Paragraph(
        "1. <b>Software Tester:</b> Gunakan utility tool seperti <i>Modbus Poll</i> atau skrip Python penguji untuk membaca Register Holding meter.<br/>"
        "2. <b>Verifikasi Parameter Dasar:</b> Uji baca Voltage Phase-to-Neutral (V L-N), Current per Phase (A), dan Active Power Total (kW).<br/>"
        "3. <b>Logging Kontinu 30 Menit:</b> Jalankan pembacaan data otomatis setiap 5 detik selama 30 menit. Amati apakah stream data konsisten atau terjadi interupsi.",
        st_body
    ))

    callout_senin = [
        [Paragraph("<b>CHECKLIST WAJIB DIBAWA PADA HARI SENIN:</b><br/>"
                   "• Laptop commissioning yang terinstall aplikasi Modbus Poll / QModMaster / Python.<br/>"
                   "• Kabel LAN Patchcord Cat6 cadangan (3 meter) & USB-to-LAN adapter.<br/>"
                   "• Multimeter digital terkalibrasi untuk memverifikasi tegangan catu daya.<br/>"
                   "• Catatan daftar IP Address, Gateway, Subnet, dan Slave ID meter yang disetujui IT.", st_callout)]
    ]
    t_callout_senin = Table(callout_senin, colWidths=[17.4 * cm])
    t_callout_senin.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), WARN_BG),
        ('BOX', (0, 0), (-1, -1), 1, WARN_BORDER),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
    ]))
    story.append(t_callout_senin)

    story.append(PageBreak())

    # =========================================================================
    # HALAMAN 4: BAB 3 (PROTOKOL MEMASTIKAN VALIDITAS & INTEGRITAS DATA)
    # =========================================================================
    story.append(Paragraph("BAB 3: Protokol Memastikan Validitas & Integritas Data (Zero Error)", st_h1))
    story.append(Paragraph(
        "Salah satu masalah terbesar dalam proyek IoT industri adalah munculnya data semu (*garbage data*) karena rasio pengali salah, "
        "urutan byte terbalik, atau register tertukar. Metode berikut wajib Anda terapkan untuk memastikan bahwa data 100% valid dan dapat dipertanggungjawabkan:",
        st_body
    ))

    story.append(Paragraph("1. Metode Komparasi Sinkron 3 Titik (Three-Point Verification)", st_h2))
    story.append(Paragraph(
        "Untuk setiap meter yang diintegrasikan, Anda harus mencocokkan data secara simultan pada 3 titik referensi:",
        st_body
    ))

    verif_table_data = [
        [Paragraph("Titik Uji", st_th), Paragraph("Lokasi Pengecekan", st_th), Paragraph("Parameter Wajib Dicek", st_th), Paragraph("Toleransi Deviasi", st_th)],
        [Paragraph("<b>Titik 1: Fisik Panel</b>", st_td), Paragraph("Display LCD Power Meter di pintu panel gardu", st_td), Paragraph("Tegangan (V), Arus (A), Daya Aktif (kW), Cos φ", st_td), Paragraph("Referensi Acuan Utama (0.0%)", st_td_bold)],
        [Paragraph("<b>Titik 2: Gateway IoT</b>", st_td), Paragraph("Web management portal / Raw log gateway", st_td), Paragraph("Nilai register mentah sebelum diproses oleh backend", st_td), Paragraph("Harus sama persis dengan Titik 1", st_td_bold)],
        [Paragraph("<b>Titik 3: Dashboard Web</b>", st_td), Paragraph("Layar Dashboard Telemetri PT Musashi", st_td), Paragraph("Nilai hasil kalkulasi, grafik kurva beban, akumulasi kWh", st_td), Paragraph("Maksimal selisih ±0.2%", st_td_bold)],
    ]
    t_verif = Table(verif_table_data, colWidths=[3.2 * cm, 4.6 * cm, 6.2 * cm, 3.4 * cm])
    t_verif.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), NAVY),
        ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, BG_LIGHT]),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    story.append(t_verif)
    story.append(Spacer(1, 2 * mm))

    story.append(Paragraph("2. Verifikasi Rasio Current Transformer (CT) & Potential Transformer (PT)", st_h2))
    story.append(Paragraph(
        "Penyebab paling sering angka daya meleset 100x atau 1000x lipat adalah kesalahan konfigurasi rasio CT dan PT di dalam memori meter:<br/>"
        "• <b>Formula Rasio CT:</b> Nilai Arus Aktual = Pembacaan Sinyal Sekunder (0–5A) × (Arus Primer CT / Arus Sekunder CT). "
        "Contoh: Jika CT terpasang adalah <b>400/5A</b>, maka faktor pengali arus adalah <b>80</b>.<br/>"
        "• <b>Formula Rasio PT (Jika 20kV):</b> Nilai Tegangan Aktual = Tegangan Sekunder (100V atau 110V) × (Tegangan Primer PT / Tegangan Sekunder PT). "
        "Contoh: PT 20.000V / 100V memiliki rasio pengali <b>200</b>.<br/>"
        "• <i>Tindakan Anda:</i> Catat nameplate CT dan PT di ruang gardu dan periksa menu setup meter Schneider untuk memastikan rasio sudah dikunci (*locked*).",
        st_body
    ))

    story.append(Paragraph("3. Validasi Power Factor (Cos φ) dan Polaritas CT", st_h2))
    story.append(Paragraph(
        "• <b>Arah Aliran Daya (Power Flow):</b> Nilai kW harus bernilai <b>positif (+)</b> pada saat beban beroperasi. "
        "Jika nilai kW terbaca negatif (-), berarti terminal kabel polaritas CT (S1 dan S2) terbalik pada fasa tersebut.<br/>"
        "• <b>Kewajaran Nilai Power Factor:</b> Pada pabrik manufaktur dengan beban induktif motor listrik besar seperti PT Musashi, "
        "Power Factor normal berada di rentang <b>0.85 hingga 0.98 lagging</b>. Jika terbaca di bawah 0.5 atau terbaca leading abnormal, periksa urutan fasa (Phase Sequence R-S-T).",
        st_body
    ))

    story.append(Paragraph("4. Pengujian Akumulasi kWh (Energy Balance Check)", st_h2))
    story.append(Paragraph(
        "Lakukan audit energi selama 1 shift kerja (8 jam):<br/>"
        "$$\\Delta kWh_{Aktual} = kWh_{Jam\\ 16.00} - kWh_{Jam\\ 08.00}$$<br/>"
        "Bandingkan integrasi kurva kW rata-rata dikali waktu terhadap pertambahan register kWh meter. Keduanya harus match secara matematis tanpa ada lompatan angka yang terpotong (*glitch*).",
        st_body
    ))

    story.append(PageBreak())

    # =========================================================================
    # HALAMAN 5: BAB 4 (TEKNIS KOMUNIKASI MODBUS & REGISTER MAPPING)
    # =========================================================================
    story.append(Paragraph("BAB 4: Teknis Komunikasi Modbus TCP / RTU & Register Mapping", st_h1))
    story.append(Paragraph(
        "Komunikasi antara power meter Schneider (seri PM5350, PM8000, atau Micrologic/Sepam) dengan sistem dashboard Anda "
        "menggunakan protokol Modbus. Memahami peta register (*register map*) adalah kunci agar dashboard tidak salah membaca data.",
        st_body
    ))

    story.append(Paragraph("1. Topologi Jaringan Akuisisi Data Gardu", st_h2))
    story.append(Paragraph(
        "• <b>Level Panel (RS-485 Modbus RTU):</b> Power meter dihubungkan secara daisy-chain menggunakan kabel twisted pair berpelindung (Shielded Twisted Pair - Belden 9841). "
        "Ujung kabel terjauh wajib dipasang resistor terminasi 120 Ohm.<br/>"
        "• <b>Level Gateway (Modbus RTU to Modbus TCP):</b> Gateway konverter (misal Schneider EGX300, Link150, atau Moxa MGate) mengubah paket serial menjadi paket Ethernet TCP/IP.<br/>"
        "• <b>Level Jaringan Pabrik (Ethernet TCP/IP):</b> Gateway terhubung ke port switch IT pabrik, memungkinkan server dashboard menarik data secara simultan.",
        st_body
    ))

    story.append(Paragraph("2. Standar Pemetaan Register Modbus Power Meter Schneider (Holding Registers)", st_h2))
    
    reg_table_data = [
        [Paragraph("Parameter Listrik", st_th), Paragraph("Register Address", st_th), Paragraph("Format Data", st_th), Paragraph("Satuan", st_th), Paragraph("Keterangan Teknis", st_th)],
        [Paragraph("<b>Voltage L-L Avg</b>", st_td), Paragraph("3020 (0x0BCB)", st_td), Paragraph("Float32 (2 Reg)", st_td), Paragraph("Volt (V)", st_td), Paragraph("Tegangan rata-rata fasa ke fasa (misal 380V atau 20.000V)", st_td)],
        [Paragraph("<b>Voltage L-N Avg</b>", st_td), Paragraph("3028 (0x0BD3)", st_td), Paragraph("Float32 (2 Reg)", st_td), Paragraph("Volt (V)", st_td), Paragraph("Tegangan rata-rata fasa ke netral (misal 220V)", st_td)],
        [Paragraph("<b>Current Total Avg</b>", st_td), Paragraph("3000 (0x0BB7)", st_td), Paragraph("Float32 (2 Reg)", st_td), Paragraph("Ampere (A)", st_td), Paragraph("Arus total rata-rata seluruh fasa", st_td)],
        [Paragraph("<b>Active Power Total</b>", st_td), Paragraph("3060 (0x0BF3)", st_td), Paragraph("Float32 (2 Reg)", st_td), Paragraph("kW", st_td), Paragraph("Daya aktif riil beban operasional pabrik", st_td)],
        [Paragraph("<b>Reactive Power Total</b>", st_td), Paragraph("3068 (0x0BFB)", st_td), Paragraph("Float32 (2 Reg)", st_td), Paragraph("kVAR", st_td), Paragraph("Daya reaktif penentu denda kVARh PLN", st_td)],
        [Paragraph("<b>Power Factor Total</b>", st_td), Paragraph("3084 (0x0C0B)", st_td), Paragraph("Float32 (2 Reg)", st_td), Paragraph("Nilai (-1 s/d 1)", st_td), Paragraph("Indikator efisiensi daya (target ≥ 0.85)", st_td)],
        [Paragraph("<b>Total Active Energy</b>", st_td), Paragraph("3204 (0x0C83)", st_td), Paragraph("Int64 / Float64", st_td), Paragraph("kWh", st_td), Paragraph("Akumulasi pemakaian energi total kumulatif", st_td)],
        [Paragraph("<b>Frequency</b>", st_td), Paragraph("3110 (0x0C25)", st_td), Paragraph("Float32 (2 Reg)", st_td), Paragraph("Hz", st_td), Paragraph("Frekuensi listrik grid PLN (Standar 50.0 Hz)", st_td)],
    ]
    t_reg = Table(reg_table_data, colWidths=[3.2 * cm, 2.7 * cm, 2.8 * cm, 1.8 * cm, 6.9 * cm])
    t_reg.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), NAVY),
        ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, BG_LIGHT]),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    story.append(t_reg)
    story.append(Spacer(1, 2 * mm))

    story.append(Paragraph("3. Pengaturan Byte Order (Endianness)", st_h2))
    story.append(Paragraph(
        "Data floating point 32-bit Modbus terdiri dari dua register 16-bit. Schneider menggunakan format <b>Big-Endian (High Word First)</b>. "
        "Jika pada dashboard angka terbaca aneh seperti <font face='Courier'>1.42e-38</font> atau <font face='Courier'>-NaN</font>, "
        "berarti urutan word terbalik. Atur parser dashboard ke mode <i>Big-Endian Float (ABCD)</i>.",
        st_body
    ))

    story.append(Paragraph("4. Strategi Polling Frequency & Buffer Offline", st_h2))
    story.append(Paragraph(
        "• <b>Interval Polling Optimal:</b> Untuk 137 meter, hindari polling serentak setiap detik karena dapat menyebabkan bottleneck CPU gateway. "
        "Terapkan interval <b>5 hingga 10 detik</b> untuk parameter operasional (kW, V, A, PF), dan interval <b>60 detik</b> untuk akumulasi kWh.<br/>"
        "• <b>Mekanisme Buffer Lokal:</b> Pastikan gateway atau micro-service ingestion memiliki memory buffer lokal minimal 24 jam untuk menyimpan data saat kabel switch IT terputus.",
        st_body
    ))

    story.append(PageBreak())

    # =========================================================================
    # HALAMAN 6: BAB 5 (STANDARDISASI HARDWARE: BOX PANEL, PSU, STOP KONTAK)
    # =========================================================================
    story.append(Paragraph("BAB 5: Standardisasi Hardware Fasilitas (Box Panel, PSU 24V, Stop Kontak)", st_h1))
    story.append(Paragraph(
        "Berdasarkan hasil koordinasi Anda kemarin dengan tim IoT, penyediaan infrastruktur listrik pendukung merupakan syarat mutlak "
        "agar perangkat pembaca data tidak sering rusak, tidak overheat, dan tidak mengalami interferensi induksi medan magnet kubikel 20kV. "
        "Berikut spesifikasi teknis dan panduan pemasangannya:",
        st_body
    ))

    story.append(Paragraph("1. Spesifikasi Teknis Material yang Diajukan", st_h2))
    
    spec_table_data = [
        [Paragraph("Item Hardware", st_th), Paragraph("Kuantitas", st_th), Paragraph("Rekomendasi Spesifikasi Teknis", st_th), Paragraph("Tujuan & Proteksi Lapangan", st_th)],
        [
            Paragraph("<b>Box Panel Tambahan</b><br/>(Enclosure Gateway)", st_td),
            Paragraph("<b>1 Unit</b>", st_td_bold),
            Paragraph("Ukuran min. 400×300×200 mm, Bahan Steel Plate 1.2mm / ABS Industrial, Rating IP54 / IP65, Dilengkapi Kunci Camlock & Louver Ventilasi berfilter debu.", st_td),
            Paragraph("Melindungi gateway IoT, ethernet switch, dan modul konverter dari partikel debu gardu, kelembapan, serangga, serta sentuhan mekanis.", st_td)
        ],
        [
            Paragraph("<b>Power Supply Unit (PSU)</b><br/>(Catu Daya DC Gateway)", st_td),
            Paragraph("<b>1 Unit</b>", st_td_bold),
            Paragraph("Input: 100–240V AC 50/60Hz, Output: 24V DC / 3.0A s/d 5.0A (Min. 72 Watt), DIN Rail Mounting, Efisiensi ≥ 88%, Short Circuit & Overvoltage Protection.", st_td),
            Paragraph("Mencegah gateway re-booting atau hang akibat fluktuasi voltase AC gardu, menjamin transmisi data stabil tanpa drop.", st_td)
        ],
        [
            Paragraph("<b>Stop Kontak Panel (3 Lubang)</b><br/>(Heavy Duty Grounded)", st_td),
            Paragraph("<b>9 Buah</b><br/>(Isi 3/unit)", st_td_bold),
            Paragraph("Stop kontak 3-lubang bertutup / arde grounding standar Schneider/Broco Industrial, Bahan Tahan Panas Flame Retardant, Arus Pengenal 16A / 250V AC.", st_td),
            Paragraph("Dipasang tersebar di tiap titik panel untuk: (1) Catu daya adaptor PSU, (2) Power switch ethernet, dan (3) Stop kontak teknisi saat service berkala.", st_td)
        ],
    ]
    t_spec = Table(spec_table_data, colWidths=[3.5 * cm, 2.0 * cm, 5.7 * cm, 6.2 * cm])
    t_spec.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), NAVY),
        ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
        ('ALIGN', (1, 1), (1, -1), 'CENTER'),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, BG_LIGHT]),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    story.append(t_spec)
    story.append(Spacer(1, 2 * mm))

    story.append(Paragraph("2. Panduan Penataan Instalasi & Pengkabelan (Wiring Best Practices)", st_h2))
    story.append(Paragraph(
        "• <b>Pemisahan Jalur Daya dan Data (Separation of Paths):</b> Kabel komunikasi data (Ethernet & RS-485) <b>dilarang keras</b> "
        "ditarik satu pipa konduit bersama kabel tenaga tegangan 380V atau 20kV. Pisahkan dengan jarak minimal <b>20 cm</b> untuk mencegah dengung induksi elektromagnetik (EMI).<br/>"
        "• <b>Kualitas Grounding (Arde Pembumian):</b> Pastikan bodi box panel dan terminal grounding stop kontak tersambung erat ke grounding busbar gardu dengan nilai resistansi <b>< 2.0 Ohm</b>.<br/>"
        "• <b>Labeling & Identifikasi Kabel:</b> Setiap kabel Ethernet, kabel power 24V, dan kabel stop kontak wajib diberi label (*cable marker*) yang jelas: nomor IP address, sumber panel, dan nomor fasa.",
        st_body
    ))

    story.append(Paragraph("3. Alasan Penting Mengapa Permintaan Tim IoT Wajib Dipenuhi", st_h2))
    story.append(Paragraph(
        "Jika gateway IoT dipasang tanpa box pelindung dan hanya mengandalkan kabel gantung darurat, risiko kegagalan sistem sangat tinggi: "
        "debu industri besi di PT Musashi bersifat konduktif yang dapat menyebabkan korsleting pada sirkuit PCB gateway. "
        "Pengadaan hardware ini merupakan investasi proteksi jangka panjang agar proyek EMS Anda tidak mengalami kendala berulang.",
        st_body
    ))

    story.append(PageBreak())

    # =========================================================================
    # HALAMAN 7: BAB 6 (KOLABORASI & PEMBAGIAN TANGGUNG JAWAB - RACI MATRIX)
    # =========================================================================
    story.append(Paragraph("BAB 6: Manajemen Sinergi Lintas Tim (Matriks RACI IoT - IT - Maintenance)", st_h1))
    story.append(Paragraph(
        "Keberhasilan proyek ini membutuhkan kolaborasi erat antara 3 divisi: <b>Engineering (Anda)</b>, <b>Tim IoT</b>, dan <b>Tim IT Network</b>, "
        "didukung oleh <b>Tim Maintenance Listrik</b>. Matriks RACI berikut menjelaskan pembagian peran secara jelas:",
        st_body
    ))

    raci_table_data = [
        [Paragraph("Aktivitas / Tahapan Kerja Proyek", st_th), Paragraph("Project Lead (Anda)", st_th), Paragraph("Tim IoT", st_th), Paragraph("Tim IT Network", st_th), Paragraph("Maintenance Listrik", st_th)],
        [Paragraph("Pengajuan Pengadaan Box Panel, PSU, Stop Kontak", st_td), Paragraph("<b>Accountable</b> (Membuat Form)", st_td), Paragraph("Consulted (Review Spek)", st_td), Paragraph("Informed (Tahu Posisi)", st_td), Paragraph("Responsible (Bantu Pasang)", st_td)],
        [Paragraph("Penyambungan Kabel Ethernet & Patch Switch", st_td), Paragraph("Accountable (Memastikan)", st_td), Paragraph("Consulted (Posisi Port)", st_td), Paragraph("<b>Responsible</b> (Buka Port)", st_td), Paragraph("Informed (Izin Jalur)", st_td)],
        [Paragraph("Konfigurasi IP Statis & Port 502 Modbus", st_td), Paragraph("Accountable (Validasi)", st_td), Paragraph("Consulted (Setting IP)", st_td), Paragraph("<b>Responsible</b> (Alokasi IP)", st_td), Paragraph("Informed", st_td)],
        [Paragraph("Penarikan Data Register Meter (Senin)", st_td), Paragraph("<b>Responsible & Lead</b>", st_td), Paragraph("Responsible (Dampingi)", st_td), Paragraph("Consulted (Cek Traffic)", st_td), Paragraph("Responsible (Buka Pintu)", st_td)],
        [Paragraph("Verifikasi Angka Fisik Meter vs Dashboard", st_td), Paragraph("<b>Responsible & Lead</b>", st_td), Paragraph("Consulted (Koreksi Log)", st_td), Paragraph("Informed", st_td), Paragraph("Consulted (Cek CT/PT)", st_td)],
        [Paragraph("Pembangunan Tampilan Visual Dashboard EMS", st_td), Paragraph("<b>Accountable & Owner</b>", st_td), Paragraph("Informed (Kirim Data)", st_td), Paragraph("Informed (Hosting Server)", st_td), Paragraph("Consulted (Kebutuhan)", st_td)],
        [Paragraph("Pemasangan Fisik Box Panel & Wiring Stop Kontak", st_td), Paragraph("Accountable (Supervisi)", st_td), Paragraph("Responsible (Pasang Box)", st_td), Paragraph("Informed", st_td), Paragraph("<b>Responsible</b> (Kabel Power)", st_td)],
    ]
    t_raci = Table(raci_table_data, colWidths=[5.4 * cm, 3.0 * cm, 3.0 * cm, 3.0 * cm, 3.0 * cm])
    t_raci.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), NAVY),
        ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
        ('ALIGN', (1, 1), (-1, -1), 'CENTER'),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, BG_LIGHT]),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    story.append(t_raci)
    story.append(Spacer(1, 2 * mm))

    story.append(Paragraph("Keterangan Status RACI:", st_h2))
    story.append(Paragraph(
        "• <b>Responsible (R):</b> Pihak yang mengeksekusi langsung pekerjaan lapangan.<br/>"
        "• <b>Accountable (A):</b> Anda selaku Project Lead yang memegang tanggung jawab akhir atas kesuksesan hasil pekerjaan.<br/>"
        "• <b>Consulted (C):</b> Pihak ahli yang dimintai pendapat teknis (spesifikasi, konfigurasi, kalibrasi).<br/>"
        "• <b>Informed (I):</b> Pihak yang menerima pemberitahuan mengenai progres dan kesiapan sistem.",
        st_body
    ))

    story.append(Paragraph("Alur Eskalasi Masalah (Escalation Path)", st_h2))
    story.append(Paragraph(
        "1. <b>Kendala Jaringan / IP:</b> Hubungi Supervisor IT Network jika ping time out lebih dari 15 menit.<br/>"
        "2. <b>Kendala Meter / CT:</b> Hubungi Teknisi Listrik Maintenance jika meter fisik tidak menyala atau CT belum terkoneksi.<br/>"
        "3. <b>Kendala Gateway / Konversi:</b> Hubungi Engineer IoT jika paket Modbus tidak berhasil di-encode ke JSON/MQTT stream.<br/>"
        "4. <b>Kendala Approval Hardware:</b> Laporkan kepada Manager Maintenance jika form pengadaan mengalami hambatan administrasi.",
        st_body
    ))

    story.append(PageBreak())

    # =========================================================================
    # HALAMAN 8: BAB 7 (TRANSFORMASI DATA MENTAH KE DASHBOARD ANALITIK)
    # =========================================================================
    story.append(Paragraph("BAB 7: Transformasi Data Mentah ke Dashboard Analitik Modern", st_h1))
    story.append(Paragraph(
        "Keluhan Anda sangat tepat: <i>'Visualisasi dari pihak IoT hanya sebatas angka mentah yang lewat di bagian IT'</i>. "
        "Angka mentah tanpa konteks tidak memiliki nilai strategis bagi pabrik. Dashboard telemetri modern yang Anda kembangkan "
        "mengubah angka-angka tersebut menjadi 5 modul informasi analitik tingkat tinggi:",
        st_body
    ))

    dash_table_data = [
        [Paragraph("Data Mentah IoT Eksisting", st_th), Paragraph("Masalah Data Mentah", st_th), Paragraph("Transformasi Dashboard Analitik Anda", st_th), Paragraph("Nilai Manfaat Bisnis", st_th)],
        [
            Paragraph("Daftar Angka kW per meter<br/>(misal: 105.4 kW)", st_td),
            Paragraph("Hanya snapshot sesaat, tidak tahu apakah daya sedang naik atau turun.", st_td),
            Paragraph("<b>Kurva Beban 24 Jam Terakhir</b> interaktif dengan visualisasi gradient fill dan time-scrubbing.", st_td),
            Paragraph("Mendeteksi tren konsumsi daya puncak (Peak Demand) dan pola kerja tiap shift produksi.", st_td)
        ],
        [
            Paragraph("Angka kumulatif kWh<br/>(misal: 1.240.500 kWh)", st_td),
            Paragraph("Angka terlalu besar, tidak menunjukkan pemakaian hari ini.", st_td),
            Paragraph("<b>Kalkulasi Energi Harian Otomatis</b> (reset pukul 00.00) dan konversi biaya listrik rupiah.", st_td),
            Paragraph("Memantau langsung efisiensi biaya listrik operasional per hari terhadap target budget.", st_td)
        ],
        [
            Paragraph("Nilai Power Factor<br/>(misal: 0.81)", st_td),
            Paragraph("Tidak ada peringatan jika nilai di bawah standar PLN 0.85.", st_td),
            Paragraph("<b>Status Badge Dinamis & Color Coding:</b> Hijau (≥0.85) dan Merah Alert (<0.85).", st_td),
            Paragraph("Mencegah denda kelebihan pemakaian daya reaktif (kVARh) dari PLN yang bernilai puluhan juta rupiah.", st_td)
        ],
        [
            Paragraph("Status Online Device<br/>(misal: IP 10.41.47.12)", st_td),
            Paragraph("Hanya tahu koneksi IT, tidak tahu peralatan apa yang sedang mati.", st_td),
            Paragraph("<b>Activity Monitoring Mesin Utama:</b> Forging Press 2500T, Kompresor GA-90, Pompa Cooling.", st_td),
            Paragraph("Visibilitas status operasional mesin kritikal secara real-time untuk tim Plant Maintenance.", st_td)
        ],
        [
            Paragraph("Tidak ada data lingkungan", st_td),
            Paragraph("Tidak mendukung pelaporan keberlanjutan industri (ESG).", st_td),
            Paragraph("<b>Indikator Emisi Karbon Otomatis</b> menggunakan faktor emisi grid Jamali (0.79 kg CO₂e/kWh).", st_td),
            Paragraph("Menyediakan data audit emisi karbon resmi untuk pemenuhan sertifikasi ISO 50001 & ESG.", st_td)
        ],
    ]
    t_dash = Table(dash_table_data, colWidths=[3.2 * cm, 3.8 * cm, 5.4 * cm, 5.0 * cm])
    t_dash.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), NAVY),
        ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, BG_LIGHT]),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    story.append(t_dash)
    story.append(Spacer(1, 2 * mm))

    story.append(Paragraph("Integrasi Blueprint Single Line Diagram (SLD) Schneider SM6", st_h2))
    story.append(Paragraph(
        "Keunggulan utama dashboard yang baru Anda selesaikan adalah tombol <b>Blueprint HD</b> yang menyajikan skema gardu 20kV. "
        "Fitur ini memungkinkan operator langsung melihat keterkaitan kelistrikan antara kubikel incoming PLN ➔ cubicle metering ➔ 6 transformator distribusi Factory 1. "
        "Hal ini menjembatani data digital dengan tata letak fisik sebenarnya di lapangan.",
        st_body
    ))

    story.append(PageBreak())

    # =========================================================================
    # HALAMAN 9: BAB 8 (SISTEM PERINGATAN DINI & MANAJEMEN AMBANG BATAS)
    # =========================================================================
    story.append(Paragraph("BAB 8: Sistem Peringatan Dini (Early Warning System) & Alert Matrix", st_h1))
    story.append(Paragraph(
        "Dashboard EMS tidak boleh pasif menunggu operator melihat layar. Sistem harus memiliki kecerdasan buatan dan logika aturan (rule engine) "
        "untuk mendeteksi anomali sebelum terjadi gangguan listrik besar atau trip transformator:",
        st_body
    ))

    story.append(Paragraph("1. Matriks Ambang Batas Operasional (Threshold Matrix)", st_h2))
    
    alert_table_data = [
        [Paragraph("Parameter Listrik", st_th), Paragraph("Kondisi Normal", st_th), Paragraph("Batas Peringatan (Warning)", st_th), Paragraph("Batas Kritis (Critical Alarm)", st_th), Paragraph("Tindakan Cepat Lapangan", st_th)],
        [
            Paragraph("<b>Tegangan 3-Phase (V L-L)</b>", st_td),
            Paragraph("380 V ± 5%<br/>(361V – 399V)", st_td),
            Paragraph("< 360 V atau > 400 V<br/>(Deviasi 5%–10%)", st_td),
            Paragraph("< 342 V atau > 418 V<br/>(Deviasi > 10%)", st_td),
            Paragraph("Periksa tap changer transformator atau koordinasi gangguan tegangan dengan penyulang PLN.", st_td)
        ],
        [
            Paragraph("<b>Ketidakseimbangan Tegangan</b>", st_td),
            Paragraph("Unbalance < 2%", st_td),
            Paragraph("2.0% s/d 3.0%", st_td),
            Paragraph("> 3.0% (Bahaya Motor)", st_td),
            Paragraph("Periksa distribusi beban 1-fasa pada panel penerangan dan stop kontak agar seimbang.", st_td)
        ],
        [
            Paragraph("<b>Beban Arus (Current Ampere)</b>", st_td),
            Paragraph("< 80% Rating Breaker", st_td),
            Paragraph("80% – 90% Kapasitas", st_td),
            Paragraph("> 90% Overload", st_td),
            Paragraph("Lakukan load shedding (pelepasan beban non-prioritas) untuk mencegah breaker trip mendadak.", st_td)
        ],
        [
            Paragraph("<b>Power Factor (Cos φ)</b>", st_td),
            Paragraph("0.88 s/d 0.98", st_td),
            Paragraph("0.85 s/d 0.87", st_td),
            Paragraph("< 0.85 (Kena Denda)", st_td),
            Paragraph("Periksa Capacitor Bank di LMVDP; pastikan step regulator kapasitor aktif bekerja.", st_td)
        ],
        [
            Paragraph("<b>Status Komunikasi Gateway</b>", st_td),
            Paragraph("Koneksi Online (< 2s)", st_td),
            Paragraph("Timeout 30–60 detik", st_td),
            Paragraph("Offline > 5 menit", st_td),
            Paragraph("Cek power supply 24V gateway, lampu link switch IT, dan kabel LAN di Electrical Room.", st_td)
        ],
    ]
    t_alert = Table(alert_table_data, colWidths=[3.2 * cm, 2.8 * cm, 3.2 * cm, 3.2 * cm, 5.0 * cm])
    t_alert.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), NAVY),
        ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, BG_LIGHT]),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    story.append(t_alert)
    story.append(Spacer(1, 2 * mm))

    story.append(Paragraph("2. Alur Pengiriman Notifikasi Alarm", st_h2))
    story.append(Paragraph(
        "• <b>Level 1 (Visual Dashboard):</b> Header meter berubah warna menjadi kuning/merah, angka berkedip, dan muncul di daftar <i>'Perlu Perhatian'</i>.<br/>"
        "• <b>Level 2 (Email Alert Otomatis):</b> Sistem mengirim email ringkasan ke tim Maintenance jika anomali berlangsung lebih dari 10 menit.<br/>"
        "• <b>Level 3 (Audit Log):</b> Setiap kejadian alarm terekam otomatis pada database lokal (Timestamp, Nama Meter, Nilai Ekstrem, Durasi Anomali) untuk keperluan root cause analysis (RCA).",
        st_body
    ))

    story.append(PageBreak())

    # =========================================================================
    # HALAMAN 10: BAB 9 (TROUBLESHOOTING & FAILURE MODE MITIGATION)
    # =========================================================================
    story.append(Paragraph("BAB 9: Matriks Troubleshooting Lapangan (Failure Modes & Mitigation)", st_h1))
    story.append(Paragraph(
        "Dalam implementasi telemetri kelistrikan, berbagai kendala lapangan pasti akan ditemui. "
        "Matriks berikut adalah panduan diagnosa cepat dan solusi tuntas yang dapat langsung Anda terapkan saat menghadapi kendala:",
        st_body
    ))

    fmea_data = [
        [Paragraph("Gejala Masalah Lapangan", st_th), Paragraph("Akar Penyebab (Root Cause)", st_th), Paragraph("Langkah Verifikasi Teknis", st_th), Paragraph("Solusi & Tindakan Korektif", st_th)],
        [
            Paragraph("<b>Gateway Timeout / Data Tidak Masuk</b>", st_td),
            Paragraph("1. Catu daya adaptor mati.<br/>2. Port switch IT disabled.<br/>3. IP bentrok (IP Conflict).", st_td),
            Paragraph("• Cek lampu LED power gateway.<br/>• Jalankan ping berkelanjutan.<br/>• Lepas kabel LAN dan ping IP tersebut.", st_td),
            Paragraph("Ganti ke PSU 24V DC industri, pasang di stop kontak panel baru, minta tim IT mengunci MAC address statis.", st_td)
        ],
        [
            Paragraph("<b>Angka Daya (kW) Terbaca Negatif (-)</b>", st_td),
            Paragraph("Polaritas kabel sekunder CT fasa terbalik arah.", st_td),
            Paragraph("Periksa tanda titik/panah CT (P1 menuju sumber PLN, P2 menuju beban pabrik).", st_td),
            Paragraph("Balik sambungan kabel sekunder S1 dan S2 pada terminal blok meter Schneider.", st_td)
        ],
        [
            Paragraph("<b>Angka Daya Jauh Lebih Kecil / Besar</b>", st_td),
            Paragraph("Setting rasio CT / PT di meter belum disesuaikan dengan fisik lapangan.", st_td),
            Paragraph("Bandingkan menu konfigurasi meter dengan nameplate fisik CT (misal 500/5A tapi terset 100/5A).", st_td),
            Paragraph("Masuk ke menu password meter Schneider, sesuaikan CT Primary dan Secondary ke nilai yang benar.", st_td)
        ],
        [
            Paragraph("<b>Angka Terbaca Nilai Raksasa Tak Wajar</b>", st_td),
            Paragraph("Endianness byte order pada driver parser Modbus terbalik.", st_td),
            Paragraph("Bandingkan raw hex buffer (0x436A...) terhadap standar IEEE 754 float.", st_td),
            Paragraph("Ubah konfigurasi pembacaan dari Little-Endian (CDAB) ke Big-Endian (ABCD) pada skrip parsing.", st_td)
        ],
        [
            Paragraph("<b>Sering Putus-Nyambung (Intermittent)</b>", st_td),
            Paragraph("Interferensi elektromagnetik (EMI) atau resistor terminasi ketiadaan.", st_td),
            Paragraph("Periksa jalur kabel LAN/RS485 apakah menempel pada kabel power 20kV.", st_td),
            Paragraph("Pasang resistor terminasi 120 Ohm di meter ujung, pisahkan jalur konduit sejauh min. 20 cm.", st_td)
        ],
    ]
    t_fmea = Table(fmea_data, colWidths=[3.8 * cm, 4.4 * cm, 4.4 * cm, 4.8 * cm])
    t_fmea.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), NAVY),
        ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, BG_LIGHT]),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    story.append(t_fmea)
    story.append(Spacer(1, 2 * mm))

    story.append(Paragraph("Golden Rules Penanganan Troubleshooting:", st_h2))
    story.append(Paragraph(
        "1. <b>Jangan Mengubah Wiring Saat Bertegangan:</b> Selalu gunakan multimeter penguji sebelum menyentuh terminal kabel.<br/>"
        "2. <b>Catat Setiap Perubahan Parameter:</b> Dokumentasikan setiap perubahan IP, Slave ID, atau rasio CT agar rekan tim dapat melacak riwayatnya.<br/>"
        "3. <b>Simpan Backup Konfigurasi:</b> Backup file konfigurasi gateway konverter dan database dashboard secara rutin setiap minggu.",
        st_body
    ))

    story.append(PageBreak())

    # =========================================================================
    # HALAMAN 11: BAB 10 (MASTER CHECKLIST & LEMBAR PENGESAHAN PROYEK)
    # =========================================================================
    story.append(Paragraph("BAB 10: Master Checklist Audit Kesiapan & Lembar Pengesahan", st_h1))
    story.append(Paragraph(
        "Gunakan lembar periksa (*Master Checklist*) 20 poin ini sebagai instrumen evaluasi harian Anda. "
        "Setiap item wajib diverifikasi sebelum proyek dinyatakan selesai secara resmi (Sign-Off):",
        st_body
    ))

    chk_table_data = [
        [Paragraph("No", st_th), Paragraph("Item Pemeriksaan Teknis & Manajerial", st_th), Paragraph("Divisi PIC", st_th), Paragraph("Status Kesiapan", st_th)],
        [Paragraph("1", st_td), Paragraph("Kabel LAN Cat6 Electrical Room terpasang rapi dalam konduit", st_td), Paragraph("IT / Listrik", st_td), Paragraph("[  ] Selesai", st_td_bold)],
        [Paragraph("2", st_td), Paragraph("Port switch IT terhubung aktif dan lampu link menyala hijau", st_td), Paragraph("IT Network", st_td), Paragraph("[  ] Selesai", st_td_bold)],
        [Paragraph("3", st_td), Paragraph("IP Address statis gateway telah dialokasikan dan bebas konflik", st_td), Paragraph("IT Network", st_td), Paragraph("[  ] Selesai", st_td_bold)],
        [Paragraph("4", st_td), Paragraph("Port 502 Modbus TCP dibuka di firewall jaringan lokal", st_td), Paragraph("IT Network", st_td), Paragraph("[  ] Selesai", st_td_bold)],
        [Paragraph("5", st_td), Paragraph("Pengajuan pembelian Box Panel, PSU 24V, Stop Kontak di-ACC", st_td), Paragraph("Project Lead", st_td), Paragraph("[  ] Selesai", st_td_bold)],
        [Paragraph("6", st_td), Paragraph("Box panel pelindung terpasang kokoh dengan proteksi debu IP54/65", st_td), Paragraph("Tim IoT / MTC", st_td), Paragraph("[  ] Selesai", st_td_bold)],
        [Paragraph("7", st_td), Paragraph("Power Supply 24V DC terpasang rapi pada DIN Rail dengan proteksi MCB", st_td), Paragraph("Tim IoT / MTC", st_td), Paragraph("[  ] Selesai", st_td_bold)],
        [Paragraph("8", st_td), Paragraph("Stop kontak 3-lubang terpasang di 9 titik panel gardu dengan arde baik", st_td), Paragraph("Maintenance", st_td), Paragraph("[  ] Selesai", st_td_bold)],
        [Paragraph("9", st_td), Paragraph("Nilai tahanan grounding terukur < 2.0 Ohm pada bodi box dan stop kontak", st_td), Paragraph("Maintenance", st_td), Paragraph("[  ] Selesai", st_td_bold)],
        [Paragraph("10", st_td), Paragraph("Uji coba penarikan data perdana hari Senin berhasil tanpa timeout", st_td), Paragraph("Project Lead", st_td), Paragraph("[  ] Selesai", st_td_bold)],
        [Paragraph("11", st_td), Paragraph("Komparasi 3 Titik: Angka fisik display panel vs dashboard cocok (±0.2%)", st_td), Paragraph("Project Lead", st_td), Paragraph("[  ] Selesai", st_td_bold)],
        [Paragraph("12", st_td), Paragraph("Rasio pengali CT dan PT telah dicocokkan dengan nameplate aktual", st_td), Paragraph("Maintenance", st_td), Paragraph("[  ] Selesai", st_td_bold)],
        [Paragraph("13", st_td), Paragraph("Polaritas seluruh CT fasa benar (tidak ada angka daya kW yang negatif)", st_td), Paragraph("Maintenance", st_td), Paragraph("[  ] Selesai", st_td_bold)],
        [Paragraph("14", st_td), Paragraph("Tampilan kurva beban 24 jam di dashboard ter-update secara berkala", st_td), Paragraph("Project Lead", st_td), Paragraph("[  ] Selesai", st_td_bold)],
        [Paragraph("15", st_td), Paragraph("Kalkulasi biaya listrik harian dan estimasi emisi karbon (ESG) aktif", st_td), Paragraph("Project Lead", st_td), Paragraph("[  ] Selesai", st_td_bold)],
        [Paragraph("16", st_td), Paragraph("Fitur Blueprint Gardu 20kV Schneider SM6 dapat dibuka instan bebas scroll", st_td), Paragraph("Project Lead", st_td), Paragraph("[  ] Selesai", st_td_bold)],
        [Paragraph("17", st_td), Paragraph("Sistem alert batas peringatan tegangan, arus, dan Power Factor berfungsi", st_td), Paragraph("Project Lead", st_td), Paragraph("[  ] Selesai", st_td_bold)],
        [Paragraph("18", st_td), Paragraph("Penyuluhan singkat operasional dashboard kepada operator maintenance", st_td), Paragraph("Project Lead", st_td), Paragraph("[  ] Selesai", st_td_bold)],
        [Paragraph("19", st_td), Paragraph("Seluruh data meter tersimpan aman dalam database lokal ber-backup", st_td), Paragraph("IT / Project", st_td), Paragraph("[  ] Selesai", st_td_bold)],
        [Paragraph("20", st_td), Paragraph("Dokumen serah terima operasional ditandatangani oleh seluruh pihak", st_td), Paragraph("Semua Pihak", st_td), Paragraph("[  ] Selesai", st_td_bold)],
    ]
    t_chk = Table(chk_table_data, colWidths=[0.8 * cm, 10.6 * cm, 3.2 * cm, 2.8 * cm])
    t_chk.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), NAVY),
        ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
        ('ALIGN', (0, 0), (0, -1), 'CENTER'),
        ('ALIGN', (2, 0), (-1, -1), 'CENTER'),
        ('TOPPADDING', (0, 0), (-1, -1), 1.6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 1.6),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, BG_LIGHT]),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    story.append(t_chk)
    story.append(Spacer(1, 2 * mm))

    # Signature Block
    sig_data = [
        [
            Paragraph("<b>Dibuat & Divalidasi Oleh:</b><br/><br/><br/><br/><u>__________________________</u><br/>Project Lead / Engineering", st_body),
            Paragraph("<b>Dikoordinasikan Oleh:</b><br/><br/><br/><br/><u>__________________________</u><br/>Team Lead IoT & Otomasi", st_body),
            Paragraph("<b>Diverifikasi Jaringan Oleh:</b><br/><br/><br/><br/><u>__________________________</u><br/>Supervisor IT Network", st_body),
            Paragraph("<b>Disetujui Oleh:</b><br/><br/><br/><br/><u>__________________________</u><br/>Manager Maintenance & Engineering", st_body),
        ]
    ]
    t_sig = Table(sig_data, colWidths=[4.3 * cm, 4.3 * cm, 4.3 * cm, 4.5 * cm])
    t_sig.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('TOPPADDING', (0, 0), (-1, -1), 2),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 2),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
    ]))
    
    story.append(KeepTogether([
        HRFlowable(width="100%", thickness=0.8, color=BORDER, spaceAfter=4, spaceBefore=2),
        t_sig
    ]))

    doc.build(story, canvasmaker=MasterGuideNumberedCanvas)
    print("MASTER GUIDE GENERATED SUCCESSFULLY:", output_pdf)

if __name__ == "__main__":
    build_pdf()
