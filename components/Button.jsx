export default ({ children, ...props }) => (
    <button
        {...props}
        className="border-b-2 border-b-light-green tracking-[2.2px] font-bold h-10 uppercase"
    >{children}</button>
)