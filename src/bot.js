const Discord = require("discord.js"); 
const client = new Discord.Client({intents: 32767});
const config = require("../config.json"); 

client.config = config;
client.cooldowns = new Discord.Collection();

const loadEvents = require('./modules/loadEvents');
const loadCommands = require('./modules/loadCommands');
const loadPlayer = require('./modules/loadPlayer');

client.login(config.token); 

client.once('ready', async () => {
    console.log("=================================")
    console.log("✅ - Moonrider 🌑🩸 Online - ✅")
    console.log("=================================")
})

loadEvents(client);  
loadCommands(client);
loadPlayer(client);