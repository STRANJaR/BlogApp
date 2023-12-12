import React, { Children } from 'react'

export default function Button({
    Children,
    type = 'button',
    BackgroundColor = 'bg-blue-600',
    textColor = 'text-black',
    className = '',
    ...props
}) {
    
  return (
    <button className={`px-4 py-2 rounded-lg  ${className} ${BackgroundColor}, ${textColor}`} {...props }>
        {Children}
    </button>
  )
}

