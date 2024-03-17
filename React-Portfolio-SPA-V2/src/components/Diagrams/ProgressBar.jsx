import * as React from "react"
const ProgressBar = (props) => (
    <div style={{border: "1px solid grey"}}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={192}
    height={20}
    viewBox="0 0 144 15"
    {...props}
  >

    <defs>
      <clipPath id="a">
        <path d="M4.5 0h135v13.5H4.5Zm0 0" />
      </clipPath>
      <clipPath id="b">
        <path d="M11.25 0h121.5a6.752 6.752 0 0 1 6.75 6.75 6.752 6.752 0 0 1-6.75 6.75H11.25A6.752 6.752 0 0 1 4.5 6.75 6.752 6.752 0 0 1 11.25 0Zm0 0" />
      </clipPath>
      <clipPath id="c">
        <path d="M4.5 0h90.492v13.5H4.5Zm0 0" />
      </clipPath>
      <clipPath id="d">
        <path d="M11.25 0H88.2a6.75 6.75 0 0 1 6.75 6.75 6.75 6.75 0 0 1-6.75 6.75H11.25A6.752 6.752 0 0 1 4.5 6.75 6.752 6.752 0 0 1 11.25 0Zm0 0" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <g clipPath="url(#b)">
        <path fill="#6ce5e8" d="M4.5 0h135v13.5H4.5Zm0 0" />
      </g>
    </g>
    <g clipPath="url(#c)">
      <g clipPath="url(#d)">
        <path fill="#41b8d5" d="M4.5 0h135v13.5H4.5Zm0 0" />
      </g>
    </g>
  </svg>

    </div>
)
export default ProgressBar
