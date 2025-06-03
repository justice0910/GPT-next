import Image from "next/image"
import {ChangeEvent, Dispatch, SetStateAction, useState} from "react"
import {IChat} from "@/components/menu/Menu"

interface IProps {
  id: number
  message: string
  chatsArr: IChat[]
  setChatsArr: Dispatch<SetStateAction<IChat[]>>
}

function ChatBox(props: IProps) {
  const {id, message, chatsArr, setChatsArr} = props
  const [inputValue, setInputValue] = useState<string>(message)
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const handlerCheckClick = () => {
    setIsEdit(!isEdit)
    const updatedChats: IChat[] = chatsArr.map((chat: IChat) => {
      if (chat.id === id) {
        return {...chat, message: inputValue}
      }
      return chat
    })
    setChatsArr(updatedChats)
  }

  return (
    <div className={'flex flex-row justify-between relative mt-2 p-2 text-white rounded-lg hover:bg-menuColors-700 hover:cursor-pointer'}>
      {/* content */}
      <div className={'flex'}>
        <Image
          src={'/message.svg'}
          alt={'chat icon'}
          width={16}
          height={16}
          className={'mr-2'}
        />
        <div className={'mr-2'}>
          {isEdit ? (
            <input
              type="text"
              value={inputValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
              className={'w-10/12 border p bg-transparent'}
            />
          ) : (
            <p>{message.slice(0, 18)}</p>
          )}
        </div>
      </div>

      {/* icon */}
      {isEdit ? (
        <div className={'flex absolute right-0 top-0 mt-3'}>
          <Image
            src={'/check.svg'}
            alt={'check icon'}
            width={16}
            height={16}
            className={'mr-2 cursor-pointer'}
            onClick={handlerCheckClick}
          />
          <Image
            src={'/x.svg'}
            alt={'x icon'}
            width={16}
            height={16}
            className={'mr-2 cursor-pointer'}
            onClick={() => {
              setInputValue(message)
              setIsEdit(!isEdit)
            }}
          />
        </div>
      ): (
        <div className={'flex absolute right-0 top-0 mt-3'}>
          <Image
            src={'/edit.svg'}
            alt={'edit icon'}
            width={16}
            height={16}
            className={'mr-2 cursor-pointer'}
            onClick={() => setIsEdit(!isEdit)}
          />
          <Image
            src={'/trash.svg'}
            alt={'delete icon'}
            width={16}
            height={16}
            className={'mr-2 cursor-pointer'}
            onClick={() => {
              const newChatsArr: IChat[] = chatsArr.filter((chat: IChat) => chat.id !== id)
              setChatsArr(newChatsArr)
            }}
          />
        </div>
      )}
    </div>
  )
}

export default ChatBox
