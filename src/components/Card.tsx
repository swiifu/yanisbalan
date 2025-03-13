import { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
    className?: string; // Allow custom class names
}

export const Card = ({ children, className }: CardProps) => {
    return (
        <div
            className={`container bg-gray-800 rounded-3xl relative z-0 overflow-hidden 
                        flex flex-col items-start justify-start
                        after:z-10 after:content-[''] after:absolute after:inset-0 
                        after:outline-2 after:outline after:-outline-offset-2 
                        after:rounded-3xl after:outline-white/20 
                        after:pointer-events-none min-h-[280px] ${className || ""}`}
        >
            <div className="absolute inset-0 -z-10 opacity-5"></div>
            {children}
        </div>
    );
};