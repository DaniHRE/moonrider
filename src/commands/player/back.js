module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async run(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Nenhuma música tocando agora ${message.author}... ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`Não havia música tocada antes ${message.author}... ❌`);

        await queue.back();

        message.channel.send(`Reproduzindo a faixa **anterior** ✅`);
    },
};