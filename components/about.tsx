"use client";
import { Dot, Music, Pause } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const About = () => {
  const [time, setTime] = useState<string | null>(null);
  const [isMusicPlaying, setMusicIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(0.2);
  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          timeZone: "Asia/kolkata",
          hour12: false,
        }),
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);
  if (!time) return <div className="w-full min-h-screen"></div>;
  return (
    <div className="w-full">
      <div className="relative">
        <div className="h-55 w-55 rounded-full z-10  -translate-x-1/2 left-1/2  absolute"></div>
        <div className="flex flex-col items-center -mt-6 md:pt-10">
          <Image
            src={"/pfp.png"}
            height={220}
            width={220}
            alt="pfp"
            className="filter w-40 h-40 transition-all duration-500 ease-out  md:w-55 md:h-55 grayscale mask-b-from-20% mask-b-to-99% border-b border-neutral-100 mx-30"
          />
          <div className="text-7xl font-bold mt-1 transition-colors delay-500 duration-300 ">
            Akdev Saha
          </div>
        </div>
        <div className="h-10w-full flex items-center justify-center font-light text-slate-500">
          <div
            className={`
      flex items-center gap-2 
      transition-all duration-300 ease-out
      ${isMusicPlaying ? "translate-x-0" : "translate-x-0"}
    `}
          >
            <div className="opacity-80 text-sm font-medium pl-10">{time} IST</div>
            <Dot className="text-slate-500 opacity-50" />
            <div className="text-xs font-medium">LOFI</div>

            <div
              className="h-5 w-5 rounded-full dark:hover:bg-neutral-800 hover:bg-neutral-50 hover:text-black dark:hover:text-white flex items-center justify-center cursor-pointer"
              onClick={() => {
                if (!audioRef.current) return;
                audioRef.current.volume = volume;
                if (isMusicPlaying) {
                  audioRef.current.pause();
                } else {
                  audioRef.current.play();
                }
                setMusicIsPlaying(!isMusicPlaying);
              }}
            >
              <audio ref={audioRef} src={"/lofi.mp3"} />
              {isMusicPlaying ? <Pause size={10} /> : <Music size={10} />}
            </div>

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className={`
        transition-all duration-300 ease-out
        ${
          isMusicPlaying
            ? "w-24 opacity-100 ml-2"
            : "w-0 opacity-0 ml-0 pointer-events-none"
        }
      `}
            />
          </div>
        </div>
      </div>
      <div className="w-full px-3 md:px-8 pt-8 dark:text-[#9ba1ae] text-[#4c5564]">
        <div className=" md:text-xl leading-8 ">
          a full-stack developer and{" "}
          <span className="underline hover:text-black dark:hover:text-white transition duration-200 underline-offset-4">
            product builder
          </span>{" "}
          creating scalable, user-focused products by combining engineering,
          product thinking, and real-world business needs.
        </div>
        <p className="md:text-xl  mt-4">
          Whether it’s a side project, or just tinkering with new tech, I’m
          usually deep in code, figuring things out and pushing things live.
        </p>
      </div>
    </div>
  );
};
