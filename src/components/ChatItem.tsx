import styled from 'styled-components'

import type { User } from '@Types'
import PersonIcon from '@mui/icons-material/Person'

const ChatItem: React.FC<{ user: User }> = ({ user }) => {
  const { name } = user

  const handleClick = () => {
    console.log('asfa')
  }

  return (
    <StyledUserItem onClick={handleClick}>
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
    </StyledUserItem>
  )
}

const StyledUserItem = styled.li`
  height: 60px;
  display: flex;
  align-items: center;
  margin: 0 0 4px 0;

  &:hover {
    cursor: pointer;
  }
`

export default ChatItem
