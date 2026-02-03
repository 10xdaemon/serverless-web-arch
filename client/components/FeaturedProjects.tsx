/**
 * FeaturedProjects Component
 * Showcases portfolio projects in a horizontal scrollable card layout
 * Each card displays:
 * - Project screenshot/thumbnail
 * - Tool/tech stack icons
 * - Project title
 * - Technologies used
 *
 * Mobile-friendly with horizontal scroll, desktop shows all cards at once
 */
export default function FeaturedProjects() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 flex flex-col gap-8 md:gap-12">
      {/* Section header - title and inspirational quote */}
      <div className="flex flex-col gap-4">
        <h2 className="text-base md:text-[30px] lg:text-5xl font-bold text-foreground dark:text-foreground leading-[120%] tracking-[-0.32px] md:tracking-[-0.6px] lg:tracking-[-0.96px] text-center md:text-left transition-colors duration-300">
          Featured Projects
        </h2>
        <p className="text-[11px] md:text-xl font-medium text-foreground/55 dark:text-foreground/55 leading-[145%] tracking-[-0.055px] md:tracking-[-0.1px] max-w-[334px] md:max-w-none text-center md:text-left transition-colors duration-300">
          "You don't learn to walk by following rules. You learn by doing and falling
          over"—Richard Branson
        </p>
      </div>

      {/* Project cards - horizontal scrollable container on mobile, flex row on desktop */}
      <div className="flex gap-6 md:gap-8 overflow-x-auto pb-4 md:pb-0 scrollbar-hide px-4 md:px-8 lg:px-0">
        {/* Project Card 1 - Serverless Web Architecture with AWS */}
        <a
          href="https://www.linkedin.com/feed/update/urn:li:activity:7421011724750839809/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-[336px] min-w-[320px] max-w-[388px] min-h-[280px] p-8 pb-2 flex flex-col gap-2 rounded-2xl border border-border dark:border-border bg-card dark:bg-card shadow-[0_4px_8px_0_rgba(0,0,0,0.02),0_12px_32px_0_rgba(0,0,0,0.04)] dark:shadow-[0_4px_8px_0_rgba(0,0,0,0.3),0_12px_32px_0_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_12px_24px_0_rgba(0,0,0,0.08),0_20px_48px_0_rgba(0,0,0,0.12)] dark:hover:shadow-[0_12px_24px_0_rgba(0,0,0,0.4),0_20px_48px_0_rgba(0,0,0,0.5)] hover:border-border/80 dark:hover:border-border/80 cursor-pointer"
        >
          <img
            src="/assets/cloud_scrn.png"
            alt="Serverless Web Architecture project"
            className="w-full aspect-[283/187] rounded-xl bg-background dark:bg-background shadow-[0_4px_8px_0_rgba(0,0,0,0.02),0_12px_32px_0_rgba(0,0,0,0.04)] dark:shadow-[0_4px_8px_0_rgba(0,0,0,0.3),0_12px_32px_0_rgba(0,0,0,0.4)] object-cover transition-colors duration-300"
          />
          <div className="flex items-center gap-2 mt-2">
            <img
              src="/assets/aws.png"
              alt="AWS"
              className="w-[52px] h-[43px] rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="text-sm font-semibold leading-[150%] tracking-[-0.08px] text-foreground dark:text-foreground transition-colors duration-300">
                Serverless Web Architecture
              </h3>
              <p className="text-xs font-medium text-foreground/55 dark:text-foreground/55 leading-[140%] tracking-[-0.06px] transition-colors duration-300">
                AWS•Figma•React•Python
              </p>
            </div>
          </div>
        </a>

        {/* Project Card 2 - Placeholder for upcoming projects */}
        <div className="flex-shrink-0 w-[336px] min-w-[320px] max-w-[388px] min-h-[280px] p-8 pb-2 flex flex-col gap-2 rounded-2xl border border-border dark:border-border bg-card dark:bg-card shadow-[0_4px_8px_0_rgba(0,0,0,0.02),0_12px_32px_0_rgba(0,0,0,0.04)] dark:shadow-[0_4px_8px_0_rgba(0,0,0,0.3),0_12px_32px_0_rgba(0,0,0,0.4)] transition-colors duration-300">
          <p className="text-lg font-medium text-foreground dark:text-foreground leading-[145%] tracking-[-0.09px] transition-colors duration-300">
            coming soon.
          </p>
        </div>
      </div>
    </section>
  );
}
