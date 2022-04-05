const Discord = require("discord.js");
const { Permissions } = require("discord.js");

module.exports = {
  name: "clear",
  usage: "",
  permissions: Permissions.FLAGS.MANAGE_MESSAGES,

  run: async (client, message, args) => {
    const msgCount = parseInt(args[0], 10);

    if (!msgCount || msgCount < 1 ||msgCount > 99)
      return message.channel.send(`:x: | ${message.author} Insira um numero entre 1 - 99.`);

    const cleaningMsg = await message.channel.messages.fetch({
      limit: msgCount + 1,
    })
    message.channel.bulkDelete(cleaningMsg);

    let clearMsg = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`** Limpando Mensagens... 🧹**`)
      .setFooter({text: `By Dino ❤️`, iconURL: `${client.user.displayAvatarURL({ dynamic: true })}`})
      .setTimestamp(Date.now());

    let clearEmbed = await message.reply({ embeds: [clearMsg] }).then(msg => {
      setTimeout( () => {
        let clearedMsg = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`✅ | ${message.author} apagou \`${msgCount}\` mensagens!`)
          .setFooter({ text: `By Dino ❤️`, iconURL: `${client.user.displayAvatarURL({ dynamic: true })}` })
          .setTimestamp(Date.now());
  
        msg.edit({ embeds: [clearedMsg] })
      }, 2000)
    });

  }
}
