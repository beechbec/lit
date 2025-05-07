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
  score?: number
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
    question: "A powerful relic falls into your hands. You can't safely guard it alone. What do you do?",
    options: [
      { id: "a", text: "Use it to undo a great wrong—even if it means bending the rules", type: "good", score: 1 },
      { id: "b", text: "Hand it over to the nearest authority without explanation", type: "good", score: 2 },
      { id: "c", text: "Sell it off and use the money to pursue your own destiny", type: "evil", score: -1 },
      { id: "d", text: "Shatter it forever so no one wields its power again", type: "evil", score: -2 },
    ],
  },
  {
    id: 2,
    question: "A friend begs you to lie for them to avoid punishment. You know they've lied before.",
    options: [
      { id: "a", text: "Lie to protect them anyway—they're loyal to you", type: "good", score: 1 },
      { id: "b", text: "Encourage confession, offering to stand by them in court", type: "good", score: 2 },
      { id: "c", text: "Refuse and let them face the consequences—rules are rules", type: "evil", score: -1 },
      { id: "d", text: "Agree—but later leverage your favor for something you want", type: "evil", score: -2 },
    ],
  },
  {
    id: 3,
    question: "During a formal duel, your adversary yields.",
    options: [
      { id: "a", text: "Accept and offer your hand in peace", type: "good", score: 2 },
      { id: "b", text: "Declare it a draw—you had your chance", type: "good", score: 1 },
      { id: "c", text: "Press the advantage: mercy invites weakness", type: "evil", score: -1 },
      { id: "d", text: "Spare them—and tattoo a symbolic mark so they remember your mercy", type: "evil", score: -2 },
    ],
  },
  {
    id: 4,
    question: "You overhear a classmate plotting sabotage that won't directly endanger lives but will ruin reputations.",
    options: [
      { id: "a", text: "Secretly thwart their plan using clever misdirection", type: "good", score: 2 },
      { id: "b", text: "Confront them openly and appeal to their better nature", type: "good", score: 1 },
      { id: "c", text: "Expose them ruthlessly—public shame is the only deterrent", type: "evil", score: -2 },
      { id: "d", text: "Do nothing—they chose their path", type: "evil", score: -1 },
    ],
  },
  {
    id: 5,
    question: "A magical teacher offers to grant you flawless skill in whatever you choose—but at the cost of losing one cherished memory.",
    options: [
      { id: "a", text: "Accept—great power demands sacrifice", type: "good", score: 1 },
      { id: "b", text: "Decline—identity is worth more than skill", type: "good", score: 2 },
      { id: "c", text: "Accept—memories are fading anyway", type: "evil", score: -1 },
      { id: "d", text: "Bargain to erase someone else's memory instead", type: "evil", score: -2 },
    ],
  },
  {
    id: 6,
    question: "You can rescue one group: a caravan of innocent peasants or a small squad of elite knights sworn to your kingdom.",
    options: [
      { id: "a", text: "Save the peasants—every life matters equally", type: "good", score: 2 },
      { id: "b", text: "Save the knights—they protect more people in the long run", type: "good", score: 1 },
      { id: "c", text: "Let both suffer—your duty is to the realm, not individuals", type: "evil", score: -1 },
      { id: "d", text: "Save the peasants, then recruit them as cannon fodder", type: "evil", score: -2 },
    ],
  },
  {
    id: 7,
    question: "Caught in enemy territory, you find a wounded foe begging for help.",
    options: [
      { id: "a", text: "Tend their wounds and let them go", type: "good", score: 2 },
      { id: "b", text: "Heal them in secret, then turn them in", type: "good", score: 1 },
      { id: "c", text: "Finish them off—do no harm means no mercy", type: "evil", score: -1 },
      { id: "d", text: "Heal them, then curse their blade so they can't fight again", type: "evil", score: -2 },
    ],
  },
  {
    id: 8,
    question: "Your mentor offers you a chance to ascend—if you betray someone you trust.",
    options: [
      { id: "a", text: "Refuse and remain loyal", type: "good", score: 2 },
      { id: "b", text: "Agree, but warn your friend afterward", type: "good", score: 1 },
      { id: "c", text: "Betray them without a second thought", type: "evil", score: -1 },
      { id: "d", text: "Betray them, then frame them for a greater crime", type: "evil", score: -2 },
    ],
  },
  {
    id: 9,
    question: "You discover a hidden passage in your school that leads to forbidden knowledge.",
    options: [
      { id: "a", text: "Study it to better serve others", type: "good", score: 1 },
      { id: "b", text: "Seal it off—such power is too dangerous", type: "good", score: 2 },
      { id: "c", text: "Leak it to whoever pays you most", type: "evil", score: -2 },
      { id: "d", text: "Use it to blackmail the administration", type: "evil", score: -1 },
    ],
  },
  {
    id: 10,
    question: "A peer confesses they've broken a minor law to save someone's life. You must choose:",
    options: [
      { id: "a", text: "Help them cover it up", type: "good", score: 1 },
      { id: "b", text: "Turn them in but write a plea for mercy", type: "good", score: 2 },
      { id: "c", text: "Remain silent—rules are rules", type: "evil", score: -1 },
      { id: "d", text: "Expose them and demand they pay you a favor", type: "evil", score: -2 },
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
      const resultScore = calculateScore(newAnswers)
      router.push(`/navbar-pages/test-your-fate/results?score=${resultScore}`)
    }
  }

  const calculateScore = (answers: string[]) => {
    let total = 0
    answers.forEach((answer, index) => {
      const question = questions[index]
      const selectedOption = question.options.find((opt) => opt.id === answer)
      if (selectedOption) total += selectedOption.score || 0
    })
    return total
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
      className="min-h-screen flex flex-col items-center justify-center p-4 pt-32"
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

      <div className="max-w-3xl w-full flex flex-col items-center mb-8 mt-8">
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
