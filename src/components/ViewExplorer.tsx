const views = [
  "Intro", "Experience", "Projects", "Resume"
]

const ViewExplorer = () => {
  return <div className="flex flex-col space-y-4">
    {views.map((view: string, idx: number) => <div className="flex flex-col items-center w-12 h-12" key={idx}>
      <div className="w-8 h-8 bg-sky-500 rounded-md">
      </div>
      <div className="">
        <span className="[text-shadow:_1px_2px_0_var(--tw-shadow-color)] shadow-black">
          {view}
        </span>
      </div>
    </div>)}
  </div>
}

export default ViewExplorer;