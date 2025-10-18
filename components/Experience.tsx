import React from 'react';
import Section from './Section';
import ExperienceCard from './ExperienceCard';

const experiences = [
    {
      role: 'Freelance',
      company: 'Outlier',
      date: 'May 2025 - Present',
      description: 'Engaged in freelance projects, delivering solutions for various clients.'
    },
    {
      role: 'Project Intern',
      company: 'Indian Institute of Technology, Guwahati',
      date: 'Jun 2025 - Jul 2025',
      description: 'Contributed to an ongoing research project as an intern.',
      hasCertificate: true,
      imageUrl: 'https://ik.imagekit.io/0hygozmgt/iitg_certificate.jpg?updatedAt=1760825304323',
    },
    {
      role: 'Intern',
      company: 'PROJECT HUMANITY',
      date: 'Jan 2025 - Jan 2025',
      description: 'Spearheaded a community cloth donation drive that engaged over 50 participants, successfully collecting and distributing more than 200 items of clothing to families in need.'
    },
     {
      role: 'Design Team Member',
      company: 'GDSC Dibrugarh University',
      date: 'Apr 2024 - Present',
      description: 'Collaborated with the design team on various projects and events for the Google Developer Student Club.'
    },
    {
      role: 'Member',
      company: 'GDG, ON CAMPUS: DIBRUGARH UNIVERSITY',
      date: '2024 - Present',
      description: 'Actively participated in events and workshops organized by the Google Developer Group.'
    },
    {
      role: 'Intern',
      company: 'JAGRITI SANMILITA UNNAYAN KENDRA',
      date: 'Jun 2024 - Jul 2024',
      description: 'Conducted assessments for elderly residents, facilitated mental health engagement sessions, and designed surveys for addiction challenges to enhance community outreach.',
      imageUrl: 'https://ik.imagekit.io/0hygozmgt/WhatsApp%20Image%202025-10-19%20at%203.48.06%20AM.jpeg?updatedAt=1760825968816'
    },
];


const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience">
        <div className="container mx-auto px-4">
            <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{left: '50%'}}></div>
                {experiences.map((exp, index) => (
                    <ExperienceCard 
                        key={index} 
                        experience={exp}
                        isLeft={index % 2 === 0} 
                    />
                ))}
            </div>
        </div>
    </Section>
  );
};

export default Experience;
