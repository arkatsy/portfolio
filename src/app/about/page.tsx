import { ArrowLongRightIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

export default function About() {
  return (
    <div className="mb-10 mt-8">
      <h1 className="mb-8 text-xl font-bold tracking-wide">About me</h1>
      <div className="sm:text-lg">
        <p>
          Hello, my name is Argyris and I&apos;ve been a self-taught developer for the past three
          years. I&apos;m specializing in web development with Typescript, React and Next.js.
        </p>
        <br />
        <p>
          My programming journey took a serious turn in 2020. Although I had prior experience with
          computers since I was using linux for a couple of years before that, I never considered
          making a career out of it seriously.
        </p>
        <br />
        <p>
          Throughout these three years, I&apos;ve gained valuable experience working with a wide
          range of technologies and tools. Among my favorites and most frequently utilized are
          Typescript, React, Next.js, TailwindCSS, Tanstack Query, and PostgreSQL.
        </p>
        <br />
        <p>
          Although my programming experience goes beyond web development, I have a strong passion
          for frontend development. However, I am not limited to that and continually strive to
          expand my knowledge and enhance my skills.
        </p>
        <br />
        <p>
          I am actively seeking a job opportunity that will allow me to launch my career as a
          frontend developer.
        </p>
      </div>
      <Link
        href="/projects"
        className="mt-12 block w-fit text-xl hover:text-indigo-400 hover:underline"
      >
        <ArrowLongRightIcon className="mr-1 inline-block h-6 w-8 fill-zinc-300 pb-[1px]" />
        See some of my projects
      </Link>
    </div>
  )
}
