import React, { useState } from 'react'
import { SubmitHandler, useForm, Form } from 'react-hook-form'
import { FaCheck } from 'react-icons/fa6'

interface IFormInput {
    email: string
    name: string
    summary: string
}

const EmailForm = () => {
    const { register, control, formState:{errors} } = useForm<IFormInput>()
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    return (
        !isSubmitted ? 
      <Form 
        control={control}
        className="text-black flex w-full flex-col"
        action='/api/send'
        method='post'
        onSuccess={() => {
            setIsSubmitted(true)
        }}
        onError={(response) => {
            console.log('failure', response)
        }}
      >
        <label className="text-white font-bold">Email</label>
        <input {...register("email", {
            required: 'Email is required',
            pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email address',
            },
            maxLength: 100
        })} className={`rounded px-2 py-1 ${errors.email ? 'mb-1': 'mb-4'}`}/>
        {errors.email && <p className="text-blue-light">{errors.email.message}</p>}

        <label className="text-white font-bold">Name</label>
        <input className={`rounded px-2 py-1 ${errors.email ? 'mb-1': 'mb-4'}`} {...register("name", { required: 'Name is required', maxLength: 100 })} />
        {errors.name && <p className="text-blue-light">{errors.name.message}</p>}
        <label className="text-white font-bold">Summary</label>
        <textarea className={`rounded px-2 py-1 ${errors.email ? 'mb-1': 'mb-4'}`} {...register("summary", {required: 'Summary is required', maxLength: 1000 })} />
        {errors.summary && <p className="text-blue-light">{errors.summary.message}</p>}
        <button className="rounded font-bold text-white px-2 py-1 border-blue-light border">Submit</button>
      </Form>
      : <div className="flex gap-2 items-center">Thanks for the message!<FaCheck className="fill-green-400" /></div>
    )
}

export default EmailForm