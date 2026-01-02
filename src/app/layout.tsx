import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "@/fonts/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextbot.vercel.app"),
  title: "NexBot - AI Web Development Assistant",
  description:
    "Get instant answers to your Frontend, Backend, and Performance optimization questions.",
  authors: {
    name: "Kenneth Vanegas",
    url: "https://github.com/KennethGVM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
