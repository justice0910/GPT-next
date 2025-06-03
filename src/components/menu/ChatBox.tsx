import Image from "next/image"
import {ChangeEvent, Dispatch, SetStateAction, useState} from "react"
import {IChat} from "@/components/menu/Menu"


interface IProps {
  id: number;
  chatsArr: IChat[];
  setChatsArr: Dispatch<SetStateAction<IChat[]>>;
}


function ChatBox(props: IProps) {
  const {id, chatsArr, setChatsArr} = props
  const [chatName, setChatName] = useState<string>('new Chat')
  const [inputValue, setInputValue] = useState<string>(chatName)
  const [isEdit, setIsEdit] = useState<boolean>(false)


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
            <p>{chatName.slice(0, 18)}</p>
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
            onClick={() => {
              setIsEdit(!isEdit)
              setChatName(inputValue)
            }}
          />
          <Image
            src={'/x.svg'}
            alt={'x icon'}
            width={16}
            height={16}
            className={'mr-2 cursor-pointer'}
            onClick={() => {
              setChatName(chatName)
              setInputValue(chatName)
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
              const newChatsArr = chatsArr.filter(chat => chat.id !== id)
              setChatsArr(newChatsArr)
            }}
          />
        </div>
      )}
    </div>
  )
}

export default ChatBox
