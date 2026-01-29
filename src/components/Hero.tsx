import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

interface HeroProps {
  heroImage: string;
}

export function Hero({ heroImage }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />
        <img
          src={heroImage}
          alt="Luxury Estate"
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <motion.p
            className="text-sm tracking-[0.3em] text-[rgb(var(--color-accent-light))] mb-6 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Exceptional Living
          </motion.p>
          <h1 className="text-white mb-6 max-w-4xl mx-auto">
            A lifestyle crafted beyond architecture
          </h1>
          <motion.p
            className="text-lg text-gray-200 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Where design meets intention. Where every detail speaks luxury.
          </motion.p>
          <motion.button
            className="group relative px-12 py-4 bg-transparent border border-[rgb(var(--color-accent))] text-[rgb(var(--color-accent))] overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <motion.span
              className="absolute inset-0 bg-[rgb(var(--color-accent))]"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            />
            <span className="relative z-10 tracking-[0.2em] text-sm group-hover:text-black transition-colors duration-300">
              ENTER THE EXPERIENCE
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1,
        }}
      >
        <ChevronDown className="w-6 h-6 text-[rgb(var(--color-accent))]" />
      </motion.div>
    </div>
  );
}
