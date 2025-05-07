"use client"
import Image from "next/image"
import { Button } from "@/components/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/dialog"
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
    imageSrc: "/school-good.png",
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
    imageSrc: "/school-evil.png",
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
  const accentColor = schoolType === "good" ? "#e9d5ff" : "#475569"
  const textColor = schoolType === "good" ? "#7e22ce" : "#1e293b"
  const bgColor = schoolType === "good" ? "bg-purple-50" : "bg-slate-50"

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-950 border-b p-4">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: accentColor }} />
              {school.name}
            </DialogTitle>
            <DialogDescription className="text-sm mt-1">{school.tagline}</DialogDescription>
          </DialogHeader>
        </div>

        <div className="relative h-56 w-full overflow-hidden">
          <Image src={school.imageSrc || "/placeholder.svg"} alt={school.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-4 text-white max-w-3xl">
              <p className="text-sm">{school.description}</p>
            </div>
          </div>
        </div>

        <div className="p-4">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-4">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="traditions">Traditions</TabsTrigger>
              <TabsTrigger value="alumni">Alumni</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-4">
              <div className={`rounded-lg p-4 border ${bgColor}`}>
                <h3 className="font-bold text-base mb-2">About the School</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  The School for Good and Evil is a magical institution where ordinary children are trained to become
                  the heroes and villains of future fairy tales.
                </p>
                <div className="bg-white dark:bg-gray-900 rounded-md p-3 border">
                  <h4 className="font-semibold text-sm mb-1">{foundersInfo.title}</h4>
                  <p className="text-xs text-muted-foreground">{foundersInfo.description}</p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-base mb-2">School Anthem</h3>
                <div
                  className="bg-muted p-4 rounded-md whitespace-pre-line text-center italic text-sm border-l-4"
                  style={{ borderColor: accentColor }}
                >
                  {school.anthem}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="courses">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h3 className="font-bold text-base flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
                    Boys' Courses
                  </h3>
                  <ul className="space-y-1">
                    {school.courses.boys.map((course, index) => (
                      <li
                        key={index}
                        className="p-2 rounded-md border text-sm flex items-center gap-2 hover:bg-muted transition-colors"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-base flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
                    Girls' Courses
                  </h3>
                  <ul className="space-y-1">
                    {school.courses.girls.map((course, index) => (
                      <li
                        key={index}
                        className="p-2 rounded-md border text-sm flex items-center gap-2 hover:bg-muted transition-colors"
                      >
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
                    <AccordionTrigger>
                      <div className="font-bold text-sm" style={{ color: textColor }}>
                        {year.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-1 py-1 pl-2">
                        {year.courses.map((course, courseIndex) => (
                          <li
                            key={courseIndex}
                            className="p-2 rounded-md text-xs flex items-start gap-2 hover:bg-muted/30 transition-colors"
                          >
                            <div
                              className="w-1.5 h-1.5 mt-1 rounded-full flex-shrink-0"
                              style={{ backgroundColor: accentColor }}
                            />
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="traditions">
              <div className="grid gap-3">
                {school.traditions.map((tradition, index) => (
                  <div
                    key={index}
                    className="p-3 border rounded-lg hover:bg-muted/20 transition-colors"
                    style={{ borderLeftWidth: "3px", borderLeftColor: accentColor }}
                  >
                    <h3 className="font-bold text-sm mb-1">{tradition.name}</h3>
                    <p className="text-xs text-muted-foreground">{tradition.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="alumni">
              <div className="grid md:grid-cols-3 gap-3">
                {school.alumni.map((alum, index) => (
                  <div key={index} className="border p-3 rounded-lg hover:bg-muted/20 transition-colors">
                    <h4 className="font-bold text-sm" style={{ color: textColor }}>
                      {alum.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">{alum.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="sticky bottom-0 w-full bg-white dark:bg-gray-950 border-t p-3 flex justify-end">
          <DialogClose asChild>
            <Button size="sm">Close</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}