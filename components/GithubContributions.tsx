import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import Section from './Section';

const GITHUB_USERNAME = 'runabh1';

const GithubContributions: React.FC = () => {
  return (
    <Section id="github-contributions" title="Days I Code">
      <div className="flex justify-center px-4">
        <GitHubCalendar
          username={GITHUB_USERNAME}
          blockSize={14}
          blockMargin={5}
          theme={{
            light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
            dark: ['#2d3748', '#2c7a7b', '#319795', '#38b2ac', '#4fd1c5'], // gray-800 and shades of teal
          }}
          fontSize={16}
          colorScheme="dark"
        />
      </div>
      <p className="text-center text-gray-500 mt-4">
        My GitHub contribution graph.
        <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline ml-2">
          @{GITHUB_USERNAME}
        </a>
      </p>
    </Section>
  );
};

export default GithubContributions;