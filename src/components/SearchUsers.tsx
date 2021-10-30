import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'

const SearchUsers = () => {
  return (
    <ContainerSearchUsers>
      <div className="bg-panel-default w-full rounded-full px-3 text-sm font-light flex items-center ">
        <SearchIcon
          style={{ fontSize: '24px' }}
          className="fill-current text-gray-400"
        />
        <input
          type="text"
          placeholder="Search users..."
          className="bg-transparent ml-1 flex-grow px-3 py-1 outline-none"
        />
      </div>
    </ContainerSearchUsers>
  )
}

const ContainerSearchUsers = styled.div`
  min-height: 50px;
  max-height: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.dark.default};
  display: flex;
  align-items: center;
  padding: 0 12px;
`

export default SearchUsers
