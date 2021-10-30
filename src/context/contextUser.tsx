import { createContext, useContext, useState, useEffect } from 'react'

import { USER_SESSION, USERS_LIST } from '@Constants'
import { User } from '@Types'

interface ContextUser {
  user: User
  setUserName: ({ name, id }: { name: string; id: number }) => void
  isLoading: boolean
}

//we create context theme
const ContextUser = createContext<ContextUser | undefined>(undefined)

//Provider of context theme
export const ContextUserProvider = ({ children }) => {
  const [user, setUser] = useState<undefined | User>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(true)

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
        name: 'anonimo',
        id: usersList ? usersList.length : 0,
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

  return (
    <ContextUser.Provider value={{ user, setUserName, isLoading }}>
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
