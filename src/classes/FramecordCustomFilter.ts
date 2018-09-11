
export class CustomFilter {

    public trigger: RegExp;
    public triggerFunction: Function;

    constructor(triggers: RegExp, triggerFunction: Function) {
        this.trigger = triggers;
        this.triggerFunction = triggerFunction;
    }

}
