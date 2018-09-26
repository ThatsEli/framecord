import { Message } from "discord.js";
import { CustomFilter } from '../classes/FramecordCustomFilter';

export class CustomFilterListener {

    private filters: Array<CustomFilter> = [];

    public addFilter(filter: CustomFilter): void {
        this.filters.push(filter);
    }

    public checkMessage(message: Message): boolean {
        for (let i: number = 0; i < this.filters.length; i++) {
            if(this.filters[i].trigger.test(message.content)) {
                this.filters[i].triggerFunction(message, this.filters[i].dataBucket);
                return true;
            }
        }
        return false;
    }

}
