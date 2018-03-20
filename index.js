var OSinfo = require('./modules/OSinfo');
//var OStime = require('../modules/OStime');
var colors = require('colors');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() { 
	var input = process.stdin.read();
	if(input !== null) {
		var instruction = input.toString().trim();
		switch(instruction) {
			case  '/exit': 
				process.stdout.write('Quitting app!\n'.rainbow);
				process.exit();	
				break;
			case  '/node':
				console.log(`Uzywasz wersji Node.js: ${process.version}\n`);
				break;
			case '/language':
				console.log('A Twoj jezyk systemowy to: ' + process.env.LANG);
				break;
			case '/getOSinfo':
			    process.stdout.write('Tutaj będzie info o systemie!\n');	
				OSinfo.print();
				break;
		//	case '/czas':
		//		OStime.czas();
		//		break;
			default:
				process.stderr.write('Zla komenda.');
				break;
			};	
	}
});


/*function getOSinfo() {
			    var type = os.type();
				if(type === 'Darwin') {
				    type = 'OSX';
				} else if(type === 'Windows_NT') {
				    type = 'Windows';
				}
				var release = os.release();
				var cpu = os.cpus()[0].model;
				var uptime = os.uptime();
				var userInfo = os.userInfo();
				console.log('System:', type);
				console.log('Release:', release);
				console.log('CPU model:', cpu);
				console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
				console.log('User name:', userInfo.username);
				console.log('Home dir:', userInfo.homedir);
} */