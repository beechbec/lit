import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/button"

interface NavbarProps {
  bgColor?: string
  textColor?: string
  activePage?: string // e.g. "somans-story"
}

export default function Navbar({
  bgColor = "#CEB59599",
  textColor = "white",
  activePage = "",
}: NavbarProps) {
  // Helper for active link styling
  const linkClass = (page: string) =>
    `transition-colors text-sm hidden sm:inline-block px-2 ${
      activePage === page ? "font-bold text-white" : ""
    }`

  return (
    <nav
      className="w-full py-3 px-6 rounded-full max-w-[95%] mx-auto"
      style={{ background: bgColor, color: textColor }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={40} height={40} className="mr-2" />
          </Link>
          <Link
            href="/navbar-pages/somans-story"
            className={linkClass("somans-story")}
          >
            Soman's Story
          </Link>
          <Link
            href="/navbar-pages/legend-unfolds"
            className={linkClass("legend-unfolds")}
          >
            Legend Unfolds
          </Link>
          <Link
            href="/navbar-pages/heroes-villains"
            className={linkClass("heroes-villains")}
          >
            Heroes & Villains
          </Link>
        </div>
        <Link href="/navbar-pages/test-your-fate">
          <Button
            variant="outline"
            className="text-[#253544] border-[#253544] rounded-full text-sm bg-white font-bold"
          >
            Test your Fate
          </Button>
        </Link>
      </div>
    </nav>
  )
}
