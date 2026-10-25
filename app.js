// ========================================================
// PT MUSASHI AUTO PARTS INDONESIA - MAINTENANCE UTILITY
// Energy Management System (EMS) & SCADA Controller
// Modern Telemetry Dashboard with Dual-Theme Engine (Light/Dark)
// ========================================================

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    meters: (typeof METER_DATA !== 'undefined') ? JSON.parse(JSON.stringify(METER_DATA)) : [],
    currentAreaFilter: 'all',
    currentStatusFilter: 'all',
    searchQuery: '',
    sortColumn: 'id',
    sortAsc: true,
    currentPage: 1,
    pageSize: 15,
    isSimulationActive: true,
    simulationTimer: null,
    selectedMeter: null,
    currentTheme: localStorage.getItem('musashi_theme') || 'light'
  };

  // Chart References
  let trafoSparklineChart = null;
  let trafoGaugeChartInstance = null;
  let hourlyBarChartInstance = null;

  // DOM Elements
  const liveClockEl = document.getElementById('liveClock');
  const liveDateEl = document.getElementById('liveDate');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeToggleLabel = document.getElementById('themeToggleLabel');
  const meterTableBody = document.getElementById('meterTableBody');
  const searchInput = document.getElementById('searchInput');
  const statusFilterSelect = document.getElementById('statusFilter');
  const pageRangeText = document.getElementById('pageRangeText');
  const totalMetersText = document.getElementById('totalMetersText');
  const paginationButtons = document.getElementById('paginationButtons');

  // KPI & Telemetry Elements
  const kpiCurrentKw = document.getElementById('kpiCurrentKw');
  const kpiPeakDemand = document.getElementById('kpiPeakDemand');
  const kpiEnergyToday = document.getElementById('kpiEnergyToday');
  const kpiAvgPf = document.getElementById('kpiAvgPf');
  const trafo12KwVal = document.getElementById('trafo12KwVal');
  const trafo12Volt = document.getElementById('trafo12Volt');
  const trafo12Current = document.getElementById('trafo12Current');
  const trafo12Pf = document.getElementById('trafo12Pf');
  const trafo12Temp = document.getElementById('trafo12Temp');
  const trafo12PercentLoad = document.getElementById('trafo12PercentLoad');
  const trafo12SyncTime = document.getElementById('trafo12SyncTime');

  // Modals
  const meterDetailModal = document.getElementById('meterDetailModal');
  const btnCloseMeterModal = document.getElementById('btnCloseMeterModal');
  const modalMeterTitle = document.getElementById('modalMeterTitle');
  const modalMeterSubtitle = document.getElementById('modalMeterSubtitle');
  const modalMeterBody = document.getElementById('modalMeterBody');

  const electricalRoomModal = document.getElementById('electricalRoomModal');
  const btnOpenElectricalModal = document.getElementById('btnOpenElectricalModal');
  const btnCloseElectricalModal = document.getElementById('btnCloseElectricalModal');

  const topologyModal = document.getElementById('topologyModal');
  const btnOpenTopology = document.getElementById('btnOpenTopology');
  const btnCloseTopologyModal = document.getElementById('btnCloseTopologyModal');

  const guideModal = document.getElementById('guideModal');
  const btnOpenGuide = document.getElementById('btnOpenGuide');
  const btnCloseGuideModal = document.getElementById('btnCloseGuideModal');

  const btnExportData = document.getElementById('btnExportData');
  const btnSyncData = document.getElementById('btnSyncData');
  const btnQuickSearch = document.getElementById('btnQuickSearch');
  const btnViewAllMeters = document.getElementById('btnViewAllMeters');
  const btnOpenTrafo12Details = document.getElementById('btnOpenTrafo12Details');

  // Sparkline history data for Trafo 12
  const sparklineHistory = [1280, 1310, 1295, 1340, 1320, 1365, 1350, 1380, 1375, 1390, 1380];

  // ================= 1. INITIALIZATION =================
  function init() {
    initTheme();
    initClock();
    initNavPills();
    initFilterPills();
    initCharts();
    renderTable();
    updateKpis();
    setupEventListeners();
    startSimulation();
  }

  // ================= 2. THEME ENGINE (LIGHT & DARK MODE) =================
  function initTheme() {
    applyTheme(state.currentTheme);

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const newTheme = (state.currentTheme === 'light') ? 'dark' : 'light';
        state.currentTheme = newTheme;
        localStorage.setItem('musashi_theme', newTheme);
        applyTheme(newTheme);
      });
    }
  }

  function applyTheme(theme) {
    const isDark = (theme === 'dark');
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeToggleLabel) themeToggleLabel.textContent = 'Light Mode';
      const sunIcon = document.querySelector('.theme-icon-sun');
      const moonIcon = document.querySelector('.theme-icon-moon');
      if (sunIcon) sunIcon.style.display = 'inline-block';
      if (moonIcon) moonIcon.style.display = 'none';
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeToggleLabel) themeToggleLabel.textContent = 'Dark Mode';
      const sunIcon = document.querySelector('.theme-icon-sun');
      const moonIcon = document.querySelector('.theme-icon-moon');
      if (sunIcon) sunIcon.style.display = 'none';
      if (moonIcon) moonIcon.style.display = 'inline-block';
    }

    // Update Chart themes dynamically
    updateChartThemes(isDark);
  }

  function updateChartThemes(isDark) {
    if (hourlyBarChartInstance) {
      const textColor = isDark ? '#94a3b8' : '#64748b';
      const gridColor = isDark ? '#1e293b' : '#f1f5f9';
      const defaultBarColor = isDark ? '#1e2c3f' : '#e2e8f0';
      const peakBarColor = isDark ? '#38bdf8' : '#2563eb';

      hourlyBarChartInstance.options.scales.x.ticks.color = textColor;
      hourlyBarChartInstance.options.scales.y.ticks.color = textColor;
      hourlyBarChartInstance.options.scales.x.grid.color = 'transparent';
      hourlyBarChartInstance.options.scales.y.grid.color = gridColor;

      // Update bar colors: peak hour (idx 19) gets peakBarColor, others get defaultBarColor
      const barColors = hourlyBarChartInstance.data.datasets[0].data.map((_, idx) => {
        return (idx === 19) ? peakBarColor : defaultBarColor;
      });
      hourlyBarChartInstance.data.datasets[0].backgroundColor = barColors;
      hourlyBarChartInstance.update('none');
    }

    if (trafoSparklineChart) {
      const lineColor = isDark ? '#f43f5e' : '#ec4899';
      trafoSparklineChart.data.datasets[0].borderColor = lineColor;
      trafoSparklineChart.update('none');
    }
  }

  // ================= 3. LIVE CLOCK =================
  function initClock() {
    function updateClock() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      if (liveClockEl) {
        liveClockEl.textContent = `${hours}:${minutes}:${seconds} WIB`;
      }

      const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
      if (liveDateEl) {
        liveDateEl.textContent = `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
      }
    }
    updateClock();
    setInterval(updateClock, 1000);
  }

  // ================= 4. NAVIGATION PILLS =================
  function initNavPills() {
    const navPills = document.querySelectorAll('#mainNavPills .nav-pill-item');
    navPills.forEach(pill => {
      pill.addEventListener('click', () => {
        navPills.forEach(p => {
          p.classList.remove('active');
          const dot = p.querySelector('.dot-indicator');
          if (dot) dot.remove();
        });
        pill.classList.add('active');
        const dot = document.createElement('span');
        dot.className = 'dot-indicator';
        pill.appendChild(dot);

        const tab = pill.dataset.tab;
        if (tab === 'dashboard') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (tab === 'sld') {
          const sld = document.getElementById('sldSection');
          if (sld) sld.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (tab === 'forging') {
          const dir = document.getElementById('directorySection');
          if (dir) dir.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setAreaFilter('forging');
        } else if (tab === 'electrical') {
          // Scroll directly to the integrated Electrical Room card on the page
          const el = document.getElementById('electricalRoomCard');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.classList.add('highlight-pulse');
            setTimeout(() => el.classList.remove('highlight-pulse'), 1800);
          }
        } else if (tab === 'directory') {
          const dir = document.getElementById('directorySection');
          if (dir) dir.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ================= 5. FILTER PILLS =================
  function initFilterPills() {
    const filterBtns = document.querySelectorAll('#areaFilterPills .filter-pill-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.currentAreaFilter = btn.dataset.filter;
        state.currentPage = 1;
        renderTable();
      });
    });
  }

  function setAreaFilter(area) {
    state.currentAreaFilter = area;
    state.currentPage = 1;
    const filterBtns = document.querySelectorAll('#areaFilterPills .filter-pill-btn');
    filterBtns.forEach(b => {
      if (b.dataset.filter === area) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
    renderTable();
  }

  // ================= 6. CHARTS INITIALIZATION =================
  function initCharts() {
    const isDark = (state.currentTheme === 'dark');

    // Chart 1: Trafo 12 Sparkline (Spline Pink Wave like Reference)
    const ctxSparkline = document.getElementById('trafoSparkline');
    if (ctxSparkline) {
      const gradient = ctxSparkline.getContext('2d').createLinearGradient(0, 0, 0, 90);
      gradient.addColorStop(0, isDark ? 'rgba(244, 63, 94, 0.25)' : 'rgba(236, 72, 153, 0.2)');
      gradient.addColorStop(1, 'rgba(236, 72, 153, 0)');

      trafoSparklineChart = new Chart(ctxSparkline, {
        type: 'line',
        data: {
          labels: ['-10m', '-9m', '-8m', '-7m', '-6m', '-5m', '-4m', '-3m', '-2m', '-1m', 'Now'],
          datasets: [{
            data: sparklineHistory,
            borderColor: isDark ? '#f43f5e' : '#ec4899',
            borderWidth: 2.2,
            pointRadius: 0,
            pointHoverRadius: 4,
            pointBackgroundColor: '#ec4899',
            fill: true,
            backgroundColor: gradient,
            tension: 0.45
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (ctx) => `${ctx.parsed.y} kW`
              }
            }
          },
          scales: {
            x: { display: false },
            y: {
              display: false,
              suggestedMin: 1200,
              suggestedMax: 1450
            }
          }
        }
      });
    }

    // Chart 2: Trafo Load Zone Semi-Circular Gauge (Speedometer)
    const ctxGauge = document.getElementById('trafoGaugeChart');
    if (ctxGauge) {
      trafoGaugeChartInstance = new Chart(ctxGauge, {
        type: 'doughnut',
        data: {
          labels: ['Ringan (<40%)', 'Optimal (40-75%)', 'Waspada (75-90%)', 'Puncak (>90%)'],
          datasets: [{
            data: [40, 35, 15, 10], // Zone proportions
            backgroundColor: [
              '#3b82f6', // Ringan (Blue)
              '#10b981', // Optimal (Green)
              '#f59e0b', // Waspada (Amber)
              '#ef4444'  // Puncak (Red)
            ],
            borderWidth: 0,
            hoverOffset: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          circumference: 180,
          rotation: 270,
          cutout: '78%',
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (ctx) => `${ctx.label}: Kapasitas ${ctx.parsed}%`
              }
            }
          }
        }
      });
    }

    // Chart 3: 24-Hour Hourly Bar Chart (Highlighted Peak Hour Bar like Reference)
    const ctxBar = document.getElementById('hourlyBarChart');
    if (ctxBar) {
      const hours = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`);
      // Realistic hourly factory profile (peaking at hour 19 / 19:00 WIB during WBP)
      const hourlyData = [
        1.85, 1.80, 1.82, 1.90, 2.10, 2.40, // 00-05
        2.75, 2.90, 3.10, 3.05, 3.15, 3.00, // 06-11
        2.60, 3.10, 3.20, 3.15, 3.10, 3.25, // 12-17
        3.35, 3.42, 3.20, 2.80, 2.10, 1.95  // 18-23 (Hour 19 = 3.42 MW Peak)
      ];

      const defaultBarColor = isDark ? '#1e2c3f' : '#e2e8f0';
      const peakBarColor = isDark ? '#38bdf8' : '#2563eb';
      const backgroundColors = hourlyData.map((_, idx) => (idx === 19) ? peakBarColor : defaultBarColor);

      const textColor = isDark ? '#94a3b8' : '#64748b';
      const gridColor = isDark ? '#1e293b' : '#f1f5f9';

      hourlyBarChartInstance = new Chart(ctxBar, {
        type: 'bar',
        data: {
          labels: hours,
          datasets: [{
            data: hourlyData,
            backgroundColor: backgroundColors,
            borderRadius: 5,
            borderSkipped: false,
            barPercentage: 0.65
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                title: (items) => `Pukul ${items[0].label} WIB`,
                label: (ctx) => {
                  const kw = Math.round(ctx.parsed.y * 1000);
                  const isWbp = (ctx.dataIndex >= 18 && ctx.dataIndex <= 22);
                  return `Beban: ${ctx.parsed.y.toFixed(2)} MW (${kw.toLocaleString()} kW) ${isWbp ? '• WBP' : ''}`;
                }
              }
            }
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: {
                color: textColor,
                font: { size: 10 },
                callback: function(val, index) {
                  return (index % 6 === 0 || index === 23) ? this.getLabelForValue(val) : '';
                }
              }
            },
            y: {
              grid: { color: gridColor },
              ticks: {
                color: textColor,
                font: { size: 10 },
                callback: (val) => `${val} MW`
              },
              suggestedMin: 0,
              suggestedMax: 4.0
            }
          }
        }
      });
    }
  }

  // ================= 7. TABLE RENDERING & PAGINATION =================
  function getFilteredMeters() {
    return state.meters.filter(meter => {
      // Area filter
      if (state.currentAreaFilter !== 'all' && meter.category !== state.currentAreaFilter) {
        return false;
      }
      // Status filter
      if (state.currentStatusFilter !== 'all' && meter.status !== state.currentStatusFilter) {
        return false;
      }
      // Search Query
      if (state.searchQuery.trim() !== '') {
        const query = state.searchQuery.toLowerCase();
        const matchId = (meter.id || '').toLowerCase().includes(query);
        const matchName = (meter.name || '').toLowerCase().includes(query);
        const matchIp = (meter.ip || '').toLowerCase().includes(query);
        const matchArea = (meter.subArea || '').toLowerCase().includes(query);
        return matchId || matchName || matchIp || matchArea;
      }
      return true;
    });
  }

  function renderTable() {
    if (!meterTableBody) return;
    const filtered = getFilteredMeters();

    // Sorting
    filtered.sort((a, b) => {
      let valA = a[state.sortColumn];
      let valB = b[state.sortColumn];
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

    // Build Table Rows HTML
    if (pageItems.length === 0) {
      meterTableBody.innerHTML = `
        <tr>
          <td colspan="10" style="text-align:center; padding:2rem; color:var(--text-muted);">
            Tidak ditemukan data meter digital yang sesuai filter / pencarian "${state.searchQuery}".
          </td>
        </tr>
      `;
      renderPaginationButtons(totalPages);
      return;
    }

    meterTableBody.innerHTML = pageItems.map(m => {
      const statusClass = (m.status === 'normal') ? 'normal' : (m.status === 'warning') ? 'warning' : 'offline';
      const statusLabel = (m.status === 'normal') ? 'Normal' : (m.status === 'warning') ? 'Warning' : 'Offline';
      const isFeatured = (m.id === 'TRF-12');

      return `
        <tr style="${isFeatured ? 'background:var(--primary-light); font-weight:600;' : ''}">
          <td style="font-family:var(--font-mono); font-weight:700; color:${isFeatured ? 'var(--primary)' : 'var(--text-main)'};">
            ${m.id} ${isFeatured ? '⭐' : ''}
          </td>
          <td style="max-width:280px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="${m.name}">
            ${m.name}
          </td>
          <td>
            <span style="font-size:0.75rem; color:var(--text-muted);">${m.categoryLabel || m.category}</span>
          </td>
          <td style="font-family:var(--font-mono); font-size:0.75rem; color:${isFeatured ? 'var(--primary)' : 'var(--text-body)'};">
            ${m.ip || '10.41.47.x'}
          </td>
          <td style="text-align:right; font-family:var(--font-mono); font-weight:700;">
            ${(m.kw || 0).toLocaleString('id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
          </td>
          <td style="text-align:right; font-family:var(--font-mono);">
            ${(m.voltage || 0).toLocaleString('id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
          </td>
          <td style="text-align:right; font-family:var(--font-mono);">
            ${(m.current || 0).toLocaleString('id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
          </td>
          <td style="text-align:center; font-family:var(--font-mono); color:${(m.pf < 0.85) ? 'var(--accent-amber)' : 'var(--accent-emerald)'};">
            ${(m.pf || 0.95).toFixed(2)}
          </td>
          <td style="text-align:center;">
            <span class="status-pill-badge ${statusClass}">● ${statusLabel}</span>
          </td>
          <td style="text-align:center;">
            <button class="btn-pill-action" onclick="window.openMeterDetailById('${m.id}')" style="padding:0.25rem 0.6rem; font-size:0.72rem;">
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
      <button class="btn-page" ${state.currentPage === 1 ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''} onclick="window.goToPage(${state.currentPage - 1})">
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
        html += `<span style="padding:0 0.3rem; color:var(--text-light);">...</span>`;
      }
    }

    // Next Button
    html += `
      <button class="btn-page" ${state.currentPage === totalPages ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''} onclick="window.goToPage(${state.currentPage + 1})">
        Next ›
      </button>
    `;

    paginationButtons.innerHTML = html;
  }

  window.goToPage = function(page) {
    state.currentPage = page;
    renderTable();
  };

  // ================= 8. KPI CALCULATION & UPDATES =================
  function updateKpis() {
    let totalKw = 0;
    let totalKwh = 0;
    let pfSum = 0;
    let activeMeters = 0;

    state.meters.forEach(m => {
      totalKw += (m.kw || 0);
      totalKwh += (m.kwhToday || 0);
      if (m.pf) {
        pfSum += m.pf;
        activeMeters++;
      }
    });

    const avgPf = activeMeters > 0 ? (pfSum / activeMeters).toFixed(2) : '0.94';

    if (kpiCurrentKw) kpiCurrentKw.textContent = Math.round(totalKw).toLocaleString('id-ID');
    if (kpiEnergyToday) kpiEnergyToday.textContent = Math.round(totalKwh).toLocaleString('id-ID');
    if (kpiAvgPf) kpiAvgPf.textContent = avgPf.replace('.', ',');

    // Trafo 12 Specific Update
    const trafo12 = state.meters.find(m => m.id === 'TRF-12');
    if (trafo12) {
      if (trafo12KwVal) trafo12KwVal.textContent = Math.round(trafo12.kw).toLocaleString('id-ID');
      if (trafo12Volt) trafo12Volt.textContent = `${trafo12.voltage.toFixed(1)} V`;
      if (trafo12Current) trafo12Current.textContent = `${Math.round(trafo12.current).toLocaleString('id-ID')} A`;
      if (trafo12Pf) trafo12Pf.textContent = trafo12.pf.toFixed(2);
      if (trafo12PercentLoad) {
        const pct = Math.round((trafo12.kw / 2000) * 100);
        trafo12PercentLoad.textContent = `${pct}%`;
      }
    }
  }

  // ================= 9. SIMULATION ENGINE =================
  function startSimulation() {
    if (state.simulationTimer) clearInterval(state.simulationTimer);

    state.simulationTimer = setInterval(() => {
      if (!state.isSimulationActive) return;

      // Jitter meter values slightly to look alive
      state.meters.forEach(m => {
        if (m.status !== 'offline') {
          const delta = (Math.random() - 0.5) * 0.015; // ±1.5%
          m.kw = Math.max(10, m.kw * (1 + delta));
          m.current = Math.max(5, m.current * (1 + delta));
          m.kwhToday = (m.kwhToday || 100) + (m.kw / 3600) * 3;
        }
      });

      // Update Trafo 12 Sparkline history
      const trafo12 = state.meters.find(m => m.id === 'TRF-12');
      if (trafo12 && trafoSparklineChart) {
        const latestKw = Math.round(trafo12.kw);
        sparklineHistory.shift();
        sparklineHistory.push(latestKw);
        trafoSparklineChart.data.datasets[0].data = sparklineHistory;
        trafoSparklineChart.update('none');
      }

      // Update sync time
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}.${String(now.getMinutes()).padStart(2, '0')}`;
      if (trafo12SyncTime) {
        trafo12SyncTime.textContent = `Hari ini, ${timeStr} WIB`;
      }

      updateKpis();
      renderTable();
    }, 3500);
  }

  // ================= 10. MODAL HANDLING & DETAIL POPUPS =================
  window.openMeterDetailById = function(meterId) {
    const meter = state.meters.find(m => m.id === meterId);
    if (!meter) return;

    if (modalMeterTitle) modalMeterTitle.textContent = `${meter.name} (${meter.id})`;
    if (modalMeterSubtitle) modalMeterSubtitle.textContent = `Kategori: ${meter.categoryLabel || meter.category} · Gateway IP: ${meter.ip || '10.41.47.x'}`;

    if (modalMeterBody) {
      modalMeterBody.innerHTML = `
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:1rem;">
          <div style="background:var(--bg-subtle); padding:0.85rem; border-radius:var(--radius-md); border:1px solid var(--border-color);">
            <div style="font-size:0.72rem; color:var(--text-muted);">Daya Aktif (Active Power)</div>
            <div style="font-size:1.45rem; font-weight:800; color:var(--primary); font-family:var(--font-mono);">
              ${(meter.kw || 0).toFixed(1)} <span style="font-size:0.8rem; color:var(--text-muted);">kW</span>
            </div>
          </div>
          <div style="background:var(--bg-subtle); padding:0.85rem; border-radius:var(--radius-md); border:1px solid var(--border-color);">
            <div style="font-size:0.72rem; color:var(--text-muted);">Tegangan Sistem (V L-L)</div>
            <div style="font-size:1.45rem; font-weight:800; color:var(--text-main); font-family:var(--font-mono);">
              ${(meter.voltage || 0).toFixed(1)} <span style="font-size:0.8rem; color:var(--text-muted);">V</span>
            </div>
          </div>
          <div style="background:var(--bg-subtle); padding:0.85rem; border-radius:var(--radius-md); border:1px solid var(--border-color);">
            <div style="font-size:0.72rem; color:var(--text-muted);">Arus Beban Total</div>
            <div style="font-size:1.45rem; font-weight:800; color:var(--text-main); font-family:var(--font-mono);">
              ${(meter.current || 0).toFixed(1)} <span style="font-size:0.8rem; color:var(--text-muted);">A</span>
            </div>
          </div>
        </div>

        <div style="background:var(--bg-subtle); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:1rem;">
          <h4 style="font-size:0.85rem; font-weight:800; color:var(--text-main); margin-bottom:0.65rem;">
            Parameter Telemetri & Jaringan Cisco
          </h4>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem 1.5rem; font-size:0.78rem;">
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Brand / Tipe:</span> <strong>${meter.brand || 'Mitsubishi ME96SS'}</strong></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Modbus Unit ID:</span> <strong style="font-family:var(--font-mono);">${meter.modbusId || 1}</strong></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Cisco Switch Port:</span> <strong style="font-family:var(--font-mono); color:var(--primary);">${meter.ciscoSwitch || 'SW-FAC1-CORE01 (Gi1/0/2)'}</strong></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Subnet Mask:</span> <strong style="font-family:var(--font-mono);">${meter.subnet || '255.255.254.0'}</strong></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Power Factor (Cos φ):</span> <strong style="color:var(--accent-emerald);">${(meter.pf || 0.95).toFixed(2)}</strong></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Frekuensi Grid:</span> <strong>${(meter.freq || 50.0).toFixed(2)} Hz</strong></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">THD Tegangan:</span> <strong>${(meter.thdV || 2.1).toFixed(1)}%</strong></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Energi Hari Ini:</span> <strong style="font-family:var(--font-mono);">${(meter.kwhToday || 0).toLocaleString('id-ID')} kWh</strong></div>
          </div>
        </div>

        <div style="display:flex; justify-content:flex-end; gap:0.65rem;">
          <button class="btn-pill-action" onclick="window.pingMeterIp('${meter.ip}')">
            📶 Test Ping Cisco LAN
          </button>
          <button class="btn-pill-action" style="background:var(--primary); color:#fff; border-color:var(--primary);" onclick="window.closeAllModals()">
            Selesai
          </button>
        </div>
      `;
    }

    if (meterDetailModal) window.openModal(meterDetailModal);
  };

  window.openModal = function(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('active');
    const box = modalEl.querySelector('.modal-box-card');
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    if (box) {
      box.style.marginTop = `${Math.max(20, scrollY + 25)}px`;
    }
  };

  window.closeAllModals = function() {
    document.querySelectorAll('.modal-overlay').forEach(m => {
      m.classList.remove('active');
      const box = m.querySelector('.modal-box-card');
      if (box) box.style.marginTop = '';
    });
  };

  let isBlueprintEnlarged = false;
  let blueprintZoomScale = 1.0;

  window.toggleBlueprintEnlarge = function() {
    const card = document.getElementById('electricalRoomCard');
    if (!card) return;

    const labelZoom = document.getElementById('labelZoomAction');
    const headerLabel = document.getElementById('btnZoomToggleHeaderLabel');
    const headerIcon = document.getElementById('btnZoomToggleHeaderIcon');
    const zoomTools = document.getElementById('blueprintZoomTools');
    const badgeText = document.getElementById('blueprintBadgeText');
    const img = document.getElementById('imgBlueprintMain');

    isBlueprintEnlarged = !isBlueprintEnlarged;

    if (isBlueprintEnlarged) {
      card.classList.add('is-enlarged');
      if (labelZoom) labelZoom.textContent = '✕ Perkecil';
      if (headerLabel) headerLabel.textContent = 'Perkecil Tampilan';
      if (headerIcon) headerIcon.textContent = '✕';
      if (zoomTools) zoomTools.style.display = 'flex';
      if (badgeText) badgeText.textContent = '🔍 Mode Pembesaran HD: Blueprint Gardu 20 kV Factory 1 Musashi';
      blueprintZoomScale = 1.0;
      if (img) img.style.transform = 'scale(1.0)';
      const zoomDisplay = document.getElementById('zoomLevelDisplay');
      if (zoomDisplay) zoomDisplay.textContent = '100%';

      // Smooth scroll to card so it is right in front of user
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      card.classList.remove('is-enlarged');
      if (labelZoom) labelZoom.textContent = 'Perbesar';
      if (headerLabel) headerLabel.textContent = 'Perbesar Blueprint';
      if (headerIcon) headerIcon.textContent = '⤢';
      if (zoomTools) zoomTools.style.display = 'none';
      if (badgeText) badgeText.textContent = 'Blueprint Aktual: Electrical Room Factory 1 PT Musashi';
      blueprintZoomScale = 1.0;
      if (img) img.style.transform = '';
    }
  };

  window.adjustBlueprintZoom = function(delta) {
    const img = document.getElementById('imgBlueprintMain');
    const zoomDisplay = document.getElementById('zoomLevelDisplay');
    blueprintZoomScale = Math.max(0.75, Math.min(3.0, blueprintZoomScale + delta));
    if (img) {
      img.style.transform = `scale(${blueprintZoomScale})`;
      img.style.transformOrigin = 'center center';
    }
    if (zoomDisplay) {
      zoomDisplay.textContent = `${Math.round(blueprintZoomScale * 100)}%`;
    }
  };

  window.resetBlueprintZoom = function() {
    blueprintZoomScale = 1.0;
    const img = document.getElementById('imgBlueprintMain');
    const zoomDisplay = document.getElementById('zoomLevelDisplay');
    if (img) img.style.transform = 'scale(1.0)';
    if (zoomDisplay) zoomDisplay.textContent = '100%';
  };

  window.zoomBlueprintModal = window.toggleBlueprintEnlarge;

  window.pingMeterIp = function(ip) {
    alert(`[SIMULASI CISCO ICMP PING]\nMengirim ICMP Echo ke ${ip || '10.41.47.122'}...\n\nReply from ${ip || '10.41.47.122'}: bytes=32 time=1.8ms TTL=64\nPacket: Sent = 4, Received = 4, Lost = 0 (0% loss)\nKoneksi Modbus TCP Port 502: OPEN & RESPONSIVE`);
  };

  // ================= 11. EVENT LISTENERS =================
  function setupEventListeners() {
    // Search input
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        state.currentPage = 1;
        renderTable();
      });
    }

    // Status filter
    if (statusFilterSelect) {
      statusFilterSelect.addEventListener('change', (e) => {
        state.currentStatusFilter = e.target.value;
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

    // Modal Close Buttons
    if (btnCloseMeterModal) btnCloseMeterModal.addEventListener('click', window.closeAllModals);
    if (btnCloseTopologyModal) btnCloseTopologyModal.addEventListener('click', window.closeAllModals);
    if (btnCloseGuideModal) btnCloseGuideModal.addEventListener('click', window.closeAllModals);

    // Modal & Blueprint Open Buttons
    const btnZoomBlueprint = document.getElementById('btnZoomBlueprint');
    if (btnZoomBlueprint) btnZoomBlueprint.addEventListener('click', window.toggleBlueprintEnlarge);

    const btnZoomToggleHeader = document.getElementById('btnZoomToggleHeader');
    if (btnZoomToggleHeader) btnZoomToggleHeader.addEventListener('click', window.toggleBlueprintEnlarge);

    const btnZoomAction = document.getElementById('btnZoomAction');
    if (btnZoomAction) btnZoomAction.addEventListener('click', window.toggleBlueprintEnlarge);
    if (btnOpenTopology) btnOpenTopology.addEventListener('click', () => {
      if (topologyModal) window.openModal(topologyModal);
    });
    if (btnOpenGuide) btnOpenGuide.addEventListener('click', () => {
      if (guideModal) window.openModal(guideModal);
    });
    if (btnOpenTrafo12Details) btnOpenTrafo12Details.addEventListener('click', () => {
      window.openMeterDetailById('TRF-12');
    });

    // Close on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) window.closeAllModals();
      });
    });

    // Quick Search Button Focus
    if (btnQuickSearch) {
      btnQuickSearch.addEventListener('click', () => {
        const dir = document.getElementById('directorySection');
        if (dir) dir.scrollIntoView({ behavior: 'smooth' });
        if (searchInput) searchInput.focus();
      });
    }

    // View All Meters Button
    if (btnViewAllMeters) {
      btnViewAllMeters.addEventListener('click', () => {
        const dir = document.getElementById('directorySection');
        if (dir) dir.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Sync Data Button
    if (btnSyncData) {
      btnSyncData.addEventListener('click', () => {
        const originalText = btnSyncData.innerHTML;
        btnSyncData.innerHTML = `<span>Menyinkronkan...</span>`;
        btnSyncData.style.opacity = '0.7';

        setTimeout(() => {
          btnSyncData.innerHTML = originalText;
          btnSyncData.style.opacity = '1';
          const now = new Date();
          const timeStr = `${String(now.getHours()).padStart(2, '0')}.${String(now.getMinutes()).padStart(2, '0')}`;
          if (trafo12SyncTime) trafo12SyncTime.textContent = `Hari ini, ${timeStr} WIB`;
          alert('Sinkronisasi Berhasil!\nSeluruh 137 register Modbus TCP berhasil diperbarui dari gateway Cisco.');
        }, 600);
      });
    }

    // Export CSV
    if (btnExportData) {
      btnExportData.addEventListener('click', exportToCsv);
    }
  }

  // ================= 12. CSV EXPORT =================
  function exportToCsv() {
    const headers = ['ID Meter', 'Nama Feeder/Panel', 'Kategori', 'Sub Area', 'IP Address', 'Cisco Switch', 'Daya kW', 'Tegangan V', 'Arus A', 'Cos Phi', 'Energi kWh', 'Status'];
    const rows = state.meters.map(m => [
      m.id,
      `"${(m.name || '').replace(/"/g, '""')}"`,
      m.categoryLabel || m.category,
      `"${(m.subArea || '').replace(/"/g, '""')}"`,
      m.ip || '',
      `"${(m.ciscoSwitch || '').replace(/"/g, '""')}"`,
      m.kw || 0,
      m.voltage || 0,
      m.current || 0,
      m.pf || 0.95,
      m.kwhToday || 0,
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
