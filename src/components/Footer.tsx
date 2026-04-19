"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, ArrowRight, Clock } from "lucide-react";
import { Section } from "./ui/Section";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { company } from "@/data/content";

export function Footer() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
  };

  return (
    <Section id="contact" className="bg-charcoal pt-32">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-muted-brass tracking-[0.2em] uppercase text-sm mb-4">
              Get In Touch
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-warm-off-white mb-8">
              Let&apos;s Create Together
            </h2>
            <p className="text-warm-off-white/70 text-lg leading-relaxed mb-12">
              Ready to transform your space into something extraordinary? 
              Contact us for a consultation and let&apos;s bring your vision to life.
            </p>

            <div className="space-y-6 mb-12">
              {company.locations.map((location) => (
                <div key={location.city} className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-muted-brass mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-warm-off-white font-medium">{location.city} ({location.area})</p>
                    <p className="text-warm-off-white/60 text-sm">{location.type}</p>
                  </div>
                </div>
              ))}

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-muted-brass mt-1 flex-shrink-0" />
                <div>
                  {company.phone.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="block text-warm-off-white/70 hover:text-muted-brass transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-muted-brass mt-1 flex-shrink-0" />
                <a
                  href={`mailto:${company.email}`}
                  className="text-warm-off-white/70 hover:text-muted-brass transition-colors"
                >
                  {company.email}
                </a>
              </div>

              <div className="flex items-start gap-4">
                <Instagram className="w-5 h-5 text-muted-brass mt-1 flex-shrink-0" />
                <a
                  href={`https://instagram.com/${company.social.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-off-white/70 hover:text-muted-brass transition-colors"
                >
                  {company.social.instagram}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-warm-off-white/70 text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 text-warm-off-white px-4 py-3 focus:outline-none focus:border-muted-brass transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-warm-off-white/70 text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 text-warm-off-white px-4 py-3 focus:outline-none focus:border-muted-brass transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-warm-off-white/70 text-sm mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-warm-off-white px-4 py-3 focus:outline-none focus:border-muted-brass transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-warm-off-white/70 text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-warm-off-white px-4 py-3 focus:outline-none focus:border-muted-brass transition-colors resize-none"
                  required
                />
              </div>

              <Button type="submit" variant="secondary" size="lg" className="w-full md:w-auto">
                Send Message <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-warm-off-white/50 text-sm">
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-warm-off-white/50 hover:text-muted-brass text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-warm-off-white/50 hover:text-muted-brass text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}