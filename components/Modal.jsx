export default ({ children, toggler }) => (
    <>
        <div className="fixed h-screen w-screen top-0 left-0 bg-black/50" onClick={toggler}></div>
        <div className={`fixed h-screen w-screen top-0 left-0 z-10`}>
            {children}
        </div>
    </>
)