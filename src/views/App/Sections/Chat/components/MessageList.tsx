import styled from 'styled-components'

import Message from './Message'
import type { Message as TypeMsg } from '@Types'

interface Props {
  messages: TypeMsg[]
}

const MessageList: React.FC<Props> = ({ messages }) => {
  console.log({ messages })
  return <ContainerMsg>MENSAJES</ContainerMsg>
}

const ContainerMsg = styled.div``

export default MessageList
