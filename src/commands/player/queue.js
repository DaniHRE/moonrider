const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'queue',
    aliases: ['q'],
    utilisation: '{prefix}queue',
    voiceChannel: true,

    run(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Nenhuma música tocando ${message.author}... ❌`);

        if (!queue.tracks[0]) return message.channel.send(`Nenhuma música na fila após a atual ${message.author}... ❌`);

        const embed = new MessageEmbed();
        const methods = ['', '🔁', '🔂'];

        embed.setColor('RED');
        embed.setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }));
        embed.setAuthor({name: `Fila do servidor - ${message.guild.name} ${methods[queue.repeatMode]}`, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true })});

        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (requisitada por : ${track.requestedBy.username})`);

        const songs = queue.tracks.length;
        const nextSongs = songs > 5 ? `E **${songs - 5}** outras músicas...` : `Na playlist **${songs}** músicas...`;

        embed.setDescription(`Current ${queue.current.title}\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs}`);

        embed.setTimestamp();
        embed.setFooter({text: 'by Dino ❤️', iconURL: message.author.avatarURL({ dynamic: true })});

        message.channel.send({ embeds: [embed] });
    },
};