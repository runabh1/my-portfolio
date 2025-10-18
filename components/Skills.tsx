import React, { useRef, useEffect } from 'react';
import Section from './Section';
import { 
  SiPython, SiJava, SiCplusplus, SiJavascript, SiTypescript, SiReact, 
  SiNextdotjs, SiNodedotjs, SiExpress, SiHtml5, SiCss3, SiTailwindcss, 
  SiBootstrap, SiMongodb, SiFirebase, SiGit, SiGithub, SiDocker, SiLinux 
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';

const skills = [
  { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
  { name: 'Java', icon: FaDatabase, color: 'text-red-500' },
  { name: 'C++', icon: SiCplusplus, color: 'text-blue-600' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-300' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  { name: 'React', icon: SiReact, color: 'text-sky-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
  { name: 'Express', icon: SiExpress, color: 'text-gray-400' },
  { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
  { name: 'CSS3', icon: SiCss3, color: 'text-blue-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-500' },
  { name: 'SQL', icon: FaDatabase, color: 'text-amber-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
  { name: 'Git', icon: SiGit, color: 'text-orange-600' },
  { name: 'GitHub', icon: SiGithub, color: 'text-white' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
  { name: 'Linux', icon: SiLinux, color: 'text-yellow-300' },
];

const Skills: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!marqueeRef.current) return;

    const { clientX } = e;
    const marqueeRect = marqueeRef.current.getBoundingClientRect();
    const mouseX = clientX - marqueeRect.left;

    itemsRef.current.forEach((item) => {
      if (!item) return;

      const itemRect = item.getBoundingClientRect();
      const itemCenterX = itemRect.left - marqueeRect.left + itemRect.width / 2;
      
      const distance = Math.abs(mouseX - itemCenterX);
      const maxDistance = marqueeRect.width / 4; // The radius of the "bulge" effect

      if (distance < maxDistance) {
        const scale = 1 + (1 - distance / maxDistance) * 0.75; // Max scale of 1.75
        item.style.transform = `scale(${scale})`;
      } else {
        item.style.transform = 'scale(1)';
      }
    });
  };

  const handleMouseLeave = () => {
    itemsRef.current.forEach((item) => {
      if (item) {
        item.style.transform = 'scale(1)';
      }
    });
  };

  return (
    <Section id="skills" title="My Tech Stack">
      <div 
        ref={marqueeRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...skills, ...skills].map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} ref={el => itemsRef.current[index] = el} className="flex items-center justify-center mx-4 transition-transform duration-100 ease-out">
                <div className="flex items-center justify-center w-48 h-24 bg-gray-800 rounded-lg p-4 cursor-default">
                  <Icon className={`text-5xl mr-4 ${skill.color}`} />
                  <span className="text-lg font-semibold text-gray-300">{skill.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Skills;