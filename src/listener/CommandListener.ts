import { Message } from 'discord.js';
import { FramecordCommand } from '../classes/FramecordCommand';
import { LogManager, ErrorType } from '../manager/LogManager';

export class CommandListener {

    private commands: Array<FramecordCommand> = [];
    private prefix = '!';
    public  ignoreCase = true;

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
                //if(this.ignoreCase) { message.content = message.content.toLocaleLowerCase(); }
                if(message.content.replace(this.prefix, '').startsWith(trigger) ) {
                    let args: Array<string> = message.content.replace(this.prefix, '').split(' '); args.shift();
                    command.callback(message, args, command.dataBucket); success = true;
                    LogManager.log('Responded to command!', ErrorType.info);
                }
            });
        });
        return success;
    }

}
