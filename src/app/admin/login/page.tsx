"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("LOGIN SUCCESS:", userCredential.user);

      alert("Login successful!");

      router.push("/admin/messages");
    } catch (error: any) {
      console.error("FULL FIREBASE ERROR:", error);
      alert(error.code);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <form
        onSubmit={login}
        className="bg-slate-900 p-8 rounded-xl w-full max-w-md space-y-4"
      >
        <h1 className="text-3xl font-bold text-center text-sky-400">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-slate-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded bg-slate-800"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-sky-500 hover:bg-sky-600 py-3 rounded-lg font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}