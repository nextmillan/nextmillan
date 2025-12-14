import { useRef, useEffect, useState, type FC } from "react";
import { Search, Compass, Zap, Activity } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Discovery Audit",
    description:
      "We deep-dive into your existing infrastructure, identifying bottlenecks, security gaps, and scalability limits before writing a single line of code.",
    icon: Search,
    color: "text-blue-400",
  },
  {
    id: 2,
    title: "Strategic Roadmap",
    description:
      "Our architects design a bespoke future-state system, prioritizing quick wins and long-term resilience aligned with your business goals.",
    icon: Compass,
    color: "text-violet-400",
  },
  {
    id: 3,
    title: "Precision Execution",
    description:
      "Elite tiger teams deploy the solution using agile methodologies, ensuring zero downtime and continuous delivery of value.",
    icon: Zap,
    color: "text-teal-400",
  },
  {
    id: 4,
    title: "Continuous Evolution",
    description:
      "Technology never stops. We provide 24/7 AI-driven monitoring and proactive optimization to keep you ahead of the curve.",
    icon: Activity,
    color: "text-electric-500",
  },
];

const Process: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on how much of the section has been scrolled
      // We want the animation to start when the section hits the top and end when it leaves
      // Total scrollable distance for the animation is height - windowHeight
      const totalScrollDistance = height - windowHeight;
      let currentScroll = -top;

      // Normalize progress between 0 and 1
      let p = currentScroll / totalScrollDistance;
      p = Math.max(0, Math.min(1, p));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Init
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Total rotation logic
  // We have 4 steps. We want to rotate so each step comes to the top (12 o'clock).
  // Step 1 starts at Top. Step 2 is at 90deg. Step 3 at 180deg. Step 4 at 270deg.
  // To bring Step 2 to Top, we rotate -90deg.
  // To bring Step 4 to Top, we rotate -270deg.
  // Let's allow a full 360 rotation for the feel of it.
  const maxRotation = 270;
  const rotation = progress * maxRotation;

  // Determine active step based on progress thresholds
  // 0.0 - 0.25: Step 1
  // 0.25 - 0.5: Step 2
  // etc.
  const activeStepIndex = Math.min(
    steps.length - 1,
    Math.floor(progress * steps.length)
  );

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-navy-950">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.08)_0%,transparent_70%)]"></div>
        <div className="absolute w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center h-full">
          {/* Section Title - Fades out as you scroll deep */}
          <div
            className="absolute top-8 md:top-16 left-0 right-0 text-center z-20 transition-all duration-500 transform"
            style={{
              opacity: Math.max(0, 1 - progress * 3),
              transform: `translateY(${progress * -50}px)`,
            }}
          >
            <h2 className="text-teal-400 font-bold tracking-widest uppercase text-xs mb-3">
              Our Protocol
            </h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-white">
              The Revolution Cycle
            </h3>
          </div>

          {/* The Rotating Machine */}
          <div className="relative w-[340px] h-[340px] md:w-[600px] md:h-[600px] flex items-center justify-center">
            {/* Central Static Core (The Portal) */}
            <div className="absolute z-30 w-56 h-56 md:w-80 md:h-80 rounded-full glass-panel border border-white/10 flex items-center justify-center text-center p-6 shadow-[0_0_80px_rgba(0,102,255,0.15)] backdrop-blur-xl">
              <div className="relative z-10">
                {steps.map((step, idx) => (
                  <div
                    key={step.id}
                    className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-out ${
                      idx === activeStepIndex
                        ? "opacity-100 transform translate-y-0 scale-100"
                        : "opacity-0 transform translate-y-4 scale-95 pointer-events-none"
                    }`}
                  >
                    <div
                      className={`mb-4 p-3 rounded-full bg-white/5 ${step.color} shadow-lg shadow-black/20`}
                    >
                      <step.icon className="w-8 h-8 md:w-10 md:h-10" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-[200px] md:max-w-[260px]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Rotating Outer Ring */}
            <div
              className="absolute w-full h-full rounded-full transition-transform duration-100 linear will-change-transform"
              style={{ transform: `rotate(-${rotation}deg)` }}
            >
              {/* Decorative Orbits */}
              <div className="absolute inset-0 rounded-full border border-dashed border-white/10 opacity-50"></div>
              <div className="absolute inset-8 rounded-full border border-white/5 opacity-30"></div>

              {/* Markers (Satellites) */}
              {steps.map((_, idx) => {
                // Position at 0, 90, 180, 270 degrees
                // CSS Rotation starts from 12 o'clock if we use specific transforms,
                // but normally 0deg is 3 o'clock.
                // To make index 0 start at 12 o'clock (Top), we need -90deg offset.
                const angleDeg = idx * 90 - 90;
                const isPassed = progress * 4 >= idx;

                return (
                  <div
                    key={idx}
                    className="absolute top-1/2 left-1/2 w-8 h-8 -ml-4 -mt-4 flex items-center justify-center z-20"
                    style={{
                      transform: `rotate(${angleDeg}deg) translate(170px) rotate(-${angleDeg}deg)`, // Mobile radius
                    }}
                  >
                    <div
                      className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 transition-all duration-500 ${
                        idx === activeStepIndex
                          ? "bg-teal-400 border-teal-400 shadow-[0_0_15px_#00D4AA] scale-125"
                          : isPassed
                          ? "bg-electric-600 border-electric-600 opacity-50"
                          : "bg-navy-900 border-slate-600"
                      }`}
                    ></div>
                  </div>
                );
              })}
            </div>

            {/* Desktop Radius Overrides via Style Injection */}
            <style>{`
                 @media (min-width: 768px) {
                   .md-radius-override > div {
                      transform: rotate(var(--angle)) translate(300px) rotate(calc(var(--angle) * -1)) !important;
                   }
                 }
               `}</style>

            {/* Re-rendering markers for proper responsive positioning hack */}
            <div
              className="absolute w-full h-full md-radius-override pointer-events-none"
              style={{ transform: `rotate(-${rotation}deg)` }}
            >
              {steps.map((_, idx) => (
                <div
                  key={`marker-${idx}`}
                  className="absolute top-1/2 left-1/2 w-0 h-0"
                  style={{ "--angle": `${idx * 90 - 90}deg` } as any}
                >
                  {/* This is the actual positioned element that moves based on CSS var */}
                  <div
                    className="absolute -ml-2 -mt-2 w-4 h-4 flex items-center justify-center transition-transform"
                    style={{
                      transform: `rotate(${
                        idx * 90 - 90
                      }deg) translate(170px) rotate(-${idx * 90 - 90}deg)`,
                    }}
                  >
                    {/* The Dot */}
                    <div
                      className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                        idx === activeStepIndex
                          ? "bg-teal-400 shadow-[0_0_15px_#00D4AA]"
                          : "bg-slate-700"
                      }`}
                    ></div>

                    {/* The Label (Only visible when active or close) */}
                    <div
                      className={`absolute left-8 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-bold uppercase tracking-wider transition-opacity duration-300 ${
                        idx === activeStepIndex
                          ? "opacity-100 text-teal-400"
                          : "opacity-0"
                      }`}
                    >
                      0{idx + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar / Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="w-px h-12 bg-gradient-to-b from-teal-400 to-transparent"></div>
            <span className="text-[10px] text-teal-400 uppercase tracking-[0.2em] animate-pulse">
              System Active
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
