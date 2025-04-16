
const PositionDisplayZindex = () => {
  return (
    <div>
      <h1 className="p-4 border-b border-i-border-color">
        Position Display Z-index
      </h1>
      <div className="p-4">
        <h2>Position</h2>
        <p>
          <b>static</b> position: static;
        </p>
        <p>
          <b>fixed</b> position: fixed;
        </p>
        <p>
          <b>absolute</b> position: absolute;
        </p>
        <p>
          <b>relative</b> position: relative;
        </p>
        <p>
          <b>sticky</b> position: sticky;
        </p>
        <h2 className="mt-4">Display</h2>
        <p>
          <b>block</b> display: block;
        </p>
        <p>
          <b>inline</b> display: inline;
        </p>
        <p>
          <b>inline-block</b> display: inline-block;
        </p>
        <p>
          <b>flex</b> display: flex;
        </p>
        <p>
          <b>inline-flex</b> display: inline-flex;
        </p>
        <h2 className="mt-4">Z-index</h2>
        <p>
          <b>z-0</b> z-index: 0;
        </p>
        <p>
          <b>z-10</b> z-index: 10;
        </p>
      </div>
    </div>
  )
}
export default PositionDisplayZindex
