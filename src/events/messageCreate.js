const Discord = require('discord.js');

module.exports = async (client, message) =>{
    if (message.author.bot) return;
    if (message.content.indexOf(client.config.prefix) !== 0) return;

	const args = message.content.slice(client.config.prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	
	const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

	const DJ = client.config.opt.DJ;

	if (!command) return;

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('Não consigo executar esse comando dentro dos DMs!');
	}

	if (command.permissions) {
		const authorPerms = message.channel.permissionsFor(message.author);
		if (!authorPerms || !authorPerms.has(command.permissions)) {
			let embed = new Discord.MessageEmbed() 
            .setColor(`#f93e54'`) 
            .setTitle(`Você é fraco, lhe falta permissão`) 
            .setImage('https://i.pinimg.com/originals/32/6d/47/326d470596e4d1e4bb966730fc2fb0e4.gif') 
            .setFooter({text: `• Autor: ${message.author.tag}`, iconURL: message.author.displayAvatarURL({format: "png"})});
        await message.channel.send({ embeds: [embed] });
		return
		}
	}

	if (command.args && !args.length) {
		let reply = `Você não utilizou os argumentos necessários, ${message.author}!`;

		if (command.usage) {
			reply += `\nA utilização correta é: \`${client.config.prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (command && DJ.enabled && DJ.commands.includes(command.name)) {
        const roleDJ = message.guild.roles.cache.find(x => x.name === DJ.roleName);
        if (!message.member._roles.includes(roleDJ.id)) {
            return message.channel.send(`Esse comando é reservado para membro com a permissão ${DJ.roleName} no servidor ${message.author}... ❌`);
        }
    }

	const { cooldowns } = client;

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`Espere mais ${timeLeft.toFixed(1)} segundos para usar \`${command.name}\` commando.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.run(client, message, args);
	} catch (error) {
		console.error(error);
		message.reply('Ocorreu um erro ao tentar utilizar esse comando, resolve com o Tio Itachi la.');
	}
}