module.exports = {
    name: 'clear-queue',
    usage: '{prefix}clearqueue',
    voiceChannel: true,

    async run(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Nenhuma música tocando ${message.author}... ❌`);

        if (!queue.tracks[0]) return message.channel.send(`Nenhuma música na fila após a atual ${message.author}... ❌`);

        await queue.clear();

        message.channel.send(`A Fila foi limpa. 🗑️`);
    },
};