import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

/**
 * Header Component
 * Displays the portfolio header with navigation
 * - Logo on the left
 * - Dark mode toggle in the center
 * - Navigation links on the right (Contact, Resume)
 * Includes hover effects for better UX
 */
export default function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between items-center px-8 lg:px-16 py-6 lg:py-10 opacity-75">
      {/* Logo - Personal brand image with rounded corners */}
      <div className="flex-shrink-0">
        <img
          src="/assets/jdl.png"
          alt="jdl logo"
          className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 opacity-80 rounded-[37px]"
        />
      </div>

      {/* Dark Mode Toggle - Center */}
      <div className="flex-1 flex justify-center">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-slate-200 hover:to-slate-100 dark:hover:from-slate-800 dark:hover:to-slate-700"
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <Sun className="w-6 h-6 text-orange-400 transition-transform duration-300 hover:scale-110" />
          ) : (
            <Moon className="w-6 h-6 text-yellow-300 transition-transform duration-300 hover:scale-110" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-6 md:gap-11">
        <a
          href="https://www.linkedin.com/in/josiah-de-leon-00x/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm md:text-base font-medium text-black dark:text-white capitalize hover:opacity-70 transition-opacity"
        >
          Contact
        </a>
        <a
          href="/assets/resume_01.pdf"
          download="Josiah_De_Leon_Resume.pdf"
          className="flex items-center gap-2 text-sm md:text-base font-medium text-black dark:text-white capitalize hover:opacity-70 transition-opacity"
        >
          <span>resume</span>
          <img
            src="/assets/file.png"
            alt="resume icon"
            className="w-5 h-5 md:w-6 md:h-6"
          />
        </a>
      </nav>
    </header>
  );
}
