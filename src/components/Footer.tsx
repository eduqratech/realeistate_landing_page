import { motion } from "motion/react";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Facebook, href: "#" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/suresh-peddinti-5b6941232",
    },
  ];

  return (
    <footer className="relative py-20 px-6 lg:px-12 border-t border-[rgb(var(--color-border))]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl mb-4 text-[rgb(var(--color-accent))]">
              LUXURY
            </h3>
            <p className="text-sm text-[rgb(var(--color-text-secondary))] leading-relaxed">
              Crafting exceptional living spaces that transcend ordinary
              expectations.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-sm tracking-[0.2em] mb-6 uppercase">
              Explore
            </h4>
            <ul className="space-y-3">
              {["Properties", "About Us", "Services", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-accent))] transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-sm tracking-[0.2em] mb-6 uppercase">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Luxury Villas",
                "Interior Design",
                "Architecture",
                "Property Management",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-accent))] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-sm tracking-[0.2em] mb-6 uppercase">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[rgb(var(--color-accent))]" />
                <a
                  href="mailto:sureshpeddinti221@gmail.com"
                  className="text-sm text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-accent))] transition-colors duration-300"
                >
                  sureshpeddinti221@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[rgb(var(--color-accent))]" />
                <a
                  href="tel:+919618344086"
                  className="text-sm text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-accent))] transition-colors duration-300"
                >
                  +91 9618344086
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[rgb(var(--color-accent))] mt-1 flex-shrink-0" />
                <span className="text-sm text-[rgb(var(--color-text-secondary))]">
                  Gallery milinium plaza upperpally chintalmate road Rangareddy
                  Hyderbad 500048
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-[rgb(var(--color-border))] flex items-center justify-center hover:border-[rgb(var(--color-accent))] hover:bg-[rgb(var(--color-accent)/0.1)] transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4 text-[rgb(var(--color-text-secondary))]" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-[rgb(var(--color-border))] flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-sm text-[rgb(var(--color-text-secondary))]">
            © 2026 Luxury. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-accent))] transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-accent))] transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
