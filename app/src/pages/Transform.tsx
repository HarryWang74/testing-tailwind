import { useState, useEffect } from 'react'
import { BsCaretRightFill } from 'react-icons/bs'
const Transform = () => {
  const [openState, setSate] = useState(false)
  const setState = () => {
    setSate(!openState)
  }
  return (
    <div>
      <h1 className="p-4 border-b border-i-border-color">Transform</h1>
      <div className="p-4">
        <div
          className="border p-4 cursor-pointer relative pl-[40px]"
          onClick={setState}
        >
          <BsCaretRightFill
            className={
              'absolute top-[20px] left-[10px] transition ' +
              (openState ? 'rotate-90 ' : ' ')
            }
          />{' '}
          {openState ? 'open' : 'close'}
        </div>
        <div
          className={
            'p-4 border overflow-hidden ' +
            (openState ? 'h-auto block ' : 'h-0 hidden ')
          }
        >
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </div>
      </div>
    </div>
  )
}
export default Transform
