"use client";
import { Globe, Moon, SunMedium } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const words = ["Backends", "Frontend", "WebApps"];
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen w-full bg-[#e9e9e0] text-[#454228] dark:text-neutral-100  dark:bg-[#0e0e0e] flex justify-center items-center">
      <div className="min-h-screen md:w-[55%] w-[90%] bg-[#f1f0e6] dark:bg-[#121111] px-8">
        <motion.nav
          initial={{
            opacity: 0,
            y: -50,
          }}
          animate={{
            opacity: 100,
            y: 0,
            transition: { duration: 0.3 },
          }}
          className="flex sticky top-0 justify-between  h-20 items-center"
        >
          <div className="h-14 w-14 rounded-full bg-black dark:bg-neutral-400 "></div>
          <div className="flex gap-8 font-semibold text-sm ">
            <Link href={"/"}>home</Link>
            <Link href={"/"}>blog</Link>
            <button onClick={toggleTheme}>
              {theme === "dark" ? (
                <SunMedium className="bg-neutral-200 text-black" />
              ) : (
                <Moon />
              )}
            </button>
          </div>
        </motion.nav>
        <div className="mt-10 font-extrabold text-6xl subpixel-antialiased">
          Hi,{" "}
          <motion.span
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            }}
            className="inline-block"
          >
            Akdev here.
          </motion.span>
        </div>
        <div className="mt-4 text-lg font-bold">
          <span className="dark:text-[#ffffff95]">I build </span>
          <motion.span
            key={index}
            initial={{
              opacity: 0,
              scaleY: 0.7,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scaleY: 1,
              filter: "blur(0.6px)",
            }}
            exit={{
              opacity: 0,
              scaleY: 0.7,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.9,
              ease: "easeInOut",
            }}
            style={{
              display: "inline-block",
              transformOrigin: "center",
            }}
            className="font-extrabold dark:bg-cyan-500  bg-[#e9e9e0] px-1 py-1 rounded-md text-xl text-[#3f0606] dark:text-[#fef7f7]"
          >
            {words[index]}.
          </motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        >
          <div className="mt-14 text-xl font-extrabold">About</div>
          <div className="text-sm font-mono font-medium text-[#4b4b04] dark:text-white">
            Hey, I’m a developer who loves building cool stuff on the web. I
            work across the stack, from backend APIs to slick frontend UIs.
            Whether it’s a side project, or just tinkering with new tech, I’m
            usually deep in code, figuring things out and pushing things live.
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.2,
              duration: 0.2,
            },
          }}
          className="mt-8"
        >
          <div className="font-bold text-xl">Cool things I build</div>
          <div className="mt-4">
            <div className="flex items-center font-bold gap-3">
              <div>Trackly</div>
              {theme === "light" ? (
                <Link
                  href={"https://github.com/akdevsaha-dev/Trackly"}
                  className="w-5 h-5  rounded-full"
                >
                  <Image
                    src={"/github-mark.svg"}
                    alt="github"
                    width={40}
                    height={40}
                  />
                </Link>
              ) : (
                <Link
                  href={"https://github.com/akdevsaha-dev/Trackly"}
                  className="w-5 h-5rounded-full"
                >
                  <Image
                    src={"/github-mark-white.svg"}
                    alt="github"
                    width={40}
                    height={40}
                  />
                </Link>
              )}
              <Globe size={21} />
            </div>
            <div className="flex gap-3 text-sm font-semibold mt-4">
              <div className="bg-[#e9e9e0] dark:bg-black px-2 py-1 rounded-sm">
                Nextjs
              </div>
              <div className="bg-[#e9e9e0] dark:bg-black px-2 py-1 rounded-sm">
                tRPC
              </div>
              <div className="bg-[#e9e9e0] dark:bg-black px-2 py-1 rounded-sm">
                Redis
              </div>
              <div className="bg-[#e9e9e0] dark:bg-black px-2 py-1 rounded-sm">
                Motion
              </div>
            </div>
            <div className="mt-4 text-sm font-semibold">
              Gain meaningful insights without the noise. Track user journeys,
              monitor performance in real time, and keep your site running
              smoothly -even on serverless platforms with built-in cold-start
              protection. All powered by a fast, privacy-first analytics
              solution.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
