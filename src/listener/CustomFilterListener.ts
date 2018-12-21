import { Message } from "discord.js";
import { CustomFilter } from '../classes/FramecordCustomFilter';
import { LogManager, ErrorType } from '../manager/LogManager';

export class CustomFilterListener {

    private filters: Array<CustomFilter> = [];

    public addFilter(filter: CustomFilter): void {
        this.filters.push(filter);
    }

    public checkMessage(message: Message): boolean {
        for (let i: number = 0; i < this.filters.length; i++) {
            if(this.filters[i].trigger.test(message.content)) {
                LogManager.log('Triggered custom filter!', ErrorType.info);
                this.filters[i].triggerFunction(message, this.filters[i].dataBucket);
                return true;
            }
        }
        return false;
    }

}
