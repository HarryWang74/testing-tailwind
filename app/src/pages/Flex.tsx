
import { useState, useEffect } from 'react'
const Flex = () => {
  const [containerWidth, setContainerWidth] = useState(0)
  const [box1Width, setBox1Width] = useState(0)
  const [box2Width, setBox2Width] = useState(0)
  const [box3Width, setBox3Width] = useState(0)

  const getContainerWidth = () => {
    const container = document.getElementById('myFlexContainer');
    return container ? container.offsetWidth : 0;
  }

   const getBox1Width = () => {
     const container = document.getElementById('box1')
     return container ? container.offsetWidth : 0
   }

  const getBox2Width = () => {
    const container = document.getElementById('box2')
    return container ? container.offsetWidth : 0
  }

  const getBox3Width = () => {
    const container = document.getElementById('box3')
    return container ? container.offsetWidth : 0
  }

  useEffect(() => {
    const handleResize = () => { setContainerWidth(getContainerWidth())}
    const handleResize1 = () => { setBox1Width(getBox1Width())}
    const handleResize2 = () => { setBox2Width(getBox2Width())}
    const handleResize3 = () => { setBox3Width(getBox3Width())}

    window.addEventListener('resize', handleResize)
    window.addEventListener('resize', handleResize1)
    window.addEventListener('resize', handleResize2)
    window.addEventListener('resize', handleResize3)
    
    setContainerWidth(getContainerWidth())
    setBox1Width(getBox1Width())
    setBox2Width(getBox2Width())  
    setBox3Width(getBox3Width())
    
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('resize', handleResize1)
      window.removeEventListener('resize', handleResize2)
      window.removeEventListener('resize', handleResize3)
    }
  }, [])
  return (
    <div>
      <h1 className="p-4 border-b border-i-border-color">Flex</h1>
      <div className="p-4">
        <h3>Container: {containerWidth}</h3>
        <section>
          <h2>col width, grow, shrink</h2>
          <div id="myFlexContainer">
            <div className="flex">
              <div className="w-[200px] flex-none p-10 border" id="box1">
                {box1Width}
                <h3>flex-none</h3>
                <p>to prevent a flex item from growing or shrinking</p>
              </div>
              <div className="w-[400px] flex-initial p-10 border" id="box2">
                {box2Width}
                <h3>flex-initial</h3>
                <p>
                  to allow a flex item to shrink but not grow, taking into
                  account its initial size
                </p>
              </div>
              <div className="w-[200px] flex-auto p-10 border" id="box3">
                {box3Width}
                <h3>flex-auto</h3>
                <p>
                  to allow a flex item to grow and shrink, taking into account
                  its initial size
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>Breakpoint overlap</h2>
          <p>flex-col lg:flex-row <b>screen above 1024 use flex-row</b></p>
          <div className="flex flex-col lg:flex-row">
            <div className="border p-10 flex-auto">1</div>
            <div className="border p-10 flex-auto">2</div>
            <div className="border p-10 flex-auto">3</div>
          </div>
        </section>
      </div>
    </div>
  )
};
export default Flex;
