import { FramecordCommand } from './classes/FramecordCommand';
import { CustomFilter } from './classes/FramecordCustomFilter';
import { SimpleFilter } from './classes/FramecordFilter';
import { FramecordInstance } from './classes/FramecordInstance';
import { FramecordReactionRole, ReactionRole } from './classes/FramecordReactionRole';

const toExport = {
    FramecordInstance: FramecordInstance,
    FramecordCommand: FramecordCommand,
    SimpleFilter: SimpleFilter,
    CustomFilter: CustomFilter,
    FramecordReactionRole: FramecordReactionRole
}

export = toExport;
