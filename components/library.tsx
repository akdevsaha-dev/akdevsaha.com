import { devContent } from "@/data/library.content";

export const Library = () => {
  return (
    <div className="px-3 md:px-8 mt-20 ">
      <div className="uppercase dark:text-[#636c7e] text-[#94969c] text-xs font-semibold tracking-widest">
        Writings & blogs
      </div>
      <div className="text-lg dark:text-[#9ba1ae] text-[#51555a] leading-8 mt-7">
        I publish my thoughts on{" "}
        <a
          target="_blank"
          href="https://medium.com/@akdevsaha.dev"
          className="underline dark:text-white text-black cursor-pointer hover:dark:text-[#e0e4ed] hover:text-[#92959e] underline-offset-3"
        >
          Medium
        </a>{" "}   
        instead of building a custom blog. Rather than reinventing
        infrastructure, I choose a mature platform that lets me focus on what
        truly matters. sharing practical insights on new technology, product
        strategy, and scalable technical architecture.
      </div>

      <div className="mt-14 uppercase dark:text-[#636c7e] text-[#94969c] text-xs font-semibold tracking-widest">
        Library
      </div>
      <div className="mt-5 text-xs font-semibold dark:text-[#9ba1ae] text-[#626772]">
        DEV
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
        {devContent.map((c, idx) => (
          <div key={idx} className="h-10 mt-1">
            <div className="dark:text-white text-black hover:underline underline-offset-4 dark:decoration-[#1e232e] decoration-[#c5c7cf]">{c.title}</div>
            <div className="dark:text-[#6a6e79] text-[#8c9099] text-xs">
              {c.author}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
