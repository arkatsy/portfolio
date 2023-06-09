import Image from "next/image"
import { ArrowLongRightIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="mt-8 flex flex-col items-center sm:mt-16 sm:flex-row sm:justify-center sm:gap-10">
        <ProfileImage />
        <p className="mt-8 max-w-xs text-lg leading-relaxed md:text-xl">
          Hey! I&apos;m{" "}
          <span className="whitespace-nowrap font-bold text-indigo-400 ">
            Argyris Katsigiannides
          </span>
          .
          <br />
          I&apos;m a developer from Greece.
          <Link
            href="/about"
            className="mt-12 block w-fit text-xl hover:text-indigo-400 hover:underline"
          >
            <ArrowLongRightIcon className="mr-1 inline-block h-6 w-8 fill-zinc-300 pb-[1px]" />
            More about me
          </Link>
        </p>
      </div>
    </>
  )
}

function ProfileImage() {
  return (
    <Image
      src="/images/profile.png"
      className="h-24 w-24 rounded-full shadow-md sm:h-40 sm:w-40"
      alt="Argyris Katsigiannides"
      priority={true}
      width={400}
      height={400}
      blurDataURL="/images/profile.png"
      draggable={false}
      style={{
        objectFit: "cover",
      }}
    />
  )
}
