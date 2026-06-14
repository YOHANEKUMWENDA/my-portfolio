import { motion } from "framer-motion";
import { Code, Database, Cpu, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "JavaScript/TS", "Java", "HTML/CSS"],
  },
  {
    title: "Digital Marketing",
    icon: Code,
    skills: ["SEO", "Social Media Marketing", "Content Strategy", "Google Ads"],
  },
  {
    title: "Tools & Frameworks",
    icon: Wrench,
    skills: ["React", "React Native", "Excel", "Node.js", "Power BI", "Git","FastAPI", "Flask"],  },
  {
    title: "Systems & Analysis",
    icon: Cpu,
    skills: ["System Design", "Data Modeling", "UML"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    title: "IT Auditing & Consulting",
    icon: Wrench,
    skills: ["Risk Assessment", "IT Controls", "Compliance"],
  },
  {
    title: "Data & AI",
    icon: Database,
    skills: ["Data Analysis", "Machine Learning", "Visualization", "Statistics"],
  },
];

const SkillChip = ({ name, delay }) => (
  <motion.span
    initial={{ opacity: 0, y: 6 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay, ease: "easeOut" }}
    className="inline-block px-3 py-1.5 mr-2 mb-2 rounded-full text-sm font-mono bg-muted/60 border border-primary/10 hover:border-primary/40 hover:text-primary transition-colors duration-200"
  >
    {name}
  </motion.span>
);

const SkillsSection = () => {
  return (
    <div className="section-container">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">Skills</h2>
          <p className="text-muted-foreground font-mono text-sm"></p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className="glass-card p-6 h-full hover:glow-primary transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <group.icon size={20} />
                </div>
                <h3 className="text-lg font-bold">{group.title}</h3>
              </div>
              <div className="flex flex-wrap">
                {group.skills.map((skill, si) => (
                  <SkillChip key={skill} name={skill} delay={gi * 0.05 + si * 0.05} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Exploring section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 glass-card p-6"
        >
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="text-accent">🔭</span> What I'm Exploring
          </h3>
          <div className="flex flex-wrap gap-3">
            {["Cloud Computing", "Cybersecurity", "Machine Learning", "Intellectual Property Rights(WIPO)", "Networking"].map((topic) => (
              <span key={topic} className="glass-card px-4 py-2 text-sm font-mono text-accent border-accent/20 animate-float" style={{ animationDelay: `${Math.random() * 2}s` }}>
                {topic}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;
