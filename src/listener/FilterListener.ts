import { Message } from "discord.js";
import { SimpleFilter } from '../classes/FramecordFilter';
import { LogManager, ErrorType } from '../manager/LogManager';

export class FilterListener {

    private filters: Array<SimpleFilter> = [];

    public addFilter(filter: SimpleFilter): void {
        this.filters.push(filter);
    }

    public checkMessage(message: Message): boolean {
        for (let i: number = 0; i < this.filters.length; i++) {
            if(this.filters[i].trigger.test(message.content) || this.filters[i].trigger.test(message.content)) {
                try {
                    LogManager.log('Deleted filtered message!', ErrorType.info);
                    message.delete();    
                } catch (error) {
                    LogManager.log('Missing permission to delete filtered message!', ErrorType.error);
                    return true;
                }
                return true;
            }
        }
        return false;
    }

}
