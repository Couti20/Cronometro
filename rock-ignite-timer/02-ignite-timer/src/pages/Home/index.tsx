import { HandPalm, Play } from "phosphor-react"
import { useContext } from "react"
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'


import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,

} from "./styles"

import { NewCycleForm } from "./Components/NewCycleForm"
import { Countdown } from "./Components/Countdown"
import { CyclesContext } from "../../contexts/CyclesContext"



const newCycleFormValidationScheme = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'O ciclo precisa ser de no minumo 5 monutos')
    .max(60, 'O ciclo precisa ser de no maximo 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationScheme>

//controlled => quando temos em tempo real a informação o input do usuario guadada nas aplicaçoes
//uncontrolled => 
export function Home() {

  const { activeCycle, createNewCycle, interruptCurrentCycle } = useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationScheme),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData){
    createNewCycle(data)

    reset()  
  }
  /** 'register' recebe o nome dos input e retorna alguns metodos 
  como = onChange, onBlur,onFocus.etc */

  /**'register' recebe o nome dos input e retorna alg
  /** ?=se eu tiver */ //: se eu nao tiver
  const task = watch('task')
  const isSubmitDisabred = !task

  return (
    <HomeContainer>

      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">

        <FormProvider {...newCycleForm} >
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>

        ) : (<StartCountdownButton disabled={isSubmitDisabred} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}

/**Pros Dlilling => Quando a gente tem  Muitas propriedades Apenas para comunicação entre componentes 
 * Context API => Permite compartilhamos informações entre varios components ao mesmo tempo. 
*/
