import Link from "next/link"

export default function NewTabLink({
  children,
  ...props
}: {
  children: React.ReactNode
  [key: string]: any
}) {
  return (
    <Link href={props.href} {...props} rel="noopener noreferrer" target="_blank">
      {children}
    </Link>
  )
}
