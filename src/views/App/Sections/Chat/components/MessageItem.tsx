import styled from 'styled-components'

import type { Message } from '@Types'

interface Props {
  message: Message
  idCurrentUser: number
}

const MessageItem: React.FC<Props> = ({ message, idCurrentUser }) => {
  const isMsgFromCurrentUser = message.idUser === idCurrentUser

  return (
    <div
      className={`w-ful my-2 flex ${
        isMsgFromCurrentUser ? 'justify-end' : 'justify-start'
      }`}
    >
      <div
        className={`max-w-max px-2 py-1 rounded-lg ${
          isMsgFromCurrentUser ? 'bg-green-900' : 'bg-gray-700'
        }`}
      >
        <p>{message.message}</p>
        <p className="text-[0.55rem] font-normal my-0 text-gray-400">
          {message.date}
        </p>
      </div>
    </div>
  )
}

export default MessageItem
