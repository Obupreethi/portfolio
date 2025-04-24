import { Code, Database, Layers, LineChart, BarChart4, Workflow, Globe, DivideIcon as LucideIcon, Laptop, Server, PenTool } from "lucide-react";

export interface NavLink {
  id: string;
  title: string;
}

export const navLinks: NavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export interface Service {
  title: string;
  icon: LucideIcon;
  description: string;
}

export const services: Service[] = [
  {
    title: "Web Developer",
    icon: Code,
    description:
      "I create responsive, modern web applications using cutting-edge technologies like React, Next.js, and TypeScript with strong focus on performance and accessibility.",
  },
  {
    title: "UI/UX Designer",
    icon: PenTool,
    description:
      "I design intuitive user experiences and beautiful interfaces that engage users and enhance brand identity, following modern design principles.",
  },
  {
    title: "Backend Developer",
    icon: Server,
    description:
      "I build robust server-side applications and APIs using Node.js, Express, and various databases with a focus on security and performance.",
  },
  {
    title: "Full-Stack Developer",
    icon: Laptop,
    description:
      "I develop end-to-end solutions that seamlessly integrate frontend and backend technologies, creating cohesive and powerful web applications.",
  },
];

export interface Technology {
  name: string;
  icon: string;
  proficiency: number;
}

export const technologies: Technology[] = [
  {
    name: "HTML 5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    proficiency: 95,
  },
  {
    name: "CSS 3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    proficiency: 90,
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    proficiency: 95,
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    proficiency: 85,
  },
  {
    name: "React JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    proficiency: 90,
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    proficiency: 80,
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    proficiency: 90,
  },
  {
    name: "Node JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    proficiency: 85,
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    proficiency: 75,
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    proficiency: 85,
  },
];

export interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

export const experiences: Experience[] = [
  {
    title: "Senior Frontend Developer",
    company_name: "TechInnovate Solutions",
    icon: "https://randomuser.me/api/portraits/men/1.jpg",
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    points: [
      "Led the development of responsive web applications using React.js and related technologies.",
      "Collaborated with cross-functional teams to deliver high-quality products that met client expectations.",
      "Implemented state management solutions using Redux and Context API for complex applications.",
      "Mentored junior developers and conducted code reviews to maintain high code quality standards.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Digital Creations",
    icon: "https://randomuser.me/api/portraits/women/4.jpg",
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Dec 2021",
    points: [
      "Developed and maintained web applications using MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Built RESTful APIs and integrated third-party services to enhance application functionality.",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Participated in agile development processes, including sprint planning and retrospectives.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Web Wizards Agency",
    icon: "https://randomuser.me/api/portraits/men/8.jpg",
    iconBg: "#383E56",
    date: "Jan 2019 - Dec 2019",
    points: [
      "Created interactive user interfaces using React.js and modern CSS frameworks.",
      "Collaborated with designers to implement pixel-perfect designs and animations.",
      "Integrated analytics and monitoring tools to track user behavior and application performance.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    title: "Junior Web Developer",
    company_name: "Startup Innovators",
    icon: "https://randomuser.me/api/portraits/women/9.jpg",
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Dec 2018",
    points: [
      "Developed and maintained websites for various clients using HTML, CSS, and JavaScript.",
      "Implemented responsive designs that worked across different devices and screen sizes.",
      "Collaborated with the design team to create visually appealing and user-friendly interfaces.",
      "Assisted in troubleshooting and debugging web applications to improve functionality.",
    ],
  },
];

export interface EducationItem {
  degree: string;
  school: string;
  date: string;
  description: string;
  icon: string;
  iconBg: string;
}

export const educationList: EducationItem[] = [
  {
    degree: "Master's in Computer Science",
    school: "Stanford University",
    date: "2015 - 2017",
    description: "Specialized in Software Engineering with a focus on web technologies and distributed systems. Maintained a 3.9 GPA and completed a thesis on scalable frontend architectures.",
    icon: "https://randomuser.me/api/portraits/men/2.jpg",
    iconBg: "#3498db",
  },
  {
    degree: "Bachelor's in Computer Science",
    school: "MIT",
    date: "2011 - 2015",
    description: "Graduated with honors. Coursework included data structures, algorithms, software design, and web development fundamentals. Participated in multiple hackathons and coding competitions.",
    icon: "https://randomuser.me/api/portraits/men/5.jpg",
    iconBg: "#8e44ad",
  },
  {
    degree: "Full-Stack Web Development Bootcamp",
    school: "Coding Academy",
    date: "Summer 2014",
    description: "Intensive 12-week program covering modern web development technologies including JavaScript, React, Node.js, and database design. Developed several full-stack applications as part of the curriculum.",
    icon: "https://randomuser.me/api/portraits/women/6.jpg",
    iconBg: "#1abc9c",
  }
];

export interface Project {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link: string;
  live_demo_link: string;
}

export const projects: Project[] = [
  {
    name: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce platform with product catalog, shopping cart, user authentication, and payment integration. Features responsive design and admin dashboard for product management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    source_code_link: "https://github.com",
    live_demo_link: "https://example.com",
  },
  {
    name: "AI Content Generator",
    description:
      "Web application that utilizes AI to generate various types of content including blog posts, marketing copy, and social media captions based on user inputs and preferences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    source_code_link: "https://github.com",
    live_demo_link: "https://example.com",
  },
  {
    name: "Real-time Chat Application",
    description:
      "A real-time messaging platform that allows users to create channels, direct messages, and group conversations with features like file sharing, read receipts, and typing indicators.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    source_code_link: "https://github.com",
    live_demo_link: "https://example.com",
  },
];

export interface Achievement {
  title: string;
  description: string;
  icon: LucideIcon;
  date: string;
}

export const achievements: Achievement[] = [
  {
    title: "Web Development Excellence Award",
    description: "Recognized for exceptional work on a high-traffic e-commerce platform that improved conversion rates by 35%.",
    icon: Globe,
    date: "2023",
  },
  {
    title: "Speaker at React Conference",
    description: "Presented on advanced state management techniques and performance optimization in React applications.",
    icon: Code,
    date: "2022",
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to several popular open-source projects with over 50 accepted pull requests.",
    icon: Database,
    date: "2021-Present",
  },
  {
    title: "Hackathon Winner",
    description: "First place in a 48-hour hackathon for developing an innovative accessibility tool for visually impaired users.",
    icon: LineChart,
    date: "2020",
  },
  {
    title: "Published Technical Articles",
    description: "Author of over 20 technical articles on modern web development practices with over 100,000 combined views.",
    icon: BarChart4,
    date: "2019-Present",
  },
  {
    title: "Certified Cloud Architect",
    description: "Obtained professional certification in cloud architecture and deployment strategies.",
    icon: Layers,
    date: "2021",
  },
  {
    title: "Team Leadership Award",
    description: "Recognized for excellence in leading development teams and delivering projects on time and under budget.",
    icon: Workflow,
    date: "2022",
  },
];