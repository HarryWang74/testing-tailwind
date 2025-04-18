
const Spacing = () => {
  return (
    <>
      <h1 className="p-4 border-b border-i-border-color">Spacing</h1>
      <div className="p-4">
        <div className="mb-4">
          <p>0.5 = 0.125rem = 2px </p>
          <p>1 = 0.25rem = 4px </p>
          <p>2 = 0.5rem = 8px </p>
          <p>3 = 0.75rem = 12px </p>
          <p>4 = 1rem = 16px </p>
        </div>
        <h2>Margin</h2>
        <div className="m-4 bg-slate-100">m-4</div>
        <div className="mx-4 bg-slate-200">mx-4</div>
        <div className="my-4 bg-slate-300">my-4</div>
        <div className="mt-6 bg-slate-400">mt-6</div>
        <div className="mr-4 bg-slate-500">mr-4</div>
        <div className="mb-8 bg-slate-600">mb-8</div>
        <div className="ml-2 bg-slate-700">ml-2</div>
        <div className=" bg-slate-100">
          <div className="p-4 border mx-auto w-[200px]">mx-auto w-[200px]</div>
        </div>
        <div className=" bg-slate-200">
          <div className="p-4 border ml-auto w-[200px]">ml-auto w-[200px]</div>
        </div>
        <h2>Padding</h2>
        <div className="p-4 bg-slate-100">p-4</div>
        <div className="px-4 bg-slate-200">px-4</div>
        <div className="py-4 bg-slate-300">py-4</div>
        <div className="pt-6 bg-slate-400">pt-6</div>
        <div className="pr-4 bg-slate-500">pr-4</div>
        <div className="pb-8 bg-slate-600">pb-8</div>
        <div className="pl-2 bg-slate-700">pl-2</div>
        <h2>Arbitrary Spacing</h2>
        <div className="ml-[200px] bg-i-secondary">ml-[200px]</div>
      </div>
    </>
  )
};
export default Spacing
