import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

const Input: React.FC<HTMLMotionProps<"input">> = ({
  value,
  onChange,
  initial,
  animate,
  transition,
  className,
  placeholder,
}) => {
  return (
    <motion.input
      type="text"
      value={value}
      onChange={(e) => {
        onChange ? onChange(e) : null;
      }}
      initial={initial}
      animate={animate}
      placeholder={placeholder}
      transition={transition}
      className={
        className +
        " bg-accent text-foreground px-3 py-2 rounded-md focus:outline-primary/10 focus:outline-1"
      }
    />
  );
};

export default Input;
