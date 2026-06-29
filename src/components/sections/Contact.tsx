"use client";

import FadeIn from "../FadeIn";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
export default function Contact() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");
const [error, setError] = useState("");

const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setSuccess("");
  setError("");

  if (!name || !email || !message) {
    setError("Please fill all fields");
    return;
  }

  setLoading(true);

  try {
    await addDoc(collection(db, "messages"), {
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    });

    setSuccess("Message sent successfully ✔");

    setName("");
    setEmail("");
    setMessage("");
  } catch (err) {
    console.error(err);
    setError("Failed to send message. Try again.");
  } finally {
    setLoading(false);
  }
};

return (
  <FadeIn>
    <section
      id="contact"
      className="py-24 px-6 transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-sky-400 text-center mb-10">
        Contact Me
      </h2>

      <form
        onSubmit={submitForm}
        className="space-y-5 bg-slate-100 dark:bg-slate-800 p-8 rounded-xl shadow-lg"
      >
        {success && (
          <div className="bg-green-600/20 text-green-500 p-3 rounded-lg">
            {success}
          </div>
        )}

        {error && (
          <div className="bg-red-600/20 text-red-500 p-3 rounded-lg">
            {error}
          </div>
        )}

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white outline-none"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white outline-none"
          required
        />

        <textarea
          rows={5}
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 rounded bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white outline-none"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  </section>
</FadeIn>
);
}