export const MoreAbout = () => {
  return (
    <div className="px-3 md:px-8 mt-20">
      <div className="uppercase text-xs font-semibold dark:text-[#636c7e] text-[#94969c]">
        Thing about me
      </div>
      <div className="dark:text-[#9ba1ae] text-[#51555a] mt-6 text-lg leading-8">
        Beyond building software, I approach engineering as a system of
        decisions that balance technical rigor with real human needs. I’m driven
        by curiosity whether that means diving deep into distributed systems,
        refining product architecture, or understanding how a solution works at
        its core.
      </div>
      <div className="dark:text-[#9ba1ae] text-[#51555a] mt-50 text-lg leading-8">
        Outside of engineering, I value reflection and real-world perspective. I
        believe the best products are built by people who explore broadly and
        think deeply. That balance between technical correctness and human
        awareness shapes how I design systems: scalable, intentional, and built
        to resonate with real users.
      </div>
      <div className="mt-16 uppercase text-xs font-semibold dark:text-[#636c7e] text-[#94969c]">
        get in touch
      </div>
      <div className="dark:text-[#9ba1ae] text-[#51555a] text-lg mt-5">
        Connect with me on{" "}
        <span className="dark:text-white text-black hover:dark:text-[#d3d6de] hover:text-[#7e828a] underline underline-offset-4">
          LinkedIn
        </span>{" "}
        or shoot an{" "}
        <span className="dark:text-white text-black hover:dark:text-[#d3d6de] hover:text-[#7e828a] underline underline-offset-4">
          email
        </span>
      </div>
    </div>
  );
};
