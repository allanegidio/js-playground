// Require some modules of Node to know about OS and DNS.
const dns = require("dns");
const os = require("os");

let hostname = os.hostname();

dns.lookup(hostname, (err, result) => {
	console.log(result);
});