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
            name: "bold",
            value: "bold",
          },
          {
            name: "italic",
            value: "italic",
          },
          {
            name: "bold italic",
            value: "boldItalic",
          },
          {
            name: "script bold",
            value: "scriptBold",
          },
          {
            name: "bold fraktur",
            value: "boldFraktur",
          },
          {
            name: "sans serif",
            value: "sansSerif",
          },
          {
            name: "sans serif bold",
            value: "sansSerifBold",
          },
          {
            name: "sans serif italic",
            value: "sansSerifItalic",
          },
          {
            name: "monospace",
            value: "monospace",
          },
          {
            name: "parenthesized",
            value: "parenthesized",
          },
          {
            name: "circled",
            value: "circled",
          },
          {
            name: "squared capital",
            value: "squaredCapital",
          },
          {
            name: "negative circled capital",
            value: "negativeCircledCapital",
          },
          {
            name: "negative squared capital",
            value: "negativeSquaredCapital",
          },
          {
            name: "full width",
            value: "fullwidth",
          },
          {
            name: "myanmar",
            value: "fullWidth",
          },
          {
            name: "cherokee",
            value: "cherokee",
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
    description: "Run <smth> to see what you can do with this command",
    options: [
      {
        name: "template",
        description:
          "which template to use. Leave the final option empty to display the example.",
        type: ApplicationCommandOptionType.String,
        choices: [
          {
            name: "Announcement",
            value: "announcement",
          },
          {
            name: "Your Mom",
            value: "your_mom",
          },
        ],
      },
      {
        name: "author",
        description: "The name of the author (probably you).",
        type: ApplicationCommandOptionType.String,
      },
      {
        name: "thumbnail_url",
        description: "The image url to use as a thumbnail.",
        type: ApplicationCommandOptionType.String,
      },
      {
        name: "title_url",
        description: "Url for the title to link to.",
        type: ApplicationCommandOptionType.String,
      },
      {
        name: "body_text",
        type: ApplicationCommandOptionType.String,
        description: "The text to use in the body.",
      },
      {
        name: "title_text",
        type: ApplicationCommandOptionType.String,
        description: "The text to use as the title.",
      },
      {
        name: "image_url",
        type: ApplicationCommandOptionType.String,
        description: "URL of an image to include in the embed.",
      },
      {
        name: "color",
        type: ApplicationCommandOptionType.String,
        description: "Color of the sidebar.",
      },
      {
        name: "footer_text",
        type: ApplicationCommandOptionType.String,
        description: "Text to have in the footer.",
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