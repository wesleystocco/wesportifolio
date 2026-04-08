export function VideoBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0d0809]">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-42"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,8,9,0.38),rgba(13,8,9,0.88)_68%,rgba(13,8,9,0.98))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(208,91,132,0.1),transparent_26%)]" />
      <div className="mesh-overlay absolute inset-0 opacity-22" />
      <div className="absolute -left-20 top-24 h-56 w-56 rounded-full bg-[#d05b84]/10 blur-3xl" />
      <div className="absolute bottom-12 right-0 h-72 w-72 rounded-full bg-[#8f1f3f]/10 blur-3xl" />
    </div>
  );
}
