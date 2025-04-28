"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs"
import { Button } from "@/components/button"
import Navbar from "@/components/navbar"

export default function HeroesVillains() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="absolute top-6 left-0 right-0 z-20">
        <Navbar />
      </div>

      <div className="max-w-6xl mx-auto py-24 px-12">
        <h1 className="text-3xl font-bold mb-8">Heroes & Villains</h1>

        <Tabs defaultValue="good" className="w-full">
          <TabsList className="w-full mb-8 bg-white">
            <TabsTrigger value="good" className="w-1/2 py-3 data-[state=active]:bg-white">
              School for Good
            </TabsTrigger>
            <TabsTrigger value="evil" className="w-1/2 py-3 data-[state=active]:bg-white">
              School for Bad
            </TabsTrigger>
          </TabsList>

          <TabsContent value="good" className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((character) => (
              <div
                key={character}
                className="flex bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:translate-y-[-5px]"
              >
                <div className="w-1/3 relative bg-gray-100">{/* Placeholder for character image */}</div>
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-1">Name</h3>
                  <p className="text-gray-500 italic text-sm mb-3">"Insert Character Quote here"</p>
                  <p className="text-gray-700 mb-4 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="text-xs bg-amber-700 text-white border-amber-700">
                      Trait 1
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs bg-amber-700 text-white border-amber-700">
                      Trait 2
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs bg-amber-700 text-white border-amber-700">
                      Trait 3
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="evil" className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((character) => (
              <div
                key={character}
                className="flex bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:translate-y-[-5px]"
              >
                <div className="w-1/3 relative bg-gray-100">{/* Placeholder for character image */}</div>
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-1">Name</h3>
                  <p className="text-gray-500 italic text-sm mb-3">"Insert Character Quote here"</p>
                  <p className="text-gray-700 mb-4 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="text-xs bg-amber-700 text-white border-amber-700">
                      Trait 1
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs bg-amber-700 text-white border-amber-700">
                      Trait 2
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs bg-amber-700 text-white border-amber-700">
                      Trait 3
                    </Button>
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
