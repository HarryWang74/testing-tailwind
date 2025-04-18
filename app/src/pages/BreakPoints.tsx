import { useState, useEffect } from 'react'
const BreakPoints = () => {
  useEffect(() => {
    const handleResize = () => {
      setWidth(getScreenWidth())
    }
    window.addEventListener('resize', handleResize)
    setWidth(getScreenWidth())
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const [width, setWidth] = useState(0)
  const getScreenWidth = ():number => {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    return width
  }
  return (
    <div>
      <h1 className="p-4 border-b border-i-border-color">Break Points</h1>
      <div className="p-4">
        <h1 className=" text-white bg-black sm:bg-green-800 md:bg-blue-800 lg:bg-yellow-800 xl:bg-purple-800 2xl:bg-orange-800">
          {width}
        </h1>
        <p>
          <b>sm</b> 640px
        </p>
        <p>
          <b>md</b> 768px
        </p>
        <p>
          <b>lg</b> 1024px
        </p>
        <p>
          <b>xl</b> 1280px
        </p>
        <p>
          <b>2xl</b> 1536px
        </p>
        <section>
          <h2>Breakpoint overlap</h2>
          <p>
            flex-col lg:flex-row <b>screen above 1024 use flex-row</b>
          </p>
          <div className="flex flex-col lg:flex-row">
            <div className="border p-10 flex-auto">1</div>
            <div className="border p-10 flex-auto">2</div>
            <div className="border p-10 flex-auto">3</div>
          </div>
        </section>
      </div>
    </div>
  )
}
export default BreakPoints
