import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Lion",
  lastName: "Lim",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Computer Science Undergraduate",
  avatar: "/images/avatar.jpg",
  location: "Asia/Jakarta", 
  languages: ["English", "Bahasa"], 
};



const social = [
  
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/chyls",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "www.linkedin.com/in/lion-lim-4b7b64350",
  },
  // {
  //   name: "X",
  //   icon: "x",
  //   link: "",
  // },
  {
    name: "Email",
    icon: "email",
    link: "lion.limm12@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Cloud and Cybersecurity Enthusiast</>,
  subline: (
    <>
      I'm Lion, an undergraduate at <InlineCode>BINUS</InlineCode>, where I study
      <br /> Network, Cloud and Security.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Lion, a Jakarta-based undergraduate, studying at BINUS university, with a passion for CyberSecurity & Cloud Engineering
      </>
    ),
  },
  work: {
    display: false,
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "BINUS University",
        description: <>Relevant Coursework: Algorithm Analysis, Data Structures, Computer Security, Network And System Programming, Network Security Fundamental, Popular Network Technology, Introduction to Cloud.</>,
      },
      {
        name: "Kanaan Global School",
        description: <>Cambridged-curriculum based international school.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Cloud",
        description: <>Able to use Azure, K8s and Terraform.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/K8s.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/Azure.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Docker",
        description: <>Proficient in using Docker as a tool for deployment.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/Docker-app.png",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          {
            src: "/images/projects/project-01/Docker-engine.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Linux",
        description: <>Proficient in Kali for security/pentesting as well as Red Hat for System Administration.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/kali.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "CTFs",
        description: <>Done a fair amounts of CTF training in multiple sites, such as picoCTF and HacktheBox.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/CTF.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};



const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};



export { person, social, home, about, work};
