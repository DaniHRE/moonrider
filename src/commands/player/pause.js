module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    run(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Nenhuma música tocando ${message.author}... ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Música atual ${queue.current.title} pausada ✅` : `Algo deu errado ${message.author}... ❌`);
    },
};