import { FramecordCommand } from '../classes/FramecordCommand';
import { Message } from 'discord.js';

export class CommandListener {

    private commands: Array<FramecordCommand> = [];
    private prefix = '!';
    public ignoreCase = true;

    public addCommand(command: FramecordCommand): void {
        this.commands.push(command);
    }

    public setPrefix(prefix: string): void {
        this.prefix = prefix;
    }

    public checkMessage(message: Message): boolean {
        let success: boolean = false;
        if(!message.content.startsWith(this.prefix)) { return false; }
        if(this.commands.length === 0) { return false; }
        this.commands.forEach((command: FramecordCommand): void => {
            command.triggers.forEach((trigger: string) => {
                if(this.ignoreCase) { message.content = message.content.toLocaleLowerCase(); }
                if(message.content.replace(this.prefix, '').startsWith(trigger) ) {
                    command.callback(message); success = true;
                }
            });
        });
        return success;
    }

}
