import Contact from "./(contact)/Contact"
import Nav from "./Nav"

export default () => (
    <footer className="bg-dark-grey py-14 lg:py-20">
        <div className="page space-y-24">
            <Contact />
            <div className="border-t-[2px] border-t-light-grey pt-10 md:pt-8 lg:pt-12">
                <Nav />
            </div>
        </div>
    </footer>
)