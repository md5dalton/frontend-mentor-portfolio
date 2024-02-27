import Link from "next/link"
import UList from "./UList"
import Image from "next/image"

const links = [
    {name: "GitHub", link: "https://github.com/md5dalton"},
    {name: "Frontend Mentor", link: "https://www.frontendmentor.io/profile/md5dalton"},
    {name: "Twitter", link: "https://twitter.com/md5dalton"},
    {name: "LinkedIn", link: "#"},
]

export default () => (
    <header
        style={{
            backgroundImage: "url(/images/image-profile-mobile.webp), url(/icons/pattern-rings.svg), url(/icons/pattern-circle.svg)",
            backgroundPosition: "center, -265px center, right -65px bottom",
            // backgroundPositionX: "50%, -265px, 85vw",
            // backgroundPositionY: "50%, 50%, bottom",
            backgroundSize: "contain, auto, auto"
        }}
        className="relative min-h-[380px] bg-no-repeat text-center"
    >
        <p className="text-md my-5">
            <Link href="/">majarampiti</Link>
        </p>
        <UList
            className="flex items-center gap-6 justify-center"
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
    </header>
)