import Contact from "./(contact)/Contact"
import Nav from "./Nav"

export default () => (
    <footer className="bg-dark-grey py-16 grid gap-20">
        <Contact />
        <div className="px-4">
            <div className="border-t-[2px] border-t-light-grey pt-5">
                <Nav />
            </div>
        </div>
    </footer>
)