import styled from 'styled-components'
import { Header } from '../../styled'
import { useContextApp } from '@Context/contextApp'
import InputMsg from './components/InputMsg'

const Chat = () => {
  const { selectedChat } = useContextApp()

  if (!selectedChat)
    return (
      <div className="h-full flex justify-center items-center">
        <p>No hay un chat seleccionado 😕</p>
      </div>
    )

  const {
    chat: {
      contact: { name },
    },
  } = selectedChat

  return (
    <Container>
      <Header className="bg-panel-default flex justify-center items-center">
        {name}
      </Header>
      <div className="flex justify-center items-center">
        <ContainerChat>
          <div className="h-full">HOLA</div>
          <InputMsg />
        </ContainerChat>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  display: grid;
  grid-template-rows: 60px 1fr;
`
const ContainerChat = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default Chat
