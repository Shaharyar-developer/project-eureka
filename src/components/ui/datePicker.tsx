import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar } from "./calendar";
import { CalendarDaysIcon } from "lucide-react";
import { cn, formatDate } from "../../libs/utils";
interface PopoverProps {
  children?: React.ReactNode;
  className?: string;
  onDateChange?: (date: Date) => void;
  defaultDate?: Date;
}

/**
 * DatePicker component.
 *
 * @component
 * @param {React.FC<PopoverProps>} props - The component props.
 * @param {string} [className] - The CSS class name for the DatePicker.
 * @param {Function} onDateChange - The callback function to be called with event being date.
 * @returns {JSX.Element} The rendered DatePicker component.
 */
const DatePicker: React.FC<PopoverProps> = ({
  className,
  onDateChange,
  defaultDate,
}) => {
  const [date, setDate] = React.useState<Date | undefined>(defaultDate);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setIsOpen(false);
  }, [date]);
  return (
    <div className="relative">
      <div
        className={
          cn(className) +
          " border flex gap-3 border-accent cursor-pointer  px-3 py-2 rounded-md bg-background text-muted-foreground"
        }
        onClick={togglePopover}
      >
        <CalendarDaysIcon />
        <>{date ? formatDate(date) : formatDate(new Date())}</>
      </div>
      <motion.div
        className="absolute bg-secondary top-12 rounded-md shadow-2xl shadow-accent/30"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={(e) => {
            setDate(e);
            if (onDateChange) onDateChange(e as Date);
          }}
        />
      </motion.div>
    </div>
  );
};

export { DatePicker };
