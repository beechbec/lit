"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs"
import { Button } from "@/components/button"
import Image from "next/image"
import Navbar from "@/components/navbar"

// Character data for GOOD section with archetypes
const goodCharacters = [
  {
    id: 1,
    name: "Agatha",
    archetype: "The Unlikely Hero",
    quote: "I'd rather be smart than pretty.",
    description: "Initially seen as odd, Agatha is kind-hearted and deeply loyal, proving herself as true Good.",
    archetypeDescription:
      "The Unlikely Hero archetype represents characters who don't fit the traditional heroic mold but possess inner strength and moral courage that ultimately saves the day.",
    traits: ["Loyal", "Intelligent"],
    image: "/Good_Agatha.jpg",
  },
  {
    id: 2,
    name: "Tedros",
    archetype: "The Classic Hero",
    quote: "A princess isn't a princess without her prince.",
    description: "Son of King Arthur, Tedros is a noble prince who struggles with love and duty.",
    archetypeDescription:
      "The Classic Hero embodies traditional heroic qualities - bravery, nobility, and the burden of living up to legendary expectations.",
    traits: ["Brave", "Chivalrous"],
    image: "/Good_Tedros.jpg",
  },
  {
    id: 3,
    name: "Professor Dovey",
    archetype: "The Nurturing Mentor",
    quote: "Good is not what you look like. It's what you do.",
    description: "Dean of the School for Good, devoted to justice, kindness, and student growth.",
    archetypeDescription:
      "The Nurturing Mentor guides heroes with wisdom, compassion, and unwavering belief in their potential for good.",
    traits: ["Noble", "Fair"],
    image: "/Good_Professor Dovey.jpg",
  },
  {
    id: 4,
    name: "Beatrix",
    archetype: "The Perfectionist",
    quote: "Everything must be perfect.",
    description: "A classic Good girl who values appearance and status, but learns humility.",
    archetypeDescription:
      "The Perfectionist archetype represents those who strive for flawless ideals, often learning that true beauty comes from within.",
    traits: ["Vain", "Ambitious"],
    image: "/Good_Beatrix.jpg",
  },
  {
    id: 5,
    name: "School Master",
    archetype: "The Wise Guardian",
    quote: "Good and Evil are two sides of the same story.",
    description: "The enigmatic head of the School for Good and Evil, guiding students with wisdom and mystery.",
    archetypeDescription:
      "The Wise Guardian maintains balance and order, understanding that both light and darkness are necessary for growth.",
    traits: ["Mysterious", "Wise"],
    image: "/Good_SchoolMaster.jpg",
  },
  {
    id: 6,
    name: "Professor Anemone",
    archetype: "The Refined Teacher",
    quote: "Elegance is a virtue.",
    description:
      "A beauty-obsessed teacher at the School for Good, Professor Anemone teaches the importance of grace, posture, and appearance.",
    archetypeDescription:
      "The Refined Teacher believes that external discipline reflects inner strength and that beauty is a form of self-respect.",
    traits: ["Strict", "Refined"],
    image: "/Good_Professor Anemone.jpg",
  },
  {
    id: 7,
    name: "Yuba",
    archetype: "The Wise Teacher",
    quote: "True Good is born of choice.",
    description: "A magical gnome who teaches the boys at the School for Good.",
    archetypeDescription:
      "The Wise Teacher guides students through experience and ancient wisdom, helping them discover their true nature.",
    traits: ["Insightful", "Mysterious"],
    image: "/character_placeholder.png",
  },
  {
    id: 8,
    name: "Kiko",
    archetype: "The Supportive Friend",
    quote: "It's not always about looks.",
    description: "A sweet and friendly student at the School for Good, often helping others.",
    archetypeDescription: "The Supportive Friend represents loyalty and kindness, always there to help others succeed.",
    traits: ["Kind", "Supportive"],
    image: "/character_placeholder.png",
  },
  {
    id: 9,
    name: "Reena",
    archetype: "The Independent Warrior",
    quote: "We're not all helpless princesses, you know.",
    description: "A feisty princess who believes in standing up for herself.",
    archetypeDescription: "The Independent Warrior challenges traditional roles and fights for self-determination.",
    traits: ["Courageous", "Independent"],
    image: "/character_placeholder.png",
  },
]

// Character data for EVIL section with archetypes
const evilCharacters = [
  {
    id: 1,
    name: "Sophie",
    archetype: "The Fallen Angel",
    quote: "I want to be beautiful and good.",
    description: "Starts in Good but becomes a major villain due to her obsession with fairy-tale perfection.",
    archetypeDescription:
      "The Fallen Angel represents corruption through vanity and the dangerous pursuit of superficial ideals over genuine goodness.",
    traits: ["Vain", "Ambitious"],
    image: "/Evil_Sophie.jpg",
  },
  {
    id: 2,
    name: "Lady Lesso",
    archetype: "The Strict Disciplinarian",
    quote: "Evil needs no one. That's power.",
    description: "The Dean of the School for Evil who believes in self-reliance and cruelty as strength.",
    archetypeDescription:
      "The Strict Disciplinarian teaches through harsh lessons, believing that strength comes from independence and the ability to endure pain.",
    traits: ["Stern", "Strategic"],
    image: "/Evil_ Lady Lesso.jpg",
  },
  {
    id: 3,
    name: "Hester",
    archetype: "The Dark Rebel",
    quote: "We'll kill them if we have to.",
    description: "Dark and sharp, Hester is a powerful witch with a literal demon tattoo.",
    archetypeDescription:
      "The Dark Rebel rejects conventional rules and embraces chaos, using rebellion as both weapon and shield.",
    traits: ["Fierce", "Loyal"],
    image: "/Evil_Hester.jpg",
  },
  {
    id: 4,
    name: "Rafal",
    archetype: "The Dark Tempter",
    quote: "Evil is eternal.",
    description: "The powerful School Master who represents pure Evil and seduction.",
    archetypeDescription:
      "The Dark Tempter uses charm and promises of power to corrupt others, representing the seductive nature of evil.",
    traits: ["Charismatic", "Manipulative"],
    image: "/Evil_Rafal.jpg",
  },
  {
    id: 5,
    name: "Hort",
    archetype: "The Loyal Misfit",
    quote: "Maybe Evil can have a heart too.",
    description: "A bumbling but devoted student of Evil who pines for Sophie and tries to prove himself.",
    archetypeDescription:
      "The Loyal Misfit doesn't quite fit their assigned role but remains devoted to those they care about, showing that even 'evil' can love.",
    traits: ["Insecure", "Loyal"],
    image: "/Evil_Hort.jpg",
  },
  {
    id: 6,
    name: "Anadil",
    archetype: "The Dark Strategist",
    quote: "Poison before kisses.",
    description: "A pale, rat-loving witch who sticks closely with her coven and uses wit in battle.",
    archetypeDescription:
      "The Dark Strategist prefers cunning over brute force, using intelligence and careful planning to achieve their goals.",
    traits: ["Dark-humored", "Clever"],
    image: "/character_placeholder.png",
  },
  {
    id: 7,
    name: "Dot",
    archetype: "The Gentle Misfit",
    quote: "Can we make it a chocolate explosion?",
    description: "A soft-hearted witch more interested in desserts than destruction.",
    archetypeDescription:
      "The Gentle Misfit doesn't fit the expected mold, showing that even in 'evil' places, kindness can exist.",
    traits: ["Sweet", "Misfit"],
    image: "/character_placeholder.png",
  },
  {
    id: 8,
    name: "Aric",
    archetype: "The Ruthless Enforcer",
    quote: "Weakness has no place in our school.",
    description: "A brutal and sadistic villain who embodies the ruthless spirit of Evil.",
    archetypeDescription:
      "The Ruthless Enforcer represents pure cruelty and the belief that strength comes through domination.",
    traits: ["Cruel", "Proud"],
    image: "/character_placeholder.png",
  },
]

export default function HeroesVillains() {
  return (
    <div>
      <div className="absolute top-6 left-0 right-0 z-20">
        <Navbar bgColor="#253544" textColor="white" />
      </div>
      <div className="min-h-screen bg-cream pt-[150px]">
        <div className="container py-24 px-12">
          {/* Introduction Section */}
          <div className="mb-8 bg-white rounded-lg p-6 shadow-md">
            <h1 className="text-3xl font-bold mb-4">Heroes & Villains</h1>
            <p className="text-gray-700 mb-3">
              Based on Soman Chainani's novel "The School for Good and Evil," these characters represent different
              archetypes - universal personality patterns found in stories. Below you'll find the Good characters from
              the School for Good and the Evil characters from the School for Evil, each with their archetype, famous
              quote, description, and key traits.
            </p>
          </div>

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
                School for Evil
              </TabsTrigger>
            </TabsList>

            <TabsContent value="good" className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
              {goodCharacters.map((character) => (
                <div
                  key={character.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex h-[400px]">
                    <div className="w-1/3 relative">
                      <Image
                        src={character.image || "/placeholder.svg"}
                        alt={character.name}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="w-2/3 p-6 overflow-y-auto">
                      <div className="mb-3">
                        <h3 className="text-xl font-bold mb-1">{character.name}</h3>
                        <span className="inline-block bg-[#195481] text-white text-xs px-2 py-1 rounded mb-2">
                          {character.archetype}
                        </span>
                      </div>

                      <p className="text-gray-600 italic text-sm mb-3">"{character.quote}"</p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-2">Character Description:</h4>
                        <p className="text-gray-700 text-sm mb-3">{character.description}</p>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-2">Archetype Meaning:</h4>
                        <p className="text-gray-700 text-sm mb-3">{character.archetypeDescription}</p>
                      </div>

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
                </div>
              ))}
            </TabsContent>

            <TabsContent value="evil" className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
              {evilCharacters.map((character) => (
                <div
                  key={character.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex h-[400px]">
                    <div className="w-1/3 relative">
                      <Image
                        src={character.image || "/placeholder.svg"}
                        alt={character.name}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="w-2/3 p-6 overflow-y-auto">
                      <div className="mb-3">
                        <h3 className="text-xl font-bold mb-1">{character.name}</h3>
                        <span className="inline-block bg-[#710707] text-white text-xs px-2 py-1 rounded mb-2">
                          {character.archetype}
                        </span>
                      </div>

                      <p className="text-gray-600 italic text-sm mb-3">"{character.quote}"</p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-2">Character Description:</h4>
                        <p className="text-gray-700 text-sm mb-3">{character.description}</p>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-2">Archetype Meaning:</h4>
                        <p className="text-gray-700 text-sm mb-3">{character.archetypeDescription}</p>
                      </div>

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
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
