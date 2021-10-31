import styled from 'styled-components'

import { useContextApp } from '@Context/contextApp'
import { useContextUser } from '@Context/contextUser'
import MessageList from './components/MessageList'
import SendMsg from './components/SendMsg'

import { Header } from '../../styled'

const Chat = () => {
  const { selectedChat } = useContextApp()
  const {
    user: { id: idCurrentUser },
  } = useContextUser()

  if (!selectedChat) {
    return (
      <div className="h-full flex justify-center items-center">
        <p>No hay un chat seleccionado 😕</p>
      </div>
    )
  } else {
    const {
      chat: {
        contact: { name },
      },
      chatData: { messages, id: idChat },
    } = selectedChat

    return (
      <Container>
        <Header className="bg-panel-default flex justify-center items-center">
          {name}
        </Header>
        <div>
          <ContainerChat>
            <MessageList messages={messages} idCurrentUser={idCurrentUser} />
            <SendMsg idChat={idChat} />
          </ContainerChat>
        </div>
      </Container>
    )
  }
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
