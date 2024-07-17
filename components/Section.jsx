export default ({ children, ...props }) => (
    <section {...props}>
        <div className="page text-center md:text-left">{children}</div>
    </section>
)