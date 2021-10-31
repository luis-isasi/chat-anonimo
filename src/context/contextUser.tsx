import { createContext, useContext, useState, useEffect } from 'react'

import { USER_SESSION, USERS_LIST } from '@Constants'
import { User, Chat, UserBasic, ChatData } from '@Types'
import { createChatLS, createChatDataLS, createChatReceiverLS } from '@Utils'
interface ContextUser {
  user: User
  setUserName: ({ name, id }: { name: string; id: number }) => void
  isLoading: boolean
  addNewChat: ({
    sender,
    receiver,
  }: {
    sender: UserBasic
    receiver: UserBasic
  }) => { chat: Chat; chatData: ChatData }
}

//we create context theme
const ContextUser = createContext<ContextUser | undefined>(undefined)

//Provider of context theme
export const ContextUserProvider = ({ children }) => {
  const [user, setUser] = useState<undefined | User>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  console.log({ user })

  useEffect(() => {
    if (user) {
      setIsLoading(false)
    }
  }, [user])

  useEffect(() => {
    const user: User = JSON.parse(sessionStorage.getItem(USER_SESSION))
    const usersList: User[] = JSON.parse(localStorage.getItem(USERS_LIST))

    if (user) {
      setUser(user)
    } else {
      const newUser: User = {
        id: usersList ? usersList.length : 0,
        name: 'anonimo',
        chats: [],
      }
      sessionStorage.setItem(USER_SESSION, JSON.stringify(newUser))

      if (usersList) {
        localStorage.setItem(
          USERS_LIST,
          JSON.stringify([...usersList, newUser])
        )
      } else {
        localStorage.setItem(USERS_LIST, JSON.stringify([newUser]))
      }

      setUser(newUser)
    }
  }, [])

  const setUserName = ({ name, id }: { name: string; id: number }) => {
    const newUser: User = {
      ...user,
      name,
      id,
    }

    const filteredUsersList = JSON.parse(
      localStorage.getItem(USERS_LIST)
    ).filter(({ id }) => id !== newUser.id)

    sessionStorage.setItem(USER_SESSION, JSON.stringify(newUser))
    localStorage.setItem(
      USERS_LIST,
      JSON.stringify([...filteredUsersList, newUser])
    )
    setUser(newUser)
  }

  const addNewChat = ({
    sender,
    receiver,
  }: {
    sender: UserBasic
    receiver: UserBasic
  }): { chat: Chat; chatData: ChatData } => {
    //Steps:
    //create chatbase
    const chatData = createChatDataLS({ sender, receiver })

    const newChat = {
      id: chatData.id,
      contact: {
        id: receiver.id,
        name: receiver.name,
      },
    }

    //update state current user
    setUser({ ...user, chats: [...user.chats, newChat] })

    //creatte chat
    createChatLS({ currentUser: user, newChat })

    //create chat receiver
    createChatReceiverLS({
      idReceiver: receiver.id,
      currentUser: sender,
    })

    return { chat: newChat, chatData }
  }

  return (
    <ContextUser.Provider value={{ user, setUserName, isLoading, addNewChat }}>
      {children}
    </ContextUser.Provider>
  )
}

export const useContextUser = () => {
  const data = useContext(ContextUser)

  if (data === undefined) {
    throw new Error('You must be whithin Provider context user')
  }

  return data
}
