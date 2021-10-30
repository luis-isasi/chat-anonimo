import { useState } from 'react'

import styled from 'styled-components'

import User from '@Components/User'
import SearchUsers from '@Components/SearchUsers'
import ChatsList from '@Components/ChatsList'
import UserList from '@Components/UserList'
import type { User as UserType } from '@Types'
import { Header } from '../styled'

const BannerLeft = () => {
  const [usersList, setUsersList] = useState<UserType[]>([])

  return (
    <BannerLeftDiv className="border-r border-gray-700">
      <Header className="flex items-center">
        <User />
      </Header>
      <SearchUsers />
      <ChatsList />
      <UserList />
    </BannerLeftDiv>
  )
}

const BannerLeftDiv = styled.div`
  max-width: 400px;
`

export default BannerLeft
