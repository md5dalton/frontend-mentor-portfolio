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
    <nav className="flex items-center flex-col gap-5 md:flex-row md:justify-between">
        <div>
            <Link className="text-md" href="/">majarampiti</Link>
        </div>
        <UList
            className="flex gap-6"
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