import os
import sys
from datetime import datetime
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import cm, mm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    """Canvas that enables two-pass page numbering: Page X of Y."""
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
            self.draw_page_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#64748b"))
        
        # Header (pages > 1)
        if self._pageNumber > 1:
            self.setStrokeColor(colors.HexColor("#cbd5e1"))
            self.setLineWidth(0.5)
            self.line(2 * cm, 28.2 * cm, 19 * cm, 28.2 * cm)
            self.drawString(2 * cm, 28.4 * cm, "LAPORAN PROGRES: INTEGRASI POWER METER SCHNEIDER & ELECTRICAL ROOM")
            self.drawRightString(19 * cm, 28.4 * cm, "PT MUSASHI AUTO PARTS INDONESIA")

        # Footer (all pages)
        self.setStrokeColor(colors.HexColor("#e2e8f0"))
        self.setLineWidth(0.5)
        self.line(2 * cm, 1.6 * cm, 19 * cm, 1.6 * cm)
        self.drawString(2 * cm, 1.2 * cm, "CONFIDENTIAL - Untuk Penggunaan Internal & Koordinasi Lintas Departemen")
        self.drawRightString(19 * cm, 1.2 * cm, f"Halaman {self._pageNumber} dari {page_count}")
        self.restoreState()


def generate_report():
    output_path = r"d:\Projectdasboard\Laporan_Progres_Dashboard_Schneider_Electrical_Room.pdf"
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=1.8 * cm,
        rightMargin=1.8 * cm,
        topMargin=1.8 * cm,
        bottomMargin=1.8 * cm
    )

    styles = getSampleStyleSheet()

    # Custom Color Palette
    PRIMARY = colors.HexColor("#0f172a")      # Slate 900
    NAVY = colors.HexColor("#1e3a8a")         # Blue 900
    ACCENT = colors.HexColor("#0284c7")       # Sky 600
    TEXT_DARK = colors.HexColor("#1e293b")    # Slate 800
    TEXT_MUTED = colors.HexColor("#475569")   # Slate 600
    BG_LIGHT = colors.HexColor("#f8fafc")     # Slate 50
    BORDER_LIGHT = colors.HexColor("#cbd5e1") # Slate 300
    WARN_BG = colors.HexColor("#fffbeb")      # Amber 50
    WARN_TEXT = colors.HexColor("#92400e")    # Amber 800

    # Typography Styles
    style_title = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=15,
        leading=19,
        textColor=PRIMARY,
        spaceAfter=3
    )

    style_subtitle = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        textColor=TEXT_MUTED,
        spaceAfter=10
    )

    style_h1 = ParagraphStyle(
        'Heading1_Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=14,
        textColor=NAVY,
        spaceBefore=7,
        spaceAfter=4,
        keepWithNext=True
    )

    style_body = ParagraphStyle(
        'Body_Custom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=TEXT_DARK,
        spaceAfter=4
    )

    style_callout_text = ParagraphStyle(
        'CalloutText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11.5,
        textColor=WARN_TEXT
    )

    style_th = ParagraphStyle(
        'THStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10.5,
        textColor=colors.white
    )

    style_td = ParagraphStyle(
        'TDStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11,
        textColor=TEXT_DARK
    )

    style_td_bold = ParagraphStyle(
        'TDBoldStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=11,
        textColor=TEXT_DARK
    )

    elements = []

    # ==================== PAGE 1 ====================
    # Metadata Header
    header_data = [
        [
            Paragraph("<b>PROJECT STATUS REPORT</b><br/><font size=7.5 color='#64748b'>Departemen Engineering & Maintenance Automation</font>", style_body),
            Paragraph("<b>No. Dokumen:</b> RPT-EMS-2026-10<br/><b>Tanggal:</b> 25 Oktober 2026<br/><b>Sifat:</b> Penting / Rencana Eksekusi", style_body)
        ]
    ]
    t_header = Table(header_data, colWidths=[9.8 * cm, 7.6 * cm])
    t_header.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 2),
        ('TOPPADDING', (0, 0), (-1, -1), 0),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
    ]))
    elements.append(t_header)
    elements.append(Spacer(1, 2 * mm))
    elements.append(HRFlowable(width="100%", thickness=1.5, color=NAVY, spaceAfter=6, spaceBefore=0))

    # Title
    elements.append(Paragraph("Laporan Progres Integrasi Data Power Meter Schneider & Kesiapan 2 Electrical Room", style_title))
    elements.append(Paragraph("Evaluasi Data Eksisting IoT, Rencana Uji Tarik Data Ethernet (Senin), dan Kebutuhan Sarana Tambahan", style_subtitle))

    # 1. Ringkasan Eksekutif
    elements.append(Paragraph("1. Ringkasan Eksekutif", style_h1))
    summary_text = (
        "Laporan ini disusun untuk memberikan evaluasi menyeluruh mengenai status implementasi sistem pemantauan energi "
        "(<i>Energy Management System / EMS</i>). Saat ini, <b>data untuk panel distribusi utama Schneider Electric "
        "telah berhasil ditarik</b> dan siap diintegrasikan ke dalam antarmuka dashboard analitik. Namun demikian, fokus integrasi untuk "
        "<b>2 Electrical Room</b> masih menghadapi kendala infrastruktur fisik. Berdasarkan koordinasi teknis bersama tim IoT dan verifikasi jalur Ethernet, "
        "telah disusun rencana aksi penarikan data pada hari Senin, sekaligus merinci kebutuhan fasilitas kelistrikan (hardware) yang "
        "mendesak diajukan guna menjamin keandalan transmisi telemetri di lapangan secara berkelanjutan."
    )
    elements.append(Paragraph(summary_text, style_body))

    # 2. Status Capaian Saat Ini
    elements.append(Paragraph("2. Status Capaian Saat Ini (Current Progress)", style_h1))
    status_table_data = [
        [
            Paragraph("Lingkup Pekerjaan", style_th),
            Paragraph("Status Teknis", style_th),
            Paragraph("Keterangan & Catatan Operasional", style_th)
        ],
        [
            Paragraph("<b>Panel Schneider Utama</b><br/>(Substation Factory 1)", style_td),
            Paragraph("<font color='#16a34a'><b>SUDAH DITARIK</b></font><br/>(Ready to Visualize)", style_td),
            Paragraph("Data telemetri daya (kW, kWh, Voltage, Current, Cos φ) telah berhasil diakuisisi dan siap ditransformasikan ke dalam antarmuka visual dashboard komprehensif.", style_td)
        ],
        [
            Paragraph("<b>Electrical Room A</b><br/>(Jalur Ethernet Terhubung)", style_td),
            Paragraph("<font color='#2563eb'><b>READY UJI SENIN</b></font><br/>(Ethernet Ready)", style_td),
            Paragraph("Kabel Ethernet fisik telah tersambung ke port switch. Siap untuk pengujian penarikan data meter (Modbus TCP) pada hari Senin.", style_td)
        ],
        [
            Paragraph("<b>Electrical Room B</b><br/>(Belum Terintegrasi)", style_td),
            Paragraph("<font color='#d97706'><b>PENDING</b></font><br/>(Menunggu Fasilitas)", style_td),
            Paragraph("Belum ditarik karena menunggu penyediaan box pelindung, catu daya 24V DC, dan stop kontak lokal di dalam ruang kubikel gardu.", style_td)
        ],
        [
            Paragraph("<b>Visualisasi Eksisting</b><br/>(Pihak IoT / IT)", style_td),
            Paragraph("<font color='#dc2626'><b>PERLU UPGRADE</b></font><br/>(Hanya Angka Lewat)", style_td),
            Paragraph("Visualisasi eksisting dari pihak IoT saat ini hanya menampilkan angka mentah (raw log stream) tanpa konteks analitik, tren beban, maupun kalkulasi ESG.", style_td)
        ]
    ]

    t_status = Table(status_table_data, colWidths=[4.2 * cm, 3.8 * cm, 9.4 * cm])
    t_status.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), NAVY),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('GRID', (0, 0), (-1, -1), 0.5, BORDER_LIGHT),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, BG_LIGHT]),
        ('TOPPADDING', (0, 0), (-1, -1), 3.5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3.5),
    ]))
    elements.append(t_status)

    # 3. Gap Analysis
    elements.append(Paragraph("3. Identifikasi Masalah & Analisis Kesenjangan (Gap Analysis)", style_h1))
    gap_p1 = (
        "<b>A. Keterbatasan Tampilan Data Eksisting (Tim IoT):</b><br/>"
        "Berdasarkan evaluasi sistem eksisting yang dibangun tim IoT, data memang telah melintas melalui jaringan IT. "
        "Namun, visualisasi saat ini <b>hanya sebatas menampilkan deretan angka mentah (raw data log)</b>. "
        "Hal ini belum memberikan manfaat operasional karena ketiadaan: (1) Grafik tren beban 24 jam untuk mendeteksi lonjakan daya abnormal, "
        "(2) Perhitungan akumulasi biaya pemakaian listrik per shift, (3) Pemantauan emisi karbon (kg CO₂e), dan (4) Sistem peringatan dini (alarm) saat parameter melampaui batas aman. "
        "Dashboard modern yang sedang dikembangkan dirancang untuk mentransformasi 'angka lewat' tersebut menjadi visualisasi informatif dan prediktif bagi tim Maintenance & Manajemen."
    )
    elements.append(Paragraph(gap_p1, style_body))

    gap_p2 = (
        "<b>B. Kendala Operasional di 2 Electrical Room:</b><br/>"
        "Dua ruang gardu distribusi (Electrical Room) belum dapat ditarik datanya secara optimal dikarenakan ketiadaan titik catu daya "
        "lokal (power outlet) dan box pelindung perangkat gateway IoT. Akibatnya, modul komunikasi berisiko terganggu oleh debu industri "
        "serta mengalami fluktuasi voltase jika tidak menggunakan catu daya DC teregulasi."
    )
    elements.append(Paragraph(gap_p2, style_body))

    # Callout Box
    callout_data = [[
        Paragraph(
            "<b>CATATAN HASIL KOORDINASI DENGAN TIM IOT:</b><br/>"
            "Pihak IoT siap mengalirkan data protokol Modbus/Ethernet ke server dashboard secara kontinu. Namun, mereka mengajukan "
            "permintaan resmi penyediaan sarana penunjang di lokasi (Box Panel, PSU 24V DC, dan Stop Kontak) guna memastikan keandalan transmisi data dan keselamatan instalasi.",
            style_callout_text
        )
    ]]
    t_callout = Table(callout_data, colWidths=[17.4 * cm])
    t_callout.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), WARN_BG),
        ('BOX', (0, 0), (-1, -1), 1, colors.HexColor("#f59e0b")),
        ('TOPPADDING', (0, 0), (-1, -1), 4.5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4.5),
        ('LEFTPADDING', (0, 0), (-1, -1), 7),
        ('RIGHTPADDING', (0, 0), (-1, -1), 7),
    ]))
    elements.append(t_callout)

    # ==================== PAGE BREAK TO PAGE 2 ====================
    elements.append(PageBreak())

    # ==================== PAGE 2 ====================
    # 4. Kebutuhan Fasilitas & Hardware
    elements.append(Paragraph("4. Rincian Kebutuhan Fasilitas & Hardware (Permintaan Tim IoT)", style_h1))
    elements.append(Paragraph("Untuk memastikan keandalan operasional perangkat akuisisi data di Electrical Room, berikut rincian material yang diajukan:", style_body))

    hw_table_data = [
        [
            Paragraph("No", style_th),
            Paragraph("Item Hardware", style_th),
            Paragraph("Jumlah", style_th),
            Paragraph("Fungsi & Peruntukan di Lapangan", style_th),
            Paragraph("Urgensi", style_th)
        ],
        [
            Paragraph("1", style_td),
            Paragraph("<b>Box Panel Tambahan</b><br/>(Enclosure Box IP54/IP65)", style_td),
            Paragraph("<b>1 Unit</b>", style_td_bold),
            Paragraph("Rumah pelindung untuk gateway IoT, ethernet switch, dan modul converter agar aman dari paparan debu gardu, suhu, getaran, serta kontak fisik tak sengaja.", style_td),
            Paragraph("<font color='#dc2626'><b>Mendesak</b></font>", style_td)
        ],
        [
            Paragraph("2", style_td),
            Paragraph("<b>Power Supply Unit (PSU)</b><br/>Input 220V AC ➔ Output 24V DC", style_td),
            Paragraph("<b>1 Unit</b>", style_td_bold),
            Paragraph("Menyediakan suplai daya DC teregulasi dan stabil khusus untuk perangkat controller/gateway IoT agar transfer data tidak sering drop atau hang.", style_td),
            Paragraph("<font color='#dc2626'><b>Mendesak</b></font>", style_td)
        ],
        [
            Paragraph("3", style_td),
            Paragraph("<b>Stop Kontak Panel (3 Lubang)</b><br/>Heavy Duty / Arde Grounding", style_td),
            Paragraph("<b>9 Buah</b><br/>(Isi 3/unit)", style_td_bold),
            Paragraph("Dipasang di masing-masing panel kubikel/gardu untuk: (1) Sumber input adaptor PSU 24V, (2) Power switch ethernet, dan (3) Catu daya laptop maintenance saat commissioning/troubleshooting berkala.", style_td),
            Paragraph("<font color='#2563eb'><b>Penting</b></font>", style_td)
        ]
    ]

    t_hw = Table(hw_table_data, colWidths=[0.8 * cm, 4.4 * cm, 2.3 * cm, 8.0 * cm, 1.9 * cm])
    t_hw.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), NAVY),
        ('ALIGN', (0, 0), (0, -1), 'CENTER'),
        ('ALIGN', (2, 1), (2, -1), 'CENTER'),
        ('ALIGN', (4, 1), (4, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('GRID', (0, 0), (-1, -1), 0.5, BORDER_LIGHT),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, BG_LIGHT]),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
    ]))
    elements.append(t_hw)
    elements.append(Spacer(1, 2 * mm))

    # 5. Rencana Aksi Hari Senin
    elements.append(Paragraph("5. Rencana Aksi Hari Senin (Action Plan - Monday Execution)", style_h1))
    plan_text = (
        "Sebagai langkah percepatan sebelum pengadaan material rampung, pada <b>hari Senin</b> akan dilakukan uji tarik data pada "
        "<b>Electrical Room yang telah terhubung kabel Ethernet</b> dengan tahapan sebagai berikut:<br/>"
        "&nbsp;&nbsp;<b>1. Verifikasi Jaringan Fisik & IP:</b> Pengujian ping dan alokasi subnet IP gateway terhadap jaringan switch IT internal.<br/>"
        "&nbsp;&nbsp;<b>2. Ekstraksi Data Perdana (Modbus TCP):</b> Menguji pembacaan register parameter dari power meter Schneider melalui gateway Ethernet.<br/>"
        "&nbsp;&nbsp;<b>3. Validasi Akurasi Parameter:</b> Membandingkan angka telemetri yang lewat di IT dengan nilai fisik pada layar meter panel (V, A, kW, PF).<br/>"
        "&nbsp;&nbsp;<b>4. Sinkronisasi ke Dashboard:</b> Memasukkan stream data hasil penarikan ke dalam modul analitik dashboard terpusat."
    )
    elements.append(Paragraph(plan_text, style_body))
    elements.append(Spacer(1, 2 * mm))

    # 6. Rekomendasi & Tindak Lanjut Manajemen
    elements.append(Paragraph("6. Rekomendasi & Tindak Lanjut Manajemen", style_h1))
    rec_text = (
        "1. <b>Persetujuan Fasilitas:</b> Memohon persetujuan pengadaan 1 Box Panel, 1 PSU 24V DC, dan 9 stop kontak 3-lubang guna standardisasi instalasi di 2 Electrical Room.<br/>"
        "2. <b>Sinergi Lintas Departemen:</b> Mengagendakan evaluasi bersama tim IoT, IT, dan Maintenance pada Senin siang pasca-uji tarik data Ethernet perdana.<br/>"
        "3. <b>Penerapan Dashboard Analitik:</b> Menjadikan dashboard baru sebagai standar monitoring energi pabrik menggantikan visualisasi raw data angka mentah."
    )
    elements.append(Paragraph(rec_text, style_body))
    elements.append(Spacer(1, 5 * mm))

    # 7. Signature Block
    sig_data = [
        [
            Paragraph("<b>Diajukan Oleh:</b><br/><br/><br/><br/><u>__________________________</u><br/>Project Lead / Engineering", style_body),
            Paragraph("<b>Dikoordinasikan Dengan:</b><br/><br/><br/><br/><u>__________________________</u><br/>Team Lead IoT & Otomasi", style_body),
            Paragraph("<b>Mengetahui / Menyetujui:</b><br/><br/><br/><br/><u>__________________________</u><br/>Manager Maintenance & Engineering", style_body)
        ]
    ]
    t_sig = Table(sig_data, colWidths=[5.8 * cm, 5.8 * cm, 5.8 * cm])
    t_sig.setStyle(TableStyle([
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('TOPPADDING', (0, 0), (-1, -1), 2),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 2),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
    ]))
    
    elements.append(KeepTogether([
        HRFlowable(width="100%", thickness=0.5, color=BORDER_LIGHT, spaceAfter=8, spaceBefore=4),
        t_sig
    ]))

    doc.build(elements, canvasmaker=NumberedCanvas)
    print("PDF GENERATED SUCCESSFULLY:", output_path)

if __name__ == "__main__":
    generate_report()

