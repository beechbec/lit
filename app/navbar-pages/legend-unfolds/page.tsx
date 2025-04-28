"use client"

import Image from "next/image"
import { Button } from "@/components/button"
import Navbar from "@/components/navbar"
import { useRef } from "react"

export default function LegendUnfolds() {
  const bookSectionRef = useRef<HTMLDivElement>(null);

  const handleScrollToBook = () => {
    bookSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-[64px]">
      <div className="absolute top-6 left-0 right-0 z-20">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center text-white py-32 px-4 min-h-[70vh]"
        style={{
          backgroundImage: "url('/legend-unfolds.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10">
          <p className="uppercase tracking-wider mb-2 text-sm">
            The line between good and evil isn't always clear—even in fairy tales
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">What if your destiny wasn't chosen by you?</h1>
          <Button
            style={{ backgroundColor: "#253544", color: "white" }}
            onClick={handleScrollToBook}
          >
            Turn the Page
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-cream text-slate-900">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center transition-transform duration-300 hover:translate-y-[-5px]">
            <div className="flex justify-center mb-4">
              <Image src="/friendship-identity.png" alt="Friendship & Identity" width={60} height={60} />
            </div>
            <h3 className="font-bold mb-2">Friendship & Identity</h3>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>

          <div className="text-center transition-transform duration-300 hover:translate-y-[-5px]">
            <div className="flex justify-center mb-4">
              <Image src="/good-vs-evil.png" alt="Good vs Evil" width={60} height={60} />
            </div>
            <h3 className="font-bold mb-2">Good vs Evil</h3>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>

          <div className="text-center transition-transform duration-300 hover:translate-y-[-5px]">
            <div className="flex justify-center mb-4">
              <Image src="/beauty-vs-inner.png" alt="Beauty vs Inner Strength" width={60} height={60} />
            </div>
            <h3 className="font-bold mb-2">Beauty vs Inner Strength</h3>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section ref={bookSectionRef} className="py-12 px-4 bg-cream text-slate-900">
        <div className="container grid md:grid-cols-3 gap-8">
          <div className="relative transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src="/book1.png"
              alt="Book Cover"
              width={300}
              height={450}
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-2">The School for Good and Evil</h2>
            <p className="text-gray-600 mb-6">by Soman Chainani</p>

            <p className="text-sm text-gray-600 mb-4 italic">
              It is not what we are born to be, but what we choose to become that defines us.
            </p>

            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <h3 className="font-bold mb-2">Book Details</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <p className="text-gray-600">Published:</p>
                  <p>Details</p>
                  <p className="text-gray-600">Pages:</p>
                  <p>Details</p>
                  <p className="text-gray-600">Genre:</p>
                  <p>Details</p>
                  <p className="text-gray-600">ISBN:</p>
                  <p>Details</p>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-2">See more Books</h3>
                <div className="grid grid-cols-3 gap-2">
                  <div className="relative aspect-[2/3] transition-transform duration-300 hover:scale-105">
                    <Image
                      src="/book2.png"
                      alt="Book 2"
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="relative aspect-[2/3] transition-transform duration-300 hover:scale-105">
                    <Image
                      src="/book3.png"
                      alt="Book 3"
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="relative aspect-[2/3] transition-transform duration-300 hover:scale-105">
                    <Image
                      src="/book4.png"
                      alt="Book 4"
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
