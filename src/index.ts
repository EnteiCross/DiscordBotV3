import * as Discord from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.A);
console.log(process.env.B);
console.log(process.env.DISCORD_TOKEN);

/*
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user!.tag}!`);
});

client.on('message', (message: Discord.Message) => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login('');

*/