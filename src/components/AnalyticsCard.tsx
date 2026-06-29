"use client";

import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function AnalyticsCard() {
const [visitors, setVisitors] = useState(0);

useEffect(() => {
const unsub = onSnapshot(
doc(db, "visitors", "analytics"),
(docSnap) => {
if (docSnap.exists()) {
setVisitors(docSnap.data().count || 0);
}
}
);


return () => unsub();

}, []);

return ( <section className="py-12 px-6"> <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-sky-400 mb-8">
      Portfolio Analytics
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl">
        <h3 className="text-slate-500 mb-2">
          Total Visitors
        </h3>

        <p className="text-4xl font-bold text-sky-400">
          {visitors}
        </p>
      </div>

      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl">
        <h3 className="text-slate-500 mb-2">
          Portfolio Status
        </h3>

        <p className="text-2xl font-bold text-green-500">
          Active
        </p>
      </div>

      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl">
        <h3 className="text-slate-500 mb-2">
          Certificates
        </h3>

        <p className="text-4xl font-bold text-yellow-500">
          4+
        </p>
      </div>

    </div>
  </div>
</section>
);
}