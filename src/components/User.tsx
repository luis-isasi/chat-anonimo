import { useState } from 'react'
import { useContextUser } from '@Context/contextUser'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'

const User = () => {
  const { user, setUserName } = useContextUser()
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const handleClick = () => {
    setIsEditing(!isEditing)
  }

  return (
    <div className="flex items-center">
      <AccountCircleIcon className="mr-1" />
      {isEditing ? (
        <input
          type="text"
          value={user?.name}
          onChange={(e) => setUserName(e.target.value)}
          className="bg-transparent w-40 border-b border-gray-400 px-2 "
        />
      ) : (
        <h1>{user?.name}</h1>
      )}
      <button
        type="button"
        onClick={handleClick}
        className="ml-2 opacity-25 hover:opacity-100"
      >
        {isEditing ? (
          <SaveOutlinedIcon style={{ fontSize: '20px' }} />
        ) : (
          <ModeEditOutlinedIcon style={{ fontSize: '20px' }} />
        )}
      </button>
    </div>
  )
}

export default User
