import { useContextUser } from '@Context/contextUser'
import BaseChatList from './BaseChatList'
import UserItem from '../Chats/UserItem'
import { getKnownUsers } from '@Utils'

const UserList = () => {
  const {
    user: { id },
  } = useContextUser()

  const renderUsers = () => {
    const knownUsers = getKnownUsers(id)
    return knownUsers.map(({ id, name }) => {
      return <UserItem key={id} name={name} id={id} />
    })
  }

  return (
    <BaseChatList nameList="Usuarios Desconocidos">
      <div>{renderUsers()}</div>
    </BaseChatList>
  )
}

export default UserList
