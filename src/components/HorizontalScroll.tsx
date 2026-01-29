import { motion } from "motion/react";
import { useRef } from "react";

const pillars = [
  {
    title: "Architecture",
    description: "Visionary designs that redefine living spaces",
    number: "01",
    image: "/architecture.png",
  },
  {
    title: "Interiors",
    description: "Curated elegance in every detail",
    number: "02",
    image: "/interiors.png",
  },
  {
    title: "Landscape",
    description: "Nature sculpted to perfection",
    number: "03",
    image: "/landscape.png",
  },
  {
    title: "Lifestyle",
    description: "An experience beyond expectations",
    number: "04",
    image: "/lifestyle.png",
  },
];

export function HorizontalScroll() {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative py-32 bg-[rgb(var(--color-bg-secondary))]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <p className="text-sm tracking-[0.3em] text-[rgb(var(--color-accent))] mb-6 uppercase">
            Core Values
          </p>
          <h2 className="mb-6">Our Design Philosophy</h2>
          <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-2xl mx-auto">
            Principles that guide our creation of timeless living spaces
          </p>
        </motion.div>

        {/* Grid Container */}
        <div
          ref={targetRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className="relative h-[70vh] w-full overflow-hidden group rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to Unsplash
                    const target = e.target as HTMLImageElement;
                    if (pillar.title === "Architecture") target.src = "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop";
                    if (pillar.title === "Interiors") target.src = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2674&auto=format&fit=crop";
                    if (pillar.title === "Landscape") target.src = "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2670&auto=format&fit=crop";
                    if (pillar.title === "Lifestyle") target.src = "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2670&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-black/40 md:group-hover:bg-black/20 transition-colors duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              <div className="relative h-full p-8 md:p-12 flex flex-col justify-between border border-white/10 hover:border-white/30 transition-colors duration-500 rounded-lg">
                <div className="flex justify-end w-full">
                  <div className="text-5xl md:text-7xl opacity-40 text-white font-serif">
                    {pillar.number}
                  </div>
                </div>

                <div className="relative z-10 w-full">
                  <h3 className="mb-3 text-3xl md:text-4xl text-white font-medium tracking-wide">
                    {pillar.title}
                  </h3>
                  <div className="w-12 h-[1px] bg-[rgb(var(--color-accent))] mb-4 group-hover:w-20 transition-all duration-500" />
                  <p className="text-base text-white/90 max-w-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
