import { motion } from "motion/react";
import { MapPin, Home, Maximize } from "lucide-react";
import { useState } from "react";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  type: string;
  size: string;
  price: string;
  index: number;
}

export function PropertyCard({
  image,
  title,
  location,
  type,
  size,
  price,
  index,
}: PropertyCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-[500px] cursor-pointer perspective-1000"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        {/* Front Face */}
        <div className="absolute inset-0 backface-hidden">
          <div className="relative h-full overflow-hidden group">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-accent)/0.2)] via-transparent to-[rgb(var(--color-accent)/0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
            
            {/* Image with zoom effect */}
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
            />

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent z-20">
              <motion.h3
                className="text-white mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {title}
              </motion.h3>
              <p className="text-[rgb(var(--color-accent-light))] text-sm tracking-[0.2em]">
                {price}
              </p>
            </div>

            {/* Flip indicator */}
            <div className="absolute top-6 right-6 z-20">
              <motion.div
                className="w-12 h-12 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center"
                whileHover={{ scale: 1.1, borderColor: "rgb(var(--color-accent))" }}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="w-full h-full bg-[rgb(var(--color-bg-secondary))] border border-[rgb(var(--color-border))] p-8 flex flex-col justify-between">
            <div>
              <h3 className="mb-8">{title}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[rgb(var(--color-accent))] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-[rgb(var(--color-text-secondary))] mb-1">
                      Location
                    </p>
                    <p className="text-[rgb(var(--color-text-primary))]">
                      {location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Home className="w-5 h-5 text-[rgb(var(--color-accent))] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-[rgb(var(--color-text-secondary))] mb-1">
                      Property Type
                    </p>
                    <p className="text-[rgb(var(--color-text-primary))]">
                      {type}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Maximize className="w-5 h-5 text-[rgb(var(--color-accent))] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-[rgb(var(--color-text-secondary))] mb-1">
                      Plot Size
                    </p>
                    <p className="text-[rgb(var(--color-text-primary))]">
                      {size}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="w-full h-[1px] bg-[rgb(var(--color-border))] mb-6" />
              <div className="flex items-center justify-between">
                <p className="text-2xl text-[rgb(var(--color-accent))]">
                  {price}
                </p>
                <button className="px-6 py-3 border border-[rgb(var(--color-accent))] text-[rgb(var(--color-accent))] hover:bg-[rgb(var(--color-accent))] hover:text-black transition-all duration-300 text-sm tracking-[0.2em]">
                  ENQUIRE NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </motion.div>
  );
}
