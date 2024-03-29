import { Client, Message, User, MessageReaction, TextChannel } from "discord.js";
import { CommandListener } from '../listener/CommandListener';
import { CustomFilterListener } from "../listener/CustomFilterListener";
import { FilterListener } from '../listener/FilterListener';
import { UserBucketManager } from '../manager/UserBucketManager';
import { DataBucket } from "./Bucket";
import { FramecordCommand } from './FramecordCommand';
import { CustomFilter } from './FramecordCustomFilter';
import { SimpleFilter } from './FramecordFilter';
import { FramecordReactionRole } from "./FramecordReactionRole";
import { ReactionListener } from "../listener/ReactionListener";

export class FramecordInstance {

    private CommandListener = new CommandListener();
    private FilterListener = new FilterListener();
    private CustomFilterListener = new CustomFilterListener();
    private ReactionListener = new ReactionListener();
    private userBucketManager = new UserBucketManager();

    public globalBucket = new DataBucket();
    public discordJS: Client = new Client();

    constructor() {}

    public start(token: string): void {
        this.discordJS.login(token);
        this.discordJS.on('message', (message: Message): void => {
            this.CommandListener.checkMessage(message);
            this.FilterListener.checkMessage(message);
            this.CustomFilterListener.checkMessage(message);
        });
        this.discordJS.on('messageReactionAdd', (messageReaction: MessageReaction) => {
            this.ReactionListener.checkReaction(messageReaction.message, messageReaction);
        });
    }

    public subToEvent(event: string, callback: Function): void {
        this.discordJS.on(event, callback);
    }

    public getUserBucket(user: User): DataBucket {
        return this.userBucketManager.getUserBucket(user);
    }

    public addCommand(command: FramecordCommand): void {
        this.CommandListener.addCommand(command);
    }

    public addFilter(filter: SimpleFilter): void {
        this.FilterListener.addFilter(filter);
    }

    public addEmojiFilter(filter: FramecordReactionRole): void {
        this.ReactionListener.addFilter(filter);
    }

    public addCustomFilter(filter: CustomFilter): void {
        this.CustomFilterListener.addFilter(filter);
    }

    public cacheMessage(channelId: string, messageId: string): void {
        setTimeout(() => {
            let channel = <TextChannel>this.discordJS.channels.get(channelId);
            channel.fetchMessage(messageId);
        }, 1000);    
    }

}
