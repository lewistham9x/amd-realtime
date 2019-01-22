var baseURL = 'localhost:8080/';
if (typeof isEmbed == 'undefined') isEmbed = 0;
if (typeof isCustomPage == 'undefined') isCustomPage = 0;
Array.prototype.shuffle = function() {
    var i = this.length,
        j,
        temp;
    if (i == 0) return this;
    while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
};
var YT = {};
