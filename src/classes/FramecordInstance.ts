import { Client } from "discord.js";

export class FramecordInstance {

    private discordJS: Client;

    constructor() {
        this.discordJS = new Client();
    }

    public start(token: string): void {
        this.discordJS.login(token);
    }

    public addCommand(): void {

    }

}
