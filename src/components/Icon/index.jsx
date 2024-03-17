import * as React from "react"
const SvgComponent = ({ color = "blue", baseColor = "grey", number = 9, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={60}
        height={108}
        viewBox="0 0 45 81"
        {...props}
    >
        {/* top */}
        <path
            fill={[2, 3, 5, 6, 7, 8, 9].includes(number) ? color : baseColor}
            d="m34.344 9.25 4.601-4.605L34.344.039H10.656L6.055 4.645l4.601 4.605Zm0 0"
        />
        {/* left top */}
        <path
            fill={[4, 5, 6, 8, 9].includes(number) ? color : baseColor}
            d="M9.121 34.402V10.7L4.52 6.094.004 10.699v23.703l4.516 4.602Zm0 0"
        />
        {/* right top */}
        <path
            fill={[1, 2, 3, 4, 7, 8, 9].includes(number) ? color : baseColor}
            d="m40.48 6.055-4.601 4.601V34.36l4.601 4.606 4.516-4.606V10.656Zm0 0"
        />
        {/* middle */}
        <path
            fill={[2, 3, 4, 5, 6, 8, 9].includes(number) ? color : baseColor}
            d="m6.055 40.54 4.601 4.605h23.688l4.601-4.606-4.601-4.602H10.656ZM9.121 "
        />
        {/* left bottom */}
        <path
            fill={[2, 6, 8].includes(number) ? color : baseColor}
            d="m9.121 46.555-4.601-4.52-4.516 4.52v23.789l4.516 4.515 4.601-4.515Zm0 0"
        />
        {/* right bottom */}
        <path
            fill={[1, 3, 4, 5, 6, 7, 8, 9].includes(number) ? color : baseColor}
            d="M35.879 46.594v23.789l4.601 4.52 4.516-4.52v-23.79l-4.516-4.519ZM10.656 71.832l-4.601"
        />
        {/* bottom */}
        <path
            fill={[2, 3, 5, 6, 8, 9].includes(number) ? color : baseColor}
            d="m10.656 71.832-4.601 4.606 4.601 4.601h23.688l4.601-4.602-4.601-4.605Zm0 0"
        />
    </svg>
)
export default SvgComponent
