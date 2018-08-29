
export class FramecordCommand {

    public triggers: Array<string>;
    public callback: Function;

    constructor(triggers: Array<string>, callback: Function) {
        this.triggers = triggers;
        this.callback = callback;
    }
}
