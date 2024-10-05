require('dotenv').config();

const {Client, IntentsBitField, REST, Routes} = require('discord.js');


const commands = [
    {
    name: "your_mom",
    description: "Replies with Pong!",
    },
];

const rest = new REST({ version: "10" }).setToken(
    process.env.DISCORD_TOKEN
);

add_cmd(rest, commands, Routes)
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.DirectMessages,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.username} is online`);
});

client.login(process.env.DISCORD_TOKEN);

async function add_cmd(rest, commands, Routes) {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(
      Routes.applicationGuildCommands("1291989452171776031", "1291989889520369714"),
      {
        body: commands,
      }
    );

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
}
