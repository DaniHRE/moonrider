const Discord = require('discord.js');

module.exports = (queue, track) =>{
    const embedColor = "RANDOM";
  
    const embedMusic = new Discord.MessageEmbed()
        .setTitle(track.title)
        .setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true })})
        .setImage(track.thumbnail)
        .setThumbnail("https://media.discordapp.net/attachments/867424753047044141/955976594248314880/3293810.png?width=128&height=128")
        .setColor(embedColor)
        .addFields(
            { name: 'Autor:', value: `${track.author}`, inline: true },
            { name: 'Views:', value: `${track.views}`, inline: true },
            { name: 'Duração:', value: `${track.duration}`, inline: true },
        )
        .setTimestamp(Date.now())
        .setFooter({ text: 'By Dino ❤️', iconURL: `${client.user.displayAvatarURL({ dynamic: true })}` });
    queue.metadata.send({ embeds: [embedMusic] });
}