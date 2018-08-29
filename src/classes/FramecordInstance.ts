import { Client, Message } from "discord.js";
import { CommandListener } from '../listener/CommandListener';
import { DataBucket } from "./Bucket";
import { FramecordCommand } from './FramecordCommand';
import { BucketManager } from '../manager/BucketManager';

export class FramecordInstance {

    private discordJS: Client = new Client();
    private CommandListener = new CommandListener();
    private _globalBucket = new DataBucket();

    constructor() {}

    public start(token: string): void {
        this.discordJS.login(token);
        this.discordJS.on('message', (message: Message): void => {
            this.CommandListener.checkMessage(message);
        })
    }

    public globalBucket(callback: (bucket: DataBucket) => DataBucket): void {
        this._globalBucket = callback(this._globalBucket);
    }

    public addCommand(command: FramecordCommand): void {
        this.CommandListener.addCommand(command);
    }

}
