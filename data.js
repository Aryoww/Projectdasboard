// Data 137 Unit Power Meter Digital Mitsubishi - PT Musashi Auto Parts Indonesia
// Terbagi dalam 5 kategori area utama:
// 1. Forging (Factory 1, 2, 3) - 48 unit
// 2. Electrical Room (Trafo, Panel LMVDP, Cap Bank) - 32 unit
// 3. Compressor Room (Air Compressors, Dryers, Feeders) - 20 unit
// 4. Water Pump System (Cooling Tower, Chilled Water, WTP 4 Fac) - 25 unit
// 5. Lobby & Utility Office - 12 unit
// Total = 137 unit

const METER_DATA = [
  // --- ELECTRICAL ROOM: CUBICLE SM6 & FACTORY 1 TRANSFORMERS (Official Musashi SLD) ---
  {
    id: "TRF-11",
    name: "Transformer 1.000 kVA (No. 11) - Billet Heater 6.6kV (Forging 450T/500T/550T)",
    brand: "Schneider Electric PowerLogic PM5500",
    category: "electrical",
    categoryLabel: "Electrical Room",
    subArea: "Factory 1 · Substation TM 20kV / 6.6kV",
    ip: "10.41.47.111",
    subnet: "255.255.254.0",
    ciscoSwitch: "SW-FAC1-CORE01 (Port Gi1/0/1)",
    modbusId: 11,
    kw: 620.4,
    kvar: 210.2,
    kva: 655.1,
    voltage: 6600.0,
    vr: 3810.0, vs: 3815.0, vt: 3812.0,
    current: 57.3,
    ir: 57.1, is: 57.5, it: 57.3,
    pf: 0.95,
    freq: 50.01,
    thdV: 2.1,
    thdI: 4.8,
    kwhToday: 8250,
    status: "normal",
    statusNote: "Billet Induction Heater Aktif",
    ratedKva: 1000
  },
  {
    id: "TRF-12",
    name: "Transformer 2.000 kVA (No. 12) - Main Low Voltage Panel (210V Forging Lines)",
    brand: "Schneider Electric PowerLogic PM5500",
    category: "electrical",
    categoryLabel: "Electrical Room",
    subArea: "Factory 1 · Substation LMVDP 20kV / 210V",
    ip: "10.41.47.122", // EXACT IP FROM FIELD PHOTO!
    subnet: "255.255.254.0",
    ciscoSwitch: "SW-FAC1-CORE01 (Port Gi1/0/2 - UTP Direct)",
    modbusId: 12,
    kw: 1380.5,
    kvar: 490.2,
    kva: 1464.8,
    voltage: 210.0,
    vr: 121.2, vs: 121.5, vt: 121.3,
    current: 4028.0,
    ir: 4020.0, is: 4035.0, it: 4029.0,
    pf: 0.94,
    freq: 50.02,
    thdV: 1.9,
    thdI: 3.5,
    kwhToday: 18450,
    status: "normal",
    statusNote: "Beban 20+ Feeder Mesin Forging Fac 1 (IP Lapangan 10.41.47.122)",
    ratedKva: 2000
  },
  {
    id: "TRF-13",
    name: "Transformer 1.500 kVA (No. 13) - Sub-Distribution Panel (210V)",
    brand: "Schneider Electric PowerLogic PM5500",
    category: "electrical",
    categoryLabel: "Electrical Room",
    subArea: "Factory 1 · Substation Sub-Panel 210V",
    ip: "10.41.47.113",
    subnet: "255.255.254.0",
    ciscoSwitch: "SW-FAC1-CORE01 (Port Gi1/0/3)",
    modbusId: 13,
    kw: 980.2,
    kvar: 620.5,
    kva: 1160.1,
    voltage: 210.0,
    vr: 121.0, vs: 121.3, vt: 121.1,
    current: 3189.5,
    ir: 3180.0, is: 3195.0, it: 3193.5,
    pf: 0.84, // ALERT: Below 0.85
    freq: 49.98,
    thdV: 2.2,
    thdI: 5.1,
    kwhToday: 12840,
    status: "warning",
    statusNote: "PF 0.84 - Cek Kapasitor Bank Step 4",
    ratedKva: 1500
  },
  {
    id: "TRF-14",
    name: "Transformer 1.250 kVA (No. 14) - 400V Utility Panel (3P 4W 400V)",
    brand: "Schneider Electric PowerLogic PM5500",
    category: "electrical",
    categoryLabel: "Electrical Room",
    subArea: "Factory 1 · Substation Utility 400V/230V",
    ip: "10.41.47.114",
    subnet: "255.255.254.0",
    ciscoSwitch: "SW-FAC1-CORE01 (Port Gi1/0/4)",
    modbusId: 14,
    kw: 780.4,
    kvar: 260.0,
    kva: 822.5,
    voltage: 400.0,
    vr: 230.9, vs: 231.2, vt: 231.0,
    current: 1187.2,
    ir: 1180.0, is: 1192.0, it: 1189.6,
    pf: 0.95,
    freq: 50.00,
    thdV: 1.7,
    thdI: 3.2,
    kwhToday: 10570,
    status: "normal",
    statusNote: "Pompa & Kompresor 400V Normal",
    ratedKva: 1250
  },
  {
    id: "TRF-15",
    name: "Transformer 1.000 kVA (No. 15) - Billet Heater No. 1 1/2 (6.6 kV)",
    brand: "Schneider Electric PowerLogic PM5500",
    category: "electrical",
    categoryLabel: "Electrical Room",
    subArea: "Factory 1 · Substation Billet Heater 1",
    ip: "10.41.47.115",
    subnet: "255.255.254.0",
    ciscoSwitch: "SW-FAC1-CORE01 (Port Gi1/0/5)",
    modbusId: 15,
    kw: 590.1,
    kvar: 195.0,
    kva: 621.5,
    voltage: 6600.0,
    vr: 3810.0, vs: 3812.0, vt: 3811.0,
    current: 54.4,
    ir: 54.0, is: 55.0, it: 54.2,
    pf: 0.95,
    freq: 50.01,
    thdV: 1.8,
    thdI: 4.2,
    kwhToday: 7650,
    status: "normal",
    statusNote: "Pemanas Induksi Line 1 Normal",
    ratedKva: 1000
  },
  {
    id: "TRF-16",
    name: "Transformer 1.000 kVA (No. 16) - Billet Heater No. 2 2/2 (6.6 kV)",
    brand: "Schneider Electric PowerLogic PM5500",
    category: "electrical",
    categoryLabel: "Electrical Room",
    subArea: "Factory 1 · Substation Billet Heater 2",
    ip: "10.41.47.116",
    subnet: "255.255.254.0",
    ciscoSwitch: "SW-FAC1-CORE01 (Port Gi1/0/6)",
    modbusId: 16,
    kw: 610.3,
    kvar: 205.0,
    kva: 643.8,
    voltage: 6600.0,
    vr: 3810.0, vs: 3815.0, vt: 3812.0,
    current: 56.3,
    ir: 56.0, is: 56.8, it: 56.1,
    pf: 0.95,
    freq: 50.01,
    thdV: 1.9,
    thdI: 4.5,
    kwhToday: 7920,
    status: "normal",
    statusNote: "Pemanas Induksi Line 2 Normal",
    ratedKva: 1000
  },
  {
    id: "TRF-05",
    name: "Trafo #5 (1250 kVA - Pompa & Fac 4)",
    category: "electrical",
    categoryLabel: "Electrical Room",
    subArea: "Electrical Room · Trafo Fac 4",
    ip: "192.168.20.15",
    ciscoSwitch: "SW-ELEC-CORE01 (Port Gi1/0/5)",
    modbusId: 5,
    kw: 480.1,
    kvar: 160.2,
    kva: 506.1,
    voltage: 389.4,
    vr: 224.8, vs: 225.0, vt: 224.8,
    current: 715.0,
    ir: 710.0, is: 720.0, it: 715.0,
    pf: 0.95,
    freq: 50.01,
    thdV: 1.4,
    thdI: 2.6,
    kwhToday: 6240,
    status: "normal",
    statusNote: "Normal",
    ratedKva: 1250
  },
  {
    id: "TRF-06",
    name: "Trafo #6 (1000 kVA - Lobby & Penerangan)",
    category: "electrical",
    categoryLabel: "Electrical Room",
    subArea: "Electrical Room · Trafo Gedung",
    ip: "192.168.20.16",
    ciscoSwitch: "SW-ELEC-CORE01 (Port Gi1/0/6)",
    modbusId: 6,
    kw: 210.3,
    kvar: 75.0,
    kva: 223.3,
    voltage: 390.2,
    vr: 225.3, vs: 225.4, vt: 225.2,
    current: 311.5,
    ir: 308.0, is: 314.0, it: 312.5,
    pf: 0.94,
    freq: 50.02,
    thdV: 1.2,
    thdI: 2.1,
    kwhToday: 2730,
    status: "normal",
    statusNote: "Normal",
    ratedKva: 1000
  },
  {
    id: "TRF-07",
    name: "Trafo #7 (1600 kVA - Standby Emergency)",
    category: "electrical",
    categoryLabel: "Electrical Room",
    subArea: "Electrical Room · Trafo Cadangan",
    ip: "192.168.20.17",
    ciscoSwitch: "SW-ELEC-CORE01 (Port Gi1/0/7)",
    modbusId: 7,
    kw: 0.0,
    kvar: 0.0,
    kva: 0.0,
    voltage: 388.9,
    vr: 224.5, vs: 224.6, vt: 224.5,
    current: 0.0,
    ir: 0, is: 0, it: 0,
    pf: 1.00,
    freq: 50.00,
    thdV: 0.8,
    thdI: 0.0,
    kwhToday: 0,
    status: "normal",
    statusNote: "Standby / No Load",
    ratedKva: 1600
  },
  {
    id: "TRF-08",
    name: "Trafo #8 (Genset Synchronizing 2000 kVA)",
    category: "electrical",
    categoryLabel: "Electrical Room",
    subArea: "Electrical Room · Trafo Genset",
    ip: "192.168.20.18",
    ciscoSwitch: "SW-ELEC-CORE01 (Port Gi1/0/8)",
    modbusId: 8,
    kw: 0.0,
    kvar: 0.0,
    kva: 0.0,
    voltage: 389.0,
    vr: 224.6, vs: 224.6, vt: 224.6,
    current: 0.0,
    ir: 0, is: 0, it: 0,
    pf: 1.00,
    freq: 50.00,
    thdV: 0.9,
    thdI: 0.0,
    kwhToday: 0,
    status: "normal",
    statusNote: "Standby Genset",
    ratedKva: 2000
  },

  // --- ELECTRICAL ROOM: PANEL LMVDP (16 units) ---
  ...Array.from({ length: 16 }, (_, i) => {
    const num = i + 1;
    const padNum = num < 10 ? `0${num}` : `${num}`;
    const kwVal = +(150 + Math.sin(num) * 60 + (i % 3) * 40).toFixed(1);
    const pfVal = num === 11 ? 0.92 : num === 10 ? 0.93 : +(0.88 + (num % 8) * 0.01).toFixed(2);
    const voltVal = +(385.0 + (num % 5) * 1.2).toFixed(1);
    const currVal = +((kwVal * 1000) / (Math.sqrt(3) * voltVal * pfVal)).toFixed(1);
    return {
      id: `LMV-${padNum}`,
      name: `Panel LMVDP #${padNum} (${num <= 5 ? 'Main Feeder' : num <= 10 ? 'Sub Feeder Forging' : 'Utility Feeder'})`,
      category: "electrical",
      categoryLabel: "Electrical Room",
      subArea: "Electrical Room · Panel LMVDP",
      ip: `192.168.20.${100 + num}`,
      ciscoSwitch: `SW-ELEC-DIST01 (Port Fa0/${num})`,
      modbusId: 10 + num,
      kw: kwVal,
      kvar: +(kwVal * Math.tan(Math.acos(pfVal))).toFixed(1),
      kva: +(kwVal / pfVal).toFixed(1),
      voltage: voltVal,
      vr: +(voltVal / Math.sqrt(3)).toFixed(1),
      vs: +(voltVal / Math.sqrt(3) + 0.3).toFixed(1),
      vt: +(voltVal / Math.sqrt(3) - 0.2).toFixed(1),
      current: currVal,
      ir: +(currVal * 0.99).toFixed(1),
      is: +(currVal * 1.01).toFixed(1),
      it: +(currVal * 1.00).toFixed(1),
      pf: pfVal,
      freq: 50.01,
      thdV: 1.6,
      thdI: 3.1,
      kwhToday: Math.round(kwVal * 17.5),
      status: "normal",
      statusNote: "Normal",
      ratedKva: 800
    };
  }),

  // --- ELECTRICAL ROOM: CAPACITOR BANKS (8 units) ---
  ...Array.from({ length: 8 }, (_, i) => {
    const num = i + 1;
    const isProblem = num === 4; // Link with TRF-02 issue
    return {
      id: `CAP-0${num}`,
      name: `Capacitor Bank Panel #${num} (${num <= 3 ? 'Fac 1' : num <= 6 ? 'Fac 2' : 'Fac 3'} - 600 kVAR)`,
      category: "electrical",
      categoryLabel: "Electrical Room",
      subArea: "Electrical Room · Kapasitor Bank",
      ip: `192.168.20.${130 + num}`,
      ciscoSwitch: `SW-ELEC-DIST02 (Port Fa0/${num})`,
      modbusId: 30 + num,
      kw: isProblem ? 12.4 : 4.2,
      kvar: isProblem ? 220.0 : 480.0, // Reduced compensation
      kva: isProblem ? 220.5 : 480.1,
      voltage: 387.5,
      vr: 223.7, vs: 223.9, vt: 223.7,
      current: isProblem ? 328.0 : 715.0,
      ir: 325.0, is: 330.0, it: 329.0,
      pf: 0.05, // purely reactive
      freq: 50.00,
      thdV: 2.2,
      thdI: 4.5,
      kwhToday: 68,
      status: isProblem ? "warning" : "normal",
      statusNote: isProblem ? "Step 3 & 4 Kontaktor Trip - Kapasitas Drop" : "All 6 Steps Auto OK",
      ratedKva: 600
    };
  }),

  // --- FORGING MACHINES (48 units) across 3 Factories ---
  // Factory 1: 16 Mesin (Hot Forging Press 2500T, 1600T, Induction Heaters, Trimming, Shotblast)
  ...Array.from({ length: 16 }, (_, i) => {
    const num = i + 1;
    const padNum = num < 10 ? `0${num}` : `${num}`;
    const types = [
      "Hot Forging Press 2500T", "Induction Billet Heater #1", "Trimming Press 400T", "Shot Blast Machine #1",
      "Hot Forging Press 1600T", "Induction Billet Heater #2", "Trimming Press 300T", "Shot Blast Machine #2",
      "Crank Press 1000T", "Induction Heater #3", "Trimming Press 200T", "Robotic Transfer Line #1",
      "Forging Press 2000T", "Induction Heater #4", "Automatic Shear Machine", "Billet Feeder Conveyor"
    ];
    const kwVal = +(45.0 + (num % 5) * 35.0 + (num % 2 === 0 ? 55.0 : 0)).toFixed(1);
    const voltVal = +(386.0 + (num % 4) * 0.8).toFixed(1);
    const pfVal = +(0.88 + (num % 7) * 0.01).toFixed(2);
    const currVal = +((kwVal * 1000) / (Math.sqrt(3) * voltVal * pfVal)).toFixed(1);
    return {
      id: `FRG1-${padNum}`,
      name: `Mesin Forging F1-${padNum} (${types[i]})`,
      category: "forging",
      categoryLabel: "Forging",
      subArea: "Forging · Factory 1",
      ip: `192.168.10.${10 + num}`,
      ciscoSwitch: `SW-FAC1-IND01 (Port Fa0/${num})`,
      modbusId: 40 + num,
      kw: kwVal,
      kvar: +(kwVal * Math.tan(Math.acos(pfVal))).toFixed(1),
      kva: +(kwVal / pfVal).toFixed(1),
      voltage: voltVal,
      vr: +(voltVal / Math.sqrt(3)).toFixed(1),
      vs: +(voltVal / Math.sqrt(3) + 0.2).toFixed(1),
      vt: +(voltVal / Math.sqrt(3) - 0.1).toFixed(1),
      current: currVal,
      ir: +(currVal * 0.98).toFixed(1),
      is: +(currVal * 1.02).toFixed(1),
      it: +(currVal * 1.00).toFixed(1),
      pf: pfVal,
      freq: 50.01,
      thdV: 2.1,
      thdI: 5.2,
      kwhToday: Math.round(kwVal * 16.2),
      status: "normal",
      statusNote: "Produksi Aktif Shift 1",
      ratedKva: 250
    };
  }),

  // Factory 2: 18 Mesin (Forging 3000T, Warm Forging, Annealing, etc.)
  ...Array.from({ length: 18 }, (_, i) => {
    const num = i + 1;
    const padNum = num < 10 ? `0${num}` : `${num}`;
    const isUnbalance = num === 7;
    const kwVal = +(60.0 + (num % 6) * 30.0 + (num === 1 ? 95.0 : 0)).toFixed(1);
    const voltVal = +(387.0 + (num % 3) * 0.9).toFixed(1);
    const pfVal = +(0.87 + (num % 6) * 0.015).toFixed(2);
    const currVal = +((kwVal * 1000) / (Math.sqrt(3) * voltVal * pfVal)).toFixed(1);
    return {
      id: `FRG2-${padNum}`,
      name: `Mesin Forging F2-${padNum} (${num === 1 ? 'Heavy Press 3000T' : num === 7 ? 'Warm Forging Press 1600T' : 'Precision Forging Unit'})`,
      category: "forging",
      categoryLabel: "Forging",
      subArea: "Forging · Factory 2",
      ip: `192.168.10.${30 + num}`,
      ciscoSwitch: `SW-FAC2-IND01 (Port Fa0/${num})`,
      modbusId: 60 + num,
      kw: kwVal,
      kvar: +(kwVal * Math.tan(Math.acos(pfVal))).toFixed(1),
      kva: +(kwVal / pfVal).toFixed(1),
      voltage: voltVal,
      vr: +(voltVal / Math.sqrt(3)).toFixed(1),
      vs: +(voltVal / Math.sqrt(3) + (isUnbalance ? 4.5 : 0.2)).toFixed(1),
      vt: +(voltVal / Math.sqrt(3) - (isUnbalance ? 4.2 : 0.2)).toFixed(1),
      current: currVal,
      ir: isUnbalance ? +(currVal * 1.15).toFixed(1) : +(currVal * 0.99).toFixed(1),
      is: isUnbalance ? +(currVal * 0.88).toFixed(1) : +(currVal * 1.01).toFixed(1),
      it: +(currVal * 1.00).toFixed(1),
      pf: pfVal,
      freq: 49.99,
      thdV: 2.3,
      thdI: isUnbalance ? 7.8 : 4.9,
      kwhToday: Math.round(kwVal * 16.5),
      status: isUnbalance ? "warning" : "normal",
      statusNote: isUnbalance ? "Ketidakseimbangan Arus Antar Fasa (Unbalance > 6%)" : "Produksi Aktif",
      ratedKva: 300
    };
  }),

  // Factory 3: 14 Mesin (Cold Forging, Sizing, Finishing)
  ...Array.from({ length: 14 }, (_, i) => {
    const num = i + 1;
    const padNum = num < 10 ? `0${num}` : `${num}`;
    const kwVal = +(38.0 + (num % 5) * 22.0).toFixed(1);
    const voltVal = +(386.5 + (num % 3) * 0.7).toFixed(1);
    const pfVal = +(0.89 + (num % 5) * 0.01).toFixed(2);
    const currVal = +((kwVal * 1000) / (Math.sqrt(3) * voltVal * pfVal)).toFixed(1);
    return {
      id: `FRG3-${padNum}`,
      name: `Mesin Forging F3-${padNum} (${num <= 4 ? 'Cold Forging 1200T' : num <= 8 ? 'Finishing Sizing Press' : 'Punch & Die Stamping'})`,
      category: "forging",
      categoryLabel: "Forging",
      subArea: "Forging · Factory 3",
      ip: `192.168.10.${60 + num}`,
      ciscoSwitch: `SW-FAC3-IND01 (Port Fa0/${num})`,
      modbusId: 80 + num,
      kw: kwVal,
      kvar: +(kwVal * Math.tan(Math.acos(pfVal))).toFixed(1),
      kva: +(kwVal / pfVal).toFixed(1),
      voltage: voltVal,
      vr: +(voltVal / Math.sqrt(3)).toFixed(1),
      vs: +(voltVal / Math.sqrt(3) + 0.1).toFixed(1),
      vt: +(voltVal / Math.sqrt(3) - 0.1).toFixed(1),
      current: currVal,
      ir: +(currVal * 0.99).toFixed(1),
      is: +(currVal * 1.01).toFixed(1),
      it: +(currVal * 1.00).toFixed(1),
      pf: pfVal,
      freq: 50.00,
      thdV: 1.7,
      thdI: 3.8,
      kwhToday: Math.round(kwVal * 15.8),
      status: "normal",
      statusNote: "Normal",
      ratedKva: 200
    };
  }),

  // --- COMPRESSOR ROOM (20 units) ---
  // Screw Compressors (6), Air Dryers (6), Sub-distribution & Flow Feeders (8)
  ...Array.from({ length: 6 }, (_, i) => {
    const num = i + 1;
    const models = [
      "Atlas Copco GA 160 VSD (Inverter)", "Atlas Copco GA 160 Fixed Speed",
      "Hitachi DSP-132kW Oil-Free", "Kobelco AG-110kW",
      "Ingersoll Rand R90kW", "CompAir 75kW Standby"
    ];
    const kwVal = num === 6 ? 0.0 : +(85.0 + (6 - num) * 16.0).toFixed(1);
    const voltVal = 388.2;
    const pfVal = num === 6 ? 1.0 : 0.93;
    const currVal = num === 6 ? 0.0 : +((kwVal * 1000) / (Math.sqrt(3) * voltVal * pfVal)).toFixed(1);
    return {
      id: `CMP-0${num}`,
      name: `Air Compressor #${num} (${models[i]})`,
      category: "compressor",
      categoryLabel: "Kompresor",
      subArea: "Compressor Room · Unit Utama",
      ip: `192.168.30.${10 + num}`,
      ciscoSwitch: `SW-UTL-COMP01 (Port Fa0/${num})`,
      modbusId: 100 + num,
      kw: kwVal,
      kvar: +(kwVal * Math.tan(Math.acos(pfVal))).toFixed(1),
      kva: +(kwVal / pfVal).toFixed(1),
      voltage: voltVal,
      vr: 224.1, vs: 224.2, vt: 224.1,
      current: currVal,
      ir: +(currVal * 0.99).toFixed(1),
      is: +(currVal * 1.01).toFixed(1),
      it: +(currVal * 1.00).toFixed(1),
      pf: pfVal,
      freq: 50.01,
      thdV: 1.8,
      thdI: 4.2,
      kwhToday: Math.round(kwVal * 18.0),
      status: "normal",
      statusNote: num === 6 ? "Standby Auto-Start" : "Pressure 6.8 Bar Stabil",
      ratedKva: 200
    };
  }),
  ...Array.from({ length: 6 }, (_, i) => {
    const num = i + 1;
    const kwVal = +(14.5 + (num % 3) * 3.5).toFixed(1);
    const pfVal = 0.89;
    const currVal = +((kwVal * 1000) / (Math.sqrt(3) * 387.0 * pfVal)).toFixed(1);
    return {
      id: `DRY-0${num}`,
      name: `Refrigerated Air Dryer #${num} (Dew Point 3°C)`,
      category: "compressor",
      categoryLabel: "Kompresor",
      subArea: "Compressor Room · Air Dryer",
      ip: `192.168.30.${20 + num}`,
      ciscoSwitch: `SW-UTL-COMP01 (Port Fa0/${10 + num})`,
      modbusId: 110 + num,
      kw: kwVal,
      kvar: +(kwVal * Math.tan(Math.acos(pfVal))).toFixed(1),
      kva: +(kwVal / pfVal).toFixed(1),
      voltage: 387.0,
      vr: 223.4, vs: 223.6, vt: 223.4,
      current: currVal,
      ir: currVal, is: currVal, it: currVal,
      pf: pfVal,
      freq: 50.00,
      thdV: 1.4,
      thdI: 2.8,
      kwhToday: Math.round(kwVal * 18.5),
      status: "normal",
      statusNote: "Normal Running",
      ratedKva: 25
    };
  }),
  ...Array.from({ length: 8 }, (_, i) => {
    const num = i + 1;
    const kwVal = +(22.0 + num * 4.5).toFixed(1);
    const pfVal = 0.91;
    const currVal = +((kwVal * 1000) / (Math.sqrt(3) * 387.5 * pfVal)).toFixed(1);
    return {
      id: `CMP-FD-${num < 10 ? '0' + num : num}`,
      name: `Feeder Distribusi Angin Kompresor #${num} (Ring Line Fac ${((num - 1) % 4) + 1})`,
      category: "compressor",
      categoryLabel: "Kompresor",
      subArea: `Compressor Room · Feeder Fac ${((num - 1) % 4) + 1}`,
      ip: `192.168.30.${30 + num}`,
      ciscoSwitch: `SW-UTL-COMP01 (Port Fa0/${18 + num})`,
      modbusId: 120 + num,
      kw: kwVal,
      kvar: +(kwVal * Math.tan(Math.acos(pfVal))).toFixed(1),
      kva: +(kwVal / pfVal).toFixed(1),
      voltage: 387.5,
      vr: 223.7, vs: 223.8, vt: 223.6,
      current: currVal,
      ir: currVal, is: currVal, it: currVal,
      pf: pfVal,
      freq: 50.00,
      thdV: 1.3,
      thdI: 2.5,
      kwhToday: Math.round(kwVal * 17.0),
      status: "normal",
      statusNote: "Normal",
      ratedKva: 50
    };
  }),

  // --- WATER PUMP SYSTEM (25 units) covering 4 Factories + WTP ---
  ...Array.from({ length: 8 }, (_, i) => {
    const num = i + 1;
    const facNum = ((num - 1) % 4) + 1;
    const isOffline = num === 4; // Simulated offline switch port
    const kwVal = isOffline ? 0.0 : +(28.5 + (num % 3) * 8.0).toFixed(1);
    const pfVal = isOffline ? 0.0 : 0.88;
    const currVal = isOffline ? 0.0 : +((kwVal * 1000) / (Math.sqrt(3) * 386.0 * pfVal)).toFixed(1);
    return {
      id: `PMP-CW-0${num}`,
      name: `Pompa Cooling Water CW-0${num} (Factory ${facNum})`,
      category: "waterpump",
      categoryLabel: "Pompa Air",
      subArea: `Pompa Air · Cooling Tower Fac ${facNum}`,
      ip: `192.168.40.${10 + num}`,
      ciscoSwitch: `SW-UTL-PUMP01 (Port Fa0/${num})`,
      modbusId: 140 + num,
      kw: kwVal,
      kvar: isOffline ? 0 : +(kwVal * Math.tan(Math.acos(pfVal))).toFixed(1),
      kva: isOffline ? 0 : +(kwVal / pfVal).toFixed(1),
      voltage: isOffline ? 0 : 386.0,
      vr: isOffline ? 0 : 222.8, vs: isOffline ? 0 : 223.0, vt: isOffline ? 0 : 222.9,
      current: currVal,
      ir: currVal, is: currVal, it: currVal,
      pf: pfVal,
      freq: isOffline ? 0 : 50.01,
      thdV: isOffline ? 0 : 1.5,
      thdI: isOffline ? 0 : 3.0,
      kwhToday: isOffline ? 120 : Math.round(kwVal * 16.0),
      status: isOffline ? "offline" : "normal",
      statusNote: isOffline ? "Koneksi Terputus - Periksa Kabel LAN / Cisco Port Fa0/4" : "Pompa Beroperasi Normal",
      ratedKva: 55
    };
  }),
  ...Array.from({ length: 8 }, (_, i) => {
    const num = i + 1;
    const facNum = ((num - 1) % 4) + 1;
    const kwVal = +(22.4 + (num % 2) * 6.5).toFixed(1);
    const pfVal = 0.89;
    const currVal = +((kwVal * 1000) / (Math.sqrt(3) * 386.5 * pfVal)).toFixed(1);
    return {
      id: `PMP-CH-0${num}`,
      name: `Pompa Chilled/Process Water PW-0${num} (Factory ${facNum})`,
      category: "waterpump",
      categoryLabel: "Pompa Air",
      subArea: `Pompa Air · Chiller Loop Fac ${facNum}`,
      ip: `192.168.40.${20 + num}`,
      ciscoSwitch: `SW-UTL-PUMP01 (Port Fa0/${10 + num})`,
      modbusId: 150 + num,
      kw: kwVal,
      kvar: +(kwVal * Math.tan(Math.acos(pfVal))).toFixed(1),
      kva: +(kwVal / pfVal).toFixed(1),
      voltage: 386.5,
      vr: 223.1, vs: 223.3, vt: 223.0,
      current: currVal,
      ir: currVal, is: currVal, it: currVal,
      pf: pfVal,
      freq: 50.00,
      thdV: 1.4,
      thdI: 2.9,
      kwhToday: Math.round(kwVal * 16.5),
      status: "normal",
      statusNote: "Normal Running",
      ratedKva: 45
    };
  }),
  ...Array.from({ length: 5 }, (_, i) => {
    const num = i + 1;
    const kwVal = +(18.0 + num * 4.0).toFixed(1);
    const pfVal = 0.87;
    const currVal = +((kwVal * 1000) / (Math.sqrt(3) * 387.0 * pfVal)).toFixed(1);
    return {
      id: `WTP-0${num}`,
      name: `Water Treatment Plant & Deep Well #${num}`,
      category: "waterpump",
      categoryLabel: "Pompa Air",
      subArea: "Pompa Air · Instalasi WTP & Deep Well",
      ip: `192.168.40.${30 + num}`,
      ciscoSwitch: `SW-UTL-PUMP02 (Port Fa0/${num})`,
      modbusId: 160 + num,
      kw: kwVal,
      kvar: +(kwVal * Math.tan(Math.acos(pfVal))).toFixed(1),
      kva: +(kwVal / pfVal).toFixed(1),
      voltage: 387.0,
      vr: 223.4, vs: 223.6, vt: 223.3,
      current: currVal,
      ir: currVal, is: currVal, it: currVal,
      pf: pfVal,
      freq: 49.99,
      thdV: 1.6,
      thdI: 3.4,
      kwhToday: Math.round(kwVal * 15.0),
      status: "normal",
      statusNote: "Otomatis Level Bak Normal",
      ratedKva: 37
    };
  }),
  ...Array.from({ length: 4 }, (_, i) => {
    const num = i + 1;
    const kwVal = num === 4 ? 0.0 : +(15.0 + num * 3.5).toFixed(1);
    const pfVal = 0.90;
    const currVal = num === 4 ? 0.0 : +((kwVal * 1000) / (Math.sqrt(3) * 387.0 * pfVal)).toFixed(1);
    return {
      id: `PMP-BST-0${num}`,
      name: `Pompa Booster Hydrant & Domestik #${num}`,
      category: "waterpump",
      categoryLabel: "Pompa Air",
      subArea: "Pompa Air · Booster & Hydrant",
      ip: `192.168.40.${40 + num}`,
      ciscoSwitch: `SW-UTL-PUMP02 (Port Fa0/${10 + num})`,
      modbusId: 170 + num,
      kw: kwVal,
      kvar: +(kwVal * Math.tan(Math.acos(pfVal))).toFixed(1),
      kva: +(kwVal / pfVal).toFixed(1),
      voltage: 387.0,
      vr: 223.4, vs: 223.5, vt: 223.4,
      current: currVal,
      ir: currVal, is: currVal, it: currVal,
      pf: pfVal,
      freq: 50.00,
      thdV: 1.2,
      thdI: 2.2,
      kwhToday: Math.round(kwVal * 12.0),
      status: "normal",
      statusNote: num === 4 ? "Jockey Fire Pump Standby" : "Pressure Line 4.2 Bar",
      ratedKva: 30
    };
  }),

  // --- LOBBY & OFFICE BUILDING (12 units) ---
  ...Array.from({ length: 12 }, (_, i) => {
    const num = i + 1;
    const padNum = num < 10 ? `0${num}` : `${num}`;
    const names = [
      "Main Panel Gedung Lobby & Office",
      "HVAC Chiller Central Kantor Utama",
      "Server Room IT & Network Rack UPS",
      "Lobby Area Lighting & Display Panel",
      "Lantai 1 Kantor Administrasi & HR",
      "Lantai 2 Kantor Engineering & QA",
      "Kantin Karyawan & Dapur Kitchen",
      "Klinik Medis & Musholla",
      "Training Center & Auditorium",
      "Outdoor Parkir & Penerangan Jalan Pabrik",
      "Security Gate 1 & Weighbridge Panel",
      "Laboratorium R&D & Ruang Metrologi"
    ];
    const kwVal = +(12.0 + (num % 4) * 8.5 + (num === 2 ? 35.0 : 0)).toFixed(1);
    const voltVal = +(388.0 + (num % 2) * 1.0).toFixed(1);
    const pfVal = +(0.91 + (num % 4) * 0.02).toFixed(2);
    const currVal = +((kwVal * 1000) / (Math.sqrt(3) * voltVal * pfVal)).toFixed(1);
    return {
      id: `LOB-${padNum}`,
      name: `${names[i]}`,
      category: "lobby",
      categoryLabel: "Lobby & Kantor",
      subArea: "Lobby & Kantor · Gedung Utama",
      ip: `192.168.50.${10 + num}`,
      ciscoSwitch: `SW-OFFICE-CORE01 (Port Fa0/${num})`,
      modbusId: 180 + num,
      kw: kwVal,
      kvar: +(kwVal * Math.tan(Math.acos(pfVal))).toFixed(1),
      kva: +(kwVal / pfVal).toFixed(1),
      voltage: voltVal,
      vr: +(voltVal / Math.sqrt(3)).toFixed(1),
      vs: +(voltVal / Math.sqrt(3) + 0.1).toFixed(1),
      vt: +(voltVal / Math.sqrt(3) - 0.1).toFixed(1),
      current: currVal,
      ir: currVal, is: currVal, it: currVal,
      pf: pfVal,
      freq: 50.00,
      thdV: 1.1,
      thdI: 2.0,
      kwhToday: Math.round(kwVal * 14.5),
      status: "normal",
      statusNote: "Normal",
      ratedKva: 75
    };
  })
];

console.log(`Total Mitsubishi Power Meters loaded: ${METER_DATA.length}`);
