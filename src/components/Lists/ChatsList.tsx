import { useContextUser } from '@Context/contextUser'
import ChatItem from '../Chats/ChatItem'
import BaseChatList from './BaseChatList'
import { getChatDataById } from '@Utils'

const ChatsList = () => {
  const { user } = useContextUser()

  const renderChats = () => {
    if (user.chats.length) {
      return user.chats.map((chat) => {
        const chatData = getChatDataById(chat.id)
        return <ChatItem key={chat.id} chat={chat} chatData={chatData} />
      })
    }
  }

  return (
    <BaseChatList nameList="Chats 😀">
      <div>{renderChats()}</div>
    </BaseChatList>
  )
}

export default ChatsList
