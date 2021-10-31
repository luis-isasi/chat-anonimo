import { useContextApp } from '@Context/contextApp'
import { useContextUser } from '@Context/contextUser'

import BaseChatItem from './BaseChatItem'

interface Props {
  name: string
  id: number
}

const UserItem: React.FC<Props> = ({ name, id }) => {
  const { user, addNewChat } = useContextUser()
  const { setSelectedChat } = useContextApp()

  const handleClick = () => {
    const sender = { id: user.id, name: user.name }
    const receiver = { id, name }

    const { chat, chatData } = addNewChat({ sender, receiver })
    setSelectedChat({ chat, chatData })
  }

  return <BaseChatItem name={name} onClick={handleClick} />
}

export default UserItem
