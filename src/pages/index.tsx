import Head from 'next/head'
import Menu from "@/components/menu/Menu"
import Chat from "@/components/chat/Chat"

function Home() {
  return (
    <>
      <Head>
        <title>Next GPT</title>
        <meta name="description" content="A chatbot built using Next.js framework"/>
        <link rel="icon" href={`/favicon.ico`}/>
      </Head>

      <div className={'h-screen flex flex-row'}>
        <Menu/>
        <Chat/>
      </div>
    </>
  )
}

export default Home
