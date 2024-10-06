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
        choices: [
          {
            name:'bold',
            value:'bold',
          },
          {
            name:'italic',
            value:'italic',
          },
          {
            name:'bold italic',
            value:'boldItalic',
          },
          {
            name:'script bold',
            value:'scriptBold',
          },
          {
            name:'bold fraktur',
            value:'boldFraktur',
          },
          {
            name:'sans serif',
            value:'sansSerif',
          },
          {
            name:'sans serif bold',
            value:'sansSerifBold',
          },
          {
            name:'sans serif italic',
            value:'sansSerifItalic',
          },
          {
            name:'monospace',
            value:'monospace',
          },
          {
            name:'parenthesized',
            value:'parenthesized',
          },
          {
            name:'circled',
            value:'circled',
          },
          {
            name:'squared capital',
            value:'squaredCapital',
          },
          {
            name:'negative circled capital',
            value:'negativeCircledCapital',
          },
          {
            name:'negative squared capital',
            value:'negativeSquaredCapital',
          },
          {
            name:'full width',
            value:'fullwidth',
          },
          {
            name:'myanmar',
            value:'fullWidth',
          },
          {
            name:'cherokee',
            value:'cherokee',
          },
        ],
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
  /*
  {
    name: "color",
    description: "Embed text with the color of your choice",
    options: [
      {
        name: "color",
        description: "Color of text.",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
      {
        name: "text",
        description: "Text that will be displayed.",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
    ],
  },
  */
  {
    name: "color",
    description: "Send text with the color of your choice",
    options: [
      {
        name: "color",
        description: "Color of text.",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
      {
        name: "text",
        description: "Text that will be displayed.",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
      {
        name: "font",
        description: "Font of text.",
        type: ApplicationCommandOptionType.String,
      },
    ], 
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