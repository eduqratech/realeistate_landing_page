import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Properties", href: "#properties" },
        { name: "Story", href: "#story" },
        { name: "Philosophy", href: "#philosophy" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
                    ? "bg-[rgb(var(--color-bg-primary))/0.9] backdrop-blur-md py-4 border-b border-[rgb(var(--color-border))]"
                    : "bg-transparent py-6"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 z-50 relative">
                        <span className={`text-xl font-serif tracking-widest ${isScrolled || isMobileMenuOpen ? "text-[rgb(var(--color-text-primary))]" : "text-white"}`}>
                            LUXURY
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-sm uppercase tracking-widest hover:text-[rgb(var(--color-accent))] transition-colors duration-300 ${isScrolled ? "text-[rgb(var(--color-text-primary))]" : "text-white"
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <motion.a
                            href="#contact"
                            className="px-6 py-2 border border-[rgb(var(--color-accent))] text-[rgb(var(--color-accent))] text-sm uppercase tracking-widest hover:bg-[rgb(var(--color-accent))] hover:text-white transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Inquire
                        </motion.a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden z-50 relative"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-8 h-8 text-[rgb(var(--color-text-primary))]" />
                        ) : (
                            <Menu className={`w-8 h-8 ${isScrolled ? "text-[rgb(var(--color-text-primary))]" : "text-white"}`} />
                        )}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-[rgb(var(--color-bg-primary))] flex flex-col justify-center items-center md:hidden"
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <div className="flex flex-col gap-8 text-center">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    className="text-2xl font-serif text-[rgb(var(--color-text-primary))] hover:text-[rgb(var(--color-accent))] transition-colors"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index + 0.2 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contact"
                                className="mt-8 px-8 py-3 bg-[rgb(var(--color-accent))] text-white text-sm uppercase tracking-widest hover:bg-[rgb(var(--color-accent-light))] transition-colors"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Inquire Now
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
