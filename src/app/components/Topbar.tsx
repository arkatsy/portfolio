import Avatar from "./Profile"
import DropMenu from "./DropMenu"
import NavMenu from "./NavMenu"
import Link from "next/link"

export default function Topbar() {
  return (
    <div className="flex items-center justify-between">
      <Link href="/home" className="flex items-center gap-4 text-lg tracking-tight">
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
