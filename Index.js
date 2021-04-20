const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();

// This was the old header before the video for private messages
const Discord = require('discord.js');
// const bot = new Discord.Client();

const token = 'NjcxOTYxODQ0NjUwMzQ0NDUx.Xo6pqQ.9MmHYnoD45UD0LfBzxgtw2lNg1w'

const PREFIX = '\\';


//  ===================== MONKEY
var listenFor_Skippy = 
[
    'beer can',
    'skippy',
    'absent minded',
    'asshole',
    'skipster'
];
var skippyReply_Skippy = [
    'I\'m kinda busy rearranging my sock drawer right now, what do you need',
    'I hate my life.  What did i do wrong to be stuck in here with a bunch of Monkeys?',
    'Skippy The Magnificent at your service',
    'Did you need something, im kinda busy keeping you all alive',
    'Trust The Awesomeness',
    '<BLOWS A RASPBERRY>'
];

//  ===================== IDEA
var listenFor_Idea = 
[
    'idea',
    'thought',
    'think'
];
var skippyReply_Idea = [
    'HAHA, as if a hairless monkey could have anything that qualifies as an idea',
    'Oh great, now i have to listen to your BLAH BLAH BLAH for an hour',
    'You\'ve earned yourself a juicebox, that idea was not terrible',
    'With ideas like that its amazing your species ever survived crawling out of the ocean',
    '<BLOWS A RASPBERRY>'
];

//  ===================== SEX
var listenFor_Sex = 
[
    'herpies',
    'Jacobs ladder',
    'Prince Albert',
    'penis',
    'fuck',
    'shit',
    '1M1J',
    '2G1C',
    'fecalphilia',
    'centipede',
    'space dock',
    'feltching',
    'asshole',
    'conginital',
    'waffle',
    'cunt',
    'slut',
    'manboob',
    'pussy',
    'cock'
];
var skippyReply_Sex = [
    'You are a disgusting Monkey',
    'Biological meat sacks are always obsessed with these things',
    '<BLOWS A RASPBERRY>'
];

//  ===================== MONKEY
var listenFor_Monkey = 
[
    'ape',
    'joe',
    'flea',
    'filthy',
    'monkey'
];
var skippyReply_Monkey = [
    'Monkeys kick ass',
    'Do you want a bananana?'
];

//  ===================== exfore terms
var listenFor_ExFore = 
[
    'nagatha',
    'anastaisia'
];
var skippyReply_ExFore = [
    'Is there something i can do for you?  right now she is busy',
    'would you like me to send Anastaisia to your room you dirty little boy?'
];

//  ===================== food
var listenFor_Food = 
[
    'cheeseburger',
    'fluffer nutter',
    'chicken'
];
var skippyReply_Food = [
    'The way you describe that almost makes me wish i was a biological trash bag so I could taste it',
    'Monkeys crave the strangest foods',
    'mmmmmmmmmmmm sound delicious for an ape'
];

//  ===================== banana
var listenFor_Banana = 
[
    'banana',
    'sludge',
    'plaintain'
];
var skippyReply_Banana = [
    'MMMMMMMMMMM  Monkeys love banananas',
    'HA  Banana'
];


bot.on('ready', () =>{
    console.log('Skippy is online')
})



bot.on('message', msg=>{
    if(msg.content.toLowerCase().includes('etest'))
    {
        var channels = msg.guild.roles.fetch()
            .then(roles => roles.forEach(r =>console.log(r.name)))
    }
    var alreadyReplied = false
    if(msg.author.username === 'Skippy The Magnificent')
    {
        // Do nothing for Skippy
    }
    else
    {
        if(msg.content.toLowerCase() === "hey skippy")
        {
            msg.reply('Hi you filthy Monkey');
            alreadyReplied = true
        }

        // if((msg.content.toLowerCase().includes("skippy")) && (alreadyReplied === false))
        // {
        //     var randReply = Math.floor(Math.random()*skippyReply_Uncat.length);
        //     msg.channel.send(skippyReply_Uncat[randReply]);
        //     alreadyReplied = true
        // }

        if(alreadyReplied === false)
        {
            listenFor_Skippy.forEach(Item => 
            {
                if(msg.content.toLowerCase().includes(Item))
                {
                    var randReply = Math.floor(Math.random()*skippyReply_Skippy.length);
                    msg.channel.send(skippyReply_Skippy[randReply]);
                    alreadyReplied = true
                    // console.log(randReply);
                }
            });
        }

        if(alreadyReplied === false)
        {
            listenFor_Monkey.forEach(Item => 
            {
                if(msg.content.toLowerCase().includes(Item))
                {
                    var randReply = Math.floor(Math.random()*skippyReply_Monkey.length);
                    msg.channel.send(skippyReply_Monkey[randReply]);
                    alreadyReplied = true
                    // console.log(randReply);
                }
            });
        }

        if(alreadyReplied === false)
        {
            listenFor_Sex.forEach(Item => 
            {
                if(msg.content.toLowerCase().includes(Item))
                {
                    var randReply = Math.floor(Math.random()*skippyReply_Sex.length);
                    msg.reply(skippyReply_Sex[randReply]);
                    alreadyReplied = true
                    // console.log(randReply);
                }
            });
        }

        if(alreadyReplied === false)
        {
            listenFor_Food.forEach(Item => 
            {
                if(msg.content.toLowerCase().includes(Item))
                {
                    var randReply = Math.floor(Math.random()*skippyReply_Food.length);
                    msg.channel.send(skippyReply_Food[randReply]);
                    alreadyReplied = true
                    // console.log(randReply);
                }
            });
        }

        if(alreadyReplied === false)
        {
            listenFor_Banana.forEach(Item => 
            {
                if(msg.content.toLowerCase().includes(Item))
                {
                    var randReply = Math.floor(Math.random()*skippyReply_Banana.length);
                    msg.channel.send(skippyReply_Banana[randReply]);
                    alreadyReplied = true
                    // console.log(randReply);
                }
            });
        }

        if(alreadyReplied === false)
        {
            listenFor_ExFore.forEach(Item => 
            {
                if(msg.content.toLowerCase().includes(Item))
                {
                    var randReply = Math.floor(Math.random()*skippyReply_ExFore.length);
                    msg.reply(skippyReply_ExFore[randReply]);
                    alreadyReplied = true
                    // console.log(randReply);
                }
            });
        }

        if(alreadyReplied === false)
        {
            listenFor_Idea.forEach(Item => 
            {
                if(msg.content.toLowerCase().includes(Item))
                {
                    var randReply = Math.floor(Math.random()*skippyReply_Idea.length);
                    msg.channel.send(skippyReply_Idea[randReply]);
                    alreadyReplied = true
                    // console.log(randReply);
                }
            });
        }

    }
})


bot.on('message', message=>
{
    let args = message.content.substring(PREFIX.length).split(" ");
    
    switch(args[0])
    {
        case 'ping':
            // message.channel.sendMessage('pong!');
            message.reply('Skippy The Magnificent at your service');
            message.reply(args[0]);
            message.reply(args[1]);
            var gunter = message.author.username
            message.channel.send('test' + gunter);
            break;
        case 'iam':
            // message.channel.sendMessage('pong!');
            var role = message.guild.roles.find('name', 'TestRole')


            message.reply('Skippy The Magnificent at your service');
            message.reply(args[0]);
            message.reply(args[1]);
            var gunter = message.author.username
            message.channel.send('test' + gunter);
            break;
        case 'help':
            // message.channel.sendMessage('pong!');
            message.author.send('Your species is so worthless I spend almost all of my time helping one of you.');
            break;
        case 'whatchadoin':
            // message.channel.sendMessage('pong!');
            bot.user.setActivity('over monkeys', { type: 'WATCHING'});
            console.log('tried to set activity');
            break;
        case 'whoami':
            const myEmbed = new Discord.MessageEmbed()
                .setTitle('Gunter Information')
                .addField('Player Name', message.author.username, true)
                .addField('Player Rank', '5')
                .addField('Server', 'Currently in' + message.guild.name)
                .setThumbnail('https://i.pinimg.com/originals/06/6f/2f/066f2fee61ff35d37901dfe2ba73dc43.jpg')
                .setImage(message.author.avatarURL())
                .setColor(0x6A1300);
            message.author.send(myEmbed);
            break;
    }
})


// Event listener for new guild members
bot.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}`);
  });

bot.login(token);
