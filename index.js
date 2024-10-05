const {Client, IntentsBitField} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.username} is online`);
});

client.login("MTI5MTk4OTQ1MjE3MTc3NjAzMQ.GTJX3H.IDHJ-Bp2dEYWlURYPNAPAvLHvaqU5Zv4L_nPAQ");

client.on("messageCreate", async (message) =>{
    console.log(message)

    if(!message?.author.bot){
        message.author.send(`Echo ${message.content}`);
    }
})