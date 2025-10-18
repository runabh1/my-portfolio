import React from 'react';
import Section from './Section';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import InstagramIcon from './icons/InstagramIcon';
import MailIcon from './icons/MailIcon';
import PhoneIcon from './icons/PhoneIcon';


const socialLinks = [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/runabh1' },
    { name: 'LinkedIn', icon: LinkedInIcon, url: 'https://www.linkedin.com/in/arunabh-bhattacharyya-497523250/' },
    { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/runabh_/' },
];

const contactDetails = [
    { name: 'Email', icon: MailIcon, value: 'arunabh.bhatta122@gmail.com', href: 'mailto:arunabh.bhatta122@gmail.com' },
    { name: 'Phone', icon: PhoneIcon, value: '7002168639', href: 'tel:+917002168639' },
];


const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-lg text-gray-400 mb-8">
          I'm currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex justify-center space-x-6 mb-10">
            {socialLinks.map(link => {
                const Icon = link.icon;
                return (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}
                       className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                        <Icon className="w-8 h-8"/>
                    </a>
                )
            })}
        </div>

        <div className="space-y-4">
            {contactDetails.map(detail => {
                const Icon = detail.icon;
                return (
                    <a href={detail.href} key={detail.name} className="flex items-center justify-center text-gray-300 hover:text-teal-400 transition-colors duration-300 group">
                        <Icon className="w-6 h-6 mr-3 text-teal-400" />
                        <span className="text-lg group-hover:underline">{detail.value}</span>
                    </a>
                )
            })}
        </div>
      </div>
    </Section>
  );
};

export default Contact;