module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    utilisation: '{prefix}shuffle',
    voiceChannel: true,

    async run(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Nenhuma música tocando ${message.author}... ❌`);

        if (!queue.tracks[0]) return message.channel.send(`Nenhuma música na fila após a atual ${message.author}... ❌`);

        await queue.shuffle();

        return message.channel.send(`Fila embaralhada **${queue.tracks.length}** músicas ! ✅`);
    },
};