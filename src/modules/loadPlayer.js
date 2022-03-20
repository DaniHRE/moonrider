const path = require('path');
const fs = require('fs');

module.exports = (client) =>{
    const dir = path.join(__dirname, '/../player/');

    fs.readdir( dir, (err, files) => {
        if (err) return console.error(err);

        files.forEach(file => {
            const event = require(`${dir}/${file}`);
            let playerName = file.split(".")[0];
            player.on(playerName, event.bind(null, client));
            console.log(`[PLY]: Loaded the discord-player event: "${playerName}"`);
        });
    });
 
}