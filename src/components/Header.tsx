import React from 'react';
import Image from 'next/image';

export default function Header(): React.JSX.Element {
  return (
    <header className="w-full top-5 z-10 px-20 mt-5">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="font-semibold text-xl text-white">margauxespinasse</h1>
        <ul className="flex space-x-4">
          <li>
            <a
              href="https://www.linkedin.com/in/margauxespinasse/"
              target="_blank"
              className="text-white hover:text-teal"
            >
              <Image
                src="/assets/icon-linkedin.svg"
                alt="LinkedIn"
                width={22}
                height={22}
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/margaux-works"
              target="_blank"
              className="text-white hover:text-teal"
            >
              <Image
                src="/assets/icon-github.svg"
                alt="GitHub"
                width={22}
                height={22}
              />
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-teal">
              <Image
                src="/assets/icon-mail.svg"
                alt="Contact"
                width={22}
                height={22}
                className="w-6 h-6 invert"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
