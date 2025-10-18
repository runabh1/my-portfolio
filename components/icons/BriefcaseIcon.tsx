import React from 'react';

const BriefcaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
            d="M20.25 14.15v4.075c0 1.313-.964 2.475-2.25 2.475h-10.5c-1.286 0-2.25-.964-2.25-2.25V6.75a2.25 2.25 0 012.25-2.25h4.5m8.25 0a2.25 2.25 0 00-2.25-2.25h-3a2.25 2.25 0 00-2.25 2.25M3 19.5h18" 
        />
    </svg>
);

export default BriefcaseIcon;
