"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { Section } from "./ui/Section";
import { Container } from "./ui/Container";
import { TextReveal } from "./animations/TextReveal";
import { clients } from "@/data/content";

const SPLINE_SCENE = "https://prod.spline.design/cl1RvkFjyM-iab9i/scene.splinecode";

export function Clients() {
  return (
    <Section id="clients" className="bg-charcoal relative overflow-hidden">
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
            Trusted By
          </p>
          <TextReveal>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-warm-off-white">
              Esteemed Clients
            </h2>
          </TextReveal>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                className="bg-white/5 border border-white/10 p-6 md:p-8 flex items-center justify-center min-h-[120px] transition-all duration-500 group-hover:border-muted-brass/50 group-hover:bg-white/10 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <Suspense fallback={null}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                    <Spline scene={SPLINE_SCENE} />
                  </div>
                </Suspense>
                <span className="font-playfair text-lg md:text-xl text-center text-warm-off-white/50 group-hover:text-muted-brass transition-colors relative z-10">
                  {client.name}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}