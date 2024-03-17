import * as React from "react"
import styles from "./style.module.css"
const TimeSeperator = ({ color, ...props }) => {


  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={108}
      viewBox="0 0 30 81"
      {...props}

    >
      <defs>
        <clipPath id="a">
          <path d="M8.25 21.227h13.5v13.5H8.25Zm0 0" />
        </clipPath>
        <clipPath id="b">
          <path d="M19.094 21.227h-8.188L8.25 23.883v8.183l2.656 2.66h8.188l2.656-2.66v-8.183Zm0 0" />
        </clipPath>
        <clipPath id="c">
          <path d="M8.25 48.375h13.5v13.5H8.25Zm0 0" />
        </clipPath>
        <clipPath id="d">
          <path d="M19.094 48.375h-8.188L8.25 51.031v8.188l2.656 2.656h8.188l2.656-2.656V51.03Zm0 0" />
        </clipPath>
      </defs>

      <g clipPath="url(#a)">
        <g clipPath="url(#b)">
          <path fill={color} d="M8.25 21.227h13.5v13.5H8.25Zm0 0" />
        </g>
      </g>
      <g clipPath="url(#c)">
        <g clipPath="url(#d)">
          <path fill={color} d="M8.25 48.375h13.5v13.5H8.25Zm0 0" />
        </g>
      </g>
    </svg>
  )
}


export default TimeSeperator