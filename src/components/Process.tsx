"use client";

import { motion } from "framer-motion";
import { PenTool, FileText, Hammer } from "lucide-react";
import { Section } from "./ui/Section";
import { Container } from "./ui/Container";
import { process } from "@/data/content";

const iconMap = {
  "pen-tool": PenTool,
  "file-text": FileText,
  hammer: Hammer,
};

export function Process() {
  return (
    <Section id="process" className="bg-charcoal">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-muted-brass tracking-[0.2em] uppercase text-sm mb-4">
            How We Work
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-warm-off-white">
            Our Process
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-muted-brass/50 to-transparent -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {process.map((step, index) => {
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
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-charcoal border-2 border-muted-brass flex items-center justify-center mb-6 relative z-10">
                      <Icon className="w-8 h-8 text-muted-brass" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-muted-brass text-charcoal font-playfair font-bold flex items-center justify-center mb-4">
                      {step.phase}
                    </div>
                    <h3 className="font-playfair text-2xl text-warm-off-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-warm-off-white/60 leading-relaxed max-w-xs">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}