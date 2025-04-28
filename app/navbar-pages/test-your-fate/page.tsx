import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/button"
import Navbar from "@/components/navbar"

export default function TestYourFate() {
  return (
    <div className="min-h-screen bg-cream pt-[70px]">
      <div className="absolute top-6 left-0 right-0 z-20">
        <Navbar bgColor="#253544" textColor="white" />
      </div>

      {/* Hero Section */}
      <section className="py-24 px-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-slate-800">
                <h2 className="uppercase tracking-wider mb-2 text-amber-800 font-medium">TEST YOUR FATE</h2>
                <h1 className="text-4xl font-bold mb-6">Destiny Awaits</h1>
                <p className="mb-8 text-gray-700 text-sm">
                  In the world of The School for Good and Evil, everyone has a place. Through a series of enchanting
                  questions, we'll determine whether you belong in the pristine towers of Good or the shadowy halls of
                  Evil.
                </p>

                <div className="space-y-6">
                  {/* 10 Magical Questions */}
                  <div className="flex items-start gap-4 transition-transform duration-300 hover:translate-x-1">
                    <img src="/10-magical-questions.png" alt="10 Magical Questions" className="w-15 h-10 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-[#253544]">
                        10 Magical Questions
                      </h3>
                      <p className="text-sm text-gray-500">Answer thoughtfully to reveal your true nature</p>
                    </div>
                  </div>

                  {/* Character Match*/}
                  <div className="flex items-start gap-4 transition-transform duration-300 hover:translate-x-1">
                    <img src="/character-match.png" alt="Spread the Magic" className="w-15 h-10 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-[#253544]">
                      Character Match
                      </h3>
                      <p className="text-sm text-gray-500">
                      Discover which character from the movie shares your spirit
                      </p>
                    </div>
                  </div>

                  {/* Challenge Your Fate */}
                  <div className="flex items-start gap-4 transition-transform duration-300 hover:translate-x-1">
                    <img src="/challenge-your-fate.png" alt="Challenge Your Fate" className="w-15 h-10 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-[#253544]">
                        Challenge Your Fate
                      </h3>
                      <p className="text-sm text-gray-500">
                      Retake the quiz if you dare—will your destiny change or remain the same?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-8">
                  <Link href="/navbar-pages/test-your-fate/quiz">
                    <Button className="bg-amber-700 hover:bg-amber-800 text-white rounded-full px-10 py-3 text-lg font-bold shadow-md">
                      Take the Quiz
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative aspect-square rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                <Image src="/test-your-fate.png" alt="Test Your Fate" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
