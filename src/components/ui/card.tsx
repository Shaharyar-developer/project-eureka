import { forwardRef, ReactNode } from "react";
import { cn } from "../../libs/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

/**
 * A custom card component.
 *
 * @component
 * @param {ReactNode} children - The content of the card.
 * @param {string} className - Additional CSS class names for the card.
 * @param {function} onClick - The click event handler for the card.
 * @returns {JSX.Element} The rendered card component.
 */
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
