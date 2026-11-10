// ========================================================
// PT MUSASHI AUTO PARTS INDONESIA - ENERGY MANAGEMENT SYSTEM
// Minimalist Dark Theme Dashboard Controller
// ========================================================

document.addEventListener('DOMContentLoaded', () => {

  // Baseline Calibration for Electrical Room Substation (Schneider & Mitsubishi)
  const CATEGORY_BASELINES = {
    all: {
      kw: 14129,
      kwh: 197064,
      cost: 'Rp 285 jt',
      peak: '16.820',
      peakSub: 'Puncak hari ini · Batas PLN aman',
      util: '69,4%',
      utilSub: 'Tr 01 s/d Tr 19 (20.350 kVA)',
      pf: '0,90',
      online: '111 / 111',
      alertCount: '3 meter perlu dicek',
      carbonTon: '155,7',
      curve24h: [8480, 7730, 10630, 15490, 13350, 15720, 11490, 8950],
      curveMax: 18000,
      curveStep: 3000,
      kwYesterday: 14409,
      kwhYesterday: 204150,
      costYesterday: 'Rp 295 jt',
      peakYesterday: '17.150',
      utilYesterday: '71,8%',
      carbonYesterday: '161,3',
      curve24hYesterday: [8820, 8040, 11050, 15920, 13780, 16180, 11840, 9210],
      deltaKwh: -7086,
      deltaKwhPct: '-3,5%',
      deltaCost: '-Rp 10 jt',
      deltaPeak: '-330 kW',
      deltaUtil: '-2,4%',
      deltaCarbon: '-5,6 ton',
      days7: {
        labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
        kwh: [194200, 201300, 208400, 205600, 204150, 197064, 142800],
        kwPeak: [16450, 16980, 17350, 17120, 17150, 16820, 12400],
        totalKwh: 1353514,
        avgKwh: 193359,
        totalCost: 'Rp 1,95 M',
        peakMax: 17350
      },
      monthMtd: {
        kwh: 2150400,
        cost: 'Rp 3,11 M',
        peak: '17.480',
        util: '70,2%'
      }
    },
    electrical: {
      kw: 14129,
      kwh: 197064,
      cost: 'Rp 285 jt',
      peak: '16.820',
      peakSub: 'Puncak hari ini · Batas PLN aman',
      util: '69,4%',
      utilSub: 'Tr 01 s/d Tr 19 (20.350 kVA)',
      pf: '0,90',
      online: '42 / 42',
      alertCount: '3 meter perlu dicek',
      carbonTon: '155,7',
      curve24h: [8480, 7730, 10630, 15490, 13350, 15720, 11490, 8950],
      curveMax: 18000,
      curveStep: 3000,
      kwYesterday: 14409,
      kwhYesterday: 204150,
      costYesterday: 'Rp 295 jt',
      peakYesterday: '17.150',
      utilYesterday: '71,8%',
      carbonYesterday: '161,3',
      curve24hYesterday: [8820, 8040, 11050, 15920, 13780, 16180, 11840, 9210],
      deltaKwh: -7086,
      deltaKwhPct: '-3,5%',
      deltaCost: '-Rp 10 jt',
      deltaPeak: '-330 kW',
      deltaUtil: '-2,4%',
      deltaCarbon: '-5,6 ton',
      days7: {
        labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
        kwh: [194200, 201300, 208400, 205600, 204150, 197064, 142800],
        totalKwh: 1353514,
        avgKwh: 193359,
        totalCost: 'Rp 1,95 M',
        peakMax: 17350
      },
      monthMtd: {
        kwh: 2150400,
        cost: 'Rp 3,11 M',
        peak: '17.480',
        util: '70,2%'
      }
    },
    fac1: {
      kw: 5420,
      kwh: 76200,
      cost: 'Rp 110 jt',
      peak: '6.450',
      peakSub: 'Puncak Fac 1 · Shift 1 Aktif',
      util: '71,2%',
      utilSub: 'Trafo Tr 01 s/d Tr 05 (5.400 kVA)',
      pf: '0,91',
      online: '14 / 14 Unit',
      alertCount: '1 meter perlu dicek',
      carbonTon: '60,2',
      curve24h: [3250, 2960, 4070, 5940, 5120, 6030, 4410, 3440],
      curveMax: 7500,
      curveStep: 1500,
      kwYesterday: 5530,
      kwhYesterday: 78900,
      costYesterday: 'Rp 114 jt',
      peakYesterday: '6.590',
      utilYesterday: '73,5%',
      carbonYesterday: '62,3',
      curve24hYesterday: [3380, 3080, 4230, 6150, 5320, 6220, 4590, 3570],
      deltaKwh: -2700,
      deltaKwhPct: '-3,4%',
      deltaCost: '-Rp 4 jt',
      deltaPeak: '-140 kW',
      deltaUtil: '-2,3%',
      deltaCarbon: '-2,1 ton',
      days7: {
        labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
        kwh: [75100, 77800, 80400, 79200, 78900, 76200, 55200],
        totalKwh: 522800,
        avgKwh: 74686,
        totalCost: 'Rp 755 jt',
        peakMax: 6650
      },
      monthMtd: {
        kwh: 831200,
        cost: 'Rp 1,20 M',
        peak: '6.720',
        util: '72,0%'
      }
    },
    fac2_1: {
      kw: 3600,
      kwh: 49800,
      cost: 'Rp 72 jt',
      peak: '4.180',
      peakSub: 'Puncak Fac 2.1 · Billet Heater Aktif',
      util: '68,2%',
      utilSub: 'Trafo Tr 06 s/d Tr 10 (6.100 kVA)',
      pf: '0,93',
      online: '11 / 11 Unit',
      alertCount: '0 meter perlu dicek',
      carbonTon: '39,3',
      curve24h: [2160, 1960, 2700, 3940, 3400, 4010, 2930, 2280],
      curveMax: 5000,
      curveStep: 1000,
      kwYesterday: 3720,
      kwhYesterday: 51600,
      costYesterday: 'Rp 75 jt',
      peakYesterday: '4.290',
      utilYesterday: '70,5%',
      carbonYesterday: '40,8',
      curve24hYesterday: [2240, 2040, 2810, 4090, 3530, 4170, 3050, 2370],
      deltaKwh: -1800,
      deltaKwhPct: '-3,5%',
      deltaCost: '-Rp 3 jt',
      deltaPeak: '-110 kW',
      deltaUtil: '-2,3%',
      deltaCarbon: '-1,5 ton',
      days7: {
        labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
        kwh: [48900, 50800, 52600, 51900, 51600, 49800, 36100],
        totalKwh: 341700,
        avgKwh: 48814,
        totalCost: 'Rp 494 jt',
        peakMax: 4350
      },
      monthMtd: {
        kwh: 543000,
        cost: 'Rp 784 jt',
        peak: '4.410',
        util: '69,1%'
      }
    },
    fac2: {
      kw: 4850,
      kwh: 68100,
      cost: 'Rp 98 jt',
      peak: '5.820',
      peakSub: 'Puncak Fac 2 · Forging Heavy Line',
      util: '66,8%',
      utilSub: 'Trafo Tr 11 s/d Tr 16 (4.850 kVA)',
      pf: '0,88',
      online: '12 / 12 Unit',
      alertCount: '2 meter perlu dicek',
      carbonTon: '53,8',
      curve24h: [2910, 2650, 3640, 5310, 4580, 5390, 3940, 3070],
      curveMax: 6500,
      curveStep: 1000,
      kwYesterday: 4950,
      kwhYesterday: 70400,
      costYesterday: 'Rp 102 jt',
      peakYesterday: '5.940',
      utilYesterday: '68,9%',
      carbonYesterday: '55,6',
      curve24hYesterday: [3020, 2750, 3780, 5520, 4760, 5600, 4100, 3190],
      deltaKwh: -2300,
      deltaKwhPct: '-3,3%',
      deltaCost: '-Rp 4 jt',
      deltaPeak: '-120 kW',
      deltaUtil: '-2,1%',
      deltaCarbon: '-1,8 ton',
      days7: {
        labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
        kwh: [67100, 69500, 71900, 70900, 70400, 68100, 49300],
        totalKwh: 467200,
        avgKwh: 66742,
        totalCost: 'Rp 675 jt',
        peakMax: 6010
      },
      monthMtd: {
        kwh: 742000,
        cost: 'Rp 1,07 M',
        peak: '6.080',
        util: '67,5%'
      }
    },
    fac3: {
      kw: 2454,
      kwh: 35596,
      cost: 'Rp 51 jt',
      peak: '2.890',
      peakSub: 'Puncak Fac 3 · Pompa Cooling Tower',
      util: '70,5%',
      utilSub: 'Trafo Tr 17 s/d Tr 19 (4.000 kVA)',
      pf: '0,92',
      online: '7 / 7 Unit',
      alertCount: '0 meter perlu dicek',
      carbonTon: '28,1',
      curve24h: [1470, 1340, 1850, 2690, 2320, 2730, 2000, 1550],
      curveMax: 3500,
      curveStep: 500,
      kwYesterday: 2530,
      kwhYesterday: 36800,
      costYesterday: 'Rp 53 jt',
      peakYesterday: '2.970',
      utilYesterday: '72,4%',
      carbonYesterday: '29,1',
      curve24hYesterday: [1530, 1390, 1920, 2790, 2410, 2840, 2080, 1610],
      deltaKwh: -1204,
      deltaKwhPct: '-3,3%',
      deltaCost: '-Rp 2 jt',
      deltaPeak: '-80 kW',
      deltaUtil: '-1,9%',
      deltaCarbon: '-1,0 ton',
      days7: {
        labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
        kwh: [35000, 36300, 37500, 37000, 36800, 35596, 25800],
        totalKwh: 243996,
        avgKwh: 34856,
        totalCost: 'Rp 352 jt',
        peakMax: 3020
      },
      monthMtd: {
        kwh: 387000,
        cost: 'Rp 559 jt',
        peak: '3.080',
        util: '71,1%'
      }
    },
    forging: {
      kw: 7400,
      kwh: 104404,
      cost: 'Rp 151 jt',
      peak: '8.850',
      peakSub: 'Puncak Forging Press Shift 1 & 2',
      util: '74,1%',
      utilSub: 'Beban Kompresor & Motor Press',
      pf: '0,89',
      online: '39 / 39 Unit',
      alertCount: '2 meter perlu dicek',
      carbonTon: '82,5',
      curve24h: [4440, 4050, 5570, 8110, 6990, 8230, 6020, 4690],
      curveMax: 9500,
      curveStep: 1500,
      kwYesterday: 7580,
      kwhYesterday: 108150,
      costYesterday: 'Rp 156 jt',
      peakYesterday: '9.040',
      utilYesterday: '76,3%',
      carbonYesterday: '85,4',
      curve24hYesterday: [4620, 4210, 5790, 8390, 7270, 8560, 6260, 4880],
      deltaKwh: -3746,
      deltaKwhPct: '-3,5%',
      deltaCost: '-Rp 5 jt',
      deltaPeak: '-190 kW',
      deltaUtil: '-2,2%',
      deltaCarbon: '-2,9 ton',
      days7: {
        labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
        kwh: [102800, 106500, 110400, 108900, 108150, 104404, 75600],
        totalKwh: 716754,
        avgKwh: 102393,
        totalCost: 'Rp 1,04 M',
        peakMax: 9150
      },
      monthMtd: {
        kwh: 1139000,
        cost: 'Rp 1,65 M',
        peak: '9.280',
        util: '74,8%'
      }
    },
    heattreatment: {
      kw: 5110,
      kwh: 69704,
      cost: 'Rp 101 jt',
      peak: '6.120',
      peakSub: 'Puncak Billet Induction & Carburizing',
      util: '67,3%',
      utilSub: 'Billet Heater 6.6kV & Vacuum Furnace',
      pf: '0,94',
      online: '29 / 29 Unit',
      alertCount: '0 meter perlu dicek',
      carbonTon: '55,1',
      curve24h: [3070, 2800, 3850, 5600, 4830, 5680, 4160, 3240],
      curveMax: 6500,
      curveStep: 1000,
      kwYesterday: 5220,
      kwhYesterday: 72200,
      costYesterday: 'Rp 104 jt',
      peakYesterday: '6.250',
      utilYesterday: '69,2%',
      carbonYesterday: '57,0',
      curve24hYesterday: [3190, 2910, 4000, 5820, 5020, 5910, 4320, 3370],
      deltaKwh: -2496,
      deltaKwhPct: '-3,5%',
      deltaCost: '-Rp 3 jt',
      deltaPeak: '-130 kW',
      deltaUtil: '-1,9%',
      deltaCarbon: '-1,9 ton',
      days7: {
        labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
        kwh: [68700, 71200, 73800, 72800, 72200, 69704, 50500],
        totalKwh: 478904,
        avgKwh: 68415,
        totalCost: 'Rp 692 jt',
        peakMax: 6320
      },
      monthMtd: {
        kwh: 761000,
        cost: 'Rp 1,10 M',
        peak: '6.400',
        util: '68,0%'
      }
    }
  };

  // Top 8 Consumers Data by Category & Factory Substation
  const TOP_8_DATA = {
    all: [
      { name: 'Trafo 12 Fo & HT 200V (Tr 12)', val: 18450 },
      { name: 'Trafo 03 Fo & HT 200V (Tr 03)', val: 14200 },
      { name: 'Trafo 10 BH Komatsu 6.6kV (Tr 10)', val: 11800 },
      { name: 'Trafo 16 BH N1600 6.6kV (Tr 16)', val: 9950 },
      { name: 'Trafo 08 Fo & HT 200V (Tr 08)', val: 8650 },
      { name: 'Trafo 19 HT 200V Fac 3 (Tr 19)', val: 7850 },
      { name: 'Trafo 05 Fo & HT 200V (Tr 05)', val: 6920 },
      { name: 'Trafo 15 BH Kurimoto 6.6kV (Tr 15)', val: 6150 }
    ],
    electrical: [
      { name: 'Trafo 12 Fo & HT 200V (Tr 12)', val: 18450 },
      { name: 'Trafo 03 Fo & HT 200V (Tr 03)', val: 14200 },
      { name: 'Trafo 10 BH Komatsu 6.6kV (Tr 10)', val: 11800 },
      { name: 'Trafo 16 BH N1600 6.6kV (Tr 16)', val: 9950 },
      { name: 'Trafo 08 Fo & HT 200V (Tr 08)', val: 8650 },
      { name: 'Trafo 19 HT 200V Fac 3 (Tr 19)', val: 7850 },
      { name: 'Trafo 05 Fo & HT 200V (Tr 05)', val: 6920 },
      { name: 'Trafo 15 BH Kurimoto 6.6kV (Tr 15)', val: 6150 }
    ],
    fac1: [
      { name: 'Trafo 01 BH FO 6.6kV (Tr 01)', val: 15400 },
      { name: 'Trafo 03 Fo & HT 200V (Tr 03)', val: 14200 },
      { name: 'Trafo 05 Fo & HT 200V (Tr 05)', val: 10800 },
      { name: 'Trafo 02 UTY 380V (Tr 02)', val: 8900 },
      { name: 'Trafo 04 Mach 200V (Tr 04)', val: 7600 },
      { name: 'Feeder F1-3 MDB Press 200V', val: 6800 },
      { name: 'Feeder F1-4 LVMDB Y/C 380V', val: 5900 },
      { name: 'Feeder F1-8 BH Press Auto', val: 5200 }
    ],
    fac2_1: [
      { name: 'Trafo 10 BH Komatsu 6.6kV (Tr 10)', val: 11800 },
      { name: 'Trafo 08 Fo & HT 200V (Tr 08)', val: 8650 },
      { name: 'Trafo 06 UTY & FO 380V (Tr 06)', val: 7200 },
      { name: 'Trafo 07 FO 200V (Tr 07)', val: 6800 },
      { name: 'Trafo 09 UTY 380V (Tr 09)', val: 5400 },
      { name: 'Feeder F4-5 BH 1100 kVA', val: 4900 },
      { name: 'Feeder F4-1 LVMDB 3P 380V', val: 3800 },
      { name: 'Feeder F4-2 LVMDB 3P 200V', val: 3200 }
    ],
    fac2: [
      { name: 'Trafo 12 Fo & HT 200V (Tr 12)', val: 18450 },
      { name: 'Trafo 16 BH N1600 6.6kV (Tr 16)', val: 9950 },
      { name: 'Trafo 15 BH Kurimoto 6.6kV (Tr 15)', val: 6150 },
      { name: 'Trafo 11 BH N1300 6.6kV (Tr 11)', val: 5800 },
      { name: 'Trafo 13 Mach 200V (Tr 13)', val: 4900 },
      { name: 'Trafo 14 UTY 380V (Tr 14)', val: 4200 },
      { name: 'Feeder F2-6 MV Titan 1200T', val: 3800 },
      { name: 'Feeder F2-5 MV Kurimoto', val: 3200 }
    ],
    fac3: [
      { name: 'Trafo 17 UTY & Forg 380V (Tr 17)', val: 9800 },
      { name: 'Trafo 19 HT 200V (Tr 19)', val: 7850 },
      { name: 'Trafo 18 Mach 200V (Tr 18)', val: 6100 },
      { name: 'Feeder F3-1 LVMDB 380V (1600 kVA)', val: 5400 },
      { name: 'Feeder F3-3 LVMDB 200V (1500 kVA)', val: 4600 },
      { name: 'Feeder F3-2 LVMDB 200V (1000 kVA)', val: 3900 },
      { name: 'Feeder F3-0 MV-MDB 20kV', val: 3100 },
      { name: 'Carburizing HT 74026', val: 2600 }
    ],
    forging: [
      { name: 'Trafo 12 Fo & HT 200V (Tr 12)', val: 18450 },
      { name: 'Trafo 10 BH Komatsu 6.6kV (Tr 10)', val: 11800 },
      { name: 'Trafo 16 BH N1600 6.6kV (Tr 16)', val: 9950 },
      { name: 'Trafo 08 Fo & HT 200V (Tr 08)', val: 8650 },
      { name: 'Press Komatsu 1600T (61026)', val: 6400 },
      { name: 'Press Komatsu (81023)', val: 5900 },
      { name: 'Press 94476 Forging F2', val: 5100 },
      { name: 'Press Komatsu 630T (61018)', val: 4800 }
    ],
    heattreatment: [
      { name: 'Trafo 01 BH FO 6.6kV (Tr 01)', val: 15400 },
      { name: 'Trafo 10 BH Komatsu 6.6kV (Tr 10)', val: 11800 },
      { name: 'Trafo 16 BH N1600 6.6kV (Tr 16)', val: 9950 },
      { name: 'Trafo 19 HT 200V Fac 3 (Tr 19)', val: 7850 },
      { name: 'Trafo 15 BH Kurimoto 6.6kV (Tr 15)', val: 6150 },
      { name: 'Vacuum Furnace (74002)', val: 5200 },
      { name: 'Carburizing Furnace (74003)', val: 4600 },
      { name: 'Billet Heater 1600T (74020)', val: 4100 }
    ]
  };

  // Perlu Perhatian Alert Items by Category & Factory (SCADA-Grade)
  const ATTENTION_ALERTS = {
    all: [
      { id: 'TR-01', title: 'Transformer 01 BH FO 6.6kV (Tr 01)', area: 'Factory 1 · Substation TM 20kV / 6.6kV', severity: 'warning', badge: 'Cos φ Rendah (0,84)', note: 'Power factor 0,84 di bawah standar PLN (≥ 0,85). Berisiko denda penalti kVARh bulanan.', action: 'Inspeksi & periksa step regulator kapasitor bank APFC.' },
      { id: 'F2-6', title: 'Feeder F2-6 MV Titan 1200T', area: 'Factory 2 · Electrical Room F2', severity: 'critical', badge: 'Beban Puncak', note: 'Beban motor press Titan 1200T meningkat pada shift 1.', action: 'Pantau arus kubikel TM 6.6kV dan koordinasi APFC.' },
      { id: 'TR-12', title: 'Transformer 12 Fo & HT 200V (Tr 12)', area: 'Factory 2 · Substation LMVDP 200V', severity: 'warning', badge: 'Beban Induktif Tinggi', note: 'Beban induktif mesin forging press shift siang tinggi (Cos φ 0,83).', action: 'Aktifkan kompensasi lokal pada panel distribusi.' }
    ],
    electrical: [
      { id: 'TR-01', title: 'Transformer 01 BH FO 6.6kV (Tr 01)', area: 'Factory 1 · Substation TM 20kV / 6.6kV', severity: 'warning', badge: 'Cos φ Rendah (0,84)', note: 'Power factor 0,84 di bawah standar PLN (≥ 0,85). Berisiko denda penalti kVARh bulanan.', action: 'Inspeksi & periksa step regulator kapasitor bank APFC.' },
      { id: 'F2-6', title: 'Feeder F2-6 MV Titan 1200T', area: 'Factory 2 · Electrical Room F2', severity: 'critical', badge: 'Beban Puncak', note: 'Beban motor press Titan 1200T meningkat pada shift 1.', action: 'Pantau arus kubikel TM 6.6kV dan koordinasi APFC.' },
      { id: 'TR-12', title: 'Transformer 12 Fo & HT 200V (Tr 12)', area: 'Factory 2 · Substation LMVDP 200V', severity: 'warning', badge: 'Beban Induktif Tinggi', note: 'Beban induktif mesin forging press shift siang tinggi (Cos φ 0,83).', action: 'Aktifkan kompensasi lokal pada panel distribusi.' }
    ],
    fac1: [
      { id: 'TR-01', title: 'Transformer 01 BH FO 6.6kV (Tr 01)', area: 'Factory 1 · Substation TM 20kV / 6.6kV', severity: 'warning', badge: 'Cos φ Rendah (0,84)', note: 'Power factor 0,84 di bawah ambang PLN. Perlu aktivasi bank kapasitor tambahan.', action: 'Cek Kapasitor Bank APFC Panel F1.' },
      { id: 'F1-8', title: 'Feeder F1-8 BH Press Auto', area: 'Factory 1 · Feeder TM 6.6kV', severity: 'warning', badge: 'THD-I 4,8%', note: 'Harmonik beban non-linear heater induksi terdeteksi mendekati ambang 5,0%.', action: 'Pantau filter harmonik aktif (AHF) pada kubikel 20kV.' }
    ],
    fac2_1: [
      { id: 'TR-10', title: 'Trafo 10 BH Komatsu 6.6kV (Tr 10)', area: 'Electrical Room 2.1 · Gardu 20kV', severity: 'normal', badge: 'Sistem Optimal', note: 'Billet Heater Komatsu 1600T dan LVMDB 3P beroperasi normal Cos φ 0,93.', action: 'Monitoring telemetri online aktif, tidak ada anomali.' }
    ],
    fac2: [
      { id: 'F2-6', title: 'Feeder F2-6 MV Titan 1200T', area: 'Factory 2 · Substation Forging APFC', severity: 'critical', badge: 'Beban Puncak', note: 'Beban motor press Titan 1200T mendekati kapasitas feeder.', action: 'Reset APFC controller & cek temperatur kubikel.' },
      { id: 'TR-12', title: 'Transformer 12 Fo & HT 200V (Tr 12)', area: 'Factory 2 · LMVDP 200V', severity: 'warning', badge: 'Cos φ 0,83', note: 'Beban induktif motor forging press shift siang meningkat.', action: 'Aktifkan kompensasi lokal pada panel LMVDP.' }
    ],
    fac3: [
      { id: 'TR-17', title: 'Semua Trafo & Panel Normal', area: 'Factory 3 · Substation Gardu 20kV', severity: 'normal', badge: 'Sistem Optimal', note: 'Cos φ rata-rata 0,92 – Bebas denda kVARh PLN, suhu trafo stabil 65°C.', action: 'Operasional normal, pertahankan jadwal inspeksi preventif mingguan.' }
    ],
    forging: [
      { id: 'TR-12', title: 'Transformer 12 Fo & HT 200V (Tr 12)', area: 'Factory 2 · Forging Substation 200V', severity: 'warning', badge: 'Cos φ 0,84', note: 'Beban impulsif mesin forging press memerlukan kompensasi APFC dinamis.', action: 'Jadwalkan switching step APFC bank untuk meredam beban reaktif impulsif.' },
      { id: 'F2-6', title: 'Feeder F2-6 MV Titan 1200T', area: 'Factory 2 · Forging APFC Feeder', severity: 'critical', badge: 'Beban Puncak', note: 'Beban motor press 1200T meningkatkan tarikan daya reaktif kVAR.', action: 'Periksa setting proteksi arus lebih kubikel TM.' }
    ],
    heattreatment: [
      { id: 'TR-01', title: 'Semua Beban Heat Treatment Normal', area: 'Substation HT Fac 1, 2, 2.1, 3', severity: 'normal', badge: 'Cos φ 0,94', note: 'Pemanas induksi billet & furnace carburizing beroperasi stabil dan efisien.', action: 'Pertahankan setting suhu dan monitoring data telemetri harian.' }
    ]
  };

  // Application State
  const state = {
    meters: (typeof METER_DATA !== 'undefined') ? JSON.parse(JSON.stringify(METER_DATA)) : [],
    activeView: 'view-dashboard',
    activeFilter: 'all',
    activePeriod: 'today',
    searchQuery: '',
    sortColumn: 'id',
    sortAsc: true,
    currentPage: 1,
    pageSize: 15,
    isSimulationActive: true,
    simulationTimer: null,
    isSidebarCollapsed: false
  };

  // Chart Instances
  let chart24hInstance = null;
  let chartDonutInstance = null;
  let chartTop8Instance = null;

  // DOM Elements
  const headerLiveTime = document.getElementById('headerLiveTime');
  const kpiDayaVal = document.getElementById('kpiDayaVal');
  const kpiDayaSub = document.getElementById('kpiDayaSub');
  const kpiDayaTitle = document.getElementById('kpiDayaTitle');
  const kpiDayaPrev = document.getElementById('kpiDayaPrev');
  const kpiDayaDelta = document.getElementById('kpiDayaDelta');

  const kpiEnergiVal = document.getElementById('kpiEnergiVal');
  const kpiEnergiSub = document.getElementById('kpiEnergiSub');
  const kpiEnergiTitle = document.getElementById('kpiEnergiTitle');
  const kpiEnergiPrev = document.getElementById('kpiEnergiPrev');
  const kpiEnergiDelta = document.getElementById('kpiEnergiDelta');

  const kpiBiayaVal = document.getElementById('kpiBiayaVal');
  const kpiBiayaSub = document.getElementById('kpiBiayaSub');
  const kpiBiayaTitle = document.getElementById('kpiBiayaTitle');
  const kpiBiayaPrev = document.getElementById('kpiBiayaPrev');
  const kpiBiayaDelta = document.getElementById('kpiBiayaDelta');

  const kpiPfVal = document.getElementById('kpiPfVal');
  const kpiPfSub = document.getElementById('kpiPfSub');

  const kpiPeakVal = document.getElementById('kpiPeakVal');
  const kpiPeakSub = document.getElementById('kpiPeakSub');
  const kpiPeakTitle = document.getElementById('kpiPeakTitle');
  const kpiPeakPrev = document.getElementById('kpiPeakPrev');
  const kpiPeakDelta = document.getElementById('kpiPeakDelta');

  const kpiUtilVal = document.getElementById('kpiUtilVal');
  const kpiUtilSub = document.getElementById('kpiUtilSub');
  const kpiUtilTitle = document.getElementById('kpiUtilTitle');
  const kpiUtilPrev = document.getElementById('kpiUtilPrev');
  const kpiUtilDelta = document.getElementById('kpiUtilDelta');

  const kpiOnlineVal = document.getElementById('kpiOnlineVal');
  const kpiOnlineSub = document.getElementById('kpiOnlineSub');

  const kpiCarbonVal = document.getElementById('kpiCarbonVal');
  const kpiCarbonSub = document.getElementById('kpiCarbonSub');
  const kpiCarbonTitle = document.getElementById('kpiCarbonTitle');
  const kpiCarbonPrev = document.getElementById('kpiCarbonPrev');
  const kpiCarbonDelta = document.getElementById('kpiCarbonDelta');

  const timeframeSummaryText = document.getElementById('timeframeSummaryText');
  const chart24hTitle = document.getElementById('chart24hTitle');
  const chart24hSub = document.getElementById('chart24hSub');

  const attentionList = document.getElementById('attentionList');
  const meterTableBody = document.getElementById('meterTableBody');
  const searchInput = document.getElementById('searchInput');
  const pageRangeText = document.getElementById('pageRangeText');
  const totalMetersText = document.getElementById('totalMetersText');
  const paginationButtons = document.getElementById('paginationButtons');

  const btnExportCsv = document.getElementById('btnExportCsv');
  const btnOpenBlueprintModal = document.getElementById('btnOpenBlueprintModal');
  const blueprintModal = document.getElementById('blueprintModal');
  const meterDetailModal = document.getElementById('meterDetailModal');

  // ================= 1. INITIALIZATION =================
  function init() {
    initClock();
    initSidebarController();
    initNavigation();
    initTimeframeController();
    initCharts();
    updateViewForActiveFilter();
    renderTable();
    renderAllDedicatedTables();
    setupEventListeners();
    startSimulation();
  }

  // ================= 2. LIVE CLOCK =================
  function initClock() {
    function updateClock() {
      const now = new Date();
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
      const dateStr = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
      const timeStr = `${String(now.getHours()).padStart(2, '0')}.${String(now.getMinutes()).padStart(2, '0')}.${String(now.getSeconds()).padStart(2, '0')}`;
      if (headerLiveTime) {
        headerLiveTime.textContent = `${dateStr}, ${timeStr} WIB`;
      }
    }
    updateClock();
    setInterval(updateClock, 1000);
  }

  // Toast Notification Helper
  function showToast(message, isSuccess = true) {
    const toast = document.getElementById('appToast');
    const toastMsg = document.getElementById('toastMessage');
    const toastIcon = document.getElementById('toastIcon');
    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    if (toastIcon) toastIcon.textContent = isSuccess ? '✓' : 'ℹ';
    toast.className = `toast-notification show ${isSuccess ? 'success' : ''}`;
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // ================= 3. SIDEBAR SLIDE & COLLAPSE CONTROLLER =================
  function initSidebarController() {
    const btnToggleSidebar = document.getElementById('btnToggleSidebar');
    const btnCloseSidebarMobile = document.getElementById('btnCloseSidebarMobile');
    const sidebarBackdrop = document.getElementById('sidebarBackdrop');
    const appSidebar = document.getElementById('appSidebar');

    // Header Banner Menu Toggle Button
    if (btnToggleSidebar) {
      btnToggleSidebar.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSidebar();
      });
    }

    // Mobile / Tablet Drawer Close Button
    if (btnCloseSidebarMobile) {
      btnCloseSidebarMobile.addEventListener('click', (e) => {
        e.stopPropagation();
        closeMobileSidebar();
      });
    }

    // Close mobile drawer when clicking backdrop
    if (sidebarBackdrop) {
      sidebarBackdrop.addEventListener('click', () => {
        closeMobileSidebar();
      });
    }

    // Auto-close mobile drawer when selecting any menu item
    document.querySelectorAll('.sidebar-menu-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
          closeMobileSidebar();
        }
      });
    });

    // Window resize handler: clean up state if resizing between screen sizes
    window.addEventListener('resize', () => {
      const appLayout = document.querySelector('.app-layout');
      if (window.innerWidth > 1024) {
        closeMobileSidebar();
        if (appSidebar) {
          if (state.isSidebarCollapsed) {
            appSidebar.classList.add('collapsed');
            if (appLayout) appLayout.classList.add('sidebar-collapsed');
            syncSidebarUIState(false);
          } else {
            appSidebar.classList.remove('collapsed');
            if (appLayout) appLayout.classList.remove('sidebar-collapsed');
            syncSidebarUIState(true);
          }
        }
      } else {
        if (appSidebar) {
          appSidebar.classList.remove('collapsed');
          if (appLayout) appLayout.classList.remove('sidebar-collapsed');
          if (!appSidebar.classList.contains('open')) {
            syncSidebarUIState(false);
          }
        }
      }
    });

    // Keyboard Shortcut: Press '[' or 'Ctrl+B' to toggle, 'Esc' to close drawer
    window.addEventListener('keydown', (e) => {
      const isInput = ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName);
      if (!isInput) {
        if (e.key === '[' || (e.ctrlKey && (e.key === 'b' || e.key === 'B'))) {
          e.preventDefault();
          toggleSidebar();
        } else if (e.key === 'Escape') {
          if (window.innerWidth <= 1024 && appSidebar?.classList.contains('open')) {
            closeMobileSidebar();
          }
        }
      }
    });
  }

  function openMobileSidebar() {
    const appSidebar = document.getElementById('appSidebar');
    const backdrop = document.getElementById('sidebarBackdrop');
    if (appSidebar) appSidebar.classList.add('open');
    if (backdrop) backdrop.classList.add('active');
    document.body.classList.add('drawer-open');
    syncSidebarUIState(true);
  }

  function closeMobileSidebar() {
    const appSidebar = document.getElementById('appSidebar');
    const backdrop = document.getElementById('sidebarBackdrop');
    if (appSidebar) appSidebar.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
    document.body.classList.remove('drawer-open');
    syncSidebarUIState(false);
  }

  function toggleSidebar() {
    const appSidebar = document.getElementById('appSidebar');
    if (!appSidebar) return;

    if (window.innerWidth <= 1024) {
      if (appSidebar.classList.contains('open')) {
        closeMobileSidebar();
      } else {
        openMobileSidebar();
      }
    } else {
      const willBeCollapsed = !appSidebar.classList.contains('collapsed');
      appSidebar.classList.toggle('collapsed');
      const appLayout = document.querySelector('.app-layout');
      if (appLayout) {
        appLayout.classList.toggle('sidebar-collapsed', willBeCollapsed);
      }
      state.isSidebarCollapsed = willBeCollapsed;
      syncSidebarUIState(!willBeCollapsed);
    }
  }

  function syncSidebarUIState(isOpen) {
    const btnToggleSidebar = document.getElementById('btnToggleSidebar');
    const toggleText = document.getElementById('btnSidebarToggleText');

    if (isOpen) {
      if (toggleText) toggleText.textContent = 'Navigation Menu';
      if (btnToggleSidebar) {
        btnToggleSidebar.classList.remove('collapsed-mode');
        btnToggleSidebar.title = 'Hide Navigation Menu';
      }
    } else {
      if (toggleText) toggleText.textContent = 'Open Menu';
      if (btnToggleSidebar) {
        btnToggleSidebar.classList.add('collapsed-mode');
        btnToggleSidebar.title = 'Show Navigation Menu';
      }
    }
  }

  // ================= 4. MULTI-VIEW NAVIGATION & ROUTING =================
  window.switchMenuView = function(viewId, filterKey = 'all') {
    state.activeView = viewId;
    state.activeFilter = filterKey;

    // 1. Toggle visibility of all views
    document.querySelectorAll('.menu-view').forEach(v => {
      if (v.id === viewId) {
        v.classList.add('active');
        v.style.display = 'block';
      } else {
        v.classList.remove('active');
        v.style.display = 'none';
      }
    });

    // 2. Toggle active state on sidebar buttons
    document.querySelectorAll('.sidebar-menu-btn').forEach(btn => {
      if (btn.dataset.view === viewId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // 3. Update Header Banner
    const headerConfigs = {
      'view-dashboard': {
        title: 'Dashboard Utama',
        subtitle: 'Selamat datang, Division Head & Tim Utility Engineering PT Musashi Auto Parts Indonesia',
        tag: 'Gardu 20kV Cubicle Schneider SM6 · Seluruh Substation Pabrik'
      },
      'view-electrical-1': {
        title: 'Electrical Room 1 · Factory 1',
        subtitle: 'Gardu 20kV Suplai Billet Heater Komatsu, LVMDB 380V/200V, dan Trafo Tr 01 s/d Tr 05',
        tag: 'Substation Factory 1 · 14 Unit Feeder & Trafo Live'
      },
      'view-electrical-2-1': {
        title: 'Electrical Room 2.1 · Factory 2.1',
        subtitle: 'Gardu 20kV Suplai Billet Heater 1100 kVA, LV-MDB, dan Trafo Tr 06 s/d Tr 10',
        tag: 'Substation Factory 2.1 · 11 Unit Feeder & Trafo Live'
      },
      'view-electrical-2': {
        title: 'Electrical Room 2 · Factory 2',
        subtitle: 'Gardu 20kV Suplai Forging Titan 1200T, Kurimoto, dan Trafo Tr 11 s/d Tr 16',
        tag: 'Substation Factory 2 · 12 Unit Feeder & Trafo Live'
      },
      'view-electrical-3': {
        title: 'Electrical Room 3 · Factory 3',
        subtitle: 'Gardu 20kV Suplai Pompa Cooling Tower Sentral, HT Carburizing, dan Trafo Tr 17 s/d Tr 19',
        tag: 'Substation Factory 3 · 7 Unit Feeder & Trafo Live'
      },
      'view-forging': {
        title: 'Electrical Substation · Lini Mesin Forging Press',
        subtitle: 'Monitoring Khusus Feeder Komatsu 630T/1600T, Kurimoto, Titan 1200T, dan Billet Heater',
        tag: '39 Unit Feeder Forging · Factory 1, 2, dan 3'
      },
      'view-heattreatment': {
        title: 'Electrical Substation · Lini Heat Treatment (HT)',
        subtitle: 'Monitoring Khusus Billet Heater 6.6kV, Carburizing, Tempering, Washing, & Normalizing',
        tag: '29 Unit Feeder Heat Treatment · Pabrik Musashi'
      },
      'view-reports': {
        title: 'Pusat Laporan & Rekapitulasi Energi Listrik',
        subtitle: 'Rekapitulasi Resmi Tagihan PLN I-3/TM, Audit Nol-Denda kVARh, dan ESG Carbon Footprint',
        tag: 'Audit Energi Listrik PT Musashi Auto Parts Indonesia'
      }
    };

    const cfg = headerConfigs[viewId] || headerConfigs['view-dashboard'];
    const bannerTitle = document.getElementById('bannerTitle');
    const bannerSubtitle = document.getElementById('bannerSubtitle');
    const bannerAreaTag = document.getElementById('bannerAreaTag');
    if (bannerTitle) bannerTitle.textContent = cfg.title;
    if (bannerSubtitle) bannerSubtitle.textContent = cfg.subtitle;
    if (bannerAreaTag) bannerAreaTag.textContent = cfg.tag;

    // 4. Update data on selected view
    if (viewId === 'view-dashboard') {
      updateViewForActiveFilter();
      renderTable();
    }
    renderAllDedicatedTables();

    // 5. Scroll smoothly to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 6. Close mobile sidebar drawer if on mobile
    if (window.innerWidth <= 1024) {
      const appSidebar = document.getElementById('appSidebar');
      if (appSidebar && appSidebar.classList.contains('open')) {
        appSidebar.classList.remove('open');
        const toggleText = document.getElementById('btnSidebarToggleText');
        if (toggleText) toggleText.textContent = 'Menu';
      }
    }
  };

  function initNavigation() {
    // Connect all sidebar menu buttons
    document.querySelectorAll('.sidebar-menu-btn').forEach(btn => {
      const targetView = btn.dataset.view;
      if (targetView) {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          window.switchMenuView(targetView, btn.dataset.filter || 'all');
        });
      }
    });

    // Sub-Navbar Pills Click Handlers
    const subPills = document.querySelectorAll('.sub-nav-pill');
    subPills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        e.stopPropagation();
        const f = pill.dataset.subfilter || 'all';
        setActiveFilter(f);
      });
    });
  }

  // ================= 3B. TIMEFRAME & DAY CONTROLLER =================
  function initTimeframeController() {
    const pills = document.querySelectorAll('.timeframe-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        e.preventDefault();
        const period = pill.dataset.period || 'today';
        setTimeframePeriod(period);
      });
    });

    // Day navigation buttons (Prev Day / Next Day)
    const btnPrevDay = document.getElementById('btnPrevDay');
    const btnNextDay = document.getElementById('btnNextDay');
    const nativeDatePicker = document.getElementById('nativeDatePicker');

    if (btnPrevDay) {
      btnPrevDay.addEventListener('click', () => {
        if (state.activePeriod === 'today') {
          setTimeframePeriod('yesterday');
        } else {
          setTimeframePeriod('yesterday');
        }
      });
    }

    if (btnNextDay) {
      btnNextDay.addEventListener('click', () => {
        setTimeframePeriod('today');
      });
    }

    if (nativeDatePicker) {
      nativeDatePicker.addEventListener('change', (e) => {
        const val = e.target.value;
        if (!val) return;
        const now = new Date();
        const y = now.getFullYear();
        const m = String(now.getMonth() + 1).padStart(2, '0');
        const d = String(now.getDate()).padStart(2, '0');
        const todayStr = `${y}-${m}-${d}`;

        const yest = new Date();
        yest.setDate(now.getDate() - 1);
        const yestStr = `${yest.getFullYear()}-${String(yest.getMonth() + 1).padStart(2, '0')}-${String(yest.getDate()).padStart(2, '0')}`;

        if (val === todayStr) {
          setTimeframePeriod('today');
        } else if (val === yestStr) {
          setTimeframePeriod('yesterday');
        } else {
          setTimeframePeriod('yesterday');
          const activeDateDisplay = document.getElementById('activeDateDisplay');
          if (activeDateDisplay) {
            const parts = val.split('-');
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
            const mIdx = parseInt(parts[1], 10) - 1;
            activeDateDisplay.textContent = `Tercatat · ${parts[2]} ${months[mIdx]} ${parts[0]}`;
          }
        }
      });
    }
  }

  function setTimeframePeriod(period) {
    state.activePeriod = period;

    // Update active pill styling
    document.querySelectorAll('.timeframe-pill').forEach(pill => {
      if (pill.dataset.period === period) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    // Update Active Date Display & Nav Stepper state
    const activeDateDisplay = document.getElementById('activeDateDisplay');
    const btnPrevDay = document.getElementById('btnPrevDay');
    const btnNextDay = document.getElementById('btnNextDay');
    const monitoringStatusText = document.getElementById('monitoringStatusText');

    if (activeDateDisplay) {
      if (period === 'today') {
        activeDateDisplay.textContent = 'Today · 10 Nov 2026';
        if (btnPrevDay) btnPrevDay.disabled = false;
        if (btnNextDay) btnNextDay.disabled = true;
        if (monitoringStatusText) monitoringStatusText.textContent = 'Live SCADA';
      } else if (period === 'yesterday') {
        activeDateDisplay.textContent = 'Yesterday · 09 Nov 2026';
        if (btnPrevDay) btnPrevDay.disabled = true;
        if (btnNextDay) btnNextDay.disabled = false;
        if (monitoringStatusText) monitoringStatusText.textContent = 'H-1 Audited';
      } else if (period === '7days') {
        activeDateDisplay.textContent = 'Last 7 Days';
        if (btnPrevDay) btnPrevDay.disabled = false;
        if (btnNextDay) btnNextDay.disabled = false;
        if (monitoringStatusText) monitoringStatusText.textContent = '7-Day Summary';
      } else if (period === 'month') {
        activeDateDisplay.textContent = 'This Month · MTD Nov 2026';
        if (btnPrevDay) btnPrevDay.disabled = false;
        if (btnNextDay) btnNextDay.disabled = false;
        if (monitoringStatusText) monitoringStatusText.textContent = 'MTD Summary';
      }
    }

    updateViewForActiveFilter();
    renderTable();
  }
  window.setTimeframePeriod = setTimeframePeriod;

  // Central function to set filter and synchronize all navigation controls
  function setActiveFilter(filterKey) {
    state.activeFilter = filterKey;
    state.currentPage = 1;

    // 1. Update Sub-Navbar Pills Active State
    const subPills = document.querySelectorAll('.sub-nav-pill');
    subPills.forEach(pill => {
      const sf = pill.dataset.subfilter;
      if (sf === filterKey || (filterKey === 'all' && sf === 'all') || (filterKey === 'electrical' && sf === 'all')) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    // 2. Update Alert Banner Messages
    const alertCountBadge = document.getElementById('alertCountBadge');
    const alertDescText = document.getElementById('alertDescText');
    if (alertCountBadge && alertDescText) {
      if (filterKey === 'fac1') {
        alertCountBadge.textContent = '1 Meter Perlu Pengecekan';
        alertDescText.textContent = 'Power factor Trafo Tr 01 bernilai 0,84 (di bawah standar target PLN ≥ 0,85). Periksa step kapasitor APFC #01 untuk mencegah penalti kVARh.';
      } else if (filterKey === 'fac2_1') {
        alertCountBadge.textContent = 'Semua Normal';
        alertDescText.textContent = 'Kondisi beban Transformator Tr 06 s/d Tr 10 dan Feeder F4-0 s/d F4-5 beroperasi dalam rentang optimal (> 0,90).';
      } else if (filterKey === 'fac2') {
        alertCountBadge.textContent = '2 Meter Perlu Pengecekan';
        alertDescText.textContent = 'Trafo Tr 12 beban mendekati 85% saat peak forging shift 1. Pantau suhu transformator dan arus sekunder.';
      } else if (filterKey === 'fac3') {
        alertCountBadge.textContent = 'Semua Normal';
        alertDescText.textContent = 'Kondisi beban Transformator Tr 17 s/d Tr 19 dan power factor beroperasi dalam rentang optimal (> 0,90).';
      } else if (filterKey === 'forging') {
        alertCountBadge.textContent = '2 Trafo Beban Tinggi';
        alertDescText.textContent = 'Lini Mesin Forging Press Tr 12 & Tr 03 mengalami lonjakan arus saat shift siang. Pastikan APFC aktif penuh.';
      } else if (filterKey === 'heattreatment') {
        alertCountBadge.textContent = 'Operasi Stabil';
        alertDescText.textContent = 'Billet Induction Heater Tr 01, 10, 15, 16 pada tegangan 6.6kV beroperasi stabil dengan PF 0,95.';
      } else {
        alertCountBadge.textContent = '3 Meter Perlu Pengecekan';
        alertDescText.textContent = 'Power factor di bawah standar PLN (< 0,85) terdeteksi pada Trafo Tr 01 (0,84) dan APFC Cap Bank. Mohon segera periksa step regulator kapasitor untuk mencegah denda kVARh PLN.';
      }
    }

    // 3. Update Views & Table
    updateViewForActiveFilter();
    renderTable();
  }

  // ================= 4. UPDATE VIEW BASED ON ACTIVE FILTER & TIMEFRAME =================
  function updateViewForActiveFilter() {
    const filterKey = state.activeFilter;
    const data = CATEGORY_BASELINES[filterKey] || CATEGORY_BASELINES.electrical || CATEGORY_BASELINES.all;
    const period = state.activePeriod || 'today';

    // 1. Update KPI Values & Timeframe Comparison Badges
    if (period === 'today') {
      if (kpiDayaTitle) kpiDayaTitle.textContent = 'Total Active Power';
      if (kpiDayaVal) kpiDayaVal.textContent = data.kw.toLocaleString('id-ID');
      if (kpiDayaSub) kpiDayaSub.textContent = 'Total live electrical load';
      if (kpiDayaPrev) kpiDayaPrev.textContent = `Yesterday: ${(data.kwYesterday || data.kw).toLocaleString('id-ID')} kW`;
      if (kpiDayaDelta) {
        const dKw = (data.kw - (data.kwYesterday || data.kw));
        const dSign = dKw > 0 ? '+' : '';
        const dArrow = dKw <= 0 ? '▼' : '▲';
        kpiDayaDelta.className = `kpi-delta-tag ${dKw <= 0 ? 'down' : 'up'}`;
        kpiDayaDelta.textContent = `${dArrow} ${dSign}${dKw.toLocaleString('id-ID')} kW`;
      }

      if (kpiEnergiTitle) kpiEnergiTitle.textContent = 'Energy Today';
      if (kpiEnergiVal) kpiEnergiVal.textContent = data.kwh.toLocaleString('id-ID');
      if (kpiEnergiSub) kpiEnergiSub.textContent = 'Accumulated since 00:00 WIB';
      if (kpiEnergiPrev) kpiEnergiPrev.textContent = `Yesterday: ${(data.kwhYesterday || data.kwh).toLocaleString('id-ID')} kWh`;
      if (kpiEnergiDelta) {
        const dKwh = data.deltaKwh || 0;
        const dPct = data.deltaKwhPct || '0%';
        const dArrow = dKwh <= 0 ? '▼' : '▲';
        kpiEnergiDelta.className = `kpi-delta-tag ${dKwh <= 0 ? 'down' : 'up'}`;
        kpiEnergiDelta.textContent = `${dArrow} ${Math.abs(dKwh).toLocaleString('id-ID')} kWh (${dPct})`;
      }

      if (kpiBiayaTitle) kpiBiayaTitle.textContent = 'Estimated Cost';
      if (kpiBiayaVal) kpiBiayaVal.textContent = data.cost;
      if (kpiBiayaSub) kpiBiayaSub.textContent = 'PLN industrial tariff (I-3/TM)';
      if (kpiBiayaPrev) kpiBiayaPrev.textContent = `Yesterday: ${data.costYesterday || data.cost}`;
      if (kpiBiayaDelta) {
        kpiBiayaDelta.className = `kpi-delta-tag ${data.deltaCost && data.deltaCost.startsWith('-') ? 'down' : 'up'}`;
        kpiBiayaDelta.textContent = `${data.deltaCost ? data.deltaCost.replace('-', '▼ -') : '▼ Saving'} vs H-1`;
      }

      if (kpiPeakTitle) kpiPeakTitle.textContent = 'Peak Demand';
      if (kpiPeakVal) kpiPeakVal.textContent = data.peak || '16.820';
      if (kpiPeakSub) kpiPeakSub.textContent = data.peakSub || 'Today\'s peak · Safe grid margin';
      if (kpiPeakPrev) kpiPeakPrev.textContent = `Yesterday Peak: ${data.peakYesterday || data.peak} kW`;
      if (kpiPeakDelta) {
        kpiPeakDelta.className = `kpi-delta-tag ${data.deltaPeak && data.deltaPeak.startsWith('-') ? 'down' : 'up'}`;
        kpiPeakDelta.textContent = `${data.deltaPeak ? data.deltaPeak.replace('-', '▼ -') : '▼ Efficient'}`;
      }

      if (kpiUtilTitle) kpiUtilTitle.textContent = 'Utility Delta (vs Yesterday)';
      const dKwh = (data.deltaKwh !== undefined) ? data.deltaKwh : -7086;
      const dPct = data.deltaKwhPct || '-3.5%';
      const isSaved = dKwh <= 0;
      const sign = dKwh > 0 ? '+' : '';
      if (kpiUtilVal) {
        kpiUtilVal.textContent = `${sign}${dKwh.toLocaleString('id-ID')}`;
        kpiUtilVal.style.color = isSaved ? 'var(--color-green)' : 'var(--color-amber)';
      }
      const kpiUtilUnit = document.getElementById('kpiUtilUnit');
      if (kpiUtilUnit) kpiUtilUnit.textContent = 'kWh';
      if (kpiUtilSub) {
        kpiUtilSub.textContent = isSaved 
          ? `▼ -${Math.abs(dKwh).toLocaleString('id-ID')} kWh (${dPct}) vs Yesterday (Saving)`
          : `▲ +${dKwh.toLocaleString('id-ID')} kWh (${dPct}) vs Yesterday`;
      }
      if (kpiUtilPrev) kpiUtilPrev.textContent = `Yesterday: ${(data.kwhYesterday || 0).toLocaleString('id-ID')} kWh`;
      if (kpiUtilDelta) {
        kpiUtilDelta.className = `kpi-delta-tag ${isSaved ? 'down' : 'up'}`;
        kpiUtilDelta.textContent = isSaved ? `▼ ${dPct}` : `▲ ${dPct}`;
      }

      if (kpiCarbonTitle) kpiCarbonTitle.textContent = 'Carbon Emission (CO₂e)';
      if (kpiCarbonVal) kpiCarbonVal.textContent = data.carbonTon;
      if (kpiCarbonSub) kpiCarbonSub.textContent = 'Jamali grid factor 0.79 kg/kWh';
      if (kpiCarbonPrev) kpiCarbonPrev.textContent = `Yesterday: ${data.carbonYesterday || data.carbonTon} ton`;
      if (kpiCarbonDelta) {
        kpiCarbonDelta.className = `kpi-delta-tag ${data.deltaCarbon && data.deltaCarbon.startsWith('-') ? 'down' : 'up'}`;
        kpiCarbonDelta.textContent = `${data.deltaCarbon ? data.deltaCarbon.replace('-', '▼ -') : '▼ Reduced'}`;
      }

      if (timeframeSummaryText) {
        const dKwh = Math.abs(data.deltaKwh || 0);
        timeframeSummaryText.innerHTML = `Today: <strong>${data.kwh.toLocaleString('id-ID')} kWh</strong> (saving <strong>${dKwh.toLocaleString('id-ID')} kWh / ${data.deltaKwhPct || '0%'}</strong> vs yesterday)`;
      }

      if (chart24hTitle) chart24hTitle.textContent = '24-Hour Load Profile: Today vs Yesterday';
      if (chart24hSub) chart24hSub.textContent = '3-Hour interval electrical load comparison: Today (Solid Blue) vs Yesterday (Dashed Gray)';

      update24hChart(data.curve24h, data.curveMax, data.curveStep, data.curve24hYesterday, ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00']);

    } else if (period === 'yesterday') {
      if (kpiDayaTitle) kpiDayaTitle.textContent = 'Yesterday Peak Demand';
      if (kpiDayaVal) kpiDayaVal.textContent = (data.kwYesterday || data.kw).toLocaleString('id-ID');
      if (kpiDayaSub) kpiDayaSub.textContent = 'Average peak hours load';
      if (kpiDayaPrev) kpiDayaPrev.textContent = `Today: ${data.kw.toLocaleString('id-ID')} kW`;
      if (kpiDayaDelta) {
        kpiDayaDelta.className = 'kpi-delta-tag up';
        kpiDayaDelta.textContent = 'H-1 Audited';
      }

      if (kpiEnergiTitle) kpiEnergiTitle.textContent = 'Yesterday Total Energy';
      if (kpiEnergiVal) kpiEnergiVal.textContent = (data.kwhYesterday || data.kwh).toLocaleString('id-ID');
      if (kpiEnergiSub) kpiEnergiSub.textContent = 'Full 24h audited grid consumption';
      if (kpiEnergiPrev) kpiEnergiPrev.textContent = `Today: ${data.kwh.toLocaleString('id-ID')} kWh`;
      if (kpiEnergiDelta) {
        kpiEnergiDelta.className = 'kpi-delta-tag up';
        kpiEnergiDelta.textContent = 'Daily Recap';
      }

      if (kpiBiayaTitle) kpiBiayaTitle.textContent = 'Yesterday Energy Cost';
      if (kpiBiayaVal) kpiBiayaVal.textContent = data.costYesterday || data.cost;
      if (kpiBiayaSub) kpiBiayaSub.textContent = 'Full audited daily billing';
      if (kpiBiayaPrev) kpiBiayaPrev.textContent = `Today: ${data.cost}`;
      if (kpiBiayaDelta) {
        kpiBiayaDelta.className = 'kpi-delta-tag neutral';
        kpiBiayaDelta.textContent = 'Audited I-3/TM';
      }

      if (kpiPeakTitle) kpiPeakTitle.textContent = 'Yesterday Highest Peak';
      if (kpiPeakVal) kpiPeakVal.textContent = data.peakYesterday || data.peak;
      if (kpiPeakSub) kpiPeakSub.textContent = 'Recorded at 14:15 WIB';
      if (kpiPeakPrev) kpiPeakPrev.textContent = `Today: ${data.peak} kW`;
      if (kpiPeakDelta) {
        kpiPeakDelta.className = 'kpi-delta-tag neutral';
        kpiPeakDelta.textContent = 'Peak H-1';
      }

      if (kpiUtilTitle) kpiUtilTitle.textContent = 'Yesterday Delta (vs H-2)';
      if (kpiUtilVal) {
        kpiUtilVal.textContent = '-2.850';
        kpiUtilVal.style.color = 'var(--color-green)';
      }
      const kpiUtilUnitY = document.getElementById('kpiUtilUnit');
      if (kpiUtilUnitY) kpiUtilUnitY.textContent = 'kWh';
      if (kpiUtilSub) kpiUtilSub.textContent = '▼ -2,850 kWh (-1.4%) vs H-2 (Saving)';
      if (kpiUtilPrev) kpiUtilPrev.textContent = 'H-2: 207,000 kWh';
      if (kpiUtilDelta) {
        kpiUtilDelta.className = 'kpi-delta-tag down';
        kpiUtilDelta.textContent = '▼ -1.4%';
      }

      if (kpiCarbonTitle) kpiCarbonTitle.textContent = 'Yesterday Carbon Emission';
      if (kpiCarbonVal) kpiCarbonVal.textContent = data.carbonYesterday || data.carbonTon;
      if (kpiCarbonSub) kpiCarbonSub.textContent = 'H-1 verified operational emissions';
      if (kpiCarbonPrev) kpiCarbonPrev.textContent = `Today: ${data.carbonTon} ton`;
      if (kpiCarbonDelta) {
        kpiCarbonDelta.className = 'kpi-delta-tag neutral';
        kpiCarbonDelta.textContent = 'Verified H-1';
      }

      if (timeframeSummaryText) {
        timeframeSummaryText.innerHTML = `Yesterday: <strong>${(data.kwhYesterday || data.kwh).toLocaleString('id-ID')} kWh</strong> (Peak load ${data.peakYesterday || data.peak} kW · Cost ${data.costYesterday || data.cost})`;
      }

      if (chart24hTitle) chart24hTitle.textContent = 'Yesterday Load Profile (Full 24 Hours)';
      if (chart24hSub) chart24hSub.textContent = 'Historical 24-hour load curve per 3-hour interval';

      update24hChart(data.curve24hYesterday || data.curve24h, data.curveMax, data.curveStep, null, ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00']);

    } else if (period === '7days') {
      const d7 = data.days7 || { totalKwh: 1353514, avgKwh: 193359, totalCost: 'Rp 1,95 M', peakMax: 17350, labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], kwh: [194200, 201300, 208400, 205600, 204150, 197064, 142800] };

      if (kpiDayaTitle) kpiDayaTitle.textContent = '7-Day Peak Demand';
      if (kpiDayaVal) kpiDayaVal.textContent = d7.peakMax.toLocaleString('id-ID');
      if (kpiDayaSub) kpiDayaSub.textContent = 'Highest weekly peak (kW)';
      if (kpiDayaPrev) kpiDayaPrev.textContent = 'Target Limit: 18,000 kW';
      if (kpiDayaDelta) {
        kpiDayaDelta.className = 'kpi-delta-tag down';
        kpiDayaDelta.textContent = '▼ Margin 650 kW';
      }

      if (kpiEnergiTitle) kpiEnergiTitle.textContent = '7-Day Total Energy';
      if (kpiEnergiVal) kpiEnergiVal.textContent = d7.totalKwh.toLocaleString('id-ID');
      if (kpiEnergiSub) kpiEnergiSub.textContent = `Average: ${d7.avgKwh.toLocaleString('id-ID')} kWh/day`;
      if (kpiEnergiPrev) kpiEnergiPrev.textContent = 'Previous Week: 1,380,000 kWh';
      if (kpiEnergiDelta) {
        kpiEnergiDelta.className = 'kpi-delta-tag down';
        kpiEnergiDelta.textContent = '▼ -1.9% Saving';
      }

      if (kpiBiayaTitle) kpiBiayaTitle.textContent = '7-Day Estimated Cost';
      if (kpiBiayaVal) kpiBiayaVal.textContent = d7.totalCost;
      if (kpiBiayaSub) kpiBiayaSub.textContent = 'Cumulative 7-day cost';
      if (kpiBiayaPrev) kpiBiayaPrev.textContent = 'Previous Week: Rp 1.99 M';
      if (kpiBiayaDelta) {
        kpiBiayaDelta.className = 'kpi-delta-tag down';
        kpiBiayaDelta.textContent = '▼ Saved Rp 40 jt';
      }

      if (kpiPeakTitle) kpiPeakTitle.textContent = 'Average Daily Peak';
      if (kpiPeakVal) kpiPeakVal.textContent = '16.420';
      if (kpiPeakSub) kpiPeakSub.textContent = 'Stable shift peak load';
      if (kpiPeakPrev) kpiPeakPrev.textContent = 'Contract Limit: 20,000 kVA';
      if (kpiPeakDelta) {
        kpiPeakDelta.className = 'kpi-delta-tag down';
        kpiPeakDelta.textContent = 'Compliant';
      }

      if (kpiUtilTitle) kpiUtilTitle.textContent = '7-Day Utility Delta';
      if (kpiUtilVal) {
        kpiUtilVal.textContent = '-26.486';
        kpiUtilVal.style.color = 'var(--color-green)';
      }
      const kpiUtilUnit7 = document.getElementById('kpiUtilUnit');
      if (kpiUtilUnit7) kpiUtilUnit7.textContent = 'kWh';
      if (kpiUtilSub) kpiUtilSub.textContent = '▼ -26,486 kWh (-1.9%) vs previous week';
      if (kpiUtilPrev) kpiUtilPrev.textContent = `Previous Week: 1,380,000 kWh`;
      if (kpiUtilDelta) {
        kpiUtilDelta.className = 'kpi-delta-tag down';
        kpiUtilDelta.textContent = '▼ -1.9%';
      }

      if (kpiCarbonTitle) kpiCarbonTitle.textContent = '7-Day Carbon Emission';
      if (kpiCarbonVal) kpiCarbonVal.textContent = ((d7.totalKwh * 0.79) / 1000).toFixed(1);
      if (kpiCarbonSub) kpiCarbonSub.textContent = 'Cumulative 7-day CO₂ tons';
      if (kpiCarbonPrev) kpiCarbonPrev.textContent = 'Previous Week: 1,090 ton';
      if (kpiCarbonDelta) {
        kpiCarbonDelta.className = 'kpi-delta-tag down';
        kpiCarbonDelta.textContent = '▼ -21 ton CO₂';
      }

      if (timeframeSummaryText) {
        timeframeSummaryText.innerHTML = `Last 7 Days: Total <strong>${d7.totalKwh.toLocaleString('id-ID')} kWh</strong> (Average ${d7.avgKwh.toLocaleString('id-ID')} kWh/day · Cost ${d7.totalCost})`;
      }

      if (chart24hTitle) chart24hTitle.textContent = '7-Day Energy Consumption Trend (Monday - Sunday)';
      if (chart24hSub) chart24hSub.textContent = 'Daily energy consumption across all substations and production lines';

      const maxKwh = Math.max(...d7.kwh);
      const chartMax = Math.ceil((maxKwh * 1.2) / 20000) * 20000;
      update24hChart(d7.kwh, chartMax, Math.round(chartMax / 4), null, d7.labels);

    } else if (period === 'month') {
      const mMtd = data.monthMtd || { kwh: 2150400, cost: 'Rp 3,11 M', peak: '17.480', util: '70,2%' };

      if (kpiDayaTitle) kpiDayaTitle.textContent = 'Month Peak Demand';
      if (kpiDayaVal) kpiDayaVal.textContent = mMtd.peak;
      if (kpiDayaSub) kpiDayaSub.textContent = 'Highest during current month (kW)';
      if (kpiDayaPrev) kpiDayaPrev.textContent = 'Contract: 20,000 kVA';
      if (kpiDayaDelta) {
        kpiDayaDelta.className = 'kpi-delta-tag down';
        kpiDayaDelta.textContent = 'Margin 2,520 kVA';
      }

      if (kpiEnergiTitle) kpiEnergiTitle.textContent = 'Month Total Energy (MTD)';
      if (kpiEnergiVal) kpiEnergiVal.textContent = mMtd.kwh.toLocaleString('id-ID');
      if (kpiEnergiSub) kpiEnergiSub.textContent = 'Month-to-Date cumulative';
      if (kpiEnergiPrev) kpiEnergiPrev.textContent = 'Forecast: 5.90M kWh';
      if (kpiEnergiDelta) {
        kpiEnergiDelta.className = 'kpi-delta-tag down';
        kpiEnergiDelta.textContent = 'On Track';
      }

      if (kpiBiayaTitle) kpiBiayaTitle.textContent = 'Month Energy Cost (MTD)';
      if (kpiBiayaVal) kpiBiayaVal.textContent = mMtd.cost;
      if (kpiBiayaSub) kpiBiayaSub.textContent = 'End of month forecast: Rp 8.50 M';
      if (kpiBiayaPrev) kpiBiayaPrev.textContent = 'Last Month: Rp 8.62 M';
      if (kpiBiayaDelta) {
        kpiBiayaDelta.className = 'kpi-delta-tag down';
        kpiBiayaDelta.textContent = '▼ Trend -1.4%';
      }

      if (kpiPeakTitle) kpiPeakTitle.textContent = 'Peak Grid Allowance (WBP)';
      if (kpiPeakVal) kpiPeakVal.textContent = mMtd.peak;
      if (kpiPeakSub) kpiPeakSub.textContent = 'Peak hours interval 17:00-22:00';
      if (kpiPeakPrev) kpiPeakPrev.textContent = 'Target Limit: 18,000 kW';
      if (kpiPeakDelta) {
        kpiPeakDelta.className = 'kpi-delta-tag down';
        kpiPeakDelta.textContent = 'Compliant';
      }

      if (kpiUtilTitle) kpiUtilTitle.textContent = 'Month Utility Delta (MTD)';
      if (kpiUtilVal) {
        kpiUtilVal.textContent = '-31.200';
        kpiUtilVal.style.color = 'var(--color-green)';
      }
      const kpiUtilUnitM = document.getElementById('kpiUtilUnit');
      if (kpiUtilUnitM) kpiUtilUnitM.textContent = 'kWh';
      if (kpiUtilSub) kpiUtilSub.textContent = '▼ Saving trend 31,200 kWh (-1.4%) vs last month';
      if (kpiUtilPrev) kpiUtilPrev.textContent = `Last Month: 2,181,600 kWh`;
      if (kpiUtilDelta) {
        kpiUtilDelta.className = 'kpi-delta-tag down';
        kpiUtilDelta.textContent = '▼ -1.4%';
      }

      if (kpiCarbonTitle) kpiCarbonTitle.textContent = 'Month Carbon Emission (MTD)';
      if (kpiCarbonVal) kpiCarbonVal.textContent = ((mMtd.kwh * 0.79) / 1000).toFixed(1);
      if (kpiCarbonSub) kpiCarbonSub.textContent = 'CO₂ emissions MTD (Jamali grid)';
      if (kpiCarbonPrev) kpiCarbonPrev.textContent = 'Target: < 4,700 ton';
      if (kpiCarbonDelta) {
        kpiCarbonDelta.className = 'kpi-delta-tag down';
        kpiCarbonDelta.textContent = 'On Track';
      }

      if (timeframeSummaryText) {
        timeframeSummaryText.innerHTML = `This Month (MTD): Total <strong>${mMtd.kwh.toLocaleString('id-ID')} kWh</strong> (Current Cost ${mMtd.cost} · Average Utilization ${mMtd.util})`;
      }

      if (chart24hTitle) chart24hTitle.textContent = 'Weekly Energy Consumption (MTD)';
      if (chart24hSub) chart24hSub.textContent = 'Energy consumption progression from Week 1 to current week';

      update24hChart([510000, 524000, 538000, 482000, 96400], 650000, 150000, null, ['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4', 'Current']);
    }

    // Common KPI updates
    if (kpiPfVal) kpiPfVal.textContent = data.pf;
    if (kpiPfSub) kpiPfSub.textContent = 'Optimal (target ≥ 0.85)';
    if (kpiOnlineVal) kpiOnlineVal.textContent = data.online;
    if (kpiOnlineSub) kpiOnlineSub.textContent = data.alertCount;

    // Sidebar Live Capsule Telemetry Sync
    const sideNavTotalKw = document.getElementById('sideNavTotalKw');
    const sideNavAvgPf = document.getElementById('sideNavAvgPf');
    const sideNavOnline = document.getElementById('sideNavOnline');
    if (sideNavTotalKw) sideNavTotalKw.textContent = `${data.kw.toLocaleString('id-ID')} kW`;
    if (sideNavAvgPf) sideNavAvgPf.textContent = data.pf;
    if (sideNavOnline) sideNavOnline.textContent = data.online;

    // 3. Update Top 8 Horizontal Bar Chart
    updateTop8Chart(TOP_8_DATA[filterKey] || TOP_8_DATA.electrical || TOP_8_DATA.all);

    // 4. Update Donut Chart Distribution
    updateDonutChart(filterKey);

    // 5. Update Perlu Perhatian List
    renderAttentionList(ATTENTION_ALERTS[filterKey] || ATTENTION_ALERTS.electrical || ATTENTION_ALERTS.all);

    // 6. Update Section Titles for Table
    const tableSectionTitle = document.getElementById('tableSectionTitle');
    const tableSectionSub = document.getElementById('tableSectionSub');
    if (tableSectionTitle && tableSectionSub) {
      if (filterKey === 'fac1') {
        tableSectionTitle.textContent = 'Electrical Room · Factory 1 Directory (14 Units)';
        tableSectionSub.textContent = 'Feeders F1-0 to F1-8 and Transformers Tr 01 to Tr 05 Substation Factory 1.';
      } else if (filterKey === 'fac2_1') {
        tableSectionTitle.textContent = 'Electrical Room · Factory 2.1 Directory (11 Units)';
        tableSectionSub.textContent = 'Feeders F4-0 to F4-5 and Transformers Tr 06 to Tr 10 Substation Factory 2.1.';
      } else if (filterKey === 'fac2') {
        tableSectionTitle.textContent = 'Electrical Room · Factory 2 Directory (12 Units)';
        tableSectionSub.textContent = 'Feeders F2-1 to F2-6 and Transformers Tr 11 to Tr 16 Substation Factory 2.';
      } else if (filterKey === 'fac3') {
        tableSectionTitle.textContent = 'Electrical Room · Factory 3 Directory (7 Units)';
        tableSectionSub.textContent = 'Feeders F3-0 to F3-3 and Transformers Tr 17 to Tr 19 Substation Factory 3.';
      } else if (filterKey === 'forging') {
        tableSectionTitle.textContent = 'Forging Press & Billet Heater Directory (39 Units)';
        tableSectionSub.textContent = 'Komatsu Presses 630T/1600T, Kurimoto, Titan 1200T, and Billet Heaters.';
      } else if (filterKey === 'heattreatment') {
        tableSectionTitle.textContent = 'Heat Treatment Furnace & Feeder Directory (29 Units)';
        tableSectionSub.textContent = 'Carburizing, Tempering, Washing, Normalizing, Shot Blast, & Vacuum Furnaces.';
      } else {
        tableSectionTitle.textContent = 'Digital Power Meter Directory (111 Units)';
        tableSectionSub.textContent = 'Realtime telemetry for 19 Transformers 20kV, 23 Substation Feeders, 39 Forging Lines, and 29 HT Furnaces.';
      }
    }
  }

  // ================= 5. CHARTS INITIALIZATION & UPDATES =================
  function initCharts() {
    const isDark = document.body.classList.contains('dark-theme');
    const defaultTextColor = isDark ? '#94a3b8' : '#64748b';
    const defaultGridColor = isDark ? 'rgba(255, 255, 255, 0.05)' : '#e2e8f0';

    Chart.defaults.font.family = "'Inter', -apple-system, sans-serif";
    Chart.defaults.color = defaultTextColor;

    // --- 1. Line Chart: Beban 24 Jam Terakhir (Dual Curve Hari Ini vs Kemarin) ---
    const ctx24h = document.getElementById('chart24h');
    if (ctx24h) {
      const gradient = ctx24h.getContext('2d').createLinearGradient(0, 0, 0, 240);
      gradient.addColorStop(0, 'rgba(2, 132, 199, 0.22)');
      gradient.addColorStop(1, 'rgba(2, 132, 199, 0.0)');

      chart24hInstance = new Chart(ctx24h, {
        type: 'line',
        data: {
          labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
          datasets: [
            {
              label: 'Hari Ini (Live)',
              data: CATEGORY_BASELINES.all.curve24h,
              borderColor: '#0284c7',
              borderWidth: 2.8,
              backgroundColor: gradient,
              fill: true,
              tension: 0.45,
              pointRadius: 3,
              pointHoverRadius: 6,
              pointHoverBackgroundColor: '#0284c7',
              pointHoverBorderColor: '#ffffff',
              pointHoverBorderWidth: 2
            },
            {
              label: 'Kemarin (H-1)',
              data: CATEGORY_BASELINES.all.curve24hYesterday,
              borderColor: '#94a3b8',
              borderWidth: 2,
              borderDash: [5, 4],
              backgroundColor: 'transparent',
              fill: false,
              tension: 0.45,
              pointRadius: 2,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: '#94a3b8',
              pointHoverBorderColor: '#ffffff',
              pointHoverBorderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            mode: 'index',
            intersect: false
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#0f172a',
              titleColor: '#ffffff',
              bodyColor: '#e2e8f0',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              borderWidth: 1,
              padding: 10,
              mode: 'index',
              intersect: false,
              callbacks: {
                label: (ctx) => {
                  const label = ctx.dataset.label || '';
                  const val = ctx.parsed.y !== null ? ctx.parsed.y.toLocaleString('id-ID') : '0';
                  const unit = (state.activePeriod === '7days' || state.activePeriod === 'month') ? 'kWh' : 'kW';
                  return `${label}: ${val} ${unit}`;
                },
                afterBody: (tooltipItems) => {
                  if (tooltipItems.length >= 2 && state.activePeriod === 'today') {
                    const todayVal = tooltipItems[0].parsed.y;
                    const yestVal = tooltipItems[1].parsed.y;
                    if (todayVal !== undefined && yestVal !== undefined) {
                      const diff = todayVal - yestVal;
                      const pct = yestVal ? ((diff / yestVal) * 100).toFixed(1) : '0';
                      const sign = diff > 0 ? '+' : '';
                      return `Selisih (Δ): ${sign}${diff.toLocaleString('id-ID')} kW (${sign}${pct}%)`;
                    }
                  }
                  return '';
                }
              }
            }
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: defaultTextColor, font: { size: 11 } }
            },
            y: {
              min: 0,
              max: CATEGORY_BASELINES.all.curveMax,
              grid: { color: defaultGridColor },
              ticks: {
                color: defaultTextColor,
                font: { size: 11 },
                stepSize: CATEGORY_BASELINES.all.curveStep,
                callback: (val) => val === 0 ? '0' : val.toLocaleString('id-ID')
              }
            }
          }
        }
      });
    }

    // --- 2. Donut Chart: Pembagian Pemakaian Energi ---
    const ctxDonut = document.getElementById('chartDonutEnergy');
    if (ctxDonut) {
      chartDonutInstance = new Chart(ctxDonut, {
        type: 'doughnut',
        data: {
          labels: ['Forging', 'Electrical Room', 'Kompresor', 'Pompa Air', 'Lobby'],
          datasets: [{
            data: [90603, 50825, 14256, 3872, 1069],
            backgroundColor: [
              '#38bdf8', // Forging (Blue)
              '#2dd4bf', // Electrical Room (Teal)
              '#fb923c', // Kompresor (Orange)
              '#34d399', // Pompa Air (Green)
              '#f43f5e'  // Lobby (Rose)
            ],
            borderWidth: 2,
            borderColor: '#ffffff',
            hoverOffset: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '68%',
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#0f172a',
              titleColor: '#ffffff',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              borderWidth: 1,
              padding: 10,
              callbacks: {
                label: (ctx) => {
                  const val = ctx.parsed;
                  const total = 160605;
                  const pct = ((val / total) * 100).toFixed(1);
                  return ` ${ctx.label}: ${val.toLocaleString('id-ID')} kWh (${pct}%)`;
                }
              }
            }
          }
        }
      });
    }

    // --- 3. Horizontal Bar Chart: 8 Meter dengan Pemakaian Tertinggi ---
    const ctxTop8 = document.getElementById('chartTop8Meters');
    if (ctxTop8) {
      const topData = TOP_8_DATA.all;
      chartTop8Instance = new Chart(ctxTop8, {
        type: 'bar',
        data: {
          labels: topData.map(d => d.name),
          datasets: [{
            data: topData.map(d => d.val),
            backgroundColor: '#0284c7',
            hoverBackgroundColor: '#8c2924',
            borderRadius: 4,
            barThickness: 16
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#0f172a',
              titleColor: '#ffffff',
              bodyColor: '#38bdf8',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              borderWidth: 1,
              padding: 9,
              displayColors: false,
              callbacks: {
                label: (ctx) => `Pemakaian: ${ctx.parsed.x.toLocaleString('id-ID')} kWh`
              }
            }
          },
          scales: {
            x: {
              min: 0,
              max: 20000,
              grid: { color: defaultGridColor },
              ticks: {
                color: defaultTextColor,
                font: { size: 10 },
                stepSize: 4000,
                callback: (val) => val === 0 ? '0' : val.toLocaleString('id-ID')
              }
            },
            y: {
              grid: { display: false },
              ticks: {
                color: defaultTextColor,
                font: { size: 11 }
              }
            }
          }
        }
      });
    }
  }

  function update24hChart(newData, newMax, newStep, newYesterdayData = null, labels = null) {
    if (!chart24hInstance) return;
    if (labels) {
      chart24hInstance.data.labels = labels;
    } else {
      chart24hInstance.data.labels = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];
    }

    // Dataset 0: Primary series
    chart24hInstance.data.datasets[0].data = newData;
    chart24hInstance.data.datasets[0].label = (state.activePeriod === 'yesterday') ? 'Kemarin' : (state.activePeriod === '7days' ? 'Konsumsi Harian (kWh)' : (state.activePeriod === 'month' ? 'Konsumsi Mingguan (kWh)' : 'Hari Ini (Live)'));

    // Dataset 1: Comparison series (Kemarin H-1)
    if (chart24hInstance.data.datasets[1]) {
      if (newYesterdayData && state.activePeriod === 'today') {
        chart24hInstance.data.datasets[1].data = newYesterdayData;
        chart24hInstance.data.datasets[1].hidden = false;
      } else {
        chart24hInstance.data.datasets[1].data = [];
        chart24hInstance.data.datasets[1].hidden = true;
      }
    }

    if (newMax) chart24hInstance.options.scales.y.max = newMax;
    if (newStep) chart24hInstance.options.scales.y.ticks.stepSize = newStep;
    chart24hInstance.update();
  }

  function updateTop8Chart(topItems) {
    if (!chartTop8Instance) return;
    chartTop8Instance.data.labels = topItems.map(d => d.name);
    chartTop8Instance.data.datasets[0].data = topItems.map(d => d.val);
    const maxVal = Math.max(...topItems.map(d => d.val));
    chartTop8Instance.options.scales.x.max = Math.ceil((maxVal * 1.15) / 1000) * 1000;
    chartTop8Instance.update();
  }

  function updateDonutChart(filterKey) {
    if (!chartDonutInstance) return;
    const donutTitleEl = document.getElementById('donutTitle');
    const donutSubEl = document.getElementById('donutSub');
    const donutLegendRow = document.getElementById('donutLegendRow');

    if (filterKey === 'fac1') {
      if (donutTitleEl) donutTitleEl.textContent = 'Proporsi Beban Substation Factory 1';
      if (donutSubEl) donutSubEl.textContent = 'Beban Trafo 210V Forging vs 6.6kV Billet Heater vs 400V Utility.';
      chartDonutInstance.data.labels = ['Trafo 210V Forging', 'Billet 6.6kV', 'Utility 400V', 'Panel LMVDP'];
      chartDonutInstance.data.datasets[0].data = [31290, 23820, 10570, 21044];
      chartDonutInstance.data.datasets[0].backgroundColor = ['#38bdf8', '#2dd4bf', '#fb923c', '#a78bfa'];
      if (donutLegendRow) {
        donutLegendRow.innerHTML = `
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#38bdf8;"></span><span>Forging 210V</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#2dd4bf;"></span><span>Billet 6.6kV</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#fb923c;"></span><span>Utility 400V</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#a78bfa;"></span><span>Panel LMVDP</span></div>
        `;
      }
    } else if (filterKey === 'fac2_1') {
      if (donutTitleEl) donutTitleEl.textContent = 'Proporsi Beban Substation Factory 2.1';
      if (donutSubEl) donutSubEl.textContent = 'Distribusi beban Billet Heater 1100 kVA, LVMDB 3P, dan Trafo Tr 06-10.';
      chartDonutInstance.data.labels = ['Trafo 10 BH 6.6kV', 'Trafo 08 Fo & HT', 'Trafo 06/07 Forg', 'Feeder LVMDB 3P'];
      chartDonutInstance.data.datasets[0].data = [11800, 8650, 14000, 15350];
      chartDonutInstance.data.datasets[0].backgroundColor = ['#2dd4bf', '#38bdf8', '#fb923c', '#a78bfa'];
      if (donutLegendRow) {
        donutLegendRow.innerHTML = `
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#2dd4bf;"></span><span>BH 6.6kV</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#38bdf8;"></span><span>Tr 08 Fo/HT</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#fb923c;"></span><span>Tr 06/07</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#a78bfa;"></span><span>Feeder LVMDB</span></div>
        `;
      }
    } else if (filterKey === 'fac2') {
      if (donutTitleEl) donutTitleEl.textContent = 'Proporsi Beban Substation Factory 2';
      if (donutSubEl) donutSubEl.textContent = 'Beban Substation Forging vs Furnace Heat Treatment Fac 2.';
      chartDonutInstance.data.labels = ['Trafo Forging', 'Carburizing HT', 'Panel LMVDP 210V', 'APFC Cap Bank'];
      chartDonutInstance.data.datasets[0].data = [10600, 6570, 14350, 43224];
      chartDonutInstance.data.datasets[0].backgroundColor = ['#38bdf8', '#f43f5e', '#a78bfa', '#2dd4bf'];
      if (donutLegendRow) {
        donutLegendRow.innerHTML = `
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#38bdf8;"></span><span>Forging 210V</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#f43f5e;"></span><span>Carburizing HT</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#a78bfa;"></span><span>Panel LMVDP</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#2dd4bf;"></span><span>Cap Bank APFC</span></div>
        `;
      }
    } else if (filterKey === 'fac3') {
      if (donutTitleEl) donutTitleEl.textContent = 'Proporsi Beban Substation Factory 3';
      if (donutSubEl) donutSubEl.textContent = 'Distribusi Substation Fac 3 (Pompa, Forging, & Annealing HT).';
      chartDonutInstance.data.labels = ['Pompa & Cooling', 'Forging 210V', 'Annealing HT', 'Panel LMVDP Fac 3'];
      chartDonutInstance.data.datasets[0].data = [6240, 3920, 5540, 19896];
      chartDonutInstance.data.datasets[0].backgroundColor = ['#34d399', '#38bdf8', '#fb923c', '#a78bfa'];
      if (donutLegendRow) {
        donutLegendRow.innerHTML = `
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#34d399;"></span><span>Pompa & Cooling</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#38bdf8;"></span><span>Forging 210V</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#fb923c;"></span><span>Annealing HT</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#a78bfa;"></span><span>Panel LMVDP</span></div>
        `;
      }
    } else if (filterKey === 'forging') {
      if (donutTitleEl) donutTitleEl.textContent = 'Proporsi Beban Substation Forging';
      if (donutSubEl) donutSubEl.textContent = 'Konsumsi daya Forging Substation per Factory (1, 2, dan 3).';
      chartDonutInstance.data.labels = ['Forging Fac 1', 'Forging Fac 2', 'Forging Fac 3', 'Feeder LMVDP'];
      chartDonutInstance.data.datasets[0].data = [31290, 10600, 3920, 58594];
      chartDonutInstance.data.datasets[0].backgroundColor = ['#38bdf8', '#2dd4bf', '#fb923c', '#a78bfa'];
      if (donutLegendRow) {
        donutLegendRow.innerHTML = `
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#38bdf8;"></span><span>Fac 1 (68%)</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#2dd4bf;"></span><span>Fac 2 (18%)</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#fb923c;"></span><span>Fac 3 (7%)</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#a78bfa;"></span><span>Feeder LMVDP</span></div>
        `;
      }
    } else if (filterKey === 'heattreatment') {
      if (donutTitleEl) donutTitleEl.textContent = 'Proporsi Beban Heat Treatment (HT)';
      if (donutSubEl) donutSubEl.textContent = 'Konsumsi pemanas induksi billet Fac 1, carburizing Fac 2, & annealing Fac 3.';
      chartDonutInstance.data.labels = ['Billet Heater Fac 1', 'Carburizing Fac 2', 'Annealing Fac 3', 'Panel Kontrol HT'];
      chartDonutInstance.data.datasets[0].data = [23820, 6570, 5540, 33774];
      chartDonutInstance.data.datasets[0].backgroundColor = ['#f43f5e', '#fb923c', '#2dd4bf', '#a78bfa'];
      if (donutLegendRow) {
        donutLegendRow.innerHTML = `
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#f43f5e;"></span><span>Billet 6.6kV</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#fb923c;"></span><span>Carburizing</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#2dd4bf;"></span><span>Annealing</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#a78bfa;"></span><span>Panel Kontrol</span></div>
        `;
      }
    } else {
      if (donutTitleEl) donutTitleEl.textContent = 'Pembagian Beban Substation Musashi';
      if (donutSubEl) donutSubEl.textContent = 'Proporsi konsumsi energi gardu listrik antar Factory 1, 2.1, 2, dan 3.';
      chartDonutInstance.data.labels = ['Factory 1', 'Factory 2.1', 'Factory 2', 'Factory 3', '⚡ Forging Total', '🔥 HT Total'];
      chartDonutInstance.data.datasets[0].data = [76200, 49800, 68100, 35596, 104404, 69704];
      chartDonutInstance.data.datasets[0].backgroundColor = [
        '#38bdf8', '#06b6d4', '#2dd4bf', '#34d399', '#f59e0b', '#f43f5e'
      ];
      if (donutLegendRow) {
        donutLegendRow.innerHTML = `
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#38bdf8;"></span><span>Factory 1 (33%)</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#06b6d4;"></span><span>Factory 2.1 (22%)</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#2dd4bf;"></span><span>Factory 2 (30%)</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#34d399;"></span><span>Factory 3 (15%)</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#f59e0b;"></span><span>⚡ Forging</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#f43f5e;"></span><span>🔥 HT</span></div>
        `;
      }
    }
    chartDonutInstance.update();
  }

  // ================= 6. RENDER PERLU PERHATIAN LIST (SCADA-GRADE) =================
  function renderAttentionList(alerts) {
    if (!attentionList) return;
    if (!alerts || alerts.length === 0) {
      attentionList.innerHTML = `
        <div class="attention-empty-state">
          <span class="empty-icon">✓</span>
          <div style="font-weight:700; color:var(--text-primary);">System Operating Normally</div>
          <div style="font-size:0.75rem;">All meters and substation switchgear in this area are operating within safe tolerance limits.</div>
        </div>
      `;
      return;
    }

    attentionList.innerHTML = alerts.map(item => {
      const sev = item.severity || 'warning';
      const pillClass = sev === 'critical' ? 'critical' : (sev === 'normal' ? 'normal' : 'warning');
      const badgeText = item.badge || (sev === 'critical' ? 'Critical' : (sev === 'normal' ? 'Normal' : 'Warning'));
      const meterId = item.id || '';

      return `
        <div class="attention-card ${sev}" onclick="${meterId ? `window.openMeterDetailById('${meterId}')` : ''}" title="Click to view live telemetry ${meterId}">
          <div class="attention-card-header">
            <div class="attention-badge-group">
              <span class="attention-pill ${pillClass}">
                <span class="pulse-indicator"></span>
                ${badgeText}
              </span>
              ${meterId ? `<span class="attention-id-badge">${meterId}</span>` : ''}
            </div>
            ${meterId ? `
              <button class="btn-attention-action" onclick="window.openMeterDetailById('${meterId}'); event.stopPropagation();" title="View Detail ${meterId}">
                Detail ➔
              </button>
            ` : ''}
          </div>
          <div class="attention-card-body">
            <div class="attention-title-text">${item.title}</div>
            <div class="attention-location-text">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              ${item.area}
            </div>
          </div>
          <div class="attention-card-footer">
            <div class="attention-alert-desc">${item.note}</div>
            ${item.action ? `<div class="attention-action-recommendation"><strong>Action:</strong> ${item.action}</div>` : ''}
          </div>
        </div>
      `;
    }).join('');
  }

  // ================= 7. DAFTAR METER TABLE =================
  function getFilteredMeters() {
    let list = state.meters;

    // Filter by Tab / Substation
    if (state.activeFilter !== 'all') {
      const f = state.activeFilter;
      list = list.filter(m => {
        if (f === 'electrical') {
          return true; // All 38 Electrical Room meters
        }
        if (f === 'fac1') {
          return m.factory === 'fac1';
        }
        if (f === 'fac2_1') {
          return m.factory === 'fac2_1';
        }
        if (f === 'fac2') {
          return m.factory === 'fac2';
        }
        if (f === 'fac3') {
          return m.factory === 'fac3';
        }
        if (f === 'forging') {
          return m.system === 'forging' || m.category === 'forging';
        }
        if (f === 'heattreatment' || f === 'ht') {
          return m.system === 'heattreatment' || m.category === 'heattreatment';
        }
        return true;
      });
    }

    // Filter by Search Input
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase().trim();
      list = list.filter(m =>
        (m.id && m.id.toLowerCase().includes(q)) ||
        (m.name && m.name.toLowerCase().includes(q)) ||
        (m.categoryLabel && m.categoryLabel.toLowerCase().includes(q)) ||
        (m.factoryLabel && m.factoryLabel.toLowerCase().includes(q)) ||
        (m.systemLabel && m.systemLabel.toLowerCase().includes(q)) ||
        (m.subArea && m.subArea.toLowerCase().includes(q)) ||
        (m.ip && m.ip.toLowerCase().includes(q))
      );
    }

    return list;
  }

  function renderTable() {
    if (!meterTableBody) return;
    const filtered = getFilteredMeters();

    // Sorting
    filtered.sort((a, b) => {
      let valA, valB;
      if (state.sortColumn === 'carbon') {
        valA = (a.kwhToday || 0) * 0.79;
        valB = (b.kwhToday || 0) * 0.79;
      } else if (state.sortColumn === 'deltaKwh') {
        valA = (a.deltaKwh !== undefined) ? a.deltaKwh : ((a.kwhToday || 0) - (a.kwhYesterday || 0));
        valB = (b.deltaKwh !== undefined) ? b.deltaKwh : ((b.kwhToday || 0) - (b.kwhYesterday || 0));
      } else if (state.sortColumn === 'kwhYesterday') {
        valA = a.kwhYesterday || 0;
        valB = b.kwhYesterday || 0;
      } else {
        valA = a[state.sortColumn];
        valB = b[state.sortColumn];
      }
      if (typeof valA === 'string') valA = valA.toLowerCase();
      if (typeof valB === 'string') valB = valB.toLowerCase();
      if (valA < valB) return state.sortAsc ? -1 : 1;
      if (valA > valB) return state.sortAsc ? 1 : -1;
      return 0;
    });

    // Pagination calculations
    const totalItems = filtered.length;
    const totalPages = Math.ceil(totalItems / state.pageSize) || 1;
    if (state.currentPage > totalPages) state.currentPage = totalPages;
    if (state.currentPage < 1) state.currentPage = 1;

    const startIndex = (state.currentPage - 1) * state.pageSize;
    const endIndex = Math.min(startIndex + state.pageSize, totalItems);
    const pageItems = filtered.slice(startIndex, endIndex);

    // Update Counts Text
    if (pageRangeText) {
      pageRangeText.textContent = totalItems === 0 ? '0' : `${startIndex + 1} - ${endIndex}`;
    }
    if (totalMetersText) {
      totalMetersText.textContent = totalItems;
    }

    // Build Table Rows
    if (pageItems.length === 0) {
      meterTableBody.innerHTML = `
        <tr>
          <td colspan="14" style="text-align:center; padding:2.5rem; color:var(--text-muted);">
            No digital power meter found matching "${state.searchQuery}".
          </td>
        </tr>
      `;
      renderPaginationButtons(totalPages);
      return;
    }

    meterTableBody.innerHTML = pageItems.map(m => {
      const statusClass = (m.status === 'normal') ? 'normal' : (m.status === 'warning') ? 'warning' : 'offline';
      const statusLabel = (m.status === 'normal') ? 'Normal' : (m.status === 'warning') ? 'Warning' : 'Offline';
      const carbonKg = ((m.kwhToday || 0) * 0.79).toFixed(1);

      const kwhTodayVal = m.kwhToday || 0;
      const kwhYestVal = (m.kwhYesterday !== undefined) ? m.kwhYesterday : Math.round(kwhTodayVal * 1.035);
      const deltaKwh = (m.deltaKwh !== undefined) ? m.deltaKwh : (kwhTodayVal - kwhYestVal);
      const deltaPct = (m.deltaPct !== undefined) ? m.deltaPct : (kwhYestVal ? ((deltaKwh / kwhYestVal) * 100).toFixed(1) : '0.0');
      const isDown = deltaKwh <= 0;
      const deltaClass = isDown ? 'down' : 'up';
      const deltaArrow = isDown ? '▼' : '▲';
      const deltaSign = deltaKwh > 0 ? '+' : '';
      const deltaBadgeHtml = `<span class="delta-badge ${deltaClass}" title="${deltaSign}${deltaKwh.toLocaleString('id-ID')} kWh (${deltaSign}${deltaPct}%) vs yesterday">${deltaArrow} ${deltaSign}${deltaKwh.toLocaleString('id-ID')} (${deltaSign}${deltaPct}%)</span>`;

      return `
        <tr>
          <td class="col-id">${m.id}</td>
          <td style="max-width:240px; overflow:hidden; text-overflow:ellipsis;" title="${m.name}">
            ${m.name}
          </td>
          <td style="color:var(--text-secondary);">${m.categoryLabel || m.category}</td>
          <td class="col-mono" style="color:var(--color-blue); font-size:0.78rem;">${m.ip || '192.168.10.x'}</td>
          <td class="col-num" style="font-weight:600; color:#ffffff;">
            ${(m.kw || 0).toLocaleString('id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
          </td>
          <td class="col-num">${(m.voltage || 0).toFixed(1)}</td>
          <td class="col-num">${(m.current || 0).toFixed(1)}</td>
          <td class="col-num" style="color:${(m.pf < 0.85) ? 'var(--color-amber)' : 'var(--color-green)'};">
            ${(m.pf || 0.89).toFixed(2)}
          </td>
          <td class="col-num" style="color:#ffffff; font-weight:600;">
            ${kwhTodayVal.toLocaleString('id-ID')}
          </td>
          <td class="col-num" style="color:var(--text-secondary);">
            ${kwhYestVal.toLocaleString('id-ID')}
          </td>
          <td class="col-num" style="text-align:right;">
            ${deltaBadgeHtml}
          </td>
          <td class="col-num" style="color:var(--color-teal); font-weight:600;">
            ${carbonKg}
          </td>
          <td style="text-align:center;">
            <span class="status-dot-badge ${statusClass}">${statusLabel}</span>
          </td>
          <td style="text-align:center;">
            <button class="btn-table-detail" onclick="window.openMeterDetailById('${m.id}')">
              Detail
            </button>
          </td>
        </tr>
      `;
    }).join('');

    renderPaginationButtons(totalPages);
  }

  function renderPaginationButtons(totalPages) {
    if (!paginationButtons) return;
    let html = '';

    // Prev Button
    html += `
      <button class="btn-page" ${state.currentPage === 1 ? 'disabled' : ''} onclick="window.goToPage(${state.currentPage - 1})">
        ‹ Prev
      </button>
    `;

    // Page Numbers
    for (let p = 1; p <= totalPages; p++) {
      if (p === 1 || p === totalPages || (p >= state.currentPage - 1 && p <= state.currentPage + 1)) {
        html += `
          <button class="btn-page ${p === state.currentPage ? 'active' : ''}" onclick="window.goToPage(${p})">
            ${p}
          </button>
        `;
      } else if (p === state.currentPage - 2 || p === state.currentPage + 2) {
        html += `<span style="padding:0 0.2rem; color:var(--text-muted);">...</span>`;
      }
    }

    // Next Button
    html += `
      <button class="btn-page" ${state.currentPage === totalPages ? 'disabled' : ''} onclick="window.goToPage(${state.currentPage + 1})">
        Next ›
      </button>
    `;

    paginationButtons.innerHTML = html;
  }

  window.goToPage = function(page) {
    state.currentPage = page;
    renderTable();
  };

  // ================= 8. REALTIME SIMULATION =================
  function startSimulation() {
    if (state.simulationTimer) clearInterval(state.simulationTimer);

    state.simulationTimer = setInterval(() => {
      if (!state.isSimulationActive) return;

      // Jitter values slightly by ±0.6%
      state.meters.forEach(m => {
        if (m.status !== 'offline') {
          const delta = (Math.random() - 0.5) * 0.012;
          m.kw = Math.max(5, m.kw * (1 + delta));
          m.current = Math.max(2, m.current * (1 + delta));
          m.kwhToday = (m.kwhToday || 100) + (m.kw / 3600) * 3.5;
        }
      });

      if (state.activeView === 'view-dashboard') {
        renderTable();
      } else {
        renderAllDedicatedTables();
      }
    }, 3500);
  }

  // ================= 9. DEDICATED SUBSTATION TABLES RENDERER =================
  function renderAllDedicatedTables() {
    // 1. Factory 1
    const fac1Meters = state.meters.filter(m => m.factory === 'fac1');
    renderSubstationTable('fac1TableBody', fac1Meters, false);

    // 2. Factory 2.1
    const fac2_1Meters = state.meters.filter(m => m.factory === 'fac2_1');
    renderSubstationTable('fac2_1TableBody', fac2_1Meters, false);

    // 3. Factory 2
    const fac2Meters = state.meters.filter(m => m.factory === 'fac2');
    renderSubstationTable('fac2TableBody', fac2Meters, false);

    // 4. Factory 3
    const fac3Meters = state.meters.filter(m => m.factory === 'fac3');
    renderSubstationTable('fac3TableBody', fac3Meters, false);

    // 5. Forging Substation
    const forgingMeters = state.meters.filter(m => 
      m.category === 'forging' || 
      m.system === 'forging' || 
      (m.name && m.name.toLowerCase().includes('forging')) ||
      (m.id && m.id.startsWith('F-'))
    );
    renderSubstationTable('forgingTableBody', forgingMeters, true);

    // 6. Heat Treatment Substation
    const htMeters = state.meters.filter(m => 
      m.category === 'heattreatment' || 
      m.system === 'heattreatment' || 
      (m.name && (m.name.toLowerCase().includes('heat') || m.name.toLowerCase().includes('billet') || m.name.toLowerCase().includes('carburizing') || m.name.toLowerCase().includes('annealing') || m.name.toLowerCase().includes('tempering') || m.name.toLowerCase().includes('furnace'))) ||
      (m.id && m.id.startsWith('HT-'))
    );
    renderSubstationTable('htTableBody', htMeters, true);
  }

  function renderSubstationTable(tbodyId, meterList, showFactoryCol = false) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) return;

    if (!meterList || meterList.length === 0) {
      tbody.innerHTML = `<tr><td colspan="${showFactoryCol ? 10 : 9}" style="text-align:center; padding:2rem; color:var(--text-muted);">No matching meter data found.</td></tr>`;
      return;
    }

    tbody.innerHTML = meterList.map(m => {
      const statusClass = (m.status === 'normal') ? 'normal' : (m.status === 'warning') ? 'warning' : 'offline';
      const statusLabel = (m.status === 'normal') ? 'Normal' : (m.status === 'warning') ? 'Warning' : 'Offline';
      const factoryColHtml = showFactoryCol 
        ? `<td><span style="font-size:0.72rem; padding:2px 7px; border-radius:3px; background:rgba(56,189,248,0.12); color:var(--color-blue); font-weight:600;">${m.factoryLabel || m.factory}</span></td>` 
        : '';

      return `
        <tr>
          <td class="col-id">${m.id}</td>
          <td style="font-weight:500; color:var(--text-primary); max-width:240px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${m.name}">
            ${m.name}
          </td>
          ${factoryColHtml}
          <td class="col-mono" style="color:var(--color-blue); font-size:0.76rem;">${m.ip || '10.41.47.x'}</td>
          <td class="col-num" style="font-weight:600; color:#ffffff;">
            ${(m.kw || 0).toLocaleString('id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
          </td>
          <td class="col-num">${(m.voltage || 0).toFixed(1)}</td>
          <td class="col-num">${(m.current || 0).toFixed(1)}</td>
          <td class="col-num" style="color:${(m.pf < 0.85) ? 'var(--color-amber)' : 'var(--color-green)'}; font-weight:600;">
            ${(m.pf || 0.90).toFixed(2)}
          </td>
          <td style="text-align:center;">
            <span class="status-dot-badge ${statusClass}">${statusLabel}</span>
          </td>
          <td style="text-align:center;">
            <button class="btn-table-detail" onclick="window.openMeterDetailById('${m.id}')" title="Buka Detail Meter ${m.id}">
              Detail
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }

  // ================= 10. MODALS CONTROLLER (ZERO FREEZING) =================
  window.openModal = function(modalEl) {
    if (!modalEl) return;
    window.closeAllModals();
    modalEl.classList.add('open');
    modalEl.classList.add('active');
    document.body.classList.add('modal-open');
  };

  window.closeAllModals = function() {
    document.querySelectorAll('.modal-overlay').forEach(m => {
      m.classList.remove('open');
      m.classList.remove('active');
    });
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  };

  // Detail Modal High-Precision Telemetry (Freeze-Free)
  window.openMeterDetailById = function(meterId) {
    const meter = state.meters.find(m => m.id === meterId);
    if (!meter) return;

    const modalTitle = document.getElementById('modalMeterTitle');
    const modalSubtitle = document.getElementById('modalMeterSubtitle');
    const modalBody = document.getElementById('modalMeterBody');

    if (modalTitle) {
      const isWarn = meter.pf < 0.85 || meter.status === 'warning';
      modalTitle.innerHTML = `
        <span>${meter.name}</span>
        <span class="status-dot-badge ${isWarn ? 'warning' : 'normal'}" style="font-size:0.72rem; font-weight:600;">
          ${isWarn ? '▲ Cos φ Warning' : '● Normal Live'}
        </span>
      `;
    }

    if (modalSubtitle) {
      const cleanSub = (meter.subArea || '').replace(/^Factory\s*\d+\s*[·\-–]\s*/i, '');
      const areaDisplay = cleanSub || meter.subArea || 'Electrical Room';
      modalSubtitle.innerHTML = `
        <div class="modal-subtitle-row">
          <span class="modal-sub-badge" style="background:rgba(255,255,255,0.08); font-family:var(--font-mono); border:1px solid var(--border-card);">ID: ${meter.id}</span>
          <span class="modal-sub-badge fac">${meter.factoryLabel || 'Factory 1'}</span>
          <span>${areaDisplay}</span>
          <span class="modal-sub-badge ip">IP: ${meter.ip || '10.41.47.x'}</span>
        </div>
      `;
    }

    if (modalBody) {
      const carbonKg = ((meter.kwhToday || 0) * 0.79).toFixed(1);
      const estCostRp = Math.round((meter.kwhToday || 0) * 1444.70).toLocaleString('id-ID');
      const pfStatusHtml = meter.pf >= 0.85
        ? `<strong style="color:var(--color-green);">${(meter.pf || 0.90).toFixed(2)}</strong> <span style="font-size:0.7rem; color:var(--color-green);">(Compliant &ge; 0.85)</span>`
        : `<strong style="color:var(--color-amber);">${(meter.pf || 0.84).toFixed(2)}</strong> <span style="font-size:0.7rem; color:var(--color-amber);">(Below 0.85 - Check APFC)</span>`;

      modalBody.innerHTML = `
        <!-- 4 High-Density Live Telemetry Tiles -->
        <div class="detail-specs-grid">
          <div class="spec-tile">
            <div class="spec-tile-label">Active Power (kW)</div>
            <div class="spec-tile-val" style="color:var(--color-blue);">${(meter.kw || 0).toLocaleString('id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} <span style="font-size:0.8rem; font-weight:400; color:var(--text-secondary);">kW</span></div>
            <div style="font-size:0.68rem; color:var(--text-muted);">Reactive: ${(meter.kvar || 0).toFixed(1)} kVAR</div>
          </div>
          <div class="spec-tile">
            <div class="spec-tile-label">System Voltage (V L-L)</div>
            <div class="spec-tile-val">${(meter.voltage || 0).toFixed(1)} <span style="font-size:0.8rem; font-weight:400; color:var(--text-secondary);">V</span></div>
            <div style="font-size:0.68rem; color:var(--text-muted);">VR: ${(meter.vr || (meter.voltage/1.732)).toFixed(0)}V · VS: ${(meter.vs || (meter.voltage/1.732)).toFixed(0)}V · VT: ${(meter.vt || (meter.voltage/1.732)).toFixed(0)}V</div>
          </div>
          <div class="spec-tile">
            <div class="spec-tile-label">Load Current (A Total)</div>
            <div class="spec-tile-val">${(meter.current || 0).toFixed(1)} <span style="font-size:0.8rem; font-weight:400; color:var(--text-secondary);">A</span></div>
            <div style="font-size:0.68rem; color:var(--text-muted);">IR: ${(meter.ir || meter.current).toFixed(1)}A · IS: ${(meter.is || meter.current).toFixed(1)}A · IT: ${(meter.it || meter.current).toFixed(1)}A</div>
          </div>
          <div class="spec-tile">
            <div class="spec-tile-label">Power Factor (Cos φ)</div>
            <div class="spec-tile-val">${(meter.pf || 0.90).toFixed(2)}</div>
            <div style="font-size:0.68rem;">${pfStatusHtml}</div>
          </div>
        </div>

        <!-- Technical Parameters & Network Details -->
        <div class="param-table-box">
          <div class="param-row"><span>Brand / Meter Model:</span> <strong>${meter.brand || 'Schneider PowerLogic PM5500'}</strong></div>
          <div class="param-row"><span>Modbus Slave ID &amp; Protocol:</span> <strong>Unit ID ${meter.modbusId || 1} · RS485 RTU 9600 8-N-1</strong></div>
          <div class="param-row"><span>Cisco Switch Port &amp; Uplink:</span> <strong style="color:var(--color-blue);">${meter.ciscoSwitch || 'SW-FAC1-CORE01 (Port Gi1/0/2)'}</strong></div>
          <div class="param-row"><span>Gateway IP &amp; Subnet:</span> <strong>${meter.ip || '10.41.47.100'} / ${meter.subnet || '255.255.254.0'}</strong></div>
          <div class="param-row"><span>Grid Frequency:</span> <strong>${(meter.freq || 50.0).toFixed(2)} Hz (PLN Cikarang Grid)</strong></div>
          <div class="param-row"><span>Total Harmonic Distortion:</span> <strong>THD-V: ${(meter.thdV || 1.8).toFixed(1)}% · THD-I: ${(meter.thdI || 3.4).toFixed(1)}%</strong></div>
          <div class="param-row"><span>Energy Consumed Today:</span> <strong>${(meter.kwhToday || 0).toLocaleString('id-ID')} kWh (Rp ${estCostRp})</strong></div>
          <div class="param-row"><span>Carbon Footprint (ESG CO₂e):</span> <strong style="color:var(--color-teal);">${carbonKg} kg CO₂e (0.79 kg/kWh)</strong></div>
        </div>

        <!-- Modbus Register Mapping Table -->
        <div style="margin-top:0.85rem;">
          <div style="font-size:0.75rem; font-weight:700; color:var(--text-primary); margin-bottom:0.35rem; display:flex; align-items:center; gap:0.4rem;">
            <span>Live Modbus Register Map (Schneider / Mitsubishi)</span>
            <span style="font-size:0.65rem; color:var(--color-teal); background:rgba(45,212,191,0.1); padding:1px 6px; border-radius:3px;">Polling Rate 1000ms</span>
          </div>
          <table class="modbus-reg-table">
            <thead>
              <tr>
                <th>Register</th><th>Parameter Description</th><th>Data Type</th><th>Realtime Value</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>3001 (0x0BB8)</code></td><td>Active Power Total (kW)</td><td>Float32 (2 Regs)</td><td><strong>${(meter.kw || 0).toFixed(1)} kW</strong></td><td style="color:var(--color-green);">✓ Synchronized</td>
              </tr>
              <tr>
                <td><code>3003 (0x0BBA)</code></td><td>Voltage Line-to-Line (V L-L)</td><td>Float32 (2 Regs)</td><td><strong>${(meter.voltage || 0).toFixed(1)} V</strong></td><td style="color:var(--color-green);">✓ Synchronized</td>
              </tr>
              <tr>
                <td><code>3005 (0x0BBC)</code></td><td>Current Phase Average (A)</td><td>Float32 (2 Regs)</td><td><strong>${(meter.current || 0).toFixed(1)} A</strong></td><td style="color:var(--color-green);">✓ Synchronized</td>
              </tr>
              <tr>
                <td><code>3007 (0x0BBE)</code></td><td>Power Factor Total (Cos φ)</td><td>Float32 (2 Regs)</td><td><strong>${(meter.pf || 0.90).toFixed(2)}</strong></td><td style="color:var(--color-green);">✓ Synchronized</td>
              </tr>
              <tr>
                <td><code>3009 (0x0BC0)</code></td><td>Total Active Energy (kWh)</td><td>Int64 (4 Regs)</td><td><strong>${(meter.kwhToday || 0).toLocaleString('id-ID')} kWh</strong></td><td style="color:var(--color-green);">✓ Accumulated</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Interactive Actions Bar -->
        <div class="modal-actions-bar">
          <div class="modal-actions-left">
            <button class="btn-action-telemetry" onclick="window.copyTelemetry('${meter.id}')" title="Copy all meter telemetry parameters to clipboard">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              Copy Telemetry
            </button>
            <button class="btn-action-ping" onclick="window.testPingMeter('${meter.ip}')" title="Test Modbus TCP ping connection to this meter">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
              Ping Gateway
            </button>
          </div>
          <button class="btn-action-close-red" onclick="window.closeAllModals()">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            Close Window
          </button>
        </div>
      `;
    }

    const modalEl = document.getElementById('meterDetailModal');
    if (modalEl) window.openModal(modalEl);
  };

  window.copyTelemetry = function(meterId) {
    const meter = state.meters.find(m => m.id === meterId);
    if (!meter) return;

    const text = `[TELEMETRI POWER METER PT MUSASHI AUTO PARTS INDONESIA]
ID Meter: ${meter.id}
Nama Feeder: ${meter.name}
Area: ${meter.factoryLabel || meter.factory} - ${meter.subArea}
Brand: ${meter.brand}
IP Gateway: ${meter.ip} | Subnet: ${meter.subnet}
Switch Cisco: ${meter.ciscoSwitch}
Daya Aktif: ${(meter.kw || 0).toFixed(1)} kW
Tegangan (V L-L): ${(meter.voltage || 0).toFixed(1)} V (VR: ${(meter.vr||0).toFixed(0)}V, VS: ${(meter.vs||0).toFixed(0)}V, VT: ${(meter.vt||0).toFixed(0)}V)
Arus Beban: ${(meter.current || 0).toFixed(1)} A (IR: ${(meter.ir||0).toFixed(1)}A, IS: ${(meter.is||0).toFixed(1)}A, IT: ${(meter.it||0).toFixed(1)}A)
Power Factor (Cos φ): ${(meter.pf || 0.90).toFixed(2)}
Frekuensi: ${(meter.freq || 50.0).toFixed(2)} Hz
THD-V: ${(meter.thdV || 0).toFixed(1)}% | THD-I: ${(meter.thdI || 0).toFixed(1)}%
Energi Hari Ini: ${(meter.kwhToday || 0).toLocaleString('id-ID')} kWh
Estimasi Biaya: Rp ${Math.round((meter.kwhToday || 0) * 1444.70).toLocaleString('id-ID')}
Emisi CO2: ${((meter.kwhToday || 0) * 0.79).toFixed(1)} kg CO2e
Waktu Log: ${new Date().toLocaleString('id-ID')}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`✓ Telemetri ${meter.id} berhasil disalin ke clipboard!`);
      }).catch(() => {
        copyFallback(text, meter.id);
      });
    } else {
      copyFallback(text, meter.id);
    }
  };

  function copyFallback(text, meterId) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast(`✓ Telemetri ${meterId} berhasil disalin!`);
    } catch (e) {
      showToast(`Gagal menyalin otomatis`, false);
    }
    document.body.removeChild(ta);
  }

  window.testPingMeter = function(ip) {
    const pingMs = Math.floor(Math.random() * 3) + 2;
    showToast(`✓ Ping ke ${ip} (Port 502 Modbus) Berhasil! Respons: ${pingMs}ms · SCADA OK`);
  };

  // ================= 11. BLUEPRINT MODAL CONTROLLER (ZERO FREEZING) =================
  let currentBlueprintZoom = 1.0;

  window.openBlueprintModal = function() {
    const blueprintModal = document.getElementById('blueprintModal');
    if (!blueprintModal) return;
    currentBlueprintZoom = 1.0;
    applyBlueprintZoom(1.0);
    window.openModal(blueprintModal);
  };

  function applyBlueprintZoom(scale) {
    currentBlueprintZoom = Math.min(Math.max(scale, 1.0), 3.0);
    const blueprintImg = document.getElementById('blueprintImg');
    if (blueprintImg) {
      blueprintImg.style.transform = `scale(${currentBlueprintZoom})`;
    }
  }

  const btnZoomIn = document.getElementById('btnZoomIn');
  const btnZoomOut = document.getElementById('btnZoomOut');
  const btnZoomReset = document.getElementById('btnZoomReset');
  const btnToggleFullscreen = document.getElementById('btnToggleFullscreen');

  if (btnZoomIn) btnZoomIn.addEventListener('click', () => applyBlueprintZoom(currentBlueprintZoom + 0.35));
  if (btnZoomOut) btnZoomOut.addEventListener('click', () => applyBlueprintZoom(currentBlueprintZoom - 0.35));
  if (btnZoomReset) btnZoomReset.addEventListener('click', () => applyBlueprintZoom(1.0));

  if (btnToggleFullscreen) {
    btnToggleFullscreen.addEventListener('click', () => {
      const modalCard = document.querySelector('.modal-blueprint-wide');
      if (modalCard) {
        modalCard.classList.toggle('fullscreen-mode');
        const isFull = modalCard.classList.contains('fullscreen-mode');
        btnToggleFullscreen.textContent = isFull ? '⊡ Pas' : '⛶ Full';
        applyBlueprintZoom(1.0);
      }
    });
  }

  // ================= 10. EVENT LISTENERS =================
  function setupEventListeners() {
    // Search input
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        state.currentPage = 1;
        renderTable();
      });
    }

    // Table sorting
    document.querySelectorAll('#meterTable th[data-sort]').forEach(th => {
      th.addEventListener('click', () => {
        const col = th.dataset.sort;
        if (state.sortColumn === col) {
          state.sortAsc = !state.sortAsc;
        } else {
          state.sortColumn = col;
          state.sortAsc = true;
        }
        renderTable();
      });
    });

    // Blueprint Modal Button
    if (btnOpenBlueprintModal) {
      btnOpenBlueprintModal.addEventListener('click', (e) => {
        e.preventDefault();
        window.openBlueprintModal();
      });
    }

    // Sidebar Blueprint Button
    const sideNavBlueprint = document.getElementById('sideNavBlueprint');
    if (sideNavBlueprint) {
      sideNavBlueprint.addEventListener('click', (e) => {
        e.preventDefault();
        window.openBlueprintModal();
      });
    }

    // Export Modal (Header button & Pusat Laporan button)
    if (btnExportCsv) {
      btnExportCsv.addEventListener('click', (e) => {
        e.preventDefault();
        window.openExportModal();
      });
    }
    const btnExportReports = document.getElementById('btnExportCsvFromReports');
    if (btnExportReports) {
      btnExportReports.addEventListener('click', (e) => {
        e.preventDefault();
        window.openExportModal();
      });
    }
    const sideNavReport = document.getElementById('sideNavReport');
    if (sideNavReport) {
      sideNavReport.addEventListener('click', (e) => {
        e.preventDefault();
        window.switchMenuView('view-reports', 'reports');
      });
    }

    // Scroll to Table Button (Header Banner)
    const btnScrollToTable = document.getElementById('btnScrollToTable');
    if (btnScrollToTable) {
      btnScrollToTable.addEventListener('click', () => {
        const tableSec = document.getElementById('tableSection');
        if (tableSec) {
          tableSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }

    // Review Alert Button (Amber Alert Banner)
    const btnReviewAlert = document.getElementById('btnReviewAlert');
    if (btnReviewAlert) {
      btnReviewAlert.addEventListener('click', () => {
        const attCard = document.getElementById('attentionListCard');
        if (attCard) {
          attCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          attCard.style.boxShadow = '0 0 16px rgba(245, 158, 11, 0.7)';
          attCard.style.borderColor = '#f59e0b';
          setTimeout(() => {
            attCard.style.boxShadow = '';
            attCard.style.borderColor = '';
          }, 2200);
        }
      });
    }

    // Theme Toggle Button (Light Corporate vs SCADA Dark)
    const btnToggleTheme = document.getElementById('btnToggleTheme');
    const themeToggleIcon = document.getElementById('themeToggleIcon');
    const themeToggleText = document.getElementById('themeToggleText');
    if (btnToggleTheme) {
      btnToggleTheme.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-theme');
        if (themeToggleIcon) themeToggleIcon.textContent = isDark ? '☀️' : '🌙';
        if (themeToggleText) themeToggleText.textContent = isDark ? 'Light' : 'Dark';
        applyThemeToCharts(isDark);
      });
    }



    // TV Mode Button
    const btnToggleTvMode = document.getElementById('btnToggleTvMode');
    if (btnToggleTvMode) {
      btnToggleTvMode.addEventListener('click', toggleTvMode);
    }

    // Key shortcut 't' / 'T' for TV Mode
    window.addEventListener('keydown', (e) => {
      if ((e.key === 't' || e.key === 'T') && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        toggleTvMode();
      }
    });

    // Exit TV mode if user exits fullscreen manually
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement && document.body.classList.contains('tv-mode')) {
        toggleTvMode();
      }
    });

    // Close modals on overlay backdrop click or Escape
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) window.closeAllModals();
      });
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') window.closeAllModals();
    });
  }

  // Dynamically update Chart.js colors based on Light vs Dark theme
  function applyThemeToCharts(isDark) {
    const textColor = isDark ? '#94a3b8' : '#64748b';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.05)' : '#e2e8f0';

    if (chart24hInstance) {
      chart24hInstance.options.scales.x.ticks.color = textColor;
      chart24hInstance.options.scales.y.ticks.color = textColor;
      chart24hInstance.options.scales.y.grid.color = gridColor;
      chart24hInstance.update();
    }

    if (chartTop8Instance) {
      chartTop8Instance.options.scales.x.ticks.color = textColor;
      chartTop8Instance.options.scales.x.grid.color = gridColor;
      chartTop8Instance.options.scales.y.ticks.color = textColor;
      chartTop8Instance.update();
    }
  }

  // ================= 11. EXCEL SPREADSHEET & CSV EXPORT =================
  window.openExportModal = function() {
    const modal = document.getElementById('exportModal');
    if (modal) {
      window.openModal(modal);
    } else {
      window.exportToExcelWithCharts();
    }
  };

  window.exportToExcelWithCharts = function() {
    const now = new Date();
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const dateFormatted = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
    const timeFormatted = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')} WIB`;

    // Metrics calculations
    const totalKw = state.meters.reduce((acc, m) => acc + (m.kw || 0), 0);
    const totalKwh = state.meters.reduce((acc, m) => acc + (m.kwhToday || 0), 0);
    const totalCostRp = Math.round(totalKwh * 1444.70);
    const avgPf = (state.meters.reduce((acc, m) => acc + (m.pf || 0.90), 0) / (state.meters.length || 1)).toFixed(2);
    const totalCarbon = (totalKwh * 0.79).toFixed(1);
    const onlineMeters = state.meters.filter(m => m.status === 'normal' || m.status === 'warning').length;

    // Factory breakdowns
    const fac1Meters = state.meters.filter(m => m.factory === 'fac1');
    const fac2_1Meters = state.meters.filter(m => m.factory === 'fac2_1');
    const fac2Meters = state.meters.filter(m => m.factory === 'fac2');
    const fac3Meters = state.meters.filter(m => m.factory === 'fac3');

    const fac1Kwh = fac1Meters.reduce((a, m) => a + (m.kwhToday || 0), 0);
    const fac2_1Kwh = fac2_1Meters.reduce((a, m) => a + (m.kwhToday || 0), 0);
    const fac2Kwh = fac2Meters.reduce((a, m) => a + (m.kwhToday || 0), 0);
    const fac3Kwh = fac3Meters.reduce((a, m) => a + (m.kwhToday || 0), 0);

    const fac1Kw = fac1Meters.reduce((a, m) => a + (m.kw || 0), 0);
    const fac2_1Kw = fac2_1Meters.reduce((a, m) => a + (m.kw || 0), 0);
    const fac2Kw = fac2Meters.reduce((a, m) => a + (m.kw || 0), 0);
    const fac3Kw = fac3Meters.reduce((a, m) => a + (m.kw || 0), 0);

    const fac1Pct = totalKwh > 0 ? Math.round((fac1Kwh / totalKwh) * 100) : 0;
    const fac2_1Pct = totalKwh > 0 ? Math.round((fac2_1Kwh / totalKwh) * 100) : 0;
    const fac2Pct = totalKwh > 0 ? Math.round((fac2Kwh / totalKwh) * 100) : 0;
    const fac3Pct = totalKwh > 0 ? Math.max(0, 100 - fac1Pct - fac2_1Pct - fac2Pct) : 0;

    // Top 8 Consumers
    const top8 = [...state.meters].sort((a, b) => (b.kwhToday || 0) - (a.kwhToday || 0)).slice(0, 8);
    const maxTop8Kwh = top8[0] ? (top8[0].kwhToday || 1) : 1;

    // Generate XML/HTML content
    const excelHtml = `
<html xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:x="urn:schemas-microsoft-com:office:excel"
      xmlns="http://www.w3.org/TR/REC-html40">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <!--[if gte mso 9]>
  <xml>
    <x:ExcelWorkbook>
      <x:ExcelWorksheets>
        <x:ExcelWorksheet>
          <x:Name>Audit Energi Musashi</x:Name>
          <x:WorksheetOptions>
            <x:DisplayGridlines/>
            <x:Print>
              <x:ValidPrinterInfo/>
              <x:Orientation>Landscape</x:Orientation>
            </x:Print>
          </x:WorksheetOptions>
        </x:ExcelWorksheet>
      </x:ExcelWorksheets>
    </x:ExcelWorkbook>
  </xml>
  <![endif]-->
  <style>
    body { font-family: 'Segoe UI', Calibri, Arial, sans-serif; font-size: 10pt; color: #1e293b; background: #ffffff; }
    .banner-table { width: 100%; border-collapse: collapse; margin-bottom: 12px; }
    .banner-title { background: #8C2924; color: #ffffff; font-size: 16pt; font-weight: bold; padding: 14px 18px; text-align: left; }
    .banner-sub { background: #6b1f1b; color: #fed7aa; font-size: 9.5pt; padding: 6px 18px; text-align: left; }
    .kpi-table { width: 100%; border-collapse: separate; border-spacing: 6px; margin-bottom: 16px; }
    .kpi-box { background: #f8fafc; border: 1.5px solid #cbd5e1; padding: 10px; text-align: center; vertical-align: middle; }
    .kpi-header { font-size: 8pt; font-weight: bold; color: #64748b; text-transform: uppercase; margin-bottom: 3px; }
    .kpi-number { font-size: 15pt; font-weight: bold; color: #0f172a; margin-bottom: 2px; }
    .kpi-subtext { font-size: 7.5pt; color: #94a3b8; }
    .section-header { font-size: 11pt; font-weight: bold; color: #8C2924; padding: 8px 4px; border-bottom: 2px solid #8C2924; margin-top: 15px; margin-bottom: 6px; }
    .chart-box-table { width: 100%; border-collapse: collapse; margin-bottom: 16px; border: 1px solid #cbd5e1; }
    .chart-th { background: #f1f5f9; color: #334155; font-size: 9pt; font-weight: bold; padding: 7px 10px; border: 1px solid #cbd5e1; }
    .chart-td { padding: 6px 10px; font-size: 9pt; border: 1px solid #e2e8f0; vertical-align: middle; }
    .chart-bar-cell { width: 260px; padding: 4px 8px; }
    .data-table { width: 100%; border-collapse: collapse; border: 1.5px solid #8C2924; margin-top: 8px; }
    .data-table th { background: #8C2924; color: #ffffff; font-size: 9pt; font-weight: bold; padding: 8px 6px; border: 1px solid #6b1f1b; text-align: center; }
    .data-table td { padding: 6px 8px; font-size: 8.5pt; border: 1px solid #cbd5e1; vertical-align: middle; }
    .row-even { background: #f8fafc; }
    .row-odd { background: #ffffff; }
    .text-center { text-align: center; }
    .text-right { text-align: right; }
    .badge-normal { background: #dcfce7; color: #166534; font-weight: bold; text-align: center; padding: 2px 6px; border-radius: 3px; }
    .badge-warn { background: #fef3c7; color: #92400e; font-weight: bold; text-align: center; padding: 2px 6px; border-radius: 3px; }
    .total-row td { background: #f1f5f9; font-weight: bold; color: #0f172a; border-top: 2.5px solid #8C2924; border-bottom: 2.5px solid #8C2924; padding: 8px 6px; }
    .num-dec1 { mso-number-format: "\\#\\,\\#\\#0\\.0"; }
    .num-dec2 { mso-number-format: "\\#\\,\\#\\#0\\.00"; }
    .num-int { mso-number-format: "\\#\\,\\#\\#0"; }
    .num-curr { mso-number-format: "\"Rp\"\\ \\#\\,\\#\\#0"; }
  </style>
</head>
<body>
  <!-- 1. Header Banner Kop Perusahaan -->
  <table class="banner-table" cellpadding="0" cellspacing="0">
    <tr>
      <td class="banner-title" colspan="14">
        ⚡ PT MUSASHI AUTO PARTS INDONESIA · UTILITY & ENERGY MANAGEMENT SYSTEM
      </td>
    </tr>
    <tr>
      <td class="banner-sub" colspan="14">
        Laporan Audit & Telemetri Realtime 38 Digital Power Meter · Tanggal: ${dateFormatted} · Pukul: ${timeFormatted} · Divisi: Engineering & Utility
      </td>
    </tr>
  </table>

  <!-- 2. Ringkasan Eksekutif KPI Cards -->
  <table class="kpi-table" cellpadding="0" cellspacing="0">
    <tr>
      <td class="kpi-box" width="16%">
        <div class="kpi-header">TOTAL DAYA AKTIF</div>
        <div class="kpi-number" style="color:#0284c7;">${totalKw.toLocaleString('id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} kW</div>
        <div class="kpi-subtext">38 Gardu & Beban Pabrik</div>
      </td>
      <td class="kpi-box" width="16%">
        <div class="kpi-header">ENERGI LISTRIK HARI INI</div>
        <div class="kpi-number" style="color:#d97706;">${totalKwh.toLocaleString('id-ID')} kWh</div>
        <div class="kpi-subtext">Akumulasi shift 1 & 2</div>
      </td>
      <td class="kpi-box" width="18%">
        <div class="kpi-header">ESTIMASI BIAYA LISTRIK</div>
        <div class="kpi-number" style="color:#8C2924;">Rp ${totalCostRp.toLocaleString('id-ID')}</div>
        <div class="kpi-subtext">Tarif PLN I-3: Rp 1.444,70/kWh</div>
      </td>
      <td class="kpi-box" width="16%">
        <div class="kpi-header">POWER FACTOR RATA-RATA</div>
        <div class="kpi-number" style="color:#059669;">${avgPf}</div>
        <div class="kpi-subtext">Standar PLN ≥ 0,85 (Aman)</div>
      </td>
      <td class="kpi-box" width="16%">
        <div class="kpi-header">STATUS JARINGAN METER</div>
        <div class="kpi-number" style="color:#16a34a;">${onlineMeters} / ${state.meters.length}</div>
        <div class="kpi-subtext">100% Online Polling Modbus</div>
      </td>
      <td class="kpi-box" width="18%">
        <div class="kpi-header">JEJAK EMISI KARBON (ESG)</div>
        <div class="kpi-number" style="color:#0d9488;">${totalCarbon.toLocaleString('id-ID')} kg</div>
        <div class="kpi-subtext">Faktor Emisi 0,79 kg CO₂e/kWh</div>
      </td>
    </tr>
  </table>

  <!-- 3. Grafik Visual 1: Distribusi Konsumsi Energi per Factory -->
  <div class="section-header">📊 1. DISTRIBUSI KONSUMSI ENERGI LISTRIK PER AREA PABRIK (FACTORY DISTRIBUTION)</div>
  <table class="chart-box-table" cellpadding="0" cellspacing="0">
    <thead>
      <tr>
        <th class="chart-th" width="22%">Area Substation</th>
        <th class="chart-th" width="10%">Unit Meter</th>
        <th class="chart-th" width="14%">Daya Aktif (kW)</th>
        <th class="chart-th" width="14%">Energi (kWh)</th>
        <th class="chart-th" width="10%">Persentase</th>
        <th class="chart-th" width="30%">Grafik Batang Proporsional</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="chart-td"><strong>Factory 1 (Electrical 20kV / 6.6kV)</strong></td>
        <td class="chart-td text-center">${fac1Meters.length} Unit</td>
        <td class="chart-td text-right num-dec1">${fac1Kw.toFixed(1)} kW</td>
        <td class="chart-td text-right num-int">${fac1Kwh.toLocaleString('id-ID')} kWh</td>
        <td class="chart-td text-center"><strong>${fac1Pct}%</strong></td>
        <td class="chart-td chart-bar-cell">
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td width="${fac1Pct}%" style="background:#0284c7; height:16px; border:none; border-radius:3px;"></td>
              <td width="${100 - fac1Pct}%" style="background:#e2e8f0; height:16px; border:none; border-radius:3px;"></td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td class="chart-td"><strong>Factory 2.1 (Electrical Room 2.1)</strong></td>
        <td class="chart-td text-center">${fac2_1Meters.length} Unit</td>
        <td class="chart-td text-right num-dec1">${fac2_1Kw.toFixed(1)} kW</td>
        <td class="chart-td text-right num-int">${fac2_1Kwh.toLocaleString('id-ID')} kWh</td>
        <td class="chart-td text-center"><strong>${fac2_1Pct}%</strong></td>
        <td class="chart-td chart-bar-cell">
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td width="${fac2_1Pct}%" style="background:#06b6d4; height:16px; border:none; border-radius:3px;"></td>
              <td width="${100 - fac2_1Pct}%" style="background:#e2e8f0; height:16px; border:none; border-radius:3px;"></td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td class="chart-td"><strong>Factory 2 (Forging & Heat Treatment)</strong></td>
        <td class="chart-td text-center">${fac2Meters.length} Unit</td>
        <td class="chart-td text-right num-dec1">${fac2Kw.toFixed(1)} kW</td>
        <td class="chart-td text-right num-int">${fac2Kwh.toLocaleString('id-ID')} kWh</td>
        <td class="chart-td text-center"><strong>${fac2Pct}%</strong></td>
        <td class="chart-td chart-bar-cell">
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td width="${fac2Pct}%" style="background:#d97706; height:16px; border:none; border-radius:3px;"></td>
              <td width="${100 - fac2Pct}%" style="background:#e2e8f0; height:16px; border:none; border-radius:3px;"></td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td class="chart-td"><strong>Factory 3 (Gardu Induk & Annealing)</strong></td>
        <td class="chart-td text-center">${fac3Meters.length} Unit</td>
        <td class="chart-td text-right num-dec1">${fac3Kw.toFixed(1)} kW</td>
        <td class="chart-td text-right num-int">${fac3Kwh.toLocaleString('id-ID')} kWh</td>
        <td class="chart-td text-center"><strong>${fac3Pct}%</strong></td>
        <td class="chart-td chart-bar-cell">
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td width="${fac3Pct}%" style="background:#059669; height:16px; border:none; border-radius:3px;"></td>
              <td width="${100 - fac3Pct}%" style="background:#e2e8f0; height:16px; border:none; border-radius:3px;"></td>
            </tr>
          </table>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- 4. Grafik Visual 2: Top 8 Beban Listrik Terbesar -->
  <div class="section-header">📈 2. TOP 8 KONSUMEN BEBAN LISTRIK TERBESAR (PEAK LOADERS)</div>
  <table class="chart-box-table" cellpadding="0" cellspacing="0">
    <thead>
      <tr>
        <th class="chart-th" width="5%">Rank</th>
        <th class="chart-th" width="10%">ID Meter</th>
        <th class="chart-th" width="25%">Nama Feeder / Mesin Produksi</th>
        <th class="chart-th" width="18%">Sub Area Lokasi</th>
        <th class="chart-th" width="12%">Daya Aktif (kW)</th>
        <th class="chart-th" width="12%">Energi (kWh)</th>
        <th class="chart-th" width="18%">Grafik Proporsi Beban</th>
      </tr>
    </thead>
    <tbody>
      ${top8.map((m, idx) => {
        const barPct = Math.max(8, Math.round(((m.kwhToday || 0) / maxTop8Kwh) * 100));
        return `
          <tr>
            <td class="chart-td text-center"><strong>#${idx + 1}</strong></td>
            <td class="chart-td text-center" style="font-family:Consolas, monospace;">${m.id}</td>
            <td class="chart-td"><strong>${m.name}</strong></td>
            <td class="chart-td">${m.factoryLabel || m.factory} - ${m.subArea}</td>
            <td class="chart-td text-right num-dec1">${(m.kw || 0).toFixed(1)} kW</td>
            <td class="chart-td text-right num-int"><strong>${(m.kwhToday || 0).toLocaleString('id-ID')} kWh</strong></td>
            <td class="chart-td chart-bar-cell">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="${barPct}%" style="background:#8C2924; height:14px; border:none; border-radius:2px;"></td>
                  <td width="${100 - barPct}%" style="background:#f1f5f9; height:14px; border:none; border-radius:2px;"></td>
                </tr>
              </table>
            </td>
          </tr>
        `;
      }).join('')}
    </tbody>
  </table>

  <!-- 5. Tabel Detail 38 Digital Power Meter -->
  <div class="section-header">📋 3. TABEL TELEMETRI LENGKAP 38 DIGITAL POWER METER (SCHNEIDER & MITSUBISHI)</div>
  <table class="data-table" cellpadding="0" cellspacing="0">
    <thead>
      <tr>
        <th width="3%">No</th>
        <th width="6%">ID Meter</th>
        <th width="17%">Nama Feeder / Panel Distribusi</th>
        <th width="8%">Kategori</th>
        <th width="12%">Area & Substation</th>
        <th width="12%">Brand Digital Meter</th>
        <th width="9%">IP Gateway</th>
        <th width="6%">Daya (kW)</th>
        <th width="5%">Tegangan (V)</th>
        <th width="5%">Arus (A)</th>
        <th width="5%">Cos φ</th>
        <th width="7%">Energi (kWh)</th>
        <th width="8%">Biaya (Rp)</th>
        <th width="6%">Status</th>
      </tr>
    </thead>
    <tbody>
      ${state.meters.map((m, idx) => {
        const rowClass = idx % 2 === 0 ? 'row-even' : 'row-odd';
        const costRp = Math.round((m.kwhToday || 0) * 1444.70);
        const isWarn = m.pf < 0.85;
        const statusBadge = isWarn
          ? `<span class="badge-warn">Cos φ ${m.pf.toFixed(2)}</span>`
          : `<span class="badge-normal">Normal Live</span>`;

        return `
          <tr class="${rowClass}">
            <td class="text-center">${idx + 1}</td>
            <td class="text-center" style="font-family:Consolas, monospace; font-weight:bold; color:#0284c7;">${m.id}</td>
            <td><strong>${m.name}</strong></td>
            <td class="text-center">${m.categoryLabel || m.category}</td>
            <td>${m.factoryLabel || m.factory} - ${m.subArea}</td>
            <td>${m.brand || 'Schneider PM5500'}</td>
            <td class="text-center" style="font-family:Consolas, monospace;">${m.ip || '-'}</td>
            <td class="text-right num-dec1">${(m.kw || 0).toFixed(1)}</td>
            <td class="text-right num-dec1">${(m.voltage || 0).toFixed(1)}</td>
            <td class="text-right num-dec1">${(m.current || 0).toFixed(1)}</td>
            <td class="text-center num-dec2" style="font-weight:bold; color:${isWarn ? '#d97706' : '#059669'};">${(m.pf || 0.90).toFixed(2)}</td>
            <td class="text-right num-int">${(m.kwhToday || 0).toLocaleString('id-ID')}</td>
            <td class="text-right num-curr">Rp ${costRp.toLocaleString('id-ID')}</td>
            <td class="text-center">${statusBadge}</td>
          </tr>
        `;
      }).join('')}
    </tbody>
    <tfoot>
      <tr class="total-row">
        <td colspan="7" class="text-right" style="font-size:9.5pt;">TOTAL AKUMULASI SISTEM (38 METER):</td>
        <td class="text-right num-dec1" style="font-size:9.5pt; color:#0284c7;">${totalKw.toFixed(1)}</td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center num-dec2" style="font-size:9.5pt; color:#059669;">${avgPf}</td>
        <td class="text-right num-int" style="font-size:9.5pt; color:#d97706;">${totalKwh.toLocaleString('id-ID')}</td>
        <td class="text-right num-curr" style="font-size:9.5pt; color:#8C2924;">Rp ${totalCostRp.toLocaleString('id-ID')}</td>
        <td class="text-center" style="color:#16a34a;">38 UNIT AKTIF</td>
      </tr>
    </tfoot>
  </table>

  <!-- Footer Information -->
  <table style="width:100%; margin-top:20px; border-collapse:collapse; font-size:8pt; color:#64748b;">
    <tr>
      <td style="text-align:left;">
        Dicetak secara otomatis dari SCADA Energy Management System PT Musashi Auto Parts Indonesia · Pabrik Cikarang & Karawang
      </td>
      <td style="text-align:right;">
        Dokumen Resmi Utility Engineering · Konfidensial Internal
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    const blob = new Blob([excelHtml], { type: 'application/vnd.ms-excel;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const dateFileStr = new Date().toISOString().slice(0, 10);
    link.download = `Laporan_Audit_Energi_Musashi_Utility_${dateFileStr}.xls`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast('✓ Laporan Excel (Tabel Rapi & Grafik Visual) Berhasil Diunduh!');
  };

  window.exportToCsv = function() {
    const headers = ['Meter ID', 'Feeder / Panel Name', 'Category', 'Sub Area', 'Meter Brand', 'IP Address', 'Active Power (kW)', 'Voltage (V)', 'Current (A)', 'Power Factor (Cos φ)', 'Energy Today (kWh)', 'Estimated Cost (Rp)', 'CO2 Emission (kg)', 'Status'];
    const rows = state.meters.map(m => [
      m.id,
      `"${(m.name || '').replace(/"/g, '""')}"`,
      `"${(m.categoryLabel || m.category || '').replace(/"/g, '""')}"`,
      `"${(m.subArea || '').replace(/"/g, '""')}"`,
      `"${(m.brand || '').replace(/"/g, '""')}"`,
      m.ip || '',
      (m.kw || 0).toFixed(1),
      (m.voltage || 0).toFixed(1),
      (m.current || 0).toFixed(1),
      (m.pf || 0.89).toFixed(2),
      m.kwhToday || 0,
      Math.round((m.kwhToday || 0) * 1444.70),
      ((m.kwhToday || 0) * 0.79).toFixed(1),
      m.status
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `PT_Musashi_Power_Meters_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('✓ CSV Report for 111 Musashi Meters exported successfully!');
  };

  // ================= 12. TV MODE & AUTO-CYCLE ROTATION =================
  let tvCountdownInterval = null;
  let tvCycleSecondsLeft = 14;
  const TV_CYCLE_VIEWS = ['view-dashboard', 'view-electrical-1', 'view-electrical-2-1', 'view-electrical-2', 'view-electrical-3', 'view-forging', 'view-heattreatment', 'view-reports'];
  let currentTvViewIdx = 0;

  function toggleTvMode() {
    const isTv = document.body.classList.toggle('tv-mode');
    const tvBtnText = document.getElementById('tvModeBtnText');
    const tvCycleBadge = document.getElementById('tvCycleBadge');

    if (isTv) {
      if (tvBtnText) tvBtnText.textContent = 'Exit TV';
      if (tvCycleBadge) tvCycleBadge.style.display = 'inline-flex';
      
      // Request fullscreen if supported
      if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
      startTvAutoCycle();
      showToast('TV / Substation Kiosk Mode Active (Press T or Esc to exit)');
    } else {
      if (tvBtnText) tvBtnText.textContent = 'TV Mode';
      if (tvCycleBadge) tvCycleBadge.style.display = 'none';
      stopTvAutoCycle();
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }

  function startTvAutoCycle() {
    stopTvAutoCycle();
    tvCycleSecondsLeft = 14;
    updateTvCountdownDisplay();

    tvCountdownInterval = setInterval(() => {
      tvCycleSecondsLeft--;
      if (tvCycleSecondsLeft <= 0) {
        tvCycleSecondsLeft = 14;
        currentTvViewIdx = (currentTvViewIdx + 1) % TV_CYCLE_VIEWS.length;
        const nextView = TV_CYCLE_VIEWS[currentTvViewIdx];
        window.switchMenuView(nextView);
      }
      updateTvCountdownDisplay();
    }, 1000);
  }

  function stopTvAutoCycle() {
    if (tvCountdownInterval) clearInterval(tvCountdownInterval);
    tvCountdownInterval = null;
  }

  function updateTvCountdownDisplay() {
    const cd = document.getElementById('tvCycleCountdown');
    if (cd) {
      cd.textContent = `Auto-Putar: ${tvCycleSecondsLeft}s`;
    }
  }

  // Live Digital Clock with Flashing Seconds
  function startLiveClock() {
    const liveTimeEl = document.getElementById('headerLiveTime');
    if (!liveTimeEl) return;

    function updateClock() {
      const now = new Date();
      const options = { day: 'numeric', month: 'short', year: 'numeric' };
      const datePart = now.toLocaleDateString('id-ID', options);
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      liveTimeEl.textContent = `${datePart}, ${h}:${m}:${s} WIB`;
    }
    updateClock();
    setInterval(updateClock, 1000);
  }

  // Run initialization
  startLiveClock();
  init();
});
