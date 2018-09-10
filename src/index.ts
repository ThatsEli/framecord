import { FramecordCommand } from './classes/FramecordCommand';
import { FramecordInstance } from './classes/FramecordInstance';
import { SimpleFilter } from './classes/FramecordFilter';

const toExport = {
    FramecordInstance: FramecordInstance,
    FramecordCommand: FramecordCommand,
    FramecordFilter: SimpleFilter
}

export = toExport;
