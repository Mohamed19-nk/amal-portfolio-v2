"use client";

import { useEffect } from "react";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Smooth scroll fallback (native)
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return <>{children}</>;
}