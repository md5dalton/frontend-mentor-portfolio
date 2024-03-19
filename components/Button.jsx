import Link from "next/link"

export default ({ children, ...props }) => (
    <Link
        {...props}
        href="#contact"
        className="btn inline-block"
    >{children}</Link>
)