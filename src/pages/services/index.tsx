"use client";
import ServicesHero from "~/components/Services/ServicesHero";
import ServiceLayout from "~/layouts/ServiceLayout";

export default function Services() {
  return (
    <ServiceLayout>
      <main className="flex w-full flex-col">
        <ServicesHero></ServicesHero>
      </main>
    </ServiceLayout>
  );
}
