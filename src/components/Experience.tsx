import Link from 'next/link'
import { experienceData } from '~/data/experience_data';
import Image from 'next/image';
import { useState } from 'react';

interface SkillProps {
  skill: string;
}

export interface EntryProps {
  skills: Array<string>;
  description: Array<string>;
  role: string;
  start_month: string;
  start_year: number;
  end_month: string;
  end_year: number;
  link_ref: string;
  organization: string;
  team?: string;
  type: string;
  location: string;

}

const EntryCard = (props: EntryProps) => {
  const [isFlip, setIsFlip] = useState(false);

  const handleFlip = () => {
    setIsFlip((prev) => !prev)
  }

  return <div className="h-48 w-80 bg-neutral-800 rounded-md m-2 flex flex-col p-2 relative overflow-scroll entry-card">
    {!isFlip ? <><a href={props.link_ref} className='relative h-16 w-32'>
      <Image className='object-contain bg-transparent transition-all ease-in-out px-2 rounded hover:bg-black/20' src={`/logos/${props.organization}.png`} fill={true} alt={props.organization}></Image>
    </a>
      <div className='px-2'>
        <p className='text-lg'>{props.role}</p>
        <p className='opacity-80'>{props.type}</p>
        <p className='text-sm'>From: {props.start_month}, {props.start_year}  {props.end_month == "undefined" ? null : "- " + props.end_month + ", "} {props.end_year == 0 ? null : props.end_year}</p>
      </div></> : <div className='px-2'>
      <p><span className='text-sky-500'>{props.team}</span></p>
      <ul className='list-disc list-inside'>{props.description.map((d: string, idx: number) => <li key={idx}>{d}</li>)}</ul>
    </div>}
    <button onClick={handleFlip} className='absolute bottom-2 right-2 rounded-full border h-6 w-6 flex justify-center items-center text-center hover:bg-white/20 hover:cursor-pointer transition-all ease-in-out duration-300'>&rarr;</button>
  </div>
}

export default function Experience() {

  return (
    <div className="flex flex-wrap items-center justify-center">
      {experienceData.map((exp: EntryProps, idx: number) => <EntryCard key={idx} skills={exp.skills} description={exp.description} role={exp.role} start_month={exp.start_month} start_year={exp.start_year} end_month={exp.end_month} end_year={exp.end_year} link_ref={exp.link_ref} organization={exp.organization} team={exp.team} type={exp.type} location={exp.location}></EntryCard>)}
    </div>
  );
}
