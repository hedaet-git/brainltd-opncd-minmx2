"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section } from "./ui/Section";
import { Container } from "./ui/Container";
import { PremiumCard } from "./ui/PremiumCard";
import { services, ventures } from "@/data/content";

export function Services() {
  return (
    <Section id="services" className="bg-warm-off-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-muted-brass tracking-[0.2em] uppercase text-sm mb-4">
            What We Do
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-charcoal">
            Our Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <PremiumCard className="group h-full overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/20 transition-colors" />
                </div>
                <div className="p-8">
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
                  <button className="flex items-center gap-2 text-muted-brass font-medium group-hover:gap-3 transition-all">
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-charcoal/10 pt-16"
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
                className="text-center p-8 border border-charcoal/10 hover:border-muted-brass/30 transition-colors duration-500"
              >
                <h4 className="font-playfair text-xl text-charcoal mb-2">
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