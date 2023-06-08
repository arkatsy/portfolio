"use client"
import { Transition, Dialog } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { Fragment, useState } from "react"
import { menuLinks } from "@/lib/utils"

export default function DropMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const modal = {
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }

  return (
    <>
      <button onClick={modal.open} className="text-zinc-50">
        <Bars3Icon className="h-8 w-8" />
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={modal.close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-0"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-0"
            >
              <Dialog.Panel className="h-full basis-full bg-black">
                <div className="flex h-16 items-center justify-end px-4 md:px-8">
                  <button onClick={modal.close}>
                    <XMarkIcon className="h-8 w-8 text-zinc-50" />
                  </button>
                </div>

                <ul>
                  {menuLinks.map((item) => (
                    <li key={item.name} className="mt-4 flex">
                      <Link
                        className="group my-4 w-screen pl-12"
                        href={item.href}
                        onClick={modal.close}
                      >
                        <span className="text-3xl font-semibold group-hover:border-b-2">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
