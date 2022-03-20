// Ajuda em: discord.gg/PEdmSZzCAv

const Discord = require("discord.js");

module.exports = {
    name: "help V13",
    author: "ferinha",

run: async(client, message, args) => {

    let cor_das_embeds = "RANDOM";

    let embed_1 = new Discord.MessageEmbed()

    .setAuthor(name: client.user.username, client.user.displayAvatarURL({ dynamic: true }) )
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`**__Olá ${message.author}, veja meus comandos com as reações abaixo:__**\n\n\`◀️\` ***Painel Inicial***\n\`1️⃣\` ***Moderação***\n\`2️⃣\` ***Configuração***\n\`3️⃣\` ***Diversão***\n\`4️⃣\` ***Utilidade***\n\`❌\` ***Fechar Painel***`)
    .setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setColor(cor_das_embeds);

    message.reply({ content: `${message.author}`, embeds: [embed_1] }).then(msg => {

      msg.react("◀️")
      msg.react("1️⃣")
      msg.react("2️⃣")
      msg.react("3️⃣")
      msg.react("4️⃣")
      msg.react("❌")

      let filtro_1 = (r, u) => r.emoji.name === '◀️' && u.id === message.author.id; let coletor_1 = msg.createReactionCollector({ filter: filtro_1});
      let filtro_2 = (r, u) => r.emoji.name === '1️⃣' && u.id === message.author.id; let coletor_2 = msg.createReactionCollector({ filter: filtro_2});
      let filtro_3 = (r, u) => r.emoji.name === '2️⃣' && u.id === message.author.id; let coletor_3 = msg.createReactionCollector({ filter: filtro_3});
      let filtro_4 = (r, u) => r.emoji.name === '3️⃣' && u.id === message.author.id; let coletor_4 = msg.createReactionCollector({ filter: filtro_4});
      let filtro_5 = (r, u) => r.emoji.name === '4️⃣' && u.id === message.author.id; let coletor_5 = msg.createReactionCollector({ filter: filtro_5});
      let filtro_6 = (r, u) => r.emoji.name === '❌' && u.id === message.author.id; let coletor_6 = msg.createReactionCollector({ filter: filtro_6});

      coletor_1.on("collect", (ferinha) => {
        
        ferinha.users.remove(message.author.id); // Parte que retira a reação do usuário

        let embed_2 = new Discord.MessageEmbed()

        .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }) )
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**__Olá ${message.author}, veja meus comandos com as reações abaixo:__**\n\n\`◀️\` ***Painel Inicial***\n\`1️⃣\` ***Moderação***\n\`2️⃣\` ***Configuração***\n\`3️⃣\` ***Diversão***\n\`4️⃣\` ***Utilidade***\n\`❌\` ***Fechar Painel***`)
        .setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(cor_das_embeds);
        
        msg.edit({ content: `${message.author}`, embeds: [embed_2] });

      });


      coletor_2.on("collect", (ferinha) => {

        ferinha.users.remove(message.author.id); // Parte que retira a reação do usuário

        let categoria = "Moderação";

        let embed_3 = new Discord.MessageEmbed()

        .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }) )
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**Olá ${message.author}, veja meus comandos de \`${categoria}\` abaixo:\n\n...**`)
        .setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(cor_das_embeds);
        
        msg.edit({ content: `${message.author}`, embeds: [embed_3] });

      });

      coletor_3.on("collect", (ferinha) => {

        ferinha.users.remove(message.author.id); // Parte que retira a reação do usuário

        let categoria = "Configuração";

        let embed_4 = new Discord.MessageEmbed()

        .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }) )
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**Olá ${message.author}, veja meus comandos de \`${categoria}\` abaixo:\n\n...**`)
        .setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(cor_das_embeds);
        
        msg.edit({ content: `${message.author}`, embeds: [embed_4] });

      });

      coletor_4.on("collect", (ferinha) => {

        ferinha.users.remove(message.author.id); // Parte que retira a reação do usuário

        let categoria = "Diversão";

        let embed_5 = new Discord.MessageEmbed()

        .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }) )
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**Olá ${message.author}, veja meus comandos de \`${categoria}\` abaixo:\n\n...**`)
        .setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(cor_das_embeds);
        
        msg.edit({ content: `${message.author}`, embeds: [embed_5] });

      });

      coletor_5.on("collect", (ferinha) => {

        ferinha.users.remove(message.author.id); // Parte que retira a reação do usuário

        let categoria = "Utilidade";

        let embed_6 = new Discord.MessageEmbed()

        .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }) )
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**Olá ${message.author}, veja meus comandos de \`${categoria}\` abaixo:\n\n...**`)
        .setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(cor_das_embeds);
        
        msg.edit({ content: `${message.author}`, embeds: [embed_6] });
        
      });

      coletor_6.on("collect", (ferinha) => {

        ferinha.users.remove(message.author.id); // Parte que retira a reação do usuário

        let embed_7 = new Discord.MessageEmbed()

        .setAuthor(`Fechando painel de ajuda em 5 segundos.`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(cor_das_embeds);
        
        msg.edit({ content: `${message.author}`, embeds: [embed_7] });

        setTimeout( () => {

            msg.delete();

            let embed_8 = new Discord.MessageEmbed()

            .setDescription(`**${message.author} O painel de ajuda foi encerrado.**`)
            .setColor(cor_das_embeds);

            message.reply({ content: `${message.author}`, embeds: [embed_8] });

        }, 5000);
        
      });

    })
  }
}