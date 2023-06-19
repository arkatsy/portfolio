import ArrowLink from "../components/ArrowLink"

export default function About() {
  return (
    <div className="mb-10 mt-8">
      <h1 className="mb-8 text-2xl font-bold tracking-wide">About me</h1>
      <div className="text-zinc-100 sm:text-lg">
        <p>
          Hello, my name is Argyris and I&apos;ve been a web developer for the past three years.
          I&apos;m specializing in Typescript, React and Next.js.
        </p>
        <br />
        <p>
          Although I consider myself a frontend developer, I always find myself working with backend
          technologies as well. The backend technologies I usually prefer to use are Node.js and
          PostgreSQL.
        </p>
        <br />
        <p>
          Currently I&apos;m doing Freelance work and looking for a frontend remote job.
          <br />
          Feel free to contact me if you&apos;re interested in working with me.
        </p>
      </div>
      <ArrowLink href="/projects">See some of my projects</ArrowLink>
    </div>
  )
}
