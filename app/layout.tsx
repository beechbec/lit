import type React from "react"
import { Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata = {
  title: "The School for Good and Evil",
  description: "Discover your true nature and find out where you belong",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.className} min-h-screen bg-cream`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
