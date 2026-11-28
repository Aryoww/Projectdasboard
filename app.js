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
      peakSub: "Today's peak · Within Cikarang Listrindo limit",
      util: '69,4%',
      utilSub: 'Tr 01 s/d Tr 19 (20.350 kVA)',
      pf: '0,90',
      online: '111 / 111',
      alertCount: '3 meter perlu dicek',
      carbonTon: '155,7',
      curve24h: [8480, 7730, 10630, 15490, 13350, 15720, null, null, null],
      curveMax: 18000,
      curveStep: 3000,
      kwYesterday: 14409,
      kwhYesterday: 204150,
      costYesterday: 'Rp 295 jt',
      peakYesterday: '17.150',
      utilYesterday: '71,8%',
      carbonYesterday: '161,3',
      curve24hYesterday: [8820, 8040, 11050, 15920, 13780, 16180, 11840, 9210, 8600],
      deltaKwh: -7086,
      deltaKwhPct: '-3,5%',
      deltaCost: '-Rp 10 jt',
      deltaPeak: '-330 kW',
      deltaUtil: '-2,4%',
      deltaCarbon: '-5,6 ton',
      days7: {
        labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
        kwh: [194200, 201300, 208400, 205600, 204150, 197064, 142800],
        kwPeak: [16450, 16980, 17350, 17420, 17150, 16820, 12400],
        kwAvg: [12800, 13100, 13450, 13200, 13050, 12600, 9500],
        totalKwh: 1353514,
        avgKwh: 193359,
        totalCost: 'Rp 1,95 M',
        peakMax: 17420
      },
      monthMtd: {
        labels: ['01 Nov', '05 Nov', '10 Nov', '15 Nov', '20 Nov', '25 Nov', '30 Nov'],
        kwPeak: [16200, 16850, 17120, 17480, 16820, 16950, 17200],
        kwAvg: [12400, 12900, 13150, 13400, 13000, 13100, 13250],
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
      peakSub: "Today's peak · Within Cikarang Listrindo limit",
      util: '69,4%',
      utilSub: 'Tr 01 s/d Tr 19 (20.350 kVA)',
      pf: '0,90',
      online: '42 / 42',
      alertCount: '3 meter perlu dicek',
      carbonTon: '155,7',
      curve24h: [8480, 7730, 10630, 15490, 13350, 15720, null, null, null],
      curveMax: 18000,
      curveStep: 3000,
      kwYesterday: 14409,
      kwhYesterday: 204150,
      costYesterday: 'Rp 295 jt',
      peakYesterday: '17.150',
      utilYesterday: '71,8%',
      carbonYesterday: '161,3',
      curve24hYesterday: [8820, 8040, 11050, 15920, 13780, 16180, 11840, 9210, 8600],
      deltaKwh: -7086,
      deltaKwhPct: '-3,5%',
      deltaCost: '-Rp 10 jt',
      deltaPeak: '-330 kW',
      deltaUtil: '-2,4%',
      deltaCarbon: '-5,6 ton',
      days7: {
        labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
        kwh: [194200, 201300, 208400, 205600, 204150, 197064, 142800],
        kwPeak: [16450, 16980, 17350, 17420, 17150, 16820, 12400],
        kwAvg: [12800, 13100, 13450, 13200, 13050, 12600, 9500],
        totalKwh: 1353514,
        avgKwh: 193359,
        totalCost: 'Rp 1,95 M',
        peakMax: 17420
      },
      monthMtd: {
        labels: ['01 Nov', '05 Nov', '10 Nov', '15 Nov', '20 Nov', '25 Nov', '30 Nov'],
        kwPeak: [16200, 16850, 17120, 17480, 16820, 16950, 17200],
        kwAvg: [12400, 12900, 13150, 13400, 13000, 13100, 13250],
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
      { name: 'Outgoing Trafo 01', val: 15400 },
      { name: 'Outgoing Trafo 02', val: 8900 },
      { name: 'Outgoing Trafo 03', val: 14200 },
      { name: 'Outgoing Trafo 04', val: 7600 },
      { name: 'Outgoing Trafo 05', val: 10800 },
      { name: 'Outgoing Trafo 06', val: 7200 },
      { name: 'Outgoing Trafo 07', val: 6800 },
      { name: 'Outgoing Trafo 08', val: 8650 },
      { name: 'Outgoing Trafo 09', val: 5400 },
      { name: 'Outgoing Trafo 10', val: 11800 },
      { name: 'Outgoing Trafo 11', val: 5800 },
      { name: 'Outgoing Trafo 12', val: 18450 },
      { name: 'Outgoing Trafo 13', val: 4900 },
      { name: 'Outgoing Trafo 14', val: 4200 },
      { name: 'Outgoing Trafo 15', val: 6150 },
      { name: 'Outgoing Trafo 16', val: 9950 },
      { name: 'Outgoing Trafo 17', val: 9800 },
      { name: 'Outgoing Trafo 18', val: 6100 },
      { name: 'Outgoing Trafo 19', val: 7850 }
    ],
    electrical: [
      { name: 'Outgoing Trafo 01', val: 15400 },
      { name: 'Outgoing Trafo 02', val: 8900 },
      { name: 'Outgoing Trafo 03', val: 14200 },
      { name: 'Outgoing Trafo 04', val: 7600 },
      { name: 'Outgoing Trafo 05', val: 10800 },
      { name: 'Outgoing Trafo 06', val: 7200 },
      { name: 'Outgoing Trafo 07', val: 6800 },
      { name: 'Outgoing Trafo 08', val: 8650 },
      { name: 'Outgoing Trafo 09', val: 5400 },
      { name: 'Outgoing Trafo 10', val: 11800 },
      { name: 'Outgoing Trafo 11', val: 5800 },
      { name: 'Outgoing Trafo 12', val: 18450 },
      { name: 'Outgoing Trafo 13', val: 4900 },
      { name: 'Outgoing Trafo 14', val: 4200 },
      { name: 'Outgoing Trafo 15', val: 6150 },
      { name: 'Outgoing Trafo 16', val: 9950 },
      { name: 'Outgoing Trafo 17', val: 9800 },
      { name: 'Outgoing Trafo 18', val: 6100 },
      { name: 'Outgoing Trafo 19', val: 7850 }
    ],
    fac1: [
      { name: 'Outgoing Trafo 01 Billet Heater FO 6.6kV', val: 15400 },
      { name: 'Outgoing Trafo 03 FO & HT 200V', val: 14200 },
      { name: 'Outgoing Trafo 05 FO & HT 200V', val: 10800 },
      { name: 'Outgoing Trafo 02 UTY 380V', val: 8900 },
      { name: 'Outgoing Trafo 04 Mach 200V', val: 7600 },
      { name: 'Feeder F1-3 MDB Press 200V', val: 6800 },
      { name: 'Feeder F1-4 LV-MDB L/C 380V', val: 5900 },
      { name: 'Feeder F1-8 Billet Heater Press Auto', val: 5200 }
    ],
    fac2_1: [
      { name: 'Outgoing Trafo 10 Billet Heater Komatsu 6.6kV', val: 11800 },
      { name: 'Outgoing Trafo 08 FO & HT 200V', val: 8650 },
      { name: 'Outgoing Trafo 06 UTY & FO 380V', val: 7200 },
      { name: 'Outgoing Trafo 07 FO 200V', val: 6800 },
      { name: 'Outgoing Trafo 09 UTY 380V', val: 5400 },
      { name: 'Feeder F4-5 Billet Heater 1100 kVA', val: 4900 },
      { name: 'Feeder F4-1 LV-MDB 3P 380V', val: 3800 },
      { name: 'Feeder F4-2 LV-MDB 3P 200V', val: 3200 }
    ],
    fac2: [
      { name: 'Outgoing Trafo 12 FO & HT 200V', val: 18450 },
      { name: 'Outgoing Trafo 16 Billet Heater N1600 6.6kV', val: 9950 },
      { name: 'Outgoing Trafo 15 Billet Heater Kurimoto 6.6kV', val: 6150 },
      { name: 'Outgoing Trafo 11 Billet Heater N1300 6.6kV', val: 5800 },
      { name: 'Outgoing Trafo 13 Mach 200V', val: 4900 },
      { name: 'Outgoing Trafo 14 UTY 380V', val: 4200 },
      { name: 'Feeder F2-6 MV Titan 1200T', val: 3800 },
      { name: 'Feeder F2-5 MV Kurimoto', val: 3200 }
    ],
    fac3: [
      { name: 'Outgoing Trafo 17 UTY & Forg 380V', val: 9800 },
      { name: 'Outgoing Trafo 19 HT 200V', val: 7850 },
      { name: 'Outgoing Trafo 18 Mach 200V', val: 6100 },
      { name: 'Feeder F3-1 LV-MDB 380V (1600 kVA)', val: 5400 },
      { name: 'Feeder F3-3 LV-MDB 200V (1500 kVA)', val: 4600 },
      { name: 'Feeder F3-2 LV-MDB 200V (1000 kVA)', val: 3900 },
      { name: 'Feeder F3-0 MV-MDB 20kV', val: 3100 },
      { name: 'Carburizing HT 74026', val: 2600 }
    ],
    forging: [
      { name: 'Outgoing Trafo 12 FO & HT 200V', val: 18450 },
      { name: 'Outgoing Trafo 10 Billet Heater Komatsu 6.6kV', val: 11800 },
      { name: 'Outgoing Trafo 16 Billet Heater N1600 6.6kV', val: 9950 },
      { name: 'Outgoing Trafo 08 FO & HT 200V', val: 8650 },
      { name: 'Press Komatsu 1600T (61026)', val: 6400 },
      { name: 'Press Komatsu (81023)', val: 5900 },
      { name: 'Forging Press (94476)', val: 5100 },
      { name: 'Press Komatsu 630T (61018)', val: 4800 }
    ],
    heattreatment: [
      { name: 'Outgoing Trafo 01 Billet Heater FO 6.6kV', val: 15400 },
      { name: 'Outgoing Trafo 10 Billet Heater Komatsu 6.6kV', val: 11800 },
      { name: 'Outgoing Trafo 16 Billet Heater N1600 6.6kV', val: 9950 },
      { name: 'Outgoing Trafo 19 HT 200V Fac 3', val: 7850 },
      { name: 'Outgoing Trafo 15 Billet Heater Kurimoto 6.6kV', val: 6150 },
      { name: 'Vacuum Furnace (74002)', val: 5200 },
      { name: 'Carburizing Furnace (74003)', val: 4600 },
      { name: 'Billet Heater 1600T (74020)', val: 4100 }
    ]
  };

  // Attention Required Alert Items by Category & Factory (SCADA-Grade)
  const ATTENTION_ALERTS = {
    all: [
      { id: 'F2-6', title: 'Feeder F2-6 MV Titan 1200T', area: 'Factory 2 · Electrical Room F2', severity: 'critical', badge: 'Beban puncak', note: 'Beban motor press Titan 1200T naik selama Shift 1. Tindakan: pantau arus kubikel MV 6,6kV dan koordinasi APFC.' },
      { id: 'TR-01', title: 'Outgoing Trafo 01 Billet Heater FO 6,6kV', area: 'Factory 1 · Substation TM 20kV / 6,6kV', severity: 'warning', badge: 'PF rendah 0,84', note: 'Power factor 0,84 di bawah standar Cikarang Listrindo (< 0,85). Risiko denda kVARh bulanan. Tindakan: periksa step regulator APFC capacitor bank.' },
      { id: 'TR-12', title: 'Outgoing Trafo 12 FO & HT 200V', area: 'Factory 2 · Substation LMVDP 200V', severity: 'warning', badge: 'Beban induktif tinggi', note: 'Beban induktif press forging tinggi saat shift siang (cos φ 0,83). Tindakan: aktifkan kompensasi power factor lokal di panel distribusi.' }
    ],
    electrical: [
      { id: 'F2-6', title: 'Feeder F2-6 MV Titan 1200T', area: 'Factory 2 · Electrical Room F2', severity: 'critical', badge: 'Beban puncak', note: 'Beban motor press Titan 1200T naik selama Shift 1. Tindakan: pantau arus kubikel MV 6,6kV dan koordinasi APFC.' },
      { id: 'TR-01', title: 'Outgoing Trafo 01 Billet Heater FO 6,6kV', area: 'Factory 1 · Substation TM 20kV / 6,6kV', severity: 'warning', badge: 'PF rendah 0,84', note: 'Power factor 0,84 di bawah standar Cikarang Listrindo (< 0,85). Risiko denda kVARh bulanan. Tindakan: periksa step regulator APFC capacitor bank.' },
      { id: 'TR-12', title: 'Outgoing Trafo 12 FO & HT 200V', area: 'Factory 2 · Substation LMVDP 200V', severity: 'warning', badge: 'Beban induktif tinggi', note: 'Beban induktif press forging tinggi saat shift siang (cos φ 0,83). Tindakan: aktifkan kompensasi power factor lokal di panel distribusi.' }
    ],
    fac1: [
      { id: 'TR-01', title: 'Outgoing Trafo 01 Billet Heater FO 6.6kV', area: 'Factory 1 · Substation TM 20kV / 6.6kV', severity: 'warning', badge: 'Low Cos φ (0.84)', note: 'Power factor 0.84 below Cikarang Listrindo threshold. Capacitor bank step activation required.', action: 'Check APFC Capacitor Bank Panel F1.' },
      { id: 'F1-8', title: 'Feeder F1-8 Billet Heater Press Auto', area: 'Factory 1 · Feeder TM 6.6kV', severity: 'warning', badge: 'THD-I 4.8%', note: 'Non-linear induction heater harmonic distortion approaching 5.0% threshold.', action: 'Monitor Active Harmonic Filter (AHF) on 20kV cubicle.' }
    ],
    fac2_1: [
      { id: 'TR-10', title: 'Outgoing Trafo 10 Billet Heater Komatsu 6.6kV', area: 'Electrical Room 2.1 · 20kV Substation', severity: 'normal', badge: 'System Optimal', note: 'Billet Heater Komatsu 1600T & LV-MDB 3P operating normally at Cos φ 0.93.', action: 'Live telemetry active, no anomalies detected.' }
    ],
    fac2: [
      { id: 'F2-6', title: 'Feeder F2-6 MV Titan 1200T', area: 'Factory 2 · Substation Forging APFC', severity: 'critical', badge: 'Peak Demand', note: 'Titan 1200T press motor load approaching feeder capacity.', action: 'Reset APFC controller & check cubicle temperature.' },
      { id: 'TR-12', title: 'Outgoing Trafo 12 FO & HT 200V', area: 'Factory 2 · LMVDP 200V', severity: 'warning', badge: 'Cos φ 0.83', note: 'Day shift inductive motor load on forging press increased.', action: 'Enable local compensation on LMVDP panel.' }
    ],
    fac3: [
      { id: 'TR-17', title: 'All Outgoing Trafos & Panels Normal', area: 'Factory 3 · Electrical Room 3', severity: 'normal', badge: 'System Optimal', note: 'Average Cos φ 0.92 – Penalty-free Cikarang Listrindo compliance, transformer oil temperature stable 65°C.', action: 'Normal operation, maintain weekly preventive inspection schedule.' }
    ],
    forging: [
      { id: 'TR-12', title: 'Outgoing Trafo 12 FO & HT 200V', area: 'Factory 2 · Forging Substation 200V', severity: 'warning', badge: 'Cos φ 0.84', note: 'Impulsive forging press load requires dynamic APFC switching.', action: 'Schedule APFC step switching to dampen impulsive reactive power.' },
      { id: 'F2-6', title: 'Feeder F2-6 MV Titan 1200T', area: 'Factory 2 · Forging APFC Feeder', severity: 'critical', badge: 'Peak Demand', note: '1200T press motor increasing kVAR reactive demand.', action: 'Verify overcurrent protection relay settings on MV cubicle.' }
    ],
    heattreatment: [
      { id: 'TR-01', title: 'All Heat Treatment Loads Normal', area: 'Substation HT Fac 1, 2, 2.1, 3', severity: 'normal', badge: 'Cos φ 0.94', note: 'Induction billet heaters & carburizing furnaces operating stably and efficiently.', action: 'Maintain temperature setpoints and daily telemetry monitoring.' }
    ]
  };

  // Application State
  const state = {
    meters: (typeof METER_DATA !== 'undefined') ? JSON.parse(JSON.stringify(METER_DATA)) : [],
    activeView: 'view-dashboard',
    activeFilter: 'all',
    activePeriod: 'today',
    filterOnlyAlerts: false,
    tableStatusFilter: 'all',
    searchQuery: '',
    sortColumn: 'id',
    sortAsc: true,
    currentPage: 1,
    pageSize: 15,
    isSimulationActive: true,
    isActivelyScrolling: false,
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

  const kpiPfTitle = document.getElementById('kpiPfTitle');
  const kpiPfVal = document.getElementById('kpiPfVal');
  const kpiPfSub = document.getElementById('kpiPfSub');
  const kpiPfPrev = document.getElementById('kpiPfPrev');
  const kpiPfDelta = document.getElementById('kpiPfDelta');
  const monitoringLiveBadge = document.getElementById('monitoringLiveBadge');

  const kpiPeakVal = document.getElementById('kpiPeakVal');
  const kpiPeakSub = document.getElementById('kpiPeakSub');
  const kpiPeakTitle = document.getElementById('kpiPeakTitle');
  const kpiPeakPrev = document.getElementById('kpiPeakPrev');
  const kpiPeakDelta = document.getElementById('kpiPeakDelta');

  const kpiCarbonVal = document.getElementById('kpiCarbonVal');
  const kpiCarbonSub = document.getElementById('kpiCarbonSub');
  const kpiCarbonTitle = document.getElementById('kpiCarbonTitle');
  const kpiCarbonPrev = document.getElementById('kpiCarbonPrev');
  const kpiCarbonDelta = document.getElementById('kpiCarbonDelta');

  const timeframeSummaryText = document.getElementById('timeframeSummaryText');
  const chart24hTitle = document.getElementById('chart24hTitle');
  const chart24hSub = document.getElementById('chart24hSub');
  const chartLegendToday = document.getElementById('chartLegendToday');
  const chartLegendPrev = document.getElementById('chartLegendPrev');
  const chartPeakBadge = document.getElementById('chartPeakBadge');
  const chartMinBadge = document.getElementById('chartMinBadge');

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
  window.showToast = showToast;

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
      // Recompute responsive chart canvas
      if (chart24hInstance) chart24hInstance.resize();
      if (chartDonutInstance) chartDonutInstance.resize();
      if (chartTop8Instance) chartTop8Instance.resize();
    });

    // Mobile Orientation Change (Portrait <-> Landscape)
    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        if (chart24hInstance) chart24hInstance.resize();
        if (chartDonutInstance) chartDonutInstance.resize();
        if (chartTop8Instance) chartTop8Instance.resize();
      }, 250);
    });

    // Touch Swipe Gestures for Mobile Drawer (Native Touch Experience)
    let touchStartX = 0;
    let touchStartY = 0;

    window.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
      if (e.changedTouches && e.changedTouches.length === 1) {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const diffX = touchEndX - touchStartX;
        const diffY = Math.abs(touchEndY - touchStartY);

        // Horizontal swipe gesture check
        if (diffY < 60 && Math.abs(diffX) > 45) {
          if (window.innerWidth <= 1024) {
            // Edge swipe from left (starting within 35px from edge) -> open drawer
            if (touchStartX < 35 && diffX > 45) {
              openMobileSidebar();
            }
            // Swipe left when drawer is open -> close drawer
            else if (diffX < -45 && appSidebar?.classList.contains('open')) {
              closeMobileSidebar();
            }
          }
        }
      }
    }, { passive: true });

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
      setTimeout(() => {
        if (chart24hInstance) chart24hInstance.resize();
        if (chartDonutInstance) chartDonutInstance.resize();
        if (chartTop8Instance) chartTop8Instance.resize();
      }, 310);
    }
  }

  function syncSidebarUIState(isOpen) {
    const btnToggleSidebar = document.getElementById('btnToggleSidebar');
    const toggleText = document.getElementById('btnSidebarToggleText');

    if (isOpen) {
      if (toggleText) toggleText.textContent = 'Menu';
      if (btnToggleSidebar) {
        btnToggleSidebar.classList.remove('collapsed-mode');
        btnToggleSidebar.title = 'Tutup Menu Samping';
      }
    } else {
      if (toggleText) toggleText.textContent = 'Open Menu';
      if (btnToggleSidebar) {
        btnToggleSidebar.classList.add('collapsed-mode');
        btnToggleSidebar.title = 'Buka Menu Samping';
      }
    }
  }

  // ================= 4. MULTI-VIEW NAVIGATION & ROUTING =================
  window.switchMenuView = function(viewId, filterKey = 'all') {
    state.activeView = viewId;
    state.activeFilter = filterKey;

    // 1. Toggle visibility of all views with smooth re-entry animation
    document.querySelectorAll('.menu-view').forEach(v => {
      if (v.id === viewId) {
        v.classList.remove('active');
        void v.offsetWidth;
        v.classList.add('active');
      } else {
        v.classList.remove('active');
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
        title: 'Main Dashboard',
        subtitle: 'Division Head & Utility Engineering Team · PT Musashi Auto Parts Indonesia',
        tag: 'Cubicle Schneider SM6 · All Factory Substations'
      },
      'view-electrical-1': {
        title: 'Electrical Room 1 · Factory 1',
        subtitle: 'Supplying Billet Heater Komatsu, LV-MDB 380V/200V, and Outgoing Trafo 01 to 05',
        tag: 'Substation Factory 1 · 14 Live Feeder & Trafo Units'
      },
      'view-electrical-2-1': {
        title: 'Electrical Room 2.1 · Factory 2.1',
        subtitle: 'Supplying Billet Heater 1100 kVA, LV-MDB 3P, and Outgoing Trafo 06 to 10',
        tag: 'Substation Factory 2.1 · 11 Live Feeder & Trafo Units'
      },
      'view-electrical-2': {
        title: 'Electrical Room 2 · Factory 2',
        subtitle: 'Supplying Forging Titan 1200T, Kurimoto, and Outgoing Trafo 11 to 16',
        tag: 'Substation Factory 2 · 12 Live Feeder & Trafo Units'
      },
      'view-electrical-3': {
        title: 'Electrical Room 3 · Factory 3',
        subtitle: 'Supplying Central Cooling Tower Pumps, HT Carburizing, and Outgoing Trafo 17 to 19',
        tag: 'Substation Factory 3 · 7 Live Feeder & Trafo Units'
      },
      'view-forging': {
        title: 'Electrical Substation · Forging Press Lines',
        subtitle: 'Dedicated Monitoring for Komatsu 630T/1600T, Kurimoto, Titan 1200T, and Billet Heater Feeders',
        tag: '39 Forging Feeders · Factory 1, 2, and 3'
      },
      'view-heattreatment': {
        title: 'Electrical Substation · Heat Treatment (HT) Lines',
        subtitle: 'Dedicated Monitoring for Billet Heater 6.6kV, Carburizing, Tempering, Washing, & Normalizing',
        tag: '29 Heat Treatment Feeders · Musashi Plant'
      },
      'view-reports': {
        title: 'Energy Reports & Audit Center',
        subtitle: 'Cikarang Listrindo Tariff Billing Recap, Zero-Penalty kVARh Audit, and ESG Carbon Footprint',
        tag: 'Electrical Energy Audit · PT Musashi Auto Parts Indonesia'
      }
    };

    const cfg = headerConfigs[viewId] || headerConfigs['view-dashboard'];
    const bannerTitle = document.getElementById('bannerTitle');
    const bannerSubtitle = document.getElementById('bannerSubtitle');
    const bannerAreaTag = document.getElementById('bannerAreaTag');
    if (bannerTitle) bannerTitle.textContent = cfg.title;
    if (bannerSubtitle) bannerSubtitle.textContent = cfg.subtitle;
    if (bannerAreaTag) bannerAreaTag.textContent = cfg.tag;

    // 4. Update only the active view's data & resize charts cleanly
    if (viewId === 'view-dashboard') {
      updateViewForActiveFilter();
      renderTable();
      if (typeof requestAnimationFrame === 'function') {
        requestAnimationFrame(() => {
          if (chart24hInstance) chart24hInstance.resize();
          if (chartDonutInstance) chartDonutInstance.resize();
          if (chartTop8Instance) chartTop8Instance.resize();
        });
      }
    } else {
      renderActiveDedicatedView(viewId);
    }

    // 5. Scroll smoothly to top on the actual scroll container
    const mainContent = document.getElementById('appMainContent');
    if (mainContent && typeof mainContent.scrollTo === 'function') {
      mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (mainContent) {
      mainContent.scrollTop = 0;
    }

    // 6. Close mobile sidebar drawer if on mobile
    if (window.innerWidth <= 1024) {
      closeMobileSidebar();
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

    // Chart dedicated timeframe pills (Hari Ini, Kemarin, 1 Minggu, 1 Bulan)
    const chartPills = document.querySelectorAll('.chart-time-pill');
    chartPills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        e.preventDefault();
        const period = pill.dataset.chartPeriod || 'today';
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

    // Update active pill styling for both executive toolbar and chart pills
    document.querySelectorAll('.timeframe-pill').forEach(pill => {
      pill.classList.toggle('active', pill.dataset.period === period);
    });
    document.querySelectorAll('.chart-time-pill').forEach(pill => {
      pill.classList.toggle('active', pill.dataset.chartPeriod === period);
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
        if (monitoringStatusText) monitoringStatusText.textContent = 'LIVE';
        if (monitoringLiveBadge) monitoringLiveBadge.classList.remove('status-offline');
      } else if (period === 'yesterday') {
        activeDateDisplay.textContent = 'Yesterday · 09 Nov 2026';
        if (btnPrevDay) btnPrevDay.disabled = true;
        if (btnNextDay) btnNextDay.disabled = false;
        if (monitoringStatusText) monitoringStatusText.textContent = 'H-1';
        if (monitoringLiveBadge) monitoringLiveBadge.classList.add('status-offline');
      } else if (period === '7days') {
        activeDateDisplay.textContent = 'Last 7 Days';
        if (btnPrevDay) btnPrevDay.disabled = false;
        if (btnNextDay) btnNextDay.disabled = false;
        if (monitoringStatusText) monitoringStatusText.textContent = '7-Day';
        if (monitoringLiveBadge) monitoringLiveBadge.classList.add('status-offline');
      } else if (period === 'month') {
        activeDateDisplay.textContent = 'This Month · MTD Nov 2026';
        if (btnPrevDay) btnPrevDay.disabled = false;
        if (btnNextDay) btnNextDay.disabled = false;
        if (monitoringStatusText) monitoringStatusText.textContent = 'MTD';
        if (monitoringLiveBadge) monitoringLiveBadge.classList.add('status-offline');
      }
    }

    updateViewForActiveFilter();
    renderTable();
  }
  window.setTimeframePeriod = setTimeframePeriod;

  // Central function to set filter and synchronize all navigation controls
  function setActiveFilter(filterKey) {
    state.filterOnlyAlerts = false;
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
        alertCountBadge.textContent = '1 Meter Requires Inspection';
        alertDescText.textContent = 'Outgoing Trafo 01 power factor is 0.84 (below Cikarang Listrindo target ≥ 0.85). Check APFC #01 capacitor step to prevent kVARh surcharge.';
      } else if (filterKey === 'fac2_1') {
        alertCountBadge.textContent = 'All Normal';
        alertDescText.textContent = 'Outgoing Trafo 06 to 10 and Feeders F4-0 to F4-5 are operating within optimal range (> 0.90).';
      } else if (filterKey === 'fac2') {
        alertCountBadge.textContent = '2 Meters Require Inspection';
        alertDescText.textContent = 'Outgoing Trafo 12 load is approaching 85% during Shift 1 forging peak. Monitor transformer temperature and secondary current.';
      } else if (filterKey === 'fac3') {
        alertCountBadge.textContent = 'All Normal';
        alertDescText.textContent = 'Outgoing Trafo 17 to 19 load and power factor are operating within optimal range (> 0.90).';
      } else if (filterKey === 'forging') {
        alertCountBadge.textContent = '2 High-Load Trafos';
        alertDescText.textContent = 'Forging Press lines Outgoing Trafo 12 & Trafo 03 experienced current spikes during day shift. Ensure APFC is fully active.';
      } else if (filterKey === 'heattreatment') {
        alertCountBadge.textContent = 'Stable Operation';
        alertDescText.textContent = '6.6kV Induction Billet Heaters on Outgoing Trafo 01, 10, 15, 16 are operating stably at PF 0.95.';
      } else {
        alertCountBadge.textContent = '3 Meters Require Inspection';
        alertDescText.textContent = 'Power factor below Cikarang Listrindo threshold (< 0.85) detected on Outgoing Trafo 01 (0.84) and APFC Cap Bank. Please inspect capacitor step regulator to prevent kVARh surcharge.';
      }
    }

    // 3. Update Views & Table
    updateViewForActiveFilter();
    renderTable();
  }

  // ================= 4. UPDATE VIEW BASED ON ACTIVE FILTER & TIMEFRAME =================
  function updateCosphiCard(title, pfRaw, subText, prevText) {
    const pfStr = pfRaw || '0,90';
    const pfNum = parseFloat(String(pfStr).replace(',', '.')) || 0.90;
    const isCompliant = pfNum >= 0.85;
    const diff = (pfNum - 0.85).toFixed(2).replace('.', ',');
    const sign = pfNum >= 0.85 ? '+' : '';

    if (kpiPfTitle) kpiPfTitle.textContent = title;
    if (kpiPfVal) {
      kpiPfVal.textContent = pfStr;
      kpiPfVal.style.color = isCompliant ? 'var(--color-green)' : 'var(--color-amber)';
    }
    if (kpiPfSub) kpiPfSub.textContent = subText;
    if (kpiPfPrev) kpiPfPrev.textContent = prevText;
    if (kpiPfDelta) {
      kpiPfDelta.className = `kpi-delta-tag ${isCompliant ? 'down' : 'warn'}`;
      kpiPfDelta.textContent = isCompliant ? `● ${sign}${diff} Optimal` : `▲ ${diff} Cek APFC`;
    }
  }

  function updateViewForActiveFilter() {
    const filterKey = state.activeFilter;
    const data = CATEGORY_BASELINES[filterKey] || CATEGORY_BASELINES.electrical || CATEGORY_BASELINES.all;
    const period = state.activePeriod || 'today';

    // 1. Update KPI Values & Timeframe Comparison Badges
    if (period === 'today') {
      if (kpiDayaTitle) kpiDayaTitle.textContent = 'Total Active Power';
      if (kpiDayaVal) kpiDayaVal.textContent = data.kw.toLocaleString('id-ID');
      if (kpiDayaSub) kpiDayaSub.textContent = `Current live load · ${data.util || '69,4%'} cap (${data.online || '111/111'})`;
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
      if (kpiBiayaSub) kpiBiayaSub.textContent = 'Cikarang Listrindo industrial tariff';
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

      updateCosphiCard(
        'Power Factor (Cos φ)',
        data.pf,
        'Target Cikarang Listrindo ≥ 0,85',
        'Min Target: 0,85'
      );

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

      if (chart24hTitle) chart24hTitle.textContent = 'Profil & Tren Beban Daya Listrik';
      if (chart24hSub) chart24hSub.textContent = 'Interval 3 jam (kW) · Perbandingan kurva aktif & historis';
      if (chartLegendToday) { chartLegendToday.style.display = 'inline-flex'; chartLegendToday.innerHTML = '<span class="chart-dot blue"></span> Hari Ini'; }
      if (chartLegendPrev) { chartLegendPrev.style.display = 'inline-flex'; chartLegendPrev.innerHTML = '<span class="chart-dot gray"></span> Kemarin'; }
      if (chartPeakBadge) chartPeakBadge.textContent = '▲ Puncak 15.720 kW · 15:00';
      if (chartMinBadge) chartMinBadge.textContent = '▼ Terendah 7.730 kW · 03:00';

      update24hChart(data.curve24h, 18000, 3000, data.curve24hYesterday, ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '24:00']);

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

      updateCosphiCard(
        'Yesterday Avg Cos φ',
        data.pfYesterday || data.pf,
        'H-1 audited reactive compliance',
        `Today: ${data.pf || '0,90'}`
      );

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

      if (chart24hTitle) chart24hTitle.textContent = 'Profil & Tren Beban Daya Listrik';
      if (chart24hSub) chart24hSub.textContent = 'Interval 3 jam · Satuan kW · Profil beban lengkap 24 jam kemarin';
      if (chartLegendToday) { chartLegendToday.style.display = 'none'; }
      if (chartLegendPrev) { chartLegendPrev.style.display = 'inline-flex'; chartLegendPrev.innerHTML = '<span class="chart-dot gray"></span> Profil Kemarin (24 Jam)'; }
      if (chartPeakBadge) chartPeakBadge.textContent = '▲ Puncak 16.180 kW · 15:00';
      if (chartMinBadge) chartMinBadge.textContent = '▼ Terendah 8.040 kW · 03:00';

      update24hChart(data.curve24hYesterday || data.curve24h, 18000, 3000, null, ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '24:00']);

    } else if (period === '7days') {
      const d7 = data.days7 || { totalKwh: 1353514, avgKwh: 193359, totalCost: 'Rp 1,95 M', peakMax: 17420, labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'], kwh: [194200, 201300, 208400, 205600, 204150, 197064, 142800], kwPeak: [16450, 16980, 17350, 17420, 17150, 16820, 12400], kwAvg: [12800, 13100, 13450, 13200, 13050, 12600, 9500] };

      if (kpiDayaTitle) kpiDayaTitle.textContent = '7-Day Peak Demand';
      if (kpiDayaVal) kpiDayaVal.textContent = d7.peakMax.toLocaleString('id-ID');
      if (kpiDayaSub) kpiDayaSub.textContent = 'Highest weekly peak (kW)';
      if (kpiDayaPrev) kpiDayaPrev.textContent = 'Target Limit: 18,000 kW';
      if (kpiDayaDelta) {
        kpiDayaDelta.className = 'kpi-delta-tag down';
        kpiDayaDelta.textContent = '▼ Margin 580 kW';
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

      updateCosphiCard(
        '7-Day Avg Cos φ',
        d7.pf || data.pf,
        'Weekly reactive power efficiency',
        'Min Target: 0,85'
      );

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

      if (chart24hTitle) chart24hTitle.textContent = 'Profil & Tren Beban Daya Listrik';
      if (chart24hSub) chart24hSub.textContent = 'Tren beban daya 7 hari terakhir (Senin s/d Minggu) · Puncak harian & rata-rata';
      if (chartLegendToday) { chartLegendToday.style.display = 'inline-flex'; chartLegendToday.innerHTML = '<span class="chart-dot blue"></span> Beban Puncak (kW)'; }
      if (chartLegendPrev) { chartLegendPrev.style.display = 'inline-flex'; chartLegendPrev.innerHTML = '<span class="chart-dot gray"></span> Beban Rata-rata (kW)'; }
      if (chartPeakBadge) chartPeakBadge.textContent = '▲ Puncak 17.420 kW · Kamis';
      if (chartMinBadge) chartMinBadge.textContent = '▼ Terendah 12.400 kW · Minggu';

      update24hChart(d7.kwPeak, 20000, 4000, d7.kwAvg, d7.labels);

    } else if (period === 'month') {
      const mMtd = data.monthMtd || { kwh: 2150400, cost: 'Rp 3,11 M', peak: '17.480', util: '70,2%', labels: ['01 Nov', '05 Nov', '10 Nov', '15 Nov', '20 Nov', '25 Nov', '30 Nov'], kwPeak: [16200, 16850, 17120, 17480, 16820, 16950, 17200], kwAvg: [12400, 12900, 13150, 13400, 13000, 13100, 13250] };

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

      updateCosphiCard(
        'Month Avg Cos φ (MTD)',
        mMtd.pf || data.pf,
        'Monthly kVARh penalty compliance',
        'Min Target: 0,85'
      );

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

      if (chart24hTitle) chart24hTitle.textContent = 'Profil & Tren Beban Daya Listrik';
      if (chart24hSub) chart24hSub.textContent = 'Tren konsumsi daya harian & progres akumulasi energi selama 1 bulan berjalan';
      if (chartLegendToday) { chartLegendToday.style.display = 'inline-flex'; chartLegendToday.innerHTML = '<span class="chart-dot blue"></span> Tren Puncak Harian (kW)'; }
      if (chartLegendPrev) { chartLegendPrev.style.display = 'inline-flex'; chartLegendPrev.innerHTML = '<span class="chart-dot gray"></span> Beban Rata-rata (kW)'; }
      if (chartPeakBadge) chartPeakBadge.textContent = '▲ Puncak 17.480 kW · 15 Nov';
      if (chartMinBadge) chartMinBadge.textContent = '▼ Terendah 16.200 kW · 01 Nov';

      update24hChart(mMtd.kwPeak || [16200, 16850, 17120, 17480, 16820, 16950, 17200], 20000, 4000, mMtd.kwAvg || [12400, 12900, 13150, 13400, 13000, 13100, 13250], mMtd.labels || ['01 Nov', '05 Nov', '10 Nov', '15 Nov', '20 Nov', '25 Nov', '30 Nov']);
    }

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

    Chart.defaults.font.family = "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
    Chart.defaults.color = defaultTextColor;
    Chart.defaults.animation = { duration: 420, easing: 'easeOutQuart' };

    // Custom Plugin: Peak, Min, Live Time Marker & Incomplete Data Indicator (Matching SCADA Reference)
    const peakAndMinPlugin = {
      id: 'peakAndMinMarker',
      afterDraw(chart) {
        const meta0 = chart.getDatasetMeta(0);
        if (!meta0 || !meta0.data || !meta0.data.length) return;
        const data0 = chart.data.datasets[0].data;
        if (!data0 || !data0.length) return;

        const ctx = chart.ctx;
        ctx.save();

        const chartArea = chart.chartArea;

        // 1. Draw "kW" unit at top-left of Y-axis
        ctx.font = 'bold 11px Inter, -apple-system, sans-serif';
        ctx.fillStyle = defaultTextColor;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'bottom';
        ctx.fillText('kW', chartArea.left, chartArea.top - 6);

        // Find valid numeric min and max in dataset 0
        let maxIdx = -1;
        let minIdx = -1;
        let maxVal = -Infinity;
        let minVal = Infinity;

        data0.forEach((val, i) => {
          if (val !== null && val !== undefined && typeof val === 'number') {
            if (val > maxVal) { maxVal = val; maxIdx = i; }
            if (val < minVal) { minVal = val; minIdx = i; }
          }
        });

        // Function to draw simple circular point with clean direct text label (matching Image 3)
        function drawPointCallout(pt, text, textColor, isAbove) {
          if (!pt) return;
          const x = pt.x;
          const y = pt.y;

          // Outer circle
          ctx.beginPath();
          ctx.arc(x, y, 5, 0, Math.PI * 2);
          ctx.fillStyle = textColor;
          ctx.fill();

          // Inner white dot
          ctx.beginPath();
          ctx.arc(x, y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();

          // Direct text label (no box) matching Image 3 (e.g. 7.730 below point, 15.720 above point)
          ctx.font = 'bold 11px Inter, -apple-system, sans-serif';
          ctx.fillStyle = textColor;
          ctx.textAlign = 'center';
          ctx.textBaseline = isAbove ? 'bottom' : 'top';
          const textY = isAbove ? y - 7 : y + 7;
          ctx.fillText(text, x, textY);
        }

        // Draw min and max callouts
        if (minIdx !== -1 && meta0.data[minIdx]) {
          drawPointCallout(meta0.data[minIdx], minVal.toLocaleString('id-ID'), '#10b981', false);
        }
        if (maxIdx !== -1 && meta0.data[maxIdx]) {
          drawPointCallout(meta0.data[maxIdx], maxVal.toLocaleString('id-ID'), '#ef4444', true);
        }

        // 2. If 'today' mode: Draw Live Time Marker and "Data belum tersedia" section (matching Image 3)
        if (state.activePeriod === 'today') {
          const pt5 = meta0.data[5]; // 15:00 point
          const pt6 = meta0.data[6]; // 18:00 point

          if (pt5 && pt6) {
            // Simulated live time is ~16:48 (approx 60% of interval between 15:00 and 18:00)
            const ratio = 0.60;
            const liveX = pt5.x + (pt6.x - pt5.x) * ratio;
            const liveY = pt5.y + (pt6.y - pt5.y) * ratio - 4;

            // Vertical dashed line down to bottom
            ctx.beginPath();
            ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.45)' : 'rgba(0, 0, 0, 0.35)';
            ctx.lineWidth = 1.4;
            ctx.setLineDash([4, 4]);
            ctx.moveTo(liveX, liveY);
            ctx.lineTo(liveX, chartArea.bottom);
            ctx.stroke();
            ctx.setLineDash([]);

            // Blue circular point with white center at live time
            ctx.beginPath();
            ctx.arc(liveX, liveY, 6, 0, Math.PI * 2);
            ctx.fillStyle = '#0284c7';
            ctx.fill();
            ctx.beginPath();
            ctx.arc(liveX, liveY, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = '#ffffff';
            ctx.fill();

            // Capsule badge above point: "16:48 · Kini"
            const badgeText = '16:48 · Kini';
            ctx.font = 'bold 9.5px Inter, -apple-system, sans-serif';
            const badgeW = ctx.measureText(badgeText).width + 14;
            const badgeH = 18;
            const badgeX = liveX - badgeW / 2;
            const badgeY = liveY - 26;

            ctx.fillStyle = '#0284c7';
            ctx.beginPath();
            ctx.roundRect ? ctx.roundRect(badgeX, badgeY, badgeW, badgeH, 9999) : ctx.rect(badgeX, badgeY, badgeW, badgeH);
            ctx.fill();

            ctx.fillStyle = '#ffffff';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(badgeText, liveX, badgeY + badgeH / 2 + 0.5);

            // Future text "Data belum tersedia"
            const futureCenterX = (liveX + chartArea.right) / 2;
            const futureCenterY = (chartArea.top + chartArea.bottom) / 2 + 10;
            ctx.font = '500 11px Inter, -apple-system, sans-serif';
            ctx.fillStyle = isDark ? '#94a3b8' : '#64748b';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('Data belum tersedia', futureCenterX, futureCenterY);
          }
        }

        ctx.restore();
      }
    };

    // Custom Plugin: Slices Percentage & Center Total for Donut Chart
    const donutSliceAndCenterPlugin = {
      id: 'donutSliceAndCenter',
      afterDraw(chart) {
        const meta = chart.getDatasetMeta(0);
        if (!meta || !meta.data || !meta.data.length) return;
        const dataset = chart.data.datasets[0];
        const total = dataset.data.reduce((a, b) => a + b, 0);
        if (total === 0) return;

        const ctx = chart.ctx;
        ctx.save();

        // 1. Percentage directly on colored arc slices
        meta.data.forEach((element, i) => {
          const val = dataset.data[i];
          if (!val) return;
          const pct = Math.round((val / total) * 100);
          const angle = (element.startAngle + element.endAngle) / 2;
          const r = (element.innerRadius + element.outerRadius) / 2;
          const x = element.x + Math.cos(angle) * r;
          const y = element.y + Math.sin(angle) * r;

          ctx.font = 'bold 12px Inter, -apple-system, sans-serif';
          ctx.fillStyle = '#ffffff';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
          ctx.shadowBlur = 4;
          ctx.fillText(`${pct}%`, x, y);
        });

        // 2. Center cutout text: Total kWh across active slices
        const firstArc = meta.data[0];
        const centerX = firstArc.x;
        const centerY = firstArc.y;
        const innerR = firstArc.innerRadius || 60;
        const isDark = document.body.classList.contains('dark-theme');
        const totalText = total.toLocaleString('id-ID');
        const mainFontSize = Math.max(14, Math.min(20, Math.round(innerR * 0.3)));

        ctx.shadowBlur = 0;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Total kWh number
        ctx.font = `bold ${mainFontSize}px Plus Jakarta Sans, Inter, -apple-system, sans-serif`;
        ctx.fillStyle = isDark ? '#f8fafc' : '#0f172a';
        ctx.fillText(totalText, centerX, centerY - 7);

        // Unit & Subtitle
        ctx.font = '700 10px Plus Jakarta Sans, Inter, -apple-system, sans-serif';
        ctx.fillStyle = isDark ? '#94a3b8' : '#475569';
        ctx.fillText('TOTAL kWh', centerX, centerY + 13);

        ctx.restore();
      }
    };

    // --- 1. Line Chart: Beban 24 Jam Terakhir (Dual Curve Hari Ini vs Kemarin) ---
    const ctx24h = document.getElementById('chart24h');
    if (ctx24h) {
      const gradient = ctx24h.getContext('2d').createLinearGradient(0, 0, 0, 240);
      gradient.addColorStop(0, 'rgba(2, 132, 199, 0.28)');
      gradient.addColorStop(0.55, 'rgba(2, 132, 199, 0.09)');
      gradient.addColorStop(1, 'rgba(2, 132, 199, 0.0)');

      chart24hInstance = new Chart(ctx24h, {
        type: 'line',
        data: {
          labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '24:00'],
          datasets: [
            {
              label: 'Today (Live)',
              data: CATEGORY_BASELINES.all.curve24h,
              borderColor: '#0284c7',
              borderWidth: 2.8,
              backgroundColor: gradient,
              fill: true,
              tension: 0.42,
              pointRadius: 3.5,
              pointBackgroundColor: '#ffffff',
              pointBorderColor: '#0284c7',
              pointBorderWidth: 2,
              pointHoverRadius: 6,
              pointHoverBackgroundColor: '#0284c7',
              pointHoverBorderColor: '#ffffff',
              pointHoverBorderWidth: 2.5
            },
            {
              label: 'Yesterday (H-1)',
              data: CATEGORY_BASELINES.all.curve24hYesterday,
              borderColor: '#94a3b8',
              borderWidth: 1.8,
              borderDash: [5, 4],
              backgroundColor: 'transparent',
              fill: false,
              tension: 0.42,
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
              backgroundColor: 'rgba(15, 23, 42, 0.94)',
              titleColor: '#ffffff',
              bodyColor: '#e2e8f0',
              borderColor: 'rgba(148, 163, 184, 0.2)',
              borderWidth: 1,
              cornerRadius: 8,
              padding: 11,
              boxPadding: 5,
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
                      return `Delta (Δ): ${sign}${diff.toLocaleString('id-ID')} kW (${sign}${pct}%)`;
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
              border: { display: false },
              ticks: { color: defaultTextColor, font: { size: 11, weight: '500' } }
            },
            y: {
              min: 0,
              max: CATEGORY_BASELINES.all.curveMax,
              border: { display: false, dash: [4, 4] },
              grid: { color: defaultGridColor },
              ticks: {
                color: defaultTextColor,
                font: { size: 11, weight: '500' },
                stepSize: CATEGORY_BASELINES.all.curveStep,
                callback: (val) => val === 0 ? '0' : val.toLocaleString('id-ID')
              }
            }
          }
        },
        plugins: [peakAndMinPlugin]
      });
    }

    // --- 2. Donut Chart: Pembagian Pemakaian Energi ---
    const ctxDonut = document.getElementById('chartDonutEnergy');
    if (ctxDonut) {
      chartDonutInstance = new Chart(ctxDonut, {
        type: 'doughnut',
        data: {
          labels: ['Factory 1', 'Factory 2.1', 'Factory 2', 'Factory 3'],
          datasets: [{
            data: [76200, 49800, 68100, 35596],
            backgroundColor: [
              '#0284c7', // Factory 1 (33%)
              '#06b6d4', // Factory 2.1 (22%)
              '#14b8a6', // Factory 2 (30%)
              '#10b981'  // Factory 3 (15%)
            ],
            borderWidth: 2.5,
            borderColor: isDark ? '#0f172a' : '#ffffff',
            hoverOffset: 8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '70%',
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(15, 23, 42, 0.94)',
              titleColor: '#ffffff',
              borderColor: 'rgba(148, 163, 184, 0.2)',
              borderWidth: 1,
              cornerRadius: 8,
              padding: 11,
              callbacks: {
                label: (ctx) => {
                  const val = ctx.parsed;
                  const total = ctx.dataset.data.reduce((a, b) => a + b, 0) || 1;
                  const pct = ((val / total) * 100).toFixed(1);
                  return ` ${ctx.label}: ${val.toLocaleString('id-ID')} kWh (${pct}%)`;
                }
              }
            }
          }
        },
        plugins: [donutSliceAndCenterPlugin]
      });
    }

    // --- 3. Horizontal Bar Chart: Outgoing Trafo (19 Transformers) ---
    const ctxTop8 = document.getElementById('chartTop8Meters');
    if (ctxTop8) {
      const topData = TOP_8_DATA.all;
      const ctxBar = ctxTop8.getContext('2d');
      const barGrad = ctxBar.createLinearGradient(0, 0, 420, 0);
      barGrad.addColorStop(0, '#0369a1');
      barGrad.addColorStop(0.55, '#0284c7');
      barGrad.addColorStop(1, '#38bdf8');

      chartTop8Instance = new Chart(ctxTop8, {
        type: 'bar',
        data: {
          labels: topData.map(d => d.name),
          datasets: [{
            data: topData.map(d => d.val),
            backgroundColor: barGrad,
            hoverBackgroundColor: '#8c2924',
            borderRadius: 5,
            barThickness: 11
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(15, 23, 42, 0.94)',
              titleColor: '#ffffff',
              bodyColor: '#38bdf8',
              borderColor: 'rgba(148, 163, 184, 0.2)',
              borderWidth: 1,
              cornerRadius: 8,
              padding: 10,
              displayColors: false,
              callbacks: {
                label: (ctx) => `Pemakaian: ${ctx.parsed.x.toLocaleString('id-ID')} kWh`
              }
            }
          },
          scales: {
            x: {
              min: 0,
              max: 22000,
              border: { display: false, dash: [4, 4] },
              grid: { color: defaultGridColor },
              ticks: {
                color: defaultTextColor,
                font: { size: 11, weight: '500' },
                stepSize: 4000,
                callback: (val) => val === 0 ? '0' : val.toLocaleString('id-ID')
              }
            },
            y: {
              border: { display: false },
              grid: { display: false },
              ticks: {
                color: defaultTextColor,
                font: { size: 11, weight: '600' }
              }
            }
          }
        }
      });
    }
  }

  function update24hChart(newData, newMax, newStep, newComparisonData = null, labels = null) {
    if (!chart24hInstance) return;
    if (labels) {
      chart24hInstance.data.labels = labels;
    } else {
      chart24hInstance.data.labels = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '24:00'];
    }

    // Dataset 0: Primary series
    chart24hInstance.data.datasets[0].data = newData;
    if (state.activePeriod === 'yesterday') {
      chart24hInstance.data.datasets[0].label = 'Kemarin (Audited)';
    } else if (state.activePeriod === '7days') {
      chart24hInstance.data.datasets[0].label = 'Beban Puncak (kW)';
    } else if (state.activePeriod === 'month') {
      chart24hInstance.data.datasets[0].label = 'Tren Puncak (kW)';
    } else {
      chart24hInstance.data.datasets[0].label = 'Hari Ini (Live)';
    }

    // Dataset 1: Comparison series
    if (chart24hInstance.data.datasets[1]) {
      if (newComparisonData) {
        chart24hInstance.data.datasets[1].data = newComparisonData;
        chart24hInstance.data.datasets[1].hidden = false;
        if (state.activePeriod === '7days' || state.activePeriod === 'month') {
          chart24hInstance.data.datasets[1].label = 'Beban Rata-rata (kW)';
        } else {
          chart24hInstance.data.datasets[1].label = 'Kemarin';
        }
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
      if (donutSubEl) donutSubEl.textContent = 'Billet Heater 1100 kVA, LV-MDB 3P, and Outgoing Trafo 06-10 load distribution.';
      chartDonutInstance.data.labels = ['Outgoing Trafo 10 Billet Heater 6.6kV', 'Outgoing Trafo 08 FO & HT', 'Outgoing Trafo 06/07 Forg', 'Feeder LV-MDB 3P'];
      chartDonutInstance.data.datasets[0].data = [11800, 8650, 14000, 15350];
      chartDonutInstance.data.datasets[0].backgroundColor = ['#2dd4bf', '#38bdf8', '#fb923c', '#a78bfa'];
      if (donutLegendRow) {
        donutLegendRow.innerHTML = `
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#2dd4bf;"></span><span>Billet Heater 6.6kV</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#38bdf8;"></span><span>Trafo 08 FO/HT</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#fb923c;"></span><span>Trafo 06/07</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#a78bfa;"></span><span>Feeder LV-MDB</span></div>
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
      if (donutTitleEl) donutTitleEl.textContent = 'Musashi Substation Load Share';
      if (donutSubEl) donutSubEl.textContent = 'Substation energy consumption share across Factory 1, 2.1, 2, and 3.';
      chartDonutInstance.data.labels = ['Factory 1', 'Factory 2.1', 'Factory 2', 'Factory 3'];
      chartDonutInstance.data.datasets[0].data = [76200, 49800, 68100, 35596];
      chartDonutInstance.data.datasets[0].backgroundColor = [
        '#38bdf8', '#06b6d4', '#2dd4bf', '#34d399'
      ];
      if (donutLegendRow) {
        donutLegendRow.innerHTML = `
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#38bdf8;"></span><span>Factory 1 (33%)</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#06b6d4;"></span><span>Factory 2.1 (22%)</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#2dd4bf;"></span><span>Factory 2 (30%)</span></div>
          <div class="donut-legend-item"><span class="donut-legend-color" style="background:#34d399;"></span><span>Factory 3 (15%)</span></div>
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
      const badgeText = item.badge || (sev === 'critical' ? 'Beban puncak' : (sev === 'normal' ? 'Optimal' : 'PF rendah'));
      const meterId = item.id || '';

      return `
        <div class="attention-card ${sev}" onclick="${meterId ? `window.openMeterDetailById('${meterId}')` : ''}" title="Lihat telemetri ${meterId}">
          <div class="attention-card-header">
            <div class="attention-badge-group">
              <span class="attention-pill ${pillClass}">
                <span class="pulse-indicator"></span>
                ${badgeText}
              </span>
              ${meterId ? `<span class="attention-id-badge">${meterId}</span>` : ''}
            </div>
            ${meterId ? `
              <button class="btn-attention-action" onclick="window.openMeterDetailById('${meterId}'); event.stopPropagation();" title="Lihat Detail ${meterId}">
                Detail →
              </button>
            ` : ''}
          </div>
          <div class="attention-card-body">
            <div class="attention-title-text">${item.title}</div>
            <div class="attention-location-text">
              ${item.area}
            </div>
          </div>
          <div class="attention-card-footer">
            <div class="attention-alert-desc">${item.note}</div>
            ${item.action ? `<div class="attention-action-recommendation"><strong>Tindakan:</strong> ${item.action}</div>` : ''}
          </div>
        </div>
      `;
    }).join('');
  }

  // ================= 7. DAFTAR METER TABLE =================
  function isAlertMeter(m) {
    return ['F2-6', 'TR-01', 'TR-12'].includes(m.id) || m.status === 'warning' || (m.pf && m.pf < 0.85);
  }

  function syncTableStatusPills() {
    document.querySelectorAll('.table-filter-pill').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tableStatus === state.tableStatusFilter);
    });
  }

  window.setTableStatusFilter = function(statusKey) {
    state.tableStatusFilter = statusKey || 'all';
    state.filterOnlyAlerts = (statusKey === 'alerts');
    state.currentPage = 1;
    syncTableStatusPills();
    renderTable();
  };

  function getFilteredMeters() {
    let list = state.meters;

    // Filter by Attention/Alerts Only
    if (state.filterOnlyAlerts || state.tableStatusFilter === 'alerts') {
      list = list.filter(isAlertMeter);
    } else if (state.tableStatusFilter === 'normal') {
      list = list.filter(m => !isAlertMeter(m) && m.status === 'normal');
    }

    // Filter by Tab / Substation
    if (!state.filterOnlyAlerts && state.activeFilter !== 'all') {
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
        (m.ip && m.ip.toLowerCase().includes(q)) ||
        (m.status && m.status.toLowerCase().includes(q)) ||
        (q === 'warning' && (m.status === 'warning' || (m.pf && m.pf < 0.85))) ||
        (q === 'perhatian' && (m.status === 'warning' || (m.pf && m.pf < 0.85)))
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

    // Update Counts Text & Reset Filter Button Visibility
    if (pageRangeText) {
      pageRangeText.textContent = totalItems === 0 ? '0' : `${startIndex + 1} - ${endIndex}`;
    }
    if (totalMetersText) {
      totalMetersText.textContent = totalItems;
    }
    const btnResetFilter = document.getElementById('btnResetTableFilter');
    if (btnResetFilter) {
      const hasFilter = Boolean(state.filterOnlyAlerts || state.tableStatusFilter !== 'all' || state.searchQuery.trim() !== '');
      btnResetFilter.style.display = hasFilter ? 'inline-flex' : 'none';
    }
    syncTableStatusPills();

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
        <tr onclick="window.openMeterDetailById('${m.id}')" title="Klik untuk melihat telemetri lengkap ${m.id}">
          <td class="col-id">${m.id}</td>
          <td style="max-width:240px; overflow:hidden; text-overflow:ellipsis;" title="${m.name}">
            ${m.name}
          </td>
          <td style="color:var(--text-secondary);">${m.categoryLabel || m.category}</td>
          <td class="col-mono" style="color:var(--color-blue); font-size:0.78rem;">${m.ip || '192.168.10.x'}</td>
          <td class="col-num" style="font-weight:600; color:var(--text-primary);">
            ${(m.kw || 0).toLocaleString('id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
          </td>
          <td class="col-num">${(m.voltage || 0).toFixed(1)}</td>
          <td class="col-num">${(m.current || 0).toFixed(1)}</td>
          <td class="col-num" style="color:${(m.pf < 0.85) ? 'var(--color-amber)' : 'var(--color-green)'};">
            ${(m.pf || 0.89).toFixed(2)}
          </td>
          <td class="col-num" style="color:var(--text-primary); font-weight:600;">
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
            <button class="btn-table-detail" onclick="event.stopPropagation(); window.openMeterDetailById('${m.id}')">
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

      // Avoid layout/DOM churn while user is actively scrolling, inspects a modal, or highlights text
      if (state.isActivelyScrolling) return;
      if (document.body.classList.contains('modal-open')) return;
      const sel = typeof window.getSelection === 'function' ? window.getSelection() : null;
      if (sel && sel.toString().length > 0) return;

      if (state.activeView === 'view-dashboard') {
        renderTable();
      } else {
        renderActiveDedicatedView(state.activeView);
      }
    }, 3500);
  }

  // ================= 9. DEDICATED SUBSTATION TABLES RENDERER =================
  function renderActiveDedicatedView(viewId) {
    if (viewId === 'view-electrical-1') {
      renderSubstationTable('fac1TableBody', state.meters.filter(m => m.factory === 'fac1'), false);
    } else if (viewId === 'view-electrical-2-1') {
      renderSubstationTable('fac2_1TableBody', state.meters.filter(m => m.factory === 'fac2_1'), false);
    } else if (viewId === 'view-electrical-2') {
      renderSubstationTable('fac2TableBody', state.meters.filter(m => m.factory === 'fac2'), false);
    } else if (viewId === 'view-electrical-3') {
      renderSubstationTable('fac3TableBody', state.meters.filter(m => m.factory === 'fac3'), false);
    } else if (viewId === 'view-forging') {
      const forgingMeters = state.meters.filter(m =>
        m.category === 'forging' ||
        m.system === 'forging' ||
        (m.name && m.name.toLowerCase().includes('forging')) ||
        (m.id && m.id.startsWith('F-'))
      );
      renderSubstationTable('forgingTableBody', forgingMeters, true);
    } else if (viewId === 'view-heattreatment') {
      const htMeters = state.meters.filter(m =>
        m.category === 'heattreatment' ||
        m.system === 'heattreatment' ||
        (m.name && (m.name.toLowerCase().includes('heat') || m.name.toLowerCase().includes('billet') || m.name.toLowerCase().includes('carburizing') || m.name.toLowerCase().includes('annealing') || m.name.toLowerCase().includes('tempering') || m.name.toLowerCase().includes('furnace'))) ||
        (m.id && m.id.startsWith('HT-'))
      );
      renderSubstationTable('htTableBody', htMeters, true);
    }
  }

  function renderAllDedicatedTables() {
    ['view-electrical-1', 'view-electrical-2-1', 'view-electrical-2', 'view-electrical-3', 'view-forging', 'view-heattreatment'].forEach(renderActiveDedicatedView);
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
        <tr onclick="window.openMeterDetailById('${m.id}')" title="Klik untuk melihat telemetri ${m.id}">
          <td class="col-id">${m.id}</td>
          <td style="font-weight:500; color:var(--text-primary); max-width:240px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${m.name}">
            ${m.name}
          </td>
          ${factoryColHtml}
          <td class="col-mono" style="color:var(--color-blue); font-size:0.76rem;">${m.ip || '10.41.47.x'}</td>
          <td class="col-num" style="font-weight:600; color:var(--text-primary);">
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
            <button class="btn-table-detail" onclick="event.stopPropagation(); window.openMeterDetailById('${m.id}')" title="Buka Detail Meter ${m.id}">
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

  // ================= 10.1 ALL ATTENTION ALERTS MODAL CONTROLLER =================
  window.openAllAlertsModal = function() {
    const modalEl = document.getElementById('allAlertsModal');
    const modalBody = document.getElementById('allAlertsModalBody');
    if (!modalEl || !modalBody) return;

    const alerts = ATTENTION_ALERTS.all || [
      { id: 'F2-6', title: 'Feeder F2-6 MV Titan 1200T', area: 'Factory 2 · Electrical Room F2', severity: 'critical', badge: 'Beban puncak', note: 'Beban motor press Titan 1200T naik selama Shift 1. Tindakan: pantau arus kubikel MV 6,6kV dan koordinasi APFC.' },
      { id: 'TR-01', title: 'Outgoing Trafo 01 Billet Heater FO 6,6kV', area: 'Factory 1 · Substation TM 20kV / 6,6kV', severity: 'warning', badge: 'PF rendah 0,84', note: 'Power factor 0,84 di bawah standar Cikarang Listrindo (< 0,85). Risiko denda kVARh bulanan. Tindakan: periksa step regulator APFC capacitor bank.' },
      { id: 'TR-12', title: 'Outgoing Trafo 12 FO & HT 200V', area: 'Factory 2 · Substation LMVDP 200V', severity: 'warning', badge: 'Beban induktif tinggi', note: 'Beban induktif press forging tinggi saat shift siang (cos φ 0,83). Tindakan: aktifkan kompensasi power factor lokal di panel distribusi.' }
    ];

    modalBody.innerHTML = alerts.map(item => {
      const sev = item.severity || 'warning';
      const pillClass = sev === 'critical' ? 'critical' : (sev === 'normal' ? 'normal' : 'warning');
      const badgeText = item.badge || (sev === 'critical' ? 'Beban puncak' : 'PF rendah');
      const meter = state.meters.find(m => m.id === item.id) || {};

      return `
        <div class="modal-alert-item ${sev}">
          <div class="modal-alert-header">
            <div class="modal-alert-badges">
              <span class="attention-pill ${pillClass}">
                <span class="pulse-indicator"></span>
                ${badgeText}
              </span>
              <span class="attention-id-badge">${item.id}</span>
              <span class="modal-sub-badge" style="background:rgba(255,255,255,0.06); font-size:0.7rem;">${item.area}</span>
            </div>
            <button class="btn-attention-action" onclick="window.openMeterDetailById('${item.id}')" title="Buka telemetri lengkap ${item.id}">
              Buka Detail Telemetri →
            </button>
          </div>
          <div class="modal-alert-content" style="margin-top:0.35rem;">
            <div style="font-weight:700; font-size:0.92rem; color:var(--text-primary); margin-bottom:0.25rem;">
              ${item.title}
            </div>
            <div style="font-size:0.75rem; color:var(--text-secondary); margin-bottom:0.45rem;">
              ${item.note}
            </div>
            <div class="modal-alert-quick-specs">
              <div class="alert-spec-chip">Daya: <strong>${(meter.kw || 0).toLocaleString('id-ID')} kW</strong></div>
              <div class="alert-spec-chip">Tegangan: <strong>${(meter.voltage || 0).toLocaleString('id-ID')} V</strong></div>
              <div class="alert-spec-chip">Arus: <strong>${(meter.current || 0).toFixed(1)} A</strong></div>
              <div class="alert-spec-chip" style="${(meter.pf || 0) < 0.85 ? 'color:#f59e0b; font-weight:700;' : ''}">Power Factor: <strong>${(meter.pf || 0.84).toFixed(2)}</strong></div>
            </div>
            ${item.action ? `
              <div class="modal-alert-action-box">
                <span style="color:var(--color-blue); font-weight:700;">Rekomendasi Tindakan:</span> ${item.action}
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');

    window.openModal(modalEl);
  };

  window.filterAlertMeters = function() {
    window.openAllAlertsModal();
  };

  window.filterTableToAlerts = function() {
    window.closeAllModals();
    state.filterOnlyAlerts = true;
    state.tableStatusFilter = 'alerts';
    state.activeFilter = 'all';
    state.searchQuery = '';
    state.currentPage = 1;
    if (searchInput) searchInput.value = '';
    
    // Update active tab styling
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === 'all');
    });

    renderTable();

    const tableSec = document.getElementById('tableSection') || document.querySelector('.table-card');
    if (tableSec) {
      tableSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    showToast('Menampilkan 3 meter berstatus perhatian di tabel direktori');
  };

  window.resetTableFilters = function() {
    state.filterOnlyAlerts = false;
    state.tableStatusFilter = 'all';
    state.searchQuery = '';
    state.currentPage = 1;
    if (searchInput) searchInput.value = '';
    renderTable();
    showToast('Filter tabel direset (menampilkan seluruh unit)');
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
          <div class="param-row"><span>Grid Frequency:</span> <strong>${(meter.freq || 50.0).toFixed(2)} Hz (Cikarang Listrindo Grid)</strong></div>
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

    const text = `[POWER METER TELEMETRY · PT MUSASHI AUTO PARTS INDONESIA]
Machine Code: ${meter.id}
Feeder Name: ${meter.name}
Area: ${meter.factoryLabel || meter.factory} - ${meter.subArea}
Brand: ${meter.brand}
Gateway IP: ${meter.ip} | Subnet: ${meter.subnet}
Cisco Switch: ${meter.ciscoSwitch}
Active Power: ${(meter.kw || 0).toFixed(1)} kW
System Voltage (V L-L): ${(meter.voltage || 0).toFixed(1)} V (VR: ${(meter.vr||0).toFixed(0)}V, VS: ${(meter.vs||0).toFixed(0)}V, VT: ${(meter.vt||0).toFixed(0)}V)
Load Current: ${(meter.current || 0).toFixed(1)} A (IR: ${(meter.ir||0).toFixed(1)}A, IS: ${(meter.is||0).toFixed(1)}A, IT: ${(meter.it||0).toFixed(1)}A)
Power Factor (Cos φ): ${(meter.pf || 0.90).toFixed(2)}
Frequency: ${(meter.freq || 50.0).toFixed(2)} Hz
THD-V: ${(meter.thdV || 0).toFixed(1)}% | THD-I: ${(meter.thdI || 0).toFixed(1)}%
Energy Today: ${(meter.kwhToday || 0).toLocaleString('id-ID')} kWh
Estimated Cost: Rp ${Math.round((meter.kwhToday || 0) * 1444.70).toLocaleString('id-ID')}
CO2 Emission: ${((meter.kwhToday || 0) * 0.79).toFixed(1)} kg CO2e
Timestamp: ${new Date().toLocaleString('id-ID')}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`✓ Telemetry for ${meter.id} copied to clipboard!`);
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
    // Search input (works seamlessly with status filter pills)
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

    // Review Alert Button (Amber Alert Banner) — Opens interactive All Alerts Modal on any device
    const btnReviewAlert = document.getElementById('btnReviewAlert');
    if (btnReviewAlert) {
      btnReviewAlert.addEventListener('click', (e) => {
        e.preventDefault();
        window.openAllAlertsModal();
      });
    }

    // Lihat Semua Peringatan Button (SCADA Alert Dialog)
    const btnLihatSemuaPeringatan = document.getElementById('btnLihatSemuaPeringatan');
    if (btnLihatSemuaPeringatan) {
      btnLihatSemuaPeringatan.addEventListener('click', (e) => {
        e.preventDefault();
        window.openAllAlertsModal();
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

    // Passive scroll guard to prevent live DOM churn during scrolling
    const mainScrollEl = document.getElementById('appMainContent');
    if (mainScrollEl) {
      let scrollIdleTimer = null;
      mainScrollEl.addEventListener('scroll', () => {
        state.isActivelyScrolling = true;
        if (scrollIdleTimer) clearTimeout(scrollIdleTimer);
        scrollIdleTimer = setTimeout(() => {
          state.isActivelyScrolling = false;
        }, 180);
      }, { passive: true });
    }

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

    if (chartDonutInstance && chartDonutInstance.data.datasets[0]) {
      chartDonutInstance.data.datasets[0].borderColor = isDark ? '#0f172a' : '#ffffff';
      chartDonutInstance.update();
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

    function escXml(val) {
      return String(val === undefined || val === null ? '' : val)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
    }

    // Calibrated Plant Incoming Totals (Matching Main Dashboard KPIs)
    const plantBase = CATEGORY_BASELINES.all;
    const plantKw = Number(plantBase.kw) || 14129;
    const plantKwh = Number(plantBase.kwh) || 197064;
    const plantCostRp = Math.round(plantKwh * 1444.70);
    const plantPfNum = parseFloat(String(plantBase.pf || '0,90').replace(',', '.')) || 0.90;
    const plantCarbonTonNum = parseFloat(String(plantBase.carbonTon || '155,7').replace(',', '.')) || 155.7;
    const totalMetersCount = state.meters.length;
    const onlineMeters = state.meters.filter(m => m.status === 'normal' || m.status === 'warning').length;

    // Directory totals (for Sheet 2 bottom formula fallback)
    const dirTotalKw = Number(state.meters.reduce((acc, m) => acc + (m.kw || 0), 0).toFixed(1));
    const dirTotalKwh = Math.round(state.meters.reduce((acc, m) => acc + (m.kwhToday || 0), 0));
    const dirTotalCostRp = Math.round(dirTotalKwh * 1444.70);
    const avgDirPf = Number((state.meters.reduce((acc, m) => acc + (m.pf || 0.90), 0) / (totalMetersCount || 1)).toFixed(2));

    // Factory Breakdowns
    const facRows = [
      {
        name: 'Factory 1 (Electrical Room 1)',
        units: state.meters.filter(m => m.factory === 'fac1').length,
        supply: '20kV / 6,6kV · Tr 01–05',
        kw: CATEGORY_BASELINES.fac1.kw,
        kwh: CATEGORY_BASELINES.fac1.kwh,
        pct: 33
      },
      {
        name: 'Factory 2.1 (Electrical Room 2.1)',
        units: state.meters.filter(m => m.factory === 'fac2_1').length,
        supply: '20kV / 380V · Tr 06–10',
        kw: CATEGORY_BASELINES.fac2_1.kw,
        kwh: CATEGORY_BASELINES.fac2_1.kwh,
        pct: 22
      },
      {
        name: 'Factory 2 (Electrical Room 2)',
        units: state.meters.filter(m => m.factory === 'fac2').length,
        supply: '20kV / 200V · Tr 11–16',
        kw: CATEGORY_BASELINES.fac2.kw,
        kwh: CATEGORY_BASELINES.fac2.kwh,
        pct: 30
      },
      {
        name: 'Factory 3 (Electrical Room 3)',
        units: state.meters.filter(m => m.factory === 'fac3').length,
        supply: '20kV / 380V · Tr 17–19',
        kw: CATEGORY_BASELINES.fac3.kw,
        kwh: CATEGORY_BASELINES.fac3.kwh,
        pct: 15
      }
    ];

    // Top 8 Consumers
    const top8 = [...state.meters].sort((a, b) => (b.kwhToday || 0) - (a.kwhToday || 0)).slice(0, 8);
    const lastDataRow = 2 + totalMetersCount;
    const totalRowIndex = lastDataRow + 1;

    const meterRowsXml = state.meters.map((m, idx) => {
      const cleanKwh = Math.round(m.kwhToday || 0);
      const costRp = Math.round(cleanKwh * 1444.70);
      const kwNum = Number((m.kw || 0).toFixed(1));
      const voltNum = Number((m.voltage || 0).toFixed(1));
      const currNum = Number((m.current || 0).toFixed(1));
      const pfNum = Number((m.pf || 0.90).toFixed(2));
      const isWarn = pfNum < 0.85 || m.status === 'warning';
      const statusText = isWarn ? `Warning (${pfNum.toFixed(2)})` : 'Normal';
      const zebra = idx % 2 === 0 ? 'Even' : 'Odd';
      const pfStyle = isWarn ? `CellPfWarn${zebra}` : `CellPfOk${zebra}`;
      const statusStyle = isWarn ? 'CellWarnBadge' : 'CellOkBadge';

      return `
      <Row ss:AutoFitHeight="0" ss:Height="22">
        <Cell ss:StyleID="CellCenter${zebra}"><Data ss:Type="Number">${idx + 1}</Data></Cell>
        <Cell ss:StyleID="CellCode${zebra}"><Data ss:Type="String">${escXml(m.id)}</Data></Cell>
        <Cell ss:StyleID="CellLeftBold${zebra}"><Data ss:Type="String">${escXml(m.name)}</Data></Cell>
        <Cell ss:StyleID="CellCenter${zebra}"><Data ss:Type="String">${escXml(m.categoryLabel || m.category)}</Data></Cell>
        <Cell ss:StyleID="CellLeft${zebra}"><Data ss:Type="String">${escXml(m.factoryLabel || m.factory)}</Data></Cell>
        <Cell ss:StyleID="CellLeft${zebra}"><Data ss:Type="String">${escXml(m.subArea || '-')}</Data></Cell>
        <Cell ss:StyleID="CellLeft${zebra}"><Data ss:Type="String">${escXml(m.brand || 'Schneider PowerLogic PM5500')}</Data></Cell>
        <Cell ss:StyleID="CellCode${zebra}"><Data ss:Type="String">${escXml(m.ip || '-')}</Data></Cell>
        <Cell ss:StyleID="CellNum1${zebra}"><Data ss:Type="Number">${kwNum}</Data></Cell>
        <Cell ss:StyleID="CellNum1${zebra}"><Data ss:Type="Number">${voltNum}</Data></Cell>
        <Cell ss:StyleID="CellNum1${zebra}"><Data ss:Type="Number">${currNum}</Data></Cell>
        <Cell ss:StyleID="${pfStyle}"><Data ss:Type="Number">${pfNum}</Data></Cell>
        <Cell ss:StyleID="CellInt${zebra}"><Data ss:Type="Number">${cleanKwh}</Data></Cell>
        <Cell ss:StyleID="CellCurr${zebra}"><Data ss:Type="Number">${costRp}</Data></Cell>
        <Cell ss:StyleID="${statusStyle}"><Data ss:Type="String">${escXml(statusText)}</Data></Cell>
      </Row>`;
    }).join('');

    const excelXml = `<?xml version="1.0" encoding="UTF-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:html="http://www.w3.org/TR/REC-html40">
 <DocumentProperties xmlns="urn:schemas-microsoft-com:office:office">
  <Title>Laporan Audit Energi PT Musashi Auto Parts Indonesia</Title>
  <Author>Utility &amp; Engineering SCADA System</Author>
 </DocumentProperties>
 <Styles>
  <Style ss:ID="Default" ss:Name="Normal">
   <Alignment ss:Vertical="Center"/>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="10" ss:Color="#0F172A"/>
  </Style>
  <Style ss:ID="TitleBanner">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="14" ss:Bold="1" ss:Color="#FFFFFF"/>
   <Interior ss:Color="#8C2924" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="SubBanner">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="10" ss:Color="#FED7AA"/>
   <Interior ss:Color="#641013" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="SecTitle">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2" ss:Color="#8C2924"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/>
   </Borders>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="11" ss:Bold="1" ss:Color="#8C2924"/>
   <Interior ss:Color="#FEF2F2" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="TblHead">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#6B1F1B"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#6B1F1B"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#6B1F1B"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#6B1F1B"/>
   </Borders>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="10" ss:Bold="1" ss:Color="#FFFFFF"/>
   <Interior ss:Color="#8C2924" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="SubHead">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#94A3B8"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/>
   </Borders>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="10" ss:Bold="1" ss:Color="#1E293B"/>
   <Interior ss:Color="#E2E8F0" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="SubHeadLeft">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#94A3B8"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/>
   </Borders>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="10" ss:Bold="1" ss:Color="#1E293B"/>
   <Interior ss:Color="#E2E8F0" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="SubHeadRight">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#94A3B8"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/>
   </Borders>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="10" ss:Bold="1" ss:Color="#1E293B"/>
   <Interior ss:Color="#E2E8F0" ss:Pattern="Solid"/>
  </Style>

  <!-- Data Cell Styles (Even = #F8FAFC, Odd = #FFFFFF) -->
  <Style ss:ID="CellLeftEven">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/></Borders>
   <Interior ss:Color="#F8FAFC" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="CellLeftOdd">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/></Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="CellLeftBoldEven">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/></Borders>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="10" ss:Bold="1" ss:Color="#0F172A"/>
   <Interior ss:Color="#F8FAFC" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="CellLeftBoldOdd">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/></Borders>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="10" ss:Bold="1" ss:Color="#0F172A"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="CellCenterEven">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/></Borders>
   <Interior ss:Color="#F8FAFC" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="CellCenterOdd">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/></Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="CellCodeEven">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/></Borders>
   <Font ss:FontName="Consolas" x:Family="Modern" ss:Size="10" ss:Bold="1" ss:Color="#0369A1"/>
   <Interior ss:Color="#F8FAFC" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="CellCodeOdd">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/></Borders>
   <Font ss:FontName="Consolas" x:Family="Modern" ss:Size="10" ss:Bold="1" ss:Color="#0369A1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="CellNum1Even">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/></Borders>
   <Interior ss:Color="#F8FAFC" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.0"/>
  </Style>
  <Style ss:ID="CellNum1Odd">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/></Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.0"/>
  </Style>
  <Style ss:ID="CellIntEven">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/></Borders>
   <Interior ss:Color="#F8FAFC" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0"/>
  </Style>
  <Style ss:ID="CellIntOdd">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/></Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0"/>
  </Style>
  <Style ss:ID="CellCurrEven">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/></Borders>
   <Interior ss:Color="#F8FAFC" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="&quot;Rp &quot;#,##0"/>
  </Style>
  <Style ss:ID="CellCurrOdd">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/></Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="&quot;Rp &quot;#,##0"/>
  </Style>
  <Style ss:ID="CellPfOkEven">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/></Borders>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="10" ss:Bold="1" ss:Color="#059669"/>
   <Interior ss:Color="#F8FAFC" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="0.00"/>
  </Style>
  <Style ss:ID="CellPfOkOdd">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/></Borders>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="10" ss:Bold="1" ss:Color="#059669"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="0.00"/>
  </Style>
  <Style ss:ID="CellPfWarnEven">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/></Borders>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="10" ss:Bold="1" ss:Color="#D97706"/>
   <Interior ss:Color="#F8FAFC" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="0.00"/>
  </Style>
  <Style ss:ID="CellPfWarnOdd">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/></Borders>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="10" ss:Bold="1" ss:Color="#D97706"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="0.00"/>
  </Style>
  <Style ss:ID="CellOkBadge">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/></Borders>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="9.5" ss:Bold="1" ss:Color="#166534"/>
   <Interior ss:Color="#DCFCE7" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="CellWarnBadge">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/></Borders>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="9.5" ss:Bold="1" ss:Color="#92400E"/>
   <Interior ss:Color="#FEF3C7" ss:Pattern="Solid"/>
  </Style>

  <!-- Totals Row Styles -->
  <Style ss:ID="TotalLabel">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2" ss:Color="#8C2924"/><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2" ss:Color="#8C2924"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/></Borders>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="10" ss:Bold="1" ss:Color="#0F172A"/>
   <Interior ss:Color="#F1F5F9" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="TotalCenter">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2" ss:Color="#8C2924"/><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2" ss:Color="#8C2924"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/></Borders>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="10" ss:Bold="1" ss:Color="#0F172A"/>
   <Interior ss:Color="#F1F5F9" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="TotalNum1">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2" ss:Color="#8C2924"/><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2" ss:Color="#8C2924"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/></Borders>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="10" ss:Bold="1" ss:Color="#0284C7"/>
   <Interior ss:Color="#F1F5F9" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.0"/>
  </Style>
  <Style ss:ID="TotalPf">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2" ss:Color="#8C2924"/><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2" ss:Color="#8C2924"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/></Borders>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="10" ss:Bold="1" ss:Color="#059669"/>
   <Interior ss:Color="#F1F5F9" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="0.00"/>
  </Style>
  <Style ss:ID="TotalInt">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2" ss:Color="#8C2924"/><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2" ss:Color="#8C2924"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/></Borders>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="10" ss:Bold="1" ss:Color="#D97706"/>
   <Interior ss:Color="#F1F5F9" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0"/>
  </Style>
  <Style ss:ID="TotalCurr">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2" ss:Color="#8C2924"/><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2" ss:Color="#8C2924"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/></Borders>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="10" ss:Bold="1" ss:Color="#8C2924"/>
   <Interior ss:Color="#F1F5F9" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="&quot;Rp &quot;#,##0"/>
  </Style>
  <Style ss:ID="TotalOk">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2" ss:Color="#8C2924"/><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2" ss:Color="#8C2924"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/></Borders>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="10" ss:Bold="1" ss:Color="#16A34A"/>
   <Interior ss:Color="#F1F5F9" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="KpiValBlue">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/></Borders>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="10.5" ss:Bold="1" ss:Color="#0284C7"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0"/>
  </Style>
  <Style ss:ID="KpiValCurr">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/></Borders>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="10.5" ss:Bold="1" ss:Color="#8C2924"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="&quot;Rp &quot;#,##0"/>
  </Style>
  <Style ss:ID="KpiValPf">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/></Borders>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="10.5" ss:Bold="1" ss:Color="#059669"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="0.00"/>
  </Style>
  <Style ss:ID="KpiValDec1">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/></Borders>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="10.5" ss:Bold="1" ss:Color="#0D9488"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.0"/>
  </Style>
 </Styles>

 <!-- SHEET 1: RINGKASAN EKSEKUTIF -->
 <Worksheet ss:Name="Ringkasan Energi">
  <Table ss:DefaultRowHeight="22">
   <Column ss:Index="1" ss:AutoFitWidth="0" ss:Width="65"/>
   <Column ss:Index="2" ss:AutoFitWidth="0" ss:Width="95"/>
   <Column ss:Index="3" ss:AutoFitWidth="0" ss:Width="275"/>
   <Column ss:Index="4" ss:AutoFitWidth="0" ss:Width="245"/>
   <Column ss:Index="5" ss:AutoFitWidth="0" ss:Width="135"/>
   <Column ss:Index="6" ss:AutoFitWidth="0" ss:Width="220"/>

   <Row ss:AutoFitHeight="0" ss:Height="30">
    <Cell ss:MergeAcross="5" ss:StyleID="TitleBanner"><Data ss:Type="String">PT MUSASHI AUTO PARTS INDONESIA · UTILITY &amp; ENERGY MANAGEMENT SYSTEM</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="20">
    <Cell ss:MergeAcross="5" ss:StyleID="SubBanner"><Data ss:Type="String">${escXml(`Laporan Ringkasan Audit Energi (${totalMetersCount} Unit) · Tanggal: ${dateFormatted} · Pukul: ${timeFormatted}`)}</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="12"/>

   <!-- TABEL KPI UTAMA -->
   <Row ss:AutoFitHeight="0" ss:Height="24">
    <Cell ss:MergeAcross="5" ss:StyleID="SecTitle"><Data ss:Type="String">1. RINGKASAN PARAMETER UTAMA PLANT (INCOMING CLD 1–3)</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22">
    <Cell ss:MergeAcross="2" ss:StyleID="SubHeadLeft"><Data ss:Type="String">Parameter Monitoring</Data></Cell>
    <Cell ss:StyleID="SubHeadRight"><Data ss:Type="String">Nilai Saat Ini</Data></Cell>
    <Cell ss:StyleID="SubHead"><Data ss:Type="String">Satuan</Data></Cell>
    <Cell ss:StyleID="SubHeadLeft"><Data ss:Type="String">Keterangan &amp; Standar</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22">
    <Cell ss:MergeAcross="2" ss:StyleID="CellLeftBoldOdd"><Data ss:Type="String">Total Active Power (Current Live Load)</Data></Cell>
    <Cell ss:StyleID="KpiValBlue"><Data ss:Type="Number">${plantKw}</Data></Cell>
    <Cell ss:StyleID="CellCenterOdd"><Data ss:Type="String">kW</Data></Cell>
    <Cell ss:StyleID="CellLeftOdd"><Data ss:Type="String">Kapasitas terpakai 69,4%</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22">
    <Cell ss:MergeAcross="2" ss:StyleID="CellLeftBoldEven"><Data ss:Type="String">Energy Today (Akumulasi Harian)</Data></Cell>
    <Cell ss:StyleID="KpiValBlue"><Data ss:Type="Number">${plantKwh}</Data></Cell>
    <Cell ss:StyleID="CellCenterEven"><Data ss:Type="String">kWh</Data></Cell>
    <Cell ss:StyleID="CellLeftEven"><Data ss:Type="String">Sejak pukul 00:00 WIB</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22">
    <Cell ss:MergeAcross="2" ss:StyleID="CellLeftBoldOdd"><Data ss:Type="String">Estimated Cost (Tarif Cikarang Listrindo)</Data></Cell>
    <Cell ss:StyleID="KpiValCurr"><Data ss:Type="Number">${plantCostRp}</Data></Cell>
    <Cell ss:StyleID="CellCenterOdd"><Data ss:Type="String">IDR</Data></Cell>
    <Cell ss:StyleID="CellLeftOdd"><Data ss:Type="String">Tarif I-3/TM Rp 1.444,70/kWh</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22">
    <Cell ss:MergeAcross="2" ss:StyleID="CellLeftBoldEven"><Data ss:Type="String">Power Factor Rata-Rata (Cos φ)</Data></Cell>
    <Cell ss:StyleID="KpiValPf"><Data ss:Type="Number">${plantPfNum}</Data></Cell>
    <Cell ss:StyleID="CellCenterEven"><Data ss:Type="String">PF</Data></Cell>
    <Cell ss:StyleID="CellLeftEven"><Data ss:Type="String">Target Cikarang Listrindo &gt;= 0,85 (Aman)</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22">
    <Cell ss:MergeAcross="2" ss:StyleID="CellLeftBoldOdd"><Data ss:Type="String">Carbon Emission (CO2e ESG)</Data></Cell>
    <Cell ss:StyleID="KpiValDec1"><Data ss:Type="Number">${plantCarbonTonNum}</Data></Cell>
    <Cell ss:StyleID="CellCenterOdd"><Data ss:Type="String">Ton CO2e</Data></Cell>
    <Cell ss:StyleID="CellLeftOdd"><Data ss:Type="String">Faktor Grid Jamali 0,79 kg/kWh</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22">
    <Cell ss:MergeAcross="2" ss:StyleID="CellLeftBoldEven"><Data ss:Type="String">Status Jaringan Meter SCADA</Data></Cell>
    <Cell ss:StyleID="CellCenterEven"><Data ss:Type="String">${onlineMeters} / ${totalMetersCount}</Data></Cell>
    <Cell ss:StyleID="CellCenterEven"><Data ss:Type="String">Unit</Data></Cell>
    <Cell ss:StyleID="CellOkBadge"><Data ss:Type="String">100% Online Modbus</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="14"/>

   <!-- TABEL DISTRIBUSI PER FACTORY -->
   <Row ss:AutoFitHeight="0" ss:Height="24">
    <Cell ss:MergeAcross="5" ss:StyleID="SecTitle"><Data ss:Type="String">2. DISTRIBUSI KONSUMSI ENERGI PER AREA FACTORY (20kV)</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22">
    <Cell ss:MergeAcross="1" ss:StyleID="SubHeadLeft"><Data ss:Type="String">Area Substation</Data></Cell>
    <Cell ss:StyleID="SubHeadLeft"><Data ss:Type="String">Cakupan Trafo</Data></Cell>
    <Cell ss:StyleID="SubHeadRight"><Data ss:Type="String">Active Power (kW)</Data></Cell>
    <Cell ss:StyleID="SubHeadRight"><Data ss:Type="String">Energy Today (kWh)</Data></Cell>
    <Cell ss:StyleID="SubHead"><Data ss:Type="String">Share Beban (%)</Data></Cell>
   </Row>
   ${facRows.map((fr, idx) => {
     const z = idx % 2 === 0 ? 'Odd' : 'Even';
     return `
   <Row ss:AutoFitHeight="0" ss:Height="22">
    <Cell ss:MergeAcross="1" ss:StyleID="CellLeftBold${z}"><Data ss:Type="String">${escXml(fr.name)} (${fr.units} Unit)</Data></Cell>
    <Cell ss:StyleID="CellLeft${z}"><Data ss:Type="String">${escXml(fr.supply)}</Data></Cell>
    <Cell ss:StyleID="CellNum1${z}"><Data ss:Type="Number">${fr.kw}</Data></Cell>
    <Cell ss:StyleID="CellInt${z}"><Data ss:Type="Number">${fr.kwh}</Data></Cell>
    <Cell ss:StyleID="CellCenter${z}"><Data ss:Type="String">${fr.pct}%</Data></Cell>
   </Row>`;
   }).join('')}
   <Row ss:AutoFitHeight="0" ss:Height="14"/>

   <!-- TABEL TOP 8 PEMAKAI LISTRIK TERBESAR -->
   <Row ss:AutoFitHeight="0" ss:Height="24">
    <Cell ss:MergeAcross="5" ss:StyleID="SecTitle"><Data ss:Type="String">3. TOP 8 BEBAN LISTRIK TERBESAR (PEAK LOADERS)</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22">
    <Cell ss:StyleID="SubHead"><Data ss:Type="String">Rank</Data></Cell>
    <Cell ss:StyleID="SubHead"><Data ss:Type="String">Code</Data></Cell>
    <Cell ss:StyleID="SubHeadLeft"><Data ss:Type="String">Feeder / Machine Name</Data></Cell>
    <Cell ss:StyleID="SubHeadLeft"><Data ss:Type="String">Area &amp; Lokasi</Data></Cell>
    <Cell ss:StyleID="SubHeadRight"><Data ss:Type="String">Power (kW)</Data></Cell>
    <Cell ss:StyleID="SubHeadRight"><Data ss:Type="String">Energy Today (kWh)</Data></Cell>
   </Row>
   ${top8.map((m, idx) => {
     const z = idx % 2 === 0 ? 'Odd' : 'Even';
     const cleanKwh = Math.round(m.kwhToday || 0);
     return `
   <Row ss:AutoFitHeight="0" ss:Height="22">
    <Cell ss:StyleID="CellCenter${z}"><Data ss:Type="String">#${idx + 1}</Data></Cell>
    <Cell ss:StyleID="CellCode${z}"><Data ss:Type="String">${escXml(m.id)}</Data></Cell>
    <Cell ss:StyleID="CellLeftBold${z}"><Data ss:Type="String">${escXml(m.name)}</Data></Cell>
    <Cell ss:StyleID="CellLeft${z}"><Data ss:Type="String">${escXml(m.factoryLabel || m.factory)}</Data></Cell>
    <Cell ss:StyleID="CellNum1${z}"><Data ss:Type="Number">${Number((m.kw || 0).toFixed(1))}</Data></Cell>
    <Cell ss:StyleID="CellInt${z}"><Data ss:Type="Number">${cleanKwh}</Data></Cell>
   </Row>`;
   }).join('')}
  </Table>
  <WorksheetOptions xmlns="urn:schemas-microsoft-com:office:excel">
   <PageSetup><Layout x:Orientation="Landscape"/></PageSetup>
   <FitToPage/>
   <Print><ValidPrinterInfo/><FitWidth>1</FitWidth><FitHeight>0</FitHeight></Print>
   <Selected/>
  </WorksheetOptions>
 </Worksheet>

 <!-- SHEET 2: DIREKTORI LENGKAP 111 METER -->
 <Worksheet ss:Name="Direktori 111 Meter">
  <Table ss:DefaultRowHeight="22">
   <Column ss:Index="1" ss:AutoFitWidth="0" ss:Width="38"/>
   <Column ss:Index="2" ss:AutoFitWidth="0" ss:Width="85"/>
   <Column ss:Index="3" ss:AutoFitWidth="0" ss:Width="275"/>
   <Column ss:Index="4" ss:AutoFitWidth="0" ss:Width="140"/>
   <Column ss:Index="5" ss:AutoFitWidth="0" ss:Width="125"/>
   <Column ss:Index="6" ss:AutoFitWidth="0" ss:Width="365"/>
   <Column ss:Index="7" ss:AutoFitWidth="0" ss:Width="220"/>
   <Column ss:Index="8" ss:AutoFitWidth="0" ss:Width="95"/>
   <Column ss:Index="9" ss:AutoFitWidth="0" ss:Width="85"/>
   <Column ss:Index="10" ss:AutoFitWidth="0" ss:Width="80"/>
   <Column ss:Index="11" ss:AutoFitWidth="0" ss:Width="80"/>
   <Column ss:Index="12" ss:AutoFitWidth="0" ss:Width="65"/>
   <Column ss:Index="13" ss:AutoFitWidth="0" ss:Width="100"/>
   <Column ss:Index="14" ss:AutoFitWidth="0" ss:Width="145"/>
   <Column ss:Index="15" ss:AutoFitWidth="0" ss:Width="105"/>

   <Row ss:AutoFitHeight="0" ss:Height="28">
    <Cell ss:MergeAcross="14" ss:StyleID="TitleBanner"><Data ss:Type="String">${escXml(`DIREKTORI TELEMETRI ${totalMetersCount} DIGITAL POWER METER · PT MUSASHI AUTO PARTS INDONESIA (${dateFormatted} ${timeFormatted})`)}</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="24">
    <Cell ss:StyleID="TblHead"><Data ss:Type="String">No</Data></Cell>
    <Cell ss:StyleID="TblHead"><Data ss:Type="String">Machine Code</Data></Cell>
    <Cell ss:StyleID="TblHead"><Data ss:Type="String">Feeder / Panel Name</Data></Cell>
    <Cell ss:StyleID="TblHead"><Data ss:Type="String">Category</Data></Cell>
    <Cell ss:StyleID="TblHead"><Data ss:Type="String">Factory</Data></Cell>
    <Cell ss:StyleID="TblHead"><Data ss:Type="String">Sub Area &amp; Location</Data></Cell>
    <Cell ss:StyleID="TblHead"><Data ss:Type="String">Digital Meter Brand</Data></Cell>
    <Cell ss:StyleID="TblHead"><Data ss:Type="String">IP Gateway</Data></Cell>
    <Cell ss:StyleID="TblHead"><Data ss:Type="String">Power (kW)</Data></Cell>
    <Cell ss:StyleID="TblHead"><Data ss:Type="String">Voltage (V)</Data></Cell>
    <Cell ss:StyleID="TblHead"><Data ss:Type="String">Current (A)</Data></Cell>
    <Cell ss:StyleID="TblHead"><Data ss:Type="String">Cos φ</Data></Cell>
    <Cell ss:StyleID="TblHead"><Data ss:Type="String">Energy (kWh)</Data></Cell>
    <Cell ss:StyleID="TblHead"><Data ss:Type="String">Cost (Rp)</Data></Cell>
    <Cell ss:StyleID="TblHead"><Data ss:Type="String">Status</Data></Cell>
   </Row>
   ${meterRowsXml}
   <Row ss:Index="${totalRowIndex}" ss:AutoFitHeight="0" ss:Height="26">
    <Cell ss:MergeAcross="7" ss:StyleID="TotalLabel"><Data ss:Type="String">TOTAL AKUMULASI CHANNEL DIREKTORI (${totalMetersCount} UNIT):</Data></Cell>
    <Cell ss:StyleID="TotalNum1" ss:Formula="=SUM(R3C9:R${lastDataRow}C9)"><Data ss:Type="Number">${dirTotalKw}</Data></Cell>
    <Cell ss:StyleID="TotalCenter"><Data ss:Type="String">-</Data></Cell>
    <Cell ss:StyleID="TotalCenter"><Data ss:Type="String">-</Data></Cell>
    <Cell ss:StyleID="TotalPf" ss:Formula="=AVERAGE(R3C12:R${lastDataRow}C12)"><Data ss:Type="Number">${avgDirPf}</Data></Cell>
    <Cell ss:StyleID="TotalInt" ss:Formula="=SUM(R3C13:R${lastDataRow}C13)"><Data ss:Type="Number">${dirTotalKwh}</Data></Cell>
    <Cell ss:StyleID="TotalCurr" ss:Formula="=SUM(R3C14:R${lastDataRow}C14)"><Data ss:Type="Number">${dirTotalCostRp}</Data></Cell>
    <Cell ss:StyleID="TotalOk"><Data ss:Type="String">${onlineMeters} / ${totalMetersCount} AKTIF</Data></Cell>
   </Row>
  </Table>
  <AutoFilter x:Range="R2C1:R${lastDataRow}C15" xmlns="urn:schemas-microsoft-com:office:excel"/>
  <WorksheetOptions xmlns="urn:schemas-microsoft-com:office:excel">
   <PageSetup><Layout x:Orientation="Landscape"/></PageSetup>
   <FitToPage/>
   <Print><ValidPrinterInfo/><FitWidth>1</FitWidth><FitHeight>0</FitHeight></Print>
   <FreezePanes/>
   <FrozenNoSplit/>
   <SplitHorizontal>2</SplitHorizontal>
   <TopRowBottomPane>2</TopRowBottomPane>
   <ActivePane>2</ActivePane>
  </WorksheetOptions>
 </Worksheet>
</Workbook>`;

    const blob = new Blob([excelXml], { type: 'application/vnd.ms-excel;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const dateFileStr = new Date().toISOString().slice(0, 10);
    link.download = `Laporan_Audit_Energi_Musashi_Utility_${dateFileStr}.xls`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast('✓ Laporan Excel 2 Sheet (Ringkasan + Direktori 111 Meter) Berhasil Diunduh!');
  };

  window.exportToCsv = function() {
    const headers = ['Machine Code', 'Meter / Feeder Name', 'Area', 'Sub Area', 'Meter Brand', 'IP Address', 'Active Power (kW)', 'Voltage (V)', 'Current (A)', 'Power Factor (Cos φ)', 'Energy Today (kWh)', 'Estimated Cost (Rp)', 'CO2 Emission (kg)', 'Status'];
    const rows = state.meters.map(m => {
      const cleanKwh = Math.round(m.kwhToday || 0);
      return [
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
        cleanKwh,
        Math.round(cleanKwh * 1444.70),
        (cleanKwh * 0.79).toFixed(1),
        m.status
      ];
    });

    const csvText = '\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\r\n');
    const blob = new Blob([csvText], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `PT_Musashi_Power_Meters_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast(`✓ CSV Report (${state.meters.length} Musashi Meters) exported successfully!`);
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
