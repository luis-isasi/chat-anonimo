import styled from 'styled-components'

import MessageItem from './MessageItem'
import { Message as TypeMsg } from '@Types'

interface Props {
  messages: TypeMsg[]
  idCurrentUser: number
}

const MessageList: React.FC<Props> = ({ messages, idCurrentUser }) => {
  const renderMessages = () => {
    return messages.map((message, index) => {
      return (
        <MessageItem
          key={index}
          message={message}
          idCurrentUser={idCurrentUser}
        />
      )
    })
  }
  return (
    <ContainerMsg className="scrool-none bg-scroolbar-white scroolbar">
      {renderMessages()}
    </ContainerMsg>
  )
}

const ContainerMsg = styled.div`
  box-sizing: border-box;
  padding: 16px;
  height: 100%;
  max-height: calc(100vh - 124px);
  overflow-y: auto;
`

export default MessageList
