import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rupali Yadav",
  initials: "RY",
  url: "https://github.com/rupali-yadav",
  location: "Mumbai, India",
  description:
    "Creating Stunning and User-Centric Digital Experiences through Code",
  summary: `I'm Rupali Yadav, a design-oriented front-end developer passionate about creating pixel-perfect, engaging, and accessible digital experiences. My journey began in 2014 when I first dabbled in creating websites using Bootstrap. What started as an experiment quickly became a deep dive into the vast and exciting world of coding and web development.

Over the years, I've had the privilege of building websites and web applications for agencies, start-ups, and large corporations, always striving to find that sweet spot where design meets engineering. I believe that the best digital experiences are not only visually appealing but also built with solid engineering principles.

I like helping new developers and working with emerging startups to bring their ideas to life. Outside of work, I enjoy sharing my knowledge through articles on my blog, [webexpe.com](https://webexpe.com/), and creating fun dev memes for Instagram.

Let's build something amazing together!`,
  avatarUrl: "/nmayur/mayur-nalwala.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Redux",
    "TailwindCss",
    "Jest",
    "Git",
    "HTML / SCSS",
    "MDX",
    "Figma",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "rupali.yadav0@gmail.com",
    tel: "+91 869 197 3322",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rupali-yadav",
        icon: Icons.github,

        navbar: true,
      },
      Webexpe: {
        name: "Webexpe",
        url: "https://webexpe.com/",
        icon: NotebookIcon,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rupali-yadav-087bb4112/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:rupali.yadav0@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Accenture",
      href: "https://www.accenture.com/in-en",
      badges: ["ReactJS", "NextJS", "Typescript", "Redux", "SCSS", "Jest"],
      location: "Mumbai, India",
      title: "Software Engineer",
      logoUrl: "https://logos-world.net/wp-content/uploads/2020/06/Accenture-Emblem.png",
      start: "April 2022",
      end: "present",
      description: "During my tenure at Accenture, I contributed to three key projects: Unilever, TGO, and BFSG. I collaborated with the product team on web page designs, resolved front-end queries for other teams, drafted API responses and guided junior developers, ensuring clear communication and adherence to coding standards within the UI team."
    },
    {
      company: "Tata Consultancy Services",
      href: "https://www.tcs.com/",
      badges: ["ReactJS", "NextJS", "Redux", "Jest", "SCSS"],
      location: "Mumbai, India",
      title: "IT Analyst",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvnrwp5tPxI72Reu074a05i1pmISdUFDGuig&s",
      start: "May 2021",
      end: "April 2022",
      description:
        "I worked as the Lead Front-End Developer for the Envoy Portal project at CIBC, migrating a legacy web app to a modern Next.js application. Improved page load times by 6-8 seconds, ensured cross-browser compatibility, and maintained high coding standards while mentoring team members in React.js and JavaScript."
    },
    {
      company: "Reliance Jio",
      href: "https://www.jio.com/",
      badges: ["JavaScript", "ReactJS", "NextJS", "Redux", "Jest", "emotionJS"],
      location: "Navi Mumbai, India",
      title: "Assistant Manager",
      logoUrl: "https://rilstaticasset.akamaized.net/sites/default/files/2023-02/jio.jpg",
      start: "March 2024",
      end: "April 2021",
      description: `Led the development of SEO-friendly web pages using React.js and Next.js for Jio's Recharge, Login, and User Dashboard portals. Collaborated with the backend team to design API responses, integrated Google Analytics, and enhanced UI/UX for various projects, including Jio KBC Play Along and Jio mHere, improving performance and user experience`
    },
  ],
  education: [
    {
      school: "Nextleap",
      href: "https://nextleap.app/",
      degree: "Product Management Fellow",
      logoUrl: "/buildspace.jpg",
      start: "June 2023",
      end: "Oct 2023",
    },
    {
      school: "Mumbai University",
      degree: "Bachelor of Engineering - Computer Science",
      logoUrl: "/waterloo.png",
      start: "2013",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "Blog Template (100+ Stars, 50+ forks) Next.js, Tailwind",
      href: "",
      dates: "",
      active: true,
      description:
        "Created a customizable blog template leveraging Next.js’s SSG for static page generation. Designed for both technical and non-technical users, with responsive design, SEO optimization, multi-author support, and light/dark themes. Gained 53 forks and 120+ stars on GitHub, demonstrating its popularity and utility.",
      technologies: ["Next.js", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Source code",
          href: "https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Movieflix OTT Saas - Next.js, Typescript, TailwindCSS, shadcn-ui, Prisma, MongoDB",
      href: "",
      dates: "",
      active: true,
      description:
        "Movieflix is an OTT app built using Next.js, TypeScript, TailwindCSS, shadcn-ui, Prisma, and MongoDB. It allows users to log in, create multiple profiles, watch movies with progress tracking, and manage their watchlist. The platform offers a seamless and personalized streaming experience.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Prisma", "MongoDB"],
      links: [
        {
          type: "Demo",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Blog template - MDX, Next.js, TailwindCSS, Typescript",
      href: "",
      dates: "",
      active: true,
      description:
        "Simplified and optimized an earlier template further with Markdown/MDX, leveraging Next.js features like getStaticPaths and getStaticProps. Structured posts as Markdown files, dynamically generating pages at build time. Added features like SEO optimization with Next SEO, and sitemap generation with NextSitemap. Utilized Tailwind CSS for easy customization, focusing on performance and simplicity. Applied this template to [webexpe.com](https://webexpe.com/), achieving 600+ monthly organic hits due to effective SEO integration.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "MDX/Markdown"],
      links: [
        {
          type: "Source code",
          href: "https://github.com/webexpe13/nextjs-tailwind-mdx-blog-template",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    }

  ],
  hackathons: [],
} as const;
