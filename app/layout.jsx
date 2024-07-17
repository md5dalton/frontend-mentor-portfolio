import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import Header from "./Header"
import Footer from "./Footer"
import Image from "next/image"
import ProfilePicture from "@/components/ProfilePicture"

const font = Space_Grotesk({ subsets: ["latin"] })

export const metadata = {
  title: "Majara Mpiti",
  description: "Frontend developer",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-very-dark-grey">
      <body className={`${font.className} text-white text-body`}>
        <Header />
        {children}
        <Footer />
        <ProfilePicture />
      </body>
    </html>
  )
}
