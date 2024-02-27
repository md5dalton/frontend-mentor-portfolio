import ContactMe from "@/components/ContactMe"
import UList from "@/components/UList"
import Image from "next/image"

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
                <div>
                    <div className="relative h-[250px]">
                        <Image
                            alt={name}
                            src={small}
                            fill
                        />
                    </div>
                    <h2 className="text-md font-bold">{name}</h2>
                </div>
            )}
        />
    </section>
)