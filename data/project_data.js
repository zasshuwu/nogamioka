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
    title: "Technology Blog",
    description: ["All things DevOps, ML, and consumer technology."],
    stack: "Nextjs, Tailwindcss.",
    iframe: "https://ml.aaanh.com",
    image: "",
    link_ref: "https://ml.aaanh.com",
    github: "https://github.com/aaanh/ml"
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
    image: "/coen244/coen244-demo.png",
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
