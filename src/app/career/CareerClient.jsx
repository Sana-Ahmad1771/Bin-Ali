"use client";

import dynamic from "next/dynamic";
import React from "react";

const CareersSection = dynamic(() => import("../components/pages/careers/CareersSection"), {
  ssr: false,
  loading: () => (
    <div className="text-center py-20 text-gray-500">Loading careers...</div>
  ),
});

export default function CareerClient() {
  return <CareersSection />;
}
