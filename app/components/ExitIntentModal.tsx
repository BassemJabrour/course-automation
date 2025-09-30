'use client';

import React, { useState, useEffect } from 'react';

interface ExitIntentModalProps {
  salesUrl: string;
}

const ExitIntentModal: React.FC<ExitIntentModalProps> = ({ salesUrl }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [email, setEmail] = useState('');
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    let countdownInterval: NodeJS.Timeout;

    if (isVisible && timeLeft > 0) {
      countdownInterval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      if (countdownInterval) {
        clearInterval(countdownInterval);
      }
    };
  }, [isVisible, timeLeft]);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving towards the top of the screen
      // and hasn't been triggered before
      if (e.clientY <= 0 && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    };

    // Also trigger on beforeunload as backup
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
        // Cancel the default behavior to show modal
        e.preventDefault();
        e.returnValue = '';
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasTriggered]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleClaimOffer = () => {
    // In a real implementation, you'd handle the email submission here
    window.location.href = `${salesUrl}?discount=exit-intent&email=${encodeURIComponent(email)}`;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">🚨 Don't Leave Empty-Handed!</h2>
          <p className="text-red-100">Special exit offer expires soon</p>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-green-600 mb-2">SPECIAL OFFER</div>
            <div className="text-lg mb-4">
              Get complete access for only <span className="font-bold text-green-600">$147</span>
            </div>

            {/* Countdown Timer */}
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 mb-6">
              <div className="text-sm text-red-600 dark:text-red-400 mb-2">⏰ Offer expires in:</div>
              <div className="text-3xl font-bold text-red-600 dark:text-red-400">
                {formatTime(timeLeft)}
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Complete AI Automation Course</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Bonus AI Toolkit ($197 value)</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">30-Day Money-Back Guarantee</span>
              </div>
            </div>
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="exit-email">
              Enter your email to claim this offer:
            </label>
            <input
              type="email"
              id="exit-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:bg-gray-800 dark:text-white"
              required
            />
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleClaimOffer}
              disabled={!email}
              className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              🚨 Get Complete Bundle - $147
            </button>
            <button
              onClick={handleClose}
              className="w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium py-3 px-6 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              No thanks, I'll pay full price later
            </button>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
            * This exclusive offer is only available when you exit this page
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentModal;
