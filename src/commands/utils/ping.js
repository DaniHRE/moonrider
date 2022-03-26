const Discord = require("discord.js")

module.exports = {
    name: "ping",
    usage: "!ping",

    run: async(client, message, args) => {
        
        let embedColor = "RANDOM";

        let firstEmbed = new Discord.MessageEmbed()
        .setColor(embedColor)
        .setDescription(`** 👨‍💻 Calculando ping. 👨‍💻**`);

        let embed = await message.reply({ content: `${message.author}`, embeds: [firstEmbed] }).then(msg => {
                let botPing = client.ws.ping;
                let serverPing = msg.createdTimestamp - message.createdTimestamp;
                        
                let secondEmbed = new Discord.MessageEmbed()
                    .setColor(embedColor)
                    .setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setDescription(`**📶 Servidor ** \`${serverPing} ms\` \n**💻 API ** \`${botPing} ms\``)
                msg.edit({ content: `${message.author}`, embeds: [secondEmbed] })
        })
    }
}