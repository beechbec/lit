import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"

export default function SomansStory() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="absolute top-6 left-0 right-0 z-20">
        <Navbar bgColor="#253544" textColor="white" />
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
            <div className="relative aspect-square overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.02] flex items-center justify-center">
              <Image src="/soman.png" alt="Soman Chainani" fill className="object-contain" />
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
            {/* Book 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image
                  src="/book1.png"
                  alt="The School for Good and Evil"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-1 text-sm">The School for Good and Evil</h3>
                <p className="text-xs text-gray-600">The first novel in the epic series that started it all</p>
              </div>
            </div>

            {/* Book 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image
                  src="/book2.png"
                  alt="A World Without Princes"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-1 text-sm">A World Without Princes</h3>
                <p className="text-xs text-gray-600">The second novel in the New York Times bestselling series</p>
              </div>
            </div>

            {/* Book 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image
                  src="/book3.png"
                  alt="The Last Ever After"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-1 text-sm">The Last Ever After</h3>
                <p className="text-xs text-gray-600">The thrilling conclusion to the original trilogy</p>
              </div>
            </div>

            {/* Book 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image
                  src="/book4.png"
                  alt="Quests for Glory"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-1 text-sm">Quests for Glory</h3>
                <p className="text-xs text-gray-600">The fourth novel that begins an exciting new saga</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
