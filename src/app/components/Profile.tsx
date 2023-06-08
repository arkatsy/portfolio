import Image from "next/image"
import { twMerge } from "tailwind-merge"

type ProfileProps = {
  className?: string
  priority?: boolean
}

export default function Profile({ className, priority }: ProfileProps) {
  return (
    <div className={twMerge("h-10 w-10", className, "-z-1 relative overflow-hidden")}>
      <Image
        src="/images/profile.png"
        className="rounded-full"
        alt="Argyris Katsigiannides"
        priority={priority}
        fill={true}
        sizes="100px"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  )
}
