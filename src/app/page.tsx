import { Council } from "@/components/community/council";
import { Flywheel } from "@/components/community/flywheel";
import { Layers } from "@/components/community/layers";
import { ProductsGrid } from "@/components/community/products-grid";
import { Rhythm } from "@/components/community/rhythm";
import { Hero } from "@/components/sections/hero";
import { JoinCta } from "@/components/sections/join-cta";
import { LearningRoadmap } from "@/components/sections/learning-roadmap";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Flywheel />
      <Layers />
      <LearningRoadmap />
      <ProductsGrid preview />
      <Rhythm />
      <Council />
      <JoinCta />
    </main>
  );
}
