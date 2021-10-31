import styled from 'styled-components'

import User from '@Components/User'
import SearchHOC from './SearchHOC'
import { Header } from '../../styled'

const BannerLeft = () => {
  return (
    <BannerLeftDiv className="border-r border-gray-700">
      <Header className="flex items-center">
        <User />
      </Header>
      <SearchHOC />
    </BannerLeftDiv>
  )
}

const BannerLeftDiv = styled.div`
  max-width: 400px;
`

export default BannerLeft
