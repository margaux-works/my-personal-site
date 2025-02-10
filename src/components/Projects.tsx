import React from 'react';
import ProjectCard from './ProjectCard';
import Image from 'next/image';

export default function Projects(): React.JSX.Element {
  const projects = [
    {
      id: '1',
      thumbnail: '/assets/invoice-app.png',
      image: '/assets/memory-game.png',
      title: 'Invoice App',
      description:
        'A full-stack solution for managing invoices. Features include CRUD operations, PDF downloads, form validations, responsive design, and secure user authentication',
      tags: ['TypeScript', 'Angular', 'Tailwind CSS', 'NodeJS'],
      codeUrl: 'https://github.com/margaux-works/invoice-app-client',
      siteUrl: 'https://margaux-works.github.io/invoice-app-client/',
    },
    {
      id: '2',
      thumbnail: '/assets/myflix_app.png',
      image: '/assets/art-gallery.png',
      title: 'Art Gallery Showcase',
      description: 'A beautiful art gallery site showcasing masterpieces.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      codeUrl: 'https://github.com/margaux-works/art-gallery',
      siteUrl: 'https://art-gallery-demo.com',
    },
  ];

  return (
    <div>
      <section id="projects" className="py-16 px-20">
        <hr className="w-full text-lightGray text-center pt-14 " />
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <Image
            src="/assets/pattern-rings.svg"
            alt="background image"
            width={400}
            height={400}
            className="absolute -right-10"
          />
        </div>
      </section>
    </div>
  );
}
