export default ({ children, ...props }) => (
    <button
        {...props}
        className="btn"
    >{children}</button>
)