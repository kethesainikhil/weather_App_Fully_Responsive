import React from 'react'

const InputBox = (props) => {
    const {title,className,type,placeholder,register} = props;
  return ( 
    <div className='flex flex-col  sm:flex-row sm:gap-20 gap-4  sm:items-center sm:justify-center sm:py-4 py-2'>
        <label className='text-lg  sm:w-48 text-start  capitalize' htmlFor={title}>{title}</label>
        <input {...register(`${title}`)} type={type || "text"} placeholder={placeholder}  className={`${className} rounded-lg sm:w-96  placeholder:capitalize py-2 px-2  border-2 border-black `} />
    </div>
  )
}

export default InputBox