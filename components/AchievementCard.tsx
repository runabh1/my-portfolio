import React from 'react';
import LinkIcon from './icons/LinkIcon';

interface Achievement {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    title: string;
    issuer: string;
    description?: string;
    year: string;
    url?: string;
}

interface AchievementCardProps {
  achievement: Achievement;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  const Icon = achievement.icon;
  const isImageUrl = achievement.url && /\.(jpeg|jpg|gif|png)$/i.test(
    achievement.url.split('?')[0]
  );

  const cardContent = (
    <div className="bg-gray-800 rounded-lg p-6 flex items-start space-x-4 shadow-lg hover:shadow-teal-400/20 transition-all duration-300 transform group relative w-full [transform:perspective(1000px)] hover:[transform:perspective(1000px)_translateZ(15px)]">
        <div className="flex-shrink-0">
            <div className="bg-gray-700 rounded-full p-3">
                <Icon className="w-6 h-6 text-teal-400"/>
            </div>
        </div>
        <div className="flex-1">
            <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-bold text-gray-100">{achievement.title}</h3>
                <span className="text-sm font-medium text-gray-500">{achievement.year}</span>
            </div>
            <p className="text-md text-teal-400 font-semibold mb-2">{achievement.issuer}</p>
            {achievement.description && (
                <p className="text-gray-400 text-sm">
                    {achievement.description}
                </p>
            )}
            {isImageUrl && (
                <div className="mt-4">
                    <img src={achievement.url} alt={`${achievement.title} certificate`} className="rounded-lg shadow-md w-full" />
                </div>
            )}
        </div>
        {achievement.url && !isImageUrl && (
            <div className="absolute top-4 right-4 text-gray-600 group-hover:text-teal-400 transition-colors duration-300">
                <LinkIcon className="w-5 h-5"/>
            </div>
        )}
    </div>
  );
  
  if (achievement.url && !isImageUrl) {
    return (
        <a href={achievement.url} target="_blank" rel="noopener noreferrer" className="block">
            {cardContent}
        </a>
    )
  }

  return cardContent;
};

export default AchievementCard;