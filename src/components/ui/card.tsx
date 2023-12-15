import { forwardRef, ReactNode } from "react";
import { cn } from "../../libs/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, onClick }, ref) => {
    return (
      <div
        onClick={onClick}
        className={
          cn(className) +
          " p-4 border border-muted-foreground/25 rounded-md bg-card"
        }
        ref={ref}
      >
        {children as ReactNode}
      </div>
    );
  }
);

export { Card };
