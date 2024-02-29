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
    <section className="page-w text-center">
        <UList
            className="border-y-2 border-y-light-grey py-10 grid gap-6"
            items={skills}
            itemHandler={({ name, years }) => (
                <div>
                    <h2 className="text-md font-bold">{name}</h2>
                    <p className="opacity-50">{`${years} Years Experience`}</p>
                </div>
            )}
        />
    </section>
)