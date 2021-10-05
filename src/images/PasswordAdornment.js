import React from 'react'

function Icon({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="19.093" height="25.059">
      <g fill={color || '#6600ff'}>
        <path
          d="M2.386 22.673h14.32V10.74H2.386zm7.16-8.353a2.387 2.387 0 11-2.387 2.387 2.394 2.394 0 012.387-2.387z"
          opacity="0.3"
        />
        <path d="M16.706 8.353h-1.193V5.967a5.967 5.967 0 10-11.933 0v2.386H2.387A2.394 2.394 0 000 10.74v11.933a2.394 2.394 0 002.387 2.387h14.32a2.394 2.394 0 002.387-2.387V10.74a2.394 2.394 0 00-2.388-2.387zM5.967 5.967a3.58 3.58 0 017.16 0v2.386h-7.16zm10.74 16.706H2.387V10.74h14.32zm-7.16-3.58a2.387 2.387 0 10-2.387-2.387 2.394 2.394 0 002.386 2.387z" />
      </g>
    </svg>
  )
}

export default Icon
