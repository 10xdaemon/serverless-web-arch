/**
 * Footer Component
 * Bottom section with contact information and social media links
 * Displays:
 * - Email for inquiries (with highlighted @ symbol)
 * - Social media links (LinkedIn, X/Twitter)
 *
 * Responsive layout: stacked on mobile, horizontal on desktop
 */
export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-8 md:py-16 border-t border-border dark:border-border gap-4 md:gap-0 transition-colors duration-300">
      {/* Contact email - main inquiry point */}
      <div className="flex-1 text-center md:text-left">
        <p className="text-xs md:text-2xl font-semibold leading-[120%] tracking-[-0.24px] md:tracking-[-0.48px]">
          <span className="text-foreground dark:text-foreground transition-colors duration-300">inquiries </span>
          <span className="text-[#EEC55B] dark:text-yellow-300 transition-colors duration-300">@</span>
          <span className="text-foreground dark:text-foreground transition-colors duration-300"> josiahdeleon.x@outlook.com</span>
        </p>
      </div>

      {/* Social media links - clickable icons with hover effects */}
      <div className="flex items-center gap-6">
        {/* LinkedIn icon - links to LinkedIn profile */}
        <a
          href="https://www.linkedin.com/in/josiah-de-leon-00x/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
          aria-label="LinkedIn"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_linkedin)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 3C24 1.34423 22.6558 0 21 0H3C1.34423 0 0 1.34423 0 3V21C0 22.6558 1.34423 24 3 24H21C22.6558 24 24 22.6558 24 21V3Z"
                fill="currentColor"
                fillOpacity="0.45"
              />
              <path
                d="M6.88157 8.37402H2.86157V20.466H6.88157V8.37402Z"
                fill="currentColor"
              />
              <path
                d="M4.899 2.54395C3.52364 2.54395 2.625 3.44816 2.625 4.6333C2.625 5.79355 3.49631 6.72271 4.8458 6.72271H4.87177C6.27347 6.72271 7.14595 5.79355 7.14595 4.6333C7.11994 3.44816 6.27356 2.54395 4.899 2.54395Z"
                fill="currentColor"
              />
              <path
                d="M16.7475 8.08984C14.6151 8.08984 13.66 9.26252 13.1252 10.0862V8.37419H9.1062C9.1595 9.50842 9.1062 20.4661 9.1062 20.4661H13.1251V13.7131C13.1251 13.3517 13.1511 12.9903 13.2576 12.732C13.5477 12.0101 14.2094 11.2623 15.3198 11.2623C16.7735 11.2623 17.3559 12.3716 17.3559 13.9964V20.4661H21.375V13.5319C21.375 9.81766 19.3919 8.08984 16.7475 8.08984Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_linkedin">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>

        {/* X (Twitter) icon - links to X profile */}
        <a
          href="https://x.com/JDL_exe"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
          aria-label="X (Twitter)"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.9 1.15283H22.582L14.54 10.3418L24 22.8478H16.595L10.791 15.2648L4.157 22.8478H0.469L9.069 13.0168L0 1.15283H7.593L12.834 8.08383L18.9 1.15283ZM17.607 20.6468H19.646L6.482 3.23883H4.292L17.607 20.6468Z"
              fill="currentColor"
              fillOpacity="0.45"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
}
