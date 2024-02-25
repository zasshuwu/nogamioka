"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";

type Offering = {
  key?: number;
  service: string;
  quote: number;
  description: string[];
  type: "one-time" | "hourly";
};

export default function ServicesOffering() {
  const offerings: Offering[] = [
    {
      service: "Iteration",
      quote: 50.0,
      type: "hourly",
      description: [
        "You want to add stuff, move things around, or make a button more rounded.",
        "Minimum 2 hours charged for initial discussion.",
      ],
    },
    {
      service: "Static Website",
      type: "one-time",
      quote: 500.0,
      description: [
        "We meet. We discuss. You get a website. We iterate. You get a better website.",
        "A one-off project. 30 days of support post-delivery.",
        "You're responsible for hosting.",
      ],
    },

    {
      service: "Dynamic Site with Content System",
      quote: 1000.0,
      type: "one-time",
      description: [
        "An internal knowledge base, a blog, or corporate customer-facing sites? No problemo.",
        "I provide consultation, build the database, build a frontend, add a way for you to create and edit content, and hook them up together.",
        "You're responsible for hosting.",
      ],
    },
  ];

  return (
    <div
      id="services"
      className="flex min-h-screen flex-col items-center justify-center space-y-8 pt-20"
    >
      <h1 className="text-center text-6xl">Service Offerings</h1>
      <div className="flex w-full flex-col flex-wrap items-center justify-center space-y-4 p-8 md:flex-row md:space-x-8 md:space-y-0">
        {offerings.map((offering: Offering, idx) => (
          <OfferingCard key={idx} offering={offering}></OfferingCard>
        ))}
      </div>
    </div>
  );
}

function OfferingCard({ offering }: { key: number; offering: Offering }) {
  return (
    <BackgroundGradient className="flex min-h-[20rem] max-w-md flex-col rounded-[22px] bg-white p-4 dark:bg-zinc-900">
      <h2 className="text-2xl font-bold text-green-400">{offering.service}</h2>
      <p className="text-lg capitalize italic text-neutral-400">
        {offering.type}
      </p>

      <div className="mt-4 h-14">
        {offering.type === "one-time" ? "Starting at" : ""}
        <p className="text-2xl">CA$ {offering.quote.toFixed(2)}</p>
      </div>
      <ul className="mt-4 list-inside list-disc">
        {offering.description.map((d, idx) => (
          <li key={idx}>{d}</li>
        ))}
      </ul>
    </BackgroundGradient>
  );
}
