import { useContextApp } from '@Context/contextApp'

import ChatItem from './ChatItem'
import BaseChatList from './BaseChatList'

const ChatsList = () => {
  const { usersList } = useContextApp()

  const renderUsersItems = () => {
    if (usersList.length) {
      return usersList.map((user) => <ChatItem key={user.id} user={user} />)
    }
  }

  return (
    <BaseChatList nameList="Chats 😀">
      <div>{renderUsersItems()}</div>
    </BaseChatList>
  )
}

export default ChatsList
