import {ICommand} from "../../../models/types";
import {SlashCommandBuilder} from "discord.js";

export const command: ICommand = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with pong!'),
  async execute(interaction) {
    await interaction.reply('Pong!');
  }
}