import styled from 'styled-components'

import { useContextUser } from '@Context/contextUser'
import { BannerLeft, Chat } from './Sections'

const App = () => {
  const { isLoading } = useContextUser()

  if (isLoading) {
    return <div>Cargando Chat Web... 😀</div>
  }

  return (
    <Container>
      <BannerLeft />
      <Chat />
    </Container>
  )
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.dark.default};
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

export default App
