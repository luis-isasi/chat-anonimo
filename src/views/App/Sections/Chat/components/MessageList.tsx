import Message from './Message'
import type { Message as TypeMsg } from '@Types'

interface Props {
  messages: TypeMsg[]
}

const MessageList: React.FC<Props> = ({ messages }) => {
  return <div></div>
}

export default MessageList
