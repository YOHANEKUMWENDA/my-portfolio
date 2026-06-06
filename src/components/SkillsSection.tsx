import { motion } from "framer-motion";
import { Code, Database, Cpu, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Programming",
    icon: Code,
    skills: [
      { name: "Python", level: 80 },
      { name: "JavaScript/TS", level: 85 },
      { name: "Java", level: 70 },
      { name: "HTML/CSS", level: 95 },
    ],
    
  },
   {
    title: "Digital Marketing",
    icon: Code,
    skills: [
      { name: "SEO", level: 80 },
      { name: "Social Media Marketing", level: 85 },
      { name: "Content Strategy", level: 75 },
      { name: "Google Ads", level: 85 },
    ],
    
  },
  {
    title: "Tools & Frameworks",
    icon: Wrench,
    skills: [
      { name: "React", level: 85 },
       { name: "React Native", level: 85 },
        { name: "Excel", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "Power BI", level: 85 },
      { name: "Git", level: 90 },
    ],
  },
  {
    title: "Systems & Analysis",
    icon: Cpu,
    skills: [
      { name: "System Design", level: 80 },
      { name: "Data Modeling", level: 85 },
      { name: "UML", level: 75 },
      
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 70 },
  
    ],
  },
  {
    title: "IT Auditing & Consulting",
    icon: Wrench,
    skills: [
      { name: "Risk Assessment", level: 88 },
      { name: "IT Controls", level: 72 },
      { name: "Compliance", level: 80 },
    
    ],
  },
  {
    title: "Data & AI",
    icon: Database,
    skills: [
      { name: "Data Analysis", level: 88 },
      { name: "Machine Learning", level: 72 },
      { name: "Visualization", level: 80 },
      { name: "Statistics", level: 78 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <div className="mb-3">
    <div className="flex justify-between text-sm mb-1">
      <span className="font-mono">{name}</span>
      <span className="text-muted-foreground font-mono">{level}%</span>
    </div>
    <div className="h-2 rounded-full bg-muted overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
      />
    </div>
  </div>
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
              {group.skills.map((skill, si) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={gi * 0.1 + si * 0.1} />
              ))}
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
