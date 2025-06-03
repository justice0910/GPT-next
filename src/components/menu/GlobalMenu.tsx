function GlobalMenu() {
  return (
    <div className={'flex justify-between'}>
      <button className={'w-2/5 p-2 rounded-lg bg-menuColors-700 hover:bg-menuColors-600'}>English</button>
      <button className={'w-2/5 p-2 rounded-lg bg-menuColors-700 hover:bg-menuColors-600'}>Chinese</button>
    </div>
  )
}

export default GlobalMenu
