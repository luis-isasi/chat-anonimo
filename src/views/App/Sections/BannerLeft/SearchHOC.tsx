import { useState } from 'react'

import SearchUsers from '@Components/SearchUsers'
import ChatsList from '@/src/components/Lists/ChatsList'
import UserList from '@/src/components/Lists/UserList'

/* 
Al crear un componente como esto, hacemos que solo se este maneje 
los demas componentes a través de su state, la idea es seguir el concepto 
de Colocation de Kent C. Dodds. ()
*/

const SearchHOC = () => {
  const [textForSearch, setTextForSearch] = useState<string>('')

  return (
    <>
      <SearchUsers text={textForSearch} setText={setTextForSearch} />
      <ChatsList />
      <UserList textForFilter={textForSearch} />
    </>
  )
}

export default SearchHOC
