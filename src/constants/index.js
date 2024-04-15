import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  nextgen,
  jsdoc,
  CustomerSatisfactionSurvey,
  SlipknotTributePage,
  Projectlandingpage,
  codecamp,
  udemy,
  spline,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js three.js Developer",
    icon: mobile,
  },
  {
    title: "3D Designer",
    icon: backend,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
]
const experiences = [
  {
    title: "React.js",
    company_name: "",
    icon: reactjs,
    iconBg: "#383E56",
    points: [
      "Understanding core concepts like components, props, state, and lifecycle.",
      "Building UIs using reusable components.",
      "Managing state with useState, useContext, and Redux.",
      "Handling async operations with Axios, Redux Thunk, or Saga.",
      "Implementing client-side routing with React Router.",
      "Optimizing performance with code splitting, lazy loading, and memoization.",
    ],
  },
  {
    title: "Three.js",
    company_name: "",
    icon: threejs,
    iconBg: "#E6DEDD",
    points: [
      "Understanding scenes, geometries, materials, and animations.",
      "Creating and manipulating 3D scenes, meshes, and animations.",
      "Implementing advanced features like shaders and physics simulations.",
      "Optimizing applications for performance and efficiency.",
      "Integrating three.js with other libraries and frameworks.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "",
    icon: html,
    iconBg: "#383E56",
    points: [
      "Understanding HTML, CSS, and JavaScript.",
      "Experience with responsive web design techniques.",
      "Knowledge of modern JS frameworks like React, Angular, or Vue.js.",
      "Understanding of server-side programming languages like Node.js.",
      "Proficiency in using databases like MySQL or PostgreSQL.",
      "Experience with version control systems like Git.",
    ],
  },
  {
    title: "Spline",
    company_name: "",
    icon: spline,
    iconBg: "#E6DEDD",
    points: [
      "Seamless and continuous element transitions.",
      "Designing complex curves and shapes intuitively.",
      "Precise control over element trajectories.",
      "Smooth transitions between application states.",
    ],
  },
  {
    title: "Tailwind",
    company_name: "",
    icon: tailwind,
    iconBg: "#E6DEDD",
    points: [
      "Understanding utility-first CSS approach and core concepts of Tailwind CSS.",
      "Proficiency in rapidly building modern and responsive UIs.",
      "Configuring and customizing Tailwind CSS.",
      "Experience with Tailwind CSS utility classes for common UI components.",
    ],
  },
];



const testimonials = [
  {
    image: codecamp,
  },
  {
    image: udemy,
  },
 
];

const projects = [
  {
    name: "Next-Gen",
    description:
      "This project represents one of my early endeavors in web development. It serves as a platform to demonstrate futuristic technology concepts, showcasing advanced features and design elements. While primarily a prototype, the aim was to create an immersive and credible user experience. Every detail was meticulously crafted to push the boundaries of believability and innovation, reflecting my commitment to excellence in web design and development.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
 
      },
    ],
    image: nextgen,
    source_code_link: "https://next-gen-page.netlify.app/",
  },
  {
    name: "Customer Satisfaction Survey",
    description:
      "This is a Customer Satisfaction Survey, vital for gathering feedback on user experiences with our software or webpage. I've designed it to streamline the process, making it quick and effortless for customers to provide the necessary information. I opted for this design because it combines ease of use with a touch of enjoyment, while maintaining a professional appearance.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: CustomerSatisfactionSurvey,
    source_code_link: "https://customer-satisfaction-survey2234.netlify.app",
  },
  {
  name: "Web Side scroller",
    description:
      "A small Web side scroller Game I'm currently working on check in regularly to see my progress :)",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Sprites",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: CustomerSatisfactionSurvey,
    source_code_link: "https://web-game-fsjhz43h6-brandonlarsencodes-projects.vercel.app",
  },
  {
    name: "Project landing page",
    description:
      "This Product Landing Page is crafted to exhibit a selection of excellent books. I've created this project to demonstrate my versatility in web design. The design prioritizes reader comfort and effortless navigation.",   
      tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: Projectlandingpage,
    source_code_link: "https://product-landing-page-1234.netlify.app",
  },
  {
    name: "Technical Documentation Page",
    description:
      "This web page is tailored for learners. I've consciously limited the color palette to prevent eye strain. The fixed navbar on the side facilitates easy navigation between topics, ensuring a seamless learning experience.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: jsdoc,
    source_code_link: "https://jsdocs3737.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
