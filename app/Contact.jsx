import Button from "@/components/Button"

export default () => (
    <section className="page-w text-center grid gap-12">
        <div>
            <h2 className="text-[40px] leading-[40px] font-bold">Contact</h2>
            <p className="mt-5 opacity-50">I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.</p>
        </div>
        <form className="grid gap-8">
            <input className="bg-transparent border-b-[1px] border-b-light-grey pb-4 outline-none px-4" type="text" placeholder="NAME" />
            <input className="bg-transparent border-b-[1px] border-b-light-grey pb-4 outline-none px-4" type="email" placeholder="EMAIL" />
            <textarea className="bg-transparent border-b-[1px] border-b-light-grey min-h-28 resize-y outline-none px-4" placeholder="MESSAGE" />
            <div className="justify-self-end">
                <Button>send message</Button>
            </div>
        </form>
    </section>
)