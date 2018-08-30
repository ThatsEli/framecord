import { Client, Message } from "discord.js";
import { CommandListener } from '../listener/CommandListener';
import { SimpleFilterListener } from '../listener/SimpleFilterListener';
import { DataBucket } from "./Bucket";
import { FramecordCommand } from './FramecordCommand';
import { FramecordSimpleFilter } from './FramecordSimpleFilter';

export class FramecordInstance {

    private discordJS: Client = new Client();
    private CommandListener = new CommandListener();
    private SimpleFilterListener = new SimpleFilterListener();
    private _globalBucket = new DataBucket();

    constructor() {}

    public start(token: string): void {
        this.discordJS.login(token);
        this.discordJS.on('message', (message: Message): void => {
            this.CommandListener.checkMessage(message);
            this.SimpleFilterListener.checkMessage(message);
        })
    }

    public globalBucket(callback: (bucket: DataBucket) => DataBucket): void {
        this._globalBucket = callback(this._globalBucket);
    }

    public addCommand(command: FramecordCommand): void {
        this.CommandListener.addCommand(command);
    }

    public addFilter(filter: FramecordSimpleFilter): void {
        this.SimpleFilterListener.addFilter(filter);
    }

}
