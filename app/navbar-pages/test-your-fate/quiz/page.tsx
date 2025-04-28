"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/button"
import { RadioGroup, RadioGroupItem } from "@/components/radio-group"
import { Label } from "@/components/label"
import Navbar from "@/components/navbar"

type QuestionOption = {
  id: string
  text: string
  type: "good" | "evil" | "neutral"
}

type Question = {
  id: number
  question: string
  options: QuestionOption[]
}

// Quiz questions
const questions: Question[] = [
  {
    id: 1,
    question: "Your friend is in trouble. What do you do?",
    options: [
      { id: "a", text: "Rush to help without thinking of the consequences", type: "good" },
      { id: "b", text: "Help only if there's something in it for you", type: "evil" },
      { id: "c", text: "Analyze the situation before deciding to help", type: "neutral" },
      { id: "d", text: "Pretend you didn't notice their trouble", type: "evil" },
    ],
  },
  {
    id: 2,
    question: "You find a wallet full of money. What do you do?",
    options: [
      { id: "a", text: "Return it to the owner without taking anything", type: "good" },
      { id: "b", text: "Take the money and throw away the wallet", type: "evil" },
      { id: "c", text: "Take a small reward and return the rest", type: "neutral" },
      { id: "d", text: "Return it, but make sure everyone knows about your good deed", type: "neutral" },
    ],
  },
  {
    id: 3,
    question: "What's your idea of power?",
    options: [
      { id: "a", text: "The ability to help others", type: "good" },
      { id: "b", text: "Control over others", type: "evil" },
      { id: "c", text: "Knowledge and wisdom", type: "neutral" },
      { id: "d", text: "Fame and recognition", type: "neutral" },
    ],
  },
  {
    id: 4,
    question: "How do you handle conflict?",
    options: [
      { id: "a", text: "Try to find a peaceful resolution", type: "good" },
      { id: "b", text: "Intimidate the other person into backing down", type: "evil" },
      { id: "c", text: "Avoid it at all costs", type: "neutral" },
      { id: "d", text: "Use your wit to outsmart the other person", type: "neutral" },
    ],
  },
  {
    id: 5,
    question: "What's your greatest strength?",
    options: [
      { id: "a", text: "Compassion and empathy", type: "good" },
      { id: "b", text: "Cunning and strategy", type: "evil" },
      { id: "c", text: "Intelligence and problem-solving", type: "neutral" },
      { id: "d", text: "Charisma and persuasion", type: "neutral" },
    ],
  },
  {
    id: 6,
    question: "What do you value most in friendship?",
    options: [
      { id: "a", text: "Loyalty and trust", type: "good" },
      { id: "b", text: "Usefulness and connections", type: "evil" },
      { id: "c", text: "Shared interests and fun", type: "neutral" },
      { id: "d", text: "Someone who makes you look good", type: "evil" },
    ],
  },
  {
    id: 7,
    question: "How do you feel about rules?",
    options: [
      { id: "a", text: "They're necessary for a functioning society", type: "good" },
      { id: "b", text: "They're made to be broken", type: "evil" },
      { id: "c", text: "They're guidelines, not absolutes", type: "neutral" },
      { id: "d", text: "They apply to others, not to me", type: "evil" },
    ],
  },
  {
    id: 8,
    question: "What's your approach to achieving goals?",
    options: [
      { id: "a", text: "Hard work and perseverance", type: "good" },
      { id: "b", text: "Whatever it takes, even if others get hurt", type: "evil" },
      { id: "c", text: "Smart planning and efficiency", type: "neutral" },
      { id: "d", text: "Finding shortcuts and loopholes", type: "evil" },
    ],
  },
  {
    id: 9,
    question: "How do you handle secrets?",
    options: [
      { id: "a", text: "Keep them confidential unless keeping them would cause harm", type: "good" },
      { id: "b", text: "Use them as leverage when needed", type: "evil" },
      { id: "c", text: "Share them only with trusted friends", type: "neutral" },
      { id: "d", text: "Secrets are burdens - better to be open", type: "good" },
    ],
  },
  {
    id: 10,
    question: "What legacy do you want to leave behind?",
    options: [
      { id: "a", text: "That I made the world a better place", type: "good" },
      { id: "b", text: "That my name was feared and respected", type: "evil" },
      { id: "c", text: "That I lived life to the fullest", type: "neutral" },
      { id: "d", text: "That I achieved greatness and recognition", type: "neutral" },
    ],
  },
]

export default function Quiz() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState("")
  const [answers, setAnswers] = useState<string[]>([])
  const [muted, setMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.volume = 1;
    }
  }, []);

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value)
  }

  const handleNextQuestion = () => {
    if (!selectedOption) return

    // Save answer
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = selectedOption
    setAnswers(newAnswers)

    // Move to next question or results
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption("")
    } else {
      // Calculate result
      const result = calculateResult(newAnswers)
      router.push(`/navbar-pages/test-your-fate/results?type=${result}`)
    }
  }

  const calculateResult = (answers: string[]) => {
    let goodCount = 0
    let evilCount = 0

    answers.forEach((answer, index) => {
      const question = questions[index]
      const selectedOption = question.options.find((opt) => opt.id === answer)

      if (selectedOption?.type === "good") goodCount++
      if (selectedOption?.type === "evil") evilCount++
    })

    return goodCount > evilCount ? "good" : "evil"
  }

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

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4"
      style={{
        backgroundImage: "url('/fate-quiz-bg.png')",
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

      <div className="max-w-3xl w-full flex flex-col items-center mb-8">
        <h1 className="text-3xl font-extrabold mb-2 text-white">Discover Your School</h1>
        <p className="text-gray-300 font-normal">
          Question {currentQuestion + 1} out of {questions.length}
        </p>
        <div className="progress-bar mt-4 w-full">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="max-w-3xl w-full bg-slate-900/90 text-white p-8 rounded-lg">
        <div className="mb-8">
          <h2 className="text-xl mb-6 font-semibold">{question.question}</h2>

          <RadioGroup value={selectedOption} onValueChange={handleOptionSelect} className="space-y-4">
            {question.options.map((option) => (
              <div key={option.id} className="flex items-center">
                <Label
                  htmlFor={option.id}
                  className="flex items-center w-full ml-0 text-white cursor-pointer py-2 px-4 rounded-md hover:bg-slate-800 font-medium"
                >
                  <RadioGroupItem id={option.id} value={option.id} className="border-white mr-3" />
                  {option.text}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="flex justify-end">
          <Button
            onClick={handleNextQuestion}
            disabled={!selectedOption}
            className="bg-white text-slate-900 hover:bg-gray-200 rounded-md"
          >
            {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
          </Button>
        </div>
      </div>
    </div>
  )
}
