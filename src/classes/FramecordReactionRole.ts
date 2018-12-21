export class FramecordReactionRole {

    public reactionRoles: Array<ReactionRole>;

    constructor(reactionRoles: Array<ReactionRole>) {
        this.reactionRoles = reactionRoles;
    }

}

export interface ReactionRole {
    reaction: string;
    role: string;
}
