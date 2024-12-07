export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Swastik - Farm to Company Platform",
    des: "A platform connecting farmers directly with companies, eliminating middlemen and ensuring fair prices for agricultural products.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://swastik.onlinesbii.live",
  },
  {
    id: 2,
    title: "Local AI Models SaaS",
    des: "A Software-as-a-Service platform for running AI models locally, reducing cloud dependency and ensuring data privacy.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://ollama.onlinesbii.live",
  },
  {
    id: 3,
    title: "MySQL Database Hosting Platform",
    des: "A platform for hosting and managing MySQL databases with automated backups, scaling, and monitoring features.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://sql.onlinesbii.live",
  },
  {
    id: 4,
    title: "Docker-in-Docker Linux Environment",
    des: "A platform enabling users to run Linux environments within Docker containers, providing isolated development environments.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://docker.onlinesbii.live",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Harsh was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Harsh's enthusiasm for every facet of development truly stands out.",
    name: "Rajesh Kumar",
  },
  {
    quote:
      "Harsh's technical expertise and problem-solving abilities are remarkable. He consistently delivers high-quality work and maintains excellent communication throughout the project lifecycle.",
    name: "Priya Sharma",
  },
  {
    quote:
      "Working with Harsh has been a fantastic experience. His attention to detail and commitment to excellence make him a valuable asset to any project.",
    name: "Amit Patel",
  },
  {
    quote:
      "Harsh demonstrates exceptional skills in both frontend and system administration. His versatile approach to problem-solving and dedication to quality are truly commendable.",
    name: "Neha Verma",
  },
  {
    quote:
      "I'm impressed by Harsh's technical knowledge and professional approach. He has a great understanding of both development and infrastructure, making him a well-rounded professional.",
    name: "Vikram Singh",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    company: null
  },
  {
    id: 2,
    title: "System Administrator Intern",
    desc: "Managed and maintained system infrastructure, implemented security protocols, and provided technical support.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
    company: "HCL Tech"
  },
  {
    id: 3,
    title: "Network Engineer",
    desc: "Designed and implemented network solutions, managed network security, and optimized network performance.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
    company: "HCL Tech"
  },
  {
    id: 4,
    title: "Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    company: null
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/harsheye"
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://linkedin.com/in/harsh-choppra/"
  }
];
