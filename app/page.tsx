"use client";

import FirstSection from "./FirstSection";

export default function Home() {
  return (
    <main className="h-screen">
      <FirstSection />
      <section className="grid h-screen place-items-center">Section 2</section>
      <section className="grid h-screen place-items-center">Section 3</section>
    </main>
  );
}
