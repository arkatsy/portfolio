import Image from "next/image"
import ArrowLink from "../components/ArrowLink"
import NewTabLink from "../components/NewTabLink"
import CopyButton from "../components/CopyButtonText"
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid"

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-20">
      <div className="mt-8 flex flex-col items-center sm:mt-16 sm:flex-row sm:justify-center sm:gap-10">
        <ProfileImage />
        <p className="mt-8 max-w-xs text-lg leading-relaxed text-zinc-100 md:text-xl">
          Hey! I&apos;m{" "}
          <span className="whitespace-nowrap font-bold text-indigo-400 ">
            Argyris Katsigiannides
          </span>
          .
          <br />
          I&apos;m a developer from Greece.
          <ArrowLink href="/about">More about me</ArrowLink>
        </p>
      </div>
      <ul className="flex w-fit flex-col gap-4 text-left tracking-wide text-zinc-300">
        <li>
          <span className="font-semibold">Email: </span>
          <a className="hover:underline hover:underline-offset-4" href="mailto: arkatsy@gmail.com">
            arkatsy@gmail.com
          </a>
        </li>
        <li>
          <span className="font-semibold">Github: </span>
          <NewTabLink
            className="hover:underline hover:underline-offset-4"
            href="https://github.com/arkatsy"
          >
            github.com/arkatsy
          </NewTabLink>
        </li>
        <li>
          <span className="font-semibold">Linkedin: </span>
          <NewTabLink
            className="hover:underline hover:underline-offset-4"
            href="https://www.linkedin.com/in/arkatsy/"
          >
            linkedin.com/in/arkatsy
          </NewTabLink>
        </li>
        <li>
          <span className="font-semibold">Discord: </span>
          <CopyButton text="arkatsy#0658">arkatsy</CopyButton>
        </li>
        {/* <li>
          <span className="font-semibold">Resume: </span>
          <a href="/files/resume.pdf" className="text-zinc-400" download>
            resume.pdf
            <ArrowDownTrayIcon className="mb-[3px] ml-2 inline-block h-5 w-5 text-zinc-500" />
          </a>
        </li> */}
      </ul>
    </div>
  )
}

function ProfileImage() {
  return (
    <Image
      src="/images/profile.jpg"
      className="h-24 w-24 rounded-full shadow-md sm:h-40 sm:w-40"
      alt="Argyris Katsigiannides"
      priority={true}
      width={400}
      height={400}
      blurDataURL="/images/profile.jpg"
      draggable={false}
      style={{
        objectFit: "cover",
      }}
    />
  )
}
