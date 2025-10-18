import React from 'react';

const CertificateIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    {...props}
  >
    <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-1.07-1.07a53.942 53.942 0 01.49-3.32C5.58 3.69 7.464 3.12 9.5 3.018a59.843 59.843 0 012.5 0c2.036.102 3.92.672 5.59 1.622.58.327 1.135.69 1.66 1.087l-1.07 1.07m-16.854 0H5.63" 
    />
  </svg>
);

export default CertificateIcon;
