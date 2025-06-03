import Image from "next/image"
import {useState} from "react"
import Settings from "@/components/menu/Settings"
import ModalOverlay from "@/components/menu/ModalOverlay"

function MenuSettings() {
  const [showModalSettings, setShowModalSettings] = useState<boolean>(false)

  return (
    <>
      {/* Modal */}
      {showModalSettings && (
        <ModalOverlay onClose={() => setShowModalSettings(false)}>
          <Settings setShowModalSettings={setShowModalSettings}/>
        </ModalOverlay>
      )}

      <div
        className={'flex flex-row rounded-lg mb-1 hover:bg-menuColors-700 hover:cursor-pointer'}
        onClick={() => setShowModalSettings(!showModalSettings)}
      >
        <Image
          src={'/settings.svg'}
          alt={'settings icon'}
          width={16}
          height={16}
          className={'ml-2'}
        />
        <button className={'p-2 text-left text-white'}>Settings</button>
      </div>
    </>
  )
}

export default MenuSettings
