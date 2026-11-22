import Link from "next/link";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  variant?: "light" | "dark";
  light?: boolean; // Backwards compatibility for boolean prop
  stacked?: boolean;
}

export default function Logo({
  className = "",
  iconOnly = false,
  variant,
  light = false,
  stacked = false,
}: LogoProps) {
  // Determine if light theme styling is active
  const isLight = variant ? variant === "light" : light;

  const monogram = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-full h-full aspect-square"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logoBurgundyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8A2F4D" />
          <stop offset="50%" stopColor="#6D1A36" />
          <stop offset="100%" stopColor="#420D20" />
        </linearGradient>
        <linearGradient id="logoSilverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#E5E7EB" />
          <stop offset="100%" stopColor="#B9BEC7" />
        </linearGradient>
      </defs>
      {/* Burgundy Squircle Shield */}
      <rect width="100" height="100" rx="28" fill="url(#logoBurgundyGrad)" />
      {/* Silver Outer Track Ring */}
      <rect
        x="4"
        y="4"
        width="92"
        height="92"
        rx="24"
        fill="none"
        stroke="url(#logoSilverGrad)"
        strokeWidth="3"
        opacity="0.9"
      />
      {/* S Monogram Centerpiece */}
      <path
        d="M 68 28
           C 64 24, 52 23, 42 25
           C 32 27, 28 35, 29 42
           C 30 50, 40 52, 54 55
           C 68 58, 73 63, 71 71
           C 69 79, 58 81, 46 80
           C 36 79, 30 74, 27 69"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="9"
        strokeLinecap="round"
      />
      {/* Precision Silver Anchor Dots */}
      <circle cx="68" cy="28" r="4.5" fill="url(#logoSilverGrad)" />
      <circle cx="27" cy="69" r="4.5" fill="url(#logoSilverGrad)" />
    </svg>
  );

  if (iconOnly) {
    return (
      <Link
        href="/"
        className={`inline-flex items-center select-none group shrink-0 ${className}`}
        aria-label="Sangeetha Safety Nets Home"
      >
        <div className="relative h-10 w-10 sm:h-11 sm:w-11 aspect-square transition-transform duration-300 group-hover:scale-105 shrink-0">
          {monogram}
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 select-none group shrink-0 ${className}`}
      aria-label="Sangeetha Safety Nets Home"
    >
      {/* Fixed aspect ratio monogram badge */}
      <div className="relative h-10 w-10 sm:h-11 sm:w-11 aspect-square shrink-0 transition-transform duration-300 group-hover:scale-105">
        {monogram}
      </div>

      {/* Typography with zero layout shift */}
      <div className={`flex flex-col ${stacked ? "text-center" : "text-left"} shrink-0`}>
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`text-base sm:text-lg font-black tracking-tight ${
              isLight ? "text-white" : "text-[#6D1A36]"
            }`}
          >
            SANGEETHA
          </span>
          <span className="text-base sm:text-lg font-black tracking-tight text-[#8A2F4D]">
            SAFETY
          </span>
        </div>
        <span
          className={`text-[10px] font-bold tracking-widest uppercase mt-0.5 ${
            isLight ? "text-[#B9BEC7]" : "text-[#5A5A62]"
          }`}
        >
          Nets &amp; Invisible Grills
        </span>
      </div>
    </Link>
  );
}
