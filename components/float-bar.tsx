"use client";

import { Calendar, Github, Linkedin, QrCode } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const FloatBar = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) return null;

  const iconColor = theme === "dark" ? "ffffff" : "000000";

  return (
    <div
      className="flex px-5 md:px-10 items-center justify-between fixed bottom-5 z-10
      md:w-110 h-12 w-80
      rounded-full
      bg-white/10 dark:bg-black/20
      backdrop-blur-xl backdrop-saturate-150
      border border-neutral-300 dark:border-white/10"
    >
      <QrCode className="brightness-75 dark:brightness-100" />

      <div className="border-r border-neutral-400 dark:border-neutral-600 w-px h-8" />

      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/akdevsaha-dev"
      >
        <Github className="hover:scale-105 transition brightness-75 dark:brightness-100" />
      </Link>

      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/akdevsaha/"
      >
        <Linkedin className="hover:scale-105 transition brightness-75 dark:brightness-100" />
      </Link>

      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://x.com/AkdevSaha"
      >
        <img
          className="hover:scale-105 transition"
          src={`https://cdn.simpleicons.org/x/${iconColor}`}
          width={20}
          height={20}
          alt="X"
        />
      </Link>

      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://medium.com/@akdevsaha.dev"
      >
        <img
          className="hover:scale-105 transition"
          src={`https://cdn.simpleicons.org/medium/${iconColor}`}
          width={20}
          height={20}
          alt="Medium"
        />
      </Link>

      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://cal.com/okayadi/30min?overlayCalendar=true"
      >
        <Calendar className="hover:scale-105 transition brightness-75 dark:brightness-100" />
      </Link>
    </div>
  );
};
