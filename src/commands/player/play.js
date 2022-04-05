const { QueryType } = require('discord-player');
const Discord = require('discord.js');

module.exports = {
    name: 'play',
    aliases: ['p'],
    utilisation: '{prefix}play [song name/URL]',
    voiceChannel: true,

    async run(client, message, args) {
        if (!args[0]) return message.channel.send(`Por favor digite um pesquisa válida ${message.author}... ❌`);

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });
        
        if (res.tracks[0].duration == '0:00'){
            await player.deleteQueue(message.guild.id);
            return message.channel.send(` ${message.author} Ta tentando me derrubar? coloca uma **Música**. ❌`);
        }

        if (!res || !res.tracks.length) return message.channel.send(`Não foram encontrados ${message.author}... tentar novamente ? ❌`);

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } catch {
            await player.deleteQueue(message.guild.id);
            return message.channel.send(`Impossível entrar no canal ${message.author}... ❌`);
        }

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
    },
};