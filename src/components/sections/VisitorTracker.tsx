"use client";

import { useEffect } from "react";
import { doc, updateDoc, increment } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function VisitorTracker() {
  useEffect(() => {
    const updateVisitor = async () => {
      try {
        await updateDoc(
          doc(db, "visitors", "analytics"),
          {
            count: increment(1),
          }
        );
      } catch (error) {
        console.log(error);
      }
    };

    updateVisitor();
  }, []);

  return null;
}