import { motion } from "framer-motion";

const milestones = [
  {
    year: "Year 1",
    title: "Foundation",
    description: "Kicked off my BSc Information Systems at UNIMA. Tackled the fundamentals — computer science, algebra, statistics and programming. Tough start but built a solid base.",
    skills: ["Intro to CS", "College Algebra", "Statistics", "Programming"],
    highlight: "Scored 87% in Trigonometry & Calculus",
  },
  {
    year: "Year 2",
    title: "Exploration",
    description: "Went deeper into information systems, databases, and web development. Got my first real taste of building systems and working with data.",
    skills: ["Database Systems", "Web Development", "Enterprise Architecture", "Operating Systems"],
    highlight: "Distinctions in E-Business & Foundations of IS",
  },
  {
    year: "Year 3",
    title: "Specialization",
    description: "Focused on software engineering, networks, security and entrepreneurship. Started thinking beyond code — about systems, people and business impact.",
    skills: ["Software Engineering", "Computer Networks", "Computer Security", "Systems Analysis"],
    highlight: "A grades in Networks & Object-oriented Systems",
  },
  {
    year: "Year 4",
    title: "Mastery",
    description: "Final year — applying everything. Mobile development, geospatial computing, project management and leading the NthakaGuide capstone project.",
    skills: ["Mobile Development", "Geospatial Computing", "Project Management", "Research Methods"],
    highlight: "NthakaGuide Capstone Project",
  },

];

const JourneyTimeline = () => {
  return (
    <div className="section-container">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">My Journey</h2>
          <p className="text-muted-foreground font-mono text-sm">from novice → builder</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex flex-col md:flex-row items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary glow-primary -translate-x-1/2 mt-6 z-10" />

              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="glass-card p-6 hover:glow-primary transition-shadow duration-500 group">
                  <span className="font-mono text-primary text-sm">{m.year}</span>
                  <h3 className="text-xl font-bold mt-1 mb-2">{m.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{m.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {m.skills.map((s) => (
                      <span key={s} className="text-xs font-mono px-2 py-1 rounded bg-muted text-primary">{s}</span>
                    ))}
                  </div>
                  <span className="text-xs font-mono text-accent">★ {m.highlight}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneyTimeline;
