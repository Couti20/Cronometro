import { Cycle } from "./reducer";

export enum ActionTypes {
    ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
    interrupt_Current_Cycle = 'interrupt_Current_Cycle',
    mark_Current_Cycles_As_Finished = 'mark_Current_Cycles_As_Finished',
}

export function addNewCycleAction(newCycle: Cycle) {
    return {
        type: ActionTypes.ADD_NEW_CYCLE,
        payload: {
            newCycle,
        },
    }
}

export function markCurrentCycleAsFinishedAction() {
    return {
        type: ActionTypes.mark_Current_Cycles_As_Finished,

    }
}

export function interruptCurrentCycleAction() {
    return {
        type: ActionTypes.interrupt_Current_Cycle,

    }
}















