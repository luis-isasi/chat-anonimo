import { useContextApp } from '@Context/contextApp'
import BaseChatItem from './BaseChatItem'
import type { Chat, ChatData } from '@Types'

const ChatItem: React.FC<{ chat: Chat; chatData: ChatData }> = ({
  chat,
  chatData,
}) => {
  const { contact } = chat
  const { setSelectedChat } = useContextApp()

  //TODO: Debemos evitar el re-render al seleccionar el mismo chat
  const handleClick = () => {
    setSelectedChat({ chat, chatData })
  }

  return <BaseChatItem name={contact.name} onClick={handleClick} />
}

export default ChatItem
