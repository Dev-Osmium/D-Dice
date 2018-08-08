const { Command } = require('discord.js-commando');
const rn = require('random-number');

module.exports = class RollCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'dice',
            memberName: 'roll',
            description: 'Allows the rolling of virtual polyhedral dice',
            examples: ['roll 6', 'roll 10'],
            args: [
                {
                    key: 'sides',
                    type: 'integer',
                    prompt: 'Please enter a number of sides',
                    default: 6
                }
            ]
        });
    };

    run(message, { sides }) {
        var options = {
            min: 0,
            max: sides+1,
            integer: true
        }

        var roll = rn({
            min: 1,
            max: sides,
            integer: true
        });
        message.say("The d" + sides + " rolled a " + roll);
        console.log(`${message.author.username} rolled a d${sides} and got a ${roll}`)
    }
}