import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

interface NavigationProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onBack: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentStep, totalSteps, onNext, onBack }) => {
  const isFirst = currentStep === 0;
  const isLast = currentStep === totalSteps - 1;

  return (
    <div className="nav-footer">
      <button
        className="nav-btn prev"
        onClick={onBack}
        disabled={isFirst}
        aria-label="Previous step"
        id="nav-prev-btn"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <span className="nav-progress">
        {currentStep + 1} / {totalSteps}
      </span>

      <button
        className="nav-btn next"
        onClick={onNext}
        disabled={isLast}
        aria-label={isLast ? 'Complete' : 'Next step'}
        id="nav-next-btn"
      >
        {isLast ? (
          <>
            Done
            <CheckCircle size={18} />
          </>
        ) : (
          <>
            Next
            <ArrowRight size={18} />
          </>
        )}
      </button>
    </div>
  );
};
