import { About } from "@/components/sections/about";
import { Events } from "@/components/sections/events";
import { Hero } from "@/components/sections/hero";
import { HowWeBuild } from "@/components/sections/how-we-build";
import { JoinCta } from "@/components/sections/join-cta";
import { Leadership } from "@/components/sections/leadership";
import { LearningRoadmap } from "@/components/sections/learning-roadmap";
import { Partners } from "@/components/sections/partners";
import { Projects } from "@/components/sections/projects";
import { WhatWeDo } from "@/components/sections/what-we-do";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Partners />
      <About />
      <WhatWeDo />
      <LearningRoadmap />
      <HowWeBuild />
      <Projects />
      <Events />
      <Leadership />
      <JoinCta />
    </main>
  );
}
