import { discordJsManager } from './discordJSManager';

export class Framecord {

    private discordJsManager: discordJsManager = new discordJsManager();

    public start(token: string): void {
        this.discordJsManager.discordJS.login(token);
    }

}
