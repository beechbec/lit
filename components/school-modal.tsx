"use client"
import Image from "next/image"
import { Button } from "@/lit/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion";
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
      "The School for Good is where all the bright, pure-hearted heroes are trained. It's a place of elegance, kindness, and selflessness, where students learn to wield their beauty, charm, and courage to bring light into the world. It's a magical institution set in a breathtakingly beautiful campus filled with fairytale-like architecture, lush gardens, and sparkling lakes.",
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
          "Beautification: Taught by Professor Emma Anemone, focusing on enhancing inner and outer beauty.",
          "Princess Etiquette: Instructed by Pollux, covering royal manners and diplomacy.",
          "Swordplay and Weapons Training: Led by Professor Rumi Espada, teaching combat skills.",
          "Animal Communication: Taught by Princess Uma, focusing on understanding and interacting with animals.",
          "Chivalry and Grooming: Instructed by Professor Aleksander Lukas, emphasizing honor and personal care.",
          "Physical Education (P.E.): Conducted by Albemarle the Woodpecker, promoting physical fitness.",
          "History of Heroes: Taught by Professor Hort of Bloodbrook, exploring legendary heroes.",
          "Good Deeds: Led by Dean Clarissa Dovey, focusing on acts of kindness and charity.",
          "Surviving Fairy Tales: Conducted by Yuba the Gnome, teaching students how to navigate and survive in fairytale scenarios.",
        ],
      },
      {
        title: "Year Two",
        courses: [
          "Advanced Beautification: Further studies in enhancing beauty and grace.",
          "Advanced Swordplay: In-depth combat training.",
          "Animal Communication: Advanced techniques in understanding animals.",
          "Good Deeds: Continued focus on performing acts of kindness.",
          "Surviving Fairy Tales: Advanced survival skills in fairytale environments.",
        ],
      },
      {
        title: "Year Three",
        courses: [
          "Beautification/Grooming: Express for Success - Professor Emma Anemone",
          "Beautification/Grooming: Advanced Strength Training - Professor Aleksander Lukas",
          "Beautification/Grooming: Radiance Retreat - Professor Anemone and Professor Lukas",
          "Dance Workshop: Waltz and Rondel - Pollux",
          "Dance Workshop: Interpretive Movement - Pollux",
          "Animal Communication: Study Abroad - Princess Uma",
          "Animal Communication: Mogriff Grooming and Training - Princess Uma",
          "Good Deeds: Sidekick Training - Prof. Dean Clarissa Dovey",
          "Good Deeds: Lead the Way - Prof. Dean Clarissa Dovey",
          "History Seminar: History of War - Professor Hort of Bloodbrook",
          "Surviving Fairy Tales: Various Forest Group Leaders (mixed with Nevers)",
        ],
      },
      {
        title: "Year Four (quests)",
        courses: [
          "Journeying to Drupathi: Rescuing the imprisoned Princess of Maidenvale",
          "Civil Audit of Camelot: After reports of corruption amongst the advisory council",
          "Writing and Publishing a Biography: Of the Sader family (Good and Evil students with a focus on history)",
          "Opening a Trade Outpost: In Merlin's newly discovered kingdoms beyond the Shazabah desert",
        ],
      },
    ],
  },
  evil: {
    name: "School of Evil",
    tagline: "The School of Villains, Shadows, and Ambition",
    description:
      "The School for Evil is where dark forces are nurtured and villainous traits are honed. Students are trained to be cunning, manipulative, and ambitious, with a focus on using dark magic, charm, and wits to seize power and control. The school is set in a dark, ominous castle with towering spires and a dark enchanted forest surrounding it. It's a place for those who aren't afraid to do whatever it takes to get ahead.",
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
      "From shadows deep, we rise to reign,\nWith cunning minds and hearts of bane.\nThe darkness calls, we heed its cry,\nAs villains born to terrify.\nFor Evil's path is ours to tread,\nWhere legends dark are forged and bred.",
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
          "Evil 101 - Uglification: Taught by Professor Manley, focusing on the art of disguise and transformation.",
          "Evil 102 - Henchmen Training: Instructed by Castor, preparing students to serve as loyal subordinates.",
          "Evil 103 - Curses & Death Traps: Led by Dean Sophie, teaching the creation of curses and traps.",
          "Evil 104 - History of Villainy: Taught by Professor Hort, exploring the history of villains.",
          "Evil 105 - Special Talents: Instructed by Professor Sheeks, focusing on unique abilities.",
          "Evil 106 - Surviving Fairy Tales: Conducted by various Forest Group leaders, teaching survival tactics in fairytale environments.",
        ],
      },
      {
        title: "Year Two",
        courses: [
          "Evil 201 - Uglification: Disguises & Deformity: Advanced lessons in transformation techniques.",
          "Evil 202 - Henchmen: Field Training: Practical training for henchmen roles.",
          "Evil 203 - Advanced Curses & Death Traps: In-depth study of complex curses and traps.",
          "Evil 204 - History of Fairy Tales: Exploration of fairy tale origins and evolution.",
          "Evil 205 - Advanced Spell Casting: Mastery of spell casting techniques.",
          "Evil 206 - Surviving Fairy Tales: Continued survival training in fairytale scenarios.",
        ],
      },
      {
        title: "Year Three",
        courses: [
          "Evil 301 - Uglification Seminar: Mimicry: Study of mimicry and impersonation.",
          "Evil 302 - Uglification: Leader 'Looks': Creating leader-like appearances.",
          "Evil 303 - Uglification Seminar: Henchmen 'Looks': Designing henchmen appearances.",
          "Evil 304 - Independent Study: Sidekick Challenge Organizer: Organizing challenges for sidekicks.",
          "Evil 305 - Curses & Death Traps: Nemesis Dream Analysis: Analyzing dreams to understand nemeses.",
          "Evil 306 - Curses & Death Traps: Phantom Duels: Practicing duels with phantom adversaries.",
          "Evil 307 - History Seminar: History of War: Studying the history of warfare.",
          "Evil 308 - Ever Kingdoms: Pillaging & Pilfering: Learning the arts of plundering and stealing.",
          "Evil 309 - Advanced Spell Casting: Flying: Mastery of flying spells.",
          "Evil 310 - Surviving Fairy Tales: Final survival training in fairytale environments.",
        ],
      },
      {
        title: "Year Four",
        courses: [
          "Students are divided into groups to embark on quests in the Endless Woods, returning at the end of the year for their graduation ceremony.",
        ],
      },
    ],
  },
}

const foundersInfo = {
  title: "The Founders",
  description:
    "The school was founded by Rafal and Rhian, twin brothers with opposing views of morality. After a bitter divide, Rafal became the embodiment of Evil, while Rhian represented Good. Their conflict laid the foundation for the split into two schools. The Storian, a magical quill that writes fairy tales as they unfold, is said to be the true force that records and governs the fate of the students.",
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-950 border-b p-6 pb-4">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold flex items-center gap-2">
              <div className="w-6 h-6 rounded-full" style={{ backgroundColor: accentColor }} />
              {school.name}
            </DialogTitle>
            <DialogDescription className="text-base mt-2">{school.tagline}</DialogDescription>
          </DialogHeader>
        </div>

        <div className="relative h-64 w-full overflow-hidden">
          <Image src={school.imageSrc || "/placeholder.svg"} alt={school.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6 text-white max-w-3xl">
              <p className="text-lg">{school.description}</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="traditions">Traditions</TabsTrigger>
              <TabsTrigger value="alumni">Alumni</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-6 pt-4">
              <div className="bg-muted/50 rounded-lg p-4 border">
                <h3 className="font-bold text-lg mb-2">About the School for Good and Evil</h3>
                <p className="text-muted-foreground mb-4">
                  The School for Good and Evil is a magical institution where ordinary children are trained to become
                  the heroes and villains of future fairy tales. Hidden deep within the Endless Woods, the school is
                  divided into two towers.
                </p>
                <div className="bg-white dark:bg-gray-900 rounded-md p-4 border">
                  <h4 className="font-semibold mb-2">{foundersInfo.title}</h4>
                  <p>{foundersInfo.description}</p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">School Anthem</h3>
                <div
                  className="bg-muted p-6 rounded-md whitespace-pre-line border-l-4 text-center italic"
                  style={{ borderColor: accentColor }}>
                  <div>{school.anthem}</div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="courses" className="pt-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: accentColor }} />
                    Boys' Courses
                  </h3>
                  <ul className="space-y-2">
                    {school.courses.boys.map((course, index) => (
                      <li
                        key={index}
                        className="p-3 rounded-md border flex items-center gap-2 hover:bg-muted transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: accentColor }} />
                    Girls' Courses
                  </h3>
                  <ul className="space-y-2">
                    {school.courses.girls.map((course, index) => (
                      <li
                        key={index}
                        className="p-3 rounded-md border flex items-center gap-2 hover:bg-muted transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="pt-4">
              <Accordion>
                {school.curriculum.map((year, index) => (
                  <AccordionItem key={index}>
                    <AccordionTrigger>
                      <div className="hover:bg-muted/50 px-4 rounded-md font-bold" style={{ color: textColor }}>
                        {year.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 py-2">
                        {year.courses.map((course, courseIndex) => (
                          <li
                            key={courseIndex}
                            className="p-3 rounded-md bg-muted/30 flex items-start gap-2 hover:bg-muted transition-colors"
                          >
                            <div
                              className="w-2 h-2 mt-1.5 rounded-full flex-shrink-0"
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

            <TabsContent value="traditions" className="pt-4">
              <div className="grid gap-4">
                {school.traditions.map((tradition, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    style={{ borderLeftWidth: "4px", borderLeftColor: accentColor }}
                  >
                    <h3 className="font-bold text-lg mb-1">{tradition.name}</h3>
                    <p className="text-muted-foreground">{tradition.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="alumni" className="pt-4">
              <div className="grid md:grid-cols-3 gap-4">
                {school.alumni.map((alum, index) => (
                  <div key={index} className="border p-4 rounded-lg hover:bg-muted/50 transition-colors flex flex-col">
                    <h4 className="font-bold text-lg" style={{ color: textColor }}>
                      {alum.name}
                    </h4>
                    <p className="text-muted-foreground flex-grow">{alum.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="sticky bottom-0 w-full bg-white dark:bg-gray-950 border-t p-4 flex justify-end">
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}