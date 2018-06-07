var localtunnel = require('localtunnel'); //you need to install localtunnel on your machine and require it

var subdomain = "turtatoworld"; //subdomain for main domain of localtunnel.me

var tunnel = localtunnel(3936, {subdomain: subdomain},function(err, tunnel) {
    //3936 is port number
    // the assigned public url for your tunnel
    // i.e. https://turtatoworld.localtunnel.me
    console.log(tunnel.url); // write your public url on terminal window
});

tunnel.on('close', function() {
    // tunnels are closed
});
