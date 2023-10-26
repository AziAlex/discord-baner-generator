import {IEvent} from "../../models/types";
import {Message} from "discord.js";

export const event: IEvent = {
  name: 'messageCreate',
  async execute(message: Message) {
    if (message.author.bot) return

    await message.reply({
      content: message.content
    })
  }
}