
const Sizing = () => {
  return (
    <div>
      <h1 className="p-4 border-b border-i-border-color">Width & Height</h1>
      <div className="p-4">
        <p>
          <b>Width of the viewport</b> w-screen
        </p>
        <p>
          <b>100% of container</b> w-full
        </p>
        <p>
          <b>Full screen height</b> h-screen
        </p>
        <p>
          <b>Arbitrary</b> w-[300px] min-h-[200px]
        </p>
      </div>
    </div>
  )
}
export default Sizing
