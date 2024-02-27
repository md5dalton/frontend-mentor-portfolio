import { Space_Grotesk } from "next/font/google"
import "./globals.css"

const font = Space_Grotesk({ subsets: ["latin"] })

export const metadata = {
  title: "Majara Mpiti",
  description: "Frontend developer",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-very-dark-grey text-white text-base">
      <body className={font.className}>
        <main>
          {children}
        </main>
        </body>
    </html>
  )
}
