YT.keyManager = {
	keys: [
		//'AIzaSyDsQOIl7ah_JdsS-JRwjUDAy-5-K-LQte8',
		//'AIzaSyB_S2ijgYTDPdHIXe4QR4h71uoTbzZSngc',
		//'QZ4WB75H4FO08HWR',
		//'U7S9RGT0T7PT49IQ',
		//'AXN1BC4I5GOQYVV4',
		//'NRJEFFIKLMKEVZTQ',
		//'B95DRZMDHQHN0O0G',
		//'AO1XDU2U3RGSDJW9',
		'0UYZ2F1G6AF178UZ',
		'B0LNH8A516BIABLM',
		'VTBIPOEH0ANIF336',
		'08UQD5CO97QTYOMC',
		'6R61YOV32PJXE6V2',
		'H2310ND58C4IHY31',
		'731HXI3P4PCVSWOI',
		'EAQRU2ZLV61NS7AP',
		'8VF6TY3SED5U65AO',
		'6D871Y88O3EGZG6G',
		'KMO4C0JZ8R8YCVOY',
		'WTNRQGA8WSUXLV1G'
	],
	keyIndex: 0,
	getKey: function() {
		/*
		if (this.keyIndex < this.keys.length-1)
		{
			this.keyIndex=this.keyIndex+1;
		}
		else
		{
			this.keyIndex=0;
		}
		//this.keyIndex = (this.keyIndex + 1) % this.keys.length;
		*/
		shuffleKeys();
		console.log(keys[0]);
		return this.keys[0];
	},
	shuffleKeys: function() {
		this.keys.shuffle();
	}
};
