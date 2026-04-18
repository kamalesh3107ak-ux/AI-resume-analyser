import React from 'react';

// Types for the component props
interface Suggestion {
  type: 'good' | 'improve';
  tip: string;
}

interface ATSProps {
  score: number;
  suggestions: Suggestion[];
}

const ATS: React.FC<ATSProps> = ({ score, suggestions }) => {
  // logic to determine UI based on score
  const isExcellent = score > 69;
  const isAverage = score > 49;

  const containerStyles = isExcellent
    ? 'from-[#eef9f5] to-[#f8fdfb] border-[#d1e9e0]'
    : isAverage
      ? 'from-[#fffbeb] to-[#fffdf5] border-[#fef3c7]'
      : 'from-[#fef2f2] to-[#fffafa] border-[#fee2e2]';

  const titleColor = isExcellent
    ? 'text-[#1e5344]'
    : isAverage
      ? 'text-[#92400e]'
      : 'text-[#991b1b]';

  return (
    <div
      className={`p-6 rounded-2xl bg-gradient-to-b border ${containerStyles} shadow-sm`}
    >
      {/* Header section with Icon and Score */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`p-2 rounded-lg ${isExcellent ? 'bg-[#4ade80]' : 'bg-yellow-400'}`}
        >
          {/* SVG for Checkmark or Warning */}
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isExcellent ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            )}
          </svg>
        </div>
        <h2 className={`text-2xl font-bold ${titleColor}`}>
          ATS Score - {score}/100
        </h2>
      </div>

      {/* Feedback text */}
      <div className="mb-6">
        <h3 className={`text-lg font-bold ${titleColor} mb-1`}>
          {isExcellent ? 'Great Job!' : 'Needs Improvement!'}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          This score represents how well your resume is likely to perform in
          Applicant Tracking Systems used by employers.
        </p>
      </div>

      {/* Suggestions List */}
      <div className="space-y-4">
        {suggestions.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="mt-1">
              {item.type === 'good' ? (
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              )}
            </span>
            <p
              className={`text-sm font-medium ${item.type === 'good' ? 'text-green-800' : 'text-yellow-800'}`}
            >
              {item.tip}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Footer Text */}
      <p className="mt-8 text-xs text-gray-500 italic">
        Keep refining your resume to improve your chances of getting past ATS
        filters and into the hands of recruiters.
      </p>
    </div>
  );
};

export default ATS;
