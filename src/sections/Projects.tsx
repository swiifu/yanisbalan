import darkSaasLandingPage from "@/assets/images/RicohLanding.png";
import lightSaasLandingPage from "@/assets/images/Glencar.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg"
import grainImage from '@/assets/images/grain.jpg'

const portfolioProjects = [
  {
    company: "Ricoh UK",
    year: "Sep 2024 - Present",
    title: "Digital & Tech Solutions Degree Apprentice",
    results: [
      { title: "Led the iterative development and UX/UI of an internal Power App for document automation " },
      { title: "Identified improvements in spreadsheet workflows, leveraging APIs to work smarter" },
      { title: "Microsoft Certified in MS-900, PL-900" },
    ],
    link: "https://www.ricoh.co.uk/news-events/news/ricoh-uk-is-giving-apprentices-skills-for-life-with-new-programme-intake/",
    image: darkSaasLandingPage,
  },
  {
    company: "Glencar",
    year: "Jun 2023 - Jul 2023",
    title: " BayTree & Rhenus Logistics Project Intern",
    results: [
      { title: "Site engineering with Leica TS16 Total Station, using Digital Terrain Model functions" },
      { title: "Alongside the quantity surveyors, I assessed various markets for different products' drawbacks and benefits" },
      { title: "Developed site management experience" },
    ],
    link: "https://glencar.com/case-study/baytree-rhenus-nuneaton/",
    image: lightSaasLandingPage,
  }
];

export const ProjectsSection = () => {
  return (
      <section id="work">
    <section className="pb-16">
      <div className="container">
        <div className="flex">
          <p className="mt-12 font-serif text-4xl lowercase font-semibold text-tracking-widest bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
            / Experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
          {portfolioProjects.map((project) => (
              <div
                  key={project.title}
                  className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-['']
                  after:absolute after:inset-0 after:outline-2 after:outline
                  after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 after:pointer-events-none"
              >
                  <div className="absolute inset-0 -z-10 opacity-5"
                       style={{
                    backgroundImage: `url(${grainImage.src})`,
                  }}></div>
                  <div className="uppercase bg-gradient-to-r from-blue-800 to-blue-400 flex items-center font-bold
                tracking-wide gap-2 text-transparent bg-clip-text text-xs sm:text-sm flex-nowrap">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                <h3 className="text-3xl mt-2 font-serif">
                  {project.title}
                </h3>
                <hr className="border-t-2 border-white/5 mt-4"/>
                <ul className="flex flex-col gap-4 mt-4">
                  {project.results.map((result, index) => (
                      <li className="flex gap-2 text-sm text-white/50" key={index}>
                        <CheckCircleIcon className="size-5 flex-shrink-0"/>
                        <span>{result.title}</span>
                      </li>
                  ))}
                </ul>
                <a href={project.link}>
                <button className="bg-white text-gray-950 h-12 w-full rounded-xl
                                  font-semibold inline-flex items-center justify-center gap-2 mt-8">
                  <span>View More Here</span>
                  <ArrowUpRight className="size-4"/>
                </button>
                </a>
                <Image src={project.image} alt={project.title}
                className="mt-8 -mb-4"/>
              </div>
          ))}
        </div>
      </div>
    </section>
      </section>
  );
};
