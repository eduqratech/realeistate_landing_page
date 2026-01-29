import { useState, useEffect } from "react";
import { Preloader } from "./components/Preloader";
import { ThemeToggle } from "./components/ThemeToggle";
import { Hero } from "./components/Hero";
import { StorySection } from "./components/StorySection";
import { HorizontalScroll } from "./components/HorizontalScroll";
import { ImmersiveSection } from "./components/ImmersiveSection";
import { PropertyGallery } from "./components/PropertyGallery";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const properties = [
    {
      image:
        "https://images.unsplash.com/photo-1622015663319-e97e697503ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGFyY2hpdGVjdHVyZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2OTUxNjcyOXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Celestial Heights",
      location: "Beverly Hills, California",
      type: "Ultra-Luxury Villa",
      size: "12,500 sq ft",
      price: "$24.5M",
    },
    {
      image:
        "https://images.unsplash.com/photo-1629787302738-2c6e9f3dada1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBsdXh1cnklMjBlc3RhdGV8ZW58MXx8fHwxNzY5NTg2MTA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Azure Residence",
      location: "Malibu Coast, California",
      type: "Modern Estate",
      size: "9,800 sq ft",
      price: "$18.2M",
    },
    {
      image:
        "https://images.unsplash.com/photo-1764660732489-6d6e5d0673e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWFjaGZyb250JTIwdmlsbGElMjBvY2VhbnxlbnwxfHx8fDE3Njk1ODYxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Oceanic Paradise",
      location: "Miami Beach, Florida",
      type: "Beachfront Villa",
      size: "11,200 sq ft",
      price: "$32.8M",
    },
    {
      image:
        "https://images.unsplash.com/photo-1568115286680-d203e08a8be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBjaXR5JTIwdmlld3xlbnwxfHx8fDE3Njk1MDU5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Skyline Penthouse",
      location: "Manhattan, New York",
      type: "Luxury Penthouse",
      size: "7,500 sq ft",
      price: "$45.6M",
    },
    {
      image:
        "https://images.unsplash.com/photo-1759256243437-9c8f7238c42b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYW5zaW9uJTIwcG9vbCUyMHN1bnNldHxlbnwxfHx8fDE3Njk1ODYxMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Sunset Manor",
      location: "Palm Springs, California",
      type: "Desert Estate",
      size: "14,300 sq ft",
      price: "$21.9M",
    },
    {
      image:
        "https://images.unsplash.com/photo-1761206669375-ed4374a42898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eSUyMGdhcmRlbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3Njk1ODYxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Garden Estate",
      location: "Hamptons, New York",
      type: "Country Estate",
      size: "16,800 sq ft",
      price: "$28.4M",
    },
  ];

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="relative">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <Hero heroImage="https://images.unsplash.com/photo-1635111031688-9b13c0125d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlJTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3Njk1MTA3NzR8MA&ixlib=rb-4.1.0&q=80&w=1080" />

      {/* Story Section */}
      <StorySection image="https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY5NDkxMTgzfDA&ixlib=rb-4.1.0&q=80&w=1080" />

      {/* Horizontal Scroll Section */}
      <HorizontalScroll />

      {/* Immersive Visual Section */}
      <ImmersiveSection
        image="https://images.unsplash.com/photo-1622015663319-e97e697503ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGFyY2hpdGVjdHVyZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2OTUxNjcyOXww&ixlib=rb-4.1.0&q=80&w=1080"
        text="Spaces designed to elevate everyday living"
      />

      {/* Property Gallery with Flip Cards */}
      <PropertyGallery properties={properties} />

      {/* Another Immersive Section */}
      <ImmersiveSection
        image="https://images.unsplash.com/photo-1759256243437-9c8f7238c42b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYW5zaW9uJTIwcG9vbCUyMHN1bnNldHxlbnwxfHx8fDE3Njk1ODYxMTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
        text="Connected to the city. Reserved for the few."
      />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
