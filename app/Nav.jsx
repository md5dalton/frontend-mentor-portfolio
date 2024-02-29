import Link from "next/link"
import Image from "next/image"
import UList from "@/components/UList"

const links = [
    {name: "GitHub", link: "https://github.com/md5dalton"},
    {name: "Frontend Mentor", link: "https://www.frontendmentor.io/profile/md5dalton"},
    {name: "Twitter", link: "https://twitter.com/md5dalton"},
    {name: "LinkedIn", link: "#"},
]

export default () => (
    <nav className="text-center grid gap-5 md:gap-0 md:items-center md:justify-between md:flex">
        <Link className="text-md my-5 md:my-8" href="/">majarampiti</Link>
        <UList
            className="flex items-center gap-6 justify-center md:gap-8 md:px-4"
            items={links}
            itemHandler={({ name, link }) => (
                <Link href={link} target="_blank">
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