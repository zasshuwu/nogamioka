import { projectData } from "../data/project_data";
import Link from "next/link";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";

export default function Projects() {
  return (
    <div className="m-4 dark:text-white">
      {/* <h3 className="text-2xl">Page is currently under migration 🚧</h3>
			<h3 className="text-2xl">Please have トワーさま instead 👾</h3>
			<div
				className="h-56 w-56 sm:h-96 sm:w-96"
				style={{ backgroundImage: "url('/towa-placeholder.png')", backgroundSize: "cover" }}
			></div> */}
      <div className="flex flex-wrap w-full justify-start">
        {projectData.map((proj, index) => (
          <div
            key={index}
            className="h-128 w-96 m-2 p-2 border border-purple-500/50 dark:border-sky-500/50 font-['Be_Vietnam_Pro'] text-sm rounded-lg"
          >
            <h3 className="text-pink-500 font-bold text-xl mt-4 flex items-center space-x-2">
              <Link className="peer" href={proj.link_ref}>
                {proj.title}
              </Link>{" "}
              { proj?.github == "" ? null : <a href={proj?.github}>
                <AiFillGithub size={20} color={"#eee"} />
              </a> }
            </h3>
            <br />
            <p>{proj.description}</p>
            <br />
            <p className="text-slate-500 text-xs">
              Stack: {proj.stack}
            </p>
            <br />
            {proj.iframe != "" ? (
              <iframe
                src={proj.iframe}
                className="w-full h-48 rounded-lg"
              ></iframe>
            ) : null}

            {proj.image != "" ? (
              <div className="">
                <Image
                  src={proj.image}
                  height="206"
                  width="366"
                ></Image>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
