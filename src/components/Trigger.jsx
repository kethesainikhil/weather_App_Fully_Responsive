import React from 'react'
import InputBox from './InputBox'
import Button from './Button'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Trigger = () => {
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
            <h1 className='text-center sm:text-4xl text-2xl  capitalize   py-10'>Set Trigger </h1>
        </div>
        <InputBox register={register} title="Email" placeholder="enter your email" type="email"  />
        <InputBox register={register} title="Phone No" placeholder="enter your Phone number" type="number"   />
        <div className='flex flex-col  sm:flex-row sm:gap-20 gap-4  sm:items-center sm:justify-center sm:py-4 py-2'>
        <label className='text-lg  sm:w-48 text-start  capitalize' htmlFor="trigger">Trigger Type</label>
        <select  {...register("triggerType")} className='rounded-lg sm:w-96  placeholder:capitalize py-2 px-2  border-2 border-black' name="triggerType" id="triggerType">
            <option  value="rain">Rain</option>
            <option value="snow">Snow</option>
            <option value="heat">Heat</option>
            <option value="cold">Cold</option>
        </select>

    </div>
    <InputBox register={register} title="Threshold Point" placeholder="enter your Max Point to get trigger" type="number"   />

        

        <Button title="Submit" className="mx-auto flex items-center justify-center mt-10" />
        </form>
    </div>
  )
}

export default Trigger