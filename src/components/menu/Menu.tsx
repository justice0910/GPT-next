import Image from "next/image"
import {ChangeEvent, useState} from "react"
import Divide from "@/components/utils/Divide"
import ChatBox from "@/components/menu/ChatBox"
import MenuClear from "@/components/menu/MenuClear"
import MenuKey from "@/components/menu/MenuKey"
import MenuSettings from "@/components/menu/MenuSettings"

export interface IChat {
  id: number
  message: string
}

function Menu() {
  const [chats, setChats] = useState<IChat[]>([])
  const [search, setSearch] = useState<string>('')
  const [isSearch, setIsSearch] = useState<boolean>(false)

  const handlerAddChat = () => {
    setChats((prevState: IChat[]) => [...prevState, {id: Math.random(), message: 'new Chat'}])
  }

  return (
    <div className={'flex flex-col justify-between w-64 bg-menuColors-800 p-2'}>
      {/* Top */}
      <div className={'mb-4'}>
        <button
          className={'p-2 border rounded-lg mb-2 w-full text-left text-white'}
          onClick={handlerAddChat}
        >+ New chat
        </button>
        <div className={'relative rounded-lg'}>
          <input
            type="text"
            value={search}
            placeholder={'Search...'}
            className={'border border-gray-300 p-2 rounded-lg w-full bg-menuColors-700 focus:text-white'}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setSearch(e.target.value)
              setIsSearch(true)
            }}
            onBlur={() => {
              setSearch('')
              setIsSearch(false)
            }}
          />
          {isSearch && (
            <button className={'absolute right-0 top-0 mt-1 p-2 opacity-90'}>
              <Image src={'/x.svg'} alt={'x icon'} width={20} height={20}/>
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <Divide/>
      <div className={'flex-grow overflow-auto scrollable'}>
        {isSearch ? (
          chats.filter((chat: IChat) => chat.message.includes(search)).map((chat: IChat) => (
            <ChatBox key={chat.id} message={chat.message} id={chat.id} chatsArr={chats} setChatsArr={setChats}/>
          ))
        ) : (
          chats.map((chat: IChat) => (
            <ChatBox key={chat.id} message={chat.message} id={chat.id} chatsArr={chats} setChatsArr={setChats}/>
          ))
        )}
      </div>

      {/* Button */}
      <Divide/>
      <div className={'mt-4'}>
        <MenuClear setChats={setChats}/>
        <MenuKey/>
        <MenuSettings/>
      </div>
    </div>
  )
}

export default Menu
