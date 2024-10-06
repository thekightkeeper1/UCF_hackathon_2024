require('dotenv').config();
    const https = require('https')

templates = require('./embeds')
const { isValidUrl, convertOptionsToObject } = require("./utils");
const {Client, IntentsBitField, REST, MessageAttachment } = require('discord.js');
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


client.on('interactionCreate', async (interaction) => {
    if(!interaction.isChatInputCommand) return;

    if(interaction.commandName === 'font'){
        // Boo bad boring command

        const font = interaction.options.get('fonttype').value;       
        const word = interaction.options.get('text').value;
        const fonts = getFonts();
        const s = transform(word, fonts[font]);
        interaction.reply(s);
        return;
    } 
    
    if (interaction.commandName === 'embed_gen') {
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
    else if (interaction.commandName === 'color') {
        const color = interaction.options.get('color').value;
        const text = interaction.options.get('text').value;
        const font = interaction.options.get('font').value;

        const data = JSON.stringify({
            html: `<link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
                   <span>${text}</span>`,
            css: ` * { font-family: Cabin; height: auto; font-size: 8px; color: ${color}; background-color: #313338; }`, //".box { border: 4px solid #03B875; padding: 20px; font-family: 'Roboto'; }",
            //google_fonts: "Times N"
          })
          
          // Retrieve your api_id and api_key from the Dashboard. https://htmlcsstoimage.com/dashboard
          const apiId = "460b412b-db40-4de2-a562-fe41ab806ad3"
          const apiKey = "1b3a7be6-b110-4e6f-8ea4-52b7edf232b7"
          
          const options = {
            hostname: 'hcti.io',
            port: 443,
            path: '/v1/image',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic ' + new Buffer(apiId + ':' + apiKey).toString('base64')
            }
          }
          
          const req = https.request(options, (res) => {
            console.log(`statusCode: ${res.statusCode}`)
          
            res.on('data', (d) => {
              const image = JSON.parse(d)
              //const imagecook = new MessageAttachment(image["url"]);
              interaction.reply({ content: image["url"] });
            })
          })
          
          req.on('error', (error) => {
            console.error(error)
          })
          
          req.write(data)
          req.end()

          
    }

})
