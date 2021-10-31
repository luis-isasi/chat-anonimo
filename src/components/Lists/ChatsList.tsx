import { useContextUser } from '@Context/contextUser'

import ChatItem from '../Chats/ChatItem'
import BaseChatList from './BaseChatList'
import { getChatDataById, getChatsCurrentUserLS } from '@Utils'

interface Props {
  textForSearch: string
}

const ChatsList: React.FC<Props> = ({ textForSearch = '' }) => {
  const { user, setUser } = useContextUser()

  const renderChats = () => {
    const chats = getChatsCurrentUserLS(user.id)
    let definedChats

    if (user.chats.length > chats.length) {
      definedChats = user.chats
    } else definedChats = chats

    const filteredChats = definedChats.filter((chat) =>
      chat.contact.name.toLowerCase().includes(textForSearch)
    )

    return filteredChats.map((chat) => {
      const chatData = getChatDataById(chat.id)
      return <ChatItem key={chat.id} chat={chat} chatData={chatData} />
    })
  }

  const updateChats = () => {
    const chats = getChatsCurrentUserLS(user.id)
    setUser({ ...user, chats })
  }

  return (
    <BaseChatList nameList="Mis Chats 😀" handleUpdate={updateChats}>
      <div>{renderChats()}</div>
    </BaseChatList>
  )
}

export default ChatsList
