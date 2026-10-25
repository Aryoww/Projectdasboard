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

class ActionLearningNumberedCanvas(canvas.Canvas):
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
        
        # Running Header (all pages)
        self.setFont("Helvetica-Bold", 8)
        self.setFillColor(colors.HexColor("#0f172a"))
        self.drawString(1.8 * cm, 28.3 * cm, "PANDUAN AKSI LAPANGAN & KURIKULUM BELAJAR PROYEK TELEMETRI SCHNEIDER")
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#64748b"))
        self.drawRightString(19.2 * cm, 28.3 * cm, "PT MUSASHI AUTO PARTS INDONESIA")
        
        self.setStrokeColor(colors.HexColor("#cbd5e1"))
        self.setLineWidth(0.6)
        self.line(1.8 * cm, 28.1 * cm, 19.2 * cm, 28.1 * cm)

        # Running Footer (all pages)
        self.setStrokeColor(colors.HexColor("#e2e8f0"))
        self.setLineWidth(0.6)
        self.line(1.8 * cm, 1.5 * cm, 19.2 * cm, 1.5 * cm)
        
        self.setFont("Helvetica-Bold", 7.5)
        self.setFillColor(colors.HexColor("#0284c7"))
        self.drawString(1.8 * cm, 1.15 * cm, "PANDUAN PRAKTIS HARIAN")
        
        self.setFont("Helvetica", 7.5)
        self.setFillColor(colors.HexColor("#64748b"))
        self.drawString(5.5 * cm, 1.15 * cm, "- Checklist Aktual Masuk Kerja & Roadmap Penguasaan Materi")
        self.drawRightString(19.2 * cm, 1.15 * cm, f"Halaman {self._pageNumber} dari {page_count}")
        
        self.restoreState()


def build_action_learning_pdf():
    output_pdf = r"d:\Projectdasboard\Panduan_Aksi_Harian_Dan_Materi_Belajar_EMS.pdf"
    
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
    BORDER = colors.HexColor("#cbd5e1")       # Slate 300
    WARN_BG = colors.HexColor("#fffbeb")      # Amber 50
    WARN_BORDER = colors.HexColor("#f59e0b")  # Amber 500
    WARN_TEXT = colors.HexColor("#92400e")    # Amber 800
    SUCCESS_BG = colors.HexColor("#f0fdf4")   # Green 50
    SUCCESS_BORDER = colors.HexColor("#22c55e")
    SUCCESS_TEXT = colors.HexColor("#166534")

    # Typography Styles
    st_title = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=15,
        leading=19,
        textColor=PRIMARY,
        spaceAfter=3
    )

    st_subtitle = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=NAVY,
        spaceAfter=8
    )

    st_h1 = ParagraphStyle(
        'Heading1',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14.5,
        textColor=NAVY,
        spaceBefore=7,
        spaceAfter=4,
        keepWithNext=True
    )

    st_h2 = ParagraphStyle(
        'Heading2',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=PRIMARY,
        spaceBefore=5,
        spaceAfter=3,
        keepWithNext=True
    )

    st_body = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.3,
        leading=12,
        textColor=TEXT_DARK,
        spaceAfter=4,
        alignment=4
    )

    st_body_bold = ParagraphStyle(
        'BodyBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.3,
        leading=12,
        textColor=TEXT_DARK
    )

    st_callout_warn = ParagraphStyle(
        'CalloutWarn',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11.5,
        textColor=WARN_TEXT
    )

    st_callout_success = ParagraphStyle(
        'CalloutSuccess',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11.5,
        textColor=SUCCESS_TEXT
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
    # HALAMAN 1: ACTION PLAN AKTUAL HARI INI (SENIN) - RUNDOWN JAM DEMI JAM
    # =========================================================================
    story.append(Paragraph("Panduan Praktis Lapangan: Apa yang Harus Dilakukan Saat Masuk Kerja Hari Ini", st_title))
    story.append(Paragraph("Rundown Jam-demi-Jam, Target Hasil Nyata, dan Tindakan Konkret di Lapangan", st_subtitle))

    intro_box = [[
        Paragraph("<b>KONDISI AWAL ANDA HARI INI:</b><br/>"
                  "1. Data panel Schneider utama sudah ditarik. 2 Electrical Room belum terintegrasi.<br/>"
                  "2. Electrical Room A sudah ada kabel fisik Ethernet menuju switch. Hari ini adalah hari pembuktian penarikan data.<br/>"
                  "3. Tim IoT kemarin meminta: 1 Box Panel, 1 PSU 24V DC, dan 9 Stop Kontak isi 3.<br/>"
                  "4. Data visualisasi pihak IoT saat ini masih berupa angka mentah yang lewat di IT (belum ada kurva 24h, cost, ESG).", st_callout_warn)
    ]]
    t_intro = Table(intro_box, colWidths=[17.4 * cm])
    t_intro.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), WARN_BG),
        ('BOX', (0, 0), (-1, -1), 1, WARN_BORDER),
        ('TOPPADDING', (0, 0), (-1, -1), 5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
    ]))
    story.append(t_intro)
    story.append(Spacer(1, 2 * mm))

    story.append(Paragraph("Jadwal & Rundown Eksekusi Hari Ini (Senin)", st_h1))

    schedule_data = [
        [Paragraph("Waktu (WIB)", st_th), Paragraph("Aktivitas yang Harus Anda Lakukan", st_th), Paragraph("Output / Bukti Hasil", st_th)],
        [
            Paragraph("<b>07.30 – 08.15</b><br/>Persiapan Awal", st_td),
            Paragraph("1. Siapkan laptop kerja yang sudah terinstall tool penguji (Modbus Poll / QModMaster / Python).<br/>"
                      "2. Siapkan kabel LAN Cat6 patchcord cadangan (3 meter) & adapter USB-LAN.<br/>"
                      "3. Cetak / buka <b>Laporan Progres</b> yang sudah kita buat untuk pegangan diskusi atasan.", st_td),
            Paragraph("Laptop & alat uji siap di tas; dokumen laporan siap ditunjukkan.", st_td_bold)
        ],
        [
            Paragraph("<b>08.15 – 09.00</b><br/>Koordinasi Atasan", st_td),
            Paragraph("1. Temui Supervisor / Manager Maintenance.<br/>"
                      "2. Sampaikan: <i>'Pak, data panel utama Schneider sudah siap di dashboard. Hari ini saya jadwalkan uji tarik data Electrical Room yang sudah ada kabel LAN-nya. Sekaligus kemarin tim IoT mengajukan kebutuhan 1 box panel, 1 PSU 24V, dan stop kontak untuk standardisasi 2 gardu.'</i>", st_td),
            Paragraph("Atasan terinformasikan dan menyetujui langkah kerja hari ini.", st_td_bold)
        ],
        [
            Paragraph("<b>09.00 – 10.00</b><br/>Temui Tim IoT & IT", st_td),
            Paragraph("1. Temui PIC tim IoT: minta kepastian IP Gateway Modbus Electrical Room A, Slave ID meter, dan port switch.<br/>"
                      "2. Temui tim Network IT: pastikan port switch tempat kabel LAN terpasang sudah dibuka (enabled) dan port 502 Modbus TCP tidak diblokir firewall.", st_td),
            Paragraph("Mendapatkan IP statis pasti & konfirmasi port switch aktif.", st_td_bold)
        ],
        [
            Paragraph("<b>10.00 – 12.00</b><br/>Eksekusi Lapangan", st_td),
            Paragraph("1. Masuk ke Electrical Room A bersama teknisi listrik/IoT (Gunakan APD lengkap).<br/>"
                      "2. Periksa fisik kabel LAN di switch: lampu link hijau menyala.<br/>"
                      "3. Colok laptop ke jaringan yang sama, lakukan <font face='Courier'>ping -t [IP_Gateway]</font>.<br/>"
                      "4. Buka Modbus tester, baca parameter Voltase, Arus, kW.<br/>"
                      "5. Catat angka pada display fisik meter Schneider untuk dicocokkan.", st_td),
            Paragraph("<b>Data berhasil ditarik perdana</b> & tabel perbandingan angka fisik tercatat.", st_td_bold)
        ],
        [
            Paragraph("<b>13.00 – 14.30</b><br/>Proses Pengadaan", st_td),
            Paragraph("1. Buat / tanda tangani form permohonan material (Purchase Requisition):<br/>"
                      "   • 1 Unit Box Panel Enclosure (IP54/65) uk. 400×300×200 mm.<br/>"
                      "   • 1 Unit Power Supply 24V DC DIN Rail (min. 3A / 72W).<br/>"
                      "   • 9 Buah Stop Kontak Panel isi 3 lubang heavy-duty.<br/>"
                      "2. Serahkan ke bagian purchasing / minta paraf manager.", st_td),
            Paragraph("Form pengadaan hardware masuk ke antrean purchasing.", st_td_bold)
        ],
        [
            Paragraph("<b>14.30 – 16.00</b><br/>Integrasi Dashboard", st_td),
            Paragraph("1. Masukkan IP address dan register meter Electrical Room A ke skrip parser dashboard.<br/>"
                      "2. Verifikasi angka muncul di dashboard web lokal Anda (kW, kurva 24h, status online).<br/>"
                      "3. Pastikan tidak ada data yang nilainya negatif atau melompat tak wajar.", st_td),
            Paragraph("Meter Electrical Room A tampil hidup di dashboard telemetri.", st_td_bold)
        ],
        [
            Paragraph("<b>16.00 – 17.00</b><br/>Evaluasi & Lapor", st_td),
            Paragraph("1. Buat catatan 1 lembar capaian hari ini.<br/>"
                      "2. Laporkan singkat ke Manager: <i>'Pak, uji tarik data Electrical Room A berhasil dan nilainya cocok dengan display fisik. Data sudah masuk ke dashboard. Form pengadaan box dan PSU sudah diserahkan.'</i>", st_td),
            Paragraph("Progress tuntas, reputasi profesional Anda terbukti unggul.", st_td_bold)
        ],
    ]
    t_sched = Table(schedule_data, colWidths=[2.8 * cm, 10.6 * cm, 4.0 * cm])
    t_sched.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), NAVY),
        ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, BG_LIGHT]),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    story.append(t_sched)

    story.append(PageBreak())

    # =========================================================================
    # HALAMAN 2: PROSEDUR TEKNIS DI ELECTRICAL ROOM A (STEP-BY-STEP DI LAPANGAN)
    # =========================================================================
    story.append(Paragraph("SOP Praktis Saat Berada di Dalam Electrical Room A", st_h1))
    story.append(Paragraph("Panduan Teknis Eksekusi Kabel, Ping Test, Software Modbus, dan Verifikasi Angka", st_subtitle))

    story.append(Paragraph("Langkah 1: Pemeriksaan Fisik & Titik Sambungan", st_h2))
    story.append(Paragraph(
        "1. Cari port Ethernet tempat kabel LAN Electrical Room A dicolokkan. Pastikan lampu <b>LINK (hijau) menyala stabil</b>. "
        "Jika lampu mati sama sekali: periksa apakah port switch IT disabled, atau kabel RJ45 putus/longgar.<br/>"
        "2. Cari modul gateway konverter (misal Schneider Link150 / EGX / Moxa). Periksa lampu indikator Power (harus menyala hijau) "
        "dan lampu Tx/Rx serial RS-485 (harus berkedip-kedip menunjukkan adanya query polling).",
        st_body
    ))

    story.append(Paragraph("Langkah 2: Uji Jaringan dari Laptop Commissioning", st_h2))
    story.append(Paragraph(
        "1. Colokkan kabel LAN laptop Anda ke port switch yang sama atau hubungkan ke jaringan LAN pabrik.<br/>"
        "2. Atur IP laptop Anda satu subnet dengan gateway. (Contoh: jika gateway <font face='Courier'>10.41.47.122</font>, "
        "atur IP laptop manual ke <font face='Courier'>10.41.47.200</font>, Netmask <font face='Courier'>255.255.255.0</font>).<br/>"
        "3. Buka Command Prompt (CMD), ketik perintah ping berkelanjutan:<br/>"
        "&nbsp;&nbsp;&nbsp;&nbsp;<font face='Courier' color='#0284c7'>ping 10.41.47.122 -t</font><br/>"
        "&nbsp;&nbsp;&nbsp;&nbsp;<b>Kriteria Lolos:</b> Reply time &lt; 5ms, TTL 64/128, dan loss 0%.<br/>"
        "4. Uji apakah Port Modbus 502 terbuka menggunakan PowerShell:<br/>"
        "&nbsp;&nbsp;&nbsp;&nbsp;<font face='Courier' color='#0284c7'>Test-NetConnection -ComputerName 10.41.47.122 -Port 502</font><br/>"
        "&nbsp;&nbsp;&nbsp;&nbsp;<b>Kriteria Lolos:</b> <font color='#16a34a'><b>TcpTestSucceeded : True</b></font>.",
        st_body
    ))

    story.append(Paragraph("Langkah 3: Pengujian Baca Register Menggunakan Software Tester", st_h2))
    story.append(Paragraph(
        "Gunakan software gratis <b>QModMaster</b> atau <b>Modbus Poll</b>:<br/>"
        "• <b>Connection:</b> Modbus TCP, IP Address = [IP Gateway], Port = 502.<br/>"
        "• <b>Slave ID (Unit ID):</b> Biasanya 1 (atau tanyakan ke tim IoT / cek menu display meter).<br/>"
        "• <b>Function Code:</b> 03 (Read Holding Registers).<br/>"
        "• <b>Start Address:</b> 3020 (untuk Tegangan L-L) atau 3060 (untuk Total kW).<br/>"
        "• <b>Data Format:</b> Float 32 (Big-Endian / ABCD).<br/>"
        "• Tekan tombol <b>Read / Poll</b>. Amati nilai angka yang keluar.",
        st_body
    ))

    story.append(Paragraph("Langkah 4: Tabel Validasi Komparasi di Lokasi (Catat Langsung di Kertas)", st_h2))
    
    val_table = [
        [Paragraph("Parameter yang Diuji", st_th), Paragraph("Display LCD Fisik Meter", st_th), Paragraph("Hasil Baca Laptop / Gateway", st_th), Paragraph("Status Validasi", st_th)],
        [Paragraph("Tegangan Fasa-Fasa (V L-L)", st_td), Paragraph("Contoh: 382.4 V", st_td), Paragraph("Harus terbaca ~382 V", st_td), Paragraph("[  ] Cocok / Match", st_td_bold)],
        [Paragraph("Tegangan Fasa-Netral (V L-N)", st_td), Paragraph("Contoh: 220.8 V", st_td), Paragraph("Harus terbaca ~221 V", st_td), Paragraph("[  ] Cocok / Match", st_td_bold)],
        [Paragraph("Arus Total (Current A)", st_td), Paragraph("Contoh: 145.2 A", st_td), Paragraph("Harus terbaca ~145 A", st_td), Paragraph("[  ] Cocok / Match", st_td_bold)],
        [Paragraph("Daya Aktif (Active Power kW)", st_td), Paragraph("Contoh: 88.6 kW", st_td), Paragraph("Harus positif (+) & cocok", st_td), Paragraph("[  ] Cocok / Match", st_td_bold)],
        [Paragraph("Power Factor (Cos φ)", st_td), Paragraph("Contoh: 0.92", st_td), Paragraph("Harus terbaca 0.92", st_td), Paragraph("[  ] Cocok / Match", st_td_bold)],
        [Paragraph("Total Energi (kWh)", st_td), Paragraph("Contoh: 452.120 kWh", st_td), Paragraph("Harus cocok angka bulatnya", st_td), Paragraph("[  ] Cocok / Match", st_td_bold)],
    ]
    t_val = Table(val_table, colWidths=[4.2 * cm, 4.4 * cm, 4.8 * cm, 4.0 * cm])
    t_val.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), NAVY),
        ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, BG_LIGHT]),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    story.append(t_val)
    story.append(Spacer(1, 2 * mm))

    story.append(Paragraph("Langkah 5: Apa yang Harus Dilakukan Jika Terjadi Error?", st_h2))
    story.append(Paragraph(
        "• <b>Jika 'Connection Refused':</b> Gateway belum menyala, kabel putus, atau IP salah.<br/>"
        "• <b>Jika 'Gateway Target Device Failed to Respond':</b> Kabel serial RS-485 antara gateway ke meter Schneider putus, Slave ID salah, atau baudrate tidak cocok (standar 19200 / 9600 bps 8-E-1).<br/>"
        "• <b>Jika angka keluar tapi nilainya aneh (misal 0.0000014):</b> Format float terbalik, ganti dari Little-Endian ke Big-Endian.",
        st_body
    ))

    story.append(PageBreak())

    # =========================================================================
    # HALAMAN 3: ROADMAP MATERI BELAJAR 1 - TEKNIK KELISTRIKAN & POWER METER
    # =========================================================================
    story.append(Paragraph("Materi Belajar Wajib 1: Konsep Kelistrikan 3-Fasa & Power Meter", st_h1))
    story.append(Paragraph("Fundamental Elektrikal yang Wajib Anda Kuasai Agar Paham Setiap Angka di Dashboard", st_subtitle))

    story.append(Paragraph("1. Mengapa Sistem Pabrik Menggunakan Listrik 3-Fasa?", st_h2))
    story.append(Paragraph(
        "Pabrik PT Musashi menggunakan sistem 3-fasa (Fasa R, S, T dan Netral N) karena motor-motor industri besar (Forging Press, Kompresor, Pompa) "
        "membutuhkan torsi putar yang konstan dan efisiensi daya tinggi.<br/>"
        "• <b>Tegangan Fasa-ke-Netral (V L-N):</b> Tegangan antara satu kawat fasa dengan kawat netral. Standar PLN = <b>220 Volt</b>.<br/>"
        "• <b>Tegangan Fasa-ke-Fasa (V L-L):</b> Tegangan antar kawat fasa (R-S, S-T, T-R). Hubungannya: V L-L = V L-N x akar(3) = 220 x 1.732 = <b>380 Volt</b>.<br/>"
        "• <i>Pada Gardu Schneider 20kV:</i> Sisi tegangan menengah sebelum trafo adalah <b>20.000 Volt</b>.",
        st_body
    ))

    story.append(Paragraph("2. Tiga Jenis Daya Listrik (Segitiga Daya / Power Triangle)", st_h2))
    story.append(Paragraph(
        "Banyak orang bingung membedakan kW, kVA, dan kVAR. Berikut penjelasan mudahnya:<br/>"
        "• <b>Daya Nyata / Semu (S) - Satuan kVA:</b> Total kapasitas daya yang disuplai PLN atau transformator. Rumus: S = akar(3) x V x I. "
        "Contoh: Trafo Factory 1 berkapasitas total <b>7.750 kVA</b>.<br/>"
        "• <b>Daya Aktif (P) - Satuan kW:</b> Daya nyata yang benar-benar diubah menjadi kerja mekanik (putaran motor press, angin kompresor, panas). "
        "Rumus: P = akar(3) x V x I x Cos phi. Ini angka utama di KPI dashboard Anda.<br/>"
        "• <b>Daya Reaktif (Q) - Satuan kVAR:</b> Daya yang dibutuhkan untuk membangkitkan medan magnet pada belitan motor dan trafo. Daya ini bolak-balik antara sumber dan beban.",
        st_body
    ))

    story.append(Paragraph("3. Mengapa Power Factor (Cos phi) Sangat Krusial?", st_h2))
    story.append(Paragraph(
        "• <b>Definisi:</b> Perbandingan antara Daya Aktif dengan Daya Nyata: Cos phi = P / S. Nilainya berkisar antara 0 sampai 1.0.<br/>"
        "• <b>Regulasi PLN:</b> Batas minimal Power Factor industri adalah <b>0.85</b>.<br/>"
        "• <b>Dampak Denda:</b> Jika Cos phi &lt; 0.85, PLN akan menagih <b>Denda kVARh</b> dengan tarif mahal yang dapat mencapai puluhan juta rupiah per bulan.<br/>"
        "• <b>Solusi Pabrik:</b> Memasang <i>Capacitor Bank</i> di ruang LMVDP. Di dashboard Anda, indikator Power Factor diberi badge hijau jika &ge; 0.85 dan merah jika &lt; 0.85.",
        st_body
    ))

    story.append(Paragraph("4. Cara Kerja Current Transformer (CT) & Pengali Meter", st_h2))
    story.append(Paragraph(
        "Kabel beban motor besar mengalirkan arus ratusan hingga ribuan Ampere (misal 500A). Power meter elektronik tidak bisa dialiri arus sebesar itu secara langsung.<br/>"
        "• <b>Fungsi CT:</b> Mentransformasikan arus primer yang besar (misal 0–500A) menjadi arus sekunder kecil standar industri (0–5A).<br/>"
        "• <b>Rasio CT:</b> Jika terpasang CT bertuliskan <b>500/5A</b>, rasio pengalinya adalah 500 / 5 = 100.<br/>"
        "• <b>Artinya:</b> Jika meter membaca arus sekunder 1.5 Ampere, arus riil kabel adalah $1.5 \times 100 =$ <b>150 Ampere</b>.<br/>"
        "• <i>Pelajaran Penting:</i> Jika angka di dashboard Anda aneh (misal arus motor terbaca cuma 2 Ampere padahal motor jalan kencang), "
        "99% penyebabnya adalah rasio CT di meter Schneider belum di-setting!",
        st_body
    ))

    story.append(Paragraph("5. Akumulasi Energi (kWh) & Konversi Biaya / Emisi Karbon", st_h2))
    story.append(Paragraph(
        "• <b>Energi ($kWh$):</b> Daya dikalikan waktu. Beban 100 kW yang menyala selama 10 jam mengonsumsi energi: $100 \times 10 = 1.000\text{ kWh}$.<br/>"
        "• <b>Biaya Listrik:</b> Tarif industri golongan I3/I4 rata-rata sekitar <b>Rp 1.115 s/d Rp 1.500 per kWh</b>.<br/>"
        "• <b>Emisi Karbon (ESG):</b> Berdasarkan standar Kementerian ESDM untuk sistem grid Jawa-Madura-Bali (Jamali), "
        "faktor emisi adalah <b>0.79 kg CO₂e per kWh</b>. Setiap 1.000 kWh listrik menghasilkan 790 kg emisi karbon.",
        st_body
    ))

    story.append(PageBreak())

    # =========================================================================
    # HALAMAN 4: ROADMAP MATERI BELAJAR 2 - PROTOKOL MODBUS & JARINGAN IT
    # =========================================================================
    story.append(Paragraph("Materi Belajar Wajib 2: Protokol Modbus & Jaringan IT Industri", st_h1))
    story.append(Paragraph("Keahlian Komunikasi Data yang Membuat Anda Diakui Sebagai Engineer Otomasi Handal", st_subtitle))

    story.append(Paragraph("1. Apa Itu Modbus dan Mengapa Seluruh Industri Menggunakannya?", st_h2))
    story.append(Paragraph(
        "Modbus adalah protokol komunikasi standar terbuka (*open standard*) yang paling banyak digunakan di dunia otomasi industri sejak tahun 1979. "
        "Modbus menggunakan konsep <b>Client-Server (Master-Slave)</b>: server dashboard / gateway bertindak sebagai Master yang bertanya (request), "
        "dan power meter Schneider bertindak sebagai Slave yang menjawab (response).",
        st_body
    ))

    story.append(Paragraph("2. Perbedaan Modbus RTU vs Modbus TCP", st_h2))
    
    modbus_comp = [
        [Paragraph("Karakteristik", st_th), Paragraph("Modbus RTU (Serial RS-485)", st_th), Paragraph("Modbus TCP (Ethernet LAN)", st_th)],
        [Paragraph("<b>Media Fisik</b>", st_td), Paragraph("Kabel tembaga 2-wire twisted pair (Terminal A+ dan B-)", st_td), Paragraph("Kabel LAN UTP Cat6 (Konektor RJ45) / Wi-Fi", st_td)],
        [Paragraph("<b>Jarak Maksimal</b>", st_td), Paragraph("Hingga 1.200 meter tanpa repeater", st_td), Paragraph("100 meter per tarikan (bisa tak terbatas lewat switch/fiber)", st_td)],
        [Paragraph("<b>Pengalamatan</b>", st_td), Paragraph("Slave ID (Angka 1 s/d 247)", st_td), Paragraph("IP Address (misal 10.41.47.122) + Slave ID", st_td)],
        [Paragraph("<b>Kecepatan</b>", st_td), Paragraph("9.600 s/d 115.200 bps (lambat)", st_td), Paragraph("100 Mbps s/d 1 Gbps (sangat cepat)", st_td)],
        [Paragraph("<b>Port Standar</b>", st_td), Paragraph("COM Port / Serial Interface", st_td), Paragraph("TCP Port 502 (Standar Internasional IANA)", st_td)],
    ]
    t_modbus_comp = Table(modbus_comp, colWidths=[3.5 * cm, 7.0 * cm, 6.9 * cm])
    t_modbus_comp.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), NAVY),
        ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, BG_LIGHT]),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    story.append(t_modbus_comp)
    story.append(Spacer(1, 2 * mm))

    story.append(Paragraph("3. Tipe Register Modbus & Function Code", st_h2))
    story.append(Paragraph(
        "Di dalam memori meter Schneider, data disimpan dalam 4 jenis tabel:<br/>"
        "• <b>Discrete Inputs (FC 02):</b> Status biner Read-Only (misal status kontak saklar: Buka/Tutup).<br/>"
        "• <b>Coils (FC 01 / FC 05):</b> Status biner Read-Write (perintah relay trip remote).<br/>"
        "• <b>Input Registers (FC 04):</b> Angka 16-bit Read-Only dari sensor analog.<br/>"
        "• <b>Holding Registers (FC 03):</b> Tabel paling penting tempat seluruh data parameter listrik (V, A, kW, kWh) disimpan. "
        "Di dashboard Anda, 100% pembacaan menggunakan <b>Function Code 03 (Read Holding Registers)</b>.",
        st_body
    ))

    story.append(Paragraph("4. Mengapa Ada Istilah Big-Endian dan Little-Endian?", st_h2))
    story.append(Paragraph(
        "Angka float (desimal berpresisi tinggi seperti 382.45 Volt) membutuhkan 32 bit (4 byte = 2 register 16-bit).<br/>"
        "• Komputer atau mikrokontroler bisa menyimpan byte dengan urutan berbeda:<br/>"
        "  - <b>Big-Endian (ABCD):</b> Byte paling signifikan dikirim lebih dulu (Standar Schneider & PLC Eropa).<br/>"
        "  - <b>Little-Endian (DCBA):</b> Byte paling kecil dikirim lebih dulu (Standar prosesor Intel x86).<br/>"
        "  - <b>Byte-Swap (BADC) / Word-Swap (CDAB):</b> Variasi modifikasi.<br/>"
        "• <i>Aturan Emas:</i> Saat membaca meter Schneider, selalu pilih opsi <b>Big-Endian Float (High Word First)</b> pada library pemrograman Anda.",
        st_body
    ))

    story.append(Paragraph("5. Perintah Jaringan IT Dasar yang Wajib Anda Kuasai", st_h2))
    story.append(Paragraph(
        "Buka terminal PowerShell / Command Prompt di laptop Anda dan biasakan mengetik perintah berikut:<br/>"
        "1. <font face='Courier' color='#0284c7'>ipconfig</font> : Melihat IP address laptop Anda saat ini.<br/>"
        "2. <font face='Courier' color='#0284c7'>ping [IP_Target] -t</font> : Menguji konektivitas fisik kabel ke gateway tanpa henti.<br/>"
        "3. <font face='Courier' color='#0284c7'>tracert [IP_Target]</font> : Menelusuri switch mana yang dilewati paket data jika ping putus.<br/>"
        "4. <font face='Courier' color='#0284c7'>arp -a</font> : Menampilkan daftar MAC Address perangkat yang terhubung dalam satu switch.",
        st_body
    ))

    story.append(PageBreak())

    # =========================================================================
    # HALAMAN 5: ROADMAP MATERI BELAJAR 3 - HARDWARE, K3 GARDU, DAN KAMUS ISTILAH
    # =========================================================================
    story.append(Paragraph("Materi Belajar Wajib 3: Hardware Enclosure, K3 Gardu, & Kamus Istilah", st_h1))
    story.append(Paragraph("Memahami Standar Pabrik, Proteksi Lingkungan Industri, dan Istilah Penting", st_subtitle))

    story.append(Paragraph("1. Mengapa Tim IoT Meminta Box Panel Tambahan & PSU 24V?", st_h2))
    story.append(Paragraph(
        "Anda wajib memahami latar belakang teknis di balik permintaan tim IoT kemarin agar dapat menjelaskannya dengan tegas ke atasan:<br/>"
        "• <b>Debu Industri Bersifat Konduktif:</b> PT Musashi adalah industri komponen otomotif dengan lini proses Forging, Machining, dan Heat Treatment. "
        "Debu besi mikro yang melayang di udara dapat menempel pada PCB gateway elektronik dan memicu hubungan singkat (korsleting). "
        "Oleh karena itu, dibutuhkan <b>Box Panel Enclosure rating IP54/IP65</b> yang memiliki karet seal dan filter ventilasi.<br/>"
        "• <b>Kualitas Daya DC (Regulated 24V):</b> Perangkat IoT membutuhkan tegangan DC stabil tanpa riak (*ripple*). "
        "Jika hanya memakai adaptor HP murahan atau trafo abal-abal, lonjakan tegangan transien di ruang gardu 20kV saat breaker switching dapat merusak modul komunikasi. "
        "<b>Power Supply 24V DC DIN Rail industri</b> memiliki filter proteksi overvoltage dan output teregulasi.",
        st_body
    ))

    story.append(Paragraph("2. Prinsip Keselamatan K3 di Gardu Distribusi 20kV (Schneider SM6)", st_h2))
    story.append(Paragraph(
        "Gardu listrik Factory 1 menerima tegangan PLN 20.000 Volt. Bekerja di gardu menuntut kepatuhan K3 mutlak:<br/>"
        "• <b>Jarak Aman (Clearance Distance):</b> Jarak aman minimum terhadap bagian bertegangan 20kV adalah <b>1.5 meter</b>.<br/>"
        "• <b>Tiga Bagian Kubikel SM6:</b><br/>"
        "  1. <i>Kompartemen Busbar (Tegangan Menengah 20kV):</i> Tertutup rapat, terisolasi gas SF6, dilarang dibuka saat gardu menyala.<br/>"
        "  2. <i>Kompartemen Pemutus (Circuit Breaker / VCB):</i> Ruang kontak pemutus beban utama trafo.<br/>"
        "  3. <i>Kompartemen Tegangan Rendah (Low Voltage Compartment):</i> Pintu bagian atas tempat power meter digital Schneider dan terminal komunikasi RS-485 berada. "
        "<b>Inilah satu-satunya area tempat Anda dan tim IoT bekerja.</b>",
        st_body
    ))

    story.append(Paragraph("3. Kamus Istilah Industri yang Harus Anda Pahami Luar Kepala", st_h2))
    
    glossary_data = [
        [Paragraph("Istilah Industri", st_th), Paragraph("Singkatan / Definisi", st_th), Paragraph("Makna Praktis di Lapangan", st_th)],
        [Paragraph("<b>EMS</b>", st_td), Paragraph("Energy Management System", st_td), Paragraph("Sistem dashboard terpadu yang sedang Anda bangun untuk memantau listrik pabrik.", st_td)],
        [Paragraph("<b>SLD</b>", st_td), Paragraph("Single Line Diagram", st_td), Paragraph("Gambar blueprint skema satu garis aliran daya listrik dari PLN ke seluruh mesin.", st_td)],
        [Paragraph("<b>SM6</b>", st_td), Paragraph("Schneider Modular 6", st_td), Paragraph("Merk cubicle gardu tegangan menengah 20kV modular buatan Schneider Electric.", st_td)],
        [Paragraph("<b>LMVDP</b>", st_td), Paragraph("Low Voltage Main Distribution Panel", st_td), Paragraph("Panel induk tegangan rendah 380V keluaran transformator sebelum dibagi ke mesin.", st_td)],
        [Paragraph("<b>VCB</b>", st_td), Paragraph("Vacuum Circuit Breaker", st_td), Paragraph("Pemutus sirkuit tenaga menggunakan ruang hampa agar tidak terjadi busur api.", st_td)],
        [Paragraph("<b>CT / PT</b>", st_td), Paragraph("Current / Potential Transformer", st_td), Paragraph("Trafo penurun arus dan penurun tegangan untuk sinyal alat ukur meter digital.", st_td)],
        [Paragraph("<b>Cos φ (PF)</b>", st_td), Paragraph("Power Factor (Faktor Daya)", st_td), Paragraph("Efisiensi listrik motor; target pabrik minimal 0.85 agar tidak kena denda PLN.", st_td)],
        [Paragraph("<b>WBP / LWBP</b>", st_td), Paragraph("Waktu Beban Puncak (17–22 WIB)", st_td), Paragraph("Waktu tarif listrik PLN lebih mahal (faktor kali 1.5x) pada malam hari.", st_td)],
        [Paragraph("<b>Daisy Chain</b>", st_td), Paragraph("Rangkaian Berantai Serial", st_td), Paragraph("Metode sambungan kabel komunikasi dari meter 1 ke meter 2 lalu ke meter 3.", st_td)],
        [Paragraph("<b>ESG</b>", st_td), Paragraph("Environmental, Social, Governance", st_td), Paragraph("Standar audit keberlanjutan industri yang menuntut pelaporan emisi karbon pabrik.", st_td)],
    ]
    t_gloss = Table(glossary_data, colWidths=[2.8 * cm, 4.4 * cm, 10.2 * cm])
    t_gloss.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), NAVY),
        ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
        ('TOPPADDING', (0, 0), (-1, -1), 2.5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 2.5),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, BG_LIGHT]),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    story.append(t_gloss)

    story.append(PageBreak())

    # =========================================================================
    # HALAMAN 6: CHEAT SHEET LAPANGAN, PENCATATAN DATA, & DAILY CHECKLIST
    # =========================================================================
    story.append(Paragraph("Lembar Kerja Lapangan & Daily Checklist Mandiri", st_h1))
    story.append(Paragraph("Cetak Halaman Ini dan Bawa ke Lapangan Sebagai Catatan Pengujian Nyata", st_subtitle))

    story.append(Paragraph("1. Tabel Pencatatan Data Meter Aktual Lapangan (Hasil Pengecekan)", st_h2))
    
    blank_data = [
        [Paragraph("No", st_th), Paragraph("Nama Panel / Lokasi Cubicle", st_th), Paragraph("IP Address / Slave ID", st_th), Paragraph("V L-L (V)", st_th), Paragraph("Arus (A)", st_th), Paragraph("Daya (kW)", st_th), Paragraph("PF (Cos φ)", st_th), Paragraph("Status", st_th)],
        [Paragraph("1", st_td), Paragraph("Electrical Room A - Cubicle 1", st_td), Paragraph("", st_td), Paragraph("", st_td), Paragraph("", st_td), Paragraph("", st_td), Paragraph("", st_td), Paragraph("[ ] OK", st_td)],
        [Paragraph("2", st_td), Paragraph("Electrical Room A - Cubicle 2", st_td), Paragraph("", st_td), Paragraph("", st_td), Paragraph("", st_td), Paragraph("", st_td), Paragraph("", st_td), Paragraph("[ ] OK", st_td)],
        [Paragraph("3", st_td), Paragraph("Electrical Room A - Trafo Feeder", st_td), Paragraph("", st_td), Paragraph("", st_td), Paragraph("", st_td), Paragraph("", st_td), Paragraph("", st_td), Paragraph("[ ] OK", st_td)],
        [Paragraph("4", st_td), Paragraph("LMVDP Trafo 12 (Schneider)", st_td), Paragraph("10.41.47.122", st_td), Paragraph("", st_td), Paragraph("", st_td), Paragraph("", st_td), Paragraph("", st_td), Paragraph("[ ] OK", st_td)],
        [Paragraph("5", st_td), Paragraph("Panel Utama Forging Press 2500T", st_td), Paragraph("", st_td), Paragraph("", st_td), Paragraph("", st_td), Paragraph("", st_td), Paragraph("", st_td), Paragraph("[ ] OK", st_td)],
        [Paragraph("6", st_td), Paragraph("Panel Kompresor Utama GA-90", st_td), Paragraph("", st_td), Paragraph("", st_td), Paragraph("", st_td), Paragraph("", st_td), Paragraph("", st_td), Paragraph("[ ] OK", st_td)],
    ]
    t_blank = Table(blank_data, colWidths=[0.8 * cm, 4.4 * cm, 3.2 * cm, 1.8 * cm, 1.8 * cm, 1.8 * cm, 1.8 * cm, 1.8 * cm])
    t_blank.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), NAVY),
        ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
        ('ALIGN', (0, 0), (0, -1), 'CENTER'),
        ('ALIGN', (7, 0), (7, -1), 'CENTER'),
        ('TOPPADDING', (0, 0), (-1, -1), 4.5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4.5),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, BG_LIGHT]),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    story.append(t_blank)
    story.append(Spacer(1, 2 * mm))

    story.append(Paragraph("2. Checklist Evaluasi Akhir Hari (Sebelum Pulang Kerja)", st_h2))
    
    chk_daily = [
        [Paragraph("[  ]", st_td_bold), Paragraph("Apakah kabel LAN di Electrical Room A sudah terhubung dan berhasil di-ping dari laptop?", st_td)],
        [Paragraph("[  ]", st_td_bold), Paragraph("Apakah pembacaan register Modbus perdana berhasil tanpa terjadi timeout terus-menerus?", st_td)],
        [Paragraph("[  ]", st_td_bold), Paragraph("Apakah angka daya (kW) bernilai positif dan cocok dengan display fisik meter Schneider?", st_td)],
        [Paragraph("[  ]", st_td_bold), Paragraph("Apakah form pengadaan 1 Box Panel, 1 PSU 24V, dan 9 Stop Kontak sudah diajukan ke atasan?", st_td)],
        [Paragraph("[  ]", st_td_bold), Paragraph("Apakah progres integrasi sudah dicatat dan dilaporkan secara ringkas ke Supervisor/Manager?", st_td)],
        [Paragraph("[  ]", st_td_bold), Paragraph("Apakah laptop commissioning dan perlengkapan uji sudah dirapikan kembali ke tempat aman?", st_td)],
    ]
    t_chk_daily = Table(chk_daily, colWidths=[1.0 * cm, 16.4 * cm])
    t_chk_daily.setStyle(TableStyle([
        ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
        ('ALIGN', (0, 0), (0, -1), 'CENTER'),
        ('TOPPADDING', (0, 0), (-1, -1), 2.5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 2.5),
        ('ROWBACKGROUNDS', (0, 0), (-1, -1), [colors.white, BG_LIGHT]),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    story.append(t_chk_daily)
    story.append(Spacer(1, 4 * mm))

    # Notes Box
    note_box = [[
        Paragraph("<b>CATATAN PENTING & PESAN MOTIVASI UNTUK ANDA:</b><br/>"
                  "Proyek Energy Management System (EMS) ini adalah portofolio rekayasa teknologi tinggi yang sangat bernilai bagi karir Anda di PT Musashi. "
                  "Dengan menguasai komunikasi data dari level perangkat fisik tegangan menengah hingga level dashboard analitik modern, Anda telah menempatkan diri "
                  "sebagai Automation & Digital Transformation Engineer yang langka dan sangat diandalkan perusahaan. Tetap tenang, teliti, utamakan keselamatan kerja, "
                  "dan nikmati proses integrasi hari ini!", st_callout_success)
    ]]
    t_note_box = Table(note_box, colWidths=[17.4 * cm])
    t_note_box.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), SUCCESS_BG),
        ('BOX', (0, 0), (-1, -1), 1, SUCCESS_BORDER),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
    ]))
    story.append(t_note_box)

    doc.build(story, canvasmaker=ActionLearningNumberedCanvas)
    print("ACTION & LEARNING GUIDE PDF GENERATED SUCCESSFULLY:", output_pdf)

if __name__ == "__main__":
    build_action_learning_pdf()
