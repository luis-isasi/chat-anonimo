import { createContext, useContext, useEffect, useState } from 'react'

import { USERS_LIST, CHATS_DATA, CHATS_LIST } from '@Constants'
import { SelectedChat } from '@Types'

interface ContextApp {
  selectedChat: SelectedChat
  setSelectedChat: ({ chat, chatData }: SelectedChat) => void
}

//we create context theme
const ContextApp = createContext<ContextApp | undefined>(undefined)

//Provider of context theme
export const ContextAppProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState<SelectedChat>(undefined)

  useEffect(() => {
    const usersList = JSON.parse(localStorage.getItem(USERS_LIST))
    const chatsData = JSON.parse(localStorage.getItem(CHATS_DATA))
    const chatsList = JSON.parse(localStorage.getItem(CHATS_LIST))

    if (!usersList) {
      localStorage.setItem(USERS_LIST, JSON.stringify([]))
    }

    if (!chatsData) {
      localStorage.setItem(CHATS_DATA, JSON.stringify([]))
    }

    if (!chatsList) {
      localStorage.setItem(CHATS_LIST, JSON.stringify([]))
    }
  }, [])

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
