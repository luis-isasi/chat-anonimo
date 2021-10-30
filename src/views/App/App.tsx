import styled from 'styled-components'

const App = () => {
  return (
    <div>
      <Container>
        <BannerLeft>CHATS</BannerLeft>
        <Chat>CHAT</Chat>
      </Container>
    </div>
  )
}

const Container = styled.div`
  background-color: #c7aeae;
  width: 100%;
  max-width: 1280px;
  height: 100vh;
  max-height: 100vh;
  margin: 0 auto;
  display: flex;
`

const BannerLeft = styled.div`
  background-color: skyblue;
  flex-grow: 3;
`

const Chat = styled.div`
  background-color: blue;
  flex-grow: 7;
`

export default App
