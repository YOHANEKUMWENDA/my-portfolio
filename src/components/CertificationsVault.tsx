import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Shield, ExternalLink, Download, X } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  color: string;
  file: string;
}

const certs: Certificate[] = [
  { title: "CYBERSECURITY & ITS TEN DOMAINS", issuer: "Coursera", date: "2026", color: "primary", file: "CYBERSECURITY_AND_ITS_TEN_DOMAINS.pdf" },
  { title: "CYBER THREAT MANAGEMENT", issuer: "Cisco Networking Academy", date: "2026", color: "secondary", file: "Cyber_Threat_Management_certificate.pdf" },
  { title: "INFORMATIONS SYSTEMS AUDITING, CONTROLS AND ASSURANCE", issuer: "Coursera", date: "2026", color: "accent", file: "INFORMATIONS_SYSTEMS_AUDITING_CONTROLS_AND_ASSURANCE.pdf" },
  { title: "END POINT SECURITY", issuer: "Cisco Networking Academy", date: "2026", color: "primary", file: "Endpoint_Security.pdf" },
  { title: "INTRODUCTION TO CYBERSECURITY", issuer: "Cisco Networking Academy", date: "2026", color: "secondary", file: "Introduction_to_Cybersecurity.pdf" },
  { title: "EXPLORING NETWORK WITH CISCO PACKET TRACER", issuer: "Cisco Networking Academy", date: "2026", color: "accent", file: "Exploring_Networking_with_Cisco.pdf" },
   { title: "FOUNDATIONS OF DIGITAL MARKETING AND E-COMMERCE", issuer: "Coursera", date: "2023", color: "accent", file: "foundations of digital marketing.pdf" },
    { title: "ATTRACT AND ENGAGE CUSTOMERS WITH DIGITAL MARKETING", issuer: "Coursera", date: "2023", color: "accent", file: "Attract and Engage Customers with Digital Marketing.pdf" },
        { title: "Exploring Internet of Things with Cisco Packet Tracer", issuer: "Cisco Networking Academy", date: "2026", color: "accent", file: "Exploring Internet of Things with Cisco Packet Tracer.pdf" },
         { title: "Introduction to Modern AI", issuer: "Cisco Networking Academy", date: "2026", color: "accent", file: "Introduction to Modern AI.pdf" },
         { title: "Introduction to Greenhouse Gas Accounting for IT", issuer: "Cisco Networking Academy", date: "2026", color: "accent", file: "Introduction to Greenhouse Gas Accounting for IT.pdf" },
          { title: "Network Defense", issuer: "Cisco Networking Academy", date: "2026", color: "accent", file: "Network Defense.pdf" },
          { title: "Network Support and Security", issuer: "Cisco Networking Academy", date: "2026", color: "accent", file: "Network Support and Security.pdf" },
    { title: "Operating Systems Support", issuer: "Cisco Networking Academy", date: "2026", color: "accent", file: "Operating Systems Support.pdf" },
          { title: "Using Computer and Mobile Devices", issuer: "Cisco Networking Academy", date: "2026", color: "accent", file: "Using Computer and Mobile Devices.pdf" },
           { title: "English for IT 1", issuer: "Cisco Networking Academy", date: "2026", color: "accent", file: "English for IT 1.pdf" },
            { title: "JavaScript Essentials 1", issuer: "Cisco Networking Academy", date: "2026", color: "accent", file: "JavaScript Essentials 1.pdf" },
             { title: "English for IT 2", issuer: "Cisco Networking Academy", date: "2026", color: "accent", file: "English for IT 2.pdf" },
              { title: "Getting Started with speech in Microsoft", issuer: "Microsoft", date: "2026", color: "accent", file: "Getting started with speech in microsoft.pdf" },
                    { title: "StartUp Fundamentals", issuer: "Microsoft", date: "2026", color: "accent", file: "StartUp Fundamentals.pdf" },
                          { title: "UNDP-IDT4M DIGITAL ADVOCATY", issuer: "Microsoft", date: "2026", color: "accent", file: "UNDP-IDT4M DIGITAL ADVOCATE.pdf" },
                           { title: "BITCOIN", issuer: "Trezor Academy", date: "2026", color: "accent", file: "Trezor Academy Certificate.pdf" },
                            { title: "Entrepreneurship Learning Pathway", issuer: "LinkedIn Learning", date: "2025", color: "accent", file: "Entrepreneurship Learning Pathway.pdf" },
];

const glowMap: Record<string, string> = {
  primary: "hover:glow-primary",
  secondary: "hover:glow-secondary",
  accent: "hover:glow-accent",
};

const textMap: Record<string, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
};

const CertificateCard = ({
  cert,
  delay,
  onView,
}: {
  cert: Certificate;
  delay: number;
  onView: (cert: Certificate) => void;
}) => {
  const certificateUrl = `/Certificates/${encodeURIComponent(cert.file)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`glass-card p-5 transition-all duration-500 group ${glowMap[cert.color]}`}
    >
      <div className="flex items-start justify-between mb-3">
        <Shield className={`${textMap[cert.color]}`} size={24} />
        <span className="font-mono text-xs text-muted-foreground">{cert.date}</span>
      </div>
      <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">{cert.title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => onView(cert)}
          className="inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors hover:underline"
        >
          <ExternalLink size={12} />
          <span>View</span>
        </button>
        <a
          href={certificateUrl}
          download
          className="inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors hover:underline"
        >
          <Download size={12} />
          <span>Download</span>
        </a>
      </div>
    </motion.div>
  );
};

const CertificatePreviewModal = ({
  cert,
  onClose,
}: {
  cert: Certificate;
  onClose: () => void;
}) => {
  const certificateUrl = `/Certificates/${encodeURIComponent(cert.file)}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="glass-card w-full max-w-3xl h-[85vh] flex flex-col overflow-hidden"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-border/50">
          <div className="min-w-0">
            <h3 className="font-bold truncate">{cert.title}</h3>
            <p className="text-xs text-muted-foreground">{cert.issuer} · {cert.date}</p>
          </div>
          <div className="flex items-center gap-3 shrink-0 ml-4">
            <a
              href={certificateUrl}
              download
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors hover:underline"
            >
              <Download size={14} />
              <span>Download</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close preview"
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <X size={16} />
              <span>Cancel</span>
            </button>
          </div>
        </div>
        <div className="flex-1 bg-muted/30">
          <iframe
            src={certificateUrl}
            title={cert.title}
            className="w-full h-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const CertificationsVault = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedIssuer, setSelectedIssuer] = useState("All");
  const [previewCert, setPreviewCert] = useState<Certificate | null>(null);

  const previewCerts = certs.slice(0, 6);
  const issuers = ["All", ...Array.from(new Set(certs.map((cert) => cert.issuer)))];
  const groupedCerts = certs.reduce<Record<string, Certificate[]>>((acc, cert) => {
    if (!acc[cert.issuer]) acc[cert.issuer] = [];
    acc[cert.issuer].push(cert);
    return acc;
  }, {});

  const filteredCerts = selectedIssuer === "All" ? certs : certs.filter((cert) => cert.issuer === selectedIssuer);

  return (
    <div className="section-container">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">Certifications Vault</h2>
          <p className="text-muted-foreground font-mono text-sm"></p>
        </motion.div>

        <div className="mb-6 text-sm text-muted-foreground">
          Showing {previewCerts.length} of {certs.length} certificates. Click “See all” to explore every credential grouped by issuer.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {previewCerts.map((cert, i) => (
            <CertificateCard key={cert.title} cert={cert} delay={i * 0.1} onView={setPreviewCert} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="glass-card px-6 py-3 text-sm font-mono text-primary hover:glow-primary transition-shadow duration-300"
          >
            {showAll ? "Show fewer certificates" : "See all certificates"}
          </button>
        </div>

        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="overflow-hidden mt-10"
            >
              <div className="mb-6 flex flex-wrap gap-2">
                {issuers.map((issuer) => (
                  <button
                    key={issuer}
                    type="button"
                    onClick={() => setSelectedIssuer(issuer)}
                    className={`rounded-full px-4 py-2 text-xs font-mono transition-all duration-300 ${
                      selectedIssuer === issuer
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "glass-card text-muted-foreground hover:bg-primary/10"
                    }`}
                  >
                    {issuer}
                  </button>
                ))}
              </div>

              {selectedIssuer === "All" ? (
                <div className="space-y-8">
                  {Object.entries(groupedCerts).map(([issuer, issuerCerts]) => (
                    <div key={issuer}>
                      <h3 className="text-xl font-semibold mb-4">{issuer}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {issuerCerts.map((cert, index) => (
                          <CertificateCard key={cert.title} cert={cert} delay={index * 0.05} onView={setPreviewCert} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredCerts.map((cert, index) => (
                    <CertificateCard key={cert.title} cert={cert} delay={index * 0.05} onView={setPreviewCert} />
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {previewCert && (
          <CertificatePreviewModal cert={previewCert} onClose={() => setPreviewCert(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CertificationsVault;
