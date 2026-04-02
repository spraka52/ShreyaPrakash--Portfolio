import React, { useState, useEffect } from "react";

const PHOTO = "data:image/jpeg;base64,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";

const SKILL_CATS = [
  { label: "LANGUAGES", items: [
    { name: "Java",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Python",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "C#",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
    { name: "Go",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
    { name: "C++",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "SQL",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
  ]},
  { label: "FRONTEND", items: [
    { name: "React",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "Vue 3",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
    { name: "Redux",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
    { name: "Tailwind",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "SCSS",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" },
    { name: "CSS",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "HTML",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "Ajax",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  ]},
  { label: "BACKEND", items: [
    { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
    { name: ".NET Core",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" },
    { name: "Node.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "FastAPI",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
    { name: "GraphQL",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
    { name: "Kafka",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" },
    { name: "gRPC",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grpc/grpc-original.svg" },
    { name: "REST API",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
    { name: "WCF",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" },
    { name: "WebSockets",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "SignalR",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" },
  ]},
  { label: "DATABASE", items: [
    { name: "PostgreSQL",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "SQL Server",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
    { name: "MongoDB",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "DynamoDB",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynamodb/dynamodb-original.svg" },
    { name: "Redis",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
    { name: "MySQL",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  ]},
  { label: "CLOUD & DEVOPS", items: [
    { name: "AWS",             icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    { name: "Azure",           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
    { name: "Docker",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Kubernetes",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" },
    { name: "Unity",           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" },
    { name: "Jenkins",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
    { name: "GitHub Actions",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" },
    { name: "Prometheus",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg" },
    { name: "AWS EKS",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  ]},
  { label: "ML / AI", items: [
    { name: "PyTorch",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
    { name: "TensorFlow",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
    { name: "OpenCV",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
    { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
    { name: "OpenAI API",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openai/openai-original.svg" },
    { name: "HuggingFace",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/huggingface/huggingface-original.svg" },
    { name: "OpenRouter",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openai/openai-original.svg" },
  ]},
  { label: "TESTING", items: [
    { name: "SpecFlow",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" },
    { name: "Selenium",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" },
    { name: "SonarQube",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sonarqube/sonarqube-original.svg" },
    { name: "JUnit",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg" },
  ]},
];

const PROJECTS = [
  { name:"SafePrompt", desc:"Fine-tuned DistilBERT for multi-label text classification — toxicity, threats, hate speech. Real-time risk scoring with FastAPI backend and Next.js frontend.", stack:["DistilBERT","PyTorch","FastAPI","Next.js","HuggingFace"], github:"https://github.com/spraka52/safeprompt-guardrail", color:"#1a1a2e", accent:"#7c3aed" },
  { name:"Elastic Cloud Platform", desc:"Auto-scaling face recognition pipeline on AWS handling 1000+ concurrent users. MTCNN edge detection + FaceNet on Lambda, 40% cost reduction with queue-depth autoscaling.", stack:["AWS Lambda","S3","SQS","MTCNN","FaceNet"], color:"#0d1f2d", accent:"#0ea5e9" },
  { name:"Portfolio Risk Analyzer", desc:"Full-stack investment portfolio risk platform with JWT auth, Spring Security RBAC, and real-time stock data via Yahoo Finance. Features AI-powered rebalancing suggestions, what-if simulator, sector correlation matrix, per-holding news feed, portfolio value history, smart email alerts, and side-by-side portfolio comparison. Deployed on Vercel + Railway.", stack:["Next.js","Spring Boot","PostgreSQL","Yahoo Finance","Groq","Docker"], live:"https://portfolio-risk-analyzer-seven.vercel.app/", color:"#1a2e1a", accent:"#22c55e" },
  { name:"Waste Segregation", desc:"1st Place — CellStart AI Hackathon. Trained Faster R-CNN on TensorFlow to classify organic, inorganic, and plastic waste. 97% confidence, outperformed 30+ teams.", stack:["TensorFlow","Faster R-CNN","Python","OpenCV","Transfer Learning"], github:"https://github.com/spraka52/object_detection", color:"#2d1a0d", accent:"#f97316", badge:"🏆 1st Place" },
  { name:"VR Training Data Generator", desc:"Unity/C# application generating realistic VR training telemetry using probabilistic models for the U.S. Army GIFT system. Simulates multiple trainees from a single headset.", stack:["Unity","C#","Kafka","Probabilistic Models","GIFT"], github:"https://github.com/spraka52/SteelArtt-VR-Mock-data-generator", color:"#1a1a1a", accent:"#a855f7" },
  { name:"Metrics Orchestrator", desc:"Designed and implemented a scalable backend computing 24 software engineering metrics across GitHub repositories. Built centralized aggregation architecture that downloads/caches repo snapshots, extracts 90 days of commit history, and runs automated cron-based daily updates with MongoDB time-series storage. Created flexible history APIs for date-range metric queries.", stack:["Java","Spring Boot","MongoDB","Docker","GitHub API","Cron Jobs"], github:"https://github.com/spraka52/metrics-orchestrator", color:"#1a1f2e", accent:"#3b82f6" },
  { name:"Mindful Journal", desc:"AI-powered journaling platform integrating OpenAI and Ollama LLMs for personalized mental health insights, with prompt engineering pipelines and PostgreSQL storage.", stack:["React","Node.js","OpenAI API","Ollama","PostgreSQL"], github:"https://github.com/spraka52/mental-journal", color:"#2e1a1a", accent:"#ef4444" },
];

const BLOGS = [
  { title:"Could Hashing Replace FIFO and Round Robin?", excerpt:"A systems-level investigation into hash-based CPU scheduling — where it already exists in disguise, why it has not been formalized as a primary policy, and whether it should be.", tags:["OS","Systems","Linux"], date:"Mar 2026", read:"8 min", url:"https://medium.com/@shreya2199/could-hashing-replace-fifo-and-round-robin-59de9505fa48" },
];

const EXP = [
  { type:"work", period:"May 2025 — Present", role:"Software Engineer (Research)", company:"Arizona State University", points:[
    "Architected full-stack admin panel with 8 @PreAuthorize-guarded REST endpoints and a Vue 3 TypeScript dashboard — supporting user approval/rejection, bulk CSV import, bulk email, inactivity reminders, and status management from a single interface.",
    "Engineered account security system with LoginAttemptService enforcing brute-force lockout (5 attempts, 30-min lock) and RegistrationRateLimiter applying IP-based sliding-window rate limiting (5 req/hr via ConcurrentHashMap) to prevent credential stuffing.",
    "Hardened JWT infrastructure with SHA-256 signing secrets, 10-hour token expiry, and environment-aware SameSite cookie policy to mitigate CSRF and token-theft attack vectors.",
    "Configured Spring Security with stateless session management, method-level RBAC (@PreAuthorize), and multi-origin CORS — securing all /admin/** endpoints with role enforcement and returning HTTP 423 for locked accounts.",
    "Implemented centralized EmailService with Spring Mail SMTP covering approval emails, rejection notifications, inactivity reminders, and bulk email with per-recipient failure tracking.",
    "GIFT (U.S. Army) — Developed a VR-integrated tutoring platform using Java, Apache Kafka, and MongoDB; engineered real-time Kafka event processing for user performance data, reducing latency by 40%.",
    "Designed secure integration pathways for Unity VR session identifiers within GIFT training sessions, enforcing least-privilege data sharing and eliminating stale cross-session contamination.",
  ] },
  { type:"work", period:"Dec 2022 — Aug 2024", role:"Associate Software Development Engineer 2", company:"Publicis Sapient · Promoted", points:[
    "Streamlined middle-office and back-office workflows for Point72 (hedge fund) by building high-performance WPF desktop applications and WCF/gRPC services for real-time inter-system communication between trading and back-office platforms.",
    "Optimized a critical SQL Server bulk import stored procedure, reducing runtime from 180 minutes to 2 minutes — an 88%+ improvement that unblocked daily financial reporting workflows.",
    "Implemented a new user role model within the back-office framework to enforce fine-grained access control and data security across sensitive financial operations.",
    "Established a disaster recovery environment for a critical WPF application, designing failover and continuity procedures that ensured zero data loss and business continuity.",
    "Enhanced backend responsiveness by 40% by integrating Azure Functions into the platform architecture, offloading compute-intensive operations to serverless execution.",
    "Volunteered as front-end lead for a CSR initiative — built a student management web app for an NGO using Next.js, ReactJS, and Java Spring Boot, delivering a production-ready platform that improved administrative efficiency for educators.",
    "Owned L2 on-call support for 3 production applications, triaging and resolving complex runtime issues before customer impact; deployed via Jenkins CI/CD with 100% SonarQube code coverage.",
  ] },
  { type:"work", period:"July 2021 — Dec 2022", role:"Associate Software Development Engineer 1", company:"Publicis Sapient", points:[
    "Built a cloud-native pricing solution platform from scratch using Azure Functions and Azure MySQL, integrating configurable data sources and user management for real-time risk analysis — sole developer on the frontend, built independently by reading Azure AD documentation.",
    "Built the SSO frontend in ReactJS from scratch by ramping up on Azure AD and OAuth 2.0 documentation, delivering secure role-based authentication for 160,000+ enterprise users.",
    "Authored an end-to-end BDD test suite using SpecFlow and Selenium in .NET Core, generating step-wise Extent Reports — enabling non-technical stakeholders to review acceptance criteria and improving release confidence.",
    "Led a POC comparing Pa11y and Lighthouse for automated accessibility testing in the CI/CD pipeline for Sunbelt Rentals (e-commerce); prototyped both tools hands-on and presented findings — team adopted Pa11y as the standard.",
    "Owned the Recently Viewed and Frequently Viewed product features end-to-end for Sunbelt Rentals — designed and implemented using React Context API, coordinating directly with onshore client stakeholders to gather requirements and demo releases.",
    "Built cart features and resolved critical frontend bugs in a high-traffic ReactJS e-commerce application, working directly with the client to demo features and align delivery with business priorities.",
    "Built an analytics framework using Google Tag Manager in ReactJS, tracking real-time product demand signals to inform inventory and business management decisions.",
    "Built RESTful APIs in .NET Core for credit card line management and contributed to microservices architecture for the insurance domain for Bangkok Bank — gaining cross-vertical experience in fintech and banking.",
  ] },
  { type:"work", period:"Feb 2021 — July 2021", role:"Software Engineer Intern", company:"Honeywell Technology Solutions", points:[
    "Developed backend services using .NET Core for a web application, enhancing functionality and user experience.",
    "Integrated frontend features with HTML, CSS, JavaScript, and Ajax, ensuring seamless interaction between client and server.",
    "Created stored procedures in Microsoft SQL Server to optimize data retrieval and support backend services.",
    "Implemented SignalR for real-time polling, facilitating bi-directional communication between the browser and server.",
  ] },
];

const SHREYA_CONTEXT = `You are an AI assistant on Shreya Prakash's portfolio website. Answer questions about Shreya concisely and helpfully. Only answer questions about Shreya — if asked anything unrelated, politely redirect.

ABOUT SHREYA:
M.S. Computer Software Engineering @ Arizona State University, GPA 4.11/4.0, graduating May 2026. 4+ years of industry experience. Seeking full-time roles in Software Engineering, Full Stack, Backend, .NET, Cloud, ML Engineering, and Forward Deployed Engineering in the U.S. (requires visa sponsorship). Email: shreya2199@gmail.com | LinkedIn: linkedin.com/in/shreya-prakash2199 | GitHub: github.com/spraka52

EXPERIENCE:
1. Software Engineer (Research) — ASU (May 2025–Present): Building BoneAtlas healthcare AI platform (GraphQL, MongoDB, 3D visualization). Built Unity/C# VR data generation system for U.S. Army GIFT platform with Kafka. Reduced data processing latency by 40%.
2. ASDE-2 — Publicis Sapient (Dec 2022–Aug 2024, Promoted): WPF desktop apps + WCF/gRPC for Point72 hedge fund. Optimized SQL Server proc from 180 min to 2 min (88%+ improvement). Azure Functions boosted backend responsiveness 40%. L2 on-call, Jenkins CI/CD, 100% SonarQube.
3. ASDE-1 — Publicis Sapient (July 2021–Dec 2022): SSO frontend ReactJS with Azure AD OAuth 2.0 for 160,000+ enterprise users. Cloud-native pricing platform (Azure Functions, Azure MySQL). Sunbelt Rentals e-commerce features. Bangkok Bank .NET Core APIs.
4. Software Engineer Intern — Honeywell (Feb 2021–July 2021): C#/.NET WebSockets notification system. Optimized SQL stored procedures by 70%.

SKILLS: Java, Python, C#, Go, TypeScript, JavaScript, SQL | React, Next.js, Vue 3, Angular | Spring Boot, .NET Core, Node.js, FastAPI, GraphQL, Kafka, gRPC | PostgreSQL, SQL Server, MongoDB, DynamoDB, Redis | AWS, Azure, Docker, Kubernetes, Jenkins, GitHub Actions | PyTorch, TensorFlow, OpenCV, Scikit-learn, OpenAI API, LangChain

PROJECTS: SafePrompt (DistilBERT toxicity classifier), Elastic Cloud Platform (AWS face recognition, 1000+ users), Portfolio Risk Analyzer (Next.js + Spring Boot + Groq AI, live on Vercel — what-if simulator, AI rebalancing, sector correlation matrix, news feed, email alerts, portfolio comparison)
, Waste Segregation (1st Place hackathon, 97% accuracy), VR Training Data Generator (U.S. Army GIFT), Metrics Orchestrator (24 engineers, 24 microservices), Mindful Journal (OpenAI + Ollama LLMs)

ACHIEVEMENTS: 1st Place CellStart AI Hackathon, 1st Place Phaseshift ML Hackathon (National, India), IEEE Publication: FDMCA - Face Detection and Gaze-based Morse Code Authentication (PuneCon 2021), IEEE Publication: Blind Assist - Mobile App for the Visually Impaired using OCR + TensorFlow Lite (PuneCon 2021)

Keep answers brief (2-4 sentences). Be friendly and professional.`;

const TABS = ["home","projects","blog","experience","achievements","tldr","contact"];

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "medium");
  const [active, setActive] = useState("home");
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    const bg = theme === "light" ? "#f5f5f0" : theme === "medium" ? "#1a1a2e" : "#0a0a0a";
    document.body.style.background = bg;
  }, [theme]);
  const cycleTheme = () => setTheme(t => t === "dark" ? "medium" : t === "medium" ? "light" : "dark");
  const themeIcon = theme === "dark" ? "🌑" : theme === "medium" ? "🌗" : "☀️";
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const [contactForm, setContactForm] = useState({name:"", email:"", message:""});
  const [contactStatus, setContactStatus] = useState(null);
  const [contactError, setContactError] = useState(null);
  const chatEndRef = React.useRef(null);

  const SUGGESTIONS = [
    "How many years of experience does Shreya have?",
    "What tech stack does Shreya know?",
    "How can I contact Shreya?",
    "What databases does Shreya work with?",
  ];

  const sendMessage = async (text) => {
    const msg = text || chatInput.trim();
    if (!msg || chatLoading) return;
    setChatInput("");
    const updated = [...chatMessages, { role: "user", content: msg }];
    setChatMessages(updated);
    setChatLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            { role: "system", content: SHREYA_CONTEXT },
            ...updated.map(m => ({ role: m.role, content: m.content })),
          ],
        }),
      });
      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't get a response.";
      setChatMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setChatMessages(prev => [...prev, { role: "assistant", content: "Something went wrong. Please try again." }]);
    }
    setChatLoading(false);
  };

  React.useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [chatMessages, chatLoading]);

  useEffect(() => {
    const s = document.createElement("style");
    s.id = "pf";
    s.textContent = CSS;
    document.head.appendChild(s);
    return () => document.getElementById("pf")?.remove();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const obs = new IntersectionObserver(
        es => es.forEach(e => { if(e.isIntersecting) setActive(e.target.id); }),
        { threshold: 0.2, rootMargin: "-60px 0px -40% 0px" }
      );
      TABS.forEach(id => { const el = document.getElementById(id); if(el) obs.observe(el); });
      return () => obs.disconnect();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const go = id => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });

  return (
    <div className="pf">
      <nav className="nav">
        <div className="nav-pills">
          {TABS.map(id => (
            <button key={id} className={"pill"+(active===id?" on":"")} onClick={() => go(id)}>
              {id === "tldr" ? "AI" : id === "contact" ? "Contact" : id === "achievements" ? "Awards" : id === "experience" ? "Experience" : id.charAt(0).toUpperCase()+id.slice(1)}
            </button>
          ))}
        </div>
        <button className="theme-toggle" onClick={cycleTheme} title={`Switch theme (${theme})`}>{themeIcon}</button>
      </nav>

      <div className="wrap">
        <section id="home">
          <div className="card profile-card">
            <div className="profile-top">
              <div className="profile-left">
                <img src={PHOTO} className="avatar" alt="Shreya Prakash" />
                <div>
                  <div className="profile-name-row">
                    <span className="profile-name">Shreya Prakash</span>
                    <span className="badge-green">Open to Work</span>
                    <span className="badge-blue">Open to Relocation</span>
                  </div>
                  <div className="profile-role">Software Engineer &amp; CS Grad Student @ ASU</div>
                  <a href="mailto:shreya2199@gmail.com" className="profile-email">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                    shreya2199@gmail.com
                  </a>
                </div>
              </div>
              <div className="profile-icons">
                <a href="https://github.com/spraka52" target="_blank" rel="noreferrer" className="icon-btn" title="GitHub">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/shreya-prakash2199/" target="_blank" rel="noreferrer" className="icon-btn" title="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
            <div className="divider" />
            <div style={{display:"flex",alignItems:"flex-start",gap:12,marginBottom:16}}>
              <div style={{fontSize:20,lineHeight:1,flexShrink:0}}>🎓</div>
              <div>
                <div style={{fontSize:14,fontWeight:600,color:"var(--txt)",marginBottom:2}}>M.S. Computer Software Engineering</div>
                <div style={{fontSize:13,color:"var(--teal)",marginBottom:4}}>Arizona State University · GPA 4.11 / 4.0 · May 2026</div>
                <div style={{fontSize:13,color:"var(--muted)"}}>Specializing in distributed systems, cloud computing, and machine learning.</div>
              </div>
            </div>
            <div className="bio">
              <p>Software engineer with <strong>3+ years of industry experience</strong> at <strong>Publicis Sapient</strong> and <strong>Honeywell</strong>, now finishing an M.S. in Software Engineering at ASU (GPA 4.11, May 2026).</p>
              <p style={{marginTop:12}}>At Publicis Sapient, I engineered <strong>WPF desktop apps and WCF/gRPC services in C# and .NET Core</strong> for a hedge fund's back-office financial systems, built <strong>cloud-native pricing solutions with ReactJS and Azure</strong>, and developed <strong>RESTful APIs handling millions of daily transactions</strong>. At Honeywell, I built <strong>.NET Core APIs with SignalR</strong> for real-time event delivery, optimized SQL Server stored procedures by <strong>70%</strong>, and led a <strong>24-person engineering team</strong> owning a metrics orchestration platform end-to-end.</p>
              <p style={{marginTop:12}}>Currently a <strong>Research Assistant</strong> building <strong>BoneAtlas</strong> — a medical imaging platform generating 3D bone visualizations from CT scans with ML-powered diagnostics for forensic analysis. Presented at <strong>AAFS 2026</strong> to 40+ forensic professionals. On the AI/ML side: fine-tuned <strong>DistilBERT for real-time prompt safety classification</strong> and trained a <strong>Faster R-CNN model at 97% confidence</strong> for automated waste segregation.</p>
              <p style={{marginTop:12}}>Great match for teams building <strong>scalable backend systems</strong>, <strong>.NET/C# or Java enterprise apps</strong>, <strong>cloud-native platforms on AWS/Azure</strong>, or <strong>AI/ML-powered products</strong>.</p>
              <p style={{marginTop:12}}>Actively looking for <strong>full-time roles</strong> starting May 2026 — SDE, Backend, Full-Stack, .NET, or ML Engineer.</p>
            </div>
            <div style={{marginTop:20,display:"flex",gap:10,flexWrap:"wrap"}}>
              <a href="#contact" onClick={e=>{e.preventDefault();document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}} className="cta-secondary">Let's Talk</a>
              <a href="https://drive.google.com/uc?export=download&id=15p2zBZ10CQGNwuV5wVbR5TnhdzLnJXVe" target="_blank" rel="noreferrer" className="cta-primary">Download Resume</a>
              <a href="https://www.linkedin.com/in/shreya-prakash2199/" target="_blank" rel="noreferrer" className="cta-secondary">View LinkedIn</a>
            </div>
          </div>

          <div className="stats-row">
            {[["3+","Years industry exp."],["2x","Hackathon winner"],["4.11","GPA @ ASU"],["2","IEEE Publications"]].map(([n,l]) => (
              <div key={l} className="stat-card">
                <div className="stat-n">{n}</div>
                <div className="stat-l">{l}</div>
              </div>
            ))}
          </div>

          <div className="card" style={{marginTop:16}}>
            <div className="card-label"><span className="dot" />GitHub Contributions · spraka52</div>
            <img src={`https://ghchart.rshah.org/40c463/spraka52?v=${new Date().toISOString().split('T')[0]}`} alt="GitHub contributions" className="gh-img" />
          </div>

          <div style={{marginTop:32}}>
            <div className="section-heading">Recommendations</div>
            <div className="section-sub">What colleagues and managers say</div>
            <div className="exp-list">
              {[
                {
                  name:"Gaurav Mithas",
                  title:"Frontend UI Architect · Publicis Sapient",
                  rel:"Managed Shreya directly · Aug 2025",
                  quote:"Shreya was a reliable and driven team member who consistently delivered high-quality work. She consistently impressed us with her problem-solving mindset, attention to detail, and ability to deliver high-quality features. She contributed significantly by fixing critical UI bugs, developing dynamic components like the 'recently viewed' and 'frequently viewed' product sections, and supporting the integration of our analytics framework using Google Tag Manager and ReactJS. I'm confident Shreya will be an asset to any team she joins."
                },
                {
                  name:"Sanjeev Kumar",
                  title:"Technical Program Manager · PMP | SAFe | Financial Services",
                  rel:"Managed Shreya directly · Jul 2025",
                  quote:"As a .NET developer, she demonstrated exceptional technical skills, a deep understanding of the framework, and a strong ability to quickly grasp complex business requirements. Shreya consistently delivered high-quality code, met all deadlines, and proactively identified areas for optimization and improvement. I would highly recommend Shreya for any role that requires strong .NET development skills and a collaborative mindset."
                },
                {
                  name:"Rajneesh Yadav",
                  title:"Associate Technology L2 · Publicis Sapient",
                  rel:"Worked on the same team · Jul 2025",
                  quote:"I was consistently impressed by her technical expertise and professionalism. She demonstrated deep knowledge of the framework, delivering clean, efficient, and maintainable code that positively impacted our delivery timelines. Beyond her technical skills, Shreya's proactive problem-solving, quick grasp of business requirements, and collaborative spirit truly stood out. I'm confident Shreya will be a valuable asset to any team."
                }
              ].map(r => (
                <div key={r.name} className="card testimonial-card">
                  <div className="testimonial-quote">"{r.quote}"</div>
                  <div className="testimonial-meta">
                    <div className="testimonial-name">{r.name}</div>
                    <div className="testimonial-title">{r.title}</div>
                    <div className="testimonial-rel">{r.rel}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{marginTop:32}}>
            <div className="section-heading">Tech Stack</div>
            <div className="section-sub">Technologies I work with</div>
            <div className="skills-cats">
              {SKILL_CATS.map(cat => (
                <div key={cat.label} className="card skill-cat">
                  <div className="skill-cat-lbl">{cat.label}</div>
                  <div className="skill-items">
                    {cat.items.map(item => (
                      <div key={item.name} className="skill-item">
                        <img src={item.icon} alt={item.name} onError={e => e.target.style.display="none"} />
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        <section id="projects" style={{paddingTop:48}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:4}}>
            <div className="section-heading">Projects</div>
          </div>
          <div className="section-sub">Things I've built.</div>
          <div className="proj-grid-2">
            {PROJECTS.map((p,i) => (
              <div key={i} className="proj-card-2">
                <div className="proj-preview" style={{background:`var(--card)`,borderBottom:`1px solid ${p.accent}33`}}>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <div style={{display:"flex",alignItems:"center",gap:8}}>
                      <span style={{fontFamily:"monospace",fontSize:13,color:p.accent,fontWeight:600}}>&lt;/&gt;</span>
                      <span style={{fontSize:14,fontWeight:600,color:"var(--txt)"}}>{p.name}</span>
                    </div>
                    <div style={{display:"flex",gap:6,alignItems:"center"}}>
                      {p.badge && <span style={{fontSize:10,background:`${p.accent}22`,color:p.accent,border:`1px solid ${p.accent}44`,padding:"2px 7px",borderRadius:4,fontFamily:"'JetBrains Mono',monospace"}}>{p.badge}</span>}
                      {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="proj-icon-btn" onClick={e=>e.stopPropagation()}>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                      </a>}
                      {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="proj-icon-btn" style={{color:"var(--teal)"}} onClick={e=>e.stopPropagation()}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      </a>}
                    </div>
                  </div>
                </div>
                <div className="proj-body">
                  <p className="proj-desc-2">{p.desc}</p>
                  <div className="proj-tags-2">
                    {p.stack.map(s => <span key={s} className="tag2" style={{"--ac":p.accent}}>{s}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="blog" style={{paddingTop:48}}>
          <div className="section-heading">Blog</div>
          <div className="section-sub">Published on <a href="https://medium.com/@shreya2199" target="_blank" rel="noreferrer" style={{color:"var(--gold)",textDecoration:"none"}}>Medium</a> — writing about systems, backend engineering, and computer science.</div>
          <div className="card" style={{padding:0,overflow:"hidden"}}>
            {BLOGS.map((b,i) => (
              <div key={i} className={"blog-item"+(i<BLOGS.length-1?" bordered":"")} onClick={() => window.open(b.url, "_blank")}>
                <div className="blog-meta">
                  <div className="blog-tags">{b.tags.map(t => <span key={t} className="btag">{t}</span>)}</div>
                  <div className="blog-title">{b.title}</div>
                  <div className="blog-exc">{b.excerpt}</div>
                </div>
                <div className="blog-date"><div>{b.date}</div><div className="blog-read">{b.read}</div></div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" style={{paddingTop:48,paddingBottom:80}}>
          <div className="section-heading">Experience</div>
          <div className="section-sub">4+ years across fintech, industrial IoT, and academic research.</div>
          <div className="exp-list">
            {EXP.map((e,i) => (
              <div key={i} className="card exp-card">
                <div className="exp-period">{e.period}</div>
                <div className="exp-role">{e.role}</div>
                <div className={"exp-co"+(e.type==="edu"?" teal":"")}>{e.company}</div>
                <ul className="exp-pts">
                  {e.points.map((p,j) => <li key={j}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="achievements" style={{paddingTop:48,paddingBottom:80}}>
          <div className="section-heading">Achievements</div>
          <div className="section-sub">Publications, hackathon wins, and recognition.</div>
          <div className="exp-list">
            <div className="card" style={{display:"flex",alignItems:"flex-start",gap:20}}>
              <div style={{fontSize:28,lineHeight:1,flexShrink:0}}>📄</div>
              <div style={{flex:1}}>
                <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:11,color:"var(--dim)",marginBottom:6}}>IEEE PUBLICATION · 2021</div>
                <div style={{fontSize:15,fontWeight:600,color:"var(--txt)",marginBottom:6}}>FDMCA: Face Detection and Gaze-based Morse Code Authentication</div>
                <div style={{fontSize:13,color:"var(--muted)",lineHeight:1.65,marginBottom:12}}>Developed a two-step authentication system using real-time face recognition and gaze-based Morse code input — providing security against shoulder surfing, thermal tracking, and keylogger attacks.</div>
                <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:10}}>
                  <span className="tag">Face Detection</span><span className="tag">Gaze Tracking</span><span className="tag">Authentication</span><span className="tag blue">IEEE</span>
                </div>
                <a href="https://ieeexplore.ieee.org/document/9641520/" target="_blank" rel="noreferrer" className="proj-link">View on IEEE →</a>
              </div>
            </div>
            <div className="card" style={{display:"flex",alignItems:"flex-start",gap:20}}>
              <div style={{fontSize:28,lineHeight:1,flexShrink:0}}>📄</div>
              <div style={{flex:1}}>
                <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:11,color:"var(--dim)",marginBottom:6}}>IEEE PUBLICATION · 2021 · PuneCon</div>
                <div style={{fontSize:15,fontWeight:600,color:"var(--txt)",marginBottom:6}}>Blind Assist: A One Stop Mobile Application for the Visually Impaired</div>
                <div style={{fontSize:13,color:"var(--muted)",lineHeight:1.65,marginBottom:12}}>Designed and built an Android accessibility app for visually impaired and elderly users featuring OCR text scanning, voice-based email, currency denomination detection (82–90% accuracy via TensorFlow Lite + MobileNet), SMS reader, and a voice-dictated diary — all operable without sight.</div>
                <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:10}}>
                  <span className="tag">Android</span><span className="tag">TensorFlow Lite</span><span className="tag">OCR</span><span className="tag">MobileNet</span><span className="tag blue">IEEE</span>
                </div>
                <a href="https://ieeexplore.ieee.org/document/9686476" target="_blank" rel="noreferrer" className="proj-link">View on IEEE →</a>
              </div>
            </div>
            <div className="card" style={{display:"flex",alignItems:"flex-start",gap:20}}>
              <div style={{fontSize:28,lineHeight:1,flexShrink:0}}>🏆</div>
              <div style={{flex:1}}>
                <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:11,color:"var(--dim)",marginBottom:6}}>1ST PLACE · CELLSTART AI HACKATHON</div>
                <div style={{fontSize:15,fontWeight:600,color:"var(--txt)",marginBottom:6}}>Waste Segregation using Deep Learning</div>
                <div style={{fontSize:13,color:"var(--muted)",lineHeight:1.65,marginBottom:12}}>Built a custom TensorFlow object detection model using Faster R-CNN to classify organic, inorganic, and plastic waste. Achieved 97% average confidence using CNN backbone, data augmentation, and transfer learning — outperforming 30+ teams by 10–15% in accuracy.</div>
                <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                  <span className="tag">Faster R-CNN</span><span className="tag">TensorFlow</span><span className="tag">Transfer Learning</span><span className="tag blue">97% Accuracy</span>
                </div>
              </div>
            </div>
            <div className="card" style={{display:"flex",alignItems:"flex-start",gap:20}}>
              <div style={{fontSize:28,lineHeight:1,flexShrink:0}}>🏆</div>
              <div style={{flex:1}}>
                <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:11,color:"var(--dim)",marginBottom:6}}>1ST PLACE · PHASESHIFT ML HACKATHON · NATIONAL LEVEL</div>
                <div style={{fontSize:15,fontWeight:600,color:"var(--txt)",marginBottom:6}}>National Machine Learning Hackathon</div>
                <div style={{fontSize:13,color:"var(--muted)",lineHeight:1.65}}>Placed 1st at a national-level ML hackathon, competing against university teams across India.</div>
              </div>
            </div>
          </div>
        </section>

        <section id="tldr" style={{paddingTop:48,paddingBottom:80}}>
          <div style={{textAlign:"center",marginBottom:28}}>
            <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:36,fontWeight:700,color:"var(--txt)",letterSpacing:"-1px",marginBottom:8}}>tldr? Ask AI</div>
            <div style={{fontSize:14,color:"var(--muted)"}}>Too Long; Didn't Read — ask the AI anything about my experience and skills</div>
          </div>
          <div className="card tldr-card">
            <div style={{marginBottom:12}}>
              <div style={{fontSize:15,fontWeight:600,color:"var(--txt)",marginBottom:2}}>Let's know Shreya?</div>
              <div style={{fontSize:13,color:"var(--muted)"}}>Ask anything about Shreya.</div>
            </div>
            <div className="divider" style={{margin:"12px 0"}} />
            <div className="chat-window">
              {chatMessages.length === 0 && (
                <div className="chat-empty">
                  <div style={{fontSize:13,color:"var(--dim)",marginBottom:16,textAlign:"center"}}>Try asking one of these questions:</div>
                  <div className="chat-suggestions">
                    {SUGGESTIONS.map((s,i) => (
                      <button key={i} className="suggestion-btn" onClick={() => sendMessage(s)}>{s}</button>
                    ))}
                  </div>
                </div>
              )}
              {chatMessages.map((m, i) => (
                <div key={i} className={"chat-msg " + (m.role === "user" ? "chat-user" : "chat-ai")}>
                  {m.role === "assistant" && <div className="chat-ai-label">Shreya's AI</div>}
                  <div className="chat-bubble">{m.content}</div>
                </div>
              ))}
              {chatLoading && (
                <div className="chat-msg chat-ai">
                  <div className="chat-ai-label">Shreya's AI</div>
                  <div className="chat-bubble chat-typing"><span/><span/><span/></div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
            <div className="chat-input-row">
              <input
                className="chat-input"
                placeholder="Ask a question..."
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && sendMessage()}
                disabled={chatLoading}
              />
              <button className="chat-send" onClick={() => sendMessage()} disabled={chatLoading || !chatInput.trim()}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>
            <div style={{textAlign:"center",fontSize:11,color:"var(--dim)",marginTop:12}}>Fast responses based on Shreya's profile using Claude AI.</div>
          </div>
        </section>

        <section id="contact" style={{paddingTop:48,paddingBottom:80}}>
          <div className="card contact-card">
            <div className="contact-layout">
              <div className="contact-left">
                <div className="contact-heading">Let's Connect</div>
                <div className="contact-bar" />
                <p className="contact-desc">Interested in working together? Have a question or just want to say hi? Drop me a message and I'll get back to you as soon as possible.</p>
                <div style={{display:"flex",gap:10,marginTop:24}}>
                  <a href="https://github.com/spraka52" target="_blank" rel="noreferrer" className="icon-btn" title="GitHub"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
                  <a href="https://www.linkedin.com/in/shreya-prakash2199/" target="_blank" rel="noreferrer" className="icon-btn" title="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
                  <a href="mailto:shreya2199@gmail.com" className="icon-btn" title="Email"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg></a>
                </div>
              </div>
              <div className="contact-right">
                {contactStatus === "sent" ? (
                  <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:12,padding:"40px 0"}}>
                    <div style={{fontSize:36}}>✓</div>
                    <div style={{fontSize:16,fontWeight:600,color:"var(--teal)"}}>Message sent!</div>
                    <div style={{fontSize:13,color:"var(--muted)"}}>I'll get back to you soon.</div>
                    <button className="contact-btn" style={{marginTop:8}} onClick={() => { setContactStatus(null); setContactError(null); }}>Send another</button>
                  </div>
                ) : (
                  <form onSubmit={async e => {
                    e.preventDefault();
                    setContactStatus("sending");
                    setContactError(null);
                    try {
                      const res = await fetch("https://formspree.io/f/xojpnaab", {
                        method: "POST",
                        headers: {"Content-Type": "application/json", "Accept": "application/json"},
                        body: JSON.stringify({name: contactForm.name, email: contactForm.email, message: contactForm.message})
                      });
                      if (res.ok) {
                        setContactStatus("sent");
                        setContactForm({name:"", email:"", message:""});
                      } else {
                        setContactStatus(null);
                        setContactError("Something went wrong. Please try again.");
                      }
                    } catch {
                      setContactStatus(null);
                      setContactError("Network error. Please try again.");
                    }
                  }}>
                    <input className="contact-input" placeholder="Name" required value={contactForm.name} onChange={e => setContactForm(f => ({...f, name:e.target.value}))} />
                    <input className="contact-input" placeholder="Email" type="email" required value={contactForm.email} onChange={e => setContactForm(f => ({...f, email:e.target.value}))} />
                    <textarea className="contact-input contact-textarea" placeholder="Message" required value={contactForm.message} onChange={e => setContactForm(f => ({...f, message:e.target.value}))} />
                    {contactError && <div style={{fontSize:13,color:"#f87171",marginBottom:8}}>{contactError}</div>}
                    <button type="submit" className="contact-btn" disabled={contactStatus==="sending"}>{contactStatus==="sending" ? "Sending…" : "SEND MESSAGE"}</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>Shreya Prakash · 2026</span>
          <div className="footer-links">
            <a href="https://github.com/spraka52" target="_blank" rel="noreferrer" className="fl">GitHub</a>
            <a href="https://www.linkedin.com/in/shreya-prakash2199/" target="_blank" rel="noreferrer" className="fl">LinkedIn</a>
            <a href="mailto:shreya2199@gmail.com" className="fl">Email</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#0a0a0a;--card:#111111;--b:#222222;--b2:#2a2a2a;--txt:#e8e8e8;--muted:#888;--dim:#555;--gold:#f0a500;--goldd:rgba(240,165,0,0.1);--teal:#3dd68c;--teald:rgba(61,214,140,0.1)}
[data-theme="medium"]{--bg:#1a1a2e;--card:#16213e;--b:#2a2d4a;--b2:#353870;--txt:#e2e8f0;--muted:#94a3b8;--dim:#64748b;--gold:#f0a500;--goldd:rgba(240,165,0,0.1);--teal:#3dd68c;--teald:rgba(61,214,140,0.1)}
[data-theme="light"]{--bg:#f5f5f0;--card:#ffffff;--b:#e2e2dc;--b2:#d4d4cc;--txt:#1a1a1a;--muted:#555555;--dim:#888888;--gold:#c47f00;--goldd:rgba(196,127,0,0.1);--teal:#1a9e5e;--teald:rgba(26,158,94,0.1)}
body{background:var(--bg);color:var(--txt);font-family:'Inter',sans-serif}
.pf{min-height:100vh;background:var(--bg)}
.nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;justify-content:center;align-items:center;gap:10px;padding:16px;background:rgba(10,10,10,0.85);backdrop-filter:blur(12px)}
[data-theme="medium"] .nav{background:rgba(26,26,46,0.9)}
[data-theme="light"] .nav{background:rgba(245,245,240,0.92)}
.theme-toggle{background:none;border:1px solid var(--b2);border-radius:8px;padding:5px 9px;cursor:pointer;font-size:15px;line-height:1;color:var(--txt);transition:all .2s;flex-shrink:0}
.theme-toggle:hover{background:var(--b2)}
.nav-pills{display:flex;gap:2px;background:var(--card);border:1px solid var(--b);border-radius:10px;padding:4px;overflow-x:auto;max-width:100%;scrollbar-width:none}
.nav-pills::-webkit-scrollbar{display:none}
.pill{padding:6px 18px;border-radius:7px;font-size:13px;font-weight:500;cursor:pointer;color:var(--muted);background:transparent;border:none;font-family:'Inter',sans-serif;transition:all .2s}
.pill:hover{color:var(--txt)}
.pill.on{background:var(--b2);color:var(--txt);box-shadow:0 1px 3px rgba(0,0,0,.2)}
.wrap{max-width:1000px;margin:0 auto;padding:88px 20px 0}
.card{background:var(--card);border:1px solid var(--b);border-radius:12px;padding:24px}
.divider{height:1px;background:var(--b);margin:20px 0}
.profile-top{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}
.profile-left{display:flex;align-items:flex-start;gap:14px}
.avatar{width:110px;height:110px;border-radius:10px;object-fit:cover;object-position:center center;border:2px solid var(--b2);flex-shrink:0}
.profile-name-row{display:flex;align-items:center;gap:10px;margin-bottom:4px}
.profile-name{font-size:18px;font-weight:600;color:var(--txt)}
.badge-green{font-size:11px;padding:2px 10px;border-radius:20px;background:rgba(61,214,140,0.12);color:var(--teal);border:1px solid rgba(61,214,140,0.25);font-family:'JetBrains Mono',monospace;letter-spacing:.3px}
.badge-blue{font-size:11px;padding:2px 10px;border-radius:20px;background:rgba(99,102,241,0.12);color:#818cf8;border:1px solid rgba(99,102,241,0.25);font-family:'JetBrains Mono',monospace;letter-spacing:.3px}
.profile-role{font-size:13px;color:var(--muted);margin-bottom:8px}
.profile-email{display:inline-flex;align-items:center;gap:6px;font-size:12px;color:var(--dim);text-decoration:none;padding:4px 10px;border:1px solid var(--b2);border-radius:6px;background:var(--card);transition:all .2s;font-family:'JetBrains Mono',monospace}
.profile-email:hover{color:var(--txt);border-color:#444}
.profile-email svg{width:12px;height:12px}
.profile-icons{display:flex;gap:8px;flex-shrink:0}
.icon-btn{width:34px;height:34px;border-radius:8px;border:1px solid var(--b2);background:var(--card);display:flex;align-items:center;justify-content:center;color:var(--muted);text-decoration:none;transition:all .2s}
.icon-btn:hover{color:var(--txt);border-color:#444}
.icon-btn svg{width:16px;height:16px}
.bio{font-size:14px;color:var(--muted);line-height:1.7}
.bio strong{color:var(--txt);font-weight:500}
.bio-link{color:var(--gold);text-decoration:none}
.bio-link:hover{text-decoration:underline}
.cta-primary{display:inline-flex;align-items:center;padding:10px 22px;background:var(--teal);color:#0a0a0a;font-weight:600;font-size:13px;border-radius:8px;text-decoration:none;transition:all .2s;font-family:'Inter',sans-serif}
.cta-primary:hover{background:#4ee89e;transform:translateY(-1px)}
.cta-secondary{display:inline-flex;align-items:center;padding:10px 22px;background:transparent;color:var(--txt);font-weight:500;font-size:13px;border-radius:8px;text-decoration:none;border:1px solid var(--b2);transition:all .2s;font-family:'Inter',sans-serif}
.cta-secondary:hover{border-color:#444;color:var(--txt)}
.contact-layout{display:grid;grid-template-columns:1fr 1.4fr;gap:48px;align-items:start}
.contact-heading{font-size:28px;font-weight:700;color:var(--txt);margin-bottom:10px}
.contact-bar{width:48px;height:3px;background:var(--teal);border-radius:2px;margin-bottom:16px}
.contact-desc{font-size:14px;color:var(--muted);line-height:1.7}
.contact-input{width:100%;background:var(--card);border:1px solid var(--b2);border-radius:8px;padding:12px 14px;color:var(--txt);font-size:14px;font-family:'Inter',sans-serif;outline:none;transition:border .2s;margin-bottom:12px;display:block}
.contact-input:focus{border-color:var(--teal)}
.contact-textarea{min-height:120px;resize:vertical}
.contact-btn{width:100%;padding:13px;background:var(--teal);color:#0a0a0a;font-weight:700;font-size:13px;letter-spacing:1px;border:none;border-radius:8px;cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s}
.contact-btn:hover{background:#4ee89e}
@media(max-width:700px){.contact-layout{grid-template-columns:1fr}}
.testimonial-card{display:flex;flex-direction:column;gap:16px}
.testimonial-quote{font-size:14px;color:var(--muted);line-height:1.75;font-style:italic}
.testimonial-name{font-size:14px;font-weight:600;color:var(--txt)}
.testimonial-title{font-size:12px;color:var(--teal);margin-top:2px}
.testimonial-rel{font-size:11px;color:var(--dim);margin-top:2px;font-family:'JetBrains Mono',monospace}
.stats-row{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-top:16px}
.stat-card{background:var(--card);border:1px solid var(--b);border-radius:12px;padding:16px 20px}
.stat-n{font-size:28px;font-weight:600;color:var(--txt);line-height:1;margin-bottom:4px}
.stat-l{font-size:11px;color:var(--muted)}
.card-label{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--dim);margin-bottom:14px;display:flex;align-items:center;gap:8px}
.dot{width:6px;height:6px;border-radius:50%;background:var(--teal);box-shadow:0 0 6px var(--teal);flex-shrink:0}
.gh-img{width:100%;border-radius:4px;opacity:.9}
.section-heading{font-size:22px;font-weight:600;color:var(--txt);margin-bottom:4px}
.section-sub{font-size:14px;color:var(--muted);margin-bottom:20px}
.skills-cats{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px}
.skill-cat-lbl{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:var(--dim);margin-bottom:12px}
.skill-items{display:flex;flex-wrap:wrap;gap:7px}
.skill-item{display:flex;align-items:center;gap:7px;padding:5px 11px;border-radius:7px;border:1px solid var(--b);background:var(--bg);font-size:13px;color:var(--txt);cursor:default;transition:all .2s}
.skill-item:hover{border-color:var(--b2);background:var(--card)}
.skill-item img{width:15px;height:15px;object-fit:contain}
.proj-grid{display:grid;gap:12px}
.proj-card{cursor:pointer;transition:all .2s}
.proj-card:hover{border-color:var(--b2);background:var(--b)}
.proj-card.feat{border-color:rgba(240,165,0,0.2)}
.proj-card.feat:hover{border-color:rgba(240,165,0,0.35)}
.proj-num{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--dim);margin-bottom:6px}
.proj-name{font-size:16px;font-weight:600;margin-bottom:8px;color:var(--txt)}
.proj-desc{font-size:13px;color:var(--muted);line-height:1.65;margin-bottom:14px}
.proj-stack{display:flex;flex-wrap:wrap;gap:6px}
.tag{font-family:'JetBrains Mono',monospace;font-size:10px;padding:3px 9px;border-radius:5px;background:var(--goldd);color:var(--gold);border:1px solid rgba(240,165,0,0.15);letter-spacing:.3px}
.tag.blue{background:var(--teald);color:var(--teal);border-color:rgba(61,214,140,0.15)}
.blog-item{display:flex;gap:20px;padding:20px 24px;transition:background .2s;cursor:pointer}
.blog-item:hover{background:var(--b)}
.blog-item.bordered{border-bottom:1px solid var(--b)}
.blog-meta{flex:1}
.blog-tags{display:flex;gap:6px;margin-bottom:7px;flex-wrap:wrap}
.btag{font-family:'JetBrains Mono',monospace;font-size:10px;padding:2px 8px;border-radius:4px;background:var(--card);border:1px solid var(--b2);color:var(--muted)}
.blog-title{font-size:15px;font-weight:500;margin-bottom:6px;line-height:1.4;color:var(--txt);transition:color .2s}
.blog-item:hover .blog-title{color:var(--gold)}
.blog-exc{font-size:12px;color:var(--dim);line-height:1.6}
.blog-date{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--dim);white-space:nowrap;padding-top:2px;text-align:right}
.blog-read{margin-top:4px}
.exp-list{display:grid;gap:12px}
.exp-period{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--dim);margin-bottom:6px}
.exp-role{font-size:16px;font-weight:600;color:var(--txt);margin-bottom:4px}
.exp-co{font-size:13px;color:var(--gold);font-weight:500;margin-bottom:12px}
.exp-co.teal{color:var(--teal)}
.exp-pts{list-style:none}
.exp-pts li{font-size:13px;color:var(--muted);line-height:1.65;margin-bottom:5px;padding-left:14px;position:relative}
.exp-pts li::before{content:"→";position:absolute;left:0;color:var(--dim);font-size:11px;top:1px}
.proj-link{display:inline-flex;align-items:center;gap:5px;font-family:'JetBrains Mono',monospace;font-size:11px;padding:4px 10px;border-radius:6px;border:1px solid var(--b2);background:var(--card);color:var(--muted);text-decoration:none;transition:all .2s;white-space:nowrap}
.proj-link:hover{color:var(--txt);border-color:#444}
.proj-link-live{border-color:rgba(61,214,140,0.2);color:var(--teal)}
.proj-link-live:hover{border-color:rgba(61,214,140,0.4);color:var(--teal)}
.proj-grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.proj-card-2{background:var(--card);border:1px solid var(--b);border-radius:12px;overflow:hidden;transition:all .2s;display:flex;flex-direction:column}
.proj-card-2:hover{border-color:var(--b2);transform:translateY(-2px)}
.proj-preview{padding:16px 18px}
.proj-body{padding:16px 18px;flex:1;display:flex;flex-direction:column;gap:10px}
.proj-desc-2{font-size:13px;color:var(--muted);line-height:1.65;flex:1}
.proj-tags-2{display:flex;flex-wrap:wrap;gap:6px;margin-top:auto;padding-top:4px}
.tag2{font-family:'JetBrains Mono',monospace;font-size:10px;padding:3px 9px;border-radius:5px;background:color-mix(in srgb,var(--ac) 10%,transparent);color:var(--ac,#f0a500);border:1px solid color-mix(in srgb,var(--ac) 25%,transparent);letter-spacing:.3px}
.proj-icon-btn{width:26px;height:26px;border-radius:6px;border:1px solid var(--b2);background:var(--card);display:flex;align-items:center;justify-content:center;color:var(--muted);text-decoration:none;transition:all .2s;flex-shrink:0}
.proj-icon-btn:hover{color:var(--txt);border-color:#444}
.proj-icon-btn svg{width:13px;height:13px}
@media(max-width:700px){.proj-grid-2{grid-template-columns:1fr}}
.tldr-card{display:flex;flex-direction:column;gap:0}
.chat-window{min-height:340px;max-height:420px;overflow-y:auto;display:flex;flex-direction:column;gap:14px;padding:8px 0 8px}
.chat-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;min-height:280px}
.chat-suggestions{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;width:100%;max-width:640px}
.suggestion-btn{padding:10px 14px;border-radius:8px;border:1px solid var(--b2);background:var(--card);color:var(--muted);font-size:13px;text-align:left;cursor:pointer;transition:all .2s;font-family:'Inter',sans-serif;line-height:1.4}
.suggestion-btn:hover{border-color:var(--b2);color:var(--txt);background:var(--card)}
.chat-msg{display:flex;flex-direction:column;gap:4px;max-width:80%}
.chat-user{align-self:flex-end;align-items:flex-end}
.chat-ai{align-self:flex-start;align-items:flex-start}
.chat-ai-label{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--teal);letter-spacing:.5px;margin-bottom:2px}
.chat-bubble{padding:10px 14px;border-radius:10px;font-size:13px;line-height:1.6;white-space:pre-wrap}
.chat-user .chat-bubble{background:var(--b2);border:1px solid var(--b2);color:var(--txt);border-radius:10px 10px 2px 10px}
.chat-ai .chat-bubble{background:var(--card);border:1px solid var(--b2);color:var(--muted);border-radius:10px 10px 10px 2px}
.chat-typing{display:flex;align-items:center;gap:4px;padding:12px 16px}
.chat-typing span{width:6px;height:6px;border-radius:50%;background:var(--dim);animation:bounce .9s infinite}
.chat-typing span:nth-child(2){animation-delay:.15s}
.chat-typing span:nth-child(3){animation-delay:.3s}
@keyframes bounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-6px)}}
.chat-input-row{display:flex;gap:8px;margin-top:12px;align-items:center}
.chat-input{flex:1;background:var(--card);border:1px solid var(--b2);border-radius:8px;padding:10px 14px;font-size:13px;color:var(--txt);font-family:'Inter',sans-serif;outline:none;transition:border-color .2s}
.chat-input:focus{border-color:#444}
.chat-input::placeholder{color:var(--dim)}
.chat-input:disabled{opacity:.5}
.chat-send{width:40px;height:40px;border-radius:8px;border:1px solid var(--b2);background:var(--card);color:var(--muted);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0}
.chat-send:hover:not(:disabled){color:var(--txt);border-color:var(--b2);background:var(--b2)}
.chat-send:disabled{opacity:.4;cursor:default}
.chat-send svg{width:15px;height:15px}
@media(max-width:600px){.chat-suggestions{grid-template-columns:1fr}.chat-msg{max-width:95%}}
.footer{display:flex;align-items:center;justify-content:space-between;padding:24px 0 40px;font-size:12px;color:var(--dim);flex-wrap:wrap;gap:12px;border-top:1px solid var(--b);margin-top:8px}
.footer-links{display:flex;gap:16px}
.fl{font-size:12px;color:var(--dim);text-decoration:none;font-family:'JetBrains Mono',monospace;transition:color .2s}
.fl:hover{color:var(--txt)}
@media(max-width:600px){.stats-row{grid-template-columns:repeat(2,1fr)}.profile-top{flex-direction:column}.profile-icons{align-self:flex-end}.pill{padding:5px 9px;font-size:11px}.nav{padding:8px 6px}.nav-pills{gap:1px}}
`;