const Discord = require("discord.js"); 
const client = new Discord.Client({intents: 32767});
const config = require("../config.json"); 

const color = require("./assets/colors.js");
const banner = require("./assets/banner.js")
const cfonts = require("cfonts");

colorful = (color, string, reset = '\x1b[5m') => color + string + reset;

client.config = config;
client.cooldowns = new Discord.Collection();

const loadEvents = require('./modules/loadEvents');
const loadCommands = require('./modules/loadCommands');
const loadPlayer = require('./modules/loadPlayer');

client.login(config.token);

client.once('ready', async () => {
    console.log(colorful(color.branco, "\n=================================")),
    console.log(colorful(color.preto, "✅ - Moonrider 🌑🩸",(colorful(color.blink, color.verde, " Online - ✅")))),
    console.log(colorful(color.branco, "================================="))

    console.log(colorful(color.bright, color.vermelho, `\n⊱ ============ ⊱ [LOGS] ⊰ ============ ⊰`)),
    console.log(colorful(color.amarelo, `[LOGS] ${client.user.tag} Está online! `)),
    console.log(colorful(color.verde, `[LOGS] Estou em ${client.guilds.cache.size} servidores.`)), 
    console.log(colorful(color.azul, `[LOGS] Cuidando de ${client.users.cache.size} membros.`))

})

loadEvents(client);  
loadCommands(client);
loadPlayer(client);