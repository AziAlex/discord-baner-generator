import {ICommand} from "@bot/core/types"
import {InteractionReplyOptions, SlashCommandBuilder} from "discord.js";

export const command: ICommand = {
  data: new SlashCommandBuilder()
    .setName('avatar')
    .setDescription('get your avatar')
    .addUserOption(option => option
      .setName('user')
      .setDescription('get user avatar')
      .setRequired(false)
    ),
  async execute(interaction) {
    const user = interaction.options.getUser('user') ?? interaction.user

    const replyMessage: InteractionReplyOptions = {
      embeds: [{
        description: `**Avatar <@${user.id}>**`,
        color: 31,
        image: {
          url: user.avatarURL({size: 1024})
        }
      }]
    }

    await interaction.reply(replyMessage)
  }
}