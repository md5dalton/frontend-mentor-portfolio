import ContactMe from "@/components/ContactMe"
import UList from "@/components/UList"
import Image from "next/image"
import Link from "next/link"

const projects = [
    {
        name: "design portfolio",
        thumbnails: {
            small: "/thumbs/thumbnail-project-1-small.webp", 
            large: "/thumbs/thumbnail-project-1-large.webp"
        },
        links: {
            code: "#",
            site: "#"
        },
        tech: [
            "html", "css"
        ]
    },
]

export default () => (
    <section className="page-w">
        <div className="flex items-center justify-between pb-10">
            <h2 className="text-[40px] leading-[40px] font-bold">Projects</h2>
            <ContactMe />
        </div>
        <UList
            className=""
            items={projects}
            itemHandler={({ name, thumbnails: { small, large }, links: { code, site }, tech }) => (
                <div className="grid gap-5 uppercase">
                    <Image
                        alt={name}
                        src={small}
                        width={800}
                        height={800}
                    />
                    <div>
                        <h2 className="text-md font-bold">{name}</h2>
                        <UList
                            className="flex gap-5 text-light-grey"
                            items={tech}
                            itemHandler={item => <p>{item}</p>}
                        />
                    </div>
                    <div className="flex gap-8">
                        <Link className="btn" href={site} target="_blank">view project</Link>
                        <Link className="btn" href={code} target="_blank">view code</Link>
                    </div>
                </div>
            )}
        />
    </section>
)