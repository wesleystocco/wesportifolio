import { VideoBackground } from "@/components/background/VideoBackground";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { SplashScreen } from "@/components/sections/SplashScreen";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <VideoBackground />
      <div className="relative isolate min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-32">
          <Hero />
          <About />
        </main>
      </div>
    </>
  );
}
