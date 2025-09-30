'use client';

import React, { useState, useEffect } from 'react';

interface PricingSliderProps {
  salesUrl: string;
}

const PricingSlider: React.FC<PricingSliderProps> = ({ salesUrl }) => {
  const [selectedPlan, setSelectedPlan] = useState('basic');
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = {
    basic: {
      name: 'Complete Bundle',
      monthlyPrice: 147,
      annualPrice: 147,
      features: [
        '7 Comprehensive AI Automation Courses',
        'PDF Guides + 24/7 AI Tutor Access',
        'Ready-to-Use Templates & Projects',
        'Real-World Business Case Studies',
        '30-Day Money-Back Guarantee',
        'Free Updates and New Content'
      ]
    },
    premium: {
      name: 'Complete Bundle',
      monthlyPrice: 147,
      annualPrice: 147,
      features: [
        '7 Comprehensive AI Automation Courses',
        'PDF Guides + 24/7 AI Tutor Access',
        'Ready-to-Use Templates & Projects',
        'Real-World Business Case Studies',
        '30-Day Money-Back Guarantee',
        'Free Updates and New Content'
      ]
    },
    vip: {
      name: 'Complete Bundle',
      monthlyPrice: 147,
      annualPrice: 147,
      features: [
        '7 Comprehensive AI Automation Courses',
        'PDF Guides + 24/7 AI Tutor Access',
        'Ready-to-Use Templates & Projects',
        'Real-World Business Case Studies',
        '30-Day Money-Back Guarantee',
        'Free Updates and New Content'
      ]
    }
  };

  const currentPlan = plans[selectedPlan as keyof typeof plans];
  const displayPrice = isAnnual ? currentPlan.annualPrice : currentPlan.monthlyPrice;
  const savings = isAnnual ? Math.round(((currentPlan.monthlyPrice * 12) - currentPlan.annualPrice) / (currentPlan.monthlyPrice * 12) * 100) : 0;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Choose Your Plan</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Select the perfect plan for your AI journey
        </p>
      </div>

      {/* Billing Toggle */}
      <div className="flex items-center justify-center mb-8">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-1 flex">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              !isAnnual
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors relative ${
              isAnnual
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Annual
            {isAnnual && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                Save {savings}%
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Plan Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {Object.entries(plans).map(([key, plan]) => (
          <button
            key={key}
            onClick={() => setSelectedPlan(key)}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedPlan === key
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
            }`}
          >
            <h3 className="font-semibold text-lg mb-2">{plan.name}</h3>
            <div className="text-3xl font-bold mb-2">
              ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
              <span className="text-sm font-normal text-gray-600 dark:text-gray-400">
                /{isAnnual ? 'year' : 'month'}
              </span>
            </div>
            {isAnnual && (
              <div className="text-sm text-green-600 dark:text-green-400">
                Save ${plan.monthlyPrice * 12 - plan.annualPrice}
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Selected Plan Details */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-xl mb-4">{currentPlan.name} Plan Includes:</h3>
        <ul className="space-y-2">
          {currentPlan.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Final Price and CTA */}
      <div className="text-center">
        <div className="text-4xl font-bold mb-2">
          ${displayPrice}
          <span className="text-lg font-normal text-gray-600 dark:text-gray-400">
            /{isAnnual ? 'year' : 'month'}
          </span>
        </div>
        {isAnnual && (
          <div className="text-green-600 dark:text-green-400 font-medium mb-4">
            You save ${currentPlan.monthlyPrice * 12 - currentPlan.annualPrice} per year!
          </div>
        )}
        <a
          href={salesUrl}
          className="inline-flex items-center justify-center w-full h-12 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg hover:opacity-90 transition shadow-lg"
        >
          Get Started with {currentPlan.name}
        </a>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          30-day money-back guarantee • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default PricingSlider;
