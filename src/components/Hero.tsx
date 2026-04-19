"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { Button } from "./ui/Button";
import { TextReveal, SplitText } from "./animations/TextReveal";
import { hero } from "@/data/content";

const SPLINE_SCENE = "https://prod.spline.design/WVFkGf2Hryt6Q0DN/scene.splinecode";

function HeroSpline() {
  return (
    <Spline
      scene={SPLINE_SCENE}
      className="w-full h-full"
    />
  );
}

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Suspense fallback={
          <div className="w-full h-full bg-charcoal animate-pulse" />
        }>
          <HeroSpline />
        </Suspense>
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-muted-brass tracking-[0.3em] uppercase text-sm md:text-base mb-6"
            >
              Award-Winning Interior Design
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="font-playfair text-5xl md:text-7xl lg:text-8xl text-warm-off-white leading-[1.1] mb-6"
            >
              <SplitText text={hero.headline} delay={0} />
              <br />
              <span className="text-muted-brass">{hero.subheadline}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="text-warm-off-white/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
            >
              We don&apos;t just design spaces; we craft experiences that resonate with your essence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href={hero.ctaLink} className="inline-flex items-center justify-center font-medium bg-muted-brass text-charcoal px-8 py-4 text-lg hover:bg-warm-off-white transition-all duration-300">
                {hero.cta}
              </Link>
              <Link href="#portfolio" className="inline-flex items-center justify-center font-medium border-2 border-warm-off-white text-warm-off-white px-8 py-4 text-lg hover:bg-warm-off-white hover:text-charcoal transition-all duration-300">
                View Portfolio
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-warm-off-white/60">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-brass to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}