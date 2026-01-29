import { motion } from "motion/react";
import { useState } from "react";
import { Send } from "lucide-react";

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 px-6 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-bg-secondary))] via-[rgb(var(--color-bg-primary))] to-[rgb(var(--color-bg-secondary))]" />
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgb(var(--color-accent)) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <p className="text-sm tracking-[0.3em] text-[rgb(var(--color-accent))] mb-6 uppercase">
            Begin Your Journey
          </p>
          <h2 className="mb-8">Request a Private Viewing</h2>
          <p className="text-lg text-[rgb(var(--color-text-secondary))] mb-16 max-w-2xl mx-auto">
            Experience luxury firsthand. Our team will curate a personalized
            tour of your selected properties.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="px-6 py-4 bg-[rgb(var(--color-bg-secondary))] border border-[rgb(var(--color-border))] text-[rgb(var(--color-text-primary))] placeholder:text-[rgb(var(--color-text-secondary))] focus:border-[rgb(var(--color-accent))] focus:outline-none transition-colors duration-300"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="px-6 py-4 bg-[rgb(var(--color-bg-secondary))] border border-[rgb(var(--color-border))] text-[rgb(var(--color-text-primary))] placeholder:text-[rgb(var(--color-text-secondary))] focus:border-[rgb(var(--color-accent))] focus:outline-none transition-colors duration-300"
              required
            />
          </div>

          <input
            type="tel"
            placeholder="Preferred Contact"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full px-6 py-4 mb-6 bg-[rgb(var(--color-bg-secondary))] border border-[rgb(var(--color-border))] text-[rgb(var(--color-text-primary))] placeholder:text-[rgb(var(--color-text-secondary))] focus:border-[rgb(var(--color-accent))] focus:outline-none transition-colors duration-300"
            required
          />

          <textarea
            placeholder="Message (Optional)"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows={5}
            className="w-full px-6 py-4 mb-8 bg-[rgb(var(--color-bg-secondary))] border border-[rgb(var(--color-border))] text-[rgb(var(--color-text-primary))] placeholder:text-[rgb(var(--color-text-secondary))] focus:border-[rgb(var(--color-accent))] focus:outline-none transition-colors duration-300 resize-none"
          />

          <motion.button
            type="submit"
            className="group relative px-12 py-4 bg-transparent border border-[rgb(var(--color-accent))] text-[rgb(var(--color-accent))] overflow-hidden mx-auto flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-[rgb(var(--color-accent))]"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            />
            <span className="relative z-10 tracking-[0.2em] text-sm group-hover:text-black transition-colors duration-300">
              SUBMIT REQUEST
            </span>
            <Send className="relative z-10 w-4 h-4 group-hover:text-black transition-colors duration-300" />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
