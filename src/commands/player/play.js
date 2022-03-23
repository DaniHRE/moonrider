const { QueryType } = require('discord-player');
const Discord = require('discord.js');

module.exports = {
    name: 'play',
    aliases: ['p'],
    utilisation: '{prefix}play [song name/URL]',
    voiceChannel: true,

    async run(client, message, args) {
        if (!args[0]) return message.channel.send(`Please enter a valid search ${message.author}... try again ? ❌`);

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`No results found ${message.author}... try again ? ❌`);

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } catch {
            await player.deleteQueue(message.guild.id);
            return message.channel.send(`I can't join the voice channel ${message.author}... try again ? ❌`);
        }
        
        const msgLoad = await message.channel.send(`Loading your ${res.playlist ? 'playlist' : 'track'}... 🎧`);
        console.log(res.tracks[0].thumbnail)
        const embedColor = "RANDOM";

        const embedSend = await message.reply({ content: `${message.author}`, msgLoad }).then(msg => {    
                const embedMusic = new Discord.MessageEmbed()
                    .setTitle(res.tracks[0].title)
                    .setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setImage(res.tracks[0].thumbnail)
                    .setThumbnail("https://media.discordapp.net/attachments/867424753047044141/955976594248314880/3293810.png?width=128&height=128")
                    .setColor(embedColor)
                    .addFields(
                        { name: 'Autor:', value: `${res.tracks[0].author}`, inline: true },
                        { name: 'Views', value: `${res.tracks[0].views}`, inline: true },
                        { name: 'Duration', value: `${res.tracks[0].duration}`, inline: true },
                    )
                    .setTimestamp()
                    .setFooter({ text: 'By Dino 🧡', iconURL: `${client.user.displayAvatarURL({ dynamic: true })}` });
                msg.edit({ content: `${message.author}`, embeds: [embedMusic] })
        })

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
    },
};