function createProject({
  key = 0,
  title = "",
  description = [""],
  stack = "",
  link_ref = "",
  iframe = "",
  image = "",
  github = "",
  docker = ""
} = {}) {
  return {
    key,
    title,
    description,
    stack,
    link_ref,
    iframe,
    image,
    github,
    docker
  };
}

export const projectData = [
  createProject({
    title: "Photo Reel",
    description: ["My personal photo reel"],
    stack: "Nextjs, Tailwindcss, Cloudinary DAM + API, Cloudflare CDN",
    image: "/projects/photo-reel.png",
    link_ref: "https://photos.aaanh.ca",
    github: "https://github.com/aaanh/my-photo-reel"
  }),
  createProject({
    title: "NAG-DevOps/speed-hpc",
    link_ref: "NAG-DevOps/speed-hpc",
    description: ["Concordia University's HPC cluster.", "Develop Latex to HTML build pipeline for the documentation.", "Create battery-included devcontainer environment for authoring LaTeX.", "Create GitHub Actions pipeline for deploying the HTML docs."],
    stack: "LaTeX, Docker, Github Actions, devcontainer, Makefile",
    iframe: "https://nag-devops.github.io/speed-hpc/",
  }),
  createProject({
    title: "Technology Blog",
    description: ["All things DevOps, ML, IT, Cloud, and consumer technology."],
    stack: "Nextjs, Tailwindcss.",
    iframe: "https://blog.aaanh.com",
    image: "",
    link_ref: "https://blog.aaanh.com",
    github: "https://github.com/aaanh/blog"
  }),
  createProject({
    title: "Augmented Gist",
    description: ["Get the RAW content of a GitHub Gist using Cloudflare Workers."],
    stack: "Cloudflare Workers + Pages, GitHub API, Tailwindcss.",
    image: "",
    github: "https://github.com/aaanh/gist-stuff",
    link_ref: "https://gist.aaanh.app",
    iframe: "https://gist.aaanh.app"
  }),
  createProject({
    title: "Will I Pass",
    description: ["I procrastinate productively"],
    stack: "Nextjs, Tailwindcss. Hosted on Netlify PaaS",
    iframe: "https://will-i-pass.aaanh.app",
    image: "",
    link_ref: "https://will-i-pass.aaanh.app",
    github: "https://github.com/aaanh/will-i-pass"
  }),
  createProject({
    title: "Script Convenience Store",
    description: [
      "Scripts that you used before but don't remember how to use. Full migration in progress.",
    ],
    stack:
      "Rust::mdbook, CI with GitHub Actions, CD with Vercel.",
    iframe: "https://scripts.aaanh.com",
    image: "",
    link_ref: "https://scripts.aaanh.com",
    github: "https://github.com/aaanh/script-convenience-store"
  }),
  createProject({
    title: "Dockerized Minecraft Server",
    description: [
      "Just a cross-platform simple Docker container that runs a Minecraft server.",
    ],
    stack: "Docker, java, bash/powershell",
    github: "https://github.com/aaanh/minecraft-docker",
    docker: "https://hub.docker.com/repository/docker/aaanh/minecraft",
    image: "/projects/minecraft-docker.png"
  }),
  createProject({
    title: "Data Traversal OOP",
    description: ["Final project in Object-Oriented Programming"],
    stack: "C++, python, pandas",
    iframe: "",
    image: "/projects/coen244-demo.png",
    github: "https://github.com/aaanh/meaningful-graph-traversal",
    docker: "https://hub.docker.com/repository/docker/aaanh/meaningful-graph-traversal"
  }),

  createProject({
    title: "Inertial Sensing Lab",
    description: [
      "Website with multimedia CMS, 3rd-party SSO, and SEO optimized for a Physics research group.",
    ],
    stack: "Wikijs, custom vanilla js, css, postgreSQL, hosted on Heroku",
    iframe: "https://islab.ca",
    link_ref: "https://islab.ca"
  }),
  createProject({
    title: "Mai Boat Service",
    description: [
      "Website for Mai Boat Service - a seacraft repair service in Orlando, Florida.",
    ],
    stack: "Nextjs, Tailwind",
    iframe: "https://maiboatservice.us/",
    link_ref: "https://maiboatservice.us"
  }),
  createProject({
    title: "Maze-Navigating Vehicle",
    description: [
      "Final Project in Applied Physics. 3D-printed vehicle navigates by ultrasonic sensors controlled by an Arduino Uno.",
    ],
    stack: "C++, arduino",
    github: "https://github.com/aaanh/arduino-maze-nav"
  }),
  createProject({
    title: "MRCA Simulation",
    description: [
      "Final Project in Statistics and Probability. Statistical analysis and probabilistic simulation of Most Recent Common Ancestor.",
    ],
    stack: "R, matplotlib",
    github: "https://github.com/aaanh/mrca-sim-r",
    image:
      "https://raw.githubusercontent.com/aaanh/mrca-sim-r/master/results/tmrca.png",
  }),
];
