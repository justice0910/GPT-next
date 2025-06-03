import Image from "next/image"


function MenuKey() {
  return (
    <div className={'flex flex-row rounded-lg mb-1 hover:bg-menuColors-700'}>
      <Image
        src={'/key.svg'}
        alt={'key icon'}
        width={16}
        height={16}
        className={'ml-2'}
      />
      <button className={'p-2 text-left text-white'}>OpenAI key</button>
    </div>
  )
}

export default MenuKey
