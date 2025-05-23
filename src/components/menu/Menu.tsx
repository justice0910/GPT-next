import Divide from "@/components/utils/Divide"

function Menu() {

  return (
    <div className={'flex flex-col justify-between w-64 bg-menuColors-800 p-2'}>
      {/*Top*/}
      <div className={'mb-4'}>
        <button className={'p-2 border rounded-lg mb-2 w-full text-left text-white'}>+ New chat</button>
        <input
          type="text"
          placeholder={'Search...'}
          className={'border border-gray-300 p-1 rounded-l w-full focus-visible:outline-none'}
        />
      </div>

      {/*Content*/}
      <Divide/>
      <div className={'flex-grow'}></div>

      {/*Button*/}
      <Divide/>
      <div className={'mt-4'}>
        <button className={'p-2 rounded-lg mb-2 w-full text-left text-white hover:bg-menuColors-700'}>Clear Conversations</button>
        <button className={'p-2 rounded-lg mb-2 w-full text-left text-white hover:bg-menuColors-700'}>OpenAI key</button>
        <button className={'p-2 rounded-lg mb-2 w-full text-left text-white hover:bg-menuColors-700'}>Settings</button>
      </div>
    </div>
  )
}

export default Menu
