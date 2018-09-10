const framecord = require('../lib/index.js');

const TOKEN = process.env.TOKEN || '';

let fc = new framecord.FramecordInstance();

fc.start(TOKEN);

fc.addCommand( new framecord.FramecordCommand(['test1', 'test2'], (message, args, databucket) => {
    console.log(message.content, args, databucket);
}));

fc.addFilter( new framecord.FramecordFilter(/php4life/gi));
