import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import GithubIcon from '@/assets/icons/github.svg';
import PythonIcon from '@/assets/icons/PythonVec2.svg';
import PostmanIcon from '@/assets/icons/PostmanVec1.svg';
import PowerAppsIcon from '@/assets/icons/icons8-power-apps-96.svg';
import { TechIcon } from "@/components/TechIcon";
import mapImage from '@/assets/images/Screenshot 2025-03-08 at 16.42.04.png';
import smileMemoji from '@/assets/images/IMG_6374.png';
import { CardHeader } from '@/components/CardHeader';
import {ToolboxItems} from "@/components/ToolboxItems";

const toolboxItems = [
    {
        title: 'Javascript',
        iconType: JavascriptIcon,

    },
    {
        title: 'CSS3',
        iconType: CssIcon,
    },
    {
        title: 'Python',
        iconType: PythonIcon,
    },
    {
        title: 'React',
        iconType: ReactIcon,
    },

    {
        title: 'GitHub',
        iconType: GithubIcon,
    }



];

const hobbies = [
    {
        title: 'Badminton',
        emoji: '🏸',
        left: '15%',
        top: '15%',
    },

    {
        title: 'Lifting',
        emoji: '🏋️‍♀️',
        left: '90%',
        top: '15%',
    },

    {
        title: 'Running',
        emoji: '🏃️',
        left: '20%',
        top: '40%',
    },

    {
        title: 'Video Games',
        emoji: '👾',
        left: '35%',
        top: '55%',
    },

    {
        title: 'Drones',
        emoji: '🛩️',
        left: '70%',
        top: '30%',
    },

    {
        title: 'PC Building',
        emoji: '🖥️',
        left: '5%',
        top: '90%',
    },

    {
        title: 'Startups',
        emoji: '🥋️',
        left: '85%',
        top: '85%',
    }
]

export const AboutSection = () => {
  return (
      <div>
          <div className="py-8">
              <div className="flex container">
                  <p className="font-serif text-4xl lowercase font-semibold text-tracking-widest bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
                      / About me
                  </p>
              </div>
              <div className='mt-12 flex flex-col gap-8'>
                  <div className="grid container md:grid-cols-5 gap-8">
                  <Card className="h-[320px] p-0 flex flex-col col-span-3 md:col-span-2 px-6 py-6">
                      <CardHeader
                          title="My Reads"
                          description="Explore the books shaping my perspectives."
                      />
                          <div className='w-40 mx-auto mt-8'>
                           <Image src={bookImage} alt="Book Cover" />
                          </div>
                      </Card>
                  <Card className='h-[320px] col-span-3 px-6 py-6'>
                      <CardHeader
                          title="My Stack"
                          description="Here are some of the technologies I have been working with:"
                          className=""
                      />
                        <ToolboxItems toolboxItems={toolboxItems} className="mt-6" />
                        <ToolboxItems toolboxItems={toolboxItems}
                                      className="mt-6"
                                      itemsWrapperClassName="-translate-x-1/2"
                        />
                  </Card>
                  </div>
                  <div className="grid container grid-cols-1 md:grid-cols-5 gap-8">
                  <Card className="h-[320px] p-0 flex flex-col col-span-3 px-6 py-6">
                      <CardHeader
                          title="Beyond the Code"
                          description="Explore my interests outside the realm of programming"
                          className="flex flex-col"
                      />
                      <div className="relative flex-1 w-full h-full">
                          {hobbies.map((hobby) => (
                              <div
                                  key={hobby.title}
                                  className="inline-flex items-center gap-2 px-6
                                    bg-gradient-to-r from-blue-300 to-blue-400 rounded-full py-1.5 absolute"
                                  style={{
                                      left: hobby.left || '50%', // Default to center if missing
                                      top: hobby.top || '50%',   // Default to middle if missing
                                      transform: 'translate(-50%, -50%)', // Center them properly
                                  }}
                              >
                                  <span className="font-medium text-gray-950">{hobby.title}</span>
                                  <span>{hobby.emoji}</span>
                              </div>
                          ))}
                      </div>
                  </Card>
                  <Card className="h-[320px] p-0 relative col-span-3 md:col-span-2">
                      <Image src={mapImage} alt="My Map"
                      className="h-full w-full object-cover" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r
                      from-blue-300 to-blue-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2
                      after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                      <Image src={smileMemoji} alt="My Memoji" className="size-20" />
                      </div>
                  </Card>
                  </div>
              </div>
          </div>
      </div>
  );
};
