import {IClient, IEvent} from "../models/types";
import {readdirSync} from 'fs'

export const eventHandler = (client: IClient) => {
  const folders = readdirSync(__dirname + '/../events')

  for (const folder of folders) {
    const files = readdirSync(__dirname + '/../events/' + folder)
      .filter(file => file.endsWith('.js'))

    for (const file of files) {
      const {event}: { event: IEvent } = require(`../events/${folder}/${file}`)

      if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
      } else {
        client.on(event.name, (...args) => event.execute(...args, client));
      }
    }
  }
}