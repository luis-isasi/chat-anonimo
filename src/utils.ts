import { CHATS_LIST, USERS_LIST, USER_SESSION } from '@Constants'
import { User, Chat, UserBasic, ChatData, Message } from '@Types'

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
  return getChatsList().find((chat) => chat.id === id)
}

export const getChatsList = (): ChatData[] => {
  return JSON.parse(localStorage.getItem(CHATS_LIST))
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
  const chatsList = getChatsList()

  const newChatData: ChatData = {
    id: chatsList.length + 1,
    sender,
    receiver,
    messages: [],
  }

  //add to localstorage
  localStorage.setItem(CHATS_LIST, JSON.stringify([...chatsList, newChatData]))

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
  const chatsList = getChatsList()
  const chat = chatsList.find((chat) => chat.id === idChat)

  const newMessage: Message = {
    idUser: idChat,
    message: message.message,
    date: new Date().toLocaleString(),
  }

  chat.messages.push(newMessage)

  localStorage.setItem(CHATS_LIST, JSON.stringify(chatsList))
}
