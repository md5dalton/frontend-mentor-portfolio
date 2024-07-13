import Contact from "./(contact)/Contact"
import Nav from "./Nav"

export default () => (
    <footer className="bg-dark-grey py-16 grid gap-20">
        <div className="page space-y-20">
            <Contact />
            <div className="border-t-[2px] border-t-light-grey py-10 md:py-8 lg:py-12">
                <Nav />
            </div>
        </div>
    </footer>
)