"use client";

import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import bookImage2 from "@/assets/images/MarkManson.png";
import bookImage3 from "@/assets/images/goggins.png";
import bookImage4 from "@/assets/images/Alchemist.png";
import mapImage from "@/assets/images/Screenshot 2025-03-08 at 16.42.04.png";
import smileMemoji from "@/assets/images/IMG_6374.png";
import { ToolboxItems } from "@/components/ToolboxItems";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import PythonIcon from "@/assets/icons/PythonVec2.svg";
import Selfie from "@/assets/images/IMG_6247.jpg";
import HtmlIcon from "@/assets/icons/html5.svg";

const toolboxItems = [
    { title: "Javascript", iconType: JavascriptIcon },
    { title: "CSS3", iconType: CssIcon },
    { title: "Python", iconType: PythonIcon },
    { title: "React", iconType: ReactIcon },
    { title: "GitHub", iconType: GithubIcon },
    { title: "HTML5", iconType: HtmlIcon },
];

const hobbies = [
    { title: "Badminton", emoji: "🏸" },
    { title: "Lifting", emoji: "🏋️‍♀️" },
    { title: "Running", emoji: "🏃‍♂️" },
    { title: "Video Games", emoji: "👾" },
    { title: "Drones", emoji: "🛩️" },
    { title: "PC Building", emoji: "🖥️" },
    { title: "Startups", emoji: "🥋️" },
    { title: "Coding", emoji: "👨‍💻" },
    { title: "Reading", emoji: "📚" },
];

export const AboutSection = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [containerSize, setContainerSize] = useState({ width: 300, height: 300 });
    const [bookIndex, setBookIndex] = useState(0); // Track current book
    const bookCovers = [bookImage, bookImage2, bookImage3, bookImage4]; // Book images array

    const [positions, setPositions] = useState(
        hobbies.map(() => ({
            x: Math.random() * 300,
            y: Math.random() * 300,
            dx: (Math.random() - 0.5) * 2,
            dy: (Math.random() - 0.5) * 2,
            isDragging: false,
        }))
    );

    useEffect(() => {
        const updateSize = () => {
            if (containerRef.current) {
                setContainerSize({
                    width: containerRef.current.clientWidth - 60,
                    height: containerRef.current.clientHeight - 60,
                });
            }
        };

        updateSize();
        window.addEventListener("resize", updateSize);

        return () => window.removeEventListener("resize", updateSize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setPositions((prevPositions) =>
                prevPositions.map((pos) => {
                    if (pos.isDragging) return pos;

                    let newX = pos.x + pos.dx * 2;
                    let newY = pos.y + pos.dy * 2;

                    if (newX < 0 || newX > containerSize.width) pos.dx *= -1;
                    if (newY < 0 || newY > containerSize.height) pos.dy *= -1;

                    return { ...pos, x: newX, y: newY };
                })
            );
        }, 20);

        return () => clearInterval(interval);
    }, [containerSize]);

    const handleMouseDown = (index: number) => {
        setPositions((prev) =>
            prev.map((pos, i) =>
                i === index ? { ...pos, isDragging: true } : pos
            )
        );
    };

    const handleMouseUp = (index: number) => {
        setPositions((prev) =>
            prev.map((pos, i) =>
                i === index ? { ...pos, isDragging: false } : pos
            )
        );
    };

    const handleMouseMove = (index: number, event: React.MouseEvent) => {
        if (!positions[index].isDragging) return;

        setPositions((prev) =>
            prev.map((pos, i) =>
                i === index
                    ? {
                        ...pos,
                        x: Math.min(containerSize.width, Math.max(0, pos.x + event.movementX)),
                        y: Math.min(containerSize.height, Math.max(0, pos.y + event.movementY)),
                    }
                    : pos
            )
        );
    };

    return (
        <section id="about">
            <div className="py-8">
                <div className="container">
                    <p className="font-serif text-4xl lowercase font-semibold text-tracking-widest bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
                        / About me
                    </p>
                </div>

                <div className="mt-12 flex flex-col gap-8">
                    <div className="grid container md:grid-cols-5 gap-8">
                        <Card className="h-[320px] col-span-3 md:col-span-2 p-6">
                            <CardHeader
                                title="About Me"
                                description={
                                    <span className="text-[16px] mt-3 md:mt-4 md:text-xl tracking-wide leading-relaxed block">
                                        I am currently a Degree Apprentice at
                                        <span className="text-blue-400"> Ricoh UK</span>, working in the Digital Services sector under the pre-sales team. Simultaneously, I am undertaking a Full-Time Bachelor's of Science in Digital & Technology Solutions at
                                        <span className="text-blue-400"> Corndel College London</span>.
                                    </span>
                                }
                            />
                        </Card>

                        <Card className="h-[320px] col-span-3 md:col-span-2 p-6 relative">
                            <div className="relative z-10">
                                <CardHeader title="My Stack" description="Here are some of the technologies I have been working with:" />
                            </div>
                            <ToolboxItems toolboxItems={toolboxItems} className="mt-6" direction="right" />
                            <ToolboxItems toolboxItems={toolboxItems} className="mt-6" direction="left" />
                        </Card>

                        <Card className="h-[320px] p-0 relative md:col-span-1 col-span-3">
                            <Image src={Selfie} alt="Pic of me" className="h-full w-full object-cover" />
                        </Card>
                    </div>

                    <div className="grid container md:grid-cols-8 gap-8">
                        <Card className="h-[320px] p-6 flex flex-col col-span-3 relative overflow-hidden" ref={containerRef}>
                            <CardHeader title="Beyond the Code" description="Explore my interests outside the realm of programming" />
                            <div className="relative w-full h-full">
                                {hobbies.map((hobby, index) => (
                                    <div
                                        key={hobby.title}
                                        className="absolute flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full cursor-pointer select-none"
                                        style={{
                                            transform: `translate(${positions[index].x}px, ${positions[index].y}px)`,
                                        }}
                                        onMouseDown={() => handleMouseDown(index)}
                                        onMouseUp={() => handleMouseUp(index)}
                                        onMouseMove={(event) => handleMouseMove(index, event)}
                                    >
                                        <span className="font-medium text-gray-950">{hobby.title}</span>
                                        <span>{hobby.emoji}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <Card className="h-[320px] p-0 relative col-span-3">
                            <Image src={mapImage} alt="My Map" className="h-full w-full object-cover" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-blue-300 to-blue-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-blue-400 after:animate-ping">
                                <Image src={smileMemoji} alt="My Memoji" className="size-20" />
                            </div>
                        </Card>

                        <Card className="h-[320px] col-span-3 md:col-span-2 p-6">
                            <CardHeader title="My Reads" description="Explore the books shaping my perspectives." />
                            <div className="w-40 mx-auto mt-8 cursor-pointer" onClick={() => setBookIndex((prev) => (prev + 1) % bookCovers.length)}>
                                <Image src={bookCovers[bookIndex]} alt="Book Cover" />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};