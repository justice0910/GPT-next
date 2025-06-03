import Image from "next/image"
import {IChat} from "@/components/menu/Menu"

interface IProps {
  setChats: (chats: IChat[]) => void
}

function MenuClear(props: IProps) {
  const {setChats} = props

  return (
    <div
      className={'flex flex-row rounded-lg mb-1 hover:bg-menuColors-700 hover:cursor-pointer'}
      onClick={() => {setChats([])}}
    >
      <Image
        src={'/trash.svg'}
        alt={'trash icon'}
        width={16}
        height={16}
        className={'ml-2'}
      />
      <button className={'p-2 text-left text-white'}>Clear Conversations</button>
    </div>
  )
}

export default MenuClear
