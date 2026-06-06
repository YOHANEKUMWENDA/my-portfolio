import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "NthakaGuide System",
    description: "NthakaGuide uses a trained Random Forest model to recommend crops and fertilizer plans to smallholder farmers in Malawi based on soil parameters and seasonal rainfall data.",
    category: "AI",
    tech: ["Python", "scikit-learn", "Flask", "PostgreSQL"],
    github: "#",
    demo: "https://nthaka-guide.vercel.app/",
  },
  {
  title: "Health Facility Finder System",
  description: "A web-based system that helps patients in Malawi locate the nearest health facility to them using real-time geolocation and pgRouting. Built for both patients finding clinics and hospital staff managing services.",
  category: "Systems",
  tech: ["React", "Python", "PostgreSQL", "pgRouting"],
  github: "#",
  demo: "#",
},
  {
  title: "Dayire Kicks Hub",
  description: "An e-commerce web app for Dayire Kicks Hub — a Malawian sneaker brand. Users can browse shoes by size, style and brand, search for specific pairs, and receive in-app notifications about promotions and new arrivals.",
  category: "Web",
  tech: ["React", "Python", "PostgreSQL"],
  github: "#",
  demo: "#",
},
  {
  title: "Voting Management System",
  description: "A rentable web-based voting management system that allows organisations to run and manage their own elections digitally. Built for any group needing a structured, reliable voting process.",
  category: "Systems",
  tech: ["React", "Python", "PostgreSQL"],
  github: "https://github.com/YOHANEKUMWENDA/votingsystem",
  demo: "#",
},
  
];

const filters = ["All", "AI", "Data", "Web", "Systems"];

const ProjectsShowcase = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="section-container">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">Projects</h2>
          <p className="text-muted-foreground font-mono text-sm"></p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                active === f ? "bg-primary text-primary-foreground glow-primary" : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 group hover:glow-primary transition-shadow duration-500 flex flex-col"
              >
                <span className="text-xs font-mono text-secondary mb-2">{p.category}</span>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={p.github} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                  {p.demo && (
                    <a href={p.demo} className="text-muted-foreground hover:text-accent transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
