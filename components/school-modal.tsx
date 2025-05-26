"use client"
import Image from "next/image"
import { Button } from "@/components/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose } from "@/components/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion"

export type SchoolType = "good" | "evil" | null

interface CoursesByGender {
  boys: string[]
  girls: string[]
}

interface CurriculumYear {
  title: string
  courses: string[]
}

interface SchoolInfo {
  name: string
  tagline: string
  description: string
  imageSrc: string
  courses: CoursesByGender
  anthem: string
  alumni: { name: string; description: string }[]
  traditions: { name: string; description: string }[]
  curriculum: CurriculumYear[]
}

const schoolData: Record<Exclude<SchoolType, null>, SchoolInfo> = {
  good: {
    name: "School of Good",
    tagline: "The School of Heroes, Light, and Virtue",
    description:
      "The School for Good is where all the bright, pure-hearted heroes are trained. It's a place of elegance, kindness, and selflessness, where students learn to wield their beauty, charm, and courage to bring light into the world.",
    imageSrc: "/School for Good.jpg",
    courses: {
      boys: [
        "Chivalry and Grooming",
        "Swordplay and Combat Tactics",
        "Hero Training",
        "Animal Communication",
        "History of Heroes",
        "Good Deeds",
        "Surviving Fairy Tales",
      ],
      girls: [
        "Beautification",
        "Princess Etiquette",
        "Dancing and Poise",
        "Animal Communication",
        "History of Princesses",
        "Good Deeds",
        "Surviving Fairy Tales",
      ],
    },
    anthem:
      "With hearts so pure, we rise and stand,\nTo heal the world and lend a hand.\nIn light and love, our strength we find,\nTo lift the world and heal mankind.",
    alumni: [
      { name: "Cinderella", description: "Heroine who overcame hardship and found her happy ending." },
      { name: "Snow White", description: "Princess known for her kindness and triumph over evil." },
      { name: "Prince Charming", description: "The archetypal Ever prince." },
    ],
    traditions: [
      {
        name: "The Evers Ball",
        description: "A grand formal ball celebrating the accomplishments of Ever students.",
      },
      {
        name: "Flowerground",
        description: "A magical train that delivers students through the roots of the forest.",
      },
      {
        name: "Good Deed Day",
        description: "A yearly tradition where students must perform acts of pure goodness.",
      },
    ],
    curriculum: [
      {
        title: "Year One",
        courses: [
          "Beautification: Enhancing inner and outer beauty",
          "Princess Etiquette: Royal manners and diplomacy",
          "Swordplay and Weapons Training: Combat skills",
          "Animal Communication: Understanding and interacting with animals",
          "Chivalry and Grooming: Honor and personal care",
        ],
      },
      {
        title: "Year Two",
        courses: [
          "Advanced Beautification: Further studies in beauty and grace",
          "Advanced Swordplay: In-depth combat training",
          "Animal Communication: Advanced techniques",
          "Good Deeds: Acts of kindness",
          "Surviving Fairy Tales: Survival skills",
        ],
      },
      {
        title: "Year Three",
        courses: [
          "Express for Success: Advanced grooming",
          "Advanced Strength Training: Physical conditioning",
          "Dance Workshop: Waltz and interpretive movement",
          "Animal Communication: Study abroad",
          "Good Deeds: Sidekick training",
        ],
      },
      {
        title: "Year Four (quests)",
        courses: [
          "Rescuing the imprisoned Princess of Maidenvale",
          "Civil Audit of Camelot",
          "Writing and Publishing a Biography",
          "Opening a Trade Outpost",
        ],
      },
    ],
  },
  evil: {
    name: "School of Evil",
    tagline: "The School of Villains, Shadows, and Ambition",
    description:
      "The School for Evil is where dark forces are nurtured and villainous traits are honed. Students are trained to be cunning, manipulative, and ambitious, with a focus on using dark magic, charm, and wits to seize power and control.",
    imageSrc: "/School for Evil.jpg",
    courses: {
      boys: [
        "Henchmen Training",
        "Advanced Curses & Death Traps",
        "Villain History",
        "Special Talents",
        "Surviving Fairy Tales",
        "Ambition & Power",
      ],
      girls: [
        "Wicked Charm & Enchantment",
        "Uglification (Transformation Magic)",
        "Poison Making",
        "Manipulation & Strategy",
        "Surviving Fairy Tales",
        "Shadow Fighting",
      ],
    },
    anthem:
      "From shadows deep, we rise to reign,\nWith cunning minds and hearts of bane.\nThe darkness calls, we heed its cry,\nAs villains born to terrify.",
    alumni: [
      { name: "Captain Hook", description: "The infamous pirate from Neverland." },
      { name: "The Evil Queen", description: "Master of vanity and poison from Snow White's tale." },
      { name: "Maleficent", description: "Dark fairy and curse-caster extraordinaire." },
    ],
    traditions: [
      {
        name: "The Circus of Talents",
        description: "A deadly talent show where Evil students demonstrate their powers.",
      },
      {
        name: "The Trial by Tale",
        description: "A survival test in the Endless Woods where Good and Evil students compete.",
      },
      {
        name: "The Snow Ball",
        description: "Evil's dark mirror to the Evers Ball — full of plotting and poisoned punch.",
      },
    ],
    curriculum: [
      {
        title: "Year One",
        courses: [
          "Uglification: The art of disguise and transformation",
          "Henchmen Training: Preparing loyal subordinates",
          "Curses & Death Traps: Creating effective traps",
          "History of Villainy: Studying infamous villains",
          "Special Talents: Developing unique abilities",
        ],
      },
      {
        title: "Year Two",
        courses: [
          "Disguises & Deformity: Advanced transformation",
          "Henchmen Field Training: Practical training",
          "Advanced Curses: Complex curse creation",
          "History of Fairy Tales: Understanding origins",
          "Advanced Spell Casting: Mastery of spells",
        ],
      },
      {
        title: "Year Three",
        courses: [
          "Mimicry: Study of impersonation",
          "Leader 'Looks': Creating intimidating appearances",
          "Nemesis Dream Analysis: Understanding enemies",
          "Phantom Duels: Practice combat",
          "Pillaging & Pilfering: The art of theft",
        ],
      },
      {
        title: "Year Four",
        courses: ["Students embark on quests in the Endless Woods, returning for graduation at year's end."],
      },
    ],
  },
}

const foundersInfo = {
  title: "The Founders",
  description:
    "The school was founded by Rafal and Rhian, twin brothers with opposing views of morality. After a bitter divide, Rafal became the embodiment of Evil, while Rhian represented Good.",
}

export function SchoolModal({
  open,
  schoolType,
  onOpenChange,
}: {
  open: boolean
  schoolType: SchoolType
  onOpenChange: (open: boolean) => void
}) {
  if (!schoolType) return null

  const school = schoolData[schoolType]

  // Enhanced color schemes
  const colorScheme =
    schoolType === "good"
      ? {
          primary: "#1e40af",
          secondary: "#3b82f6",
          accent: "#60a5fa",
          light: "#dbeafe",
          gradient: "from-white via-blue-50 to-sky-50",
          textPrimary: "#1e3a8a",
          textSecondary: "#1e40af",
          border: "#93c5fd",
          shadow: "shadow-blue-200/50",
          glow: "shadow-lg shadow-blue-300/30",
        }
      : {
          primary: "#000000",
          secondary: "#dc2626",
          accent: "#ef4444",
          light: "#111827",
          gradient: "from-gray-900 via-red-950 to-black",
          textPrimary: "#ff6b6b",
          textSecondary: "#dc2626",
          border: "#374151",
          shadow: "shadow-red-500/20",
          glow: "shadow-lg shadow-red-400/30",
        }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={`max-w-4xl max-h-[90vh] overflow-y-auto p-0 border-2 ${
          schoolType === "good" ? "bg-white text-gray-900" : "bg-gray-900 text-white"
        }`}
        style={{ borderColor: colorScheme.border }}
      >
        <div
          className={`sticky top-0 z-10 bg-gradient-to-r ${colorScheme.gradient} border-b-2 p-4 ${colorScheme.shadow}`}
          style={{ borderBottomColor: colorScheme.border }}
        >
          <DialogHeader>
            <DialogTitle
              className="text-2xl font-bold flex items-center gap-3"
              style={{ color: colorScheme.textPrimary }}
            >
              <div
                className={`w-5 h-5 rounded-full ${colorScheme.glow}`}
                style={{
                  background: `linear-gradient(135deg, ${colorScheme.secondary}, ${colorScheme.accent})`,
                  boxShadow: `0 0 15px ${colorScheme.secondary}40`,
                }}
              />
              {school.name}
            </DialogTitle>
            <DialogDescription className="text-sm mt-1 font-medium" style={{ color: colorScheme.textSecondary }}>
              {school.tagline}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="relative h-56 w-full overflow-hidden">
          <Image src={school.imageSrc || "/placeholder.svg"} alt={school.name} fill className="object-cover" />
          <div
            className="absolute inset-0 flex items-end"
            style={{
              background: `linear-gradient(to top, ${colorScheme.primary}90, ${colorScheme.secondary}40, transparent)`,
            }}
          >
            <div className="p-4 text-white max-w-3xl">
              <p className="text-sm font-medium drop-shadow-lg">{school.description}</p>
            </div>
          </div>
        </div>

        <div className="p-4">
          <Tabs defaultValue="about" className="w-full">
            <TabsList
              className={`grid w-full grid-cols-5 mb-4 bg-gradient-to-r ${colorScheme.gradient} border-2`}
              style={{ borderColor: colorScheme.border }}
            >
              <TabsTrigger
                value="about"
                className={`${
                  schoolType === "good"
                    ? "data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md"
                    : "data-[state=active]:bg-gray-800 data-[state=active]:text-white data-[state=active]:shadow-md"
                }`}
                style={{ color: colorScheme.textPrimary }}
              >
                About
              </TabsTrigger>
              <TabsTrigger
                value="courses"
                className={`${
                  schoolType === "good"
                    ? "data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md"
                    : "data-[state=active]:bg-gray-800 data-[state=active]:text-white data-[state=active]:shadow-md"
                }`}
                style={{ color: colorScheme.textPrimary }}
              >
                Courses
              </TabsTrigger>
              <TabsTrigger
                value="curriculum"
                className={`${
                  schoolType === "good"
                    ? "data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md"
                    : "data-[state=active]:bg-gray-800 data-[state=active]:text-white data-[state=active]:shadow-md"
                }`}
                style={{ color: colorScheme.textPrimary }}
              >
                Curriculum
              </TabsTrigger>
              <TabsTrigger
                value="traditions"
                className={`${
                  schoolType === "good"
                    ? "data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md"
                    : "data-[state=active]:bg-gray-800 data-[state=active]:text-white data-[state=active]:shadow-md"
                }`}
                style={{ color: colorScheme.textPrimary }}
              >
                Traditions
              </TabsTrigger>
              <TabsTrigger
                value="alumni"
                className={`${
                  schoolType === "good"
                    ? "data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md"
                    : "data-[state=active]:bg-gray-800 data-[state=active]:text-white data-[state=active]:shadow-md"
                }`}
                style={{ color: colorScheme.textPrimary }}
              >
                Alumni
              </TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-4">
              <div
                className={`rounded-xl p-6 border-2 bg-gradient-to-br ${colorScheme.gradient} ${colorScheme.shadow}`}
                style={{ borderColor: colorScheme.border }}
              >
                <h3 className="font-bold text-lg mb-3" style={{ color: colorScheme.textPrimary }}>
                  About the School
                </h3>
                <p
                  className={`text-sm ${schoolType === "good" ? "text-gray-700" : "text-gray-300"} mb-4 leading-relaxed`}
                >
                  The School for Good and Evil is a magical institution where ordinary children are trained to become
                  the heroes and villains of future fairy tales.
                </p>
                <div
                  className={`${
                    schoolType === "good" ? "bg-blue-50/80" : "bg-gray-800/80"
                  } backdrop-blur-sm rounded-lg p-4 border shadow-md`}
                  style={{ borderColor: colorScheme.border }}
                >
                  <h4 className="font-semibold text-sm mb-2" style={{ color: colorScheme.textPrimary }}>
                    {foundersInfo.title}
                  </h4>
                  <p className={`text-xs ${schoolType === "good" ? "text-gray-600" : "text-gray-400"} leading-relaxed`}>
                    {foundersInfo.description}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3" style={{ color: colorScheme.textPrimary }}>
                  School Anthem
                </h3>
                <div
                  className={`bg-gradient-to-r ${colorScheme.gradient} p-6 rounded-xl whitespace-pre-line text-center italic text-sm border-l-4 ${colorScheme.shadow}`}
                  style={{
                    borderColor: colorScheme.secondary,
                    color: colorScheme.textPrimary,
                    boxShadow: `inset 0 0 20px ${colorScheme.secondary}20`,
                  }}
                >
                  {school.anthem}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="courses">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-bold text-lg flex items-center gap-3" style={{ color: colorScheme.textPrimary }}>
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${colorScheme.secondary}, ${colorScheme.accent})`,
                        boxShadow: `0 0 10px ${colorScheme.secondary}60`,
                      }}
                    />
                    Boys' Courses
                  </h3>
                  <ul className="space-y-2">
                    {school.courses.boys.map((course, index) => (
                      <li
                        key={index}
                        className={`p-3 rounded-lg border-2 text-sm flex items-center gap-3 hover:shadow-md transition-all duration-200 bg-gradient-to-r ${colorScheme.gradient}`}
                        style={{ borderColor: colorScheme.border, color: colorScheme.textSecondary }}
                      >
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: colorScheme.accent }}
                        />
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-lg flex items-center gap-3" style={{ color: colorScheme.textPrimary }}>
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${colorScheme.secondary}, ${colorScheme.accent})`,
                        boxShadow: `0 0 10px ${colorScheme.secondary}60`,
                      }}
                    />
                    Girls' Courses
                  </h3>
                  <ul className="space-y-2">
                    {school.courses.girls.map((course, index) => (
                      <li
                        key={index}
                        className={`p-3 rounded-lg border-2 text-sm flex items-center gap-3 hover:shadow-md transition-all duration-200 bg-gradient-to-r ${colorScheme.gradient}`}
                        style={{ borderColor: colorScheme.border, color: colorScheme.textSecondary }}
                      >
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: colorScheme.accent }}
                        />
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="curriculum">
              <Accordion>
                {school.curriculum.map((year, index) => (
                  <AccordionItem key={index} data-value={`year-${index}`}>
                    <div
                      className={`border-2 rounded-lg mb-2 bg-gradient-to-r ${colorScheme.gradient}`}
                      style={{ borderColor: colorScheme.border }}
                    >
                      <AccordionTrigger>
                        <div className="px-4">
                          <div
                            className="font-bold text-base flex items-center gap-3"
                            style={{ color: colorScheme.textPrimary }}
                          >
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colorScheme.secondary }} />
                            {year.title}
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 py-2 px-4">
                          {year.courses.map((course, courseIndex) => (
                            <li
                              key={courseIndex}
                              className="p-3 rounded-md text-sm flex items-start gap-3 hover:bg-white/50 transition-all duration-200"
                              style={{ color: colorScheme.textSecondary }}
                            >
                              <div
                                className="w-2 h-2 mt-1 rounded-full flex-shrink-0"
                                style={{ backgroundColor: colorScheme.accent }}
                              />
                              <span>{course}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="traditions">
              <div className="grid gap-4">
                {school.traditions.map((tradition, index) => (
                  <div
                    key={index}
                    className={`p-4 border-2 rounded-xl hover:shadow-lg transition-all duration-200 bg-gradient-to-r ${colorScheme.gradient}`}
                    style={{
                      borderLeftWidth: "6px",
                      borderLeftColor: colorScheme.secondary,
                      borderColor: colorScheme.border,
                    }}
                  >
                    <h3
                      className="font-bold text-base mb-2 flex items-center gap-2"
                      style={{ color: colorScheme.textPrimary }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colorScheme.accent }} />
                      {tradition.name}
                    </h3>
                    <p
                      className={`text-sm ${schoolType === "good" ? "text-gray-700" : "text-gray-700"} leading-relaxed`}
                    >
                      {tradition.description}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="alumni">
              <div className="grid md:grid-cols-3 gap-4">
                {school.alumni.map((alum, index) => (
                  <div
                    key={index}
                    className={`border-2 p-4 rounded-xl hover:shadow-lg transition-all duration-200 bg-gradient-to-br ${colorScheme.gradient}`}
                    style={{ borderColor: colorScheme.border }}
                  >
                    <h4
                      className="font-bold text-base mb-2 flex items-center gap-2"
                      style={{ color: colorScheme.textPrimary }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colorScheme.secondary }} />
                      {alum.name}
                    </h4>
                    <p
                      className={`text-sm ${schoolType === "good" ? "text-gray-700" : "text-gray-700"} leading-relaxed`}
                    >
                      {alum.description}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div
          className={`sticky bottom-0 w-full bg-gradient-to-r ${colorScheme.gradient} border-t-2 p-4 flex justify-end ${colorScheme.shadow}`}
          style={{ borderTopColor: colorScheme.border }}
        >
          <DialogClose asChild>
            <Button
              size="sm"
              className="font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              style={{
                backgroundColor: colorScheme.secondary,
                color: "white",
                border: `2px solid ${colorScheme.primary}`,
              }}
            >
              Close
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}
