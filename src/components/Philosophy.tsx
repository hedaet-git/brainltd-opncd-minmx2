"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { Container } from "./ui/Container";
import { TextReveal } from "./animations/TextReveal";
import { SplitText } from "./animations/TextReveal";
import { philosophy, founders } from "@/data/content";

export function Philosophy() {
  return (
    <Section id="philosophy" className="bg-charcoal text-warm-off-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-muted-brass tracking-[0.2em] uppercase text-sm mb-4">
              Our Philosophy
            </p>
            <TextReveal direction="up" delay={0.1}>
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
                {philosophy.headline}
              </h2>
            </TextReveal>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-warm-off-white/70 text-lg leading-relaxed mb-8"
            >
              {philosophy.story}
            </motion.p>
            <blockquote className="border-l-2 border-muted-brass pl-6 italic text-warm-off-white/90 text-xl">
              &ldquo;{philosophy.quote}&rdquo;
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-8"
          >
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 hover:border-muted-brass/50 transition-colors duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted-brass/20 flex items-center justify-center text-muted-brass font-playfair text-xl font-bold flex-shrink-0">
                    {founder.name[0]}
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl mb-1">{founder.name}</h3>
                    <p className="text-muted-brass text-sm tracking-wider uppercase mb-3">
                      {founder.role}
                    </p>
                    <p className="text-warm-off-white/60 text-sm leading-relaxed">
                      {founder.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}