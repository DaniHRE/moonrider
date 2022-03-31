const { MessageEmbed } = require('discord.js');
const { QueryType } = require('discord-player');
const Discord = require('discord.js');

module.exports = {
    name: 'search',
    aliases: ['sh'],
    utilisation: '{prefix}search [song name]',
    voiceChannel: true,

    async run(client, message, args) {
        if (!args[0]) return message.channel.send(`Insira uma pesquisa válida ${message.author}... ❌`);

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`Sem resultados encontrados ${message.author}... ❌`);

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setAuthor({name: `Resultados para ${args.join(' ')}`, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true })});

        const maxTracks = res.tracks.slice(0, 10);

        embed.setDescription(`${maxTracks.map((track, i) => `**${i + 1}**. ${track.title} | ${track.author}`).join('\n')}\n\nSelecione uma opção entre **1** e **${maxTracks.length}** ou **cancel** ⬇️`);

        embed.setTimestamp();
        embed.setFooter({text: 'by Dino ❤️', iconURL: message.author.avatarURL({ dynamic: true })});

        message.channel.send({ embeds: [embed] });

        const collector = message.channel.createMessageCollector({
            time: 15000,
            errors: ['time'],
            filter: m => m.author.id === message.author.id
        });

        collector.on('collect', async (query) => {
            if (query.content.toLowerCase() === 'cancel') return message.channel.send(`Procura cancelada ✅`) && collector.stop();

            const value = parseInt(query.content);

            if (!value || value <= 0 || value > maxTracks.length) return message.channel.send(`Resposta inválida. Tente um valor entre **1** e **${maxTracks.length}** ou **cancel**... ❌`);

            collector.stop();

            try {
                if (!queue.connection) await queue.connect(message.member.voice.channel);
            } catch {
                await player.deleteQueue(message.guild.id);
                return message.channel.send(`Não consigo entrar no canal de voz ${message.author}... ❌`);
            }

            queue.addTrack(res.tracks[query.content - 1]);

            if (!queue.playing) await queue.play();
        });

        collector.on('end', (msg, reason) => {
            if (reason === 'time') return message.channel.send(`A pesquisa expirou ${message.author}... ❌`);
        });
    },
};