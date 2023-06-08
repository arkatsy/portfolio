import Image from "next/image"

export default function Home() {
  return (
    <div className="mt-8 flex flex-col items-center">
      <ProfileImage />
      <p className="mt-8 max-w-xs text-lg leading-relaxed">
        Hey! I&apos;m{" "}
        <span className="whitespace-nowrap font-bold text-indigo-400">Argyris Katsigiannides</span>.
        <br />
        I&apos;m a developer from Greece.
      </p>
    </div>
  )
}

function ProfileImage() {
  return (
    <Image
      src="/images/profile.png"
      className="h-24 w-24 rounded-full"
      alt="Argyris Katsigiannides"
      priority={true}
      width={100}
      height={100}
      style={{
        objectFit: "cover",
      }}
    />
  )
}
