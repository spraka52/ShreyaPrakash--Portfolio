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
.wrap{max-width:780px;margin:0 auto;padding:88px 20px 0}
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
