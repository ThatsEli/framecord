import { Client, Message } from "discord.js";
import { CommandListener } from '../listener/CommandListener';
import { CustomFilterListener } from "../listener/CustomFilterListener";
import { FilterListener } from '../listener/FilterListener';
import { DataBucket } from "./Bucket";
import { FramecordCommand } from './FramecordCommand';
import { CustomFilter } from './FramecordCustomFilter';
import { SimpleFilter } from './FramecordFilter';

export class FramecordInstance {

    private discordJS: Client = new Client();
    private CommandListener = new CommandListener();
    private FilterListener = new FilterListener();
    private CustomFilterListener = new CustomFilterListener();

    public globalBucket = new DataBucket();

    constructor() {}

    public start(token: string): void {
        this.discordJS.login(token);
        this.discordJS.on('message', (message: Message): void => {
            this.CommandListener.checkMessage(message);
            this.FilterListener.checkMessage(message);
            this.CustomFilterListener.checkMessage(message);
        })
    }

    public addCommand(command: FramecordCommand): void {
        this.CommandListener.addCommand(command);
    }

    public addFilter(filter: SimpleFilter): void {
        this.FilterListener.addFilter(filter);
    }

    public addCustomFilter(filter: CustomFilter): void {
        this.CustomFilterListener.addFilter(filter);
    }

}
