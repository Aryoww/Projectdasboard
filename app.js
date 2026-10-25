// ========================================================
// PT MUSASHI AUTO PARTS INDONESIA - ENERGY MANAGEMENT SYSTEM
// Minimalist Dark Theme Dashboard Controller
// ========================================================

document.addEventListener('DOMContentLoaded', () => {

  // Baseline Calibration to match exact Musashi factory profile
  const CATEGORY_BASELINES = {
    all: {
      kw: 10116,
      kwh: 160605,
      cost: 'Rp 232 jt',
      pf: '0,89',
      online: '135 / 137',
      alertCount: '38 meter perlu dicek',
      carbonTon: '126,9',
      curve24h: [6070, 5540, 7620, 11120, 9580, 11280, 8240, 6420],
      curveMax: 12000,
      curveStep: 2000
    },
    forging: {
      kw: 5703,
      kwh: 90603,
      cost: 'Rp 131 jt',
      pf: '0,89',
      online: '88 / 90',
      alertCount: '28 meter perlu dicek',
      carbonTon: '71,6',
      curve24h: [3420, 3120, 4290, 6260, 5400, 6380, 4650, 3620],
      curveMax: 7000,
      curveStep: 1000
    },
    electrical: {
      kw: 3198,
      kwh: 50825,
      cost: 'Rp 73 jt',
      pf: '0,90',
      online: '18 / 18',
      alertCount: '3 meter perlu dicek',
      carbonTon: '40,2',
      curve24h: [1920, 1750, 2410, 3510, 3030, 3580, 2610, 2030],
      curveMax: 4000,
      curveStep: 500
    },
    compressor: {
      kw: 894,
      kwh: 14256,
      cost: 'Rp 21 jt',
      pf: '0,89',
      online: '10 / 10',
      alertCount: '4 meter perlu dicek',
      carbonTon: '11,3',
      curve24h: [540, 490, 680, 980, 850, 1000, 730, 570],
      curveMax: 1000,
      curveStep: 100
    },
    water: {
      kw: 242,
      kwh: 3872,
      cost: 'Rp 6 jt',
      pf: '0,91',
      online: '12 / 12',
      alertCount: '1 meter perlu dicek',
      carbonTon: '3,1',
      curve24h: [150, 130, 180, 270, 230, 270, 200, 150],
      curveMax: 400,
      curveStep: 50
    },
    lobby: {
      kw: 79,
      kwh: 1069,
      cost: 'Rp 2 jt',
      pf: '0,92',
      online: '7 / 7',
      alertCount: '0 meter perlu dicek',
      carbonTon: '0,8',
      curve24h: [40, 35, 50, 90, 75, 90, 65, 45],
      curveMax: 150,
      curveStep: 25
    }
  };

  // Top 8 Consumers Data by Category (Matching Exact Screenshots)
  const TOP_8_DATA = {
    all: [
      { name: 'Trafo #1 (TRF-01)', val: 5420 },
      { name: 'Trafo #4 (TRF-04)', val: 5180 },
      { name: 'Trafo #6 (TRF-06)', val: 3920 },
      { name: 'Panel LMVDP #3 (LMV-03)', val: 3710 },
      { name: 'Trafo #3 (TRF-03)', val: 3320 },
      { name: 'Trafo #2 (TRF-02)', val: 3250 },
      { name: 'Panel LMVDP #11 (LMV-11)', val: 3200 },
      { name: 'Panel LMVDP #9 (LMV-09)', val: 2890 }
    ],
    forging: [
      { name: 'Mesin Forging 11 (FRG1-11)', val: 4410 },
      { name: 'Mesin Forging 8 (FRG3-08)', val: 4390 },
      { name: 'Mesin Forging 4 (FRG2-04)', val: 4380 },
      { name: 'Mesin Forging 25 (FRG1-25)', val: 4350 },
      { name: 'Mesin Forging 18 (FRG2-18)', val: 4220 },
      { name: 'Mesin Forging 14 (FRG3-14)', val: 4150 },
      { name: 'Mesin Forging 7 (FRG1-07)', val: 3980 },
      { name: 'Mesin Forging 22 (FRG2-22)', val: 3870 }
    ],
    electrical: [
      { name: 'Trafo #1 (TRF-01)', val: 5420 },
      { name: 'Trafo #4 (TRF-04)', val: 5180 },
      { name: 'Trafo #6 (TRF-06)', val: 3920 },
      { name: 'Panel LMVDP #3 (LMV-03)', val: 3710 },
      { name: 'Trafo #3 (TRF-03)', val: 3320 },
      { name: 'Trafo #2 (TRF-02)', val: 3250 },
      { name: 'Panel LMVDP #11 (LMV-11)', val: 3200 },
      { name: 'Panel LMVDP #9 (LMV-09)', val: 2890 }
    ],
    compressor: [
      { name: 'Compressor Room #2 (CMP-02)', val: 4520 },
      { name: 'Compressor Room #9 (CMP-09)', val: 4480 },
      { name: 'Compressor Room #8 (CMP-08)', val: 4420 },
      { name: 'Compressor Room #1 (CMP-01)', val: 3910 },
      { name: 'Compressor Room #4 (CMP-04)', val: 3820 },
      { name: 'Compressor Room #6 (CMP-06)', val: 3750 },
      { name: 'Compressor Room #7 (CMP-07)', val: 3610 },
      { name: 'Compressor Room #5 (CMP-05)', val: 3520 }
    ],
    water: [
      { name: 'Cooling Tower Primary Pump (PMP-01)', val: 1240 },
      { name: 'Chilled Water Pump Fac 1 (PMP-03)', val: 1180 },
      { name: 'WTP Raw Water Intake Pump (PMP-07)', val: 950 },
      { name: 'Condenser Water Circulation Pump #2', val: 920 },
      { name: 'Booster Pump High Pressure (PMP-11)', val: 840 },
      { name: 'Effluent Treatment Transfer Pump', val: 780 },
      { name: 'Scrubber Circulation Pump #1', val: 710 },
      { name: 'Cooling Tower Fan Cell #3', val: 650 }
    ],
    lobby: [
      { name: 'Main Chiller Office & Utility (CHL-01)', val: 420 },
      { name: 'AHU Central Server Room (AHU-01)', val: 340 },
      { name: 'Lobby Central AC Packaged (AC-01)', val: 280 },
      { name: 'UPS Data Center Powerlogic (UPS-01)', val: 260 },
      { name: 'Utility Workshop Feeder (WS-01)', val: 190 },
      { name: 'Office Lighting Distribution Panel', val: 150 },
      { name: 'Canteen Kitchen Exhaust Fan', val: 120 },
      { name: 'Security Pos Main Gate Panel', val: 80 }
    ]
  };

  // Perlu Perhatian Alert Items by Category (Exact Match with Screenshot)
  const ATTENTION_ALERTS = {
    all: [
      { title: 'Mesin Forging 7', area: 'Forging · Factory 1', note: 'Power factor 0.83 – cek kapasitor bank' },
      { title: 'Mesin Forging 8', area: 'Forging · Factory 1', note: 'Power factor 0.80 – cek kapasitor bank' },
      { title: 'Mesin Forging 11', area: 'Forging · Factory 1', note: 'Power factor 0.82 – cek kapasitor bank' },
      { title: 'Mesin Forging 13', area: 'Forging · Factory 1', note: 'Power factor 0.84 – cek kapasitor bank' },
      { title: 'Mesin Forging 16', area: 'Forging · Factory 1', note: 'Power factor 0.82 – cek kapasitor bank' },
      { title: 'Mesin Forging 18', area: 'Forging · Factory 1', note: 'Power factor 0.82 – cek kapasitor bank' },
      { title: 'Mesin Forging 20', area: 'Forging · Factory 1', note: 'Power factor 0.84 – cek kapasitor bank' },
      { title: 'Mesin Forging 22', area: 'Forging · Factory 1', note: 'Power factor 0.82 – cek kapasitor bank' }
    ],
    forging: [
      { title: 'Mesin Forging 7', area: 'Forging · Factory 1', note: 'Power factor 0.83 – cek kapasitor bank' },
      { title: 'Mesin Forging 8', area: 'Forging · Factory 1', note: 'Power factor 0.80 – cek kapasitor bank' },
      { title: 'Mesin Forging 11', area: 'Forging · Factory 1', note: 'Power factor 0.82 – cek kapasitor bank' },
      { title: 'Mesin Forging 13', area: 'Forging · Factory 1', note: 'Power factor 0.84 – cek kapasitor bank' },
      { title: 'Mesin Forging 16', area: 'Forging · Factory 1', note: 'Power factor 0.82 – cek kapasitor bank' },
      { title: 'Mesin Forging 18', area: 'Forging · Factory 1', note: 'Power factor 0.82 – cek kapasitor bank' },
      { title: 'Mesin Forging 20', area: 'Forging · Factory 1', note: 'Power factor 0.84 – cek kapasitor bank' },
      { title: 'Mesin Forging 22', area: 'Forging · Factory 1', note: 'Power factor 0.82 – cek kapasitor bank' }
    ],
    electrical: [
      { title: 'Panel LMVDP #1', area: 'Electrical Room · Panel LMVDP', note: 'Power factor 0.84 – cek kapasitor bank' },
      { title: 'Panel LMVDP #7', area: 'Electrical Room · Panel LMVDP', note: 'Power factor 0.83 – cek kapasitor bank' },
      { title: 'Capacitor Bank Panel #4', area: 'Electrical Room · Kapasitor Bank', note: 'Step 3 & 4 Kontaktor Trip - Kapasitas Drop' }
    ],
    compressor: [
      { title: 'Compressor Room #3', area: 'Kompresor · Compressor Room', note: 'Power factor 0.81 – cek kapasitor bank' },
      { title: 'Compressor Room #5', area: 'Kompresor · Compressor Room', note: 'Power factor 0.81 – cek kapasitor bank' },
      { title: 'Air Dryer Feeder #2', area: 'Kompresor · Air Dryer', note: 'Power factor 0.83 – cek kapasitor bank' },
      { title: 'Compressor Room #8', area: 'Kompresor · Compressor Room', note: 'Power factor 0.84 – cek kapasitor bank' }
    ],
    water: [
      { title: 'Chilled Water Pump Fac 2', area: 'Pompa Air · Chilled Water', note: 'Power factor 0.84 – cek kapasitor bank' }
    ],
    lobby: [
      { title: 'Semua Beban Normal', area: 'Lobby & Office', note: 'Cos φ di atas 0,90 - Bebas denda kVARh' }
    ]
  };

  // Application State
  const state = {
    meters: (typeof METER_DATA !== 'undefined') ? JSON.parse(JSON.stringify(METER_DATA)) : [],
    activeFilter: 'all',
    searchQuery: '',
    sortColumn: 'id',
    sortAsc: true,
    currentPage: 1,
    pageSize: 15,
    isSimulationActive: true,
    simulationTimer: null
  };

  // Chart Instances
  let chart24hInstance = null;
  let chartDonutInstance = null;
  let chartTop8Instance = null;

  // DOM Elements
  const headerLiveTime = document.getElementById('headerLiveTime');
  const filterTabsGroup = document.getElementById('filterTabsGroup');
  const kpiDayaVal = document.getElementById('kpiDayaVal');
  const kpiDayaSub = document.getElementById('kpiDayaSub');
  const kpiEnergiVal = document.getElementById('kpiEnergiVal');
  const kpiEnergiSub = document.getElementById('kpiEnergiSub');
  const kpiBiayaVal = document.getElementById('kpiBiayaVal');
  const kpiBiayaSub = document.getElementById('kpiBiayaSub');
  const kpiPfVal = document.getElementById('kpiPfVal');
  const kpiPfSub = document.getElementById('kpiPfSub');
  const kpiOnlineVal = document.getElementById('kpiOnlineVal');
  const kpiOnlineSub = document.getElementById('kpiOnlineSub');
  const kpiCarbonVal = document.getElementById('kpiCarbonVal');
  const kpiCarbonSub = document.getElementById('kpiCarbonSub');

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
    initFilterTabs();
    initCharts();
    updateViewForActiveFilter();
    renderTable();
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
        headerLiveTime.textContent = `${dateStr}, ${timeStr}`;
      }
    }
    updateClock();
    setInterval(updateClock, 1000);
  }

  // ================= 3. FILTER TABS CONTROLLER =================
  function initFilterTabs() {
    if (!filterTabsGroup) return;
    const tabButtons = filterTabsGroup.querySelectorAll('.filter-tab-btn');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeFilter = btn.dataset.filter || 'all';
        state.currentPage = 1;
        updateViewForActiveFilter();
        renderTable();
      });
    });
  }

  // ================= 4. UPDATE VIEW BASED ON ACTIVE FILTER =================
  function updateViewForActiveFilter() {
    const filterKey = state.activeFilter;
    const data = CATEGORY_BASELINES[filterKey] || CATEGORY_BASELINES.all;

    // 1. Update KPI Values
    if (kpiDayaVal) kpiDayaVal.textContent = data.kw.toLocaleString('id-ID');
    if (kpiDayaSub) kpiDayaSub.textContent = 'Total beban listrik sekarang';

    if (kpiEnergiVal) kpiEnergiVal.textContent = data.kwh.toLocaleString('id-ID');
    if (kpiEnergiSub) kpiEnergiSub.textContent = 'Sejak pukul 00.00';

    if (kpiBiayaVal) kpiBiayaVal.textContent = data.cost;
    if (kpiBiayaSub) kpiBiayaSub.textContent = 'Berdasarkan tarif asumsi';

    if (kpiPfVal) kpiPfVal.textContent = data.pf;
    if (kpiPfSub) kpiPfSub.textContent = 'Baik (target ≥ 0,85)';

    if (kpiOnlineVal) kpiOnlineVal.textContent = data.online;
    if (kpiOnlineSub) kpiOnlineSub.textContent = data.alertCount;

    if (kpiCarbonVal) kpiCarbonVal.textContent = data.carbonTon;
    if (kpiCarbonSub) kpiCarbonSub.textContent = 'Faktor grid Jamali 0,79 kg/kWh';

    // 2. Update 24h Line Chart
    update24hChart(data.curve24h, data.curveMax, data.curveStep);

    // 3. Update Top 8 Horizontal Bar Chart
    updateTop8Chart(TOP_8_DATA[filterKey] || TOP_8_DATA.all);

    // 4. Update Perlu Perhatian List
    renderAttentionList(ATTENTION_ALERTS[filterKey] || ATTENTION_ALERTS.all);
  }

  // ================= 5. CHARTS INITIALIZATION & UPDATES =================
  function initCharts() {
    Chart.defaults.font.family = "'Inter', -apple-system, sans-serif";
    Chart.defaults.color = '#94a3b8';

    // --- 1. Line Chart: Beban 24 Jam Terakhir ---
    const ctx24h = document.getElementById('chart24h');
    if (ctx24h) {
      const gradient = ctx24h.getContext('2d').createLinearGradient(0, 0, 0, 240);
      gradient.addColorStop(0, 'rgba(56, 189, 248, 0.22)');
      gradient.addColorStop(1, 'rgba(56, 189, 248, 0.0)');

      chart24hInstance = new Chart(ctx24h, {
        type: 'line',
        data: {
          labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
          datasets: [{
            label: 'Daya Listrik',
            data: CATEGORY_BASELINES.all.curve24h,
            borderColor: '#38bdf8',
            borderWidth: 2.8,
            backgroundColor: gradient,
            fill: true,
            tension: 0.45,
            pointRadius: 0,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#38bdf8',
            pointHoverBorderColor: '#ffffff',
            pointHoverBorderWidth: 2
          }]
        },
        options: {
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
              padding: 10,
              displayColors: false,
              callbacks: {
                label: (ctx) => `${ctx.parsed.y.toLocaleString('id-ID')} kW`
              }
            }
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: '#94a3b8', font: { size: 11 } }
            },
            y: {
              min: 0,
              max: CATEGORY_BASELINES.all.curveMax,
              grid: { color: 'rgba(255, 255, 255, 0.04)' },
              ticks: {
                color: '#94a3b8',
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
            borderColor: '#131d2e',
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
            backgroundColor: '#2dd4bf',
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
              bodyColor: '#2dd4bf',
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
              max: 6000,
              grid: { color: 'rgba(255, 255, 255, 0.04)' },
              ticks: {
                color: '#94a3b8',
                font: { size: 10 },
                stepSize: 1000,
                callback: (val) => val === 0 ? '0' : val.toLocaleString('id-ID')
              }
            },
            y: {
              grid: { display: false },
              ticks: {
                color: '#94a3b8',
                font: { size: 11 }
              }
            }
          }
        }
      });
    }
  }

  function update24hChart(newData, newMax, newStep) {
    if (!chart24hInstance) return;
    chart24hInstance.data.datasets[0].data = newData;
    chart24hInstance.options.scales.y.max = newMax;
    chart24hInstance.options.scales.y.ticks.stepSize = newStep;
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

  // ================= 6. RENDER PERLU PERHATIAN LIST =================
  function renderAttentionList(alerts) {
    if (!attentionList) return;
    if (!alerts || alerts.length === 0) {
      attentionList.innerHTML = `
        <div style="padding:1rem; text-align:center; color:var(--text-muted); font-size:0.8rem;">
          Semua meter di area ini beroperasi dalam batas normal.
        </div>
      `;
      return;
    }

    attentionList.innerHTML = alerts.map(item => `
      <div class="attention-item">
        <div class="attention-header-text">
          ${item.title} <span>(${item.area})</span>
        </div>
        <div class="attention-alert-text">
          ${item.note}
        </div>
      </div>
    `).join('');
  }

  // ================= 7. DAFTAR METER TABLE =================
  function getFilteredMeters() {
    let list = state.meters;

    // Filter by Tab
    if (state.activeFilter !== 'all') {
      list = list.filter(m => {
        const cat = (m.category || '').toLowerCase();
        if (state.activeFilter === 'forging') return cat === 'forging';
        if (state.activeFilter === 'electrical') return cat === 'electrical';
        if (state.activeFilter === 'compressor') return cat === 'compressor';
        if (state.activeFilter === 'water') return cat === 'water' || cat === 'waterpump';
        if (state.activeFilter === 'lobby') return cat === 'lobby';
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
      let valA = (state.sortColumn === 'carbon') ? ((a.kwhToday || 0) * 0.79) : a[state.sortColumn];
      let valB = (state.sortColumn === 'carbon') ? ((b.kwhToday || 0) * 0.79) : b[state.sortColumn];
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
          <td colspan="12" style="text-align:center; padding:2.5rem; color:var(--text-muted);">
            Tidak ditemukan data meter digital yang sesuai pencarian "${state.searchQuery}".
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
          <td class="col-num" style="color:#ffffff;">
            ${(m.kwhToday || 0).toLocaleString('id-ID')}
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

      // Jitter values slightly by ±0.8%
      state.meters.forEach(m => {
        if (m.status !== 'offline') {
          const delta = (Math.random() - 0.5) * 0.016;
          m.kw = Math.max(5, m.kw * (1 + delta));
          m.current = Math.max(2, m.current * (1 + delta));
          m.kwhToday = (m.kwhToday || 100) + (m.kw / 3600) * 3;
        }
      });

      renderTable();
    }, 3500);
  }

  // ================= 9. MODALS & DETAIL POPUPS =================
  window.openMeterDetailById = function(meterId) {
    const meter = state.meters.find(m => m.id === meterId);
    if (!meter) return;

    const modalTitle = document.getElementById('modalMeterTitle');
    const modalSubtitle = document.getElementById('modalMeterSubtitle');
    const modalBody = document.getElementById('modalMeterBody');

    if (modalTitle) modalTitle.textContent = `${meter.name} (${meter.id})`;
    if (modalSubtitle) modalSubtitle.textContent = `Area: ${meter.categoryLabel || meter.category} · Gateway IP: ${meter.ip || '192.168.10.x'}`;

    if (modalBody) {
      const carbonKg = ((meter.kwhToday || 0) * 0.79).toFixed(1);
      modalBody.innerHTML = `
        <div class="detail-specs-grid">
          <div class="spec-tile">
            <div class="spec-tile-label">Daya Aktif (Active Power)</div>
            <div class="spec-tile-val" style="color:var(--color-blue);">${(meter.kw || 0).toFixed(1)} <span style="font-size:0.8rem; font-weight:400; color:var(--text-secondary);">kW</span></div>
          </div>
          <div class="spec-tile">
            <div class="spec-tile-label">Tegangan Sistem (V L-L)</div>
            <div class="spec-tile-val">${(meter.voltage || 0).toFixed(1)} <span style="font-size:0.8rem; font-weight:400; color:var(--text-secondary);">V</span></div>
          </div>
          <div class="spec-tile">
            <div class="spec-tile-label">Arus Beban Total</div>
            <div class="spec-tile-val">${(meter.current || 0).toFixed(1)} <span style="font-size:0.8rem; font-weight:400; color:var(--text-secondary);">A</span></div>
          </div>
        </div>

        <div class="param-table-box">
          <div class="param-row"><span>Brand / Tipe:</span> <strong>${meter.brand || 'Mitsubishi ME96SS'}</strong></div>
          <div class="param-row"><span>Modbus Unit ID:</span> <strong>${meter.modbusId || 1}</strong></div>
          <div class="param-row"><span>Cisco Switch Port:</span> <strong style="color:var(--color-blue);">${meter.ciscoSwitch || 'SW-FAC1-CORE01 (Gi1/0/2)'}</strong></div>
          <div class="param-row"><span>Subnet Mask:</span> <strong>${meter.subnet || '255.255.254.0'}</strong></div>
          <div class="param-row"><span>Power Factor (Cos φ):</span> <strong style="color:${meter.pf < 0.85 ? 'var(--color-amber)' : 'var(--color-green)'};">${(meter.pf || 0.89).toFixed(2)}</strong></div>
          <div class="param-row"><span>Frekuensi Grid:</span> <strong>${(meter.freq || 50.0).toFixed(2)} Hz</strong></div>
          <div class="param-row"><span>Energi Terpakai Hari Ini:</span> <strong>${(meter.kwhToday || 0).toLocaleString('id-ID')} kWh</strong></div>
          <div class="param-row"><span>Jejak Emisi Karbon (CO₂e):</span> <strong style="color:var(--color-teal);">${carbonKg} kg CO₂e</strong></div>
        </div>

        <div style="display:flex; justify-content:flex-end; gap:0.65rem; margin-top:0.5rem;">
          <button class="btn-page" style="background:var(--color-blue); color:#ffffff; border-color:var(--color-blue);" onclick="window.closeAllModals()">
            Tutup
          </button>
        </div>
      `;
    }

    if (meterDetailModal) window.openModal(meterDetailModal);
  };

  window.openModal = function(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // If opening blueprint modal, reset zoom & pan so it fits screen 100% without scroll
    if (modalEl.id === 'blueprintModal') {
      applyBlueprintZoom(1.0, 0, 0);
    }
  };

  window.closeAllModals = function() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  };

  // Blueprint Zoom & Smooth Drag Pan Logic (Zero-Scroll by Default)
  let currentZoom = 1.0;
  let panX = 0;
  let panY = 0;
  let isDragging = false;
  let startX = 0;
  let startY = 0;

  const blueprintImg = document.getElementById('blueprintImg');
  const blueprintViewport = document.getElementById('blueprintViewport');

  function applyBlueprintZoom(scale, newPanX, newPanY) {
    currentZoom = Math.min(Math.max(scale, 1.0), 3.5);
    if (currentZoom === 1.0) {
      panX = 0;
      panY = 0;
    } else {
      if (typeof newPanX === 'number') panX = newPanX;
      if (typeof newPanY === 'number') panY = newPanY;
    }

    if (blueprintImg) {
      blueprintImg.style.transform = `scale(${currentZoom}) translate(${panX / currentZoom}px, ${panY / currentZoom}px)`;
    }

    if (blueprintViewport) {
      blueprintViewport.classList.toggle('is-zoomed', currentZoom > 1.0);
    }
  }

  const btnZoomIn = document.getElementById('btnZoomIn');
  const btnZoomOut = document.getElementById('btnZoomOut');
  const btnZoomReset = document.getElementById('btnZoomReset');

  if (btnZoomIn) btnZoomIn.addEventListener('click', () => applyBlueprintZoom(currentZoom + 0.35));
  if (btnZoomOut) btnZoomOut.addEventListener('click', () => applyBlueprintZoom(currentZoom - 0.35));
  if (btnZoomReset) btnZoomReset.addEventListener('click', () => applyBlueprintZoom(1.0, 0, 0));

  // Mouse Wheel Zoom on Blueprint
  if (blueprintViewport) {
    blueprintViewport.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 0.25 : -0.25;
      applyBlueprintZoom(currentZoom + delta);
    }, { passive: false });

    // Drag to Pan when Zoomed In
    blueprintViewport.addEventListener('mousedown', (e) => {
      if (currentZoom <= 1.0) return;
      isDragging = true;
      startX = e.clientX - panX;
      startY = e.clientY - panY;
      blueprintViewport.classList.add('is-dragging');
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      panX = e.clientX - startX;
      panY = e.clientY - startY;
      applyBlueprintZoom(currentZoom, panX, panY);
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        if (blueprintViewport) blueprintViewport.classList.remove('is-dragging');
      }
    });

    // Touch Drag for Mobile
    blueprintViewport.addEventListener('touchstart', (e) => {
      if (currentZoom <= 1.0 || e.touches.length !== 1) return;
      isDragging = true;
      startX = e.touches[0].clientX - panX;
      startY = e.touches[0].clientY - panY;
    }, { passive: true });

    blueprintViewport.addEventListener('touchmove', (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      panX = e.touches[0].clientX - startX;
      panY = e.touches[0].clientY - startY;
      applyBlueprintZoom(currentZoom, panX, panY);
    }, { passive: true });

    blueprintViewport.addEventListener('touchend', () => {
      isDragging = false;
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
      btnOpenBlueprintModal.addEventListener('click', () => {
        applyBlueprintZoom(1.0);
        window.openModal(blueprintModal);
      });
    }

    // Export CSV
    if (btnExportCsv) {
      btnExportCsv.addEventListener('click', exportToCsv);
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

  // ================= 11. CSV EXPORT =================
  function exportToCsv() {
    const headers = ['ID Meter', 'Nama Feeder/Panel', 'Kategori', 'Sub Area', 'IP Address', 'Daya kW', 'Tegangan V', 'Arus A', 'Cos Phi', 'Energi kWh', 'Emisi CO2 kg', 'Status'];
    const rows = state.meters.map(m => [
      m.id,
      `"${(m.name || '').replace(/"/g, '""')}"`,
      m.categoryLabel || m.category,
      `"${(m.subArea || '').replace(/"/g, '""')}"`,
      m.ip || '',
      m.kw || 0,
      m.voltage || 0,
      m.current || 0,
      m.pf || 0.89,
      m.kwhToday || 0,
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
  }

  // Run initialization
  init();
});
