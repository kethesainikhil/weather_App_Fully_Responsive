import React from 'react'
import InputBox from './InputBox'
import Button from './Button'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Farmers = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const navigate = useNavigate();
    
      const onSubmit = (data) => {
        console.log(data)
    
        navigate("/result")
      }
  return (
    <div className='border-2 bg-slate-400 border-black sm:w-fit mx-auto sm:px-20 px-2 py-10 sm:mt-4 sm:rounded-xl'>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
            <h1 className='text-center sm:text-4xl text-2xl  capitalize   py-10'>Hello!!! Farmers <br /><span className='sm:text-2xl text-lg'>(Backbone <span className='normal-case'>of the </span>country)</span></h1>
        </div>
        <InputBox register={register} title="Email" placeholder="enter your email" type="email"  />
        <InputBox register={register} title="Phone No" placeholder="enter your Phone number" type="number" className="phoneNo"  />

        <InputBox register={register} title="Crop Name" placeholder="enter your name of the crop" type="text"  />
        <InputBox register={register} title="Place of the crop" placeholder="enter your Place of the crop" type="text"  />

        <Button title="Submit" className="mx-auto flex items-center justify-center mt-10" />
        </form>
    </div>
  )
}

export default Farmers