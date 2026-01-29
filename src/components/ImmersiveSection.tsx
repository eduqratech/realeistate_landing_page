import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface ImmersiveSectionProps {
  image: string;
  text: string;
}

export function ImmersiveSection({ image, text }: ImmersiveSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <motion.div className="absolute inset-0" style={{ scale }}>
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img
          src={image}
          alt="Luxury Space"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        className="relative z-20 h-full flex items-center justify-center px-6"
        style={{ opacity }}
      >
        <motion.h2
          className="text-white text-center max-w-4xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {text}
        </motion.h2>
      </motion.div>
    </div>
  );
}
