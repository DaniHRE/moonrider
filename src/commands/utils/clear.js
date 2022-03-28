const Discord = require("discord.js");
const { Permissions } = require("discord.js");

module.exports = {
  name: "clear",
  usage: "",
  permissions: Permissions.FLAGS.MANAGE_MESSAGES,

  run: async (client, message, args) => {

    const msgCount = parseInt(args[0], 10);

    let limitErr = "Insira um número entre 1 - 99.";

    if (!msgCount || limitErr < 1 || msgCount > 99)
      return message.channel.send(
        `:x: | ${message.author}`
      );

    const ferinha_apagando_msg = await message.channel.messages.fetch({
      limit: limitErr + 1,
    });
    message.channel.bulkDelete(ferinha_apagando_msg);
    let normalMsg = `✅ | ${message.author} apagou \`${args[0]}\` mensagens!`;
    let embedMsg = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(
        `${message.author} apagou \`${args[0]}\` mensagens!`
      )
      .setFooter({
        text: `Limpeza realizada`,
        iconURL:
          "http://2.bp.blogspot.com/-dcLYYffAv2w/U1E3Un7Ie1I/AAAAAAAAAAw/uYYS4DWtJBk/s1600/1.gif",
      });
    message.channel
      .send(embedMsg)
      .then((msg) => msg.delete({ timeout: 2000 }));
  },
};
