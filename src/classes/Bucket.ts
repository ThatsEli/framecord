import { tools } from '../tools/tools';

export class DataBucket {

    public id: string;
    private data = {};

    constructor() {
        this.id = tools.randomString(32);
    }
}
