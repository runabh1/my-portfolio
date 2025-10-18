
import React from 'react';
import { GitHubRepo } from '../types';
import Section from './Section';
import ProjectCard from './ProjectCard';

interface ProjectsProps {
  repos: GitHubRepo[];
}

const Projects: React.FC<ProjectsProps> = ({ repos }) => {
  // Filter out specific repositories you don't want to feature.
  const filteredRepos = repos.filter(repo => repo.name.toLowerCase() !== 'krishiek');

  return (
    <Section id="projects" title="Featured Projects">
      {filteredRepos.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRepos.slice(0, 6).map((repo) => ( // Show top 6 projects
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400">No projects to display yet.</p>
      )}
    </Section>
  );
};

export default Projects;
