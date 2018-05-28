const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content.startsWith(`${prefix}ping`)) {
        message.channel.send('Pong.');
    }
});

client.login(token);
