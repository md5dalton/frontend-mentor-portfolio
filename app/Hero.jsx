import ContactMe from "@/components/ContactMe"
import Section from "@/components/Section"

export default () => (
    <Section className="mt-64 md:mt-14">
        <div className="max-w-[440px] lg:max-w-[706px]">
            <h1 className="text-h-xl">
                Nice to <br className="hidden md:inline lg:hidden" /> meet you! I'm <span className="border-b-2 border-b-light-green">Mj Mpiti</span>
            </h1>
            <p className="my-6 opacity-50 max-w-[440px]">Based in Lesotho, I'm a front-end developer passionate about building accessible web apps that users love</p>
            <ContactMe />
        </div>
    </Section>
)