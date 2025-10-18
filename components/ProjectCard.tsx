import React from 'react';
import { GitHubRepo } from '../types';
import StarIcon from './icons/StarIcon';
import ForkIcon from './icons/ForkIcon';
import LinkIcon from './icons/LinkIcon';

interface ProjectCardProps {
  repo: GitHubRepo;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ repo }) => {
  const languageColor = (language: string | null): string => {
    switch (language) {
      case 'JavaScript': return 'bg-yellow-400';
      case 'TypeScript': return 'bg-blue-400';
      case 'Python': return 'bg-green-400';
      case 'Java': return 'bg-red-500';
      case 'HTML': return 'bg-orange-500';
      case 'CSS': return 'bg-purple-500';
      default: return 'bg-gray-400';
    }
  };
  
  return (
    <div className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between shadow-lg hover:shadow-teal-400/30 transition-all duration-300 transform [transform:perspective(1000px)] hover:[transform:perspective(1000px)_translateZ(20px)_rotateY(-5deg)]">
      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-100">{repo.name}</h3>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400">
            <LinkIcon className="w-6 h-6" />
          </a>
        </div>
        <p className="text-gray-400 text-sm mb-4 h-20 overflow-hidden">
          {repo.description || 'No description available.'}
        </p>
      </div>
      <div className="mt-auto">
        <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center gap-1">
                {repo.language && (
                    <>
                        <span className={`w-3 h-3 rounded-full ${languageColor(repo.language)}`}></span>
                        <span>{repo.language}</span>
                    </>
                )}
            </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <StarIcon className="w-4 h-4 mr-1" />
              <span>{repo.stargazers_count}</span>
            </div>
            <div className="flex items-center">
              <ForkIcon className="w-4 h-4 mr-1" />
              <span>{repo.forks_count}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;