import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, Download, PhoneCall } from "lucide-react";

const ContactSection = () => {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <div className="section-container">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">Get in Touch</h2>
          <p className="text-muted-foreground font-mono text-sm">Let's connect! Send me an email, and I'll get back to you within 24 hours. For urgent matters, feel free to reach out by phone.
</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 space-y-4"
            action="https://formspree.io/f/mwvjvglo"
            method="POST"
          >
            {[
              { name: "name", label: "Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
            ].map((field) => (
              <div key={field.name} className="relative">
                <label className="text-sm font-mono text-muted-foreground mb-1 block">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  required
                  onFocus={() => setFocused(field.name)}
                  onBlur={() => setFocused(null)}
                  className={`w-full bg-muted rounded-lg px-4 py-3 text-foreground outline-none transition-shadow duration-300 ${
                    focused === field.name ? "glow-primary ring-1 ring-primary/50" : ""
                  }`}
                />
              </div>
            ))}
            <div>
              <label className="text-sm font-mono text-muted-foreground mb-1 block">Message</label>
              <textarea
                rows={4}
                name="message"
                required
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className={`w-full bg-muted rounded-lg px-4 py-3 text-foreground outline-none resize-none transition-shadow duration-300 ${
                  focused === "message" ? "glow-primary ring-1 ring-primary/50" : ""
                }`}
              />
            </div>
            <button type="submit" className="w-full glass-card px-6 py-3 text-primary font-medium hover:glow-primary transition-shadow duration-300 flex items-center justify-center gap-2">
              <Send size={16} /> Send Message
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* CV Download */}
            <div className="glass-card p-6">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <Download size={18} className="text-accent" /> Download CV
              </h3>
              <p className="text-sm text-muted-foreground mb-3">Last updated: March 2026</p>
              <button className="glass-card px-5 py-2.5 text-accent font-mono text-sm hover:glow-accent transition-shadow duration-300">
                📄 Download PDF
              </button>
            </div>

            {/* Social links */}
            <div className="glass-card p-6">
              <h3 className="font-bold mb-4">Connect</h3>
              <div className="space-y-3">
                {[
                  { icon: Github, label: "GitHub", href: "https://github.com/yohane-kumwenda", color: "text-foreground", external: true },
                  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/yohane-kumwenda-04b00129b/", color: "text-primary", external: true },
                  { icon: Mail, label: "Email", href: "mailto:yohanekumwendao6@gmail.com", color: "text-accent", external: false },
               {
  icon: PhoneCall,
  label: "Phone: +265 984 518 884",
  href: "tel:+265984518884",
  color: "text-accent",
  external: false
}
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <link.icon size={18} className={`group-hover:${link.color}`} />
                    <span className="font-mono text-sm">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="glass-card p-6 border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-glow-pulse" />
                <span className="font-mono text-sm text-primary">Open to Opportunities</span>
              </div>
              <p className="text-sm text-muted-foreground">Internships, graduate roles, and freelance projects.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
