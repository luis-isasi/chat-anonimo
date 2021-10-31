import { createContext, useContext, useEffect, useState } from 'react'

import { USERS_LIST, CHATS_LIST } from '@Constants'
import { User, SelectedChat } from '@Types'

interface ContextApp {
  // usersList: User[]
  selectedChat: SelectedChat
  setSelectedChat: ({ chat, chatData }: SelectedChat) => void
}

//we create context theme
const ContextApp = createContext<ContextApp | undefined>(undefined)

//Provider of context theme
export const ContextAppProvider = ({ children }) => {
  // const [usersList, setUsersList] = useState<User[] | undefined>(undefined)
  const [selectedChat, setSelectedChat] = useState<SelectedChat>(undefined)

  useEffect(() => {
    const usersList = JSON.parse(localStorage.getItem(USERS_LIST))
    const chatsList = JSON.parse(localStorage.getItem(CHATS_LIST))

    if (!usersList) {
      // setUsersList([])
      localStorage.setItem(USERS_LIST, JSON.stringify([]))
    }
    // else {
    //   setUsersList(usersList)
    // }

    if (!chatsList) {
      localStorage.setItem(CHATS_LIST, JSON.stringify([]))
    }
  }, [])

  // //actualizar chat del usuario es decir en el selectedChat
  // const addNewChat = (chat: Chat) => {
  //   setSelectedChat(chat)

  //   //agregarlo al usuario receptor
  //   // const user = usersList.find((user) => user.id === chat.receiverId)

  //   //id del receptor
  //   //id del emisor
  //   //mensaje
  //   //fecha?
  //   //idchat receptor
  //   //idchat emisor
  //   //insertar msg en chat del usuario
  //   //intertar msg en chat del receptor con el id del chat en el receptor y id del emisor
  // }

  return (
    <ContextApp.Provider value={{ selectedChat, setSelectedChat }}>
      {children}
    </ContextApp.Provider>
  )
}

export const useContextApp = () => {
  const data = useContext(ContextApp)

  if (data === undefined) {
    throw new Error('You must be whithin Provider context user')
  }

  return data
}
