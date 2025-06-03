import Image from "next/image"
import {useState} from "react"
import Divide from "@/components/utils/Divide"
import ThemeMenu from "@/components/menu/ThemeMenu"
import GlobalMenu from "@/components/menu/GlobalMenu"

interface IProps {
  setShowModalSettings: (showModalSettings: boolean) => void
}

function Settings(props: IProps) {
  const {setShowModalSettings} = props
  const [showTheme, setShowTheme] = useState<boolean>(true)
  const [showGlobal, setShowGlobal] = useState<boolean>(false)

  const handlerTheme = () => {
    setShowTheme(true)
    setShowGlobal(false)
  }

  const handlerGlobal = () => {
    setShowTheme(false)
    setShowGlobal(true)
  }

  return (
    <div className={'w-full h-full p-4 flex flex-col rounded-lg bg-menuColors-800'}>
      <div className={'flex flex-row justify-between'}>
        <p className={'text-white mb-2'}>Settings</p>
        <Image
          src={'/x.svg'}
          alt={'x icon'}
          width={20}
          height={20}
          className={'mb-1 hover:cursor-pointer'}
          onClick={() => setShowModalSettings(false)}
        />
      </div>
      <Divide/>

      <div className={'flex flex-row mt-4'}>
        {/* Two-column Layout */}
        <div className={'w-1/3 flex flex-col mr-2'}>
          {/* Theme */}
          <div className={'flex p-2 mb-2 rounded-lg hover:cursor-pointer hover:bg-menuColors-700'} onClick={handlerTheme}>
            <Image src={'/sun.svg'} alt={'theme icon'} width={16} height={16} className={'mr-2'}/>
            <p className={'text-white'}>Theme</p>
          </div>
          {/* International */}
          <div className={'flex p-2 mb-2 rounded-lg hover:cursor-pointer hover:bg-menuColors-700'} onClick={handlerGlobal}>
            <Image src={'/globe.svg'} alt={'globe icon'} width={16} height={16} className={'mr-2'}/>
            <p className={'text-white'}>Global</p>
          </div>
        </div>

        <div className={'flex-1'}>
          {showTheme && !showGlobal && (
            <>
              <div className={'text-white p-2 flex flex-col justify-between'}>
                <p className={'mb-2'}>Theme</p>
                <ThemeMenu/>
              </div>
            </>
          )}

          {!showTheme && showGlobal && (
            <>
              <div className={'text-white p-2 flex flex-col justify-between'}>
                <p className={'mb-2'}>Global</p>
                <GlobalMenu/>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Settings
