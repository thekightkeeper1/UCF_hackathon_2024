require('dotenv').config();
templates = require('./embeds')

const {Client, IntentsBitField, REST, Routes, ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const {transform, getFonts, revertTransform} = require('convert-unicode-fonts');


const rest = new REST({ version: "10" }).setToken(
    process.env.DISCORD_TOKEN
);

// add_cmd(rest, commands, Routes)
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


client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand) return;

    if(interaction.commandName === 'font'){
        const font = interaction.options.get('fonttype').value;       
        const word = interaction.options.get('text').value;
        const fonts = getFonts();
        const s = transform(word, fonts[font]);
        interaction.reply(s);
        return;
    } if (interaction.commandName === 'embed_gen') {
        const template = interaction.options.get('template').value
        console.log(template);

        // parse options
        embed = templates[template]();
        interaction.reply({ embeds: [embed]})
        return;

    }
})
