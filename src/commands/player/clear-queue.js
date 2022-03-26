module.exports = {
    name: 'clear-queue',
    usage: '{prefix}clearqueue',
    voiceChannel: true,

    async run(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}... try again ? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`No music in the queue after the current one ${message.author}... try again ? ❌`);

        await queue.clear();

        message.channel.send(`The queue has just been cleared 🗑️`);
    },
};