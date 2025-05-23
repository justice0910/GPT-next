import Image from "next/image"

function Footer() {
  return (
    <>
      <footer className={'flex flex-row'}>
        <p className={'mr-2'}>From © Lesenelir Zhou</p>
        <a href={'https://github.com/lesenelir'} target={'_blank'} className={'m-auto'}>
          <Image
            src={'/github.svg'}
            alt={'Github'}
            width={16}
            height={16}
          />
        </a>
      </footer>
    </>
  )
}

export default Footer
