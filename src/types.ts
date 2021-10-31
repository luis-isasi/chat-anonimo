export interface UserBasic {
  id: number
  name: string
}

export interface User {
  name: string
  id: number | undefined
  chats: Chat[]
}

export interface Chat {
  id: number
  contact: UserBasic
}

export interface ChatData {
  id: number
  sender: UserBasic
  receiver: UserBasic
  messages: Message[]
}

export interface SelectedChat {
  chat: Chat
  chatData: ChatData
}

export interface Message {
  idUser: number
  message: string
  date?: string
}
