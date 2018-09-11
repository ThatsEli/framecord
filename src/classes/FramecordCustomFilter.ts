import { DataBucket } from "./Bucket";

export class CustomFilter {

    public trigger: RegExp;
    public triggerFunction: Function;
    public dataBucket: DataBucket = new DataBucket();

    constructor(triggers: RegExp, triggerFunction: Function) {
        this.trigger = triggers;
        this.triggerFunction = triggerFunction;
    }

}
