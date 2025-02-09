import React from 'react';

export default function ContactForm(): React.JSX.Element {
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
        <form action="" method="POST" className="grid grid-rows">
          <input
            type="text"
            name="name"
            placeholder="NAME"
            required
            className="p-2 border-b bg-transparent text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            required
            className="p-2 border-b bg-transparent text-white"
          />
          <textarea
            name="message"
            placeholder="MESSAGE"
            required
            className="p-2 border-b text-white bg-transparent h-28"
          />
          <button
            type="submit"
            className="text-white font-medium tracking-widest underline underline-offset-[16px] decoration-teal decoration-2 pt-12 pb-10 hover:text-tealLight uppercase text-right"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
