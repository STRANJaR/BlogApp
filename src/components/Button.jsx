import React from 'react'

export default function Button({
    children,
    type = 'button',
    BackgroundColor = 'bg-primary',
    textColor = 'text-white',
    className = '',
    ...props
  }) {
    
  return (
    <button className={`px-4 py-2 rounded-lg  ${className} ${BackgroundColor} ${textColor}`} {...props }>
        {children}
    </button>
  )
}