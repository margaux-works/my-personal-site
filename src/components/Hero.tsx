import React from 'react';

import Image from 'next/image';

export default function Hero(): React.JSX.Element {
  return (
    <div className="w-[80%] container px-20 pt-40">
      <Image
        src="/assets/pattern-rings.svg"
        alt="background image"
        width={400}
        height={400}
        className="absolute -left-5 top-[150px]"
      />
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
