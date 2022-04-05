module.exports = {
    name: 'filter',
    aliases: [],
    utilisation: '{prefix}filter [filter name]',
    voiceChannel: true,

    async run(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Nenhuma música tocando ${message.author}... ❌`);

        const actualFilter = queue.getFiltersEnabled()[0];
        
        if (!args[0]) return message.channel.send(`Por favor, coloque um filtro válido para habilitar ou desabilitar ${message.author}... ❌\n${actualFilter ? `O Filtro atual é: ${actualFilter} (${client.config.app.px}filter ${actualFilter} para desabilitar).\n` : ''}`);

        const filters = client.config.app.filters
        console.log(`Filtros habilitados: ${filters}`)

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send(`Esse filtro não existe ${message.author}... ❌\n${actualFilter ? `O Filtro atual é: ${actualFilter}.\n` : ''}Lista dos filtros disponíveis. ${filters}.`);

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        message.channel.send(`O Filtro ${filter} está **${queue.getFiltersEnabled().includes(filter) ? 'habilitado ✅' : 'desabilitado ❌'}**\n*Lembre-se que quanto mais longa for a música, mais tempo levará.*`);
    },
};