import { useState } from 'react'

import styled from 'styled-components'

import User from '@Components/User'
import SearchUsers from '@Components/SearchUsers'
import ChatsList from '@/src/components/Lists/ChatsList'
import UserList from '@/src/components/Lists/UserList'
import type { User as UserType } from '@Types'
import { Header } from '../styled'

const BannerLeft = () => {
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
