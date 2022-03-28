const Discord = require("discord.js");
const moment = require('moment');
moment.locale('pt-br');

module.exports = {
  name: "serverinfo", 
  usage: [""], 

  run: async (client, message, args) => {

    let owner_id = "424187328051937292";
    let owner = client.users.cache.get(owner_id)
    const members = message.guild.members.cache
    const channels = message.guild.channels.cache
    const date = message.guild.createdAt
    const joined = message.member.joinedAt
    const region = {
      brazil: ':flag_br: Brasil',
    }

    const color = "RANDOM"

    const embed = new Discord.MessageEmbed()
    .setColor(color)
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setAuthor({name: '🔍 Informações do servidor'})
    .setThumbnail(`${message.guild.iconURL({ dynamic: true })}?size=1024`)
    .addFields(
        { name: '**Nome**', value: `${message.guild.name}`, inline: true },
        { name: '**ID**', value: `${message.guild.id}`, inline: true },
        { name: '**Dono(a)**', value: `${owner}`, inline: true },
        { name: '**Região**', value: `${region.brazil}`, inline: true},
        { name: '**Membro(s)**', value: `${message.guild.memberCount}`, inline: true },
        { name: '**Bot(s)**', value: `${members.filter(member => member.user.bot).size}`, inline: true},
        { name: '**Canais de texto**', value: `${channels.filter(channel => channel.type === 'GUILD_TEXT').size}`, inline: true },
        { name: '**Canais de voz**', value: `${channels.filter(channel => channel.type === 'GUILD_VOICE').size}`, inline: true},
        { name: '**Criado em**', value: `${moment(date).format('DD/MM/YYYY, à\\s HH:mm:ss')}`, inline: true },
        { name: '**Você entrou em**', value: `${moment(joined).format('DD/MM/YYYY, à\\s HH:mm:ss')}`, inline: true},
    )
    .setFooter({ text: 'By Dino ❤️', iconURL: `${client.user.displayAvatarURL({ dynamic: true })}` })
    .setTimestamp(Date.now())
    console.log()
    message.reply({ embeds: [embed] });
  },
};