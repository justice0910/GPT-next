function ThemeMenu() {
  return (
    <div className={'flex justify-between'}>
      <button className={'w-1/3 p-2 rounded-lg bg-menuColors-700 hover:bg-menuColors-600'}>Dark</button>
      <button className={'w-1/3 p-2 rounded-lg bg-menuColors-700 hover:bg-menuColors-600'}>Light</button>
    </div>
  )
}

export default ThemeMenu
