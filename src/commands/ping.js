const Discord = require("discord.js")

module.exports = {
    name: "ping",
    usage: "!ping",

    run: async(client, message, args) => {
        
        let embedColor = "RANDOM";

        let botPing = client.ws.ping;

        let firstEmbed = new Discord.MessageEmbed()
        .setColor(embedColor)
        .setDescription(`**\`🏓\` Calculando ping.**`);
        
        let secondEmbed = new Discord.MessageEmbed()
        .setColor(embedColor)
        .setDescription(`**O meu ping está em \`${botPing} ms\`.**`);

        let embed = await message.reply({ content: `${message.author}`, embeds: [firstEmbed] }).then(msg => {
            setTimeout( () => {
                msg.edit({ content: `${message.author}`, embeds: [secondEmbed] })
            }, 2000)
        })
    }
}