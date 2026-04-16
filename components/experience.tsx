"use client";
import { projects } from "@/data/project.content";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

export const Experience = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [expanded, setExpanded] = useState<boolean[]>(
    new Array(projects.length).fill(false),
  );

  const [isjourneyExpanded, setIsJourneyExpanded] = useState(false);

  const setToggle = (index: number) => {
    setExpanded((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div className="w-full px-3 md:px-8">
      <div className="mt-10 font-semibold text-xs tracking-widest text-zinc-400">
        PROJECT EXPERIENCE
      </div>
      <div className="mt-4">
        <div className="flex flex-col">
          {projects.map((project, idx) => {
            const isExpanded = expanded[idx];
            return (
              <div key={idx} className="">
                <div className="flex items-center gap-3 mt-8">
                  <div>{project.title}</div>
                  <a target="_blank" href={project.ghLink}>
                    {theme === "dark" ? (
                      <Image
                        src={"/githubLight.svg"}
                        height={15}
                        width={15}
                        alt="g"
                      />
                    ) : (
                      <Image
                        src={"/githubDark.svg"}
                        height={15}
                        width={15}
                        alt="g"
                      />
                    )}
                  </a>
                  <Link
                    target="_blank"
                    href={project.link}
                    className="text-xs hover:text-neutral-100 underline underline-offset-2 text-slate-500 pr-2"
                  >
                    link
                  </Link>
                </div>
                <div
                  className={`w-full whitespace-pre-line dark:text-[#9ba1ae] md:pr-15 text-[#4c5564] text-sm mt-3 overflow-hidden transition-all duration-300 ease-out`}
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: !isExpanded ? 3 : "unset",
                    WebkitMaskImage: !isExpanded
                      ? "linear-gradient(to bottom, black 35%, transparent 100%)"
                      : "unset",
                  }}
                >
                  {project.description}
                </div>
                <div
                  className="inline-flex justify-center h-14 items-center gap-1 cursor-pointer"
                  onClick={() => setToggle(idx)}
                >
                  <div className="text-xs opacity-60 dark:text-[#9ba1ae] text-[#4c5564]">
                    {isExpanded ? "View Less" : "View More"}
                  </div>
                  {isExpanded ? (
                    <ChevronUp
                      size={11}
                      className="dark:text-[#9ba1ae] text-[#4c5564]"
                    />
                  ) : (
                    <ChevronDown
                      size={11}
                      className="dark:text-[#9ba1ae] text-[#4c5564]"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-15">
          <div className="uppercase dark:text-[#636c7e] text-[#7c838c] font-semibold text-xs tracking-wider">
            In Between These Experiences
          </div>
          <div
            className={`min-h-40 w-full border mt-7 rounded-lg dark:border-[#262c3a] ${!isjourneyExpanded ? "px-7 pt-7 pb-2" : "p-8 md:p-14"} transition-all duration-200`}
          >
            <div className="text-lg font-semibold">
              The Product Building Journey
            </div>
            <div
              className="text-sm dark:text-[#9ba1ae] text-[#4c5564] mt-3 gap-4"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: !isjourneyExpanded ? 3 : "unset",
                WebkitMaskImage: !isjourneyExpanded
                  ? "linear-gradient(to bottom, black 35%, transparent 100%)"
                  : "unset",
              }}
            >
              <p>
                I approach software development as a process of identifying
                friction in real systems and engineering solutions that remove
                it. Each product I build begins with a practical problem —
                something inefficient, slow, or overly complex — and evolves
                into a system designed for performance, reliability, and
                developer experience.
              </p>
              <p>
                My journey began with Shrtn, a URL shortening platform. While
                the idea seems simple, building it required solving backend
                challenges like generating collision-resistant short
                identifiers, designing fast redirect pipelines, and tracking
                analytics efficiently. Working on this project helped me
                understand how thoughtful data models and optimized request
                paths are critical for building scalable services.
              </p>
              <p>
                As I continued building applications, I realized that creating
                software is only part of the challenge — keeping it reliable in
                production is just as important. This led me to develop Trackly,
                an infrastructure monitoring platform for tracking uptime,
                latency, and service health in real time. I engineered
                concurrent health checks, a status logging pipeline, and an
                automated alerting system. I also implemented a warmup mechanism
                that periodically pings services to mitigate serverless cold
                starts and reduce latency spikes.
              </p>
              <p>
                While working across projects, I noticed how much time
                developers spend setting up development environments before
                writing actual code. Configuring Docker containers, connecting
                APIs, and enabling hot reloading often involved repetitive
                setup. To eliminate this friction, I built QuickReactGO, a CLI
                tool that scaffolds a fully containerized React and Go
                application with a single command. The tool standardizes
                development environments and allows engineers to move directly
                from idea to running application.
              </p>
              <p>
                Wanting to explore more complex distributed systems, I built
                Flow, a real-time communication platform supporting messaging,
                audio calls, and video conferencing. The platform uses a
                WebSocket-based backend for low-latency messaging and integrates
                WebRTC for peer-to-peer media streaming. Building Flow pushed me
                to think deeply about persistent connections, real-time state
                synchronization, and responsive user experiences.
              </p>
              <p>
                Most recently, I explored how AI can improve developer workflows
                by building Prwise, an AI-assisted pull request review platform.
                The system analyzes code changes automatically and surfaces
                actionable feedback before human reviewers begin reviewing the
                code, helping teams maintain consistent standards while reducing
                review delays.
              </p>
              <p>
                Across these products, a consistent theme shapes my engineering
                approach: reducing developer friction, designing systems that
                scale reliably, and automating repetitive processes. Each
                project represents a deeper exploration into modern software
                architecture from backend services and infrastructure monitoring
                to developer tooling, real-time systems, and intelligent
                development workflows.
              </p>
            </div>
            <div
              className="inline-flex justify-center h-14 items-center gap-1 cursor-pointer"
              onClick={() => setIsJourneyExpanded(!isjourneyExpanded)}
            >
              <div className="text-xs opacity-60 dark:text-[#9ba1ae] text-[#4c5564]">
                {isjourneyExpanded ? "View Less" : "View More"}
              </div>
              {isjourneyExpanded ? (
                <ChevronUp
                  size={11}
                  className="dark:text-[#9ba1ae] text-[#4c5564]"
                />
              ) : (
                <ChevronDown
                  size={11}
                  className="dark:text-[#9ba1ae] text-[#4c5564]"
                />
              )}
            </div>
          </div>
          <div className="mt-16 dark:text-[#636c7e] text-[#7c838c] uppercase text-xs tracking-wide font-semibold">
            Education
          </div>
          <div className="flex flex-col md:flex-row md:justify-between mt-5">
            <div className="flex flex-col">
              <div className="font-semibold">
                Vellore Institute of Technology, Vellore
              </div>
              <div className="text-sm mt-2 dark:text-[#9ba1ae] text-[#4c5564] order-3 md:order-0">
                2021-2025
              </div>
            </div>
            <div className="text-sm dark:text-[#636c7e] text-[#7c838c] order-2 md:order-0">
              Computer Science
            </div>
          </div>
          <div className="mt-10">
            <div className="uppercase text-xs mb-3 font-semibold dark:text-[#636c7e] text-[#7c838c] tracking-wide">
              github contributions
            </div>
            <div className="px-3 pt-5">
              <GitHubCalendar
                username="akdevsaha-dev"
                blockSize={10}
                fontSize={12}
                theme={
                  theme === "dark"
                    ? undefined
                    : {
                        light: [
                          "#ebedf0",
                          "#9be9a8",
                          "#40c463",
                          "#30a14e",
                          "#216e39",
                        ],
                        dark: [
                          "#ebedf0",
                          "#9be9a8",
                          "#40c463",
                          "#30a14e",
                          "#216e39",
                        ],
                      }
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
