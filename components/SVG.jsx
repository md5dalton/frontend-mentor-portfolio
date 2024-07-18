export default ({ d, ...props }) => (
    <svg
        {...props} 
        xmlns="http://www.w3.org/2000/svg" 
        // width="25" 
        // height="24"
    >
        <path
            fill="#FFF"
            fillRule="evenodd"
            d={d}
        />
    </svg>
)