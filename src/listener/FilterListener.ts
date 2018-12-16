import { Message } from "discord.js";
import { SimpleFilter } from '../classes/FramecordFilter';

export class FilterListener {

    private filters: Array<SimpleFilter> = [];

    public addFilter(filter: SimpleFilter): void {
        this.filters.push(filter);
    }

    public checkMessage(message: Message): boolean {
        for (let i: number = 0; i < this.filters.length; i++) {
            if(this.filters[i].trigger.test(message.content) || this.filters[i].trigger.test(message.content)) {
                try {
                    message.delete();    
                } catch (error) {
                    console.error('Missing permission to delete messages!');
                    return true;
                }
                return true;
            }
        }
        return false;
    }

}
