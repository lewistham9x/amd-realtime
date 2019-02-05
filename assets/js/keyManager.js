YT.keyManager = {
	keys: [
		//'AIzaSyDsQOIl7ah_JdsS-JRwjUDAy-5-K-LQte8',
		//'AIzaSyB_S2ijgYTDPdHIXe4QR4h71uoTbzZSngc',
		'AIzaSyCkaSk_gQ45oofaBLS8M4_AKw7mAbsjdXk',
		'AIzaSyCnSWC09vE52pHiOIHdTzo1szsiL5QSAI4',
		'AIzaSyDevxvL7yZD7eoshlFoYl8R7iwSeLq1Xos',
		'AIzaSyC1K_FIIXFQ7rJvDDsKU7Kr6buUOs_-9pw'
	],
	keyIndex: 0,
	getKey: function() {
		this.keyIndex = (this.keyIndex + 1) % this.keys.length;
		return this.keys[this.keyIndex];
	},
	shuffleKeys: function() {
		this.keys.shuffle();
	}
};
