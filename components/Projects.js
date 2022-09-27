import { projectData } from "../data/project_data";
import Link from "next/link";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { FaDocker } from "react-icons/fa"

export default function Projects() {
  return (
    <div className="m-2 dark:text-white">
      <div className="flex flex-wrap w-full justify-center">
        {projectData.map((proj, index) => (
          <div
            key={index}
            className="h-128 w-[28rem] m-2 p-2 border border-purple-500/50 dark:border-sky-500/50 font-['Be_Vietnam_Pro'] text-sm rounded-lg"
          >
            <h3 className="text-rose-500 font-bold text-xl mt-4 flex items-center space-x-2 ">
              {proj?.link_ref ? 
                <Link className="peer" href={proj.link_ref}>
                  {proj.title}
                </Link> : <span className="peer">{proj.title}</span>
              }
              { proj?.github !== "" ? <a className="text-neutral-900 dark:text-neutral-200" href={proj?.github}><AiFillGithub size={20} /></a> : null }
              { proj?.docker !== "" ? <a className="text-white hover:text-blue-400" href={proj?.docker}><FaDocker size={20} /></a> : null }
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
              <div className="[&>*]:rounded-md">
                <Image
                  src={proj.image}
                  height="200"
                  width="300"
                ></Image>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
