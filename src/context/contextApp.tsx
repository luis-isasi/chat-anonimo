import { createContext, useContext, useEffect, useState } from 'react'

import { USERS_LIST } from '@Constants'
import { User } from '@Types'

interface ContextApp {
  usersList: User[]
}

//we create context theme
const ContextApp = createContext<ContextApp | undefined>(undefined)

//Provider of context theme
export const ContextAppProvider = ({ children }) => {
  const [usersList, setUsersList] = useState<User[] | undefined>(undefined)

  useEffect(() => {
    const usersList = JSON.parse(localStorage.getItem(USERS_LIST))

    if (!usersList) {
      setUsersList([])
      localStorage.setItem(USERS_LIST, JSON.stringify([]))
    } else {
      setUsersList(usersList)
    }
  }, [])

  return (
    <ContextApp.Provider value={{ usersList }}>{children}</ContextApp.Provider>
  )
}

export const useContextApp = () => {
  const data = useContext(ContextApp)

  if (data === undefined) {
    throw new Error('You must be whithin Provider context user')
  }

  return data
}
