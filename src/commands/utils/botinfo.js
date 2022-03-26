const Discord = require("discord.js");

module.exports = {
  name: "botinfo", // Coloque o nome do comando do arquivo
  usage: [""], // Coloque sinônimos aqui

  run: async (client, message, args) => {
    let servidor = client.guilds.cache.size;
    let usuarios = client.users.cache.size;
    let canais = client.channels.cache.size;
    let ping = client.ws.ping;
    let dono_id = "424187328051937292";
    let dono = client.users.cache.get(dono_id);
    let prefixo = "!";
    let versao = "^13.6.0";

    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true })})
      .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true })})
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp(new Date())
      .setDescription(`\\👋| Olá ${message.author}, sou o \`${client.user.username}\`, meu prefixo é \`${prefixo}\`.\n\\💻| Veja meus comandos com \`${prefixo}help\`.\n\🎈| Atualmente estou em \`${servidor}\` servidores, \`${usuarios}\` usuários e \`${canais}\`canais.\n\🤖| Criado por: \`${dono.tag}\` em JS e utilizo NodeJS e Discord.js na versão \`${versao}\`.`);

    message.reply({ embeds: [embed] });
  },
};
