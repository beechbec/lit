import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"

export default function SomansStory() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="absolute top-6 left-0 right-0 z-20">
        <Navbar />
      </div>

      <div className="max-w-6xl mx-auto py-24 px-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-2">Soman Chainani</h1>
            <p className="text-gray-600 mb-6">Author of The School for Good and Evil series</p>

            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>

            <div className="flex space-x-4">
              <Button variant="default" className="bg-amber-700 hover:bg-amber-800 text-xs">
                Follow on Instagram
              </Button>
              <Button variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50 text-xs">
                Official Website
              </Button>
            </div>
          </div>

          <div>
            <div className="relative aspect-square overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.02]">
              <Image src="https://i.imgur.com/JZcIDSP.jpg" alt="Soman Chainani" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Featured Works Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center text-amber-800 mb-4">FEATURED WORKS</h2>
          <p className="text-center max-w-3xl mx-auto mb-12 text-sm text-gray-600">
            Step into the magical worlds of Soman Chainani—where fairy tales are rewritten and destinies are challenged.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((book) => (
              <div
                key={book}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:translate-y-[-5px]"
              >
                <div className="relative aspect-[2/3] overflow-hidden">
                  <Image
                    src={`https://i.imgur.com/Yd7bZAM.jpg`}
                    alt={`Book ${book}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1 text-sm">Book {book}</h3>
                  <p className="text-xs text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
