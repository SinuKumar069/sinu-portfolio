import type { User } from "@/features/portfolio/types/user";

export const USER: User = {
  firstName: "Sinu Kumar",
  lastName: "",
  displayName: "Sinu Kumar",
  username: "sinukumar",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Web Developer",
    "Tech Enthusiast",
  ],
  address: "",
  phoneNumber: "", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "aGVsbG9AZXhhbXBsZS5jb20=", // hello@example.com (Base64 encoded)
  website: "https://sinukumar.com",
  jobTitle: "",
  jobs: [
    {
      title: "",
      company: "",
      website: "",
    },
    {
      title: "",
      company: "",
      website: "",
    },
  ],
  about: `
- Web Developer passionate about building clean, modern, and functional web applications.
- Skilled in JavaScript, React, Next.js, and modern web development practices.
- Always learning, exploring new technologies, and working on personal projects to improve craftsmanship.
`,
  avatar: "https://github.com/SinuKumar069.png", // Using GitHub avatar as placeholder
  ogImage: "https://sinu.com/og-image.png", // Placeholder
  namePronunciationUrl: "",
  timeZone: "Asia/Kolkata",
  keywords: [
    "sinu",
    "sinu kumar",
    "sinukumar",
    "web developer",
    "developer portfolio",
  ],
  dateCreated: "2023-10-20", // YYYY-MM-DD
};
