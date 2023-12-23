import { motion } from "framer-motion";
import "./first-section.css";

export default function FirstSection() {
  return (
    <section className="flex h-full w-full flex-col bg-yellow-400">
      <div className="flex flex-1 flex-col gap-2 px-24 pt-24 text-3xl font-bold">
        <p>
          Hi <span className="waving-hand">👋</span>
        </p>
        <span>I am Lukas</span>
        <span>and I work as a</span>

        <motion.div
          className="font-integrale flex flex-row gap-8 text-9xl"
          animate={{
            x: ["0%", "-152%"],
            transition: {
              duration: 30,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
        >
          <span className="transition-all duration-300 hover:text-white">
            Designer
          </span>
          <span className="transition-all duration-300 hover:text-white">
            Developer
          </span>
          <span className="transition-all duration-300 hover:text-white">
            Creator
          </span>
          <span className="transition-all duration-300 hover:text-white">
            Designer
          </span>
          <span className="transition-all duration-300 hover:text-white">
            Developer
          </span>
          <span className="transition-all duration-300 hover:text-white">
            Creator
          </span>
        </motion.div>
      </div>
    </section>
  );
}
