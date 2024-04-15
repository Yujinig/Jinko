import { DISCORD_BOT_TOKEN, DISCORD_BOT_CLIENT_ID } from "./utils/constants";

import { Client, ClientOptions } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";

// Scopes required:
// bot: Send Messages, Attach Files, Use Slash Commands
console.log("Use this link to add the bot to your server!");
console.log(
  `https://discord.com/oauth2/authorize?client_id=1226638575227899955&permissions=8&scope=bot+applications.commands`
);

const client = new Client({
  intents: [],
});

ready(client);
interactionCreate(client);

client.login(DISCORD_BOT_TOKEN);
