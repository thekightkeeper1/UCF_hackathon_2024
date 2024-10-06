require('dotenv').config();
templates = require('./embeds')
const { isValidUrl, convertOptionsToObject } = require("./utils");
const {Client, IntentsBitField, REST } = require('discord.js');
const { transform, getFonts } = require('convert-unicode-fonts');


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
        // Boo bad boring command

        const font = interaction.options.get('fonttype').value;       
        const word = interaction.options.get('text').value;
        const fonts = getFonts();
        const s = transform(word, fonts[font]);
        interaction.reply(s);
        return;
    } if (interaction.commandName === 'embed_gen') {
        // Oh yeah exciting command
        console.log(`interaction.options ${interaction.options}`);
        const template = interaction.options.get("template").value;
        options = convertOptionsToObject(interaction.options); // For formatting the template
        if (
            !isValidUrl(options.title_url) ||
            !isValidUrl(options.image_url) ||
            !isValidUrl(options.thumbnail_url)
        ) {
        interaction.reply({
            content: "The url you gave me didn't start with http:// or https://",
            ephemeral: true
        });
        return;
    } else {
        embed = templates[template](options);
        interaction.reply({ embeds: [embed] });
        return;
    }   
    }
})  