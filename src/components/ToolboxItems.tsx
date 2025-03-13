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
}

export const ToolboxItems = ({ toolboxItems, className, itemsWrapperClassName }: ToolboxItemsProps) => {
    return (
        <div
            className={twMerge(
                "relative flex w-full overflow-hidden", // Ensure container handles overflow properly
                className
            )}
        >
            <div
                className={twMerge(
                    "relative flex flex-nowrap py-0.5 gap-6 pr-6 min-w-max", // Ensure items don't shrink
                    itemsWrapperClassName
                )}
                style={{
                    maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to left, transparent 0%, black 90%, black 10%, transparent 100%)"
                }}
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