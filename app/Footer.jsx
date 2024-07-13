import Contact from "./(contact)/Contact"
import Nav from "./Nav"

export default () => (
    <footer className="bg-dark-grey py-16 grid gap-20">
        <div className="page space-y-20">
            {/* <Contact /> */}
            <div className="border-t-[2px] border-t-light-grey pt-5">
                <Nav />
            </div>
        </div>
    </footer>
)