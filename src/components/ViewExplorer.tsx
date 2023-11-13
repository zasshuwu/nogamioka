interface IViewExplorer {
  setCurrentView: React.Dispatch<React.SetStateAction<string>>
}

const views = [
  "Intro", "Experience", "Projects", "Resume"
]

const ViewExplorer = ({ setCurrentView }: IViewExplorer) => {
  return <div className="flex flex-col space-y-4 items-center absolute left-4">
    {views.map((view: string, idx: number) => <div onClick={() => setCurrentView(view)} className="flex flex-col transition-all ease-in-out duration-300 rounded-lg hover:cursor-pointer items-center w-fit h-fit hover:bg-black/30 hover:backdrop-blur-md bg-transparent p-2" key={idx}>
      <div className="w-14 h-10 bg-sky-500 rounded-md shadow-lg">
      </div>
      <div className="">
        <span className="[text-shadow:_1px_2px_5px_var(--tw-shadow-color)] shadow-black">
          {view}
        </span>
      </div>
    </div>)}
  </div>

}

export default ViewExplorer;