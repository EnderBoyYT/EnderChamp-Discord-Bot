const Discord = require("discord.js");
const EnderChamp = require("./assets/classes/base");
//const server = require("./server/server")
const bot = new Discord.Client({
  intents: 32767,
  partials: ["MESSAGE", "CHANNEL", "REACTION", "USER"],
});
process.on("unhandledRejection", (error) => {
  console.error("Unhandled promise rejection:", error);
});
new EnderChamp.Bot({ client: bot }).init();
