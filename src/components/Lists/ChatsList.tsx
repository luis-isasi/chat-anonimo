import { useContextUser } from '@Context/contextUser'
import ChatItem from '../Chats/ChatItem'
import BaseChatList from './BaseChatList'

const ChatsList = () => {
  const { user } = useContextUser()

  const renderUsersItems = () => {
    if (user.chats.length) {
      return user.chats.map((chat) => <ChatItem key={chat.id} chat={chat} />)
    }
  }

  return (
    <BaseChatList nameList="Chats 😀">
      <div>{renderUsersItems()}</div>
    </BaseChatList>
  )
}

export default ChatsList
