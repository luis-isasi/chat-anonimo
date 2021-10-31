import { useState, useLayoutEffect, useRef } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const styleTransition = {
  transitionDuration: '200ms',
  transitionProperty: 'all',
  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
}

interface Props {
  nameList: string
  handleUpdate?: () => void
}

const BaseChatList: React.FC<Props> = ({
  nameList,
  children,
  handleUpdate,
}) => {
  const [isOpenList, setIsOpenList] = useState<boolean>(true)
  const [height, setHeight] = useState<number>(32)

  const handleClick = () => {
    setIsOpenList(!isOpenList)
  }
  const refDiv = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    //calculate the height
    if (isOpenList) {
      const height = refDiv.current.getBoundingClientRect().height
      setHeight(height)
    } else {
      setHeight(32)
    }
  }, [isOpenList])

  return (
    <div
      className="px-3 overflow-hidden mt-4"
      style={{
        height: `${height}px`,
        ...styleTransition,
      }}
    >
      <div ref={refDiv}>
        <div className="flex justify-between items-center">
          <h4>{nameList}</h4>
          <div>
            {handleUpdate && (
              <button
                onClick={handleUpdate}
                className="text-[12px] text-gray-600 hover:text-gray-200"
              >
                Actualizar
              </button>
            )}
            <button onClick={handleClick}>
              <KeyboardArrowDownIcon
                className={`${!isOpenList && 'rotate-180'}`}
                style={{
                  ...styleTransition,
                }}
              />
            </button>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default BaseChatList
