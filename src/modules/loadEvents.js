const path = require('path');
const fs = require('fs');

module.exports = (client) =>{
    const dir = path.join(__dirname, '/../events/');

    fs.readdir( dir, (err, files) => {
        if (err) return console.error(err);

        files.forEach(file => {
            const event = require(`${dir}/${file}`);
            let eventName = file.split(".")[0];
            client.on(eventName, event.bind(null, client));
            console.log(`[EVT]: Loaded the discord.js "${eventName}"`);
        });
    });
 
}