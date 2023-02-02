function Header({ handleToggleDarkMode }) {
  return (
    <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold my-4">MeNote</h1>
        <button onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)} className='bg-[#e1e1e1] border-none rounded-[15px] py-[5px] px-[15px] hover:bg-[#ededed] hover:cursor-pointer'>Toogle Mode</button>
    </div>
  )
}

export default Header