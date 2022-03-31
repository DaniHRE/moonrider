module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async run(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Nenhuma música tocando ${message.author}... ❌`);

        message.author.send(`Você salvou a playlist ${queue.current.title} | ${queue.current.author} para o servidor ${message.guild.name} ✅`).then(() => {
            message.channel.send(`Enviei-te o título da música por mensagens privadas ✅`);
        }).catch(error => {
            message.channel.send(`Não foi possível enviar-lhe uma mensagem privada ${message.author}... ❌`);
        });
    },
};