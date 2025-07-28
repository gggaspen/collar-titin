import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "NEXUS - DJ Portfolio",
  description:
    "Crafting sonic experiences that transcend reality. Professional DJ services for events, festivals, and private parties.",
  keywords: "DJ, electronic music, house music, techno, events, booking, Berlin, underground",
  authors: [{ name: "NEXUS" }],
  openGraph: {
    title: "NEXUS - DJ Portfolio",
    description: "Crafting sonic experiences that transcend reality",
    type: "website",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
