"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import Navbar from "@/components/navbar"
import { Suspense, useRef, useState, useEffect } from "react"

type ResultType = "good" | "evil"

function getFateResult(score: number) {
  if (score >= 12 && score <= 16) {
    return { alignment: "True Good", characters: ["Yuba", "Agatha"], color: "blue-400" };
  } else if (score >= 8 && score <= 11) {
    return { alignment: "Noble Good", characters: ["Professor Dovey", "Reena"], color: "blue-300" };
  } else if (score >= 4 && score <= 7) {
    return { alignment: "Light Good", characters: ["Kiko", "Beatrix"], color: "blue-200" };
  } else if (score >= -3 && score <= 3) {
    return { alignment: "Balanced Fate", characters: ["Hort", "Dot"], color: "yellow-400" };
  } else if (score >= -7 && score <= -4) {
    return { alignment: "Light Evil", characters: ["Anadil", "Hester"], color: "red-200" };
  } else if (score >= -11 && score <= -8) {
    return { alignment: "Noble Evil", characters: ["Lady Lesso", "Sophie"], color: "red-300" };
  } else if (score >= -16 && score <= -12) {
    return { alignment: "True Evil", characters: ["Rafal", "Aric"], color: "red-400" };
  } else {
    return { alignment: "Balanced Fate", characters: ["Hort", "Dot"], color: "yellow-400" };
  }
}

function ResultsContent() {
  const searchParams = useSearchParams()
  const score = parseInt(searchParams.get("score") || "0", 10)
  const fate = getFateResult(score)

  const isGood = fate.alignment.startsWith("True") || fate.alignment.startsWith("Noble")

  const traits = isGood
    ? ["Compassionate", "Honest", "Brave", "Selfless", "Loyal"]
    : ["Cunning", "Ambitious", "Strategic", "Resourceful", "Determined"]

  const [muted, setMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  
  const musicSource = isGood ? "/Song for Good.mp3" : "/Song for Bad.mp3"

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
      <audio ref={audioRef} src={musicSource} autoPlay loop hidden />
      <button
        onClick={handleMuteToggle}
        className="fixed bottom-6 right-6 z-50 bg-white/80 hover:bg-white text-slate-900 rounded-full shadow-lg p-3 flex items-center justify-center transition w-12 h-12"
        aria-label={muted ? "Unmute music" : "Mute music"}
        style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem' }}
      >
        <span className="relative w-7 h-7 flex items-center justify-center">
          <img src="/music-note.svg" alt="Music Icon" className="w-7 h-7 object-contain" />
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
          className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-105 bg-${fate.color}`}
        >
          <span className="text-3xl font-bold">{score}</span>
        </div>

        <h2 className={`text-2xl font-bold mb-2 text-${fate.color}`}>
          {fate.alignment}
        </h2>
        <h3 className="text-lg font-semibold mb-4">School of Evers Character(s):</h3>
        <div className="flex flex-col items-center gap-2 mb-6">
          {fate.characters.map((char) => (
            <div key={char} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-400 rounded-full mb-2 flex items-center justify-center">
                {/* Placeholder for character image */}
                <span className="text-white font-bold text-lg">IMG</span>
              </div>
              <span className="text-base font-medium">{char}</span>
            </div>
          ))}
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

export default function Results() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsContent />
    </Suspense>
  )
}