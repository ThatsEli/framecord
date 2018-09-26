import { FramecordCommand } from './classes/FramecordCommand';
import { CustomFilter } from './classes/FramecordCustomFilter';
import { SimpleFilter } from './classes/FramecordFilter';
import { FramecordInstance } from './classes/FramecordInstance';

const toExport = {
    FramecordInstance: FramecordInstance,
    FramecordCommand: FramecordCommand,
    SimpleFilter: SimpleFilter,
    CustomFilter: CustomFilter
}

export = toExport;
