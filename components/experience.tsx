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
      <div className="mt-7 font-semibold text-xs tracking-widest text-zinc-400">
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
                  <a target="_blank" href={project.link}>
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
                    href={""}
                    className="text-xs hover:text-neutral-100 underline underline-offset-2 text-slate-500 pr-2"
                  >
                    link
                  </Link>
                </div>
                <div
                  className={`w-full dark:text-[#9ba1ae] pr-15 text-[#4c5564] text-sm mt-3 overflow-hidden transition-all duration-300 ease-out`}
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
            className={`min-h-40 w-full border mt-7 rounded-lg dark:border-[#262c3a] ${!isjourneyExpanded ? "px-7 pt-7 pb-2" : "p-14"} transition-all duration-200`}
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
                I've been building and experimenting on the product side for a
                long time. Each previous product always feels naive in
                hindsight, but looking back, I can see they were incrementally
                better, each iteration teaching me something new about users,
                infrastructure, and what it takes to build something people
                actually want.
              </p>
              <p>
                It started with MetaWiper during my sophomore year, a tool that
                cleaned image metadata. No one would use it, but I was proud. It
                was my first real attempt at shipping something complete.
              </p>
              <p>
                Next came Stockic, a news app where I spent months doing serious
                infrastructure work. This was where I learned to build systems
                that could scale, not just features that looked good.
              </p>
              <p>
                Then I worked on Gloss Card, and for the first time, a customer
                actually wanted to buy it for their product. That validation,
                knowing someone saw enough value to pay, was a turning point.
              </p>
              <p>
                After that, I built NeuraLeap, where I had the most meaningful
                user interactions yet, HRs from established firms. I worked on
                data pipelines capable of handling 50 million LinkedIn profiles
                and processing them with AI. The scale was different, the stakes
                were higher, and the technical challenges forced me to level up.
              </p>
              <p>
                Most recently, I worked on Meteor, an AI SEO toolkit at
                Entrepreneurs First. This time, my product was being used by 6
                YC-backed companies. Real users. Real traction. Real feedback
                loops.
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
          <div className="flex justify-between mt-5">
            <div>
              <div className="font-semibold">
                Vellore Institute of Technology, Vellore
              </div>
              <div className="text-sm mt-2 dark:text-[#9ba1ae] text-[#4c5564]">
                2021-2025
              </div>
            </div>
            <div className="text-sm dark:text-[#636c7e] text-[#7c838c]">
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
                blockSize={11}
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
