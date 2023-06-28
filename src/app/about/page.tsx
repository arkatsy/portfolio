import ArrowLink from "../components/ArrowLink"

export default function About() {
  return (
    <div className="mb-10 mt-8">
      <h1 className="mb-8 text-2xl font-bold tracking-wide">About me</h1>
      <div className="text-zinc-100 sm:text-lg">
        <p>
          Hello, my name is Argyris and I&apos;ve been a software developer for the past three
          years. I&apos;m specializing in Typescript, React and anything JS.
        </p>
        <br />
        <p>
          More specifically about the technologies I use. <br />
          Generally for web development I always go with Typescript and React. Even though I&apos;m
          always open to try new things, I draw the line in Typescript. The convenience of
          Typescript is just too good to let go.
          <br />
          <br />
          On the backend side of things now, I don&apos;t have a strong opinion. My usual preferred
          stack is either Node.js with PostgreSQL and an ORM like Prisma but I like to experiment
          with new technologies and as always choose the right tool for the job.
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
