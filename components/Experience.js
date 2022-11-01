import { experienceData } from "../data/experience_data.js";
import Link from "next/link.js";

const SkillPill = ({ skill }) => {
	return (
		<span className="dark:bg-sky-600 dark:text-white bg-transparent dark:border-transparent border border-purple-500 text-purple-500 text-sm py-1 px-2 rounded-full mb-2">{ skill }</span>
	)
}

const Entry = ({ entry }) => {
	return (
		<div className="my-4 font-['Be_Vietnam_Pro']">
			<div className="flex flex-wrap sm:items-center sm:flex-row flex-col sm:space-x-4">
				<div className="font-bold">{entry.role}</div>
				<div className="text-sm text-rose-500">
					{entry.start_month}, {entry.start_year} &mdash;{" "}
					{entry.end_month == 0 && entry.end_year == 0
						? "Present"
						: entry.end_month + ", " + entry.end_year}
				</div>
			</div>
			<div className="text-slate-500 dark:text-slate-400">
				<Link href={entry.link_ref}>{entry.organization}</Link>
			</div>
			<div className="text-sm mt-2">
				{entry.team == "" || entry.team == null ? null : entry.team + " Team"}
			</div>
			<details className="text-sm">
				<summary>Details</summary>
				<ul>
					{entry.description.map((desc, index) => (
						<li className="list-disc list-inside" key={index}>
							{desc}
						</li>
					))}
				</ul>
			</details>
			
			<div className="flex flex-wrap space-x-1 mt-2">
				
				{entry.skills.length !== 0 ? <>
					Skills:&nbsp;
					{entry?.skills.map((skill, idx) => (
					<SkillPill key={idx} skill={skill}></SkillPill>
				))}
				</> 
				 : null }
			</div>
		</div>
	);
};

export default function Experience() {
	return (
		<div className="">
			{experienceData.map((entry, index) => (
				<Entry entry={entry} key={index}></Entry>
			))}
		</div>
	);
}
