import { DataBucket } from './Bucket';

export class FramecordCommand {

    public triggers: Array<string>;
    public callback: Function;
    public dataBucket: DataBucket = new DataBucket();

    constructor(triggers: Array<string>, callback: Function) {
        this.triggers = triggers;
        this.callback = callback;
    }
}
