"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/button"
import { Suspense, useRef, useState, useEffect } from "react"
import Navbar from "@/components/navbar"

type ResultType = "good" | "evil"

function getFateResult(score: number) {
  // Positive scores = more good choices, Negative scores = more evil choices
  if (score >= 6) {
    return {
      alignment: "True Good",
      characters: ["Yuba", "Agatha"],
      color: "blue-400",
      school: "School of Good",
      description: "🌱 You're a paragon of virtue, always striving to do what is right without any selfish motives.",
    }
  } else if (score >= 2) {
    return {
      alignment: "Noble Good",
      characters: ["Professor Dovey", "Reena"],
      color: "blue-300",
      school: "School of Good",
      description:
        "🌤️ You're a noble soul who uses your power and influence for the good of others, guided by a strong moral compass.",
    }
  } else if (score >= 0) {
    return {
      alignment: "Light Good",
      characters: ["Kiko", "Beatrix"],
      color: "blue-200",
      school: "School of Good",
      description:
        "🌞 You're a radiant presence, spreading joy and kindness. Though your light may shine softly at times, you still choose the path of Good.",
    }
  } else if (score >= -2) {
    return {
      alignment: "Mischievous Evil",
      characters: ["Hort", "Dot"],
      color: "red-400",
      school: "School of Evil",
      description:
        "😈 You belong to the School of Evil, though your wickedness is more mischievous than malicious. Like Dot with her chocolate spells or Hort with his awkward villainy, you have your own unique way of being bad!",
    }
  } else if (score >= -6) {
    return {
      alignment: "Noble Evil",
      characters: ["Lady Lesso", "Sophie"],
      color: "red-300",
      school: "School of Evil",
      description:
        "🌪️ You're a cunning and ambitious character, using your intelligence and charm to pursue your goals.",
    }
  } else {
    return {
      alignment: "True Evil",
      characters: ["Rafal", "Aric"],
      color: "red-400",
      school: "School of Evil",
      description: "🔥 You're a force of pure darkness, embracing cruelty and chaos with no remorse.",
    }
  }
}

const characterImages: Record<string, string> = {
  Yuba: "/character_placeholder.png",
  Agatha: "/Good_Agatha.jpg",
  "Professor Dovey": "/Good_Professor Dovey.jpg",
  Reena: "/character_placeholder.png",
  Kiko: "/character_placeholder.png",
  Beatrix: "/Good_Beatrix.jpg",
  Hort: "/Evil_Hort.jpg",
  Dot: "/character_placeholder.png",
  Anadil: "/character_placeholder.png",
  Hester: "/Evil_Hester.jpg",
  "Lady Lesso": "/Evil_ Lady Lesso.jpg",
  Sophie: "/Evil_Sophie.jpg",
  Rafal: "/Evil_Rafal.jpg",
  Aric: "/character_placeholder.png",
}

const characterTraits: Record<string, string[]> = {
  // Good
  Agatha: ["Loyal", "Intelligent"],
  Yuba: ["Insightful", "Mysterious"],
  "Professor Dovey": ["Noble", "Fair"],
  Reena: ["Courageous", "Independent"],
  Kiko: ["Kind", "Supportive"],
  Beatrix: ["Vain", "Ambitious"],
  // Evil
  Hort: ["Insecure", "Loyal"],
  Dot: ["Sweet", "Misfit"],
  Anadil: ["Dark-humored", "Clever"],
  Hester: ["Fierce", "Loyal"],
  "Lady Lesso": ["Stern", "Strategic"],
  Sophie: ["Vain", "Ambitious"],
  Rafal: ["Charismatic", "Manipulative"],
  Aric: ["Cruel", "Proud"],
}

function ResultsContent() {
  const searchParams = useSearchParams()
  const score = Number.parseInt(searchParams.get("score") || "0", 10)
  const goodPoints = Number.parseInt(searchParams.get("good") || "0", 10)
  const evilPoints = Number.parseInt(searchParams.get("evil") || "0", 10)
  const fate = getFateResult(score)

  const isGood = fate.school === "School of Good"

  const traits = Array.from(
    new Set([...(characterTraits[fate.characters[0]] || []), ...(characterTraits[fate.characters[1]] || [])]),
  )

  const [muted, setMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = false
      audioRef.current.volume = 1
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch((e) => {
          setMuted(true)
          if (audioRef.current) audioRef.current.muted = true
        })
      }
    }
  }, [])

  const handleMuteToggle = () => {
    if (audioRef.current) {
      const newMuted = !muted
      audioRef.current.muted = newMuted
      setMuted(newMuted)
      if (!newMuted) {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch(() => {})
        }
      }
    }
  }

  return (
    <div
      className="relative min-h-screen flex items-center justify-center p-4 pt-[120px]"
      style={{
        backgroundImage: "url('/results-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <audio ref={audioRef} src={isGood ? "/Song for Good.mp3" : "/Song for Bad.mp3"} loop preload="auto" />
      <div className="absolute top-6 left-0 right-0 z-20">
        <Navbar bgColor="#253544" textColor="white" />
      </div>
      <button
        onClick={handleMuteToggle}
        className="fixed bottom-6 right-6 z-50 bg-white/80 hover:bg-white text-slate-900 rounded-full shadow-lg p-3 flex items-center justify-center transition w-12 h-12"
        aria-label={muted ? "Unmute music" : "Mute music"}
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

      <div className="max-w-2xl w-full bg-slate-900/90 text-white p-8 rounded-2xl text-center flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-8">You are most similar to ...</h1>

        <div className="flex flex-row items-center justify-center gap-10 mb-4 w-full">
          {fate.characters.map((char) => (
            <div key={char} className="flex flex-col items-center">
              <div
                className="w-40 h-40 bg-gray-200 rounded-full border-8 flex items-center justify-center mb-2 overflow-hidden"
                style={{ borderColor: isGood ? "#60a5fa" : "#dc2626" }}
              >
                <img
                  src={characterImages[char] || "/placeholder.svg?height=160&width=160"}
                  alt={char}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-lg font-semibold mt-2">{char}</span>
            </div>
          ))}
        </div>

        <h2 className={`text-3xl font-extrabold mb-2 mt-4 ${isGood ? "text-blue-300" : "text-red-300"}`}>
          {fate.alignment}
        </h2>

        <div className={`text-2xl font-bold mb-4 ${isGood ? "text-blue-400" : "text-red-400"}`}>{fate.school}</div>

        <p className="mb-8 text-lg text-white/90 max-w-xl mx-auto">{fate.description}</p>

        {/* Score breakdown */}
        <div className="mb-6 p-4 bg-slate-800/50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Your Score Breakdown</h3>
          <div className="flex justify-center gap-8 text-sm">
            <div className="text-blue-300">Good Points: {goodPoints}</div>
            <div className="text-red-300">Evil Points: {evilPoints}</div>
            <div className="text-white">Final Score: {score}</div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4 mt-2">Your Key Traits</h3>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {traits.map((trait, idx) => (
            <span
              key={idx}
              className={`px-6 py-2 rounded-full font-semibold text-base ${
                isGood ? "bg-blue-900/60 text-blue-200" : "bg-red-900/60 text-red-200"
              }`}
            >
              {trait}
            </span>
          ))}
        </div>

        <div className="flex flex-row gap-4 w-full justify-center mt-2">
          <Link href="/quiz" className="w-40">
                    <Link href="/navbar-pages/test-your-fate" className="w-40">
              <Button
                variant="outline"
                className="w-full border-white bg-black/80 text-white hover:bg-white/80 hover:text-black"
              >
                Take Again
              </Button>
            </Link>
          </Link>
          <Link href="/" className="w-40">
            <Button className="w-full bg-black/80 text-white hover:bg-white/80 hover:text-black">Back Home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Results() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading...</div>}>
      <ResultsContent />
    </Suspense>
  )
}
