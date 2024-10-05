async function add_cmd(rest, commands, Routes, token) {


  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands("1291989452171776031"), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
}

function hello() {console.log("hello world");}
module.exports = {
    add_cmd
}
