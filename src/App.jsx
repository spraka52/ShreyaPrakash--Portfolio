import { useState, useEffect } from "react";

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
    { name: "Angular",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" },
    { name: "Redux",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
    { name: "Tailwind",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  ]},
  { label: "BACKEND", items: [
    { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
    { name: ".NET Core",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" },
    { name: "Node.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "FastAPI",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
    { name: "GraphQL",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
    { name: "Kafka",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" },
    { name: "gRPC",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grpc/grpc-original.svg" },
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
    { name: "Terraform",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" },
    { name: "Jenkins",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
    { name: "GitHub Actions",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" },
    { name: "Prometheus",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg" },
  ]},
  { label: "ML / AI", items: [
    { name: "PyTorch",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
    { name: "TensorFlow",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
    { name: "OpenCV",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
    { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
    { name: "OpenAI API",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openai/openai-original.svg" },
    { name: "LangChain",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/langchain/langchain-original.svg" },
  ]},
];

const PROJECTS = [
  { num:"01", name:"SafePrompt", feat:true, desc:"Fine-tuned DistilBERT for multi-label text classification (toxicity, threats, hate speech) using PyTorch. Real-time risk scoring with FastAPI backend and Next.js frontend.", stack:["DistilBERT","PyTorch","FastAPI","Next.js","HuggingFace"], github:"https://github.com/spraka52/safe-prompt" },
  { num:"02", name:"Elastic Cloud Platform", blue:true, desc:"Auto-scaling face recognition pipeline on AWS handling 1000+ concurrent users. MTCNN edge detection + FaceNet on Lambda, 40% cost reduction with queue-depth autoscaling.", stack:["AWS Lambda","S3","SQS","MTCNN","FaceNet"] },
  { num:"03", name:"Portfolio Risk Analyzer", desc:"Full-stack investment tool with JWT auth, 8+ REST endpoints, real-time stock data via Finnhub API, and Spring Security RBAC. Deployed with CI/CD on Vercel + Railway.", stack:["Next.js","Spring Boot","PostgreSQL","Finnhub API","Docker"], live:"https://portfolio-risk-analyzer-seven.vercel.app/" },
  { num:"04", name:"Waste Segregation", feat:false, desc:"1st Place at CellStart AI Hackathon. Trained Faster R-CNN on TensorFlow to classify organic, inorganic, and plastic waste from images. 97% confidence, outperformed 30+ teams.", stack:["TensorFlow","Faster R-CNN","Python","OpenCV","Transfer Learning"], github:"https://github.com/spraka52/object_detection" },
  { num:"05", name:"VR Training Data Generator", blue:true, desc:"Unity/C# application generating realistic VR training telemetry using probabilistic models for the U.S. Army GIFT system. Simulates multiple trainees from a single headset.", stack:["Unity","C#","Kafka","Probabilistic Models","GIFT"], github:"https://github.com/spraka52/SteelArtt-VR-Mock-data-generator" },
  { num:"06", name:"Metrics Orchestrator", desc:"Led 24 engineers to build a distributed metrics platform orchestrating 24 microservices with parallel execution, MongoDB, and RESTful APIs.", stack:["Java","Spring Boot","MongoDB","REST","Microservices"], github:"https://github.com/spraka52/metrics-orchestrator" },
  { num:"07", name:"Mindful Journal", desc:"AI-powered journaling platform integrating OpenAI and Ollama LLMs for personalized mental health insights, with prompt engineering pipelines and PostgreSQL storage.", stack:["React","Node.js","OpenAI API","Ollama","PostgreSQL"], github:"https://github.com/spraka52/mental-journal" },
];

const BLOGS = [
  { title:"Could Hashing Replace FIFO and Round Robin?", excerpt:"A systems-level investigation into hash-based CPU scheduling — where it already exists in disguise, why it has not been formalized as a primary policy, and whether it should be.", tags:["OS","Systems","Linux"], date:"Mar 2026", read:"8 min", url:"https://medium.com/@shreya2199/could-hashing-replace-fifo-and-round-robin-59de9505fa48" },
];

const EXP = [
  { type:"edu", period:"Aug 2024 — May 2026", role:"M.S. Computer Software Engineering", company:"Arizona State University · GPA 4.11 / 4.0", points:["Specializing in distributed systems, cloud computing, and machine learning.","Research: BoneAtlas healthcare AI platform for forensic medical imaging diagnostics.","IEEE Publication: Face Detection and Gaze-based Morse Code Authentication (2021)."] },
  { type:"work", period:"May 2025 — Present", role:"Software Engineer (Research)", company:"Arizona State University", points:["Building BoneAtlas — distributed web platform with 3D visualization and ML-based bone diagnostics (GraphQL, MongoDB).","Built Unity/C# VR data generation system for the U.S. Army GIFT platform using Kafka for real-time telemetry streaming.","Reduced data processing latency by 40% through real-time event streaming architecture."] },
  { type:"work", period:"Dec 2022 — Aug 2024", role:"Associate Software Development Engineer 2", company:"Publicis Sapient · Promoted", points:[
    "Streamlined middle-office and back-office workflows for Point72 (hedge fund) by building high-performance WPF desktop applications and WCF/gRPC services for real-time inter-system communication between trading and back-office platforms.",
    "Optimized a critical SQL Server bulk import stored procedure, reducing runtime from 180 minutes to 2 minutes — an 88%+ improvement that unblocked daily financial reporting workflows.",
    "Implemented a new user role model within the back-office framework to enforce fine-grained access control and data security across sensitive financial operations.",
    "Established a disaster recovery environment for a critical WPF application, designing failover and continuity procedures that ensured zero data loss and business continuity.",
    "Enhanced backend responsiveness by 40% by integrating Azure Functions into the platform architecture, offloading compute-intensive operations to serverless execution.",
    "Volunteered as front-end lead for a CSR initiative — built a student management web app for an NGO using Next.js, ReactJS, and Java Spring Boot, delivering a production-ready platform that improved administrative efficiency for educators.",
    "Owned L2 on-call support for 3 production applications, triaging and resolving complex runtime issues before customer impact; deployed via Jenkins/Terraform CI/CD with 100% SonarQube code coverage.",
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
  { type:"work", period:"Feb 2021 — July 2021", role:"Software Engineer Intern", company:"Honeywell Technology Solutions", points:["Built real-time notification system with C#/.NET and WebSockets for mobile and web clients.","Developed RESTful APIs and optimized SQL stored procedures, improving query performance by 70%."] },
];

const TABS = ["home","projects","blog","experience","achievements"];

export default function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const s = document.createElement("style");
    s.id = "pf";
    s.textContent = CSS;
    document.head.appendChild(s);
    return () => document.getElementById("pf")?.remove();
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if(e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.2, rootMargin: "-60px 0px -40% 0px" }
    );
    TABS.forEach(id => { const el = document.getElementById(id); if(el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const go = id => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });

  return (
    <div className="pf">
      <nav className="nav">
        <div className="nav-pills">
          {TABS.map(id => (
            <button key={id} className={"pill"+(active===id?" on":"")} onClick={() => go(id)}>
              {id.charAt(0).toUpperCase()+id.slice(1)}
            </button>
          ))}
        </div>
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
            <div className="bio">
              <p>Hi, I am <strong>Shreya Prakash</strong>, a software engineer and CS grad student at <strong>Arizona State University</strong>, graduating May 2026.</p>
              <p style={{marginTop:10}}>I build backend systems, cloud infrastructure, and ML-powered products with 3+ years of industry experience at <strong>Publicis Sapient</strong> and <strong>Honeywell</strong>. Currently doing research at ASU building BoneAtlas — a healthcare AI platform for forensic medical imaging.</p>
              <p style={{marginTop:10}}>I am actively looking for <strong>full-time opportunities</strong> starting May 2026 in <strong>Software Engineering, Full Stack, Backend, .NET, Cloud, ML Engineering, and Forward Deployed Engineering</strong> roles in the U.S.</p>
              <p style={{marginTop:10}}>You can reach me on <a href="https://www.linkedin.com/in/shreya-prakash2199/" target="_blank" rel="noreferrer" className="bio-link">LinkedIn</a> or <a href="mailto:shreya2199@gmail.com" className="bio-link">Email</a>.</p>
            </div>
          </div>

          <div className="stats-row">
            {[["3+","Years industry exp."],["7","Projects built"],["2x","Hackathon winner"],["4.11","GPA @ ASU"]].map(([n,l]) => (
              <div key={l} className="stat-card">
                <div className="stat-n">{n}</div>
                <div className="stat-l">{l}</div>
              </div>
            ))}
          </div>

          <div className="card" style={{marginTop:16}}>
            <div className="card-label"><span className="dot" />GitHub Contributions · spraka52</div>
            <img src="https://ghchart.rshah.org/40c463/spraka52" alt="GitHub contributions" className="gh-img" />
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
          <div className="section-heading">Selected Projects</div>
          <div className="section-sub">ML systems, cloud infrastructure, full-stack products, and award-winning hackathon work.</div>
          <div className="proj-grid">
            {PROJECTS.map(p => (
              <div key={p.num} className={"card proj-card"+(p.feat?" feat":"")}>
                <div className="proj-num">{p.num}</div>
                <div className="proj-name">{p.name}</div>
                <div className="proj-desc">{p.desc}</div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:10}}>
                  <div className="proj-stack">
                    {p.stack.map(s => <span key={s} className={"tag"+(p.blue?" blue":"")}>{s}</span>)}
                  </div>
                  <div style={{display:"flex",gap:8,flexShrink:0}}>
                    {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="proj-link" onClick={e => e.stopPropagation()}>
                      <svg viewBox="0 0 24 24" fill="currentColor" style={{width:13,height:13}}><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                      GitHub
                    </a>}
                    {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="proj-link proj-link-live" onClick={e => e.stopPropagation()}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:13,height:13}}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      Live
                    </a>}
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
          <div className="section-sub">3+ years across fintech, industrial IoT, and academic research.</div>
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
                <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                  <span className="tag">Face Detection</span><span className="tag">Gaze Tracking</span><span className="tag">Authentication</span><span className="tag blue">IEEE</span>
                </div>
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
body{background:var(--bg);color:var(--txt);font-family:'Inter',sans-serif}
.pf{min-height:100vh;background:var(--bg)}
.nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;justify-content:center;padding:16px;background:rgba(10,10,10,0.85);backdrop-filter:blur(12px)}
.nav-pills{display:flex;gap:2px;background:#1a1a1a;border:1px solid var(--b);border-radius:10px;padding:4px}
.pill{padding:6px 18px;border-radius:7px;font-size:13px;font-weight:500;cursor:pointer;color:var(--muted);background:transparent;border:none;font-family:'Inter',sans-serif;transition:all .2s}
.pill:hover{color:var(--txt)}
.pill.on{background:#222;color:var(--txt);box-shadow:0 1px 3px rgba(0,0,0,.5)}
.wrap{max-width:1000px;margin:0 auto;padding:88px 20px 0}
.card{background:var(--card);border:1px solid var(--b);border-radius:12px;padding:24px}
.divider{height:1px;background:var(--b);margin:20px 0}
.profile-top{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}
.profile-left{display:flex;align-items:flex-start;gap:14px}
.avatar{width:60px;height:60px;border-radius:50%;object-fit:cover;object-position:center top;border:2px solid var(--b2);flex-shrink:0}
.profile-name-row{display:flex;align-items:center;gap:10px;margin-bottom:4px}
.profile-name{font-size:18px;font-weight:600;color:var(--txt)}
.badge-green{font-size:11px;padding:2px 10px;border-radius:20px;background:rgba(61,214,140,0.12);color:var(--teal);border:1px solid rgba(61,214,140,0.25);font-family:'JetBrains Mono',monospace;letter-spacing:.3px}
.profile-role{font-size:13px;color:var(--muted);margin-bottom:8px}
.profile-email{display:inline-flex;align-items:center;gap:6px;font-size:12px;color:var(--dim);text-decoration:none;padding:4px 10px;border:1px solid var(--b2);border-radius:6px;background:#161616;transition:all .2s;font-family:'JetBrains Mono',monospace}
.profile-email:hover{color:var(--txt);border-color:#444}
.profile-email svg{width:12px;height:12px}
.profile-icons{display:flex;gap:8px;flex-shrink:0}
.icon-btn{width:34px;height:34px;border-radius:8px;border:1px solid var(--b2);background:#161616;display:flex;align-items:center;justify-content:center;color:var(--muted);text-decoration:none;transition:all .2s}
.icon-btn:hover{color:var(--txt);border-color:#444}
.icon-btn svg{width:16px;height:16px}
.bio{font-size:14px;color:var(--muted);line-height:1.7}
.bio strong{color:var(--txt);font-weight:500}
.bio-link{color:var(--gold);text-decoration:none}
.bio-link:hover{text-decoration:underline}
.stats-row{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:16px}
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
.skill-item{display:flex;align-items:center;gap:7px;padding:5px 11px;border-radius:7px;border:1px solid var(--b2);background:#161616;font-size:13px;color:var(--txt);cursor:default;transition:all .2s}
.skill-item:hover{border-color:#444;background:#1a1a1a}
.skill-item img{width:15px;height:15px;object-fit:contain}
.proj-grid{display:grid;gap:12px}
.proj-card{cursor:pointer;transition:all .2s}
.proj-card:hover{border-color:#333;background:#161616}
.proj-card.feat{border-color:rgba(240,165,0,0.2)}
.proj-card.feat:hover{border-color:rgba(240,165,0,0.35)}
.proj-num{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--dim);margin-bottom:6px}
.proj-name{font-size:16px;font-weight:600;margin-bottom:8px;color:var(--txt)}
.proj-desc{font-size:13px;color:var(--muted);line-height:1.65;margin-bottom:14px}
.proj-stack{display:flex;flex-wrap:wrap;gap:6px}
.tag{font-family:'JetBrains Mono',monospace;font-size:10px;padding:3px 9px;border-radius:5px;background:var(--goldd);color:var(--gold);border:1px solid rgba(240,165,0,0.15);letter-spacing:.3px}
.tag.blue{background:var(--teald);color:var(--teal);border-color:rgba(61,214,140,0.15)}
.blog-item{display:flex;gap:20px;padding:20px 24px;transition:background .2s;cursor:pointer}
.blog-item:hover{background:#161616}
.blog-item.bordered{border-bottom:1px solid var(--b)}
.blog-meta{flex:1}
.blog-tags{display:flex;gap:6px;margin-bottom:7px;flex-wrap:wrap}
.btag{font-family:'JetBrains Mono',monospace;font-size:10px;padding:2px 8px;border-radius:4px;background:#1a1a1a;border:1px solid var(--b2);color:var(--muted)}
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
.proj-link{display:inline-flex;align-items:center;gap:5px;font-family:'JetBrains Mono',monospace;font-size:11px;padding:4px 10px;border-radius:6px;border:1px solid var(--b2);background:#161616;color:var(--muted);text-decoration:none;transition:all .2s;white-space:nowrap}
.proj-link:hover{color:var(--txt);border-color:#444}
.proj-link-live{border-color:rgba(61,214,140,0.2);color:var(--teal)}
.proj-link-live:hover{border-color:rgba(61,214,140,0.4);color:var(--teal)}
.footer{display:flex;align-items:center;justify-content:space-between;padding:24px 0 40px;font-size:12px;color:var(--dim);flex-wrap:wrap;gap:12px;border-top:1px solid var(--b);margin-top:8px}
.footer-links{display:flex;gap:16px}
.fl{font-size:12px;color:var(--dim);text-decoration:none;font-family:'JetBrains Mono',monospace;transition:color .2s}
.fl:hover{color:var(--txt)}
@media(max-width:600px){.stats-row{grid-template-columns:repeat(2,1fr)}.profile-top{flex-direction:column}.profile-icons{align-self:flex-end}}
`;
