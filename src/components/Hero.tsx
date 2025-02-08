import React from 'react';

export default function Hero(): React.JSX.Element {
  return (
    <div className="w-[80%] container px-20 pt-40">
      <div>
        <p className="font-semibold text-4xl text-white">Nice to meet you!</p>
        <p className="font-semibold text-4xl text-white">
          I am &nbsp;
          <span className="underline decoration-teal underline-offset-[6px]">
            Margaux.
          </span>{' '}
        </p>
      </div>
      <div className="max-w-xs">
        <p className="text-white pt-10">
          Based in Paris, I am a front-end developer passionate about building
          accessible web apps that user loves.
        </p>
      </div>
      <div>
        <button
          className="text-white font-medium tracking-widest underline 
 underline-offset-[16px] decoration-teal decoration-2 pt-12 pb-10 hover:text-tealLight"
        >
          CONTACT ME
        </button>
      </div>
    </div>
  );
}
