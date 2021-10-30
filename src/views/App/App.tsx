import styled from 'styled-components'

import User from '@Components/User'

const App = () => {
  return (
    <div>
      <Container>
        <BannerLeft>
          <Header className="flex items-center">
            <User />
          </Header>
        </BannerLeft>
        <Chat>
          <Header className="bg-panel-default"></Header>
          CHAT
        </Chat>
      </Container>
    </div>
  )
}

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  min-width: 960px;
  height: 100vh;
  max-height: 100vh;
  margin: 0 auto;
  color: #fff;
  display: grid;
  grid-template-columns: minmax(100px, 400px) 1fr;
`

const BannerLeft = styled.div`
  max-width: 400px;

  border-right: 1px solid #a09696;
`

const Chat = styled.div`
  box-sizing: border-box;
`

const Header = styled.header`
  height: 60px;
  max-height: 60px;
  padding: 0 12px;
  background-color: ${({ theme }) => theme.colors.panelSecondary};
`

export default App
