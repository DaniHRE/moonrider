const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    run(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Nenhuma música rodando ${message.author}... ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`Você precisa desabilitar o modo loop da música atual (${client.config.app.px}loop) ${message.author}... ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Modo repetição **${queue.repeatMode === 0 ? 'disabilitado' : 'habilitado'}** toda a fila será repetida infinitamente 🔁` : `Alguma coisa está errada ${message.author}... ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`Você precisa desabilitar o modo loop da música atual (${client.config.app.px}loop queue) ${message.author}... ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Modo repetição **${queue.repeatMode === 0 ? 'disabilitado' : 'habilitado'}** toda a fila será repetida infinitamente (você pode ativar o loop na fila usando: <queue> option) 🔂` : `Alguma coisa está errada ${message.author}... ❌`);
        };
    },
};