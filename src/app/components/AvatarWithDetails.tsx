"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function AvatarWithDetails() {
  const pathname = usePathname()
  const isHome = pathname === "/home"

  return (
    <Link href="/home" className="flex items-center gap-4 text-lg tracking-tight">
      <Avatar />
      <div className="flex">
        <span>Argyris</span>
        <span className="hidden md:inline">&nbsp;Katsigiannides</span>
      </div>
    </Link>
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
        draggable={false}
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  )
}
