import Image from "next/image";
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import {HeroOrbit} from "@/components/HeroOrbit";
import SparkleIcon from '@/assets/icons/sparkle.svg';
import memojiImage from '@/assets/images/IMG_5970.png';

export const HeroSection = () => {
  return (
      <div className="py-48 md:py-48 relative z-0 overflow-x-clip">
          <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
          <div className = "absolute inset-0 -z-30 opacity-5"
               style={{
                backgroundImage: `url(${grainImage.src})`,
               }}
          ></div>
          <div className="size-[660px] hero-ring"></div>
          <div className="size-[960px] hero-ring"></div>
          <div className="size-[1260px] hero-ring"></div>
          <div className="size-[1560px] hero-ring"></div>
          <HeroOrbit size={720} rotation={120}>
              <SparkleIcon className="size-8 text-blue-300 opacity-40"/>
          </HeroOrbit>
          <HeroOrbit size={850} rotation={-20}>
              <SparkleIcon className="size-8 text-blue-300 opacity-20"/>
          </HeroOrbit>
          <HeroOrbit size={620} rotation={-170}>
              <StarIcon className="size-12 text-blue-300 opacity-50"/>
          </HeroOrbit>
          <HeroOrbit size={600} rotation={10}>
              <StarIcon className="size-16 text-blue-300 opacity-80"/>
          </HeroOrbit>
          <HeroOrbit size={440} rotation={100}>
              <StarIcon className="size-8 text-blue-300 opacity-10"/>
          </HeroOrbit>
          <HeroOrbit size={800} rotation={-72}>
                    <StarIcon className="size-28 text-blue-300"/>
          </HeroOrbit>
          <HeroOrbit size={800} rotation={-272}>
              <StarIcon className="size-16 text-blue-300 opacity-80"/>
          </HeroOrbit>
          <HeroOrbit size={830} rotation={-207}>
              <StarIcon className="size-6 text-blue-300 opacity-20"/>
          </HeroOrbit>
          <HeroOrbit size={850} rotation={-50}>
              <StarIcon className="size-4 text-blue-300 opacity-15"/>
          </HeroOrbit>
      </div>
        <div className="container">
            <div className="flex flex-col items-center">
                <Image
                    src={memojiImage}
                    className="size-[150px]"
                    alt="Person peeking from behind laptop"
                />
                <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center rounded-lg gap-3">
                    <div className="bg-red-500 size-2.5 rounded-full animate-pulse-fade"></div>
                    <div className="text-sm font-medium">Unavailable for new projects</div>
                </div>
            </div>
            <h1 className="font-serif text-6xl text-center mt-8">
                Hi, <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Yanis</span> here.
            </h1>
            <h1 className="font-serif text-3xl text-center mt-2 text-gray-500 tracking-wide">I make stuff sometimes.</h1>
            <p className="mt-4 text-center font-semibold text-gray-500 max-w-lg mx-auto">I&apos;m a digital degree apprentice from Northamptonshire, England.
            I am enticed by large-scale, high-impact products and contributed to major changes in services for industry-leading firms </p>
            <div className="flex flex-col items-center mt-8">
                <button className="hero-button-nav z-20">
                    <span className="font-semibold">Explore My Work</span>
                    <ArrowDown className="size-4" />
                </button>
                <a href={'https://www.linkedin.com/in/yanisbalan/'} className={"hero-button-nav mt-4 z-20"}>
                  <button>
                    <span className="font-semibold">Let&apos;s Connect</span>
                    <span> 🤝</span>
                  </button>
                </a>
            </div>
        </div>
      </div>
  );
};
