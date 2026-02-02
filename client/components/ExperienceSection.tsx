import { useState } from "react";

/**
 * ExperienceSection Component
 * Toggle-based section displaying work experience and education timelines
 * Features:
 * - Two tabs: "experience" and "education"
 * - Timeline view with company/school logos
 * - Continuous vertical line connecting timeline items
 * - Responsive layout for all screen sizes
 */

type ExperienceItem = {
  logo: string;
  dateRange: string;
  company: string;
  position: string;
  bullets: string[];
};

type EducationItem = {
  logo: string;
  dateRange: string;
  school: string;
  degree: string;
  bullets: string[];
};

// Experience data - work history with company info and achievements
const experiences: ExperienceItem[] = [
  {
    logo: "/assets/Handshake_app_icon_default.png",
    dateRange: "Nov 2025 - Present",
    company: "Handshake",
    position: "AI Fellow (Contract)",
    bullets: [
      '•Curated high quality datasets. Executed large scale data labeling and annotation for video and text assets, ensuring high precision in "ground truth" data to improve the accuracy of multimodal AI models.',
      "•Facilitated multimodal data collection. Generated diverse video content and conversational scripts to simulate real world user interactions, providing the essential raw data used to train and refine AI response patterns.",
    ],
  },
  {
    logo: "/assets/mango-4-logo-png-transparent.png",
    dateRange: "Dec 2022 - Nov 2025",
    company: "MANGO",
    position: "Stock Associate",
    bullets: [
      "•Optimized inventory operations by utilizing RFID tracking technology for over 35,000 weekly units, maintaining a 98% data accuracy rate across the stockroom.",
      "•Streamlined outbound logistics and freight transfers using proprietary software (ADA+), ensuring 100% accountability.",
    ],
  },
  {
    logo: "/assets/columbia-v2.png",
    dateRange: "Sept 2022 - Dec 2022",
    company: "Columbia University",
    position: "Bookseller",
    bullets: [
      "•Optimized order fulfillment for university customers by utilizing digital management tools to coordinate driver logistics and delivery schedules.",
      "•Facilitated high volume customer inquiries regarding digital resource access and textbook availability, maintaining accurate digital records via POS systems with zero discrepancies.",
    ],
  },
];

// Education data - academic history with degrees and honors
const education: EducationItem[] = [
  {
    logo: "/assets/ccny_icon_v2.png",
    dateRange: "Current",
    school: "CUNY City College of New York",
    degree: "BS in Computer Science",
    bullets: [
      "•Grove School of Engineering",
    ],
  },
  {
    logo: "/assets/Google High Resolution Flat Logo - 2000x2000.png",
    dateRange: "Jul 2025 - Nov 2025",
    school: "Google IT Support Professional Certificate",
    degree: "Coursera (Remote)",
    bullets: [],
  },
  {
    logo: "/assets/bmcc-v3.png",
    dateRange: "Jan 2024 - Dec 2025",
    school: "CUNY Borough of Manhattan Community College",
    degree: "AS in Computer Science",
    bullets: [
      "•2-time recipient of Dean's Honor List",
      "•National Society of Leadership and Success",
      "•AI Innovation Challenge 2025 Honorary",
    ],
  },
  {
    logo: "/assets/RIT_RGB_hor.png",
    dateRange: "Aug 2021 - May 2022",
    school: "Rochester Institute of Technology",
    degree: "BS in Computer Engineering",
    bullets: [
      "•Presidential Scholarship",
      "•BS/MS Accelerated Program",
    ],
  },
  {
    logo: "/assets/fatima.png",
    dateRange: "Sept 2016 - June 2018",
    school: "Fatima College",
    degree: "Natural Sciences - Caribbean Advanced Proficiency Examinations (CAPE)",
    bullets: [],
  },
  {
    logo: "/assets/BSSS.png",
    dateRange: "Sept 2011 - June 2018",
    school: "Barataria South Secondary School",
    degree: "Diploma in Natural Science - Caribbean Secondary Education Certificate (CSEC)",
    bullets: [],
  },
];

// Main component - handles tab state and renders selected timeline
export default function ExperienceSection() {
  // State to track which tab is currently active (experience or education)
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  return (
    <section className="px-4 md:px-8 lg:px-16 py-8 md:py-16 flex flex-col items-center gap-6 md:gap-8">
      {/* Toggle Buttons */}
      <div className="flex items-center gap-1 p-2 md:p-3 rounded-[20px] md:rounded-[30px] bg-secondary dark:bg-secondary w-full max-w-[276px] md:max-w-[532px] lg:max-w-[698px] transition-colors duration-300">
        <button
          onClick={() => setActiveTab("experience")}
          className={`flex-1 px-4 md:px-6 py-2 md:py-3 rounded-[10px] md:rounded-[15px] font-semibold text-sm md:text-lg lg:text-2xl transition-all ${
            activeTab === "experience"
              ? "bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground"
              : "bg-transparent text-foreground dark:text-foreground"
          }`}
        >
          experience
        </button>
        <button
          onClick={() => setActiveTab("education")}
          className={`flex-1 px-4 md:px-6 py-2 md:py-3 rounded-[10px] md:rounded-[15px] font-semibold text-sm md:text-lg lg:text-2xl transition-all ${
            activeTab === "education"
              ? "bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground"
              : "bg-transparent text-foreground dark:text-foreground"
          }`}
        >
          education
        </button>
      </div>

      {/* Content */}
      <div className="w-full max-w-[299px] md:max-w-[544px] lg:max-w-[1000px] border border-border rounded-[10px] md:rounded-[30px] bg-card dark:bg-card overflow-hidden transition-colors duration-300">
        {activeTab === "experience" ? (
          <div className="p-4 md:p-8 lg:p-12 relative">
            {/* Continuous vertical line behind all items */}
            <div className="absolute left-[33px] md:left-[62px] lg:left-[93px] top-12 bottom-0 w-px bg-foreground/20 dark:bg-foreground/20" />

            <div className="space-y-6 md:space-y-12 lg:space-y-16 relative z-10">
              {experiences.map((exp, index) => (
                <div key={index} className="flex gap-4 md:gap-8 lg:gap-12">
                  {/* Logo */}
                  <div className="w-9 h-9 md:w-16 md:h-16 lg:w-[89px] lg:h-[87px] rounded-full border boarder-md:boarder-2 lg:boarder-2 border-foreground/30 dark:border-foreground/30 overflow-hidden flex-shrink-0 bg-background dark:bg-background transition-colors duration-300">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-1 md:space-y-2 pt-1 md:pt-2">
                    <p className="text-[8px] md:text-xs lg:text-sm font-light text-foreground/60 dark:text-foreground/60">
                      {exp.dateRange}
                    </p>
                    <h3 className="text-[8px] md:text-xs lg:text-base font-bold text-foreground dark:text-foreground">
                      {exp.company}
                    </h3>
                    <p className="text-[8px] md:text-xs lg:text-sm font-light italic text-foreground/70 dark:text-foreground/70">
                      {exp.position}
                    </p>
                    <ul className="space-y-2 md:space-y-3 pt-2 md:pt-3">
                      {exp.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className="text-[7px] md:text-[11px] lg:text-sm leading-relaxed text-foreground/75 dark:text-foreground/75"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-4 md:p-8 lg:p-12 relative">
            {/* Continuous vertical line behind all items */}
            <div className="absolute left-[33px] md:left-[62px] lg:left-[93px] top-12 bottom-12 w-px bg-foreground/20 dark:bg-foreground/20" />

            <div className="space-y-6 md:space-y-12 lg:space-y-16 relative z-10">
              {education.map((edu, index) => (
                <div key={index} className="flex gap-4 md:gap-8 lg:gap-12">
                  {/* Logo */}
                  <div className="w-9 h-9 md:w-16 md:h-16 lg:w-[85px] lg:h-[85px] rounded-full border boarder-md:boarder-2 lg:boarder-2 border-foreground/30 dark:border-foreground/30 overflow-hidden flex-shrink-0 bg-background dark:bg-background transition-colors duration-300">
                    <img
                      src={edu.logo}
                      alt={edu.school}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-1 md:space-y-2 pt-1 md:pt-2">
                    <p className="text-[8px] md:text-xs lg:text-sm font-light text-foreground/60 dark:text-foreground/60">
                      {edu.dateRange}
                    </p>
                    <h3 className="text-[8px] md:text-xs lg:text-base font-bold text-foreground dark:text-foreground">
                      {edu.school}
                    </h3>
                    <p className="text-[8px] md:text-xs lg:text-sm font-light italic text-foreground/70 dark:text-foreground/70">
                      {edu.degree}
                    </p>
                    {edu.bullets.length > 0 && (
                      <ul className="space-y-2 md:space-y-3 pt-2 md:pt-3">
                        {edu.bullets.map((bullet, bulletIndex) => (
                          <li
                            key={bulletIndex}
                            className="text-[7px] md:text-[11px] lg:text-sm leading-relaxed text-foreground/75 dark:text-foreground/75"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
