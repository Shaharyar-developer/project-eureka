import { forwardRef, ReactNode } from "react";
import { cn } from "../../libs/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className }, ref) => {
    return (
      <div className={cn(className) + " p-1 rounded bg-"} ref={ref}>
        {children as ReactNode}
      </div>
    );
  }
);

export { Card };
