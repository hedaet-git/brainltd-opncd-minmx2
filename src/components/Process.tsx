"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { PenTool, FileText, Hammer, ArrowRight } from "lucide-react";
import { Section } from "./ui/Section";
import { Container } from "./ui/Container";
import { TextReveal } from "./animations/TextReveal";
import { process } from "@/data/content";

const SPLINE_SCENE = "https://prod.spline.design/cl1RvkFjyM-iab9i/scene.splinecode";

const iconMap = {
  "pen-tool": PenTool,
  "file-text": FileText,
  hammer: Hammer,
};

function ProcessStep({ step, index }: { step: typeof process[0]; index: number }) {
  const Icon = iconMap[step.icon as keyof typeof iconMap];
  
  return (
    <motion.div
      key={step.phase}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      <motion.div
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex flex-col items-center text-center"
      >
        <div className="relative mb-6">
          <div className="w-24 h-24 rounded-full bg-charcoal border-2 border-muted-brass flex items-center justify-center relative z-10 overflow-hidden">
            <Suspense fallback={
              <div className="w-full h-full bg-charcoal animate-pulse" />
            }>
              <Spline scene={SPLINE_SCENE} className="w-full h-full" />
            </Suspense>
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-muted-brass text-charcoal font-playfair font-bold flex items-center justify-center z-20">
            <span className="text-sm">{step.phase}</span>
          </div>
        </div>
        
        <motion.h3 
          className="font-playfair text-2xl text-warm-off-white mb-3"
          whileHover={{ color: "#C9A66B" }}
        >
          {step.title}
        </motion.h3>
        <p className="text-warm-off-white/60 leading-relaxed max-w-xs">
          {step.description}
        </p>
        
        {index < process.length - 1 && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + 0.5 }}
            className="hidden lg:block absolute top-12 left-[60%]"
          >
            <ArrowRight className="w-8 h-8 text-muted-brass/30" />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export function Process() {
  return (
    <Section id="process" className="bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <Spline scene={SPLINE_SCENE} />
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
            How We Work
          </p>
          <TextReveal>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-warm-off-white">
              Our Process
            </h2>
          </TextReveal>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-muted-brass/50 to-transparent -translate-y-1/2 z-0" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {process.map((step, index) => (
              <ProcessStep key={step.phase} step={step} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}