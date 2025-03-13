import { TechIcon } from "@/components/TechIcon";
import { twMerge } from "tailwind-merge";

interface ToolboxItem {
    title: string;
    iconType: React.ElementType;
}

interface ToolboxItemsProps {
    toolboxItems: ToolboxItem[];
    className?: string;
    itemsWrapperClassName?: string;
    direction?: "left" | "right"; // Controls movement direction
}

export const ToolboxItems = ({ toolboxItems, className, itemsWrapperClassName, direction = "right" }: ToolboxItemsProps) => {
    return (
        <div
            className={twMerge(
                "relative flex w-full overflow-hidden", // Keeps items moving inside
                className
            )}
        >
            <div
                className={twMerge(
                    "relative flex flex-nowrap py-0.5 gap-6 pr-6 min-w-max",
                    direction === "right" ? "animate-slide-right" : "animate-slide-left", // Controls animation direction
                    itemsWrapperClassName
                )}
            >
                {toolboxItems.map((item) => (
                    <div
                        key={item.title}
                        className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
                    >
                        <TechIcon component={item.iconType} />
                        <span className="font-semibold">{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};