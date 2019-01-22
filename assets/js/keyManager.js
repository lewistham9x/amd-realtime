YT.keyManager = {
	keys: [
		'AIzaSyDsQOIl7ah_JdsS-JRwjUDAy-5-K-LQte8',
		'AIzaSyB_S2ijgYTDPdHIXe4QR4h71uoTbzZSngc'
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
