import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

export function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-40 p-3 rounded-full bg-[rgb(var(--color-bg-secondary))] border border-[rgb(var(--color-border))] hover:border-[rgb(var(--color-accent))] transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        {theme === "dark" ? (
          <Moon className="w-5 h-5 text-[rgb(var(--color-accent))]" />
        ) : (
          <Sun className="w-5 h-5 text-[rgb(var(--color-accent))]" />
        )}
      </motion.div>
    </motion.button>
  );
}
