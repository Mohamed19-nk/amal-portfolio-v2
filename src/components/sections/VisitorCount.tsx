"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function VisitorCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const loadVisitors = async () => {
      const snap = await getDoc(
        doc(db, "visitors", "analytics")
      );

      if (snap.exists()) {
        setCount(snap.data().count || 0);
      }
    };

    loadVisitors();
  }, []);

  return (
    <div className="fixed bottom-6 right-6 bg-slate-900 text-white px-4 py-2 rounded-full border border-sky-500 shadow-lg">
      👀 {count} Visitors
    </div>
  );
}