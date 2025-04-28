import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/button"
import Navbar from "@/components/navbar"

export default function TestYourFate() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="absolute top-6 left-0 right-0 z-20">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="py-24 px-12">
        <div className="max-w-6xl mx-auto">
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
                  <div className="transition-transform duration-300 hover:translate-x-1">
                    <h3 className="font-bold text-lg mb-1">10 Magical Questions</h3>
                    <p className="text-sm text-gray-600">Answer honestly to reveal your true nature</p>
                  </div>

                  <div className="transition-transform duration-300 hover:translate-x-1">
                    <h3 className="font-bold text-lg mb-1">Spread the Magic</h3>
                    <p className="text-sm text-gray-600">
                      Share your results and challenge your friends to discover their own fate
                    </p>
                  </div>

                  <div className="transition-transform duration-300 hover:translate-x-1">
                    <h3 className="font-bold text-lg mb-1">Challenge Your Fate</h3>
                    <p className="text-sm text-gray-600">
                      Retake the quiz if you dare—will your destiny change or remain the same?
                    </p>
                  </div>

                  <Link href="/navbar-pages/test-your-fate/quiz">
                    <Button className="bg-amber-700 hover:bg-amber-800 text-white rounded-full">Take the Quiz</Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative aspect-square rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                <Image src="https://i.imgur.com/JZcIDSP.jpg" alt="Test Your Fate" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
