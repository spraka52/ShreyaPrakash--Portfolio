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
