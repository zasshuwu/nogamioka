import { experiences, type ExperienceProps } from "~/data/experience";
import ExperienceCard from "~/components/ExperienceCard";

const ExperienceSection = () => {
  return (
    <div className="flex">
      {experiences.map((exp: ExperienceProps, idx: number) => (
        <ExperienceCard key={idx} {...exp}></ExperienceCard>
      ))}
    </div>
  );
};

export default ExperienceSection;
