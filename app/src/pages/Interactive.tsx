
const Interactive = () => {
  return (
    <div>
      <h1 className="p-4 border-b border-i-border-color">Interactive</h1>
      <div className="p-4">
        <section>
          <h2>Button hover, focus, active</h2>
          <button className="rounded-full bg-sky-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-sky-700 m-4">
            Hover
          </button>
          <button
            type="button"
            className="rounded-full bg-violet-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 m-4"
          >
            Focus
          </button>
          <button
            type="button"
            className="rounded-full  px-5 py-2 text-sm leading-5 text-whit active:bg-yellow-500 active:text-black m-4"
          >
            Active（click)
          </button>
        </section>

        <section>
          <h2>Group</h2>
          <p>
            When you need to style an element based on the state of some parent
            element, mark the parent with the group class, and use group-*
            modifiers like group-hover to style the target element:
          </p>
          <a
            href="#"
            className="group block max-w-xs rounded-lg p-6 bg-white shadow-lg space-y-3 hover:bg-sky-500"
          >
            <div className="flex items-center">
              <h3 className="group-hover:text-white">Card Title</h3>
            </div>
            <p className="group-hover:text-white">This is some card text</p>
          </a>
        </section>

        <section>
          <h2>Cursor</h2>
          <div className="cursor-pointer inline-block border p-4">
            cursor-pointer
          </div>
          <div className="cursor-not-allowed inline-block border p-4">
            cursor-not-allowed
          </div>
        </section>

        <section>
          <h2>Select txt</h2>
          <div className="select-none">select-none</div>
          <div className="select-all">select-all</div>
        </section>
      </div>
    </div>
  )
};
export default Interactive
