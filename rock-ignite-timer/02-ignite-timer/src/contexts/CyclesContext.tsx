import { differenceInSeconds } from "date-fns";
import React, { createContext, useEffect, useReducer, useState } from "react";
import {  addNewCycleAction, interruptCurrentCycleAction, markCurrentCycleAsFinishedAction } from "../cycles/action";
import { Cycle, cyclesReducer } from '../cycles/reducer'

interface CreateCycleDate {

    task: string
    minutesAmount: number
}

interface CyclesContextType {
    cycles: Cycle[];
    activeCycle: Cycle | undefined;
    activeCycleId: string | null;
    amountSecondsPassed: number
    setSecondsPassed: (secods: number) => void
    markCurrentCyclesAsFinished: () => void
    createNewCycle: (data: CreateCycleDate) => void
    interruptCurrentCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CycleContextProviderProps {

    children: React.ReactNode;
}

export function CyclesContextProvider({
    children,
}: CycleContextProviderProps) {
    const [cyclesState, dispatch] = useReducer(cyclesReducer,
        {
            cycles: [],
            activeCycleId: null
        },
        () => {
            const storedStateAsJSON = localStorage.getItem('@cronometro-timer:cyclesState');
            if (storedStateAsJSON) {
                return JSON.parse(storedStateAsJSON)
            }
        }
    )

    const { cycles, activeCycleId } = cyclesState;
    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

    const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
        if (activeCycle) {
            return differenceInSeconds(
                new Date(),
                new Date(activeCycle.startDate)
            );
        }

        return 0
    })

    useEffect(() => {
        const stateJSON = JSON.stringify(cyclesState)

        localStorage.setItem('@cronometro-timer:cyclesState', stateJSON)
    }, [cyclesState])

    function setSecondsPassed(seconds: number) {
        setAmountSecondsPassed(seconds)
    };

    function markCurrentCyclesAsFinished() {
        dispatch(markCurrentCycleAsFinishedAction())
    }

    //{
    //setCycles(state => state.map((cycle) => {
    //  if (cycle.id === activeCycleId) {
    //    return { ...cycle, finishedDate: new Date() }/**"..."" => todos os dados*/
    //} else {
    //  return cycle
    // }
    //}),
    //)
    //}
    function createNewCycle(data: CreateCycleDate) {
        const id = String(new Date().getTime());

        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        }
        dispatch(addNewCycleAction(newCycle))


        setAmountSecondsPassed(0)
        //reset();
    }
    function interruptCurrentCycle() {
        dispatch(interruptCurrentCycleAction())
    }

    return (
        <CyclesContext.Provider
            value={{
                cycles,
                activeCycle,
                activeCycleId,
                markCurrentCyclesAsFinished,
                amountSecondsPassed,
                setSecondsPassed,
                createNewCycle,
                interruptCurrentCycle
            }}>
            {children}
        </CyclesContext.Provider>
    )
}