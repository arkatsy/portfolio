import Image from "next/image"
import ArrowLink from "../components/ArrowLink"

export default function Home() {
  return (
    <>
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
