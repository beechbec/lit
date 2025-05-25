"use client"

import Image from "next/image"
import { Button } from "@/components/button"
import Navbar from "@/components/navbar"
import { useRef, useState } from "react"

// Book data
const books = [
  {
    id: 1,
    title: "Rise of the School for Good and Evil",
    cover: "/book1.png",
    author: "Soman Chainani",
    quote: "Every story needs a beginning.",
    description: [
      "The battle between Good and Evil begins. Two brothers. One Good. One Evil. And a legend that would change everything.",
      "In this prequel to the epic School for Good and Evil series, twin brothers Rhian and Rafal are ripped from their humble home and forced to fight for their survival at the School for Good and Evil.",
      "The seeds of rivalry are planted as the brothers discover their true nature—and the terrible truth about their lineage.",
    ],
    published: "May 31, 2022",
    pages: "400",
    genre: "Fantasy, Young Adult",
    isbn: "978-0063267473",
    themes: "Friendship & Identity",
  },
  {
    id: 2,
    title: "The School for Good and Evil",
    cover: "/book2.jpg",
    author: "Soman Chainani",
    quote: "The only way out of a fairy tale is to live through it.",
    description: [
      "In the village of Gavaldon, two misfits and best friends, Sophie and Agatha, are about to discover where all the lost children go: the fabled School for Good and Evil, where ordinary boys and girls are trained to be fairy tale heroes and villains.",
      "Sophie, with her glass slippers and pink dresses, thinks she'll earn top marks at the School for Good. Meanwhile, Agatha, with her shapeless black frocks and wicked black cat, seems a natural fit for the villains in the School for Evil.",
      "But when the two girls are swept into the Endless Woods, they find their fortunes are reversed. What if the mistake is actually the first clue to discovering who Sophie and Agatha really are?",
    ],
    published: "May 14, 2013",
    pages: "488",
    genre: "Fantasy, Young Adult",
    isbn: "978-0062104892",
    themes: "Friendship & Identity",
  },
  {
    id: 3,
    title: "A World Without Princes",
    cover: "/book3.png",
    author: "Soman Chainani",
    quote: "The difference between a villain and a hero isn't their actions. It's their reasons.",
    description: [
      "After saving themselves and their fellow students from a life pitched against one another, Sophie and Agatha return home to Gavaldon. But when the girls head back to the School for Good and Evil, they find a very different landscape.",
      "Princes and princesses, wicked witches and fairy godmothers are no longer enemies. New bonds are forming; old bonds are being broken. Girls are now fighting girls, and boys are fighting boys.",
      "It's all turned upside down. Will the girls find their way to being friends again? Can they find their true Ever Afters?",
    ],
    published: "April 15, 2014",
    pages: "433",
    genre: "Fantasy, Young Adult",
    isbn: "978-0062104939",
    themes: "Good vs Evil",
  },
  {
    id: 4,
    title: "The Last Ever After",
    cover: "/book4.png",
    author: "Soman Chainani",
    quote: "True love isn't easy—but it must be fought for.",
    description: [
      "In the stunning conclusion to the New York Times bestselling School for Good and Evil trilogy, everything old is new again, as Sophie and Agatha fight the past as well as the present to find the perfect end to their fairy tale.",
      "As A World Without Princes closed, the end was written and former best friends Sophie and Agatha went their separate ways. Agatha was whisked back to Gavaldon with Tedros and Sophie stayed behind with the beautiful young School Master.",
      "But as they settle into their new lives, their story begs to be re-written, and this time, theirs isn't the only one. With the girls apart, Evil has taken over and the forces of Good are in deathly peril.",
    ],
    published: "July 21, 2015",
    pages: "672",
    genre: "Fantasy, Young Adult",
    isbn: "978-0062104991",
    themes: "Beauty vs Inner Strength",
  },
  {
    id: 5,
    title: "Quests for Glory",
    cover: "/book5.jpg",
    author: "Soman Chainani",
    quote: "Real heroes don't need to be told they're heroes.",
    description: [
      "With every end comes a new beginning in the fourth installment of Soman Chainani's New York Times bestselling School for Good and Evil series, Quests for Glory.",
      "Join Sophie, Agatha, Tedros, and the other students as they begin a new era in the Endless Woods—The Camelot Years—where Evers and Nevers alike must move beyond the bounds of school and into the biggest, boldest adventures of their lives.",
      "The students at the School for Good and Evil thought they had found their final Ever After when they vanquished the malevolent School Master. Now, on their required fourth-year quests, the students face obstacles both dangerous and unpredictable, and the stakes are high.",
    ],
    published: "September 19, 2017",
    pages: "576",
    genre: "Fantasy, Young Adult",
    isbn: "978-0062658470",
    themes: "Friendship & Identity",
  },
  {
    id: 6,
    title: "A Crystal of Time",
    cover: "/book6.webp",
    author: "Soman Chainani",
    quote: "Sometimes the truth is the greatest fairy tale of all.",
    description: [
      "In this fifth installment in Soman Chainani's New York Times bestselling School for Good and Evil fantasy series, the past will come back to haunt the present.",
      "A false king has seized Camelot's throne, sentenced Tedros to death, and forced Sophie to be his queen. Only Agatha manages to escape.",
      "Now Agatha and the students at the School for Good and Evil must find a way to restore Tedros to his rightful place on the throne and save Camelot before all of their fairy tales come to a lethal end.",
    ],
    published: "March 5, 2019",
    pages: "608",
    genre: "Fantasy, Young Adult",
    isbn: "978-0062695178",
    themes: "Good vs Evil",
  },
  {
    id: 7,
    title: "One True King",
    cover: "/book7.jpg",
    author: "Soman Chainani",
    quote: "A true king doesn't need a crown to be king.",
    description: [
      "In this sixth and final installment in Soman Chainani's New York Times bestselling epic fantasy fairy tale series, the School for Good and Evil, Camelot's crown—and the fate of the Endless Woods—are up for grabs.",
      "Beyond Good and Evil. Beyond Ever Afters. The tale of Sophie and Agatha comes to a dramatic conclusion. Prepare yourself for the End of Ends.",
      "The first test was passed. Excalibur pulled from the stone. A new king named. But two claim the crown. The sword returns to the stone, for only one is the true king.",
    ],
    published: "June 2, 2020",
    pages: "624",
    genre: "Fantasy, Young Adult",
    isbn: "978-0062695215",
    themes: "Beauty vs Inner Strength",
  },
  {
    id: 8,
    title: "Fall of the School for Good and Evil",
    cover: "/book8.png",
    author: "Soman Chainani",
    quote: "Every ending is a new beginning.",
    description: [
      "Return to the School for Good and Evil with a new trilogy that takes place hundreds of years after the events of One True King.",
      "The School for Good and Evil is in ruins. Evil is in charge. And the villains are changing the Rules. Forever.",
      "When Una Fairchild stumbles upon a mysterious book that sucks her into the shattered world of the School for Good and Evil, she discovers the fairy tale school is dying—and evil is winning.",
    ],
    published: "May 2, 2023",
    pages: "432",
    genre: "Fantasy, Young Adult",
    isbn: "978-0063267503",
    themes: "Good vs Evil",
  },
   {
    id: 9,
    title: "The Ever Never Handbook",
    cover: "/book9.jpg",
    author: "Soman Chainani",
    quote: "Welcome back to the School for Good and Evil.",
    description: [
      "Soman Chainani’s bestselling series *The School for Good and Evil* returns with *The Ever Never Handbook*!",
      "Explore the magical world with gorgeous full-color illustrations, quizzes, character profiles, and more. Dive deeper into the world of Good and Evil through the eyes of your favorite characters like Sophie, Agatha, and Tedros, as you uncover the secrets of the schools.",
      "Learn the inner workings of the Schools for Good and Evil, and discover what makes these characters who they are—each destined for a unique journey."
    ],
    published: "July 12, 2016",
    pages: "304",
    genre: "Fantasy, Handbook",
    isbn: "978-0062423051",
    themes: "Friendship & Identity",
},
]

export default function LegendUnfolds() {
  const bookSectionRef = useRef<HTMLDivElement>(null)
  const [selectedBook, setSelectedBook] = useState(books[0])

  const handleScrollToBook = () => {
    bookSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSelectBook = (book: (typeof books)[0]) => {
    setSelectedBook(book)
    // Scroll to book section if not already there
    bookSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handlePrevBook = () => {
    const currentIndex = books.findIndex((book) => book.id === selectedBook.id)
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : books.length - 1
    handleSelectBook(books[prevIndex])
  }

  const handleNextBook = () => {
    const currentIndex = books.findIndex((book) => book.id === selectedBook.id)
    const nextIndex = currentIndex < books.length - 1 ? currentIndex + 1 : 0
    handleSelectBook(books[nextIndex])
  }

  // Get theme icon based on theme name
  const getThemeIcon = (theme: string) => {
    switch (theme) {
      case "Friendship & Identity":
        return "/friendship-identity.png"
      case "Good vs Evil":
        return "/good-vs-evil.png"
      case "Beauty vs Inner Strength":
        return "/beauty-vs-inner.png"
      default:
        return "/friendship-identity.png"
    }
  }

  return (
    <div
      className="min-h-screen text-white pt-[64px]"
      style={{
        backgroundImage: "url('/legend-unfolds.png')",
        backgroundSize: "100%",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-6 left-0 right-0 z-20">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center text-white py-48 px-4 min-h-[70vh]">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10">
          <p className="uppercase tracking-wider mb-2 text-sm">"{selectedBook.quote}"</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">What if your destiny wasn't chosen by you?</h1>
          <Button style={{ backgroundColor: "#253544", color: "white" }} onClick={handleScrollToBook}>
            Turn the Page
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-cream text-slate-900">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center transition-transform duration-300 hover:translate-y-[-5px]">
            <div className="flex justify-center mb-4">
              <Image src="/friendship-identity.png" alt="Friendship & Identity" width={60} height={60} />
            </div>
            <h3 className="font-bold mb-2">Friendship & Identity</h3>
            <p className="text-sm text-gray-600">
              Explore the complex bonds of friendship and the journey to discover one's true self
            </p>
          </div>

          <div className="text-center transition-transform duration-300 hover:translate-y-[-5px]">
            <div className="flex justify-center mb-4">
              <Image src="/good-vs-evil.png" alt="Good vs Evil" width={60} height={60} />
            </div>
            <h3 className="font-bold mb-2">Good vs Evil</h3>
            <p className="text-sm text-gray-600">
              Challenge traditional notions of heroes and villains in a world where nothing is black and white
            </p>
          </div>

          <div className="text-center transition-transform duration-300 hover:translate-y-[-5px]">
            <div className="flex justify-center mb-4">
              <Image src="/beauty-vs-inner.png" alt="Beauty vs Inner Strength" width={60} height={60} />
            </div>
            <h3 className="font-bold mb-2">Beauty vs Inner Strength</h3>
            <p className="text-sm text-gray-600">
              Discover that true beauty comes from within and appearances can be deceiving
            </p>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section ref={bookSectionRef} className="py-12 px-4 bg-cream text-slate-900">
        <div className="container grid md:grid-cols-3 gap-8">
          <div className="relative transition-transform duration-300 hover:scale-[1.02] group">
            <Image
              src={selectedBook.cover || "/placeholder.svg"}
              alt={selectedBook.title}
              width={300}
              height={450}
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute top-4 right-4 bg-amber-700 text-white text-xs py-1 px-2 rounded">
              Book {selectedBook.id} of 9
            </div>

            {/* Navigation buttons in the middle of the image */}
            <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                className="bg-amber-700 hover:bg-amber-800 text-white rounded-full p-3 shadow-lg transform transition-transform hover:scale-110"
                onClick={handlePrevBook}
                aria-label="Previous book"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-left"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                className="bg-amber-700 hover:bg-amber-800 text-white rounded-full p-3 shadow-lg transform transition-transform hover:scale-110"
                onClick={handleNextBook}
                aria-label="Next book"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-2">{selectedBook.title}</h2>
            <p className="text-gray-600 mb-6">by {selectedBook.author}</p>

            <p className="text-sm text-gray-600 mb-4 italic">"{selectedBook.quote}"</p>

            <div className="space-y-4 mb-8">
              {selectedBook.description.map((paragraph, index) => (
                <p key={index} className="text-sm text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <h3 className="font-bold mb-2">Book Details</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <p className="text-gray-600">Published:</p>
                  <p>{selectedBook.published}</p>
                  <p className="text-gray-600">Pages:</p>
                  <p>{selectedBook.pages}</p>
                  <p className="text-gray-600">Genre:</p>
                  <p>{selectedBook.genre}</p>
                  <p className="text-gray-600">ISBN:</p>
                  <p>{selectedBook.isbn}</p>
                  <p className="text-gray-600">Theme:</p>
                  <div className="flex items-center gap-2">
                    <Image
                      src={getThemeIcon(selectedBook.themes) || "/placeholder.svg"}
                      alt={selectedBook.themes}
                      width={20}
                      height={20}
                    />
                    <p>{selectedBook.themes}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-2">All the books in the series</h3>
                <div className="grid grid-cols-3 gap-2">
                  {books.map((book) => (
                    <div
                      key={book.id}
                      className={`relative aspect-[2/3] transition-transform duration-300 hover:scale-105 cursor-pointer ${
                        selectedBook.id === book.id ? "ring-2 ring-amber-700" : ""
                      }`}
                      onClick={() => handleSelectBook(book)}
                    >
                      <Image
                        src={book.cover || "/placeholder.svg"}
                        alt={book.title}
                        fill
                        className="object-cover rounded"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-[10px] p-1 text-center">
                        Book {book.id}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
