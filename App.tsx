import React, { useState, useEffect } from 'react';
import { GitHubUser, GitHubRepo } from './types';
import { fetchUserProfile, fetchUserRepos } from './services/githubService';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PixelBot from './components/PixelBot';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GithubContributions from './components/GithubContributions';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const GITHUB_USERNAME = 'runabh1';

const App: React.FC = () => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        const userData = await fetchUserProfile(GITHUB_USERNAME);
        const reposData = await fetchUserRepos(GITHUB_USERNAME);
        setUser(userData);
        setRepos(reposData);
      } catch (err) {
        setError('Failed to fetch data from GitHub. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-teal-500 mx-auto"></div>
            <p className="mt-4 text-lg">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white">
        <div className="text-center bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Oops! Something went wrong.</h2>
          <p className="text-gray-300">{error || 'Could not load user data.'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-gray-200 font-sans leading-normal tracking-wider">
      <Header />
      <main>
        <Hero user={user} />
        <PixelBot />
        <About user={user} />
        <Skills />
        <Projects repos={repos} />
        <GithubContributions />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
