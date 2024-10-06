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
  const author = options.find((e) => e.name === "author")?.value;
  const title_url = options.find((e) => e.name === "title_url")?.value;
  const title_text = options.find((e) => e.name === "title_text")?.value;
  const body_text = options.find((e) => e.name === "body_text")?.value;
  const image = options.find((e) => e.name === "image_url")?.value;
  const footer = options.find((e) => e.name === "footer")?.value;
  const thumbnail = options.find((e) => e.name === "thumbnail")?.value;
  const color = options.find((e) => e.name === "color")?.value;

  // Construct the Embed
  const embed = new EmbedBuilder()
    .setAuthor({
      name: author || "Default Author",
    })
    .setTitle(title_text || "Default Title")
    .setURL(title_url || "https://default-url.com")
    .setDescription(body_text || "Default body text")
    .setImage(
      image || "https://cubedhuang.com/images/alex-knight-unsplash.webp"
    )
    .setThumbnail(thumbnail || "https://dan.onl/images/emptysong.jpg")
    .setColor(color || "#00b0f4")
    .setFooter({
      text: footer || "Default footer",
    })
    .setTimestamp();

  return embed;
}


module.exports = templates;
