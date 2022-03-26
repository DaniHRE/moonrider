const Discord = require("discord.js");

module.exports = {
  name: "botinfo", // Coloque o nome do comando do arquivo
  usage: [""], // Coloque sinônimos aqui

  run: async (client, message, args) => {
    let server = client.guilds.cache.size;
    let users = client.users.cache.size;
    let channels = client.channels.cache.size;
    let owner_id = "424187328051937292";
    let owner = client.users.cache.get(owner_id);
    let prefix = "!";
    let version = "^13.6.0";

    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true })})
      .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true })})
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp(new Date())
      .setDescription(`\\👋| Olá ${message.author}, sou o \`${client.user.username}\`, meu prefix é \`${prefix}\`.\n\\💻| Veja meus comandos com \`${prefix}help\`.\n\🎈| Atualmente estou em \`${server}\` serveres, \`${users}\` usuários e \`${channels}\`channels.\n\🤖| Criado por: \`${owner.tag}\` em JS e utilizo NodeJS e Discord.js na versão \`${version}\`.`);

    message.reply({ embeds: [embed] });
  },
};
