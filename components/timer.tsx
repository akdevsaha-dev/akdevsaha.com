"use client";
import { Pause, Play, RotateCcw } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {motion } from "motion/react"
export const Timer = () => {
  const [focusMinutes, setFocusMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  const [mode, setMode] = useState<"focus session" | "short break">(
    "focus session",
  );

  const [seconds, setSeconds] = useState(focusMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/alarm.mp3");
  }, []);

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          setIsRunning(false);
          audioRef.current?.play();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  useEffect(() => {
    setIsRunning(false);
    setSeconds(
      mode === "focus session" ? focusMinutes * 60 : breakMinutes * 60,
    );
  }, [mode, focusMinutes, breakMinutes]);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div className="px-3 md:px-8 mt-14">
      <div className="flex justify-between items-center">
        <div className="uppercase tracking-wider text-xs font-semibold dark:text-[#636c7e] text-[#94969c]">
          pomodoro timer
        </div>

        <button
          onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          className="text-xs uppercase font-semibold text-neutral-500 hover:text-black dark:hover:text-white transition"
        >
          {isSettingsOpen ? "Close settings" : "Adjust time"}
        </button>
      </div>

      <div className="italic text-sm dark:text-[#848993] text-[#696b73] mt-5">
        You've reached the end! Or have you? Before you vanish into the digital
        void, I've got a quick Pomodoro Timer to help you focus better on your
        next big thing (or just to remind you to stop doomscrolling).
      </div>

      <div className="w-full rounded-xl flex flex-col sm:flex-row shadow mt-10 border dark:bg-white/1 bg-black/1 border-neutral-100 dark:border-neutral-800 mb-20 p-6 gap-6">
        <div className="md:w-[40%] flex justify-center sm:justify-start flex-col items-center sm:items-start">
          <div className="text-5xl font-mono">
            {minutes}:{secs.toString().padStart(2, "0")}
          </div>
          <div className="uppercase text-xs font-semibold dark:text-[#848993] text-[#696b73]">
            {mode}
          </div>
        </div>

       <div className="flex-1 flex items-center justify-center gap-3 relative overflow-hidden">

  <AnimatePresence mode="wait">
    {isSettingsOpen ? (
      <motion.div
        key="settings"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex gap-6"
      >
        <div className="flex flex-col">
          <label className="text-xs mb-1">Focus (min)</label>
          <input
            type="number"
            min="1"
            value={focusMinutes}
            onChange={(e) => setFocusMinutes(Number(e.target.value))}
            className="w-40 px-2 py-1 rounded border dark:bg-neutral-900"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-xs mb-1">Break (min)</label>
          <input
            type="number"
            min="1"
            value={breakMinutes}
            onChange={(e) => setBreakMinutes(Number(e.target.value))}
            className="w-40 px-2 py-1 rounded border dark:bg-neutral-900"
          />
        </div>
      </motion.div>
    ) : (
      <motion.div
        key="controls"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-3"
      >
        <div className="w-33 ml-15 h-9 px-2 py-1 flex items-center rounded-full bg-neutral-100 dark:bg-neutral-900">
          <div
            onClick={() => setMode("focus session")}
            className={`flex-1 text-xs font-bold flex items-center justify-center h-full rounded-full cursor-pointer transition ${
              mode === "focus session"
                ? "shadow dark:bg-neutral-800 bg-white"
                : ""
            }`}
          >
            {focusMinutes}m
          </div>

          <div
            onClick={() => setMode("short break")}
            className={`flex-1 text-xs font-bold flex items-center justify-center h-full rounded-full cursor-pointer transition ${
              mode === "short break"
                ? "shadow dark:bg-neutral-800 bg-white"
                : ""
            }`}
          >
            {breakMinutes}m
          </div>
        </div>

        <div
          onClick={() => setIsRunning(!isRunning)}
          className="h-10 w-10 ml-4 hover:scale-105 duration-200 flex items-center justify-center rounded-full bg-black dark:bg-white cursor-pointer"
        >
          {isRunning ? (
            <Pause
              size={20}
              className="dark:fill-black dark:text-black fill-white text-white"
            />
          ) : (
            <Play
              size={20}
              className="dark:fill-black dark:text-black fill-white text-white"
            />
          )}
        </div>

        <div
          onClick={() => {
            setIsRunning(false);
            setSeconds(
              mode === "focus session"
                ? focusMinutes * 60
                : breakMinutes * 60
            );
          }}
          className="h-10 w-10 flex items-center justify-center border border-neutral-200 dark:border-neutral-800 rounded-full bg-white dark:bg-transparent cursor-pointer"
        >
          <RotateCcw
            size={20}
            className="text-neutral-600 dark:text-neutral-400"
          />
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</div>
      </div>
    </div>
  );
};
