import React from 'react';
import { GitHubUser } from '../types';
import Section from './Section';

interface AboutProps {
  user: GitHubUser;
}

const StatCard: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="bg-gray-800 p-6 rounded-lg text-center transition-all duration-300 transform [transform:perspective(1000px)] hover:[transform:perspective(1000px)_translateZ(15px)_rotateX(5deg)] hover:shadow-lg hover:shadow-teal-500/20">
        <p className="text-4xl font-bold text-teal-400">{value}</p>
        <p className="text-gray-400">{label}</p>
    </div>
);


const About: React.FC<AboutProps> = ({ user }) => {
  return (
    <Section id="about" title="About Me">
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-12">
                <div className="md:col-span-1 flex justify-center">
                    <div className="w-48 h-48 p-1 rounded-full border-4 border-teal-400">
                         <img
                            src="https://ik.imagekit.io/0hygozmgt/WhatsApp%20Image%202025-10-19%20at%203.44.08%20AM.jpeg?updatedAt=1760825672180"
                            alt={user.name || 'Arunabh Bhattacharyya'}
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                </div>
                <div className="md:col-span-2">
                    <p className="text-lg text-gray-300 leading-relaxed text-center md:text-left">
                       I am a Computer Science and Engineering student at Dibrugarh University Institute of Engineering and Technology (DUIET). My journey in technology is driven by a curiosity for how things work, which has evolved into a passion for building efficient, scalable, and user-friendly applications. I thrive in collaborative environments and am always eager to learn new technologies and solve challenging problems.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <StatCard value={user.public_repos} label="Public Repos" />
                <StatCard value={user.followers} label="Followers" />
                <StatCard value={user.following} label="Following" />
            </div>
        </div>
    </Section>
  );
};

export default About;