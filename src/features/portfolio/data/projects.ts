import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "example-project",
    title: "Project Manager",
    period: {
      start: "01.2025",
    },
    link: "https://projectmanager-kappa.vercel.app",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Node.js",
      "Express.js",
      "JWT",
    ],
    description: `This is a description of your Project Manager application. You can use Markdown here!
- Feature 1: Create, edit, and manage tasks for different projects
- Feature 2: Track project progress with a clean and simple interface
- Feature 3: Organize work using priorities, deadlines, and status labels
- Feature 4: Assign tasks to team members and set up notifications
- Feature 5: View project progress in a clean dashboard`,

    // logo: "https://github.com/sinukumar.png", // Optional: Add a logo URL here
    isExpanded: true,
  },
];
