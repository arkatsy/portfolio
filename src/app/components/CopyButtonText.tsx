"use client"
import { ClipboardIcon } from "@heroicons/react/24/outline"
import { toast } from "react-hot-toast"
import { twMerge } from "tailwind-merge"

type CopyButtonProps = {
  className?: string
  text: string
  onCopy?: () => void
  [key: string]: any
  copiedToast?: () => string
}

const copiedToast = () => toast.success("Copied to clipboard!")

export default function CopyButtonText({
  className,
  text,
  onCopy,
  copiedToast,
  ...props
}: CopyButtonProps) {
  function copyDiscordId(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (typeof onCopy === "function") onCopy()
    else navigator.clipboard.writeText(e.currentTarget.value)

    if (typeof copiedToast === "function") toast.success(copiedToast())
    else toast.success("Copied to clipboard!")
  }

  return (
    <button
      className={twMerge("text-zinc-300", className)}
      value={text}
      onClick={copyDiscordId}
      {...props}
    >
      {text}
      <ClipboardIcon className="mb-[3px] ml-2 inline-block h-5 w-5 text-zinc-500" />
    </button>
  )
}
