var os = require('os');

function getFormatTime() {
	
	var uptime = os.uptime();

	var h = Math.floor( uptime/3600 );
	var m = Math.floor(( uptime - (h*3600))/60 );
	var s = ( uptime - ( h*3600 + m*60 ));

	console.log('Last OS session running since: h= '+ h + ', ' + 'min= ' + m + ', ' + 'sec= ' + s );
}

exports.czas = getFormatTime;