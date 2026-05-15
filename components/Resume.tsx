import React, { useState } from 'react';
import Section from './Section';

const RESUME_URL = '/Arunabh_Resume_v3.pdf';

const Resume: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Section id="resume" title="Resume">
      <div className="max-w-4xl mx-auto">
        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 p-4 bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/50">
          <div className="flex items-center gap-3">
            {/* Document Icon */}
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-teal-500/20">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm sm:text-base">Arunabh Bhattacharyya</p>
              <p className="text-gray-400 text-xs sm:text-sm">Resume / Curriculum Vitae</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-700/80 hover:bg-gray-600 text-gray-200 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 border border-gray-600/50"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open in New Tab
            </a>
            <a
              href={RESUME_URL}
              download="Arunabh_Bhattacharyya_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="relative rounded-xl overflow-hidden border border-gray-700/50 shadow-2xl shadow-black/30 bg-gray-800">
          {/* Loading State */}
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 z-10">
              <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-teal-500 mb-4"></div>
              <p className="text-gray-400 text-sm">Loading resume...</p>
            </div>
          )}
          
          {/* Decorative top gradient bar */}
          <div className="h-1 w-full bg-gradient-to-r from-teal-500 via-emerald-400 to-teal-600"></div>
          
          <iframe
            src={`${RESUME_URL}#toolbar=1&navpanes=0&scrollbar=1`}
            className="w-full bg-white"
            style={{ height: '85vh', minHeight: '600px' }}
            title="Arunabh Bhattacharyya Resume"
            onLoad={() => setIsLoading(false)}
          />
        </div>

        {/* Fallback for mobile / unsupported browsers */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Having trouble viewing?{' '}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
            >
              Click here to open the PDF directly
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Resume;
