export function VideoBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0d0809]">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-55"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,8,9,0.25),rgba(13,8,9,0.86)_68%,rgba(13,8,9,0.98))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(191,36,109,0.18),transparent_26%)]" />
      <div className="mesh-overlay absolute inset-0 opacity-35" />
      <div className="absolute -left-20 top-24 h-56 w-56 rounded-full bg-[#bf246d]/18 blur-3xl" />
      <div className="absolute bottom-12 right-0 h-72 w-72 rounded-full bg-[#a6122d]/16 blur-3xl" />
    </div>
  );
}
