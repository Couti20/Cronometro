import { FormContainer, MinutesAmoutInput, TaskInput } from "./styles";
import * as  zod from 'zod'
import { useContext } from "react";

import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";




export function NewCycleForm() {

  const {activeCycle} =useContext(CyclesContext)
  const {register} = useFormContext()
  //useForm = recebe um objeto
  //useForm = crindo um novo objeto na minha aplicaçao
  return (
    <FormContainer>

      <label htmlFor="task"> Vou trabalhar em </label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder=" Dê um nome para seu projeto "
        disabled={!!activeCycle}
        {...register('task')}

      />
      <datalist id="task-suggestions">
        <option value="Academia " />
        <option value="Escola " />
        <option value="Empresa " />
        <option value="Natação..." />

      </datalist >

      <label htmlFor="">Durante</label>
      <MinutesAmoutInput type="number" id="minutesAmount" placeholder="00"
        step={1}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount',
          { valueAsNumber: true })}

      />

      <span>Minutos.</span>
    </FormContainer>
  )
}