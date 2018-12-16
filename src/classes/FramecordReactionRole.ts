
export class FramecordReactionRole {

    // public messageId: string;
    public reactionRoles: Array<ReactionRole>;

    constructor(reactionRoles: Array<ReactionRole>) {
        // this.messageId = messageId;
        this.reactionRoles = reactionRoles;
    }

}

export interface ReactionRole {
    reaction: string;
    role: string;
}
