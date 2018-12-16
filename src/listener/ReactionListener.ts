import { Message, MessageReaction, User } from 'discord.js';
import { FramecordReactionRole } from '../classes/FramecordReactionRole';

export class ReactionListener {

    private reactionRoles: Array<FramecordReactionRole> = [];

    public checkReaction(message: Message, reaction: MessageReaction, user: User) {
        for (let i = 0; i < this.reactionRoles.length; i++) {
            const framecordReactionRole = this.reactionRoles[i];
            for (let j = 0; j < framecordReactionRole.reactionRoles.length; j++) {
                if(reaction.emoji.name === framecordReactionRole.reactionRoles[j].reaction) {
                    let role = message.guild.roles.find(role => role.name === framecordReactionRole.reactionRoles[j].role);
                    message.member.addRole(role);
                    // console.log('User:', message.author.username, 'Role:', role.name);
                }                    
            }
        }
        
    }

    public addFilter(filter: FramecordReactionRole) {
        this.reactionRoles.push(filter);
    }

}
