import {Client, GatewayIntentBits, Collection} from 'discord.js'
import * as process from 'process'
import {config} from "dotenv";
import {IClient} from "./src/models/types";
import {commandHandler} from "./src/handlers/commandHandler";
import {eventHandler} from "./src/handlers/eventsHandler";

export async function discordBot() {
  const {Guilds, GuildMessages, MessageContent, GuildMembers} = GatewayIntentBits
  const client: IClient = new Client({intents: [Guilds, GuildMessages, MessageContent, GuildMembers]})

  config()

  client.commands = new Collection()
  client.events = new Collection()

  await client.login(process.env.TOKEN).then(() => {
    commandHandler(client)
    eventHandler(client)
  })
}
