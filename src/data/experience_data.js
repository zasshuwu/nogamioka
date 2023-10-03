function createExperience({
  key = 0,
  organization = "",
  team = "",
  role = "",
  type = "",
  location = "",
  start_month = 0,
  start_year = 0,
  end_month = 0,
  end_year = 0,
  description = [""],
  link_ref = "",
  skills = [""],
} = {}) {
  return {
    key,
    organization,
    team,
    role,
    type,
    location,
    start_month,
    start_year,
    end_month,
    end_year,
    description,
    link_ref,
    skills,
  };
}

const month = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

export const experienceData = [
  createExperience({
    organization: "Microsoft",
    link_ref: "https://www.microsoft.com/en-us/industry/nuance",
    role: "Software Developer",
    team: "Core Technology R&D, Fabric",
    type: "Internship, Full-time",
    location: "Montreal, Quebec, Canada",
    start_month: month[1],
    start_year: 2023,
    end_month: month[5],
    end_year: 2023,
    description: [
      "Backend API and Microservices development",
      "CI/CD with Docker, kubernetes, and helm on Gitlab and Azure DevOps",
      "Cloud infrastructure management",
    ],
    skills: ["k8s", "Docker", "Linux", "Azure DevOps", "IAM", "GitOps", "helm"],
  }),
  createExperience({
    organization: "Genetec",
    link_ref: "https://genetec.com",
    role: "Software Developer",
    team: "Software Configuration Management & Tools",
    type: "Internship, Full-time",
    location: "Saint-Laurent, Québec, Canada",
    start_month: month[5],
    start_year: 2022,
    end_month: month[8],
    end_year: 2022,
    description: [
      "The work revolves around the Azure DevOps platform, managing code repositories, building & deploying pipelines, API tooling, dev tooling, automation, and containers (Docker) orchestration.",
      "Learned and improved personal DevOps skills, software development practices, and problem analysis skills.",
    ],
    skills: [
      "CI/CD",
      "DevOps",
      "Container Orchestration",
      "IAM",
      "GitOps",
      "C#",
      "Bash",
      "Linux",
      "Shell Scripting",
      "Powershell",
    ],
  }),
  createExperience({
    organization: "SAC Research Group",
    link_ref: "https://users.encs.concordia.ca/~sac",
    role: "Undergraduate Research Assistant",
    type: "Part-time",
    location: "Montréal, Québec, Canada",
    start_month: month[1],
    start_year: 2020,
    end_month: 0,
    end_year: 0,
    description: [
      "My research activities focus on machine learning platforms, processes, and services.",
      "Current project goal is to evaluate and benchmark these systems to formulate metrics on the operational costs and overhead when performing ML engineering tasks. My research complements my professional development in DevOps and systems design/architecture.",
      "I also (WIP) am developing the group's public-facing website.",
    ],
    skills: [
      "MLOps",
      "DevOps",
      "Full-stack Development",
      "Python",
      "IaaS",
      "GitOps",
      "React",
      "Linux",
      "Cloud Computing",
      "TensorFlow",
      "Powershell",
    ],
  }),
  createExperience({
    organization: "AITS @Concordia University",
    link_ref: "https://www.concordia.ca/ginacody/aits.html",
    role: "IT Technician L2",
    type: "Part-time, Permanent",
    location: "Montréal, Québec, Canada",
    start_month: month[3],
    start_year: 2020,
    end_month: 0,
    end_year: 0,
    description: [
      "Troubleshoot end-user environment in Windows, Linux, and macOS desktop and remote server sessions on Linux shells and Windows RDS.",
      "Deal with complicated issues involving hardware, software, and network infrastructure.",
      "Investigate operational incidents and either resolve or triage to senior teams.",
      "I migrate and maintain the team's knowledge base with scheduled backups. I also contribute to the university's high performance computing (the Speed HPC) group's repository.",
    ],
    skills: [
      "Asset Management",
      "Incident Investigation",
      "IAM",
      "Bash",
      "Linux",
      "System Administration",
      "Technical Support",
      "OS",
      "Powershell",
    ],
  }),
  createExperience({
    organization: "Genetec",
    link_ref: "https://genetec.com",
    role: "IT Specialist",
    type: "Internship, Full-time",
    location: "Saint-Laurent, Québec, Canada",
    start_month: month[8],
    start_year: 2021,
    end_month: month[12],
    end_year: 2021,
    description: [
      "Assistance and troubleshooting for end-users, on-premise AD and Azure AD management, incident response and investigation, hardware/software asset management and deployment, infrastructure and workflow improvement.",
    ],
    skills: [
      "Active Directory",
      "Jira",
      "Automation",
      "IAM",
      "Technical Support",
      "OS",
      "Powershell",
    ],
  }),
];
