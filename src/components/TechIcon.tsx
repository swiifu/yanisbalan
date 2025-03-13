import React, { ElementType } from "react";

type TechIconProps = {
    component: ElementType;
};

export const TechIcon = ({ component: Component }: TechIconProps) => {
    if (!Component || typeof Component !== "function") {
        console.error("TechIcon received an invalid component:", Component);
        return null; // Prevents React from crashing
    }

    return (
        <div className="size-10 relative">
            <svg className="absolute size-0">
                <defs>
                    <linearGradient id="tech-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                        <stop offset="100%" stopColor="rgb(139, 130, 246)" />
                    </linearGradient>
                </defs>
            </svg>
            <Component className="w-full h-full" fill="url(#tech-icon-gradient)" stroke="" />
        </div>
    );
};