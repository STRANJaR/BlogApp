import React, { Children } from 'react'

function Button({
    Children,
    type = 'button',
    BackgroundColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
  ...props
}) {
    
  return (
    <button className={`px-4 py-2 rounded-lg ${className} ${BackgroundColor}, ${textColor}`} {...props }>
        {Children}
    </button>
  )
}

export default Button
