YT.query = {
    getCover: function () {
        $.getJSON("https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&id=" + encodeURIComponent(YT.live.vs1) + "," + encodeURIComponent(YT.live.vs2) + "&key=" + YT.keyManager.getKey(), function (e) {
            if (e.items[0].id == YT.live.vs1) {
                YT.updateManager.updateCover(e.items[0].brandingSettings.image.bannerImageUrl, e.items[1].brandingSettings.image.bannerImageUrl);
            } else {
                YT.updateManager.updateCover(e.items[1].brandingSettings.image.bannerImageUrl, e.items[0].brandingSettings.image.bannerImageUrl);
            }
        });
    },
    begin: function () {
        $.getJSON("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=1min&apikey=" + YT.keyManager.getKey() + "&outputsize=compact&symbol=NASDAQ:AMD", function (e) {
            
            /*
            if (e.items[0].id == YT.live.vs1) {
                YT.updateManager.updateName(e.items[0].snippet.title, e.items[1].snippet.title);
                YT.updateManager.updateProfile(e.items[0].snippet.thumbnails.high.url ? e.items[0].snippet.thumbnails.high.url : e.items[0].snippet.thumbnails.default.url, e.items[1].snippet.thumbnails.high.url ? e.items[1].snippet.thumbnails.high.url : e.items[1].snippet.thumbnails.default.url);
            }
            */
            YT.updateManager.updateName(e["Meta Data"]["2. Symbol"])
            console.log(e["Meta Data"]["2. Symbol"])

            //hardcode update ayymd
            YT.updateManager.updateProfile("https://styles.redditmedia.com/t5_38z4q/styles/communityIcon_nchjpk8l4pu01.png");
        });
    },
    bind: function () {

    }
};