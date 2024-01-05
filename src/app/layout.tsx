import type { Metadata } from "next"
import { Josefin_Sans } from "next/font/google"

export const metadata: Metadata = {
  title: "Dan Feinstein's Portfolio",
  description: "",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
