"use client";
import { Calendar, Github, Linkedin, QrCode } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
export const FloatBar = () => {
  const [mounted, setMounted] = useState(false);
  const [color, setColor] = useState("000000");

  useEffect(() => {
    setMounted(true);

    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setColor(isDark ? "ffffff" : "000000");
  }, []);

  if (!mounted) return null;

  return (
    <div
      className=" flex px-10 items-center justify-between fixed bottom-5 z-10
      w-110 h-12
      rounded-full
      bg-white/10 dark:bg-black/20
      backdrop-blur-xl backdrop-saturate-150
      border border-neutral-300 dark:border-white/10"
    >
      <QrCode />
      <div className="border-r border-r-neutral-700 w-px h-8"></div>
      <Link href={"https://github.com/akdevsaha-dev"}>
        <Github className="hover:scale-105 brightness-75" />
      </Link>
      <Link href={"https://www.linkedin.com/in/akdevsaha/"}>
        <Linkedin className="hover:scale-105 brightness-75" />
      </Link>
      <Link href={"https://x.com/AkdevSaha"}>
        <img
          className="hover:scale-105"
          src={`https://cdn.simpleicons.org/x/${color}?viewbox=auto&size=20`}
        />
      </Link>
      <Link href={"https://medium.com/@akdevsaha.dev"}>
        <img
          className="hover:scale-105"
          src={`https://cdn.simpleicons.org/medium/${color}?viewbox=auto&size=20`}
        />
      </Link>

      <Link href={"https://cal.com/okayadi/30min?overlayCalendar=true"}>
        <Calendar className="hover:scale-105 brightness-75" />
      </Link>
    </div>
  );
};
