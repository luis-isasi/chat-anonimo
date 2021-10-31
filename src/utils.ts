import { CHATS_DATA, USERS_LIST, USER_SESSION, CHATS_LIST } from '@Constants'
import {
  User,
  Chat,
  UserBasic,
  ChatData,
  Message,
  ChatsReference,
} from '@Types'

export const getUserById = (id: number): User => {
  return getAllUsers().find((user) => user.id === id)
}

export const getAllUsers = (): User[] => {
  return JSON.parse(localStorage.getItem(USERS_LIST))
}

export const getKnownUsers = (idCurrentUser: number) => {
  return getAllUsers().filter((user) => user.id !== idCurrentUser)
}

export const getChatDataById = (id: number) => {
  return getChatsData().find((chat) => chat.id === id)
}

export const getChatsList = (): ChatsReference[] => {
  return JSON.parse(localStorage.getItem(CHATS_LIST))
}

export const getChatsData = (): ChatData[] => {
  return JSON.parse(localStorage.getItem(CHATS_DATA))
}

export const filterUsersList = (text: string) => {
  return getAllUsers().filter((user) => user.name.toLowerCase().includes(text))
}

export const filterChatsList = ({
  text,
  chats = [],
}: {
  text: string
  chats: Chat[]
}) => {
  return chats.filter((chat) => chat.contact.name.toLowerCase().includes(text))
}

//get all chats of current user
export const getChatsCurrentUserLS = (idCurrentUser: number) => {
  const allChatsData = getChatsData()
  const chatsCurrentUser = []

  allChatsData.forEach((chatData) => {
    if (chatData.receiver.id === idCurrentUser) {
      chatsCurrentUser.push({
        id: chatData.id,
        contact: { id: chatData.sender.id, name: chatData.sender.name },
      })
    }

    if (chatData.sender.id === idCurrentUser) {
      chatsCurrentUser.push({
        id: chatData.id,
        contact: { id: chatData.receiver.id, name: chatData.receiver.name },
      })
    }
  })

  return chatsCurrentUser
}

//create new chat in current user
export const createChatLS = ({
  newChat,
  currentUser,
}: {
  newChat: Chat
  currentUser: User
}) => {
  sessionStorage.setItem(
    USER_SESSION,
    JSON.stringify({ ...currentUser, chats: [...currentUser.chats, newChat] })
  )
}

//insert new chat in user receiver
export const createChatReceiverLS = ({
  idReceiver,
  currentUser,
}: {
  idReceiver: number
  currentUser: UserBasic
}) => {
  const allUsers = getAllUsers()
  const userReceiver = getUserById(idReceiver)

  console.log({ userReceiver })

  const newChat: Chat = {
    id: userReceiver.chats.length + 1,
    contact: currentUser,
  }

  //create new chat in user receiver
  const updatedUserReceiver: User = {
    ...userReceiver,
    chats: [...userReceiver.chats, newChat],
  }

  const allUsersFilter = allUsers.filter((user) => user.id !== idReceiver)
  localStorage.setItem(
    USERS_LIST,
    JSON.stringify([...allUsersFilter, updatedUserReceiver])
  )
}

//create new chatBase
export const createChatDataLS = ({
  sender,
  receiver,
}: {
  sender: UserBasic
  receiver: UserBasic
}): ChatData => {
  const chatsData = getChatsData()

  const newChatData: ChatData = {
    id: chatsData.length + 1,
    sender,
    receiver,
    messages: [],
  }

  //add to localstorage
  localStorage.setItem(CHATS_DATA, JSON.stringify([...chatsData, newChatData]))

  return newChatData
}

//add new message to chatbase
export const addMessageLS = ({
  idChat,
  message,
}: {
  idChat: number
  message: Message
}) => {
  const chatsData = getChatsData()
  const chat = chatsData.find((chat) => chat.id === idChat)

  const newMessage: Message = {
    idUser: message.idUser,
    message: message.message,
    date: new Date().toLocaleString(),
  }

  chat.messages.push(newMessage)

  localStorage.setItem(CHATS_DATA, JSON.stringify(chatsData))
}
