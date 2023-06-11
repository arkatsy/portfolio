import { projectsList } from "@/lib/constants"
import { Fragment } from "react"
import Project from "../components/Project"
import ArrowLink from "../components/ArrowLink"

export default function ProjectsPage() {
  return (
    <div className="my-8">
      <h1 className="mb-8 text-2xl font-bold tracking-wide">Projects</h1>
      <div className="flex flex-col gap-6">
        {projectsList.map((project, idx) => (
          <Fragment key={idx}>
            <Project {...project} />
            {idx !== projectsList.length - 1 && <Divider />}
          </Fragment>
        ))}
      </div>
      <ArrowLink href="/home">Go back to home</ArrowLink>
    </div>
  )
}

function Divider() {
  return <div className="h-px bg-zinc-700" />
}
