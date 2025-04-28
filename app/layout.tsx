import type React from "react"
import { raleway } from "@/lib/fonts"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "The School for Good and Evil",
  description: "Discover your true nature and find out where you belong",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // console.log("raleway.variable", raleway.variable);

  return (
    <html lang="en">
      <body className={`${raleway.variable} min-h-screen bg-cream`}>
        {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}> */}
          <main>{children}</main>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
