"use client"
import { menuLinks } from "@/lib/constants"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"
import { LayoutGroup, motion } from "framer-motion"
import Link from "next/link"

export default function NavMenu() {
  const activePath = usePathname().split("/")[1]

  const isActive = (link: string) => link.toLowerCase() === activePath.toLowerCase()

  return (
    <LayoutGroup>
      <nav>
        <ul className="flex items-center gap-2 md:gap-4">
          {menuLinks.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={twMerge("text-md rounded-md font-medium transition-all")}
              >
                <span className="relative px-4 py-2 text-zinc-100">
                  {item.name}
                  {isActive(item.href.split("/")[1]) ? (
                    <motion.div
                      className="absolute inset-0 -z-10 rounded-md bg-zinc-800"
                      layoutId="sidebar"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  ) : null}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </LayoutGroup>
  )
}
