import React from 'react';
import Image from 'next/image';

type ProjectType = {
  id: string;
  thumbnail: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
  codeUrl: string;
  siteUrl: string;
};

type ProjectCardProps = {
  project: ProjectType;
};

export default function ProjectCard({
  project,
}: ProjectCardProps): React.JSX.Element {
  const { thumbnail, title, description, tags, codeUrl, siteUrl } = project;

  return (
    <div className="max-w-[540px] overflow-hidden">
      <Image
        src={thumbnail}
        width="400"
        height="400"
        alt={title}
        className="object-cover"
      />

      <h3 className="text-white pt-6 uppercase font-semibold">{title}</h3>
      <p className="text-white">{description}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-teal-500 text-white bg-teal/75 text-sm font-medium px-2 py-1 rounded-lg hover:bg-teal "
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 flex space-x-4">
        <a
          href={codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          View Code
        </a>
        <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          View Site
        </a>
      </div>
    </div>
  );
}
