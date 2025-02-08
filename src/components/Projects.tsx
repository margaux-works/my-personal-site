import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects(): React.JSX.Element {
  const projects = [
    {
      id: '1',
      thumbnail: '/assets/memory-game-thumbnail.png',
      image: '/assets/memory-game.png',
      title: 'Memory Game',
      description: 'A fun memory game built with HTML, CSS, and JavaScript.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      codeUrl: 'https://github.com/margaux-works/memory-game',
      siteUrl: 'https://memory-game-demo.com',
    },
    {
      id: '2',
      thumbnail: '/assets/art-gallery-thumbnail.png',
      image: '/assets/art-gallery.png',
      title: 'Art Gallery Showcase',
      description: 'A beautiful art gallery site showcasing masterpieces.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      codeUrl: 'https://github.com/margaux-works/art-gallery',
      siteUrl: 'https://art-gallery-demo.com',
    },
  ];

  return (
    <section id="projects" className="py-16 px-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
