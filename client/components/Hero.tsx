import { useState } from "react";
import AboutModal from "./AboutModal";
import { useVisitorCount } from "./useVisitorCount.ts";

/**
 * Hero Component
 * Main introduction section featuring:
 * - NYC skyline background image with dark overlay
 * - Welcome message ("Hey! I'm Josiah...")
 * - Call-to-action "more" button with gold gradient and hover effects
 * - Fixed position visitor counter in top-right (shows user count with pulsing green dot)
 *
 * The visitor counter stays fixed in viewport while scrolling
 */
export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const { data, isLoading, isError } = useVisitorCount();

  return (
    <section className="relative mx-4 md:mx-8 lg:mx-16 rounded-[20px] overflow-hidden">
      {/* Background container with NYC skyline image and dark gradient overlay */}
      <div
        className="relative w-full h-[253px] md:h-[518px] lg:h-[541px] bg-cover bg-center flex flex-col items-center justify-center gap-6 md:gap-28 lg:gap-[137px] px-6 md:px-8 pt-12 md:pt-28 lg:pt-[119px]"
        style={{
          backgroundImage: 'url(/assets/city-skyline.jpg)',
          backgroundColor: '#615d5dff',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        
        {/* Visitor Counter - Fixed Position */}
        <div className="fixed top-4 md:top-6 lg:top-8 right-4 md:right-8 lg:right-16 flex items-center gap-2 md:gap-3 px-2 md:px-4 py-1.5 md:py-2 rounded-[30px] bg-white/82 z-40">
          <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#A6FF82] animate-pulse-dot flex-shrink-0" />
          <span className="text-[8px] md:text-sm font-medium text-gray-500 opacity-50 whitespace-nowrap">
            Viewers:
          </span>
          <span className="text-[8px] md:text-sm font-medium text-gray-500 opacity-50">
            {isLoading ? "..." : isError ? "!" : data?.views ?? 0}
          </span>
        </div>

        {/* Hero Text - Hidden when modal is open */}
        <div className={`text-center max-w-4xl relative z-10 transition-opacity duration-300 ${showModal ? 'opacity-0' : 'opacity-100'}`}>
          <h1 className="text-2xl md:text-[38px] lg:text-[44px] font-bold text-white leading-[110%] tracking-[-0.48px] md:tracking-[-0.76px] lg:tracking-[-0.88px]">
            Hey! I'm Josiah,
            <br />
            CS Student from
            <br />
            New York📍
          </h1>
        </div>

        {/* CTA Button - Hidden when modal is open */}
        <div className={`relative z-10 group cursor-pointer transition-opacity duration-300 ${showModal ? 'opacity-0' : 'opacity-100'}`}>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 md:px-6 py-2 md:py-3 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFC700] hover:from-[#FFED4E] hover:to-[#FFD700] transition-all duration-300 ease-out shadow-lg hover:shadow-xl active:scale-95"
          >
            <span className="text-xs md:text-lg font-bold text-black leading-[110%] tracking-tight">
              more.
            </span>
          </button>
          {/* Arrow */}
          <svg
            className="absolute left-1/2 -translate-x-1/2 -top-6 md:-top-8 w-5 h-5 md:w-6 md:h-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 19V5M5 12l7-7 7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Modal - Only shows within hero boundaries */}
        {showModal && <AboutModal isOpen={showModal} onClose={() => setShowModal(false)} />}
      </div>
    </section>
  );
}
