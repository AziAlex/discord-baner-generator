import {IClient, IEvent} from "../../models/types";
import {CommandInteraction} from "discord.js";

export const event: IEvent = {
  name: 'interactionCreate',
  execute: async (interaction: CommandInteraction, client: IClient) => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands?.get(interaction.commandName);

    if (!command) {
      await interaction.reply({content: "outdatet commands", ephemeral: true});
    }

    command.execute(interaction);
  }
}