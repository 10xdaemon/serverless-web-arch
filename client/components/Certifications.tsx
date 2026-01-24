/**
 * Certifications Component
 * Displays professional certifications and credentials
 * Shows logos of certification providers:
 * - Microsoft 365
 * - AWS IT Technician
 * - Google IT Support
 *
 * Logos are responsive and centered with flexbox layout
 */
export default function Certifications() {
  return (
    <section className="px-8 md:px-16 py-6 md:py-12 lg:py-16 flex flex-col items-center gap-6 md:gap-8">
      {/* Section title - "Professional Certifications in" */}
      <p className="text-center text-[11px] md:text-xl font-medium text-black/55 leading-[145%] tracking-[-0.055px] md:tracking-[-0.1px]">
        Professional Certifications in
      </p>

      {/* Certification logos - responsive grid of certification provider logos */}
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 lg:gap-36 opacity-75 max-w-5xl">
        {/* Microsoft Logo */}
        <div className="flex items-center justify-center p-2 md:p-4">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/cae79d53476b5f1932a05fdcdbf5f64375b321cc?width=222"
            alt="Microsoft 365"
            className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28"
          />
        </div>

        {/* AWS Logo */}
        <div className="flex items-center justify-center p-2 md:p-4">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/09a0aaf78e8c2bd0d216bf088dc8c3bba2b67b63?width=396"
            alt="AWS IT Technician"
            className="w-20 h-12 md:w-32 md:h-20 lg:w-[198px] lg:h-[124px]"
          />
        </div>

        {/* Google IT Support Logo */}
        <div className="flex items-center justify-center p-2 md:p-4">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/e33999055879544d2908c58bd1c0ed9298923f83?width=254"
            alt="Google IT Support"
            className="w-14 h-14 md:w-20 md:h-20 lg:w-32 lg:h-32"
          />
        </div>
      </div>
    </section>
  );
}
