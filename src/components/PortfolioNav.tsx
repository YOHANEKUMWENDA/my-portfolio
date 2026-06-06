import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Route, FolderOpen, Zap, BarChart3, Shield, Mail, Menu, X } from "lucide-react";

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "journey", label: "Journey", icon: Route },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "skills", label: "Skills", icon: Zap },
  { id: "academics", label: "Academics", icon: BarChart3 },
  { id: "certs", label: "Certs", icon: Shield },
  { id: "contact", label: "Contact", icon: Mail },
];

interface PortfolioNavProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const PortfolioNav = ({ activeSection, onNavigate }: PortfolioNavProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="fixed left-0 top-0 h-screen w-16 hidden md:flex flex-col items-center justify-center gap-2 z-50 bg-background/80 backdrop-blur-md border-r border-border">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`relative p-3 rounded-lg transition-all duration-300 group ${
              activeSection === item.id ? "text-primary glow-primary" : "text-muted-foreground hover:text-foreground"
            }`}
            title={item.label}
          >
            <item.icon size={20} />
            {activeSection === item.id && (
              <motion.div
                layoutId="nav-active"
                className="absolute inset-0 rounded-lg bg-primary/10 border border-primary/20"
                transition={{ duration: 0.3 }}
              />
            )}
            <span className="absolute left-full ml-3 px-2 py-1 rounded bg-card text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 right-4 z-50 md:hidden p-3 glass-card text-foreground"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setMobileOpen(false); }}
                className={`flex items-center gap-3 px-6 py-3 rounded-lg font-mono text-lg transition-colors ${
                  activeSection === item.id ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <item.icon size={22} />
                {item.label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioNav;
