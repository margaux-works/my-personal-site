'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

const REQUIRED = 'This field is required';

type ContactFormType = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm(): React.JSX.Element {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContactFormType>({
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit: SubmitHandler<ContactFormType> = () => {
    reset(); // Clear the form fields after submission
  };

  return (
    <div className="grid grid-cols-2 gap-8 bg-gray">
      <div className="p-20">
        <p className="text-4xl font-bold text-white"> Contact</p>
        <p className="text-white pt-10">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>
      <div className="p-16">
        <form
          action="https://formsubmit.co/9339770123248892b3091e25f0b2c54e"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-rows"
        >
          <div>
            <input
              type="text"
              {...register('name', {
                required: REQUIRED,
                minLength: {
                  value: 2,
                  message: 'Minimum 2 characters required',
                },
              })}
              placeholder="NAME"
              autoComplete="off"
              className={`p-2 border-b bg-transparent text-white w-full ${
                errors.name ? 'border-red' : 'border-white'
              }`}
            />
            {errors.name && (
              <p className="text-red text-sm mt-1"> {errors.name.message}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              {...register('email', {
                required: REQUIRED,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Sorry, invalid format here',
                },
              })}
              placeholder="EMAIL"
              className={`p-2 border-b bg-transparent text-white w-full ${
                errors.name ? 'border-red' : 'border-white'
              }`}
            />
            {errors.email && (
              <p className="text-red text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <textarea
              {...register('message', {
                required: REQUIRED,
                minLength: {
                  value: 4,
                  message: 'Minimum 4 characters required',
                },
              })}
              placeholder="MESSAGE"
              autoComplete="off"
              className={`p-2 border-b bg-transparent text-white w-full h-28 ${
                errors.name ? 'border-red' : 'border-white'
              }`}
            />
            {errors.message && (
              <p className="text-red text-sm mt-1">{errors.message.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="text-white font-medium tracking-widest underline underline-offset-[16px] decoration-teal decoration-2 pt-12 pb-10 hover:text-tealLight uppercase text-right"
          >
            Send Message
          </button>
        </form>
        {isSubmitSuccessful && (
          <p className="text-green mt-4 text-center">
            Thank you! Your message has been sent.
          </p>
        )}
      </div>
    </div>
  );
}
