const { Collection } = require('discord.js')
const fs = require('fs')
const path = require('path')

const processCommands = (client, dir, stack = "") => {
  const files = fs.readdirSync(dir)

  // Find each file within the given directory
  files.forEach((file) => {
    if (fs.statSync(path.join(dir, file)).isDirectory())
      return processCommands(client, path.join(dir, file), stack+file + "/")
    
    // Load the command file
    const command = require(path.join(dir, file))

    // Ensure some parameters are set
    if (!command.name)
      return console.warn('Ignorando', file, 'pois os metadados são inválidos (requer "nome" e "comandos").')
    
    // Description
    if (!command.description)
      command.description = ''

    // Permissions
    if (!command.permissions)
      command.permissions = []

    // Command Cooldown
    if (!command.cooldownTime)
      command.cooldownTime = 0

    // Add per-command caching & cooldown logging
    command.cache = {
      ...command.cache || {},
      cooldownExpiry: new Collection()
    }

    // Add our command to our pool
    
      client.commands.set(command.name, command)
      console.log(`[CMD]: Loaded the "${command.name}" command.`)
  
    // Remove from require cache
    delete require.cache[require.resolve(path.join(dir, file))]
  })
}

module.exports = (client) => {
  client.commands = new Collection()
  processCommands(client, path.join(__dirname, '/../commands'))
}