"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const TechStack = () => {
  const [isFullStack, setFullStack] = useState(false);
  return (
    <div className="px-3 md:px-8 mt-20">
      <div className="uppercase text-xs dark:text-[#636c7e] text-[#7c838c] font-semibold tracking-wide">
        tech stack
      </div>
      <div className="mt-6 text-lg tracking-wide dark:text-[#9ba1ae] text-[#4c5564]">
        I'm a generalist at heart who can build with anything, but here's the
        core stack I've spent the most time with:
      </div>
      <div className="flex justify-end mt-7 dark:text-[#9ba1ae] cursor-default text-[#808389] hover:text-black dark:hover:text-white transition-all duration-500 font-semibold">
        <div
          onClick={() => {
            setFullStack(!isFullStack);
          }}
          className="inline-flex uppercase text-xs tracking-widest items-center gap-3 "
        >
          {isFullStack ? <div>show less</div> : <div>view full stack</div>}
          {isFullStack ? (
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
      <div className="relative mt-10 overflow-hidden">
        {/* Marquee */}
        <div
          className={`transition-all duration-500 ease-out ${
            isFullStack
              ? "opacity-0 translate-y-4 pointer-events-none"
              : "opacity-100 translate-y-0"
          }`}
        >
          <div className="overflow-hidden w-full">
            <div className="scroll-content">
              <div className="flex gap-8">
                <img
                  src="https://cdn.simpleicons.org/javascript?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/react?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/postgresql?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/mongodb?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/next.js/green?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/typescript?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/redis?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/docker?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/framer?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/tailwindcss?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/shadcnui/green?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/go?viewbox=auto&size=2   0"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/github/gray?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/vercel/gray?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/nginx?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/git?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
              </div>
              <div className="flex gap-8">
                <img
                  src="https://cdn.simpleicons.org/javascript?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/react?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/postgresql?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/mongodb?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/next.js/green?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/typescript?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/redis?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/docker?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/framer?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/tailwindcss?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/shadcnui/green?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/go?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/github/gray?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/vercel/gray?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/nginx?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
                <img
                  src="https://cdn.simpleicons.org/git?viewbox=auto&size=30"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`transition-all duration-700 ease-in-out ${
            isFullStack
              ? "min-h-150 opacity-100 translate-y-0 mt-4"
              : "max-h-0 opacity-0 -translate-y-4"
          }`}
        >
          <div className="text-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 min-h-100 dark:text-[#9fa7b6] text-[#626770]">
            <div className=" ">
              <div className="uppercase border-b text-xs pb-2 dark:text-[#595e68] text-[#bbbdc2] tracking-widest font-semibold dark:border-b-[#2a2b2c] border-b-[#e6e9ef]">
                Languages
              </div>
              <div className="mt-4 space-y-2 font-md">
                <div className="flex gap-3 hover:border dark:border-[#2a2b2c] border-[#e6e9ef] px-2 h-10 hover:dark:bg-white/2 hover:bg-black/2  rounded-md group items-center">
                  <img
                    src="https://cdn.simpleicons.org/go?viewbox=auto&size=10"
                    className="grayscale transition duration-300 dark:brightness-75 group-hover:grayscale-0 group-hover:brightness-100 "
                  />
                  <div className="text-sm group-hover:dark:text-white group-hover:text-black transition-colors duration-300">
                    Go
                  </div>
                </div>
                <div className="flex gap-3 hover:border dark:border-[#2a2b2c] border-[#e6e9ef] px-2 h-10 hover:bg-white/2 rounded-md group items-center">
                  <img
                    src="https://cdn.simpleicons.org/javascript?viewbox=auto&size=20"
                    className="grayscale transition duration-300 brightness-40 group-hover:grayscale-0 group-hover:brightness-100 "
                  />
                  <div className="text-sm group-hover:dark:text-white group-hover:text-black">
                    JavaScript
                  </div>
                </div>
                <div className="flex gap-3 hover:border dark:border-[#2a2b2c] border-[#e6e9ef] px-2 h-10 hover:bg-white/2 rounded-md group items-center">
                  <img
                    src="https://cdn.simpleicons.org/typescript?viewbox=auto&size=20"
                    className="grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition duration-300"
                  />
                  <div className="text-sm group-hover:dark:text-white group-hover:text-black">
                    TypeScript
                  </div>
                </div>
                <div className="flex gap-3 hover:border dark:border-[#2a2b2c] border-[#e6e9ef]  px-2 h-10 hover:bg-white/2 rounded-md group items-center">
                  <img
                    src="https://cdn.simpleicons.org/cplusplus?viewbox=auto&size=20"
                    className="grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition duration-300"
                  />
                  <div className="text-sm group-hover:dark:text-white group-hover:text-black">
                    C++
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="uppercase border-b tracking-wider text-xs font-semibold pb-2 dark:text-[#595e68] text-[#bbbdc2] dark:border-b-[#2a2b2c] border-b-[#e6e9ef]">
                Frontend
              </div>
              <div className="mt-4 space-y-2  font-md">
                <div className="flex gap-3 hover:border dark:border-[#2a2b2c] border-[#e6e9ef] px-2 h-10 hover:bg-white/2  rounded-md group items-center">
                  <img
                    src="https://cdn.simpleicons.org/react?viewbox=auto&size=20"
                    className="grayscale brightness-75 group-hover:grayscale-0 transition duration-300 group-hover:brightness-100 "
                  />
                  <div className="text-sm group-hover:dark:text-white group-hover:text-black transition-colors duration-300">
                    React
                  </div>
                </div>
                <div className="flex gap-3 hover:border dark:border-[#2a2b2c] border-[#e6e9ef px-2 h-10 hover:bg-white/2  rounded-md group items-center">
                  <img
                    src="https://cdn.simpleicons.org/nextdotjs/gray?viewbox=auto&size=20"
                    className="grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition duration-200"
                  />
                  <div className="text-sm group-hover:dark:text-white group-hover:text-black transition-colors duration-300">
                    Next.js
                  </div>
                </div>
                <div className="flex gap-3 hover:border dark:border-[#2a2b2c] border-[#e6e9ef px-2 h-10 hover:bg-white/2  rounded-md group items-center">
                  <img
                    src="https://cdn.simpleicons.org/tailwindcss?viewbox=auto&size=15"
                    className="grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition duration-200"
                  />
                  <div className="text-sm group-hover:dark:text-white group-hover:text-black transition-colors duration-300">
                    Tailwind CSS
                  </div>
                </div>
                <div className="flex gap-3 hover:border dark:border-[#2a2b2c] border-[#e6e9ef px-2 h-10 hover:bg-white/2  rounded-md group items-center">
                  <img
                    src="https://cdn.simpleicons.org/shadcnui/gray?viewbox=auto&size=20"
                    className="grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition duration-200"
                  />
                  <div className="text-sm group-hover:dark:text-white group-hover:text-black transition-colors duration-300">
                    Shadcn UI
                  </div>
                </div>
                <div className="flex gap-3 hover:border dark:border-[#2a2b2c] border-[#e6e9ef px-2 h-10 hover:bg-white/2  rounded-md group items-center">
                  <img
                    src="https://cdn.simpleicons.org/framer?viewbox=auto&size=20"
                    className="grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition duration-200"
                  />
                  <div className="text-sm group-hover:dark:text-white group-hover:text-black transition-colors duration-300">
                    Framer Motion
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="uppercase tracking-wider border-b dark:text-[#595e68] text-[#bbbdc2] text-xs font-semibold pb-2 dark:border-b-[#2a2b2c] border-b-[#e6e9ef]">
                Backend & DB
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex gap-3 hover:border dark:border-[#2a2b2c] border-[#e6e9ef px-2 h-10 hover:bg-white/2  rounded-md group items-center">
                  <img
                    src="https://cdn.simpleicons.org/trpc?viewbox=auto&size=20"
                    className="grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition duration-200"
                  />
                  <div className="text-sm group-hover:dark:text-white group-hover:text-black transition-colors duration-300">
                    tRPC
                  </div>
                </div>
                <div className="flex gap-3 hover:border dark:border-[#2a2b2c] border-[#e6e9ef px-2 h-10 hover:bg-white/2  rounded-md group items-center">
                  <img
                    src="https://cdn.simpleicons.org/nodedotjs?viewbox=auto&size=20"
                    className="grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition duration-200"
                  />
                  <div className="text-sm group-hover:dark:text-white group-hover:text-black transition-colors duration-300">
                    Node.js
                  </div>
                </div>
                <div className="flex gap-3 hover:border dark:border-[#2a2b2c] border-[#e6e9ef px-2 h-10 hover:bg-white/2  rounded-md group items-center">
                  <img
                    src="https://cdn.simpleicons.org/postgresql?viewbox=auto&size=22"
                    className="grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition duration-200"
                  />
                  <div className="text-sm group-hover:dark:text-white group-hover:text-black transition-colors duration-300">
                    PostgreSQL
                  </div>
                </div>
                <div className="flex gap-3 hover:border dark:border-[#2a2b2c] border-[#e6e9ef px-2 h-10 hover:bg-white/2  rounded-md group items-center">
                  <img
                    src="https://cdn.simpleicons.org/mongodb?viewbox=auto&size=20"
                    className="grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition duration-200"
                  />
                  <div className="text-sm group-hover:dark:text-white group-hover:text-black transition-colors duration-300">
                    MongoDB
                  </div>
                </div>
                <div className="flex gap-3 hover:border dark:border-[#2a2b2c] border-[#e6e9ef px-2 h-10 hover:bg-white/2  rounded-md group items-center">
                  <img
                    src="https://cdn.simpleicons.org/redis?viewbox=auto&size=20"
                    className="grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition duration-200"
                  />
                  <div className="text-sm group-hover:dark:text-white group-hover:text-black transition-colors duration-300">
                    Redis
                  </div>
                </div>
                <div className="flex gap-3 hover:border dark:border-[#2a2b2c] border-[#e6e9ef px-2 h-10 hover:bg-white/2  rounded-md group items-center">
                  <img
                    src="https://cdn.simpleicons.org/docker?viewbox=auto&size=20"
                    className="grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition duration-200"
                  />
                  <div className="text-sm group-hover:dark:text-white group-hover:text-black transition-colors duration-300">
                    Docker
                  </div>
                </div>
                <div className="flex gap-3 hover:border dark:border-[#2a2b2c] border-[#e6e9ef px-2 h-10 hover:bg-white/2  rounded-md group items-center">
                  <img
                    src="https://cdn.simpleicons.org/nginx?viewbox=auto&size=20"
                    className="grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition duration-200"
                  />
                  <div className="text-sm group-hover:dark:text-white group-hover:text-black transition-colors duration-300">
                    Nginx
                  </div>
                </div>
              </div>
            </div>
            {/* New Infra & Tools column */}
            <div className="">
              <div className="uppercase tracking-wider border-b dark:text-[#595e68] text-[#bbbdc2] text-xs font-semibold pb-2 dark:border-b-[#2a2b2c] border-b-[#e6e9ef]">
                Infra & Tools
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex gap-3 hover:border  dark:border-[#2a2b2c] border-[#e6e9ef] px-2 h-10 hover:bg-white/2 rounded-md group items-center">
                  <img
                    src="https://cdn.simpleicons.org/github/gray?viewbox=auto&size=20"
                    className="grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition duration-200"
                  />
                  <div className="text-sm group-hover:dark:text-white group-hover:text-black transition-colors duration-300">
                    GitHub
                  </div>
                </div>
                <div className="flex gap-3 hover:border dark:border-[#2a2b2c] border-[#e6e9ef] px-2 h-10 hover:bg-white/2 rounded-md group items-center">
                  <img
                    src="https://cdn.simpleicons.org/vercel/gray?viewbox=auto&size=20"
                    className="grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition duration-200"
                  />
                  <div className="text-sm group-hover:dark:text-white group-hover:text-black transition-colors duration-300">
                    Vercel
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
