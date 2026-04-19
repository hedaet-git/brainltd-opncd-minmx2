"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { Container } from "./ui/Container";
import { clients } from "@/data/content";

export function Clients() {
  return (
    <Section id="clients" className="bg-charcoal">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-muted-brass tracking-[0.2em] uppercase text-sm mb-4">
            Trusted By
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-warm-off-white">
            Esteemed Clients
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 border border-white/10 p-6 md:p-8 flex items-center justify-center min-h-[120px] transition-all duration-500 group-hover:border-muted-brass/50 group-hover:bg-white/10">
                <span className="font-playfair text-lg md:text-xl text-center text-warm-off-white/50 group-hover:text-warm-off-white transition-colors">
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}