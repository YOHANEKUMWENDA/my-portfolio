import { motion } from "framer-motion";
import { User, MapPin, GraduationCap, Heart } from "lucide-react";

const interests = [
  "Data Analysis",
  "Cybersecurity",
  "Mobile App Development",
  "Linux Administration",
  "Cloud Computing",
  "Web Development",
  "IT Consulting",
  "IT Auditing",
  "Project Management",
  "AI & Machine Learning",
];

const AboutSection = () => {
  return (
    <div className="section-container">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">Get To Know Me</h2>
          <p className="text-muted-foreground font-mono text-sm"></p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 glass-card p-8"
          >
           <p className="text-foreground leading-relaxed mb-4">
  I'm <span className="text-primary font-semibold">Yohane Kumwenda</span>, a final-year Bachelor of Science in Information Systems student at the University of Malawi, expected to graduate on <span className="text-accent font-medium">26 August 2026</span>.
</p>

<p className="text-muted-foreground leading-relaxed mb-4">
  My interests span <strong>Data Analysis, Information Systems Auditing, Cybersecurity, Mobile Development, and Web Development</strong>. I enjoy leveraging technology to solve real-world challenges by building secure, efficient, and user-centered digital solutions.
</p>

<p className="text-muted-foreground leading-relaxed mb-4">
  Throughout my academic journey, I have worked on projects involving software development, machine learning, and information systems design, strengthening my ability to transform ideas into practical solutions that create value for individuals, businesses, and communities.
</p>

<p className="text-muted-foreground leading-relaxed">
  Beyond academics, I am committed to continuous learning and professional growth. Whether exploring emerging cybersecurity trends, analyzing data for actionable insights, or developing modern web and mobile applications, I am always seeking opportunities to expand my knowledge and make a meaningful impact through technology.
</p>
          </motion.div>

          {/* Photo + quick facts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 h-full flex flex-col"
          >
            <div className="glass-card overflow-hidden rounded-3xl border border-border p-0 shadow-lg h-64">
              <div className="relative h-full w-full bg-muted/70">
                <img
                  src="/Certificates/profile.jpg.jpeg"
                  alt="Yohane Kumwenda"
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    (event.currentTarget as HTMLImageElement).src = "/profile-fallback.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: User, label: "Yohane Kumwenda", sub: "Full Name" },
                { icon: GraduationCap, label: "BSc Information Systems", sub: "University of Malawi, CHANCO" },
                { icon: MapPin, label: "Zomba, Malawi", sub: "Location" },
              ].map((item) => (
                <div key={item.label} className="glass-card p-4 flex items-center gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{item.label}</p>
                    <p className="text-xs text-muted-foreground font-mono">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Passions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 glass-card p-6"
        >
          <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
            <Heart size={16} className="text-primary" /> Passionate About
          </h3>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest, i) => (
              <motion.span
                key={interest}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="px-4 py-2 rounded-lg text-sm font-mono bg-primary/10 text-primary border border-primary/20 hover:glow-primary transition-shadow duration-300"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
