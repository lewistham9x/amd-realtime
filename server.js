const path = require('path');
const express = require('express');
const app = express();
const puppeteer = require('puppeteer');

// Heroku automagically gives us SSL
// Lets write some middleware to redirect us
let env = process.env.NODE_ENV || 'development';

let forceSSL = (req, res, next) => {
	if (req.headers['x-forwarded-proto'] !== 'https') {
		return res.redirect(['https://', req.get('Host'), req.url].join(''));
	}
	return next();
};

if (env === 'production') {
	app.use(forceSSL);
}


// Serve static files
app.use(express.static(__dirname));

// Send root requests to index.html
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});


//cache stock price
var stocks = {time: "420pm"};
start();

function start(){
	  this.timer = setInterval(function (e) {
	    getStock("amd");
	    getStock("intc");
	}, 5000);
}

// Send stock requests 
app.get('/stock', function(req, res) {
	  res.json(stocks);
})

function getStock(symbol){
		(async () => {
	  const browser = await puppeteer.launch({args: ['--no-sandbox','--disable-setuid-sandbox'], headless: true}); //heroku args
	  const page = await browser.newPage();

	  process.on("unhandledRejection", (reason, p) => {
		  console.error("Unhandled Rejection at: Promise", p, "reason:", reason);
		  browser.close();
		});

		page.setViewport({width:1366,height:768});
		//await sleep(1000);

		try{	  
			await page.goto('https://www.nasdaq.com/symbol/'+symbol+'/time-sales', {waitUntil: 'domcontentloaded', timeout: 0});
		}
		catch(error) {
			console.log(error)
			browser.close()
		}

	  stocks[symbol] = await page.evaluate(() => {
	    return parseFloat(document.getElementById('AfterHoursPagingContents_Table').getElementsByTagName('tbody')[0].getElementsByTagName('tr')[0].getElementsByTagName('td')[1].textContent.substring(2));
	  });

	  stocks.time = await page.evaluate(() => {
	    return document.getElementById('AfterHoursPagingContents_Table').getElementsByTagName('tbody')[0].getElementsByTagName('tr')[0].getElementsByTagName('td')[0].textContent;
	  });


	  console.log(stocks);	  

	  page.close();

	  await browser.close();
	})();
}

// default Heroku port
app.listen(process.env.PORT || 5000);
