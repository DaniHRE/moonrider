module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    run(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Nenhuma música tocando ${message.author}... ❌`);

        const success = queue.skip();

        return message.channel.send(success ? `Música atual ${queue.current.title} pulada ✅` : `Alguma coisa errada ${message.author}...? ❌`);
    },
};