import * as React from "react";

const About: React.FC = () => {
  return (
    <div>
      <div id="welcome" className="mt-4">
        <h2 className="font-bold text-accent">
          {"Welcome to Anh's Portfolio 6.90 RC (Yeetus Magus)"}
        </h2>
      </div>
      <div id="motd" className="my-2 [&>*]:mt-2">
        <p className="break-all">
          * <span className="text-info">Documentation:</span>{" "}
          <a href="https://github.com/aaanh/homepage">
            https://github.com/aaanh/homepage.git
          </a>
        </p>
        <p>
          * <span className="text-info">Status:</span> 📚 🎓 and 👀 internships.
        </p>
        <p>
          * <span className="text-info">Alma mater:</span> Concordia University,
          Montreal, QC. Canada
        </p>
        <p>
          * <span className="text-info">Specializations:</span> Software
          Development, DevOps/SRE, Systems Administration in Windows and Linux.
        </p>

        <p>
          <span className="text-warning">Domains:</span>{" "}
          {"hoanganh.{dev, tech}; aaanh.{app, ca, com}"}
        </p>
      </div>
    </div>
  );
};

About.displayName = "About";

export default About;
