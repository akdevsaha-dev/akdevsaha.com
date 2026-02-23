"use client";
import { projects } from "@/data/project.content";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

export const Experience = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [expanded, setExpanded] = useState<boolean[]>(
    new Array(projects.length).fill(false),
  );

  const [isjourneyExpanded, setIsJourneyExpanded] = useState(false);

  const setToggle = (index: number) => {
    setExpanded((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div className="w-full px-3 md:px-8">
      <div className="mt-10 font-semibold text-xs tracking-widest text-zinc-400">
        PROJECT EXPERIENCE
      </div>
      <div className="mt-4">
        <div className="flex flex-col">
          {projects.map((project, idx) => {
            const isExpanded = expanded[idx];
            return (
              <div key={idx} className="">
                <div className="flex items-center gap-3 mt-8">
                  <div>{project.title}</div>
                  <a target="_blank" href={project.link}>
                    {theme === "dark" ? (
                      <Image
                        src={"/githubLight.svg"}
                        height={15}
                        width={15}
                        alt="g"
                      />
                    ) : (
                      <Image
                        src={"/githubDark.svg"}
                        height={15}
                        width={15}
                        alt="g"
                      />
                    )}
                  </a>
                  <Link
                    href={""}
                    className="text-xs hover:text-neutral-100 underline underline-offset-2 text-slate-500 pr-2"
                  >
                    link
                  </Link>
                </div>
                <div
                  className={`w-full dark:text-[#9ba1ae] md:pr-15 text-[#4c5564] text-sm mt-3 overflow-hidden transition-all duration-300 ease-out`}
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: !isExpanded ? 3 : "unset",
                    WebkitMaskImage: !isExpanded
                      ? "linear-gradient(to bottom, black 35%, transparent 100%)"
                      : "unset",
                  }}
                >
                  {project.description}
                </div>
                <div
                  className="inline-flex justify-center h-14 items-center gap-1 cursor-pointer"
                  onClick={() => setToggle(idx)}
                >
                  <div className="text-xs opacity-60 dark:text-[#9ba1ae] text-[#4c5564]">
                    {isExpanded ? "View Less" : "View More"}
                  </div>
                  {isExpanded ? (
                    <ChevronUp
                      size={11}
                      className="dark:text-[#9ba1ae] text-[#4c5564]"
                    />
                  ) : (
                    <ChevronDown
                      size={11}
                      className="dark:text-[#9ba1ae] text-[#4c5564]"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-15">
          <div className="uppercase dark:text-[#636c7e] text-[#7c838c] font-semibold text-xs tracking-wider">
            In Between These Experiences
          </div>
          <div
            className={`min-h-40 w-full border mt-7 rounded-lg dark:border-[#262c3a] ${!isjourneyExpanded ? "px-7 pt-7 pb-2" : "p-8 md:p-14"} transition-all duration-200`}
          >
            <div className="text-lg font-semibold">
              The Product Building Journey
            </div>
            <div
              className="text-sm dark:text-[#9ba1ae] text-[#4c5564] mt-3 gap-4"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: !isjourneyExpanded ? 3 : "unset",
                WebkitMaskImage: !isjourneyExpanded
                  ? "linear-gradient(to bottom, black 35%, transparent 100%)"
                  : "unset",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo voluptas quibusdam qui voluptates ex, amet omnis,
              aliquid ad obcaecati aspernatur aut ratione placeat. Minima
              eligendi voluptatem, ipsam obcaecati blanditiis maiores! Qui minus
              assumenda vero iste quod quos, nam adipisci deleniti id autem
              itaque libero mollitia aut aliquam quae quis modi hic dolores a ex
              suscipit? Reprehenderit dolor aspernatur rem, incidunt dolore quis
              quas! Nesciunt maiores dolore et numquam molestiae ullam natus,
              perferendis iste in quae adipisci veritatis reiciendis enim
              assumenda optio ratione omnis laboriosam veniam magnam iusto
              explicabo aspernatur. Exercitationem consectetur nostrum fugiat
              magnam tenetur corporis quod perspiciatis quis aperiam. Libero
              iusto fuga, officiis vero culpa autem, nulla alias dolores, cum
              iste facilis vitae delectus. Voluptas doloribus quisquam ab qui
              dolor iste suscipit ipsam autem enim beatae aperiam voluptatem
              delectus cupiditate fugiat reiciendis maxime neque eveniet
              provident, perspiciatis aliquam tenetur voluptatibus corporis
              eligendi nesciunt. Nostrum numquam perferendis sint at corporis!
              Iusto sequi nobis eos odit culpa dolores quidem debitis,
              architecto dignissimos voluptate aliquam laboriosam obcaecati ab
              fugiat velit dolor. Dicta, nisi qui aliquid officiis vel, sunt ad
              sequi provident commodi aspernatur quisquam pariatur sit ab
              excepturi nesciunt tempora et quo maiores laboriosam perspiciatis
              voluptate saepe omnis iste facilis. Possimus cum unde eius
              repellendus tempore! Neque, consectetur nihil inventore molestiae
              minus atque assumenda dolor molestias voluptates et sint quibusdam
              fuga eos nemo voluptatem quia earum itaque quasi deleniti quos!
              Nihil asperiores autem dolores excepturi corporis numquam fugiat
              dolorum officia ducimus quos quaerat odio laboriosam in cum ea
              non, ratione quidem voluptatem consectetur vel maxime. Perferendis
              molestias nostrum iure nemo ipsam praesentium eveniet aut atque
              porro impedit magnam id et, quibusdam beatae eaque commodi,
              exercitationem illum, est deleniti provident! Sapiente molestias
              deleniti aliquam blanditiis sit! Optio iste fugit doloribus.
              Laudantium veniam a voluptatum voluptatibus velit debitis
              molestiae voluptate odio et expedita magnam blanditiis
              exercitationem animi, nihil voluptates. Ex cumque maiores
              doloremque iste ipsum? Inventore nemo molestias voluptatum porro
              enim harum animi? Labore, soluta earum ab et facere odit commodi
              repellat doloribus. Labore incidunt quis ullam minima quidem
              architecto, illum error tempore, doloremque perspiciatis, dolores
              facere. Corporis sunt praesentium sed, ipsum doloremque veritatis
              molestiae dolor autem doloribus. Nostrum dolores quam obcaecati,
              architecto rem ratione quod hic blanditiis dignissimos ab.
              Accusamus velit pariatur, officia maxime soluta architecto harum
              ut aut tempore doloremque? Sint corrupti architecto ab maiores,
              suscipit enim dolores facere magnam voluptate consequuntur ipsam
              asperiores dolore odit vitae numquam quo nulla qui quod, deleniti
              provident dicta iure a fugit! Est, quibusdam voluptate molestias
              repellendus doloremque ut itaque? Mollitia illo enim qui.
              Praesentium, alias maxime temporibus amet commodi numquam
              voluptatum, quia officia eius cupiditate, et eum suscipit ratione
              sunt quidem sit hic ad consequatur nesciunt dolor ea reiciendis
              nobis nam. Recusandae modi, vitae quaerat doloremque repudiandae
              aliquid laudantium architecto accusantium dignissimos, delectus
              nulla amet voluptatum magni corporis, repellat reprehenderit
              exercitationem assumenda odit quis. Porro eos sapiente unde
              blanditiis, provident nihil doloremque, dolorem culpa et deleniti
              ullam? Ea quasi voluptatum ratione enim, eligendi, saepe aperiam
              error, tempore veritatis illo nisi corporis animi placeat
              necessitatibus dicta?
            </div>
            <div
              className="inline-flex justify-center h-14 items-center gap-1 cursor-pointer"
              onClick={() => setIsJourneyExpanded(!isjourneyExpanded)}
            >
              <div className="text-xs opacity-60 dark:text-[#9ba1ae] text-[#4c5564]">
                {isjourneyExpanded ? "View Less" : "View More"}
              </div>
              {isjourneyExpanded ? (
                <ChevronUp
                  size={11}
                  className="dark:text-[#9ba1ae] text-[#4c5564]"
                />
              ) : (
                <ChevronDown
                  size={11}
                  className="dark:text-[#9ba1ae] text-[#4c5564]"
                />
              )}
            </div>
          </div>
          <div className="mt-16 dark:text-[#636c7e] text-[#7c838c] uppercase text-xs tracking-wide font-semibold">
            Education
          </div>
          <div className="flex flex-col md:flex-row md:justify-between mt-5">
            <div className="flex flex-col">
              <div className="font-semibold">
                Vellore Institute of Technology, Vellore
              </div>
              <div className="text-sm mt-2 dark:text-[#9ba1ae] text-[#4c5564] order-3 md:order-0">
                2021-2025
              </div>
            </div>
            <div className="text-sm dark:text-[#636c7e] text-[#7c838c] order-2 md:order-0">
              Computer Science
            </div>
          </div>
          <div className="mt-10">
            <div className="uppercase text-xs mb-3 font-semibold dark:text-[#636c7e] text-[#7c838c] tracking-wide">
              github contributions
            </div>
            <div className="px-3 pt-5">
              <GitHubCalendar
                username="akdevsaha-dev"
                blockSize={10}
                fontSize={12}
                theme={
                  theme === "dark"
                    ? undefined
                    : {
                        light: [
                          "#ebedf0",
                          "#9be9a8",
                          "#40c463",
                          "#30a14e",
                          "#216e39",
                        ],
                        dark: [
                          "#ebedf0",
                          "#9be9a8",
                          "#40c463",
                          "#30a14e",
                          "#216e39",
                        ],
                      }
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
