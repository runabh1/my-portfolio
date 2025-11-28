import React from 'react';
import Section from './Section';
import AchievementCard from './AchievementCard';
import CertificateIcon from './icons/CertificateIcon';

const achievements = [
  {
    icon: CertificateIcon,
    title: 'Hackathon winner',
    issuer: 'CTII Dibrugarh university',
    year: '2025',
    url: 'https://ik.imagekit.io/0hygozmgt/WhatsApp%20Image%202025-11-21%20at%203.45.25%20PM.jpeg',
  },
  {
    icon: CertificateIcon,
    title: 'Hackathon Participation',
    issuer: 'Hackathon Organizer',
    year: '2024',
    url: 'https://ik.imagekit.io/0hygozmgt/WhatsApp%20Image%202025-10-19%20at%203.58.23%20AM.jpeg?updatedAt=1760826881201',
  },
  {
    icon: CertificateIcon,
    title: 'Hackathon Participation',
    issuer: 'Hackathon Organizer',
    year: '2024',
    url: 'https://ik.imagekit.io/0hygozmgt/WhatsApp%20Image%202025-10-19%20at%203.58.06%20AM.jpeg?updatedAt=1760826881234',
  },
  {
    icon: CertificateIcon,
    title: 'Hackathon Participation',
    issuer: 'Hackathon Organizer',
    year: '2024',
    url: 'https://ik.imagekit.io/0hygozmgt/WhatsApp%20Image%202025-10-19%20at%203.58.50%20AM.jpeg?updatedAt=1760826881262',
  },
];


const Achievements: React.FC = () => {
  return (
    <Section id="achievements" title="Achievements & Certifications">
        <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
                {achievements.map((achievement, index) => (
                    <AchievementCard key={index} achievement={achievement} />
                ))}
            </div>
        </div>
    </Section>
  );
};

export default Achievements;