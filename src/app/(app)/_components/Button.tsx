import clsx from "clsx";
import { MoveRight } from "lucide-react";
import { PropsWithChildren } from "react";

export interface ButtonProps {
  className?: string;
  animate?: boolean;
  icon?: React.ReactNode;
}

export default function Button({
  className = "border-alpha text-alpha",
  icon = <MoveRight />,
  animate = true,
  children,
}: PropsWithChildren<ButtonProps>) {
  return (
    <div
      className={clsx(
        "group flex items-center gap-3 rounded-lg border-2  px-6 py-3 font-bold uppercase",
        className
      )}
    >
      <span>{children}</span>
      <span
        className={clsx(animate && "duration-150 group-hover:translate-x-1")}
      >
        {icon}
      </span>
    </div>
  );
}
