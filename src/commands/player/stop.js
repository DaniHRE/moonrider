module.exports = {
    name: 'stop',
    aliases: ['dc'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    run(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Nenhuma música tocando ${message.author}... ❌`);

        queue.destroy();

        message.channel.send(`A música parou neste servidor, até a próxima ✅`);
    },
};