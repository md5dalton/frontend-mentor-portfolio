import { getSkills } from "@/appwrite"
import Section from "@/components/Section"
import UList from "@/components/UList"

export default async () => {

    try {

        const date = new Date()
        const year = date.getFullYear()

        const res = await getSkills()
        const skills = res.documents.map(({ name, start_year }) => ({ name, experience: year - start_year }))
        console.log(skills)
        return (
            <Section>
                <UList
                    className="
                        border-y-2 border-y-light-grey py-10 md:py-12 md:border-b-0 lg:py-14
                        grid gap-y-6 md:grid-cols-2 md:gap-y-12 lg:grid-cols-3 lg:gap-y-14 
                    "
                    items={skills}
                    itemHandler={({ name, experience }) => (
                        <div>
                            <h2 className="text-h-l">{name}</h2>
                            <p className="opacity-50">{`${experience} Year${experience != 1 ? "s" : ""} Experience`}</p>
                        </div>
                    )}
                />
            </Section>
        )
    } catch (error) {
        
        return (
            <Section>
                <p>An error occured</p>
            </Section>
        )
    }
    
}