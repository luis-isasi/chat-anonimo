import { useContextUser } from '@Context/contextUser'
import ChatItem from '../Chats/ChatItem'
import BaseChatList from './BaseChatList'
import { getChatDataById, getChatsCurrentUser } from '@Utils'

const ChatsList = () => {
  const { user } = useContextUser()

  const renderChats = () => {
    const chats = getChatsCurrentUser(user.id)

    if (user.chats.length > chats.length) {
      return user.chats.map((chat) => {
        const chatData = getChatDataById(chat.id)
        return <ChatItem key={chat.id} chat={chat} chatData={chatData} />
      })
    } else {
      return chats.map((chat) => {
        const chatData = getChatDataById(chat.id)
        return <ChatItem key={chat.id} chat={chat} chatData={chatData} />
      })
    }
  }

  return (
    <BaseChatList nameList="Mis Chats 😀">
      <div>{renderChats()}</div>
    </BaseChatList>
  )
}

export default ChatsList
