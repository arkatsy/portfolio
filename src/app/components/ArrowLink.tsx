import { ArrowLongRightIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

type ArrowLinkProps = {
  href: string
  children: React.ReactNode
}

export default function ArrowLink({ href, children }: ArrowLinkProps) {
  return (
    <Link href={href} className="group mt-12 block w-fit text-xl hover:text-indigo-500">
      <ArrowLongRightIcon className="mr-1 inline-block h-6 w-8 fill-zinc-300 pb-[1px]" />
      <span className="group-hover:underline group-hover:underline-offset-4">{children}</span>
    </Link>
  )
}
