import { LinkIcon } from "@heroicons/react/24/solid"
import NewTabLink from "./NewTabLink"

type ProjectProps = {
  title: string
  description: string
  link: string
  liveLink?: string
}

export default function Project({ title, description, link, liveLink }: ProjectProps) {
  return (
    <div className="flex flex-col gap-2">
      <NewTabLink href={link} className="group w-fit text-lg font-semibold tracking-wide">
        {title}
        <LinkIcon className="ml-2 hidden h-4 w-4 text-gray-500 group-hover:inline-block" />
      </NewTabLink>
      <p className="mb-2 text-zinc-300">{description}</p>
      <div className="flex flex-col gap-2">
        <div className="text-base text-zinc-300">
          Repo Link:{" "}
          <NewTabLink className="text-indigo-500 underline underline-offset-4" href={link}>
            {link}
          </NewTabLink>
        </div>
        {liveLink && (
          <div className="text-base text-zinc-300">
            Live Website:{" "}
            <NewTabLink className="text-indigo-500 underline underline-offset-4" href={liveLink}>
              {link}
            </NewTabLink>
          </div>
        )}
      </div>
    </div>
  )
}
