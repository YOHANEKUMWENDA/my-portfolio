import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const greeting = "Hi, I'm Yohane Kumwenda";
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < greeting.length) {
      const timeout = setTimeout(() => {
        setDisplayText(greeting.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, greeting]);

  return (
    <div className="section-container relative overflow-hidden cyber-grid">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-secondary/5 blur-[100px] animate-glow-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/3 w-60 h-60 rounded-full bg-accent/5 blur-[80px] animate-glow-pulse" style={{ animationDelay: "2s" }} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-block glass-card px-4 py-1.5 mb-6"
        >
          <span className="text-sm font-mono text-secondary">BSc Information Systems · University of Malawi · Class of 2026</span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="text-gradient-primary">{displayText}</span>
          <span className="border-r-2 border-primary animate-typing-cursor ml-1">&nbsp;</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A passionate final-year student expecting to graduate on{" "}
          <span className="text-accent font-medium">26th August 2026</span>. 
          Driven by <span className="text-secondary">Data Analysis</span>,{" "}
          <span className="text-primary">Cybersecurity</span>,{" "}
          <span className="text-secondary">Software Engineering</span>, and{" "}
          <span className="text-primary">Linux Administration</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a href="#projects" className="glass-card px-6 py-3 text-primary font-medium hover:glow-primary transition-shadow duration-300">
            View Projects →
          </a>
          <a href="#contact" className="glass-card px-6 py-3 text-accent font-medium hover:glow-accent transition-shadow duration-300">
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="mt-16 flex flex-wrap gap-6 justify-center text-sm font-mono text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary animate-glow-pulse" /> Available for Opportunities
          </span>
          <span>⚡ 5+ Projects</span>
          <span>🎓 Graduating Aug 2026</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
