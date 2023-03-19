import * as Discord from 'discord.js';

const { token } = require('../env.json');

console.log(token);

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

client.login('OTEyNzk3MDM4NjA4MDExMjc0.GY1ZBR.wU7ItsOPUQPbAr4zWCFz8PzleKpN4DPwAN-A04');

*/