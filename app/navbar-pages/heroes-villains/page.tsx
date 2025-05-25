"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs"
import { Button } from "@/components/button"
import Navbar from "@/components/navbar"
import Image from "next/image"

// Character data for GOOD section
const goodCharacters = [
  {
    id: 1,
    name: "Agatha",
    quote: "I'd rather be smart than pretty.",
    description: "Initially seen as odd, Agatha is kind-hearted and deeply loyal, proving herself as true Good.",
    traits: ["Loyal", "Intelligent"],
    image: "/Good_Agatha.jpg"
  },
  {
    id: 2,
    name: "Tedros",
    quote: "A princess isn't a princess without her prince.",
    description: "Son of King Arthur, Tedros is a noble prince who struggles with love and duty.",
    traits: ["Brave", "Chivalrous"],
    image: "/Good_Tedros.jpg"
  },
  {
    id: 3,
    name: "Professor Dovey",
    quote: "Good is not what you look like. It's what you do.",
    description: "Dean of the School for Good, devoted to justice, kindness, and student growth.",
    traits: ["Noble", "Fair"],
    image: "/Good_Professor Dovey.jpg"
  },
  {
    id: 4,
    name: "Beatrix",
    quote: "Everything must be perfect.",
    description: "A classic Good girl who values appearance and status, but learns humility.",
    traits: ["Vain", "Ambitious"],
    image: "/Good_Beatrix.jpg"
  },
  {
    id: 5,
    name: "School Master",
    quote: "Good and Evil are two sides of the same story.",
    description: "The enigmatic head of the School for Good and Evil, guiding students with wisdom and mystery.",
    traits: ["Mysterious", "Wise"],
    image: "/Good_SchoolMaster.jpg"
  },
  {
    id: 6,
    name: "Professor Anemone",
    quote: "Elegance is a virtue.",
    description: "A beauty-obsessed teacher at the School for Good, Professor Anemone teaches the importance of grace, posture, and appearance. Though she seems superficial, she believes beauty reflects inner discipline and strength.",
    traits: ["Strict", "Refined"],
    image: "/Good_Professor Anemone.jpg"
  },
  {
    id: 7,
    name: "Yuba",
    quote: "True Good is born of choice.",
    description: "A magical gnome who teaches the boys at the School for Good.",
    traits: ["Insightful", "Mysterious"],
    image: "/character_placeholder.png"
  },
  {
    id: 8,
    name: "Kiko",
    quote: "It's not always about looks.",
    description: "A sweet and friendly student at the School for Good, often helping others.",
    traits: ["Kind", "Supportive"],
    image: "/character_placeholder.png"
  },
  {
    id: 9,
    name: "Reena",
    quote: "We're not all helpless princesses, you know.",
    description: "A feisty princess who believes in standing up for herself.",
    traits: ["Courageous", "Independent"],
    image: "/character_placeholder.png"
  }
]

// Character data for EVIL section
const evilCharacters = [
  {
    id: 1,
    name: "Sophie",
    quote: "I want to be beautiful and good.",
    description: "Starts in Good but becomes a major villain due to her obsession with fairy-tale perfection.",
    traits: ["Vain", "Ambitious"],
    image: "/Evil_Sophie.jpg"
  },
  {
    id: 2,
    name: "Lady Lesso",
    quote: "Evil needs no one. That’s its power.",
    description: "The Dean of the School for Evil who believes in self-reliance and cruelty as strength.",
    traits: ["Stern", "Strategic"],
    image: "/Evil_ Lady Lesso.jpg"
  },
  {
    id: 3,
    name: "Hester",
    quote: "We’ll kill them if we have to.",
    description: "Dark and sharp, Hester is a powerful witch with a literal demon tattoo.",
    traits: ["Fierce", "Loyal"],
    image: "/Evil_Hester.jpg"
  },
  {
    id: 4,
    name: "Rafal",
    quote: "Evil is eternal.",
    description: "The powerful School Master who represents pure Evil and seduction.",
    traits: ["Charismatic", "Manipulative"],
    image: "/Evil_Rafal.jpg"
  },
  {
    id: 5,
    name: "Hort",
    quote: "Maybe Evil can have a heart too.",
    description: "A bumbling but devoted student of Evil who pines for Sophie and tries to prove himself.",
    traits: ["Insecure", "Loyal"],
    image: "/Evil_Hort.jpg"
  },
  {
    id: 6,
    name: "Anadil",
    quote: "Poison before kisses.",
    description: "A pale, rat-loving witch who sticks closely with her coven and uses wit in battle.",
    traits: ["Dark-humored", "Clever"],
    image: "/character_placeholder.png"
  },
  {
    id: 7,
    name: "Dot",
    quote: "Can we make it a chocolate explosion?",
    description: "A soft-hearted witch more interested in desserts than destruction.",
    traits: ["Sweet", "Misfit"],
    image: "/character_placeholder.png"
  },
  {
    id: 8,
    name: "Aric",
    quote: "Weakness has no place in our school.",
    description: "A brutal and sadistic villain who embodies the ruthless spirit of Evil.",
    traits: ["Cruel", "Proud"],
    image: "/character_placeholder.png"
  }
]

export default function HeroesVillains() {
  return (
    <div className="min-h-screen bg-cream pt-[150px]">
      <div className="absolute top-6 left-0 right-0 z-20">
      <Navbar bgColor="#253544" textColor="white" />
      </div>

      <div className="container py-24 px-12">
        <h1 className="text-3xl font-bold mb-8">Heroes & Villains</h1>

        <Tabs defaultValue="good" className="w-full">
          <TabsList className="w-full mb-8 flex bg-[#F7F0E6] rounded-lg p-1">
            <TabsTrigger
              value="good"
              className={`
                w-1/2 py-3 rounded-md font-bold transition
                data-[state=active]:bg-[#195481] data-[state=active]:text-white
                data-[state=inactive]:bg-gray-200 data-[state=inactive]:text-gray-500
                data-[state=active]:shadow
                text-lg
              `}
            >
              School for Good
            </TabsTrigger>
            <TabsTrigger
              value="evil"
              className={`
                w-1/2 py-3 rounded-md font-bold transition
                data-[state=active]:bg-[#710707] data-[state=active]:text-white
                data-[state=inactive]:bg-gray-200 data-[state=inactive]:text-gray-500
                data-[state=active]:shadow
                text-lg
              `}
            >
              School for Bad
            </TabsTrigger>
          </TabsList>

          <TabsContent value="good" className="grid md:grid-cols-2 gap-6">
            {goodCharacters.map((character) => (
              <div
                key={character.id}
                className="flex bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:translate-y-[-5px] h-[300px]"
              >
                <div className="w-1/3 relative">
                  <div className="h-full relative">
                    <Image
                      src={character.image}
                      alt={character.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="w-2/3 p-6 overflow-y-auto">
                  <h3 className="text-xl font-bold mb-1">{character.name}</h3>
                  <p className="text-gray-500 italic text-sm mb-3">"{character.quote}"</p>
                  <p className="text-gray-700 mb-4 text-sm">
                    {character.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {character.traits.map((trait, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="text-xs bg-[#95C9F0] text-[#195481] border-none shadow-md"
                      >
                        {trait}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="evil" className="grid md:grid-cols-2 gap-6">
            {evilCharacters.map((character) => (
              <div
                key={character.id}
                className="flex bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:translate-y-[-5px] h-[300px]"
              >
                <div className="w-1/3 relative">
                  <div className="h-full relative">
                    <Image
                      src={character.image}
                      alt={character.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="w-2/3 p-6 overflow-y-auto">
                  <h3 className="text-xl font-bold mb-1">{character.name}</h3>
                  <p className="text-gray-500 italic text-sm mb-3">"{character.quote}"</p>
                  <p className="text-gray-700 mb-4 text-sm">
                    {character.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {character.traits.map((trait, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="text-xs bg-[#EC7B7B] text-[#710707] border-none shadow-md"
                      >
                        {trait}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
