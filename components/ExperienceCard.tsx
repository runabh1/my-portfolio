import React from 'react';
import LinkIcon from './icons/LinkIcon';

interface Experience {
    role: string;
    company: string;
    date: string;
    description: string;
    hasCertificate?: boolean;
    imageUrl?: string;
}

interface ExperienceCardProps {
  experience: Experience;
  isLeft: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, isLeft }) => {
  const alignmentClass = isLeft ? 'mb-8 flex justify-between items-center w-full right-timeline' : 'mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline';

  return (
     <div className={alignmentClass}>
        <div className="order-1 w-5/12"></div>
        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white"></h1>
        </div>
        <div className={`order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4 transition-transform duration-300 [transform:perspective(1000px)] hover:[transform:perspective(1000px)_translateZ(20px)_rotateY(${isLeft ? '5deg' : '-5deg'})]`}>
            <h3 className="mb-1 font-bold text-teal-400 text-lg">{experience.role}</h3>
            <h4 className="mb-2 font-semibold text-gray-200">{experience.company}</h4>
            <p className="text-sm leading-snug tracking-wide text-gray-400 mb-3">{experience.date}</p>
            <p className="text-sm text-gray-300">
                {experience.description}
            </p>
            {experience.imageUrl && (
                <div className="mt-4">
                    <img src={experience.imageUrl} alt={`${experience.company} experience`} className="rounded-lg shadow-md" />
                </div>
            )}
            {experience.hasCertificate && (
                <div className="mt-4">
                    <span className="inline-flex items-center text-sm font-semibold text-teal-400 hover:text-teal-300 cursor-pointer">
                        <LinkIcon className="w-4 h-4 mr-2" />
                        Certificate Available
                    </span>
                </div>
            )}
        </div>
    </div>
  );
};

export default ExperienceCard;
