const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    utilisation: '{prefix}nowplaying',
    voiceChannel: true,

    run(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Nenhuma música tocando ${message.author}... ❌`);

        const track = queue.current;

        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setThumbnail(track.thumbnail);
        embed.setAuthor({name: track.title, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true })});

        const methods = ['disabled', 'track', 'queue'];

        const timestamp = queue.getPlayerTimestamp();
        const trackDuration = timestamp.progress == 'Infinity' ? 'infinito (live)' : track.duration;

        embed.setDescription(`Volume **${queue.volume}**%\nDuração **${trackDuration}**\n^Modo repetição **${methods[queue.repeatMode]}**\nRequisitada por ${track.requestedBy}`);

        embed.setTimestamp();
        embed.setFooter({text: 'Made by Dino ❤️', iconURL: message.author.avatarURL({ dynamic: true })});

        const saveButton = new MessageButton();

        saveButton.setLabel('Save this track');
        saveButton.setCustomId('saveTrack');
        saveButton.setStyle('SUCCESS');

        const row = new MessageActionRow().addComponents(saveButton);

        message.channel.send({ embeds: [embed], components: [row] });
    },
};