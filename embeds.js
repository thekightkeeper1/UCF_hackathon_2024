const { EmbedBuilder} = require('discord.js');
const fallback_website = "https://example.com";
templates = {
  your_mom: yourmom,
  announcement: announcement,
};


function yourmom() {
    return new EmbedBuilder()
            .setAuthor({
                name: "Your mom says",
            })
            .setTitle("Thanks for last night")
            .setURL("https://example.com")
            .setImage("https://i.redd.it/sans-already-befriended-your-mom-last-night-created-by-v0-78g9ir1zzsdc1.jpg?width=2048&format=pjpg&auto=webp&s=b6f1073da7ffcaf00c754aba8d3973d50bf04c7e")
            .setColor("#00b0f4")
            .setFooter({
                text: "Sans",
            })
            .setTimestamp();
}


function announcement() {

return new EmbedBuilder()
  .setAuthor({
    name: "<author>",
  })
  .setTitle("Annoucement")
  .setURL("<title-url>")
  .setDescription("<body text>")
  .setImage("https://cubedhuang.com/images/alex-knight-unsplash.webp")
  .setThumbnail("https://dan.onl/images/emptysong.jpg")
  .setColor("#00b0f4")
  .setFooter({
    text: "<footer-text>",
  })
  .setTimestamp();

}


module.exports = templates;