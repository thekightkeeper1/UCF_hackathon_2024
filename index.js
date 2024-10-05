    require('dotenv').config();

const {Client, IntentsBitField, REST, Routes, ApplicationCommandOptionType } = require('discord.js');
const {transform, getFonts, revertTransform} = require('convert-unicode-fonts');


const commands = [
    {
    name: "font",
    description: "cga",
    options: [
        {
            name: 'word',
            description: 'word they want repeated',
            type: ApplicationCommandOptionType.String,
            required: true,
        },
    ]
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
      Routes.applicationCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      {
        body: commands,
      }
    );

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
}

client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand) return;

    if(interaction.commandName === 'repetir'){
        const word = interaction.options.get('word').value;
        const fonts = getFonts();
        const s = transform(word, fonts['bold']);
        interaction.reply(s);
    }
})
