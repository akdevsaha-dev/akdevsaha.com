import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { FloatBar } from "@/components/float-bar";
import { TechStack } from "@/components/tech-stack";
import { ModeToggle } from "@/components/toggle";
export default function Home() {
  return (
    <div className="w-full flex flex-col items-center pb-40">
      <div className="flex w-full h-16 justify-end fixed pt-6 pr-6">
        <ModeToggle />
      </div>
      <div className="max-w-3xl w-full pt-16">
        <About />
        <Experience />
        <TechStack />
      </div>
      <FloatBar />
    </div>
  );
}
