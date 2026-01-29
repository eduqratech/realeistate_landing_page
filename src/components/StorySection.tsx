import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface StorySectionProps {
  image: string;
}

export function StorySection({ image }: StorySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1]);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center py-32">
      {/* Parallax Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
          <motion.img
            src={image}
            alt="Luxury Interior"
            className="w-full h-full object-cover"
            style={{ scale }}
          />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12"
        style={{ opacity }}
      >
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <p className="text-sm tracking-[0.3em] text-[rgb(var(--color-accent))] mb-6 uppercase">
              Our Philosophy
            </p>
          </motion.div>

          <motion.h2
            className="text-white mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            Where design meets intention
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 leading-relaxed mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            Every space is a narrative of sophistication. We craft environments
            that transcend the ordinary, where architectural brilliance meets
            timeless elegance.
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            Where every detail speaks luxury.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
