import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Uptime SLA Tracker — Monitor API Uptime Against SLA Commitments",
  description: "Track API uptime, response times, and automatically calculate SLA credits owed to customers. Built for SaaS companies and API providers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="dc6f86fb-be17-4ef1-9bdf-fed9a5dc0835"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
