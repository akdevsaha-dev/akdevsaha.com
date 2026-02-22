"use client";
import { Calendar, Github, Linkedin, QrCode } from "lucide-react";
import { useTheme } from "next-themes";
export const FloatBar = () => {
  const { theme } = useTheme();

  const color = theme === "dark" ? "ffffff" : "000000";
  return (
    <div
      className=" flex px-10 items-center justify-between fixed bottom-5 z-10
      w-120 h-14
      rounded-full
      bg-white/10 dark:bg-black/20
      backdrop-blur-xl backdrop-saturate-150
      border border-neutral-300 dark:border-white/10"
    >
      <QrCode />
      <div className="border-r border-r-neutral-700 w-px h-8"></div>
      <Github className="brightness-75" />
      <Linkedin className="brightness-75" />
      <img
        src={`https://cdn.simpleicons.org/x/${color}?viewbox=auto&size=20`}
      />
      <img
        src={`https://cdn.simpleicons.org/discord/${color}?viewbox=auto&size=20`}
      />
      <img
        src={`https://cdn.simpleicons.org/medium/${color}?viewbox=auto&size=20`}
      />
      <Calendar className="brightness-75" />
    </div>
  );
};
