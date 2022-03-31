const ms = require('ms');

module.exports = {
    name: 'seek',
    aliases: [],
    utilisation: '{prefix}seek [time]',
    voiceChannel: true,

    async run(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Nenhuma música tocando ${message.author}... ❌`);

        const timeToMS = ms(args.join(' '));

        if (timeToMS >= queue.current.durationMS) return message.channel.send(`O tempo indicado é maior que o tempo total da música atual ${message.author}... ❌\n*Tente, por exemplo, um tempo válido como **5s, 10s, 20 segundos, 1m**...*`);

        await queue.seek(timeToMS);

        message.channel.send(`Tempo definido na música atual **${ms(timeToMS, { long: true })}** ✅`);
    },
};