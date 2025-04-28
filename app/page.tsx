"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/button"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-start justify-end text-white py-32 px-12 min-h-screen"
        style={{
          backgroundImage: "url('/chandelier-landing-page.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-6 left-0 right-0 z-20">
          <Navbar />
        </div>

        <div className="relative z-10 max-w-2xl mb-16">
          <p className="uppercase tracking-wider mb-2 text-sm">DISCOVER YOUR TRUE NATURE AND FIND OUT</p>
          <p className="uppercase tracking-wider mb-2 text-sm">WHERE YOU TRULY BELONG</p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2">Destiny Awaits:</h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Are you Good or Evil?</h2>
        </div>

        {/* Sidebar Card */}
        <div className="absolute right-12 top-1/3 z-10 bg-white rounded-lg overflow-hidden shadow-lg w-64 hidden md:block">
          <div className="w-full h-32 relative">
            <Image
              src="/step-into-a-world.png"
              alt="Step into a world"
              fill
              className="object-cover w-full h-full rounded-t-lg"
              priority
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold text-gray-800 mb-2">Step into a world where fairy tales aren't just stories</h3>
            <Button
              className="w-full bg-slate-800 text-white hover:bg-slate-700 text-xs"
              onClick={() => {
                const section = document.getElementById('unlock-section');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              UNLOCK THE TALE
            </Button>
          </div>
        </div>
      </section>

      {/* Unlock The Tale Section */}
      <section id="unlock-section" className="py-16 px-12 bg-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-800 mb-6">UNLOCK THE TALE</h2>
          <p className="text-center max-w-3xl mx-auto mb-12 text-gray-600">
            Two schools. One destiny. Will you follow the path of honor and heroism, or embrace the darkness of power
            and ambition?
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* School of Evil */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:translate-y-[-5px]">
              <div className="h-64 relative">
                <Image
                  src="/school-evil.png"
                  alt="School of Evil"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">School of Evil</h3>
                <p className="text-gray-700 mb-4">
                  In a world that fears the wicked, only the most cunning will prove that villains deserve a story too.
                </p>
              </div>
            </div>

            {/* School of Good */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:translate-y-[-5px]">
              <div className="h-64 relative">
                <Image
                  src="/school-good.png"
                  alt="School of Good"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">School of Good</h3>
                <p className="text-gray-700 mb-4">
                  A place of beauty, grace, and heroism, where noble souls train to become fairy tale princes,
                  princesses, and legendary heroes.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/navbar-pages/test-your-fate">
              <Button className="bg-slate-800 text-white hover:bg-slate-700">Test your Fate</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
