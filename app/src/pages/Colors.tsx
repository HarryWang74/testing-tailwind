
const Colors = () => {
  return (
    <div>
      <h1 className="p-4 border-b border-i-border-color">Colors</h1>
      <div className="p-4">
        <h2 className="text-i-primary">text color</h2>
        <h2 className="bg-i-secondary">background color</h2>
        <h2 className="hover:bg-i-hover-color">hover color</h2>
        <h2 className="border-1 border-i-border-color">border color</h2>
        <div>
          <button className="outline outline-blue-500">
            Button outline color
          </button>
        </div>
      </div>
    </div>
  )
};
export default Colors;
