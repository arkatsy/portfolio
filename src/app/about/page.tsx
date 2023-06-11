import ArrowLink from "../components/ArrowLink"

export default function About() {
  return (
    <div className="mb-10 mt-8">
      <h1 className="mb-8 text-2xl font-bold tracking-wide">About me</h1>
      <div className="text-zinc-100 sm:text-lg">
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
          expand my knowledge and enhance my software building skills.
        </p>
        <br />
        <p>
          I am actively seeking a frontend developer job that will allow me to utilize my skills by
          building high-quality software and grow as a developer. If you&apos;re interested in
          working with me, feel free to contact me.
        </p>
      </div>
      <ArrowLink href="/projects">See some of my projects</ArrowLink>
    </div>
  )
}
