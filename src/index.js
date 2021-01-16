const Discord = require("discord.js")

require("dotenv").config()

const client = new Discord.Client();
const channelId = "800062887912931401";
const guildId = "800062887912931398";
client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', async (message) => {
    console.log("mes", message);
    // If the message is "ping"
    if (message.channel.id === channelId && message.channel.guild.id === guildId) {
        // Send "pong" to the same channel
        if (message.content == 'ping') {
            await message.reply('pong');
        }
    }
});

client.login(process.env.BOT_TOKEN);