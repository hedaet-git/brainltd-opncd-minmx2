"use client";

import { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { Section } from "./ui/Section";
import { Container } from "./ui/Container";
import { TextReveal, SplitText } from "./animations/TextReveal";
import { portfolio } from "@/data/content";

const categories = [
  { id: "all", label: "All" },
  { id: "commercial", label: "Commercial" },
  { id: "residential", label: "Residential" },
  { id: "retail", label: "Retail" },
];

const SPLINE_SCENE = "https://prod.spline.design/cl1RvkFjyM-iab9i/scene.splinecode";

function PortfolioCard({ project, index }: { project: typeof portfolio[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className="relative aspect-[4/3] overflow-hidden cursor-pointer"
        style={{
          perspective: 1000,
          transform: isHovered 
            ? `rotateY(${mousePosition.x * 10}deg) rotateX(${mousePosition.y * -10}deg)` 
            : "rotateY(0deg) rotateX(0deg)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${project.image})`,
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
          transition={{ duration: 0.6 }}
        />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent"
          animate={{ opacity: isHovered ? 1 : 0.6 }}
          transition={{ duration: 0.3 }}
        />
        
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
            >
              <Suspense fallback={null}>
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <Spline scene={SPLINE_SCENE} />
                </div>
              </Suspense>
              <div className="relative z-10">
                <motion.h3 
                  className="font-playfair text-2xl text-warm-off-white mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-muted-brass text-sm tracking-wider uppercase"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.client}
                </motion.p>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="mt-4 w-12 h-12 rounded-full border-2 border-muted-brass flex items-center justify-center"
                >
                  <span className="text-muted-brass text-lg">+</span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {!isHovered && (
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="font-playfair text-xl text-warm-off-white">{project.title}</h3>
            <p className="text-warm-off-white/60 text-sm">{project.client}</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const filteredProjects = activeFilter === "all"
    ? portfolio
    : portfolio.filter((project) => project.category === activeFilter);

  const handleFilterChange = (filterId: string) => {
    if (filterId === activeFilter) return;
    setIsTransitioning(true);
    setActiveFilter(filterId);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  return (
    <Section id="portfolio" className="bg-warm-off-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <Spline scene={SPLINE_SCENE} />
      </div>
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 relative z-10"
        >
          <p className="text-muted-brass tracking-[0.2em] uppercase text-sm mb-4">
            Our Work
          </p>
          <TextReveal>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-charcoal mb-4">
              Portfolio
            </h2>
          </TextReveal>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12 relative z-10"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleFilterChange(category.id)}
              className={`px-6 py-2 text-sm tracking-wider uppercase transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-charcoal text-warm-off-white"
                  : "bg-transparent text-charcoal border border-charcoal/30 hover:border-charcoal"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <PortfolioCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </Section>
  );
}