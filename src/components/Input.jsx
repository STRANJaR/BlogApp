import React, {useId} from "react";

const Input = React.forwardRef( function Input({
    label,
    type = 'text',
    className = '',
    ...props

}, ref){
    const id = useId()
    return (
        <div className="w-full ">
            {label && 
            <label className="inline-block mb-1 pl-1"
            htmlFor={id}
            >
                {label}
            </label>
            }

            <input
            type={type}
            className={` px-3 py-2 rounded-md bg-white text-black
            outline-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            > 
            
            </input>
        </div>
    )
})

export default Input