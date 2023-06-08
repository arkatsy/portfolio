"use client"
import { Transition, Popover } from "@headlessui/react"
import Link from "next/link"
import { Fragment, useState } from "react"
import { menuLinks } from "@/lib/constants"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"

export default function NavMenuMobile() {
  const [_, setIsOpen] = useState(false)
  const activePath = usePathname().split("/")[1]

  const isActive = (link: string) => link.toLowerCase() === activePath.toLowerCase()

  return (
    <Popover className="relative z-50">
      {({ open, close }) => (
        <>
          <Popover.Button
            onClick={() => setIsOpen((pr) => !pr)}
            className="relative top-[3px] focus-visible:outline-none"
          >
            <MenuSvg isOpen={open} />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-45"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 scale-150"
            leaveTo="opacity-0 scale-45"
          >
            <Popover.Panel className="fixed bottom-0 left-0 right-0 top-16 h-full w-screen bg-black">
              <ul className="mt-12 overflow-hidden">
                {menuLinks.map((item) => (
                  <li key={item.name} className="mt-4 flex">
                    <Link className="group w-screen py-4 pl-12" href={item.href} onClick={close}>
                      <span
                        className={twMerge(
                          "text-2xl text-zinc-300 group-hover:border-b-2 group-hover:text-zinc-100",
                          isActive(item.href.split("/")[1]) && "font-[500] text-white"
                        )}
                      >
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

type MenuSvgProps = {
  isOpen: boolean
  width?: number
  height?: number
  strokeWidth?: number
  color?: string
}

const MenuSvg = ({
  isOpen = false,
  width = 32,
  height = 22,
  strokeWidth = 1,
  color = "#fff",
}: MenuSvgProps) => {
  const variant = isOpen ? "opened" : "closed"

  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  }

  const middle = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  }

  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  }

  const lineProps = {
    stroke: color,
    strokeWidth: strokeWidth as number,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
  }

  const unitHeight = 4
  const unitWidth = (unitHeight * (width as number)) / (height as number)

  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
    >
      <motion.line x1="0" x2={unitWidth} y1="0" y2="0" variants={top} {...lineProps} />
      <motion.line x1="0" x2={unitWidth} y1="2" y2="2" variants={middle} {...lineProps} />
      <motion.line x1="0" x2={unitWidth} y1="4" y2="4" variants={bottom} {...lineProps} />
    </motion.svg>
  )
}
