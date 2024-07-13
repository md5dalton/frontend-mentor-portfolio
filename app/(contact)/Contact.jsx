import Form from "./Form"
import Messanger from "./Messanger"

export default () => (
    <section className="text-center grid gap-12" id="contact">
        <div>
            <h2 className="text-[40px] leading-[40px] font-bold">Contact</h2>
            <p className="mt-5 opacity-50">I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.</p>
        </div>
        <Form />
        {/* <Messanger /> */}
    </section>
)