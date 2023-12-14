import { motion } from "framer-motion";
export default function CloseIcon() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      className="text-white"
    >
      <motion.path
        fill="#fff"
        fillRule="evenodd"
        d="M10 8.586L15.95 2.636a.5.5 0 01.707.708L10.707 9.293l5.95 5.95a.5.5 0 01-.707.708L10 10.707l-5.95 5.95a.5.5 0 11-.708-.708L9.293 10 3.343 4.05a.5.5 0 01.708-.708L10 8.586z"
        clipRule="evenodd"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
      ></motion.path>
      <motion.path
        fill="#fff"
        fillRule="evenodd"
        d="M10 8.586L4.05 2.636a.5.5 0 00-.707.708L9.293 9.293 3.343 15.243a.5.5 0 00.708.708L10 10.707l5.95 5.95a.5.5 0 00.708-.708L10.707 9.293l5.95-5.95a.5.5 0 00-.707-.708L10 8.586z"
        clipRule="evenodd"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
      ></motion.path>
    </motion.svg>
  );
}
