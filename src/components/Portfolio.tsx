"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "./ui/Section";
import { Container } from "./ui/Container";
import { portfolio } from "@/data/content";

const categories = [
  { id: "all", label: "All" },
  { id: "commercial", label: "Commercial" },
  { id: "residential", label: "Residential" },
  { id: "retail", label: "Retail" },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all"
    ? portfolio
    : portfolio.filter((project) => project.category === activeFilter);

  return (
    <Section id="portfolio" className="bg-warm-off-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-muted-brass tracking-[0.2em] uppercase text-sm mb-4">
            Our Work
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-charcoal mb-4">
            Portfolio
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 text-sm tracking-wider uppercase transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-charcoal text-warm-off-white"
                  : "bg-transparent text-charcoal border border-charcoal/30 hover:border-charcoal"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="group relative aspect-[4/3] overflow-hidden cursor-pointer">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-6">
                  <h3 className="font-playfair text-2xl text-warm-off-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-brass text-sm tracking-wider uppercase">
                    {project.client}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}