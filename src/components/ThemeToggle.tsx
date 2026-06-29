"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);

useEffect(() => {
setMounted(true);
}, []);

if (!mounted) return null;

return (
<button
onClick={() =>
setTheme(theme === "dark" ? "light" : "dark")
}
className="fixed top-5 right-5 z-50 bg-sky-500 text-white px-4 py-2 rounded-full shadow-lg"
>
{theme === "dark" ? "☀️ Light" : "🌙 Dark"} </button>
);
}
