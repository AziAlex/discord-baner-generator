import {IClient, ICommand} from "../models/types";
import {readdirSync} from "node:fs";

export const commandHandler = (client: IClient) => {
  const commandsArray = []

  const commandsFolders = readdirSync(__dirname + '/../commands/slashCommands')
  for (const folder of commandsFolders) {
    const commandFiles = readdirSync(__dirname + `/../commands/slashCommands/${folder}`)
      .filter(file => file.endsWith('.js'))

    for (const file of commandFiles) {
      const {command}: { command: ICommand } = require(`../commands/slashCommands/${folder}/${file}`)

      client.commands?.set(command.data.name, command)

      commandsArray.push(command.data.toJSON())
    }
  }
  client.application?.commands.set(commandsArray)
}