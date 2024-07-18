import Link from "next/link"
import Image from "next/image"
import UList from "@/components/UList"
import { frontendmentor, github, linkedin, twitter } from "@/icons/socials"
import SVG from "@/components/SVG"

const links = [
    {name: "GitHub", link: "https://github.com/md5dalton", icon: github },
    {name: "Frontend Mentor", link: "https://www.frontendmentor.io/profile/md5dalton", icon: frontendmentor },
    {name: "Twitter", link: "https://twitter.com/md5dalton", icon: twitter },
    {name: "LinkedIn", link: "#", icon: linkedin },
]

export default () => (
    <nav className="flex items-center flex-col gap-5 md:flex-row md:justify-between">
        <div>
            <Link className="text-h-m" href="/">mjrmpiti</Link>
        </div>
        <UList
            className="flex gap-6 md:gap-8"
            items={links}
            itemHandler={({ name, link, icon }) => (
                <Link href={link} target="_blank">
                    {/* <SVG className="h-5 w-5" d={icon} /> */}
                    <Image
                        alt={name}
                        src={`/icons/icon-${name.toLowerCase().replaceAll(" ", "-")}.svg`}
                        height={20}
                        width={20}
                    />
                </Link>
            )}
        />
    </nav>
)