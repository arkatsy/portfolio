import Profile from "../components/Profile"

export default function Home() {
  return (
    <div className="mt-8 flex flex-col items-center">
      <Profile className="h-24 w-24" />
      <p className="mt-8 max-w-xs text-lg leading-relaxed">
        Hey! I&apos;m{" "}
        <span className="whitespace-nowrap font-bold text-indigo-400">Argyris Katsigiannides</span>.
        <br />
        I&apos;m a developer from Greece.
      </p>
    </div>
  )
}
