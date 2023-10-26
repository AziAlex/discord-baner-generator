import {Client, ClientEvents, Collection, CommandInteraction,  SlashCommandBuilder} from 'discord.js'

export interface IClient extends Client {
  commands?: Collection<string, any>
  events?: Collection<string, any>
}

export interface IEvent {
  name: keyof ClientEvents;
  once?: boolean;
  rest?: boolean;
  execute: (...args: any[]) => void;
}

export interface ICommand {
  data: Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">;
  execute: (interaction: CommandInteraction) => void;
}

