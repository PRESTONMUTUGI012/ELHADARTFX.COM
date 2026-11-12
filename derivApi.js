class DerivAPIConnector {
    constructor(appId) {
        this.appId = appId;
        this.ws = null;
        this.isConnected = false;
        this.subscribers = {};
        this.multiSubscribers = {};
    }

    connect() {
        return new Promise((resolve, reject) => {
            const endpoint = `wss://ws.derivws.com/websockets/v3?app_id=${this.appId}`;
            this.ws = new WebSocket(endpoint);
            
            this.ws.onopen = () => {
                this.isConnected = true;
                resolve(true);
            };

            this.ws.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data);
                    if (data.msg_type === 'tick' && data.tick) {
                        const sym = data.tick.symbol;
                        // Single asset subscriber
                        if (this.subscribers[sym]) {
                            this.subscribers[sym](data.tick);
                        }
                        // Simultaneous multi-asset subscribers
                        if (this.multiSubscribers[sym]) {
                            this.multiSubscribers[sym](data.tick);
                        }
                    }
                } catch (e) {
                    console.error("Parse error:", e);
                }
            };

            this.ws.onerror = (err) => {
                console.error("WebSocket error:", err);
                reject(err);
            };

            this.ws.onclose = () => {
                this.isConnected = false;
                setTimeout(() => this.connect(), 2000);
            };
        });
    }

    subscribeTicks(symbol, callback) {
        this.subscribers = { [symbol]: callback }; // Focused asset
        if (this.ws && this.isConnected) {
            this.ws.send(JSON.stringify({ forget_all: 'ticks' }));
            this.ws.send(JSON.stringify({ ticks: symbol, subscribe: 1 }));
        }
    }

    addSimultaneousSubscription(symbol, callback) {
        this.multiSubscribers[symbol] = callback;
        if (this.ws && this.isConnected) {
            this.ws.send(JSON.stringify({ ticks: symbol, subscribe: 1 }));
        }
    }
}
