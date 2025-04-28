"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import Navbar from "@/components/navbar"
import { Suspense, useRef, useState, useEffect } from "react"

type ResultType = "good" | "evil"

// Client component that uses useSearchParams
function ResultsContent() {
  const searchParams = useSearchParams()
  const type = (searchParams.get("type") || "good") as ResultType

  const isGood = type === "good"

  const traits = isGood
    ? ["Compassionate", "Honest", "Brave", "Selfless", "Loyal"]
    : ["Cunning", "Ambitious", "Strategic", "Resourceful", "Determined"]

  const [muted, setMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.volume = 1;
    }
  }, []);

  const handleMuteToggle = () => {
    setMuted((prev) => {
      const newMuted = !prev
      if (audioRef.current) {
        audioRef.current.muted = newMuted
        if (!newMuted) {
          // Try to play audio if unmuting
          audioRef.current.play().catch((e) => console.log('Autoplay blocked, will play on next interaction', e));
        }
      }
      console.log('Mute toggled:', newMuted)
      return newMuted
    })
  }

  return (
    <div
      className="relative min-h-[calc(100vh-150px)] flex items-center justify-center p-4 pt-[150px]"
      style={{
        backgroundImage: "url('/results-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <audio ref={audioRef} src="/going-home.mp3" autoPlay loop hidden />
      <button
        onClick={handleMuteToggle}
        className="fixed bottom-6 right-6 z-50 bg-white/80 hover:bg-white text-slate-900 rounded-full shadow-lg p-3 flex items-center justify-center transition w-12 h-12"
        aria-label={muted ? "Unmute music" : "Mute music"}
        style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem' }}
      >
        <span className="relative w-7 h-7 flex items-center justify-center">
          <img src="/music.png" alt="Music Icon" className="w-7 h-7 object-contain" />
          {muted && (
            <svg className="absolute inset-0 w-7 h-7 pointer-events-none" viewBox="0 0 28 28">
              <line x1="4" y1="24" x2="24" y2="4" stroke="red" strokeWidth="3" strokeLinecap="round" />
            </svg>
          )}
        </span>
      </button>
      <div className="absolute top-6 left-0 right-0 z-20">
        <Navbar bgColor="#253544" textColor="white" />
      </div>

      <div className="max-w-md w-full bg-slate-900/90 text-white p-8 rounded-lg text-center">
        <h1 className="text-2xl font-bold mb-6">Your Results</h1>

        <div
          className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-105 ${isGood ? "bg-blue-700" : "bg-red-700"}`}
        >
          <span className="text-3xl font-bold">5</span>
        </div>

        <h2 className={`text-2xl font-bold mb-4 ${isGood ? "text-blue-400" : "text-red-400"}`}>
          School of {isGood ? "Good" : "Evil"}
        </h2>

        <p className="mb-8 text-gray-300 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Your Key Traits</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {traits.map((trait, index) => (
              <Badge
                key={index}
                className={`${isGood ? "bg-blue-600 hover:bg-blue-700" : "bg-red-600 hover:bg-red-700"}`}
              >
                {trait}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <Link href="/navbar-pages/test-your-fate/quiz">
            <Button variant="outline" className="w-full border-white bg-white text-slate-900">
              Take the Quiz Again
            </Button>
          </Link>
          <Link href="/">
            <Button className="w-full bg-white text-slate-900 hover:bg-gray-200">Return Home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

// Main page component
export default function Results() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsContent />
    </Suspense>
  )
}
