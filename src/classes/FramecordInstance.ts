import { Client, Message } from "discord.js";
import { CommandListener } from '../listener/CommandListener';
import { SimpleFilterListener } from '../listener/SimpleFilterListener';
import { DataBucket } from "./Bucket";
import { FramecordCommand } from './FramecordCommand';
import { SimpleFilter } from './FramecordFilter';

export class FramecordInstance {

    private discordJS: Client = new Client();
    private CommandListener = new CommandListener();
    private FilterListener = new SimpleFilterListener();

    public globalBucket = new DataBucket();

    constructor() {}

    public start(token: string): void {
        this.discordJS.login(token);
        this.discordJS.on('message', (message: Message): void => {
            this.CommandListener.checkMessage(message);
            this.FilterListener.checkMessage(message);
        })
    }

    public addCommand(command: FramecordCommand): void {
        this.CommandListener.addCommand(command);
    }

    public addFilter(filter: SimpleFilter): void {
        this.FilterListener.addFilter(filter);
    }

}
