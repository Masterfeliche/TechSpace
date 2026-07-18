"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { buttonVariants } from "@/components/ui/button";
import { heroImage, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden pt-20"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 12% 18%, rgb(37 99 235 / 10%), transparent 70%)",
        }}
      />

      <Container className="relative z-10 grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="font-heading text-sm font-semibold tracking-[0.22em] text-primary uppercase"
          >
            {siteConfig.name}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="mt-5 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1] text-balance"
          >
            Building the Next Generation
            <br className="hidden sm:block" /> of Software Engineers
            <br className="hidden sm:block" /> at DIT.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Practical engineering.
            <br />
            Real projects.
            <br />
            Future AI innovators.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="#join"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 px-5 bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              Join Community
              <ArrowRight data-icon="inline-end" />
            </Link>
            <Link
              href="#projects"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 px-5"
              )}
            >
              Explore Projects
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.16 }}
          className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card lg:mx-0 lg:max-w-none"
        >
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"
            aria-hidden="true"
          />
        </motion.div>
      </Container>
    </section>
  );
}
