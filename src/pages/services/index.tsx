"use client";
import ServicesHero from "~/components/Services/ServicesHero";
import ServicesOffering from "~/components/Services/ServicesOffering";
import ServiceLayout from "~/layouts/ServiceLayout";

export default function Services() {
  return (
    <ServiceLayout>
      <main className="flex w-full flex-col">
        <ServicesHero></ServicesHero>
        <ServicesOffering></ServicesOffering>
      </main>
    </ServiceLayout>
  );
}
