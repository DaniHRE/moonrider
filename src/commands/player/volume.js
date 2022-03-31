module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-100]`,
    voiceChannel: true,

    run(client, message, args) {

        const maxVol = client.config.opt.maxVol;

        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Nenhuma música tocando ${message.author}... ❌`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`O volume atual é ${queue.volume} 🔊\n*Para alterar o volume, insira um número válido entre **1** e**${maxVol}**.*`);

        if (queue.volume === vol) return message.channel.send(`O volume que você deseja alterar já é o atual ${message.author}... ❌`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`O número especificado não é válido. Insira um número entre **1** e **${maxVol}** ${message.author}... ❌`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `O volume foi modificado para **${vol}**/**${maxVol}**% 🔊` : `Algo deu errado ${message.author}... ❌`);
    },
};