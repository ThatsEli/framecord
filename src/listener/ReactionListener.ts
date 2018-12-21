import { Message, MessageReaction, User } from 'discord.js';
import { FramecordReactionRole } from '../classes/FramecordReactionRole';
import { LogManager, ErrorType } from '../manager/LogManager';

export class ReactionListener {

    private reactionRoles: Array<FramecordReactionRole> = [];

    public checkReaction(message: Message, reaction: MessageReaction) {
        for (let i = 0; i < this.reactionRoles.length; i++) {
            const framecordReactionRole = this.reactionRoles[i];
            for (let j = 0; j < framecordReactionRole.reactionRoles.length; j++) {
                if(reaction.emoji.name === framecordReactionRole.reactionRoles[j].reaction) {
                    let role = message.guild.roles.find(role => role.name === framecordReactionRole.reactionRoles[j].role);
                    message.member.addRole(role);
                    LogManager.log('User ' + message.member.displayName + ' got role ' + role.name, ErrorType.info);
                }                    
            }
        }
        
    }

    public addFilter(filter: FramecordReactionRole) {
        this.reactionRoles.push(filter);
    }

}
