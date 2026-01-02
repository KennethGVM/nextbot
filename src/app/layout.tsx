import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "NexBot - AI Web Development Assistant",
  description:
    "Get instant answers to your Frontend, Backend, and Performance optimization questions.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   return (
    <html lang="es">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  )
}
