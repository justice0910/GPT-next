import Image from "next/image"
import {ChangeEvent, useState} from "react"
import Divide from "@/components/utils/Divide"

interface IProps {
  setShowModalKey: (showModalKey: boolean) => void
}

function KeyModal(props: IProps) {
  const {setShowModalKey} = props
  const [inputValue, setInputValue] = useState<string>('')

  return (
    <>
      <div className={'w-full h-full p-4 flex flex-col rounded-lg bg-menuColors-800'}>
        <div className={'flex flex-row justify-between'}>
          <p className={'text-white mb-2'}>API Key</p>
          <Image
            src={'/x.svg'}
            alt={'x icon'}
            width={20}
            height={20}
            className={'mb-1 hover:cursor-pointer'}
            onClick={() => setShowModalKey(false)}
          />
        </div>
        <Divide/>

        <div className={'flex flex-col mt-2 text-white'}>
          <p>OpenAI API Key:</p>
          <div className={'flex flex-row justify-between mt-2'}>
            <input
              type="text"
              value={inputValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
              className={'w-3/4 border border-gray-300 p-2 rounded-lg bg-menuColors-700 mt-2'}
            />
            <button className={'w-1/5 h-3/4 mt-2 rounded-lg bg-emerald-800 hover:bg-emerald-700'}>Save</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default KeyModal
