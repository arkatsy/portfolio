import "./globals.css"
import { Space_Grotesk } from "next/font/google"
import Topbar from "./components/Topbar"

const inter = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata = {
  title: "Argyris Katsigiannides",
  description: "Software Developer from Greece",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className="sticky top-0 flex h-16 items-center justify-center
        border-b border-[#333333] bg-black"
        >
          <header className="w-full max-w-4xl px-4 md:px-8">
            <Topbar />
          </header>
        </div>
        <div className="flex justify-center">
          <main className="w-full max-w-4xl px-4 md:px-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
