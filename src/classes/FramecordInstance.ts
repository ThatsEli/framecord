import { Client, Message } from "discord.js";
import { CommandListener } from '../listener/CommandListener';
import { FramecordCommand } from './FramecordCommand';

export class FramecordInstance {

    private discordJS: Client = new Client();
    private CommandListener = new CommandListener();

    constructor() {}

    public start(token: string): void {
        this.discordJS.login(token);
        this.discordJS.on('message', (message: Message): void => {
            this.CommandListener.checkMessage(message);
        })
    }

    public addCommand(command: FramecordCommand): void {
        this.CommandListener.addCommand(command);
    }

}
