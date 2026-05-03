import React from 'react';
import { Vote, ClipboardCheck, CalendarClock, HelpCircle, ChevronRight } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  onStepClick: (step: number) => void;
}

const STEPS = [
  { icon: Vote, label: 'Welcome' },
  { icon: ClipboardCheck, label: 'Register' },
  { icon: CalendarClock, label: 'Timeline' },
  { icon: ChevronRight, label: 'Process' },
  { icon: HelpCircle, label: 'FAQ' },
];

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, onStepClick }) => {
  return (
    <div className="step-bar">
      {STEPS.map((step, index) => {
        const Icon = step.icon;
        const isActive = currentStep === index;
        const isCompleted = currentStep > index;

        return (
          <React.Fragment key={index}>
            <button
              className={`step-node ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
              onClick={() => onStepClick(index)}
              aria-label={`Go to step: ${step.label}`}
              id={`step-indicator-${index}`}
            >
              <Icon size={20} />
              <span className="step-node-label">{step.label}</span>
            </button>
            {index < STEPS.length - 1 && (
              <div className={`step-connector ${isCompleted ? 'done' : ''}`} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
