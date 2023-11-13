import type { Metadata } from "next"
import { Josefin_Sans } from "next/font/google"

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})

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
      <body className={josefin_sans.className}>{children}</body>
    </html>
  )
}
