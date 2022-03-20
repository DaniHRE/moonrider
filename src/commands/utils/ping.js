const Discord = require("discord.js")

module.exports = {
    name: "ping",
    usage: "!ping",

    run: async(client, message, args) => {
        
        let embedColor = "RANDOM";

        let firstEmbed = new Discord.MessageEmbed()
        .setColor(embedColor)
        .setDescription(`**\`🏓\` Calculando ping. \`🏓\`**`);

        let embed = await message.reply({ content: `${message.author}`, embeds: [firstEmbed] }).then(msg => {
            setTimeout( () => {
                let botPing = client.ws.ping;
                let serverPing = msg.createdTimestamp - message.createdTimestamp;
                        
                let secondEmbed = new Discord.MessageEmbed()
                    .setColor(embedColor)
                    .setDescription(`**📶 Server Latency \`${serverPing} ms\` \n**
                                    **💻 API Latency \`${botPing} ms\`**`);
                msg.edit({ content: `${message.author}`, embeds: [secondEmbed] })
            }, 2000)
        })
    }
}