import { Message } from "discord.js";
import { FramecordSimpleFilter } from '../classes/FramecordSimpleFilter';

export class SimpleFilterListener {

    private filters: Array<FramecordSimpleFilter> = [];

    public addFilter(filter: FramecordSimpleFilter): void {
        this.filters.push(filter);
    }

    public checkMessage(message: Message): boolean {
        for (let i: number = 0; i < this.filters.length; i++) {
            if(this.filters[i].trigger.test(message.content)) {
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
