import { useEffect } from "react"

const DarkTheme = () => {
  useEffect(() => {
    const toggle = document.getElementById('toggle') as HTMLInputElement
    if(toggle) {
      toggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark')
      })
    }
  } , [])

  return (
    <div>
      <h1 className="p-4 border-b border-i-border-color">Dark theme</h1>
      <div className="p-4">
        <div className="container mx-auto mt-10 bg-white dark:bg-black rounded-xl px-6 py-8 shadow xl">
          <h3 className="text-slate-900 dark:text-white font-medium tracking-tight">
            Lorem ipsum dolor sit.
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            placeat earum a exercitationem? Minima corrupti ad magni aut
            suscipit nulla voluptatem atque vitae fugit at.
          </p>
        </div>

        <div className="relative inline-block w-10 mr-2 ml-6 mt-6 align-middle select-none transition duration-200 ease-in">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          />
          <label
            for="toggle"
            class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
          ></label>
        </div>
      </div>
    </div>
  )
}
export default DarkTheme;
