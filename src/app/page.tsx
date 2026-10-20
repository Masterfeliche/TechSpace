import {
  ClosingCta,
  DemoDay,
  Hero,
  Library,
  Numbers,
  People,
  Programs,
  Proof,
  Voices,
} from "@/components/home/sections";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Proof />
      <Numbers />
      <Programs />
      <Voices />
      <DemoDay />
      <People />
      <Library />
      <ClosingCta />
    </main>
  );
}
