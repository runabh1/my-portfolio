
import { GitHubUser, GitHubRepo } from '../types';

const API_BASE_URL = 'https://api.github.com';

export const fetchUserProfile = async (username: string): Promise<GitHubUser> => {
  const response = await fetch(`${API_BASE_URL}/users/${username}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user profile');
  }
  return response.json();
};

export const fetchUserRepos = async (username: string): Promise<GitHubRepo[]> => {
  const response = await fetch(`${API_BASE_URL}/users/${username}/repos?sort=updated&direction=desc&per_page=100`);
  if (!response.ok) {
    throw new Error('Failed to fetch user repositories');
  }
  return response.json();
};
