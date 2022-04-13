require('dotenv').config();
const Discord = require("discord.js");
const { Client } = require("discord.js");
const { Player } = require("discord-player");
const config = require("../config.js");

const color = require("./assets/colors.js");
const banner = require("./assets/banner.js")
const cfonts = require("cfonts");

colorful = (color, string, reset = '\u001b[0m') => color + string + reset;

global.client = new Discord.Client({ intents: 32767 });
client.config = config;
client.cooldowns = new Discord.Collection();

global.player = new Player(client, config.opt.discordPlayer);

const loadEvents = require('./modules/loadEvents');
const loadCommands = require('./modules/loadCommands');
const trackStarted = require('./modules/trackStarted');

global.player.on("trackStart", trackStarted);

client.login(process.env.TOKEN);

printStatus = () => {
    console.log(colorful(color.branco, "\n=================================")),
        console.log(colorful(color.bright, "✅ - Moonrider 🌑🩸", (colorful(color.verde, " Online - ✅")))),
        console.log(colorful(color.branco, "=================================")),
        console.log(colorful(color.vermelho, `\n⊱ ============ ⊱ [LOGS] ⊰ ============ ⊰`)),
        console.log(colorful(color.amarelo, `[LOGS] ${client.user.tag} Está online! `)),
        console.log(colorful(color.verde, `[LOGS] Estou em ${client.guilds.cache.size} servidores.`)),
        console.log(colorful(color.azul, `[LOGS] Cuidando de ${client.users.cache.size} membros.`))
}

client.once('ready', async() => {
    client.user.setActivity(client.config.app.playing);
    printStatus();
})

loadEvents(client);
loadCommands(client);