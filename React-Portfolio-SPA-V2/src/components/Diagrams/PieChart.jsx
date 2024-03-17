import * as React from "react"
const PieChart = (props) => (
  <div style={{width: "500px", height: "500px"}}>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={108}
    height={108}
    viewBox="0 0 81 81"
    {...props}
    >
    <path
      fill="#6ce5e8"
      d="M40.5 0c2.125 0 4.238.168 6.336.5 2.098.332 4.16.824 6.18 1.48 2.02.66 3.976 1.47 5.87 2.434 1.895.965 3.7 2.07 5.419 3.32a40.242 40.242 0 0 1 4.832 4.13 40.242 40.242 0 0 1 4.129 4.831 40.243 40.243 0 0 1 3.32 5.418 40.945 40.945 0 0 1 2.434 5.871L40.5 40.5Zm0 0"
      />
    <path
      fill="#41b8d5"
      d="M79.02 27.984a40.423 40.423 0 0 1 1.48 6.18 40.478 40.478 0 0 1-11.363 34.973 40.242 40.242 0 0 1-4.832 4.129L40.5 40.5Zm0 0"
      />
    <path
      fill="#2d8bba"
      d="M64.305 73.266a40.243 40.243 0 0 1-5.418 3.32 40.945 40.945 0 0 1-5.871 2.434 40.423 40.423 0 0 1-6.18 1.48 40.478 40.478 0 0 1-30.14-7.234L40.5 40.5Zm0 0"
      />
    <path
      fill="#2f5f98"
      d="M16.695 73.266a40.242 40.242 0 0 1-4.832-4.13 40.242 40.242 0 0 1-4.129-4.831 40.243 40.243 0 0 1-3.32-5.418 40.945 40.945 0 0 1-2.434-5.871 40.423 40.423 0 0 1-1.48-6.18 40.478 40.478 0 0 1 1.48-18.852L40.5 40.5Zm0 0"
      />
    <path
      fill="#31356e"
      d="M1.98 27.984a40.945 40.945 0 0 1 2.434-5.87c.965-1.895 2.07-3.7 3.32-5.419a40.548 40.548 0 0 1 8.957-8.96 40.897 40.897 0 0 1 5.418-3.32A40.545 40.545 0 0 1 40.496 0l.004 40.499Zm0 0"
      />
  </svg>
      </div>
)
export default PieChart