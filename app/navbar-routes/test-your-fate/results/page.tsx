"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"

type ResultType = "good" | "evil"

export default function Results() {
  const searchParams = useSearchParams()
  const type = (searchParams.get("type") || "good") as ResultType

  const isGood = type === "good"

  const traits = isGood
    ? ["Compassionate", "Honest", "Brave", "Selfless", "Loyal"]
    : ["Cunning", "Ambitious", "Strategic", "Resourceful", "Determined"]

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('https://i.imgur.com/JZcIDSP.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-6 left-0 right-0 z-20">
        <Navbar />
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
          <Link href="/test-your-fate/quiz">
            <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-slate-900">
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
