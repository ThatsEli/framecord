import { tools } from '../tools/tools';

export class DataBucket {

    public id: string;
    public data: any = {};

    constructor() {
        this.id = tools.randomString(32);
    }
}
