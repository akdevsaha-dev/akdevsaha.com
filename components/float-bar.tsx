import { Github, Linkedin, QrCode } from "lucide-react";

export const FloatBar = () => {
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
      <Linkedin  className="brightness-75"/>
     
    </div>
  );
};
