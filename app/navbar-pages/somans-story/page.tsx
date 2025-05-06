import Image from "next/image"
import { Button } from "@/components/button"
import Navbar from "@/components/navbar"
import Link from "next/link"

export default function SomansStory() {
  return (
    <div className="min-h-screen bg-cream pt-[150px]">
      <div className="absolute top-6 left-0 right-0 z-20">
        <Navbar bgColor="#253544" textColor="white" />
      </div>

      <div className="container py-24 px-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-2">Soman Chainani</h1>
            <p className="text-gray-600 mb-6">Author of The School for Good and Evil series</p>

            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-600">
                Soman Chainani is the New York Times bestselling author of The School for Good and Evil series. The
                series has sold over 3.5 million copies, been translated into 30 languages, and has been adapted into a
                major motion picture from Netflix, which debuted at #1 in 2022.
              </p>
              <p className="text-sm text-gray-600">
                A graduate of Harvard University and Columbia University's MFA Film Program, Soman began his career as a
                screenwriter and director. His films have played at over 150 film festivals around the world, and his
                writing awards include honors from Big Bear Lake, the CAPE Foundation, and the Sun Valley Writers'
                Fellowship.
              </p>
              <p className="text-sm text-gray-600">
                In 2023, Soman launched BEASTS & BEAUTY: DANGEROUS TALES, a New York Times bestselling collection of
                dangerous fairy tales, and in 2024, he released FALL OF THE SCHOOL FOR GOOD AND EVIL, the first book in
                a brand new trilogy.
              </p>
            </div>

            <div className="flex space-x-4">
              <Button variant="default" className="bg-amber-700 hover:bg-amber-800 text-xs" asChild>
                <Link href="https://www.instagram.com/somanc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                  Follow on Instagram
                </Link>
              </Button>
              <Button variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50 text-xs" asChild>
                <Link href="https://www.somanchainani.com/" target="_blank" rel="noopener noreferrer">
                  Official Website
                </Link>
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

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* Book 1 - Prequel */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image
                  src="/book1.png"
                  alt="Rise of the School for Good and Evil"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-1 text-sm">Rise of the School for Good and Evil</h3>
                <p className="text-xs text-gray-600">The prequel to the beloved series</p>
              </div>
            </div>

            {/* Book 2 - First Book */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image
                  src="/book2.jpg"
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

            {/* Book 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image
                  src="/book3.png"
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

            {/* Book 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image
                  src="/book4.png"
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

            {/* Book 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image
                  src="/book5.jpg"
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

            {/* Book 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image
                  src="/book6.webp"
                  alt="A Crystal of Time"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-1 text-sm">A Crystal of Time</h3>
                <p className="text-xs text-gray-600">The fifth novel in the School for Good and Evil series</p>
              </div>
            </div>

            {/* Book 7 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image
                  src="/book7.jpg"
                  alt="One True King"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-1 text-sm">One True King</h3>
                <p className="text-xs text-gray-600">The sixth and final book in the bestselling series</p>
              </div>
            </div>

            {/* Book 8 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image
                  src="/book8.png"
                  alt="Fall of the School for Good and Evil"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-1 text-sm">Fall of the School for Good and Evil</h3>
                <p className="text-xs text-gray-600">The first book in a brand new trilogy</p>
              </div>
            </div>

            {/* Book 9 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image
                  src="/book9.avif"
                  alt="Beasts and Beauty: Dangerous Tales"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-1 text-sm">Beasts and Beauty: Dangerous Tales</h3>
                <p className="text-xs text-gray-600">A collection of dangerous fairy tales</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
