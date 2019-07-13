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
        YT.updateManager.updateName("NASDAQ:AMD","NASDAQ:INTC")

        //hardcode update ayymd
        YT.updateManager.updateProfile("https://styles.redditmedia.com/t5_38z4q/styles/communityIcon_nchjpk8l4pu01.png","https://b.thumbs.redditmedia.com/yMdDE4HXzG9j9TkKwwuLHQTbfkAiUO_jVXhy5jV9BMM.png");
    },
    bind: function () {

    }
};