const net = require('net');

const client = net.createConnection({port: 4000}, () => {
    console.log('client connected to port 4000');
});

//recieve server messages
client.setEncoding('utf-8');
client.on('data', (data) => {
      console.log(data);
})

//send client message to server
process.stdin.pipe(client);