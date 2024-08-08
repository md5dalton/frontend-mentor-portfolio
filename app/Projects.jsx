import ContactMe from "@/components/ContactMe"
import Section from "@/components/Section"
import UList from "@/components/UList"
import { projects } from "@/utils/data"
import Image from "next/image"
import Link from "next/link"

export default () => (
    <Section>
        <div className="flex items-center justify-between mb-10 md:mb-20">
            <h2 className="text-h-xl">Projects</h2>
            <ContactMe />
        </div>
        <UList
            className="grid gap-y-10 md:grid-cols-2 md:gap-y-16 md:gap-x-6"
            items={projects}
            itemHandler={({ name, thumbnails: { large }, links: { code, site }, tech }) => (
                <div className="grid gap-5 uppercase]">
                    <Image
                        className=" aspect-[4/3] object-cover object-top"
                        alt={name}
                        src={large}
                        width={800}
                        height={800}
                    />
                    <div>
                        <h2 className="text-h-m text-left">{name}</h2>
                        <UList
                            className="flex gap-5 opacity-50"
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
    </Section>
)