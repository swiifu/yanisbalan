"use client";

import { useEffect, useState } from "react";

export const Header = () => {
    const [activeSection, setActiveSection] = useState("Home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["Home", "About", "Work"];
            let currentSection = "Home";

            sections.forEach((section) => {
                const element = document.getElementById(section.toLowerCase());
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        currentSection = section;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="flex justify-center items-center fixed top-3 w-full z-10">
            <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
                {["Home", "About", "Work"].map((section) => (
                    <a
                        key={section}
                        href={`#${section.toLowerCase()}`}
                        className={`nav-item ${
                            activeSection === section
                                ? "bg-white text-gray-900"
                                : "text-gray-400 hover:bg-white/20 hover:text-white"
                        }`}
                    >
                        {section}
                    </a>
                ))}
            </nav>
        </div>
    );
};