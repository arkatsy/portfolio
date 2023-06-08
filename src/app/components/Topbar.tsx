// import Avatar from "./Profile"
import DropMenu from "./DropMenu"
import NavMenu from "./NavMenu"
import Link from "next/link"
import Image from "next/image"

export default function Topbar() {
  return (
    <div className="flex items-center justify-between">
      <Link href="/home" className="flex items-center gap-4 text-lg tracking-tight">
        {/* <Avatar /> */}
        <Avatar />
        <div className="flex">
          <span>Argyris</span>
          <span className="hidden lg:inline">&nbsp;Katsigiannides</span>
        </div>
      </Link>
      <div className="block sm:hidden">
        <DropMenu />
      </div>
      <div className="hidden sm:block">
        <NavMenu />
      </div>
    </div>
  )
}

function Avatar() {
  return (
    <div className="relative h-10 w-10">
      <Image
        src="/images/profile.png"
        className="rounded-full"
        alt="Argyris Katsigiannides"
        priority={false}
        fill={true}
        sizes="100px"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  )
}
