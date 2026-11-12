const PARTNER_APP_ID = "34UGhpx0qrXHqpfKHAkGH";
const AFFILIATE_TOKEN = "3A2CFHPG722B";

const marketSymbols = {
    volatility_1s: [
        { symbol: '1HZ10V', name: 'Volatility 10 (1s) Index' },
        { symbol: '1HZ25V', name: 'Volatility 25 (1s) Index' },
        { symbol: '1HZ50V', name: 'Volatility 50 (1s) Index' },
        { symbol: '1HZ75V', name: 'Volatility 75 (1s) Index' },
        { symbol: '1HZ100V', name: 'Volatility 100 (1s) Index' }
    ],
    accumulators: [
        { symbol: 'ACCU10', name: 'Accumulator 10 Index' },
        { symbol: 'ACCU25', name: 'Accumulator 25 Index' },
        { symbol: 'ACCU50', name: 'Accumulator 50 Index' },
        { symbol: 'ACCU75', name: 'Accumulator 75 Index' },
        { symbol: 'ACCU100', name: 'Accumulator 100 Index' }
    ],
    synthetic: [
        { symbol: 'R_100', name: 'Volatility 100 Index' },
        { symbol: 'R_75', name: 'Volatility 75 Index' },
        { symbol: 'R_50', name: 'Volatility 50 Index' },
        { symbol: 'R_25', name: 'Volatility 25 Index' },
        { symbol: 'R_10', name: 'Volatility 10 Index' },
        { symbol: 'JUMP10', name: 'Jump 10 Index' },
        { symbol: 'JUMP25', name: 'Jump 25 Index' },
        { symbol: 'JUMP50', name: 'Jump 50 Index' },
        { symbol: 'JUMP75', name: 'Jump 75 Index' },
        { symbol: 'JUMP100', name: 'Jump 100 Index' }
    ],
    boom_crash: [
        { symbol: 'BOOM1000', name: 'Boom 1000 Index' },
        { symbol: 'BOOM500', name: 'Boom 500 Index' },
        { symbol: 'CRASH1000', name: 'Crash 1000 Index' },
        { symbol: 'CRASH500', name: 'Crash 500 Index' },
        { symbol: 'STEP', name: 'Step Index' }
    ],
    forex: [
        { symbol: 'frxEURUSD', name: 'EUR/USD (Euro/Dollar)' },
        { symbol: 'frxGBPUSD', name: 'GBP/USD (Pound/Dollar)' },
        { symbol: 'frxUSDJPY', name: 'USD/JPY (Dollar/Yen)' },
        { symbol: 'frxAUDUSD', name: 'AUD/USD (Aussie/Dollar)' },
        { symbol: 'frxUSDCAD', name: 'USD/CAD (Dollar/CAD)' },
        { symbol: 'frxNZDUSD', name: 'NZD/USD (Kiwi/Dollar)' },
        { symbol: 'frxEURGBP', name: 'EUR/GBP (Euro/Pound)' },
        { symbol: 'frxGBPJPY', name: 'GBP/JPY (Pound/Yen)' }
    ],
    stocks: [
        { symbol: 'TSLA', name: 'Tesla Inc (TSLA)' },
        { symbol: 'NVDA', name: 'NVIDIA Corp (NVDA)' },
        { symbol: 'AAPL', name: 'Apple Inc (AAPL)' },
        { symbol: 'DJI', name: 'Wall Street 30 Index' },
        { symbol: 'SPC', name: 'S&P 500 Index' },
        { symbol: 'NDX', name: 'US Tech 100' }
    ],
    crypto: [
        { symbol: 'cryBTCUSD', name: 'BTC/USD (Bitcoin)' },
        { symbol: 'cryETHUSD', name: 'ETH/USD (Ethereum)' },
        { symbol: 'cryXRPUSD', name: 'XRP/USD (Ripple)' },
        { symbol: 'crySOLUSD', name: 'SOL/USD (Solana)' }
    ],
    commodities: [
        { symbol: 'frxXAUUSD', name: 'Spot Gold (XAU/USD)' },
        { symbol: 'frxXAGUSD', name: 'Spot Silver (XAG/USD)' },
        { symbol: 'frxXBRUSD', name: 'Brent Crude Oil' }
    ]
};

const exchangeRates = { KES: 129.0, UGX: 3750.0, TZS: 2600.0, ETB: 120.5, EUR: 0.92, GBP: 0.79, JPY: 155.0 };

const monthlyEconomicNews = [
    { day: "1st Wednesday", time: "16:00 EAT", event: "US ADP Non-Farm Employment Change", currency: "USD", impact: "HIGH", reaction: "Sharp USD expansion on beats; spike volatility across XAU/USD & EUR/USD.", direction: "Bullish USD / Bearish Gold", boat: "Boat 4: High-Winrate Trend Scalper", exit: "Exit after 5 Ticks" },
    { day: "1st Friday", time: "15:30 EAT", event: "US Non-Farm Payrolls (NFP) & Unemployment Rate", currency: "USD", impact: "HIGH", reaction: "Massive liquidity sweep & trend expansion across all major FX and Vol indices.", direction: "Breakout Expansion", boat: "Boat 3: Digit Recovery Hedging", exit: "Exit after 6 Ticks" },
    { day: "2nd Thursday", time: "15:15 EAT", event: "ECB Monetary Policy & Interest Rate Decision", currency: "EUR", impact: "HIGH", reaction: "Sharp retracement followed by aggressive trend continuation on EUR pairs.", direction: "Directional EUR Sweep", boat: "Boat 4: High-Winrate Trend Scalper", exit: "Exit after 5 Runs" },
    { day: "3rd Wednesday", time: "15:30 EAT", event: "US Consumer Price Index (CPI m/m & y/y)", currency: "USD", impact: "HIGH", reaction: "Explosive inflation reaction; instant reversal candles on XAU/USD.", direction: "High Volatility Reversal", boat: "Boat 3: Digit Recovery Hedging", exit: "Exit after 6 Ticks" },
    { day: "3rd Wednesday", time: "21:00 EAT", event: "FOMC Federal Funds Rate & Press Conference", currency: "USD", impact: "HIGH", reaction: "Unmatched market-wide volume; whipsaw liquidity traps before trend ignition.", direction: "Trend Continuation", boat: "Boat 4: High-Winrate Trend Scalper", exit: "Exit after 5 Runs" }
];

let remainingSeconds = 180;
function runCoreLoadingSequence() {
    const timerDisplay = document.getElementById('loading-timer-display');
    const progressBar = document.getElementById('core-progress-bar');
    const splashScreen = document.getElementById('splash-screen');

    const interval = setInterval(() => {
        remainingSeconds--;
        const mins = Math.floor(remainingSeconds / 60).toString().padStart(2, '0');
        const secs = (remainingSeconds % 60).toString().padStart(2, '0');
        if (timerDisplay) timerDisplay.innerText = `${mins}:${secs}`;
        if (progressBar) progressBar.style.width = `${((180 - remainingSeconds) / 180) * 100}%`;

        if (remainingSeconds <= 0) {
            clearInterval(interval);
            if (splashScreen) { splashScreen.style.opacity = '0'; setTimeout(() => splashScreen.remove(), 600); }
            initializeLiveTerminal();
        }
    }, 1000);
}

function updateAssetDropdown(category) {
    const assetSelector = document.getElementById('asset-selector');
    if (!assetSelector) return;
    assetSelector.innerHTML = '';
    (marketSymbols[category] || marketSymbols.volatility_1s).forEach(item => {
        const opt = document.createElement('option');
        opt.value = item.symbol;
        opt.innerText = item.name;
        assetSelector.appendChild(opt);
    });
}

function setupCurrencyConverter() {
    const amtInput = document.getElementById('convert-amount');
    const curSelect = document.getElementById('target-currency');
    const outEl = document.getElementById('converted-output');
    function calc() {
        const val = (parseFloat(amtInput.value) || 0) * (exchangeRates[curSelect.value] || 1);
        outEl.innerText = `${val.toLocaleString(undefined, {minimumFractionDigits: 2})} ${curSelect.value}`;
    }
    if (amtInput && curSelect) { amtInput.addEventListener('input', calc); curSelect.addEventListener('change', calc); calc(); }
}

function switchAccountMode(mode) {
    const b1 = document.getElementById('btn-mode-demo'), b2 = document.getElementById('btn-mode-real');
    if (mode === 'demo') {
        b1.className = 'px-3 py-1 rounded-lg font-bold bg-emerald-600 text-white transition';
        b2.className = 'px-3 py-1 rounded-lg font-semibold text-slate-400 hover:text-white transition';
    } else {
        b2.className = 'px-3 py-1 rounded-lg font-bold bg-emerald-600 text-white transition';
        b1.className = 'px-3 py-1 rounded-lg font-semibold text-slate-400 hover:text-white transition';
    }
}

function executeActionSignal() {
    triggerElhadartProfitAlert("[A+ MULTI-MARKET EXECUTION]", 45.00);
}

function resetDigitScanner() {
    assetDigitStats = {};
    alert("Separated & Simultaneous Digit Matrix reset successfully.");
}

function loginWithDeriv() {
    window.location.href = `https://oauth.deriv.com/oauth2/authorize?app_id=${PARTNER_APP_ID}&affiliate_token=${AFFILIATE_TOKEN}`;
}
function signupWithDeriv() {
    window.open(`https://hub.deriv.com/tradershub/signup?t=${AFFILIATE_TOKEN}`, '_blank');
}

function populateMonthlyNewsCalendar() {
    const container = document.getElementById('news-calendar-widget');
    if (!container) return;
    container.innerHTML = '';
    monthlyEconomicNews.forEach(item => {
        const div = document.createElement('div');
        div.className = 'bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 space-y-1';
        div.innerHTML = `
            <div class="flex justify-between font-bold text-fxgreen">
                <span>📅 ${item.day} @ ${item.time} (${item.currency})</span>
                <span class="text-amber-400 uppercase">[${item.impact}]</span>
            </div>
            <div class="text-white font-semibold">${item.event}</div>
            <div class="text-slate-400 text-[10px]">💡 Reaction: ${item.reaction}</div>
            <div class="text-gold text-[10px]">⚡ Direction: ${item.direction} | Use <strong>${item.boat}</strong> (${item.exit})</div>
        `;
        container.appendChild(div);
    });
}

// COMPREHENSIVE SEPARATE & SIMULTANEOUS MULTIMARKET ENGINE
let assetDigitStats = {}; // Stores counts for each asset separately
let totalTicksProcessed = 0;
let prevQuote = null;

function computeComprehensiveAnalytics(tick) {
    totalTicksProcessed++;
    document.getElementById('tick-buffer-count').innerText = `${totalTicksProcessed} Ticks`;
    document.getElementById('live-quote-display').innerText = tick.quote.toFixed(4);

    const assetSymbol = tick.symbol;
    const priceStr = tick.quote.toFixed(4);
    const lastDigit = parseInt(priceStr.slice(-1));

    // Initialize stats for this asset if not present
    if (!assetDigitStats[assetSymbol]) {
        assetDigitStats[assetSymbol] = { counts: [0,0,0,0,0,0,0,0,0,0], total: 0 };
    }
    assetDigitStats[assetSymbol].counts[lastDigit]++;
    assetDigitStats[assetSymbol].total++;

    const currentSelectedAsset = document.getElementById('asset-selector').value || '1HZ10V';
    
    // If tick belongs to the currently focused asset, update UI Matrix
    if (assetSymbol === currentSelectedAsset) {
        document.getElementById('digit-analyzer-title').innerText = `Separated Digit Analysis (${assetSymbol})`;
        document.getElementById('last-digit-display').innerText = `Last Digit: ${lastDigit}`;
        document.getElementById('digit-entry-price').innerText = tick.quote.toFixed(4);

        const stats = assetDigitStats[assetSymbol];
        let mostDormant = 0, minHits = Infinity;
        for (let i = 0; i < 10; i++) {
            const pct = stats.total > 0 ? ((stats.counts[i] / stats.total) * 100).toFixed(1) : 0.0;
            document.getElementById(`freq-${i}`).innerText = `${pct}%`;
            if (stats.counts[i] < minHits) { minHits = stats.counts[i]; mostDormant = i; }
        }

        const evenCount = stats.counts[0] + stats.counts[2] + stats.counts[4] + stats.counts[6] + stats.counts[8];
        const evenPct = stats.total > 0 ? ((evenCount / stats.total) * 100).toFixed(1) : 50;
        document.getElementById('even-odd-recommendation').innerText = `${evenPct}% Even vs ${100 - evenPct}% Odd`;

        const underCount = stats.counts[0] + stats.counts[1] + stats.counts[2] + stats.counts[3] + stats.counts[4];
        const underPct = stats.total > 0 ? ((underCount / stats.total) * 100).toFixed(1) : 50;
        const overUnderText = underPct > 55 ? `UNDER 6 (~${underPct}%)` : underPct < 45 ? `OVER 3 (~${(100 - underPct).toFixed(1)}%)` : `Balanced Over/Under`;
        document.getElementById('over-under-target').innerText = overUnderText;

        document.getElementById('match-differ-target').innerText = `DIFFER ${mostDormant} (Dormant ~${minHits} hits)`;

        // A+ Momentum Indicator
        let riseFallText = "A+ NEUTRAL CONSOLIDATION";
        let boatName = "Boat 3: Digit Recovery Hedging";
        let exitRuns = "Exit after 6 Ticks";

        if (prevQuote !== null) {
            if (tick.quote > prevQuote) {
                riseFallText = "🟢 A+ RISE MOMENTUM (BOS Bullish)";
                boatName = "Boat 4: High-Winrate Trend Scalper";
                exitRuns = "Exit after 5 Runs";
            } else if (tick.quote < prevQuote) {
                riseFallText = "🔴 A+ FALL MOMENTUM (BOS Bearish)";
                boatName = "Boat 4: High-Winrate Trend Scalper";
                exitRuns = "Exit after 5 Runs";
            }
        }
        prevQuote = tick.quote;

        document.getElementById('rise-fall-signal').innerText = riseFallText;
        document.getElementById('prescribed-boat').innerText = boatName;
        document.getElementById('prescribed-runs').innerText = exitRuns;
    }

    // Simultaneous Feed log update
    const scannerFeed = document.getElementById('pro-scanner-feed');
    if (scannerFeed && Math.random() < 0.20) {
        const timestamp = new Date().toLocaleTimeString();
        const feedItem = document.createElement('div');
        feedItem.innerHTML = `<span class="text-slate-500">[${timestamp}]</span> <span class="text-fxgreen font-bold">${assetSymbol}</span> | Digit: <span class="text-gold">${lastDigit}</span> | Quote: ${tick.quote.toFixed(4)}`;
        scannerFeed.prepend(feedItem);
        if (scannerFeed.children.length > 6) scannerFeed.removeChild(scannerFeed.lastChild);
    }
}

function updateKillzones() {
    const now = new Date();
    const eatTime = new Date(now.getTime() + (3 * 60 * 60 * 1000));
    const hrs = eatTime.getUTCHours();
    const mins = eatTime.getUTCMinutes();
    const secs = eatTime.getUTCSeconds();

    const timerEl = document.getElementById('killzone-timer');
    if (timerEl) timerEl.innerText = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')} EAT`;

    let sessionName = "24/7 Multimarket Session";
    let currencyBias = "Multi-Market Volatility Stable";

    if (hrs >= 10 && hrs < 15) { 
        sessionName = "🔥 London Open Killzone"; 
        currencyBias = "High Expansion - Trade USD/EUR breakouts"; 
    } else if (hrs >= 15 && hrs < 19) { 
        sessionName = "⚡ London / New York Overlap"; 
        currencyBias = "High Volatility Sweep Window - A+ BOS Active"; 
    }

    document.getElementById('active-session-name').innerText = sessionName;
    document.getElementById('active-currency-bias').innerText = currencyBias;
}

function initializeLiveTerminal() {
    updateAssetDropdown('volatility_1s');
    setupCurrencyConverter();
    populateMonthlyNewsCalendar();

    const categorySelect = document.getElementById('market-category');
    const assetSelector = document.getElementById('asset-selector');

    if (categorySelect) {
        categorySelect.addEventListener('change', (e) => {
            updateAssetDropdown(e.target.value);
            const newAsset = assetSelector.value;
            if (window.derivApiInstance) window.derivApiInstance.subscribeTicks(newAsset, computeComprehensiveAnalytics);
        });
    }

    const derivApi = new DerivAPIConnector(PARTNER_APP_ID);
    window.derivApiInstance = derivApi;

    if (assetSelector) {
        assetSelector.addEventListener('change', (e) => {
            derivApi.subscribeTicks(e.target.value, computeComprehensiveAnalytics);
        });
    }

    derivApi.connect().then(() => {
        const initialAsset = assetSelector ? assetSelector.value : '1HZ10V';
        derivApi.subscribeTicks(initialAsset, computeComprehensiveAnalytics);

        // Simultaneously subscribe to key assets across categories for simultaneous multi-market analysis
        const simultaneousSymbols = ['1HZ10V', 'R_100', 'frxEURUSD', 'frxXAUUSD', 'BOOM1000'];
        simultaneousSymbols.forEach(sym => {
            if (sym !== initialAsset) {
                derivApi.addSimultaneousSubscription(sym, computeComprehensiveAnalytics);
            }
        });
    }).catch((err) => {
        console.error("Connection failed, fallback simulator active", err);
        setInterval(() => { computeComprehensiveAnalytics({ quote: 6450.2548 + (Math.random() * 2 - 1), symbol: '1HZ10V' }); }, 1000);
    });

    setInterval(updateKillzones, 1000);
}

window.addEventListener('DOMContentLoaded', () => { runCoreLoadingSequence(); });
