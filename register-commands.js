require("dotenv").config();
const { REST, Routes, ApplicationCommandOptionType} = require("discord.js");

const commands = [
  {
    name: "font",
    description: "Changes text to requested font",
    options: [
      {
        name: "fonttype",
        description: "font wanted",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
      {
        name: "text",
        description: "inputted text",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
    ],
  },

  {
    name: "embed_gen",
    description: "Run <smth> to see what you can do with this command"

  },
];

const rest = new REST({version: 10}).setToken(process.env.DISCORD_TOKEN);


(async () => {
    try {
        console.log('Registering commands');
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands}
        )
        console.log("Commands registered without error.");
    } catch (error) {
        console.log(`Error when registering commands. Check command naming convention and/or the tokens: ${error}`);
    }
})()