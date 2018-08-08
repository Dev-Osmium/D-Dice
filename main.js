const Commando = require("discord.js-commando");
const path = require('path')
require('dotenv').config();
const client = new Commando.CommandoClient({
    owner: ['118455061222260736'],
    commandPrefix: "!?",
    disableEveryone: true
});

client.registry
.registerGroups([
    ['dice', 'Standard Polyhedral Dice'],
    ['stats', 'Stat rolls']
])
.registerDefaults()
.registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    client.user.setActivity("with orcs and dragons and demons")
    console.log("All stats rolled for and character sheets generated sir!")
});

client.login(process.env.TOKEN)