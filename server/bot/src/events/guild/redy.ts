import {IClient, IEvent} from "../../models/types";

export const event: IEvent = {
  name: 'ready',
  once: true,
  execute: async (client: IClient) => {
    console.log(`Bot ${client.user?.tag} is ready!`)
  }
}