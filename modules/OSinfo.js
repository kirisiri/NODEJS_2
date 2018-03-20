
var os = require('os');
var OStime = require('./OStime');
var colors = require('colors');

function getOSinfo() {
			    var type = os.type();
				if(type === 'Darwin') {
				    type = 'OSX';
				} else if(type === 'Windows_NT') {
				    type = 'Windows';
				}
				var release = os.release();
				var cpu = os.cpus()[0].model;
				//var uptime = os.uptime();
				var userInfo = os.userInfo();
				console.log('System:'.zebra, type);
				console.log('Release:'.america, release);
				console.log('CPU model:'.cyan, cpu);
				OStime.czas();
			//	console.log ('Uptime: ~', (uptime / 60).toFixed(0), 'min');
				console.log('User name:'.magenta, userInfo.username);
				console.log('Home dir:'.trap, userInfo.homedir);
}

exports.print = getOSinfo;