import Image from "next/image"
import {useState} from "react"
import ModalOverlay from "@/components/menu/ModalOverlay"
import KeyModal from "@/components/menu/KeyModal"

function MenuKey() {
  const [showModalKey, setShowModalKey] = useState<boolean>(false)

  return (
    <>
      {showModalKey && (
        <ModalOverlay onClose={() => setShowModalKey(false)}>
          <KeyModal setShowModalKey={setShowModalKey}/>
        </ModalOverlay>
      )}

      <div
        className={'flex flex-row rounded-lg mb-1 hover:bg-menuColors-700 hover:cursor-pointer'}
        onClick={() => setShowModalKey(true)}
      >
        <Image
          src={'/key.svg'}
          alt={'key icon'}
          width={16}
          height={16}
          className={'ml-2'}
        />
        <button className={'p-2 text-left text-white'}>OpenAI key</button>
      </div>
    </>
  )
}

export default MenuKey
