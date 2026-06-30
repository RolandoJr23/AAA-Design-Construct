import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AAA Design & Construct",
  description: "AAA Design & Construct is a professional design and construction company dedicated to creating functional, durable, and aesthetically pleasing spaces. Combining innovative design concepts with quality craftsmanship, the company provides end-to-end solutions for residential, commercial, and renovation projects, ensuring every build reflects excellence, reliability, and client satisfaction.",
  icons: {
    icon: [{ url: "/icon.png", sizes: "512x512", type: "image/png" }],
    apple: [{ url: "/icon.png", sizes: "512x512", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang ="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

