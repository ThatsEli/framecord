
export class FramecordSimpleFilter {

    public trigger: RegExp;

    constructor(triggers: RegExp) {
        this.trigger = triggers;
    }

}
