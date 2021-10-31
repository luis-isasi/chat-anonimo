import styled from 'styled-components'
import PersonIcon from '@mui/icons-material/Person'

interface Props {
  name: string
  onClick: () => void
}

const BaseChatItem: React.FC<Props> = ({ name, onClick }) => {
  return (
    <StyledChatItem onClick={onClick}>
      <div className="min-w-16 h-15 flex justify-center items-center">
        <PersonIcon
          style={{
            fontSize: '2rem',
          }}
          className="fill-current text-gray-500"
        />
      </div>
      <div className="border-b border-gray-700 w-full h-full flex items-center">
        {name}
      </div>
    </StyledChatItem>
  )
}

const StyledChatItem = styled.li`
  height: 60px;
  display: flex;
  align-items: center;
  margin: 0 0 4px 0;

  &:hover {
    cursor: pointer;
  }
`

export default BaseChatItem
