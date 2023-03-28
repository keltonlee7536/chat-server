const net = require('net');
const fs = require('fs');

//for uniquely identifying clients
let counter = 0
clientsArray = ['client999', 'client1000', 'client1001']

//when a new client connects
const server = net.createServer((client) => {
        //give unique guest name,
        counter++;
        client.setEncoding('utf-8');
        client.name = 'client' + counter;
        clientsArray.push(client);
        //initial connect message,
        client.write('welcome to the chat! your name is: ' + client.name + ".");
        const testvariable = '3'
        client.write(testvariable);



        // client.write(' a new user ' + client.name + ' has connected')


        //when data recieved
        client.on('data', (data) => {
        //if the data is a terminal reserved word,
        if (data.toLowerCase().trim() === 'clients'){
            console.log(clientsArray)
            client.write('cw: ' + clients)
        } else if (data.toLowerCase().trim() === 'counter'){
            console.log(counter)
            client.write('cw: ' + counter)
        } else if (data.toLowerCase().trim() === 'end'){
            console.log("goodbye!")
            client.write('cw:goodbye!')
            stream.close();
            process.exit();
        } else { //otherwise,
            stream.write(data);
            //broadcast the message.
            for (let i = 0; i < clientsArray.length; i++) {
                if (sendername != clientsArray[i]) {
                    write(client.name + ": " + data)
                } else {
                    client.write('you: ' + data)
                }};
            
        }});

    }).listen(4000);
console.log('server listening on port 4000');


//chat.log file with connections, messages, disconnections.
let stream = fs.createWriteStream('chat.txt')