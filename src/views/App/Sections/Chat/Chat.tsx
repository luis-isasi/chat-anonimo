import styled from 'styled-components'
import RotateLeftIcon from '@mui/icons-material/RotateLeft'

import { useContextApp } from '@Context/contextApp'
import { useContextUser } from '@Context/contextUser'
import MessageList from './components/MessageList'
import SendMsg from './components/SendMsg'
import { getChatDataById } from '@Utils'

import { Header } from '../../styled'

const Chat = () => {
  const { selectedChat, setSelectedChat } = useContextApp()
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

    const handleUpdateChat = () => {
      const chatData = getChatDataById(selectedChat.chatData.id)
      setSelectedChat({ ...selectedChat, chatData })
    }

    return (
      <Container>
        <Header className="bg-panel-default flex justify-between items-center">
          <h3>{name}</h3>
          <button
            type="button"
            onClick={handleUpdateChat}
            className="text-xs font-light opacity-70 hover:opacity-100"
          >
            actualizar chat
            <RotateLeftIcon className="ml-2" />
          </button>
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
