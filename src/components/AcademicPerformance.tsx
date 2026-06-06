import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const semesterData = [
  {
    label: "First Year, Sem 1",
    gpa: 3.15,
    subjects: [
      { code: "COM111", name: "Introduction to Computer Science", score: 76, grade: "A", gp: 3.75 },
      { code: "LAN112", name: "Listening and Reading Skills for Science", score: 54, grade: "C-", gp: 2.00 },
      { code: "MAT111", name: "College Algebra", score: 79, grade: "A", gp: 3.75 },
      { code: "PHY111", name: "Mechanics and Properties of Matter I", score: 55, grade: "C", gp: 2.50 },
      { code: "STA111", name: "The Statistical System", score: 81, grade: "A", gp: 3.75 },
    ],
  },
  {
    label: "First Year, Sem 2",
    gpa: 3.79,
    subjects: [
      { code: "COM121", name: "Introduction to Computer Programming", score: 70, grade: "B+", gp: 3.74 },
      { code: "LAN122", name: "Writing and Oral Skills for Science", score: 71, grade: "B+", gp: 3.74 },
      { code: "MAT121", name: "Trigonometry & Elementary Calculus", score: 87, grade: "A+", gp: 4.00 },
      { code: "PHY121", name: "Electricity and Magnetism, Vibrations and Waves I", score: 73, grade: "B+", gp: 3.74 },
      { code: "STA121", name: "Descriptive Statistics", score: 78, grade: "A", gp: 3.75 },
    ],
  },
  {
    label: "Second Year, Sem 1",
    gpa: 3.45,
    subjects: [
      { code: "COM211", name: "Operating Systems", score: 61, grade: "C+", gp: 2.99 },
      { code: "INF211", name: "Foundations of Information Systems", score: 79, grade: "A", gp: 3.75 },
      { code: "INF212", name: "E-Business Techniques", score: 82, grade: "A", gp: 3.75 },
      { code: "MAT213", name: "Introduction to Mathematical Computing", score: 75, grade: "A", gp: 3.75 },
      { code: "STA211", name: "Foundations of Probability and Statistics", score: 62, grade: "C+", gp: 2.99 },
    ],
  },
  {
    label: "Second Year, Sem 2",
    gpa: 3.44,
    subjects: [
      { code: "COM221", name: "Advanced Computer Programming", score: 70, grade: "B+", gp: 3.74 },
      { code: "COM222", name: "Database Systems", score: 72, grade: "B+", gp: 3.74 },
      { code: "INF221", name: "Web Design and Development", score: 71, grade: "B+", gp: 3.74 },
      { code: "INF222", name: "Enterprise Architecture", score: 69, grade: "B", gp: 3.00 },
      { code: "STA221", name: "Statistical Hypothesis Testing", score: 63, grade: "C+", gp: 2.99 },
    ],
  },
  {
    label: "Third Year, Sem 1",
    gpa: 3.30,
    subjects: [
      { code: "COM311", name: "Software Engineering", score: 68, grade: "B", gp: 3.00 },
      { code: "COM312", name: "Human Computer Interaction", score: 72, grade: "B+", gp: 3.74 },
      { code: "COM313", name: "Computer Security", score: 73, grade: "B+", gp: 3.74 },
      { code: "COM315", name: "Linux Systems Administration", score: 69, grade: "B", gp: 3.00 },
      { code: "INF312", name: "Information Technology Service Management", score: 69, grade: "B", gp: 3.00 },
    ],
  },
  {
    label: "Third Year, Sem 2",
    gpa: 3.75,
    subjects: [
      { code: "COM322", name: "Computer Networks", score: 77, grade: "A", gp: 3.75 },
      { code: "COM323", name: "Object-oriented Systems Analysis and Design", score: 81, grade: "A", gp: 3.75 },
      { code: "INF321", name: "Management Support Systems", score: 71, grade: "B+", gp: 3.74 },
      { code: "INF322", name: "Entrepreneurship - Theory and Practice", score: 73, grade: "B+", gp: 3.74 },
      { code: "INF323", name: "Information Management for Business", score: 76, grade: "A", gp: 3.75 },
    ],
  },
  {
    label: "Fourth Year, Sem 1",
    gpa: 3.59,
    subjects: [
      { code: "COM411", name: "Mobile Applications Development", score: 71, grade: "B+", gp: 3.74 },
      { code: "COM412", name: "Project Management", score: 70, grade: "B+", gp: 3.74 },
      { code: "COM413", name: "Geospatial Computing", score: 76, grade: "A", gp: 3.75 },
      { code: "COM414", name: "Research Methods and Ethics in Computing", score: 68, grade: "B", gp: 3.00 },
      { code: "INF411", name: "Strategic Business and IS Management", score: 72, grade: "B+", gp: 3.74 },
    ],
  },
  {
    label: "Fourth Year, Sem 2",
    gpa: 0,
    status: "Pending",
    subjects: [],
  },
];

const maxGpa = 4.0;
const maxBarHeight = 160;

// Grade colour mapping
function gradeColor(grade) {
  if (grade.startsWith("A")) return "hsl(174 72% 45%)";
  if (grade.startsWith("B")) return "hsl(210 80% 60%)";
  return "hsl(35 90% 55%)";
}

const AcademicPerformance = () => {
  const [selected, setSelected] = useState(0);

  const cumulativeGpa = (
    semesterData.filter((s) => s.gpa > 0).reduce((sum, s) => sum + s.gpa, 0) /
    semesterData.filter((s) => s.gpa > 0).length
  ).toFixed(2);

  const activeSem = semesterData[selected];

  return (
    <div className="section-container">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
            Academic Performance
          </h2>
          <p className="text-muted-foreground font-mono text-sm">data-driven progress</p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Cumulative GPA", value: cumulativeGpa, sub: "/ 4.00" },
            { label: "Semesters", value: "8", sub: "completed" },
            { label: "Best Semester", value: "3.79", sub: "Year 1, Sem 2" },
            { label: "Top Score", value: "87%", sub: "Trigonometry & Calculus" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-5 text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-xs text-muted-foreground font-mono mt-1">{stat.sub}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* ── GPA Chart (clickable) ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <h3 className="text-lg font-bold mb-1">GPA Trend</h3>
            <p className="text-xs text-muted-foreground font-mono mb-6">
              click a bar to see semester subjects
            </p>

            <div
              className="flex items-end justify-between gap-2"
              style={{ height: maxBarHeight + 40 }}
            >
              {semesterData.map((sem, i) => {
                const barH = sem.gpa > 0 ? (sem.gpa / maxGpa) * maxBarHeight : 0;
                const isSelected = selected === i;
                const isPending = sem.status === "Pending";

                return (
                  <div
                    key={sem.label}
                    className="flex flex-col items-center flex-1 gap-1 cursor-pointer group"
                    onClick={() => setSelected(i)}
                  >
                    <span
                      className="text-xs font-mono transition-colors duration-200"
                      style={{ color: "hsl(174 72% 45%)" }}
                    >
                      {isPending ? "—" : sem.gpa}
                    </span>

                    {isPending ? (
                      <div
                        className="w-full rounded-t-md border border-dashed flex items-center justify-center"
                        style={{
                          height: 30,
                          borderColor: "hsl(174 72% 25%)",
                          background: "transparent",
                        }}
                      >
                        <span className="text-[9px] font-mono text-muted-foreground">TBD</span>
                      </div>
                    ) : (
                      <motion.div
                        className="w-full rounded-t-md transition-opacity duration-200"
                        style={{
                          background: "linear-gradient(to top, hsl(174 72% 40%), hsl(174 72% 55%))",
                          opacity: isSelected ? 1 : 0.45,
                        }}
                        initial={{ height: 0 }}
                        whileInView={{ height: barH }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.08 }}
                      />
                    )}

                    <span
                      className="text-[10px] font-mono mt-1 text-center transition-colors duration-200 leading-tight"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    >
                      {sem.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ── Subject Breakdown (reactive) ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 min-h-[320px]"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold">Subject Breakdown</h3>
              <span className="text-xs font-mono px-2 py-1 rounded bg-muted text-primary">
                {activeSem.label}
              </span>
            </div>

            <AnimatePresence mode="wait">
              {activeSem.status === "Pending" ? (
                <motion.div
                  key="pending"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center h-48 gap-3"
                >
                  <span className="text-4xl">⏳</span>
                  <p className="text-muted-foreground font-mono text-sm text-center">
                    Results pending
                    <br />
                    <span className="text-xs opacity-60">Results will be available soon</span>
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={activeSem.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  {activeSem.subjects.map((subj, i) => (
                    <motion.div
                      key={subj.code}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                    >
                      <div className="flex justify-between items-center text-sm mb-1 gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <span
                            className="text-[10px] font-mono px-1.5 py-0.5 rounded shrink-0"
                            style={{
                              background: "hsl(174 72% 20%)",
                              color: "hsl(174 72% 65%)",
                            }}
                          >
                            {subj.code}
                          </span>
                          <span className="font-mono text-xs truncate text-muted-foreground">
                            {subj.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-xs font-mono text-muted-foreground">
                            {subj.score}%
                          </span>
                          <span
                            className="font-mono font-bold text-sm w-8 text-right"
                            style={{ color: "hsl(174 72% 55%)" }}
                          >
                            {subj.grade}
                          </span>
                        </div>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, hsl(174 72% 40%), hsl(174 72% 56%))`,
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${subj.score}%` }}
                          transition={{ duration: 0.6, delay: i * 0.07 }}
                        />
                      </div>
                    </motion.div>
                  ))}

                  {/* Semester GPA summary */}
                  <div
                    className="flex justify-between items-center pt-3 mt-1 border-t"
                    style={{ borderColor: "hsl(174 72% 20%)" }}
                  >
                    <span className="text-xs font-mono text-muted-foreground">
                      Semester GPA
                    </span>
                    <span className="text-sm font-bold text-primary font-mono">
                      {activeSem.gpa} / 4.00
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AcademicPerformance;