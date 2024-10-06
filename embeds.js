const { EmbedBuilder} = require('discord.js');
const fallback_website = "https://example.com";
templates = {
  your_mom: yourmom,
  announcement: announcement,
};


function yourmom(options) {
    return new EmbedBuilder()
            .setAuthor({
                name: "Your mom says",
            })
            .setTitle("Thanks for last night")
            .setImage("https://i.redd.it/sans-already-befriended-your-mom-last-night-created-by-v0-78g9ir1zzsdc1.jpg?width=2048&format=pjpg&auto=webp&s=b6f1073da7ffcaf00c754aba8d3973d50bf04c7e")
            .setColor("#00b0f4")
            .setFooter({
                text: "Sans",
            })
            .setTimestamp();
}


function announcement(options) {
  // Construct the Embed
  console.log(options.image_url);
  const embed = new EmbedBuilder()
    .setAuthor({
      name: options.author,
    })
    .setTitle(options.title_text)
    .setURL(options.title_url)
    .setDescription(options.body_text)
    .setImage(options.image_url)
    .setThumbnail(options.thumbnail_url)
    .setColor(options.color)
    .setFooter({
      text: options.footer_text,
    })
    .setTimestamp();

  return embed;
}



module.exports = templates;
