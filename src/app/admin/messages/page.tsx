"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  onSnapshot,
  collection,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { db, auth } from "@/lib/firebase";
import jsPDF from "jspdf";

type Message = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  spam?: boolean;
};

export default function AdminMessages() {
  const router = useRouter();

  const [messages, setMessages] = useState<Message[]>([]);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [search, setSearch] = useState("");

  const prevCount = useRef(0);

  // AUTH
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) router.push("/admin/login");
      else setCheckingAuth(false);
    });

    return () => unsub();
  }, []);

  // SPAM DETECTION
  const detectSpam = (msg: string, email: string) => {
    const text = (msg + " " + email).toLowerCase();

    const spamKeywords = [
      "http",
      "www",
      "click here",
      "free money",
      "earn money fast",
      "bitcoin",
      "crypto",
      "loan",
      "whatsapp me",
    ];

    let score = 0;

    spamKeywords.forEach((word) => {
      if (text.includes(word)) score++;
    });

    return score >= 2;
  };

  // REALTIME FIRESTORE
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "messages"), (snap) => {
      const data: Message[] = snap.docs.map((d) => {
        const raw = d.data() as Message;

        return {
          docId: d.id,
          ...raw,
          spam: detectSpam(raw.message, raw.email),
        };
      });

      // notification
      if (prevCount.current !== 0 && data.length > prevCount.current) {
        toast.success("📩 New message received!");

        const audio = new Audio("/notification.mp3");
        audio.play().catch(() => {});
      }

      prevCount.current = data.length;
      setMessages(data);
    });

    return () => unsub();
  }, []);

  // DELETE
  const deleteMessage = async (id: string) => {
    await deleteDoc(doc(db, "messages", id));
    setMessages((prev) => prev.filter((m) => m.id !== id));
  };

  // LOGOUT
  const logout = async () => {
    await signOut(auth);
    router.push("/admin/login");
  };
  // 📥 CSV EXPORT
  const exportCSV = () => {
    const headers = ["Name", "Email", "Message", "Date"];
    // 🏆 CERTIFICATE GENERATOR
const generateCertificate = (name: string) => {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("Certificate of Achievement", 20, 30);

  doc.setFontSize(14);
  doc.text("This certifies that", 20, 50);

  doc.setFontSize(18);
  doc.text(name, 20, 70);

  doc.setFontSize(14);
  doc.text(
    "has successfully used the Admin Dashboard System",
    20,
    90
  );

  doc.text(
    `Date: ${new Date().toLocaleDateString()}`,
    20,
    110
  );

  doc.save(`${name}-certificate.pdf`);
};

    const rows = messages.map((m) => [
      m.name,
      m.email,
      m.message,
      new Date(m.createdAt).toLocaleString(),
    ]);

    const csvContent =
      [headers, ...rows]
        .map((row) => row.map((item) => `"${item}"`).join(","))
        .join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.setAttribute("download", "messages.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        Checking authentication...
      </div>
    );
  }

  // FILTER SEARCH
  const filteredMessages = messages.filter((m) =>
    `${m.name} ${m.email} ${m.message}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // ANALYTICS
  const totalMessages = messages.length;

  const todayMessages = messages.filter((m) =>
    new Date(m.createdAt).toDateString() === new Date().toDateString()
  ).length;

  const chartData = messages.map((_, i) => ({
    index: i + 1,
    messages: i + 1,
  }));

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-sky-400">
          Admin Dashboard 🧠 Inbox
        </h1>

        <button
          onClick={logout}
          className="bg-red-500 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* ANALYTICS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        <div className="bg-slate-900 p-4 rounded border border-slate-800">
          <p className="text-sm text-slate-400">Total Messages</p>
          <h2 className="text-2xl text-sky-400 font-bold">
            {totalMessages}
          </h2>
        </div>

        <div className="bg-slate-900 p-4 rounded border border-slate-800">
          <p className="text-sm text-slate-400">Today</p>
          <h2 className="text-2xl text-green-400 font-bold">
            {todayMessages}
          </h2>
        </div>

        <div className="bg-slate-900 p-4 rounded border border-slate-800">
          <p className="text-sm text-slate-400">System</p>
          <h2 className="text-2xl text-yellow-400 font-bold">
            Active
          </h2>
        </div>

      </div>

      {/* SEARCH */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search messages..."
        className="w-full p-3 mb-6 rounded bg-slate-900 border border-slate-800"
      />

      {/* CHART */}
      <div className="bg-slate-900 p-4 rounded mb-6">
        <h2 className="text-sky-400 mb-4">Messages Analytics 📊</h2>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="index" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="messages"
                stroke="#38bdf8"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* MESSAGES */}
      <div className="space-y-4">
        {filteredMessages.map((msg) => (
          <div
            key={msg.id}
            className={`p-4 rounded border ${
              msg.spam
                ? "bg-red-950 border-red-500"
                : "bg-slate-900 border-slate-800"
            }`}
          >
            <div className="flex justify-between">
              <h3 className="text-sky-400 font-semibold">
                {msg.name}
              </h3>

              <span
                className={`text-xs px-2 py-1 rounded ${
                  msg.spam ? "bg-red-500" : "bg-green-500"
                }`}
              >
                {msg.spam ? "SPAM 🚨" : "SAFE ✔"}
              </span>
            </div>

            <p className="text-sm text-slate-400">{msg.email}</p>
            <p className="mt-2">{msg.message}</p>

            <button
              onClick={() => deleteMessage(msg.id)}
              className="text-red-400 text-sm mt-2"
            >
              Delete
              
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}