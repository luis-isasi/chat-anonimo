import BaseChatList from './BaseChatList'
import { useContextApp } from '@Context/contextApp'
import ChatItem from './ChatItem'

const UserList = () => {
  const { usersList } = useContextApp()

  const renderUsers = () => {
    if (usersList.length) {
      return usersList.map((user) => <ChatItem key={user.id} user={user} />)
    }
  }

  return (
    <BaseChatList nameList="Usuarios 😀">
      <div>{renderUsers()}</div>
    </BaseChatList>
  )
}

export default UserList
