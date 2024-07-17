import Section from "@/components/Section"
import UList from "@/components/UList"

const skills = [
    {name: "HTML", years: 4},
    {name: "CSS", years: 4},
    {name: "Javascript", years: 4},
    {name: "Accessibility", years: 4},
    {name: "React", years: 3},
    {name: "Sass", years: 3},
]

export default () => (
    <Section>
        <UList
            className="
                border-y-2 border-y-light-grey py-10 md:py-12 md:border-b-0 lg:py-14
                grid gap-y-6 md:grid-cols-2 md:gap-y-12 lg:grid-cols-3 lg:gap-y-14 
            "
            items={skills}
            itemHandler={({ name, years }) => (
                <div>
                    <h2 className="text-h-l">{name}</h2>
                    <p className="opacity-50">{`${years} Years Experience`}</p>
                </div>
            )}
        />
    </Section>
)