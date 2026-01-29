import { motion } from "motion/react";
import { PropertyCard } from "./PropertyCard";

interface PropertyGalleryProps {
  properties: Array<{
    image: string;
    title: string;
    location: string;
    type: string;
    size: string;
    price: string;
  }>;
}

export function PropertyGallery({ properties }: PropertyGalleryProps) {
  return (
    <section className="py-32 px-6 lg:px-12 bg-[rgb(var(--color-bg-primary))]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <p className="text-sm tracking-[0.3em] text-[rgb(var(--color-accent))] mb-6 uppercase">
            Signature Collection
          </p>
          <h2 className="mb-6">Crafted for the Exceptional</h2>
          <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-2xl mx-auto">
            Discover residences where architectural mastery meets unparalleled luxury
          </p>
        </motion.div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              index={index}
              image={property.image}
              title={property.title}
              location={property.location}
              type={property.type}
              size={property.size}
              price={property.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
