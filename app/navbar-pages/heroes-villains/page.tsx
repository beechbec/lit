"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs"
import { Button } from "@/components/button"
import Navbar from "@/components/navbar"

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
            {[1, 2].map((character) => (
              <div
                key={character}
                className="flex bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:translate-y-[-5px]"
              >
                <div className="w-1/3 relative bg-[#F7F0E6] flex flex-col items-center justify-start pt-6">
                  <span className="inline-block px-4 py-1 rounded-full bg-[#195481] text-white font-bold text-sm mb-4">
                    GOOD
                  </span>
                </div>
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-1">Name</h3>
                  <p className="text-gray-500 italic text-sm mb-3">"Insert Character Quote here"</p>
                  <p className="text-gray-700 mb-4 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs bg-[#95C9F0] text-[#195481] border-none shadow-md"
                    >
                      Kind
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs bg-[#95C9F0] text-[#195481] border-none shadow-md"
                    >
                      Kind
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs bg-[#95C9F0] text-[#195481] border-none shadow-md"
                    >
                      Kind
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
                <div className="w-1/3 relative bg-[#F7E6E6] flex flex-col items-center justify-start pt-6">
                  <span className="inline-block px-4 py-1 rounded-full bg-[#710707] text-white font-bold text-sm mb-4">
                    EVIL
                  </span>
                </div>
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-1">Name</h3>
                  <p className="text-gray-500 italic text-sm mb-3">"Insert Character Quote here"</p>
                  <p className="text-gray-700 mb-4 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs bg-[#EC7B7B] text-[#710707] border-none shadow-md"
                    >
                      Kind
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs bg-[#EC7B7B] text-[#710707] border-none shadow-md"
                    >
                      Kind
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs bg-[#EC7B7B] text-[#710707] border-none shadow-md"
                    >
                      Kind
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
