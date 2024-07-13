export default ({ children, ...props }) => (
    <section {...props}>
        <div className="page">{children}</div>
    </section>
)