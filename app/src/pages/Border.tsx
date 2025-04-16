const Border = () => {
  return (
    <div>
      <h1 className="p-4 border-b border-i-border-color">Border</h1>
      <div className="p-4">
        <div className="border-b border-i-border-color pb-4 mb-4">
          <h2>Border size, color</h2>
          <div className="flex">
            <div className="m-3 p-5 border">border</div>
            <div className="m-3 p-5 border-4 border-red-500">
              border-4 border-red-500
            </div>
          </div>
        </div>

        <div className="border-b border-i-border-color pb-4 mb-4">
          <h2>top, right, bottom, right</h2>
          <div className="flex">
            <div className="m-3 p-5 border-t-2">border-t-2</div>
            <div className="m-3 p-5 border-r-2">border-r-2</div>
            <div className="m-3 p-5 border-b-2">border-b-2</div>
            <div className="m-3 p-5 border-l-2">border-l-2</div>
          </div>
        </div>

        <div className="border-b border-i-border-color pb-4 mb-4">
          <h2>X, Y</h2>
          <div className="flex">
            <div className="m-3 p-5 border-x-2">border-x-2</div>
            <div className="m-3 p-5 border-y-2">border-y-2</div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Border;
