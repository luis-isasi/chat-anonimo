import { useContextApp } from '@Context/contextApp'
import BaseChatItem from './BaseChatItem'
import type { Chat } from '@Types'

const ChatItem: React.FC<{ chat: Chat }> = ({ chat }) => {
  const { contact } = chat
  const { setSelectedChat, selectedChat } = useContextApp()

  //TODO: Debemos evitar el re-render al seleccionar el mismo chat
  const handleClick = () => {
    setSelectedChat({ chat, chatData: selectedChat.chatData })
  }

  return <BaseChatItem name={contact.name} onClick={handleClick} />
}

export default ChatItem
