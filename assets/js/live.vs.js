YT.live = {
    vs1: "",
    vs2: "",
    update: function () {
        /*
        $.getJSON("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=1min&apikey=" + YT.keyManager.getKey() + "&outputsize=compact&symbol=NASDAQ:AMD", function (e) {
            console.log(e)
            var time = e["Meta Data"]["3. Last Refreshed"]
            console.log(time)
            var high = e["Time Series (1min)"][time]["2. high"]
            console.log(high)
            YT.updateManager.updateSubscribers(high, high);    
        });
        */
        $.getJSON("http://localhost:5000/stock", function (e) {
            console.log(e)
            var time = e["time"]
            console.log(time)
            var high = e["price"]
            console.log(high)
            YT.updateManager.updateSubscribers(high, high);    
            YT.updateManager.updateTime(time);
        });
    },
    timer: null,
    setVS: function(e, f) {
        this.vs1 = e;
        this.vs2 = f;
        this.start();
    },
    start: function () {
        this.stop();
        YT.query.begin();
        YT.live.update();
        this.timer = setInterval(function (e) {
            YT.live.update();
        }, 5000);
    },
    stop: function () {
        clearInterval(this.timer);
    }
};