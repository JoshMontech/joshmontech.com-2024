import React, { useState } from 'react'
import { SubmitHandler, useForm, Form } from 'react-hook-form'
import { FaCheck } from 'react-icons/fa6'
import { FaSpinner } from 'react-icons/fa' // Import spinner icon

interface IFormInput {
    email: string
    name: string
    summary: string
}

const EmailForm = () => {
    const formStyles = "bg-black border border-light-border text-white bg-opacity-60"
    const { register, control, formState:{errors} } = useForm<IFormInput>()
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setLoading] = useState(false);

    return (
        <div className="relative">
            {!isSubmitted ? (
                <Form 
                    control={control}
                    className="text-black flex w-full flex-col px-1"
                    action='/api/send'
                    method='post'
                    onSubmit={() => setLoading(true)}
                    onSuccess={() => {
                        setLoading(false)
                        setIsSubmitted(true)
                    }}
                    onError={(response) => {
                        setLoading(false)
                        // console.log('failure', response)
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
                    })} className={`rounded px-2 py-1 ${formStyles} ${errors.email ? 'mb-1': 'mb-4'}`}/>
                    {errors.email && <p className="text-blue-light">{errors.email.message}</p>}
                    <label className="text-white font-bold">Name</label>
                    <input className={`rounded px-2 py-1 ${formStyles} ${errors.email ? 'mb-1': 'mb-4'}`} {...register("name", { required: 'Name is required', maxLength: 100 })} />
                    {errors.name && <p className="text-blue-light">{errors.name.message}</p>}
                    <label className="text-white font-bold">Summary</label>
                    <textarea className={`rounded px-2 py-1 ${formStyles} ${errors.email ? 'mb-1': 'mb-4'}`} {...register("summary", {required: 'Summary is required', maxLength: 1000 })} />
                    {errors.summary && <p className="text-blue-light">{errors.summary.message}</p>}
                    <button className="rounded font-bold bg-opacity-40 bg-light-5 hover:bg-light-4 text-white px-2 py-1 border-light-border border">Submit</button>
                </Form>
            ) : (
                <div className="flex gap-2 items-center">Thanks for the message!<FaCheck className="fill-green-400" /></div>
            )}
            
            {isLoading && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm">
                    <FaSpinner className="animate-spin text-white text-4xl" />
                </div>
            )}
        </div>
    )
}

export default EmailForm