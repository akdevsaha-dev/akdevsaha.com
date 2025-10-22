"use client";
import {
  Github,
  Globe,
  Linkedin,
  Mail,
  Moon,
  SunMedium,
  Twitter,
} from "lucide-react";
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
      <div className="min-h-screen py-5 md:w-[55%] w-[90%] bg-[#f1f0e6] dark:bg-[#121111]">
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
          className="flex px-8 z-50 bg-[#f1f0e6]/40 backdrop-blur-[4px] dark:bg-[#121111]/40 sticky top-0 justify-between  h-20 items-center"
        >
          <Image
            src={"/linkedin.jpeg"}
            alt="profile"
            width={60}
            height={60}
            className="rounded-full "
          ></Image>
          <div className="flex items-center gap-4 md:gap-8 font-semibold text-sm ">
            <Link href={"/"}>home</Link>
            <Link href={"/"}>blog</Link>
            <button
              onClick={toggleTheme}
              className="dark:hover:bg-[#000000]  hover:bg-[#e0dfda]  px-1 py-1 rounded-full"
            >
              {theme === "dark" ? (
                <SunMedium className="" />
              ) : (
                <Moon size={22} />
              )}
            </button>
          </div>
        </motion.nav>
        <div className=" px-8">
          <div className="mt-10 font-extrabold text-5xl  md:font-extrabold md:text-6xl subpixel-antialiased">
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
          />
          <div className="font-bold text-xl">Cool things I built</div>
          <div className="mt-4 md:px-4 px-2">
            <div className="flex items-center font-bold gap-3">
              <div className="">Trackly</div>
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
            <div className="flex items-center font-bold gap-3 mt-6">
              <div>Whispr</div>
              {theme === "light" ? (
                <Link
                  href={"https://github.com/akdevsaha-dev/whispr"}
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
            <div className="flex flex-wrap gap-3 text-sm font-semibold mt-4">
              <div className="bg-[#e9e9e0] dark:bg-black px-2 py-1 rounded-sm">
                Reactjs
              </div>
              <div className="bg-[#e9e9e0] dark:bg-black px-2 py-1 rounded-sm">
                Express
              </div>
              <div className="bg-[#e9e9e0] dark:bg-black px-2 py-1 rounded-sm">
                Redis
              </div>
              <div className="bg-[#e9e9e0] dark:bg-black px-2 py-1 rounded-sm">
                Motion
              </div>
              <div className="bg-[#e9e9e0] dark:bg-black px-2 py-1 rounded-sm">
                WebRTC
              </div>
            </div>
            <div className="mt-4 text-sm font-semibold">
              Whispr is a full-stack messaging platform inspired by WhatsApp,
              built with real-time chat and WebRTC-powered video calling. Users
              can send messages, start video calls, and stay connected through a
              smooth, responsive UI. Built using React.js, Prisma, Express,
              WebSockets, and WebRTC, it combines performance, reliability, and
              modern UX — all in one app.
            </div>
            <div className="flex mt-4 items-center font-bold gap-3">
              <div className="">Inktr</div>
              {theme === "light" ? (
                <Link
                  href={"https://github.com/akdevsaha-dev/Inktr"}
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
                  href={"https://github.com/akdevsaha-dev/Inktr"}
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
                Go
              </div>
              <div className="bg-[#e9e9e0] dark:bg-black px-2 py-1 rounded-sm">
                Fiber
              </div>
              <div className="bg-[#e9e9e0] dark:bg-black px-2 py-1 rounded-sm">
                Redis
              </div>
            </div>
            <div className="mt-4 text-sm font-semibold">
              Inktr is a modern, high-performance blogging platform built with
              Go and Fiber, designed for speed, scalability, and simplicity. It
              allows users to create, manage, and publish blog posts with a
              clean and intuitive interface. With a focus on fast backend
              performance and minimal latency, Inktr leverages Fiber’s
              lightweight routing and Go’s concurrency to handle multiple users
              and posts efficiently.
            </div>
            <div className="flex items-center font-bold gap-3 mt-6">
              <div>Prwise</div>
              {theme === "light" ? (
                <Link
                  href={"https://github.com/akdevsaha-dev/whispr"}
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
                  href={"https://github.com/akdevsaha-dev/prwise"}
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
            <div className="flex flex-wrap gap-3 text-sm font-semibold mt-4">
              <div className="bg-[#e9e9e0] dark:bg-black px-2 py-1 rounded-sm">
                Reactjs
              </div>
              <div className="bg-[#e9e9e0] dark:bg-black px-2 py-1 rounded-sm">
                Express
              </div>
              <div className="bg-[#e9e9e0] dark:bg-black px-2 py-1 rounded-sm">
                Google GenAI
              </div>
              <div className="bg-[#e9e9e0] dark:bg-black px-2 py-1 rounded-sm">
                Motion
              </div>
              <div className="bg-[#e9e9e0] dark:bg-black px-2 py-1 rounded-sm">
                Octokit
              </div>
            </div>
            <div className="mt-4 text-sm font-semibold">
              PR Wise is a sophisticated AI-powered SaaS platform that automates
              and enhances the code review process for GitHub pull requests. The
              application provides intelligent analysis, automated feedback, and
              risk assessment for pull requests to help development teams ship
              higher quality code faster.
            </div>
          </div>
          <div className="mt-6 font-bold text-xl">Education</div>
          <div className="flex justify-between items-center mt-4 md:px-4 gap-2">
            <div className="flex gap-2 sm:gap-3 flex-1 min-w-0">
              <div className="h-12 w-12 sm:h-14 sm:w-14 bg-white rounded-full flex-shrink-0">
                <Image
                  src={"/college.png"}
                  alt="clg"
                  height={100}
                  width={100}
                />
              </div>
              <div className="flex flex-col justify-center min-w-0">
                <div className="text-xs sm:text-sm font-bold leading-tight">
                  Vellore Institute of Technology, Vellore
                </div>
                <div className="text-[11px] sm:text-[13px]">
                  Computer Applications
                </div>
              </div>
            </div>
            <div className="text-[11px] sm:text-[12px] md:text-md md:font-bold whitespace-nowrap flex-shrink-0">
              2021-2024
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#454228]/20 dark:border-neutral-700">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <div className="text-sm font-bold">Get in touch</div>
                  <Link
                    href="mailto:akdevsaha2003@gmail.com"
                    className="flex gap-2 items-center text-sm hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    <Mail size={18} className="flex-shrink-0" />
                    <span className="break-all">akdevsaha2003@gmail.com</span>
                  </Link>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="text-sm font-bold">Connect</div>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="https://github.com/akdevsaha-dev"
                      className="flex gap-2 items-center text-sm hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      target="_blank"
                    >
                      <Github size={18} className="flex-shrink-0" />
                      <span>GitHub</span>
                    </Link>
                    <Link
                      href="https://twitter.com"
                      className="flex gap-2 items-center text-sm hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      target="_blank"
                    >
                      <Twitter size={18} className="flex-shrink-0" />
                      <span>Twitter</span>
                    </Link>
                    <Link
                      href="https://linkedin.com"
                      className="flex gap-2 items-center text-sm hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      target="_blank"
                    >
                      <Linkedin size={18} className="flex-shrink-0" />
                      <span>LinkedIn</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="text-center text-xs text-[#454228]/60 dark:text-neutral-500 py-4">
                © {new Date().getFullYear()} Akdev Saha.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
