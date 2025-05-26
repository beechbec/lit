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

      <div className="container py-24 px-12 max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h1 className="text-5xl font-bold mb-6 text-amber-900 leading-tight">Soman Chainani</h1>
            <p className="text-xl text-amber-700 mb-8 leading-relaxed">
              New York Times Bestselling Author of The School for Good and Evil series
            </p>
            <div className="flex space-x-4">
              <Button variant="default" className="bg-amber-700 hover:bg-amber-800 text-base px-6 py-3" asChild>
                <Link
                  href="https://www.instagram.com/somanc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow on Instagram
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-amber-700 text-amber-700 hover:bg-amber-50 text-base px-6 py-3"
                asChild
              >
                <Link href="https://www.somanchainani.com/" target="_blank" rel="noopener noreferrer">
                  Official Website
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-80 h-80 overflow-hidden rounded-2xl shadow-xl bg-white p-4">
              <div className="relative w-full h-full">
                <Image
                  src="/soman.png"
                  alt="Soman Chainani"
                  fill
                  className="object-cover rounded-lg"
                  style={{ objectPosition: "center top" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* About Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-amber-800 border-b-2 border-amber-200 pb-4">About</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-amber-700">Personal Background</h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Born on August 2, 1979, in Miami, Florida, Soman Chainani was raised in Key Biscayne in a
                  multicultural Indian-American household. As of May 26, 2025, he is 45 years old.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-amber-700">Education</h3>
                <p className="text-lg text-gray-700 mb-2 leading-relaxed">
                  <strong>Harvard University:</strong> Graduated summa cum laude in 2001 with a self-designed major in
                  English & American Literature focusing on fairy tales and the psychology of villains.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Columbia University:</strong> Earned an MFA in Film, receiving the FMI Fellowship for Writing
                  and Directing.
                </p>
              </div>
            </div>
          </section>

          {/* Career Achievements */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-amber-800 border-b-2 border-amber-200 pb-4">
              Career Achievements
            </h2>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-amber-700">The School for Good & Evil Series</h3>
              <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-600">
                <ul className="space-y-3 text-lg text-gray-700">
                  <li>• Published in 2013, debuted at #7 on the New York Times Best Seller list</li>
                  <li>• Over 4.5 million copies sold worldwide</li>
                  <li>• Translated into 35 languages across six continents</li>
                  <li>• Netflix adaptation premiered October 19, 2022, debuting at #1 in over 80 countries</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-amber-700">Film & Screenwriting</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Began his career as a screenwriter and director. His short films have screened at over 150 film
                  festivals and won more than 30 jury and audience awards.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-amber-700">Awards & Recognition</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Honors from Big Bear Lake, the CAPE Foundation, the Sun Valley Writers' Fellowship, and the Shasha
                  Grant.
                </p>
              </div>
            </div>
          </section>

          {/* Recent Works */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-amber-800 border-b-2 border-amber-200 pb-4">Recent Works</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md border border-amber-100">
                <h3 className="text-xl font-semibold mb-3 text-amber-700">Beasts & Beauty: Dangerous Tales (2021)</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A collection of twelve reimagined fairy tales that debuted on the New York Times bestseller list.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border border-amber-100">
                <h3 className="text-xl font-semibold mb-3 text-amber-700">
                  Fall of the School for Good and Evil (2024)
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The first book in a new prequel trilogy to the original School series.
                </p>
              </div>
            </div>
          </section>

          {/* Creative Process */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-amber-800 border-b-2 border-amber-200 pb-4">
              Creative Inspiration
            </h2>
            <div className="bg-amber-800 text-white rounded-lg p-8">
              <blockquote className="text-xl italic text-center mb-4 leading-relaxed">
                "I learned everything I know about pacing and enchantment from Disney—frame by frame, VHS by VHS"
              </blockquote>
              <p className="text-center text-amber-200">— Soman Chainani</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3 text-amber-700">Disney Influence</h3>
                <p className="text-base text-gray-700">
                  Grew up watching Disney VHS classics, learning storytelling fundamentals frame by frame.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3 text-amber-700">Fairy Tale Research</h3>
                <p className="text-base text-gray-700">
                  At Harvard, studied darker fairy-tale variants and sought to reclaim their moral complexity.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3 text-amber-700">Villain Psychology</h3>
                <p className="text-base text-gray-700">
                  Focus on female villains inspired the dual-camp structure challenging Good and Evil.
                </p>
              </div>
            </div>
          </section>

          {/* Future Projects */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-amber-800 border-b-2 border-amber-200 pb-4">What's Next</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-amber-700">Upcoming Projects</h3>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li>
                    • <strong>One True King Trilogy:</strong> Concluding volumes anticipated in late 2025
                  </li>
                  <li>
                    • <strong>Political Thriller:</strong> Standalone adult novel in development
                  </li>
                  <li>
                    • <strong>Netflix Spin-offs:</strong> Exploring additional adaptations
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-amber-700">Fun Facts</h3>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li>• Favorite fairy tale: Original Grimm's Snow White</li>
                  <li>• Writing ritual: Pen and paper for initial drafts</li>
                  <li>• Pet inspiration: Border collie Luna appears in drafts</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
