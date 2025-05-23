import ChatInput from "@/components/chat/ChatInput"
import Footer from "@/components/utils/Footer"

function Chat() {
  return (
    <div className={'flex-1 flex flex-col justify-between items-center p-2'}>

      {/* Content Area */}
      <div className={'flex flex-col items-center justify-center'}>
        <h2 className={'text-2xl m-2'}>Welcome to Next Chatbot !</h2>
        <p>It&apos;s an open-source project primarily aimed at learning.</p>
        <p>Next Chatbot allows you to plug in your GPT API key to provide services. </p>
      </div>

      <div className={'grow'}></div>

      <ChatInput/>
      <Footer/>
    </div>
  )
}

export default Chat
