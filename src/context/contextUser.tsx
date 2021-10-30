import { createContext, useContext, useState, useEffect } from 'react'

import { USER_SESSION } from '@Constants'
import { User } from '@Types'

interface ContextUser {
  user: User
  setUserName: (name: string) => void
}

//we create context theme
const ContextUser = createContext<ContextUser | undefined>(undefined)

const userDefault: User = {
  name: 'anonimo',
}

//Provider of context theme
export const ContextUserProvider = ({ children }) => {
  const [user, setUser] = useState<undefined | null | User>(undefined)

  useEffect(() => {
    const user: User = JSON.parse(sessionStorage.getItem(USER_SESSION))
    if (user) {
      setUser(user)
    } else {
      sessionStorage.setItem(USER_SESSION, JSON.stringify(userDefault))
      setUser(userDefault)
    }
  }, [])

  const setUserName = (name: string) => {
    const newUser: User = {
      ...user,
      name,
    }
    setUser(newUser)
    sessionStorage.setItem(USER_SESSION, JSON.stringify(newUser))
  }

  return (
    <ContextUser.Provider value={{ user, setUserName }}>
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
