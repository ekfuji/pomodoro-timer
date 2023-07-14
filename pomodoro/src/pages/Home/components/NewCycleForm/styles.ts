import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`
export const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  /* font-size: inherit; (inherit faz a herança da propriedade do container) */
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
  /* 
  Como o container tem display flex, quando definimos
  flex: 1; 
  Para o componente, especificamos um tamanho flexível para ele
  flex-grow = Eu dou a habilidade para o meu componente crescer além do tamanho original dele (sim)
  flex-shrink = Eu dou a habilidade para o para o meu componente diminuir, caso seja necesário (sim)
  flex-basis = Qual o tamanho ideal para o meu elemento
  Ou, seja ele vai se aptar ao tamanho de onde ele estiver.
  */
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
