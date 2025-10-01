'use client';

import React from 'react';

interface PricingSliderProps {
  salesUrl: string;
}

const PricingSlider: React.FC<PricingSliderProps> = ({ salesUrl }) => {
  const plan = {
    name: 'Complete Bundle',
    price: 147,
    tagline: 'One-time payment • Lifetime access',
    features: [
      '7 Comprehensive AI Automation Courses',
      'PDF Guides + 24/7 AI Tutor Access',
      'Ready-to-Use Templates & Projects',
      'Real-World Business Case Studies',
      '30-Day Money-Back Guarantee',
      'Free Updates and New Content'
    ]
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Complete Bundle Access</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Get lifetime access to every course and bonus in a single plan.
        </p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-xl mb-2">{plan.name} Includes:</h3>
        <ul className="space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center">
        <div className="text-4xl font-bold mb-1">${plan.price}</div>
        <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-4">
          {plan.tagline}
        </p>
        <a
          href={salesUrl}
          className="inline-flex items-center justify-center w-full h-12 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg hover:opacity-90 transition shadow-lg"
        >
          Get Started with {plan.name}
        </a>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          30-day money-back guarantee
        </p>
      </div>
    </div>
  );
};

export default PricingSlider;
