import Image from "next/image";
import { project_data } from "~/data/project_data";

export interface IProjects {
  title: string,
  description: string,
  link_ref: string,
  screenshot: string,
  stack: string
}

const ProjectCard = ({ title, description, link_ref, screenshot }: IProjects) => {
  return <div className="flex m-2 rounded p-4 bg-slate-800 text-neutral-200 flex-col">
    <p><a className="underline underline-offset-4 text-xl hover:text-sky-500" href={link_ref}>{title}</a></p>
    <p>{description}</p>
    {screenshot !== "" ? <div className="relative h-72 w-96">
      <Image src={screenshot} fill={true} className="object-contain" alt={title}></Image>
    </div> : null}
    <br></br>
    {link_ref !== "" && (!link_ref.includes("github") || link_ref.includes("nag-devops")) ? <iframe src={link_ref} className="h-[50vh] bg-white"></iframe> : null}
  </div>
}

const Projects = () => {
  return <div className="flex flex-col w-full">
    {project_data.map((p: IProjects, idx: number) => <ProjectCard key={idx} title={p.title} description={p.description} link_ref={p.link_ref} screenshot={p.screenshot} stack={p.stack}></ProjectCard>)}
  </div>;
}

export default Projects;