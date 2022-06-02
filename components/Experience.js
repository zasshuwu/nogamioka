import { experienceData } from "../data/experience_data.js";
import Link from "next/link.js";

const Entry = ({ entry }) => {
	return (
		<div className="my-4 font-['Be_Vietnam_Pro']">
			<div className="flex flex-wrap sm:items-center sm:flex-row flex-col sm:space-x-4">
				<div className="font-bold">{entry.role}</div>
				<div className="text-sm text-pink-400">
					{entry.start_month}, {entry.start_year} &mdash;{" "}
					{entry.end_month == 0 && entry.end_year == 0
						? "Present"
						: entry.end_month + ", " + entry.end_year}
				</div>
			</div>
			<div className="text-blue-500 hover:underline">
				<Link href={entry.link_ref}>{entry.organization}</Link>
			</div>
			<div className="text-sm">
				{entry.team == "" || entry.team == null ? null : entry.team + " Team"}
			</div>
			<details>
				<summary>Details</summary>
				<ul>
					{entry.description.map((desc, index) => (
						<li className="list-disc list-inside" key={index}>
							{desc}
						</li>
					))}
				</ul>
			</details>
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
