import { produce } from 'immer'

import { ActionTypes } from "./action";

export interface Cycle {

    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
    interruptedDate?: Date;
    finishedDate?: Date;
}

interface CyclesState {
    cycles: Cycle[];
    activeCycleId: string | null;
}

export function cyclesReducer(state: CyclesState, action: any) {
    switch (action.type) {
        case ActionTypes.ADD_NEW_CYCLE:
            return produce(state, (draft) => {
                draft.cycles.push(action.payload.newCycle);
                draft.activeCycleId = action.payload.newCycle.id;
            })

        case ActionTypes.interrupt_Current_Cycle:
            const currentCycleInde = state.cycles.findIndex(cycle => {
                return cycle.id == state.activeCycleId
            })
//interrupted_Currnt_cycle = currentCycleInde
            if (currentCycleInde < 0) {
                return state
            }

            return produce(state, (draft) => {
                draft.activeCycleId = null;
                draft.cycles[currentCycleInde].interruptedDate = new Date();

            })

        case ActionTypes.mark_Current_Cycles_As_Finished:

            const currentCycleIndex = state.cycles.findIndex((cycle) => {
                return cycle.id == state.activeCycleId
            })
// mark_Current_Cycles_As_Finished = currentCycleIndex
            if (currentCycleIndex < 0) {
                return state
            }

            return produce(state, (draft) => {
                draft.activeCycleId = null
                draft.cycles[currentCycleIndex].finishedDate = new Date();

            })

        default:
            return state
    }
}