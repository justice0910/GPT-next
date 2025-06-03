import Image from "next/image"

function ChatInput() {
  return (
    <div className={'relative border-2 border-gray-300 p-1 rounded-lg '}>
      <textarea
        name="message"
        id="chat-input"
        cols={100}
        rows={1}
        className={'p-1 w-full resize-none focus-visible:outline-none'}
        placeholder='Send a message...'
      />
      <button className={'absolute right-1 top-1 mr-2 mt-2 opacity-30'}>
        <Image src={'/send.svg'} alt={'Send'} width={20} height={20}/>
      </button>
    </div>
  )
}

export default ChatInput
