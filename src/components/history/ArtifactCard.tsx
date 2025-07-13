// components
import { type ArtifactCardProps, Artifact } from "@/utils/types";
import { fetchMet } from "@/utils/fetchMet";
// libraries
import { useEffect, useState } from "react";

export default function ArtifactCard({ continent, period }: ArtifactCardProps) {
  return (
    <div
      id="card"
      className="w-full max-w-md rounded-xl border p-4 shadow"
    ></div>
  );
}
