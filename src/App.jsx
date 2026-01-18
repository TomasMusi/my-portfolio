"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import {
  SiDotnet, SiReact, SiTypescript, SiJavascript,
  SiPostgresql, SiDocker, SiNodedotjs, SiGit, SiTailwindcss,
  SiCplusplus, SiArduino, SiPython, SiC,
  SiRaspberrypi, SiMariadb, SiLinux,
} from "react-icons/si";

import {
  TbBrandCSharp
} from "react-icons/tb"

import { VscAzure } from "react-icons/vsc";

const TerminalLine = ({ command, output, delay }) => (
  <div className="mb-4 text-left">
    <div className="flex gap-2 text-[10px] md:text-xs font-mono">
      <span className="text-cyan-500">$</span>
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: "auto" }}
        transition={{ duration: 0.8, delay }}
        viewport={{ once: true }}
        className="text-white overflow-hidden whitespace-nowrap"
      >
        {command}
      </motion.span>
    </div>
    {output && (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: delay + 0.8 }}
        viewport={{ once: true }}
        className="text-gray-500 text-[10px] md:text-xs font-mono mt-1 ml-4"
      >
        {output}
      </motion.div>
    )}
  </div>
);

function App() {
  const [lang, setLang] = useState("cs");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const techIcons = [
    { icon: <TbBrandCSharp />, name: "C#" },
    { icon: <SiDotnet />, name: ".NET" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiReact />, name: "React Native" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <VscAzure />, name: "Azure" },
    { icon: <SiLinux />, name: "Linux" },
    { icon: <SiRaspberrypi />, name: "Raspberry Pi" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMariadb />, name: "MariaDB" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <SiC />, name: "C" },
    { icon: <SiPython />, name: "Python" },
    { icon: <SiGit />, name: "Git" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiArduino />, name: "Arduino" },
  ];

  const translations = {
    cs: {
      about: "O mně",
      experience: "Zkušenosti",
      projects: "Projekty",
      contact: "Kontakt",
      educationTitle: "Vzdělání",
      techStackTitle: "Technologie",
      nowTitle: "Aktuální focus",
      nowPoints: [
        "Vývoj desktopových aplikací (C++/Qt, Python & PyQt)",
        "Embedded systémy (Raspberry Pi & mikrokontroléry)",
        "Machine Learning & AI (TensorFlow, PyTorch)",
        "Správa a experimenty na vlastních Linux serverech"
      ],
      status: "Dostupný pro nové projekty",
      greeting: "Ahoj, já jsem",
      work: "Moje práce",
      aboutTitle: "Profil",
      experienceTitle: "Zkušenosti",
      projectsTitle: "Projekty",
      projectsSub: "Systems / Web / Embedded",
      githubTitle: "Další Open Source",
      viewAllGithub: "Všechny repozitáře →",
      facts: [
        { year: "2015", title: "Začátek", desc: "V osmi letech stavím první PC. Technologie se stává mou identitou." },
        { year: "2023", title: "Engineering", desc: "Středoškolák směřující k technickému titulu." },
        { year: "2025", title: "Praxe", desc: "Full-stack vývojář v HAVEL & PARTNERS. Interní systémy pro lídra trhu." },
        { year: "Dnes", title: "Team Leading", desc: "Vedu tým frontendových a backendových vývojářů na projektu Linearium." }
      ],
      edu: [
        {
          school: "Střední škola informatiky educanet",
          field: "Informační technologie",
          period: "2023 – současnost",
          desc: "Komplexní příprava v oblasti IT zahrnující návrh a správu počítačových sítí, technické a programové vybavení. Studium klade důraz na kybernetickou bezpečnost, ekonomický přehled a management."
        }
      ],
      hackathon: {
        title: "Hackathon 2025",
        achievement: "Účastník & Vývojář",
        desc: "Intenzivní 24hodinový vývoj inovativního řešení. Práce v týmu, rychlé prototypování a prezentace výsledného produktu odborné porotě."
      },
      tourDeApp: {
        title: "Tour de App 2026",
        achievement: "Vývojář & Soutěžící",
        desc: "Vývoj komplexní webové aplikace podle reálného zadání. Týmová spolupráce, agilní vývoj a simulace komunikace s klientem v ostrém konkurenčním prostředí."
      },
      exp: [
        {
          company: "HAVEL & PARTNERS",
          role: "Full-stack Developer",
          period: "říjen 2025 – současnost",
          desc: "Podílím se na vývoji interního softwaru využívaného právníky napříč firmou. Věnuji se jak frontendové, tak backendové části aplikací.",
          skills: ["C#", "React", "SQL", "Full-stack", "CD/CI"]
        },
        {
          company: "eSports.cz",
          role: "FullStack Developer",
          period: "září 2025 – současnost",
          desc: "Vytváření inovativních projektů pro sportovní průmysl s využitím moderních technologií.",
          skills: ["React", "Git", "TypeScript", "Node.js"]
        },
        {
          company: "Stanek Tech",
          role: "Back-end vývojář",
          period: "leden 2025 – říjen 2025",
          desc: "Tvorba digitálních řešení s důrazem na backendový vývoj a mobilní aplikace.",
          skills: ["Node.js", "PostgreSQL", "React Native", "API", "Docker"]
        }
      ],
      projectsList: [
        {
          year: "2025",
          title: "Lineárium",
          role: "Team Lead & Lead Architect",
          desc: "Vedení vývoje webové platformy ve spolupráci s Bohemia Interactive. Architektura na Reactu a PostgreSQL, zaměřená na škálovatelnost a koordinaci týmu.",
          tech: ["React", "PostgreSQL", "Node.js", "Team Management"]
        },
        {
          year: "2025",
          title: "YSpace",
          role: "Low-level Engineer",
          desc: "Vývoj palubního softwaru v C/C++ s důrazem na stabilitu nízkoúrovňového kódu.",
          tech: ["C", "C++", "Embedded",]
        },
        {
          year: "2024",
          title: "TomFi",
          role: "Full-stack Creator",
          desc: "Bankovní simulace s důrazem na bezpečnost. Implementace 2FA a desktopového klienta v C++ s GTK.",
          tech: ["C++", "GTK", "Security", "2FA", "Full-stack"]
        },
        {
          year: "2015",
          title: "The Beginning",
          role: "Hardware Enthusiast",
          desc: "Sestavení prvního počítače v osmi letech, což odstartovalo mou cestu technologickým světem.",
          tech: ["Hardware", "Assembly", "Logic"]
        }
      ],
      githubProjects: [
        {
          year: "2025",
          title: "SwiftMate",
          desc: "Desktopový Gmail klient. Nabízí efektivní třídění pošty a rychlé odesílání e-mailů v minimalistickém rozhraní.",
          tech: ["Python 3.11", "PySide6", "Qt"]
        },
        {
          year: "2025",
          title: "electree-pulseApp",
          desc: "Mobilní aplikace pro Energetickou společnost. Umožňuje klientům sledovat real-time data z jejich fotovoltaických systémů.",
          tech: ["React Native", "TypeScript"]
        },
        { year: "2025", title: "leetcode_solutions", desc: "Řešení LeetCode problémů. Sbírka mé cesty za efektivními algoritmy.", tech: ["Algorithms", "Data Structures"] },
        { year: "2024", title: "ArduinoProjects", desc: "Kolekce praktických Arduino programů pro mikrokontroléry.", tech: ["C++", "Embedded"] }
      ]
    },
    en: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      educationTitle: "Education",
      techStackTitle: "Tech Stack",
      nowTitle: "Current Focus",
      nowPoints: [
        "Building desktop apps (C++/Qt, Python & PyQt)",
        "Embedded development (Raspberry Pi & microcontrollers)",
        "Machine Learning & AI (TensorFlow, PyTorch)",
        "Managing and experimenting on home Linux servers"
      ],
      status: "Available for new projects",
      greeting: "Hi, I am",
      work: "View my work",
      aboutTitle: "Profile",
      experienceTitle: "Experience",
      projectsTitle: "Projects",
      projectsSub: "Systems / Web / Embedded",
      githubTitle: "More Open Source",
      viewAllGithub: "See all repositories →",
      facts: [
        { year: "2015", title: "The Start", desc: "Built my first PC at age 8. Technology became my core identity." },
        { year: "2023", title: "Engineering", desc: "High school student on a clear trajectory towards an engineering degree." },
        { year: "2025", title: "Experience", desc: "Full-stack Developer at HAVEL & PARTNERS. Scaling internal law systems." },
        { year: "Today", title: "Team Leading", desc: "Leading a team of frontend and backend developers on the Linearium project." }
      ],
      edu: [
        {
          school: "Secondary School of Informatics educanet",
          field: "Information Technology",
          period: "2023 – Present",
          desc: "Comprehensive IT training covering network design and management, hardware, and software engineering. The curriculum emphasizes cybersecurity, economic literacy, and management."
        }
      ],
      hackathon: {
        title: "Hackathon 2025",
        achievement: "Participant & Developer",
        desc: "Intense 24-hour development of an innovative solution. Teamwork, rapid prototyping, and pitching the final product to a jury."
      },
      tourDeApp: {
        title: "Tour de App 2026",
        achievement: "Developer & Competitor",
        desc: "Developing a complex web application based on industry requirements. Team collaboration, agile methodology, and client communication simulation."
      },
      exp: [
        {
          company: "HAVEL & PARTNERS",
          role: "Full-stack Developer",
          period: "October 2025 – Present",
          desc: "Developing internal software used by lawyers across the firm. Working on both frontend and backend parts of applications.",
          skills: ["C#", "React", "SQL", "Full-stack"]
        },
        {
          company: "eSports.cz",
          role: "FullStack Developer",
          period: "September 2025 – Present",
          desc: "Creating innovative projects for the sports industry using modern technologies.",
          skills: ["React", "Git", "TypeScript", "Node.js"]
        },
        {
          company: "Stanek Tech",
          role: "Back-end Developer",
          period: "January 2025 – October 2025",
          desc: "Creating digital solutions with an emphasis on backend development and mobile applications.",
          skills: ["Node.js", "PostgreSQL", "React Native", "API", "Docker"]
        }
      ],
      projectsList: [
        {
          year: "2025",
          title: "Lineárium",
          role: "Team Lead & Lead Architect",
          desc: "Leading the development of a web platform in collaboration with Bohemia Interactive. Architecture built on React and PostgreSQL.",
          tech: ["React", "PostgreSQL", "Node.js", "Team Management"]
        },
        {
          year: "2025",
          title: "YSpace",
          role: "Low-level Engineer",
          desc: "Developing onboard software in C/C++ with emphasis on stability and low-level code efficiency.",
          tech: ["C", "C++", "Embedded"]
        },
        {
          year: "2024",
          title: "TomFi",
          role: "Full-stack Creator",
          desc: "Complex banking simulation focusing on security. Implementation of 2FA authentication and a C++/GTK desktop client.",
          tech: ["C++", "GTK", "Security", "2FA", "Full-stack"]
        },
        {
          year: "2015",
          title: "The Beginning",
          role: "Hardware Enthusiast",
          desc: "Building my first PC at age 8, sparking a lifelong passion for how hardware and software work together.",
          tech: ["Hardware", "Assembly", "Logic"]
        }
      ],
      githubProjects: [
        {
          year: "2025",
          title: "SwiftMate",
          desc: "Desktop Gmail client. Features efficient email sorting and fast sending within a minimalist interface.",
          tech: ["Python 3.11", "PySide6", "Qt"]
        },
        {
          year: "2025",
          title: "electree-pulseApp",
          desc: "Mobile application for an Energy Company. Provides clients with real-time data from their photovoltaic systems.",
          tech: ["React Native", "TypeScript"]
        },
        { year: "2025", title: "leetcode_solutions", desc: "Solutions to LeetCode problems. A collection of my problem-solving journey.", tech: ["Algorithms", "Data Structures"] },
        { year: "2024", title: "ArduinoProjects", desc: "Collection of practical Arduino-based programs for microcontrollers.", tech: ["C++", "Embedded"] }
      ]
    },
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500 selection:text-black font-sans overflow-x-hidden scroll-smooth text-left">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-5 md:px-16 backdrop-blur-xl bg-black/80 border-b border-white/10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl font-black tracking-tighter cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          TM<span className="text-cyan-500">.</span>
        </motion.div>
        <div className="flex items-center gap-4 md:gap-12 text-left">
          <div className="hidden lg:flex gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">{t.about}</a>
            <a href="#education" className="hover:text-white transition-colors">{t.educationTitle}</a>
            <a href="#experience" className="hover:text-white transition-colors">{t.experienceTitle}</a>
            <a href="#projects" className="hover:text-white transition-colors">{t.projects}</a>
          </div>
          <div className="flex gap-4">
            <button onClick={() => setLang("cs")} className={`text-[11px] font-black transition-all ${lang === "cs" ? "text-cyan-500 scale-110" : "text-gray-500 hover:text-white"}`}>CZ</button>
            <button onClick={() => setLang("en")} className={`text-[11px] font-black transition-all ${lang === "en" ? "text-cyan-500 scale-110" : "text-gray-500 hover:text-white"}`}>EN</button>
          </div>
          <button className="lg:hidden flex flex-col gap-1.5 z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }} className="fixed inset-0 bg-black z-[40] flex flex-col items-center justify-center gap-8 text-2xl font-black uppercase tracking-tighter">
            <a href="#about" onClick={() => setIsMenuOpen(false)}>{t.about}</a>
            <a href="#education" onClick={() => setIsMenuOpen(false)}>{t.educationTitle}</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)}>{t.experienceTitle}</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>{t.projects}</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-24 border-b border-white/5 overflow-hidden">
        <motion.div key={lang} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="z-10 mt-[-80px] md:mt-[-40px] text-left">
          <h2 className="text-cyan-500 font-mono text-[10px] md:text-xs mb-4 tracking-[0.3em] md:tracking-[0.5em] uppercase">{t.status}</h2>
          <h1 className="text-[14vw] md:text-[9vw] font-black leading-[0.9] md:leading-[0.85] tracking-tighter uppercase mb-8 md:mb-10 relative">
            {t.greeting} <br />
            <span className="relative inline-block mt-[2px]">
              <div className="absolute inset-0 bg-cyan-500/20 blur-[40px] md:blur-[60px] rounded-full -z-10" />
              <span className="bg-gradient-to-b from-white via-white to-cyan-500 bg-clip-text text-transparent italic pr-2 md:pr-4">Tomáš</span>
            </span> Musil
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
            <p className="max-w-md text-gray-400 text-xs md:text-base leading-relaxed uppercase tracking-[0.15em] md:tracking-[0.2em] font-semibold">
              Web · Embedded · Desktop <br />
              <span className="text-white font-bold tracking-widest">Full-Stack · Systems · Backend</span>
            </p>
            <motion.a href="#projects" whileHover={{ x: 10 }} className="text-white font-black italic text-xl md:text-4xl border-b-2 md:border-b-4 border-cyan-500 pb-1 transition-all hover:text-cyan-500 w-fit">{t.work}</motion.a>
          </div>
        </motion.div>



        {/* Tech Stack Ticker - Fully Responsive */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-white/[0.02] border-t border-white/5 py-4 md:py-8" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
            className="flex gap-8 md:gap-16 items-center whitespace-nowrap"
          >
            {[...techIcons, ...techIcons, ...techIcons, ...techIcons].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 md:gap-4 text-gray-500/60 hover:text-cyan-500 transition-colors cursor-default">
                <span className="text-2xl md:text-4xl shrink-0">{item.icon}</span>
                <span className="font-mono text-[9px] md:text-[11px] uppercase tracking-widest font-bold">{item.name}</span>
              </div>
            ))}
          </motion.div>

          {/* Responsive Scroll Icon */}
          <motion.div animate={{ opacity: [0.2, 1, 0.2], y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2.5 }} className="absolute -top-10 md:-top-14 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="w-4 h-7 md:w-6 md:h-10 border-2 border-white/20 rounded-full flex justify-center p-1 md:p-1.5 backdrop-blur-sm">
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1 md:w-1.5 h-1 md:h-1.5 bg-cyan-500 rounded-full shadow-[0_0_8px_#06b6d4]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="about" className="py-20 md:py-32 px-6 md:px-24">
        <div className="flex items-center gap-4 md:gap-8 mb-16 md:mb-24">
          <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter italic">{t.aboutTitle}<span className="text-cyan-500">.</span></h2>
          <div className="h-px flex-grow bg-white/20 hidden sm:block"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-32 md:gap-y-24 text-left">
          {t.facts.map((fact, i) => (
            <motion.div key={i} className="group border-l-2 border-white/10 pl-6 md:pl-8 py-2 md:py-4 hover:border-cyan-500 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-12 mb-3 md:mb-4">
                <span className="min-w-[120px] md:min-w-[180px] text-3xl md:text-6xl font-black text-white/30 group-hover:text-cyan-500 transition-colors font-mono uppercase tracking-tighter">{fact.year}</span>
                <h3 className="text-lg md:text-3xl font-bold uppercase tracking-tight text-white/90 group-hover:text-white transition-colors">{fact.title}</h3>
              </div>
              <p className="text-gray-400 text-xs md:text-base leading-relaxed max-w-md font-medium group-hover:text-gray-200">{fact.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Competition Achievements */}
        <div className="mt-20 md:mt-32 space-y-8">
          {/* Hackathon 2025 Highlight */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative p-8 md:p-12 border-2 border-cyan-500/30 bg-cyan-500/5 overflow-hidden group rounded-lg text-left"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-40 transition-opacity">
              <span className="text-cyan-500 font-black text-5xl md:text-7xl">#2025</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-cyan-500 font-mono text-xs tracking-[0.4em] uppercase mb-4">Achievement</h3>
              <h4 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-6">{t.hackathon.title}</h4>
              <p className="text-gray-300 text-lg md:text-2xl max-w-3xl leading-relaxed mb-8 font-medium">
                {t.hackathon.desc}
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-cyan-500"></div>
                <span className="text-white font-black uppercase tracking-widest text-sm italic">{t.hackathon.achievement}</span>
              </div>
            </div>
          </motion.div>

          {/* Tour de App 2026 Highlight */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative p-8 md:p-12 border-2 border-cyan-500/30 bg-cyan-500/5 overflow-hidden group rounded-lg text-left"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-40 transition-opacity">
              <span className="text-cyan-500 font-black text-5xl md:text-7xl">#2026</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-cyan-500 font-mono text-xs tracking-[0.4em] uppercase mb-4">Competition</h3>
              <h4 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-6">{t.tourDeApp.title}</h4>
              <p className="text-gray-300 text-lg md:text-2xl max-w-3xl leading-relaxed mb-8 font-medium">
                {t.tourDeApp.desc}
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-cyan-500"></div>
                <span className="text-white font-black uppercase tracking-widest text-sm italic">{t.tourDeApp.achievement}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 md:py-32 px-6 md:px-24 border-t border-white/5 text-left">
        <div className="flex items-center gap-4 md:gap-8 mb-16 md:mb-24">
          <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter italic">{t.educationTitle}<span className="text-cyan-500">.</span></h2>
          <div className="h-px flex-grow bg-white/20 hidden sm:block"></div>
        </div>
        <div className="space-y-16">
          {t.edu.map((edu, i) => (
            <div key={i} className="max-w-5xl">
              <h3 className="text-cyan-500 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase mb-2">{edu.school}</h3>
              <h4 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-tight">{edu.field}</h4>
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
                <span className="text-gray-500 font-mono text-xs uppercase tracking-[0.2em] bg-white/5 px-6 py-2 rounded-full border border-white/10 shrink-0">{edu.period}</span>
                <p className="text-gray-400 text-sm md:text-xl italic max-w-4xl opacity-80 leading-relaxed">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-32 px-6 md:px-24 border-t border-white/5 bg-white/[0.01] text-left">
        <div className="flex items-center gap-4 md:gap-8 mb-16 md:mb-24">
          <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter italic">{t.experienceTitle}<span className="text-cyan-500">.</span></h2>
          <div className="h-px flex-grow bg-white/20 hidden sm:block"></div>
        </div>
        <div className="space-y-16 md:space-y-24">
          {t.exp.map((job, i) => (
            <motion.div key={i} className="relative">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-6 md:mb-8">
                <div>
                  <h3 className="text-cyan-500 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase mb-2">{job.company}</h3>
                  <h4 className="text-2xl md:text-6xl font-black uppercase tracking-tighter leading-none">{job.role}</h4>
                </div>
                <span className="text-gray-500 font-mono text-[9px] md:text-xs uppercase tracking-[0.1em] bg-white/5 px-4 py-1.5 rounded-full border border-white/10 w-fit">{job.period}</span>
              </div>
              <p className="text-gray-400 text-sm md:text-xl max-w-4xl leading-relaxed mb-6 md:mb-10 italic opacity-80">"{job.desc}"</p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {job.skills.map((skill, si) => (
                  <span key={si} className="text-[8px] md:text-[11px] font-black uppercase tracking-widest px-3 py-1.5 border border-white/10 text-gray-400 hover:text-cyan-500 transition-all">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Timeline Section */}
      <section id="projects" className="py-20 md:py-40 px-6 md:px-24 border-t border-white/5 bg-[#080808] text-left">
        <div className="mb-12 md:mb-24 text-left">
          <h2 className="text-3xl md:text-6xl font-black uppercase italic tracking-tighter mb-4 text-white">
            {t.projectsTitle}<span className="text-cyan-500">.</span>
          </h2>
          <p className="font-mono text-cyan-500 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-sm font-bold opacity-60">
            {t.projectsSub}
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>

          <div className="space-y-24 md:space-y-32">
            {t.projectsList.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-center justify-between ${i % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Year Bubble */}
                <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 bg-black border border-cyan-500 rounded-full text-[10px] font-black italic text-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  {project.year}
                </div>

                {/* Card */}
                <div className="w-full md:w-[45%] text-left pl-10 md:pl-0">
                  <div className="md:hidden text-cyan-500 font-mono text-[10px] font-bold mb-2 tracking-widest uppercase">
                    {project.year}
                  </div>
                  <span className="text-cyan-500 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase mb-3 md:mb-4 block">
                    {project.role}
                  </span>
                  <h3 className="text-2xl md:text-6xl font-black uppercase tracking-tighter mb-4 md:mb-6 hover:text-cyan-400 transition-colors cursor-default">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-2xl leading-relaxed mb-6 md:mb-10 max-w-4xl font-medium">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-4">
                    {project.tech.map((skill, si) => (
                      <span key={si} className="text-[8px] md:text-xs font-black uppercase tracking-widest px-3 py-1.5 bg-white/5 border border-white/10 text-gray-400">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GitHub Bento Grid */}
        <div className="mt-20 md:mt-32 text-left">
          <div className="flex items-center gap-6 mb-12 text-left">
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest">{t.githubTitle}</h3>
            <div className="h-px flex-grow bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.githubProjects.map((small, idx) => (
              <motion.div key={idx} whileHover={{ y: -5, borderColor: "rgba(6, 182, 212, 0.4)" }} className="bg-white/5 border border-white/10 p-6 flex flex-col justify-between group transition-all text-left">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 group-hover:text-cyan-500 transition-colors"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22"></path></svg>
                    <span className="text-[10px] font-mono text-gray-600">{small.year}</span>
                  </div>
                  <h4 className="text-lg font-bold uppercase mb-2 group-hover:text-cyan-400 transition-colors">{small.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">{small.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2">{small.tech.map((s, i) => (<span key={i} className="text-[8px] font-black uppercase text-cyan-500/60">{s}</span>))}</div>
              </motion.div>
            ))}
          </div>
          <motion.div className="mt-12 text-left">
            <a href="https://github.com/TomasMusi" target="_blank" className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 hover:text-cyan-500 transition-all">{t.viewAllGithub}</a>
          </motion.div>
        </div>
      </section>

      {/* NOW / LEARNING SECTION */}
      <section className="py-20 md:py-32 px-6 md:px-24 bg-[#080808] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-12 bg-white/[0.02] border border-cyan-500/20 rounded-3xl overflow-hidden group"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-10">
                <div className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </div>
                <h3 className="text-cyan-500 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
                  {t.nowTitle}
                </h3>
              </div>

              {/* BODY (LIST) */}
              <div className="space-y-4 md:space-y-6">
                {t.nowPoints.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group/item"
                  >
                    <span className="text-cyan-500 font-mono mt-1 text-lg">›</span>
                    <p className="text-lg md:text-2xl font-black uppercase tracking-tighter leading-tight text-gray-200 group-hover/item:text-white transition-colors">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
              <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                {lang === "cs" ? "Poslední aktualizace" : "Last sync"}: {new Date().toLocaleDateString(lang === "cs" ? 'cs-CZ' : 'en-US')}
              </span>
              <div className="font-mono text-[10px] text-cyan-500/50 uppercase tracking-[0.2em] italic">
                continuous_learning.sh
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 px-6 md:px-24 border-t border-white/5 bg-[#050505] relative overflow-hidden text-left">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 relative z-10">

          {/* LEFT COLUMN: Heading + Terminal */}
          <div className="w-full lg:max-w-xl">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
              {lang === "cs" ? "Kontakt" : "Contact"}<span className="text-cyan-500">.</span>
            </h2>
            <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-10">
              Brno, Czech Republic · Available for hire
            </p>

            {/* TERMINAL FOOTER BOX */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-black/40 border border-white/5 rounded-lg overflow-hidden backdrop-blur-sm"
            >
              <div className="bg-white/5 px-3 py-1.5 flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
              </div>

              <div className="p-5 font-mono">
                <TerminalLine
                  command="whoami"
                  output="tomasmusil (fullstack-dev)"
                  delay={0.2}
                />
                <TerminalLine
                  command="date +'%H:%M:%S'"
                  output={new Date().toLocaleTimeString()}
                  delay={1.5}
                />
                <TerminalLine
                  command="echo $READY_TO_CONNECT"
                  output="true"
                  delay={2.8}
                />

                <div className="flex gap-2 text-[9px] md:text-[11px] mt-1">
                  <span className="text-cyan-500/70">$</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-1.5 h-3.5 bg-cyan-500 inline-block"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Social Links */}
          <div className="flex flex-wrap gap-8 md:gap-12 lg:pt-16">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/tom%C3%A1%C5%A1-musil-82755537b/" },
              { label: "GitHub", href: "https://github.com/TomasMusi" },
              { label: "LeetCode", href: "https://leetcode.com/u/tom-musil/" },
              { label: "Email", href: "mailto:vase@email.cz" }
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-gray-400 hover:text-cyan-500 transition-all border-b border-transparent hover:border-cyan-500 pb-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright & System Status */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 gap-4">
          <p className="text-[10px] font-mono text-gray-700 uppercase tracking-widest">© 2026 Tomáš Musil · All rights reserved</p>
          <div className="flex gap-4">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_8px_#06b6d4]" />
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest italic">System Active</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;