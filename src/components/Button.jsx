import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
    const  {title, className,path} = props
  return (
    <div>
        {
                path ?
                <Link to={path}>

           

        <button  className={`${className} w-48 bg-black bg-opacity-60 text-slate-100 border-none  h-14 rounded-lg text-2xl font-medium capitalize hover:bg-green-300 border-2`}>
            {title}
            
        </button>
        </Link>:   <button  className={`${className} w-48 bg-black bg-opacity-60 text-slate-100 border-none  h-14 rounded-lg text-2xl font-medium capitalize hover:bg-green-300 border-2`}>
            {title}
            
        </button>
                    }
    </div>
  )
}

export default Button