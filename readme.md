# framecord

### A Discord framework with productivity in mind.


## Whats is this?

This is a Discord bot framework for node with the productivity of the developers in mind. It's underlying structure is handelt by the gorgeous discord.js library.

## Features

* MIT license
* handels commands, filters and listeners(custom filters) for you
* makes creating these easy and fast
* handles data storage per instance, user, command/filter and more

## Documentation

Will be added later(r) (I have not that much time atm, sorry :) )

## Simple usage / example

```js
const framecord = require('framecord');

const TOKEN = process.env.TOKEN || 'DISCORDTOKENHERE';

let fc = new framecord.FramecordInstance();

fc.start(TOKEN);

fc.addCommand( new framecord.FramecordCommand(['test1', 'test2'], (message, args, databucket) => {
    console.log(message.content, args, databucket);
}));

fc.addFilter( new framecord.SimpleFilter(/php4life/gi));

fc.addCustomFilter( new framecord.CustomFilter(/TSIsShit/gi, (message) => { message.reply('Lies aren\'t allowed here;) '); } ) );
```

## Installation

```bash
npm install framecord
```