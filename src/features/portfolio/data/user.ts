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
  //   about: `
  // Hello, World! I am Chánh Đại — a Design Engineer passionate about creating high-performance, user-centric software solutions with intuitive and engaging designs.

  // With 5+ years of experience, I specialize in building high-quality web and mobile applications using Next.js, React, TypeScript, and modern front-end technologies. Beyond work, I love exploring new technologies and turning ideas into reality through personal projects.

  // One of my key projects, [ZaDark](https://zadark.com), launched in 2022, enhances the Zalo experience on PC and Web, surpassing 80k+ downloads on [SourceForge](https://sourceforge.net/projects/zadark) and reaching 20k+ active users on the [Chrome Web Store](https://chromewebstore.google.com/detail/llfhpkkeljlgnjgkholeppfnepmjppob) (as of Sep 2025).

  // I'm also the creator of [React Wheel Picker](https://react-wheel-picker.chanhdai.com) — iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support. It has earned 4k+ weekly downloads on [npm](https://www.npmjs.com/package/@ncdai/react-wheel-picker) and was selected for [▲Vercel OSS Program](https://vercel.com/blog/summer-2025-oss-program#react-wheel-picker) summer 2025 cohort.

  // Let's connect and collaborate!
  //   `,
  about: `
- Web Developer passionate about building clean, modern, and functional web applications.
- Skilled in JavaScript, React, Next.js, and modern web development practices.
- Always learning, exploring new technologies, and working on personal projects to improve craftsmanship.
`,
  avatar: "https://github.com/SinuKumar069.png", // Using GitHub avatar as placeholder
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-light.png?t=1763205174",
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
