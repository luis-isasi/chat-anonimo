import { useContextUser } from '@Context/contextUser'
import BaseChatList from './BaseChatList'
import UserItem from '../Chats/UserItem'
import { getKnownUsers } from '@Utils'

interface Props {
  textForFilter: string
}

const UserList: React.FC<Props> = ({ textForFilter = '' }) => {
  const {
    user: { id },
  } = useContextUser()

  const renderUsers = () => {
    const filteredKnownUsers = getKnownUsers(id).filter((user) =>
      user.name.toLowerCase().includes(textForFilter)
    )

    return filteredKnownUsers.map(({ id, name }) => (
      <UserItem key={id} name={name} id={id} />
    ))
  }

  return (
    <BaseChatList nameList="Usuarios Desconocidos">
      <div>{renderUsers()}</div>
    </BaseChatList>
  )
}

export default UserList
