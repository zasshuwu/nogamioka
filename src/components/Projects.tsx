import { projectData } from "@/data/project_data";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FaDocker } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="max-h-[500px] overflow-y-scroll">
      <h2 className="mb-4 text-4xl text-accent">Projects</h2>

      <div className="flex w-full flex-wrap justify-center">
        {projectData.map((proj, index: number) => (
          <div
            key={index}
            className="m-2 w-full rounded-lg border border-purple-500/50 p-2 text-sm dark:border-sky-500/50"
          >
            <h3 className="mt-4 flex items-center space-x-2 text-xl font-bold text-rose-500 ">
              {proj?.link_ref ? (
                <Link className="peer" href={proj.link_ref}>
                  {proj.title}
                </Link>
              ) : (
                <span className="peer">{proj.title}</span>
              )}
              {proj?.github !== "" ? (
                <a
                  className="text-neutral-900 dark:text-neutral-200"
                  href={proj?.github}
                >
                  <AiFillGithub size={20} />
                </a>
              ) : null}
              {proj?.docker !== "" ? (
                <a
                  className="text-white hover:text-blue-400"
                  href={proj?.docker}
                >
                  <FaDocker size={20} />
                </a>
              ) : null}
            </h3>
            <br />
            <p>{proj.description}</p>
            <br />
            <p className="text-xs text-slate-500">Stack: {proj.stack}</p>
            <br />
            {proj.iframe != "" ? (
              <iframe
                src={proj?.iframe}
                className="h-[24rem] w-full rounded-lg shadow-2xl"
              ></iframe>
            ) : null}

            {proj.image != "" ? (
              <div className="[&>*]:rounded-md">
                <img src={proj.image} className="w-full shadow-2xl"></img>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

Projects.displayName = "Projects";
