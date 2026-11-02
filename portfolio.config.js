/**
 * =========================================================================
 * SATYABRAT PANDEY — PORTFOLIO CONFIGURATION
 * =========================================================================
 * Centralized data file for all personal branding, bio, skills, projects,
 * education, certifications, achievements, and contact details.
 * Edit this file to update any content across the entire website.
 */

const portfolioConfig = {
  // 1. Personal Branding & Hero Info
  personal: {
    name: "Satyabrat Pandey",
    firstName: "Satyabrat",
    greeting: "HELLO, I'M SATYABRAT PANDEY.",
    headlinePrimary: "Building Digital Experiences.",
    headlineSecondary: "Turning Ideas Into Reality.",
    roleTitles: [
      "Full Stack Developer",
      "AI Enthusiast",
      "Software Engineer",
      "CSE Student @ LPU"
    ],
    heroDescription:
      "I'm a Computer Science Engineering student passionate about Full Stack Development, Artificial Intelligence, and building meaningful digital products.",
    shortIntroduction:
      "I build modern web applications and AI-powered products that solve real-world problems. I enjoy turning ideas into functional, scalable, and user-friendly digital experiences.",
    availability: "Open to Internship Opportunities",
    location: "Gorakhpur, India",
    university: "Lovely Professional University (LPU), Phagwara, Punjab",
    degree: "Bachelor of Technology – Computer Science and Engineering",
    graduationYear: "2028",
    cgpa: "7.44/10",
    
    // Editable Contact Placeholders
    email: "satyabrat.pandey.dev@gmail.com", // [EDITABLE PLACEHOLDER]
    phone: "+91 98765 43210",               // [EDITABLE PLACEHOLDER]
    
    // Verified Social Profiles
    socials: {
      github: "https://github.com/saty159",
      linkedin: "https://www.linkedin.com/in/satyabrat-pandey-660878313",
      emailLink: "mailto:satyabrat.pandey.dev@gmail.com"
    }
  },

  // 2. About Me Section
  about: {
    heading: "A Little About Me",
    biography: [
      "I'm a Computer Science Engineering student at Lovely Professional University with a strong interest in software development, backend engineering, and artificial intelligence.",
      "I enjoy building practical applications, experimenting with modern technologies, and exploring how AI can improve everyday experiences.",
      "My development journey includes working on AI-powered applications, responsive web platforms, backend authentication systems, and database-driven projects.",
      "Beyond coding, I am interested in entrepreneurship, leadership, branding, and building technology-driven products."
    ],
    quickFacts: [
      { label: "Degree", value: "B.Tech Computer Science & Engineering" },
      { label: "University", value: "Lovely Professional University (LPU)" },
      { label: "Current CGPA", value: "7.44 / 10" },
      { label: "Graduation", value: "Class of 2028" },
      { label: "Hometown", value: "Gorakhpur, Uttar Pradesh, India" },
      { label: "Current Location", value: "Phagwara, Punjab, India" },
      { label: "Focus Areas", value: "Full Stack, AI Integration & Backend Core" }
    ]
  },

  // 3. Technical Skills Section
  skills: {
    heading: "Technical Skills",
    subtitle: "Technologies, frameworks, and engineering tools I build with daily.",
    categories: [
      {
        name: "Programming Languages",
        icon: "code",
        items: ["C++", "JavaScript", "Python", "HTML", "CSS"]
      },
      {
        name: "Frontend Development",
        icon: "layout",
        items: ["React.js", "Next.js", "Tailwind CSS", "Responsive UI", "DOM API"]
      },
      {
        name: "Backend Development",
        icon: "server",
        items: ["Node.js", "Express.js", "REST APIs", "Session Handling", "Middleware"]
      },
      {
        name: "Databases & Storage",
        icon: "database",
        items: ["MongoDB", "PostgreSQL", "MySQL", "Mongoose ODM"]
      },
      {
        name: "Developer Tools & Platforms",
        icon: "tool",
        items: ["Git", "GitHub", "VS Code", "Postman", "npm", "Vercel"]
      },
      {
        name: "Computer Science Fundamentals",
        icon: "cpu",
        items: [
          "Data Structures & Algorithms",
          "Object-Oriented Programming (OOP)",
          "Database Management Systems (DBMS)",
          "Computer Networks (CN)"
        ]
      }
    ]
  },

  // 4. Featured Projects
  projects: {
    heading: "Featured Projects",
    subtitle: "Real-world applications engineered for utility, clean code, and intuitive UX.",
    githubProfileUrl: "https://github.com/saty159",
    list: [
      {
        id: "aarogya-protect",
        title: "Aarogya Protect",
        category: "AI / Healthcare",
        badge: "AI Healthcare",
        shortDescription:
          "An AI-powered medical report explainer that helps users understand complex clinical reports and diagnostic values in simple, everyday language.",
        image: "./assets/aarogya.jpg",
        features: [
          "Medical report explanation in simple, jargon-free language",
          "User-friendly accessible medical dashboard interface",
          "Basic medicine information, verified uses, and key precautions",
          "AI-powered contextual response generation using Google Gemini API"
        ],
        technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "Gemini API"],
        githubUrl: "https://github.com/saty159",
        liveUrl: null // Live Demo only when verified
      },
      {
        id: "awas",
        title: "Awas",
        category: "Web Development",
        badge: "Booking Platform",
        shortDescription:
          "A hotel and short-stay booking platform designed to help students and travelers discover budget-friendly, verified accommodation near universities and travel hubs.",
        image: "./assets/awas.svg",
        features: [
          "Curated hotel and short-stay accommodation discovery",
          "Budget-friendly stay search with dynamic filters",
          "Responsive, mobile-first user interface",
          "Easy navigation and streamlined booking-oriented user experience"
        ],
        technologies: ["React.js", "JavaScript", "HTML5", "CSS3"],
        githubUrl: "https://github.com/saty159",
        liveUrl: null
      },
      {
        id: "auth-session-system",
        title: "Authentication & Session Management System",
        category: "Backend & Security",
        badge: "Security Core",
        shortDescription:
          "A robust backend authentication architecture implementing secure cookie-based session management, cryptographic password hashing, and server-side validation.",
        image: "./assets/auth.svg",
        features: [
          "Secure user registration and login authentication pipeline",
          "Stateful session management and HTTP-only cookie handling",
          "Salted password hashing using bcrypt",
          "MongoDB integration with robust Mongoose schemas",
          "Comprehensive server-side request validation and sanitize middleware"
        ],
        technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Sessions", "Cookies", "bcrypt"],
        githubUrl: "https://github.com/saty159",
        liveUrl: null
      },
      {
        id: "image-gallery",
        title: "Interactive Image Gallery",
        category: "Frontend & UI",
        badge: "Interactive UI",
        shortDescription:
          "A modern, responsive JavaScript-based image gallery featuring dynamic image loading, smooth transitions, and keyboard-accessible navigation.",
        image: "./assets/gallery.svg",
        features: [
          "High-performance lazy loading for bandwidth optimization",
          "Adaptive responsive grid layout for desktop, tablet, and mobile",
          "Smooth CSS hardware-accelerated transitions and lightbox view",
          "Full keyboard navigation support (Arrow keys & Escape)"
        ],
        technologies: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/saty159",
        liveUrl: null
      }
    ]
  },

  // 5. Education Timeline
  education: {
    heading: "Education",
    subtitle: "Academic foundation in Computer Science and Engineering.",
    items: [
      {
        institution: "Lovely Professional University (LPU)",
        degree: "Bachelor of Technology – Computer Science and Engineering",
        location: "Phagwara, Punjab, India",
        period: "August 2024 – August 2028",
        grade: "CGPA: 7.44 / 10",
        description:
          "Core coursework in Data Structures & Algorithms, Object-Oriented Programming in C++, DBMS, Computer Networks, and Full-Stack Web Technologies."
      },
      {
        institution: "AATMDEEP VIDYALAYA",
        degree: "Senior Secondary – Class XII",
        location: "Gorakhpur, Uttar Pradesh",
        period: "2023 – 2024",
        grade: null, // As specified: do not display Class X/XII percentage
        description:
          "Completed higher secondary education with a major focus on Physics, Chemistry, and Mathematics (PCM)."
      },
      {
        institution: "AATMDEEP VIDYALAYA",
        degree: "Secondary – Class X",
        location: "Gorakhpur, Uttar Pradesh",
        period: "2021 – 2022",
        grade: null, // As specified: do not display Class X/XII percentage
        description:
          "Completed secondary education with solid academic distinction and foundational science and mathematics."
      }
    ]
  },

  // 6. Training & Certifications
  certifications: {
    heading: "Training & Certifications",
    subtitle: "Structured skill development and industry-backed credentials.",
    items: [
      {
        title: "Data Structures and Algorithms in C++",
        issuer: "Lovely Professional University",
        date: "August 2025 – February 2026",
        badge: "Academic Specialization",
        desc: "Rigorous training in algorithmic problem-solving, time-space complexity, trees, graphs, and dynamic programming."
      },
      {
        title: "Infosys Springboard Certification",
        issuer: "Infosys Springboard",
        date: "April 2026",
        badge: "Industry Certified",
        desc: "Certified coursework in modern software engineering principles and programming fundamentals."
      },
      {
        title: "SQL and Relational Databases 101",
        issuer: "IBM Developer Skills Network",
        date: "Verified Credential",
        badge: "Database Systems",
        desc: "Comprehensive practical understanding of relational database architecture, relational algebra, SQL queries, joins, and indexing."
      },
      {
        title: "Software Engineering Job Simulation",
        issuer: "Accenture Forage",
        date: "August 2025",
        badge: "Job Simulation",
        desc: "Hands-on simulation covering software architecture, code debugging, client requirement analysis, and agile workflows."
      },
      {
        title: "Software Engineering Job Simulation",
        issuer: "Deloitte Forage",
        date: "September 2025",
        badge: "Job Simulation",
        desc: "Practical simulation focusing on software lifecycle design, technology advisory, and secure development standards."
      }
    ]
  },

  // 7. Achievements
  achievements: {
    heading: "Achievements & Hackathons",
    subtitle: "Competitions, hackathons, and collaborative problem-solving.",
    items: [
      {
        title: "Nebula Hacks 2025",
        type: "24-Hour Hackathon",
        badge: "Hackathon",
        description:
          "Participated in an intensive 24-hour national hackathon focused on rapid technical innovation, product prototyping, and real-world problem-solving under tight deadlines."
      },
      {
        title: "Code Hunt – AdVITyA'25, IIT Ropar",
        type: "Competitive Coding Challenge",
        badge: "IIT Ropar",
        description:
          "Represented Team Achievers in a high-intensity competitive algorithmic coding challenge hosted by IIT Ropar, tackling complex logic puzzles and data structures."
      }
    ]
  },

  // 8. Leadership & Community Activities
  leadership: {
    heading: "Leadership & Activities",
    subtitle: "Social impact initiatives and university leadership roles.",
    items: [
      {
        role: "Vice President",
        organization: "Converse E-Plus (English Speaking Group)",
        period: "Active Leadership",
        badge: "Executive Board",
        responsibilities: [
          "Spearheading communication workshops, debates, and public speaking sessions for 100+ university peers.",
          "Leading a committee of student organizers for campus events, ensuring seamless event coordination and teamwork.",
          "Mentoring junior students to overcome hesitation and build confident verbal presentation skills."
        ]
      },
      {
        role: "Lead Volunteer / Coordinator",
        organization: "Cyber Security Awareness – Community Development Project, LPU",
        period: "Social Initiative",
        badge: "Community Outreach",
        responsibilities: [
          "Conducted interactive cybersecurity awareness sessions for school children and community members.",
          "Educated attendees on essential digital safety, spotting phishing attacks, safe password habits, and responsible social media practices.",
          "Developed simple educational guides to demystify complex online threat vectors for non-technical audiences."
        ]
      }
    ]
  },

  // 9. Interests & Professional Goals
  interestsAndGoals: {
    heading: "Interests & Career Objective",
    subtitle: "What drives my curiosity and future vision in engineering.",
    interests: [
      { name: "Artificial Intelligence", icon: "brain" },
      { name: "Full Stack Development", icon: "layers" },
      { name: "Backend Engineering", icon: "server" },
      { name: "Software Development", icon: "code" },
      { name: "Entrepreneurship", icon: "rocket" },
      { name: "Product Building", icon: "package" },
      { name: "Technology & Innovation", icon: "zap" }
    ],
    careerObjective:
      "To become a skilled software engineer and product builder, contributing to impactful technology solutions while continuously improving my engineering and problem-solving abilities."
  },

  // 10. Contact Section
  contact: {
    heading: "Have an Idea? Let's Build Something Together.",
    description:
      "I'm always interested in connecting with developers, recruiters, founders, and people building innovative products. Whether you have an internship opportunity or want to discuss a project, my inbox is open.",
    channels: [
      {
        type: "Email",
        label: "Direct Email",
        value: "satyabrat.pandey.dev@gmail.com",
        link: "mailto:satyabrat.pandey.dev@gmail.com"
      },
      {
        type: "LinkedIn",
        label: "LinkedIn Profile",
        value: "linkedin.com/in/satyabrat-pandey",
        link: "https://www.linkedin.com/in/satyabrat-pandey-660878313"
      },
      {
        type: "GitHub",
        label: "GitHub Repositories",
        value: "github.com/saty159",
        link: "https://github.com/saty159"
      },
      {
        type: "Location",
        label: "Current Base",
        value: "Gorakhpur / Punjab, India",
        link: null
      }
    ]
  }
};

// Export for ES modules and standard script inclusion
if (typeof module !== "undefined" && module.exports) {
  module.exports = portfolioConfig;
}
