import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="w-full bg-slate-900 text-white py-3 px-6 rounded-full max-w-[95%] mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={40} height={40} className="mr-2" />
          </Link>
          <Link href="/navbar-routes/somans-story" className="hover:text-amber-300 transition-colors text-sm hidden sm:inline-block">
            Soman's Story
          </Link>
          <Link
            href="/navbar-routes/legend-unfolds"
            className="hover:text-amber-300 transition-colors text-sm hidden sm:inline-block"
          >
            Legend Unfolds
          </Link>
          <Link
            href="/navbar-routes/heroes-villains"
            className="hover:text-amber-300 transition-colors text-sm hidden sm:inline-block"
          >
            Heroes & Villains
          </Link>
        </div>
        <Link href="/navbar-routes/test-your-fate">
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-slate-900 rounded-full text-sm"
          >
            Test your Fate
          </Button>
        </Link>
      </div>
    </nav>
  )
}
