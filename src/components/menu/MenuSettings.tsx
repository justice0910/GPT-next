import Image from "next/image"


function MenuSettings() {
  return (
    <div className={'flex flex-row rounded-lg mb-1 hover:bg-menuColors-700'}>
      <Image
        src={'/settings.svg'}
        alt={'settings icon'}
        width={16}
        height={16}
        className={'ml-2'}
      />
      <button className={'p-2 text-left text-white'}>Settings</button>
    </div>
  )
}

export default MenuSettings
