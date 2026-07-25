import futuristicBg from "../../assets/futuristicBg.png"

function BackgroundLayout({
  children,
  className = "",
}) {
  return (
    <main
      className={`relative min-h-screen overflow-x-hidden bg-[#05050B] text-white ${className}`}
    >
      {/* ================= FIXED BACKGROUND ================= */}

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

        {/* Base */}
        <div className="absolute inset-0 bg-[#05050B]" />

        {/* Background Image */}
        <img
          src={futuristicBg}
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
            opacity-100
            select-none
          "
          draggable={false}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#05050B]/45" />

        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Stars */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* ===== LIGHTING ===== */}

        {/* Left Glow */}
        <div
          className="
            absolute
            -left-52
            top-[-120px]
            h-[650px]
            w-[650px]
            rounded-full
            bg-violet-500/15
            blur-[180px]
          "
        />

        {/* Hero Glow */}
        <div
          className="
            absolute
            left-1/2
            top-[18%]
            h-[380px]
            w-[380px]
            -translate-x-1/2
            rounded-full
            bg-violet-500/12
            blur-[120px]
          "
        />

        {/* Right Rim */}
        <div
          className="
            absolute
            right-[-150px]
            top-[15%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-500/10
            blur-[160px]
          "
        />

        {/* Bottom Horizon */}
        <div
          className="
            absolute
            left-1/2
            bottom-[-120px]
            h-[420px]
            w-[1200px]
            -translate-x-1/2
            rounded-full
            bg-violet-500/10
            blur-[160px]
          "
        />

        {/* Bottom Fade */}
        <div
          className="
            absolute
            bottom-0
            left-0
            h-[300px]
            w-full
            bg-gradient-to-t
            from-[#05050B]
            via-[#05050B]/30
            to-transparent
          "
        />

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 35%, rgba(5,5,11,.35) 100%)",
          }}
        />

      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10">
        {children}
      </div>
    </main>
  );
}

export default BackgroundLayout;