"use client";

import { Suspense, useState } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { Section } from "./ui/Section";
import { Container } from "./ui/Container";
import { PremiumCard } from "./ui/PremiumCard";
import { TextReveal } from "./animations/TextReveal";
import { services, ventures } from "@/data/content";

const SPLINE_SCENES = {
  commercial: "https://prod.spline.design/cl1RvkFjyM-iab9i/scene.splinecode",
  residential: "https://prod.spline.design/cl1RvkFjyM-iab9i/scene.splinecode",
  retail: "https://prod.spline.design/cl1RvkFjyM-iab9i/scene.splinecode",
};

function SplinePlaceholder({ scene }: { scene: string }) {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <div className="relative w-full h-full">
      <Suspense fallback={
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/10 to-charcoal/30 animate-pulse" />
      }>
        <Spline 
          scene={scene} 
          onLoad={() => setLoaded(true)}
          className="w-full h-full"
        />
      </Suspense>
    </div>
  );
}

function ServiceCard({ service, index, sceneUrl }: { service: typeof services[0]; index: number; sceneUrl: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <PremiumCard className="group h-full overflow-hidden relative">
        <motion.div 
          className="relative h-64 overflow-hidden bg-charcoal/5"
          animate={{ scale: isHovered ? 1.02 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <Suspense fallback={
            <div className="absolute inset-0 bg-gradient-to-br from-charcoal/10 to-charcoal/30 animate-pulse" />
          }>
            <Spline scene={sceneUrl} className="w-full h-full" />
          </Suspense>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-warm-off-white via-transparent to-transparent"
            animate={{ opacity: isHovered ? 0.3 : 0.7 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <div className="p-8 relative z-10 bg-warm-off-white">
          <h3 className="font-playfair text-2xl text-charcoal mb-4 group-hover:text-muted-brass transition-colors">
            {service.title}
          </h3>
          <p className="text-soft-gray mb-6 leading-relaxed">
            {service.description}
          </p>
          <ul className="space-y-2 mb-6">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-charcoal/70"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-muted-brass" />
                {feature}
              </li>
            ))}
          </ul>
          <motion.button 
            className="flex items-center gap-2 text-muted-brass font-medium group-hover:gap-3 transition-all cursor-pointer"
            whileHover={{ x: 5 }}
          >
            Learn More <span className="text-lg">→</span>
          </motion.button>
        </div>
      </PremiumCard>
    </motion.div>
  );
}

export function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <Section id="services" className="bg-warm-off-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <Spline scene="https://prod.spline.design/cl1RvkFjyM-iab9i/scene.splinecode" />
      </div>
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative z-10"
        >
          <p className="text-muted-brass tracking-[0.2em] uppercase text-sm mb-4">
            What We Do
          </p>
          <TextReveal>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-charcoal">
              Our Services
            </h2>
          </TextReveal>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20 relative z-10">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index}
              sceneUrl={SPLINE_SCENES[service.id as keyof typeof SPLINE_SCENES]}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-charcoal/10 pt-16 relative z-10"
        >
          <p className="text-center text-soft-gray tracking-[0.2em] uppercase text-sm mb-10">
            Extended Ventures
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {ventures.map((venture, index) => (
              <motion.div
                key={venture.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 border border-charcoal/10 hover:border-muted-brass/30 transition-colors duration-500 group"
              >
                <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Spline scene="https://prod.spline.design/cl1RvkFjyM-iab9i/scene.splinecode" className="w-20 h-20" />
                </div>
                <h4 className="font-playfair text-xl text-charcoal mb-2 group-hover:text-muted-brass transition-colors">
                  {venture.name}
                </h4>
                <p className="text-soft-gray text-sm">{venture.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}