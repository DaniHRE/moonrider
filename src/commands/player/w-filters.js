module.exports = {
    name: 'w-filters',
    usage: "",

    run (client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are not in the same voice channel !`);

        if (!player.getQueue(message)) return message.channel.send(`No music currently playing !`);

        const filtersStatuses = [[], []];

        client.filters.forEach((filterName) => {
            const array = filtersStatuses[0].length > filtersStatuses[1].length ? filtersStatuses[1] : filtersStatuses[0];
            array.push(filterName.charAt(0).toUpperCase() + filterName.slice(1) + " : " + (client.player.getQueue(message).filters[filterName] ? "success" : "off"));
        });
        
        let embed = new Discord.Embed()
            .setColor("RANDOM")
            .setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true })})
            .setFooter({text: 'By Dino💓'})
            .addFields(
                {name:'Filters', value: filtersStatuses[0].join('\n'), inline: true},
                {name: '** **', value: filtersStatuses[1].join('\n'), inline: true })
            .setTimestamp(new Date())
            .setDescription(`List of all filters enabled or disabled.\nUse \`${client.config.prefix}filter\` to add a filter to a song.`)
        message.channel.send({embeds: {embed}});
    },
};