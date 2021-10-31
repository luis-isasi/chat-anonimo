import React, { useState } from 'react'

import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send'
import { useContextUser } from '@Context/contextUser'
import { useContextApp } from '@Context/contextApp'

const SendMsg: React.FC<{ idChat: number }> = ({ idChat }) => {
  const [msg, setMsg] = useState<string>('')
  const {
    user: { id },
    sendMessage,
  } = useContextUser()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newMsg = {
      idUser: id,
      message: msg,
      date: new Date().toISOString().slice(0, 10),
    }
    sendMessage({ idChat, message: newMsg })
    setMsg('')
  }

  return (
    <Form onSubmit={onSubmit}>
      <input
        type="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Type a message..."
        className="bg-transparent ml-1 flex-grow px-5 py-1 outline-none rounded-full bg-dark-ligth "
      />
      <button type="submit">
        <SendIcon className="ml-2" />
      </button>
    </Form>
  )
}

const Form = styled.form`
  height: 62px;
  background-color: ${({ theme }) => theme.colors.panel};
  box-sizing: border-box;
  padding: 0 12px;
  display: flex;
  align-items: center;
`

export default SendMsg
