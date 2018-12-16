const framecord = require('../lib/index.js');

const TOKEN = process.env.TOKEN || '';

let fc = new framecord.FramecordInstance();

fc.start(TOKEN);

fc.cacheMessage('347131587202121748', '523891110402195456');

fc.addCommand( new framecord.FramecordCommand(['test1', 'test2'], (message, args, databucket) => {
    console.log(message.content, args, databucket);
}));

fc.addFilter(new framecord.SimpleFilter(/php4life/gi));

fc.addCustomFilter( new framecord.CustomFilter(/TSIsShit/gi, (message) => { console.log(fc.getUserBucket(message.author).test); fc.getUserBucket(message.author).test = '123'; } ) );

fc.addEmojiFilter(new framecord.FramecordReactionRole([{reaction: '🍆', role: 'Test'}])  )
