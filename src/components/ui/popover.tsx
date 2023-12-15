import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../libs/utils";

interface PopoverProps {
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

const Popover: React.FC<PopoverProps> = ({ children, content, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="" onClick={handleToggle}>
        {children}
      </div>

      <motion.div
        initial={{ opacity: 0.4, scale: 0 }}
        animate={{ opacity: isOpen ? 1 : 0.4, scale: isOpen ? 1 : 0 }}
        transition={{ duration: 0.15 }}
        className={cn(className) + " absolute mt-2"}
      >
        {content}
      </motion.div>
    </div>
  );
};

export { Popover };
