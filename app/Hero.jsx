import ContactMe from "@/components/ContactMe"
import Section from "@/components/Section"

export default () => (
    <Section>
        <div className="max-w-[440px]">
            <h1 className="text-h-xl">
                Nice to meet you! I'm <span className="border-b-2 border-b-light-green">Majara Mpiti</span>
            </h1>
            <p className="my-6 opacity-50">Based in Lesotho, I'm a front-end developer passionate about building accessible web apps that users love</p>
            <ContactMe />
        </div>
    </Section>
)