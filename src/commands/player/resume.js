module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    run(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Nenhuma música tocando ${message.author}... ❌`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `Música atual ${queue.current.title} resumida ✅` : `Alguma coisa errada ${message.author}... ❌`);
    },
};