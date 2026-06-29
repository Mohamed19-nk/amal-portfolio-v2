import "./globals.css";
import { Toaster } from "react-hot-toast";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata = {
title: "Maxamed Axmed | AI Engineer",
description:
"Computer Science Student, AI Engineer, Software Developer, Graphic Designer and Co-Founder of Amal TalentBridge AI.",

keywords: [
"Maxamed Axmed",
"AI Engineer",
"Artificial Intelligence",
"Computer Science",
"Software Developer",
"Next.js",
"Firebase",
"Graphic Designer",
"Cybersecurity",
"Amal TalentBridge AI",
],

authors: [
{
name: "Maxamed Axmed",
},
],

creator: "Maxamed Axmed",

icons: {
icon: "/icon.jpeg",
},

openGraph: {
title: "Maxamed Axmed | AI Engineer",
description:
"Computer Science Student, AI Engineer and Co-Founder of Amal TalentBridge AI.",
siteName: "Maxamed Axmed Portfolio",
type: "website",
},
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}