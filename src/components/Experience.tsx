import { experienceData } from "@/data/experience_data.js";
import Link from "next/link.js";

interface SkillProps {
  skill: string;
}

interface EntryProps {
  entry: {
    key: number;
    skills: Array<string>;
    description: Array<string>;
    role: string;
    start_month: number;
    start_year: number;
    end_month: number;
    end_year: number;
    link_ref: string;
    organization: string;
    team: string;
    type: string;
    location: string;
  };
}

const SkillPill = ({ skill }: SkillProps) => {
  return <span className="badge-secondary badge m-1">{skill}</span>;
};

const Entry = ({ entry }: EntryProps) => {
  return (
    <div className="my-4">
      <div className="flex flex-col flex-wrap sm:flex-row sm:items-center sm:space-x-4">
        <div className="font-bold">{entry.role}</div>
        <div className="font-light">{entry.type}</div>
        <div className="text-sm text-primary">
          {entry.start_month}, {entry.start_year} &mdash;{" "}
          {entry.end_month == 0 && entry.end_year == 0
            ? "Present"
            : entry.end_month + ", " + entry.end_year}
        </div>
      </div>
      <div className="text-info">
        <Link href={entry.link_ref}>{entry.organization}</Link>
      </div>
      <div className="mt-2 text-sm">
        {entry.team == "" || entry.team == null ? null : entry.team + " Team"}
      </div>
      {
        entry.description.length > 1 ? 
        <details className="text-sm">
          <summary>Details</summary>
          <ul>
            {entry.description &&
              entry.description.map((desc: string, index: number) => (
                <li className="list-inside list-disc" key={index}>
                  {desc}
                </li>
              ))}
          </ul>
        </details> : null
      }
      {
        entry.skills.length > 1 ? <div className="mt-2 flex flex-wrap space-x-1">
            Skills:&nbsp;
            {entry.skills.map((skill: string, idx: number) => (
              <SkillPill key={idx} skill={skill}></SkillPill>
            ))}
      </div> : null
      }
      
    </div>
  );
};

export default function Experience() {
  return (
    <div className="max-h-[500px] overflow-y-scroll">
      <h2 className="mb-4 text-4xl text-accent">Experience</h2>
      {experienceData.map((e: EntryProps["entry"], index: number) => (
        <Entry entry={e} key={index}></Entry>
      ))}
    </div>
  );
}

Experience.displayName = "Experience";
