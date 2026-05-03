import React, { useState } from 'react';
import { Vote, ChevronDown } from 'lucide-react';
import { PROCESS_STEPS } from '../data/electionData';

export const ProcessStep: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const toggleExpand = (id: number) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <div className="fade-in-up">
      <div className="section-header">
        <div className="section-icon">
          <Vote size={30} />
        </div>
        <h2 className="section-title">Voting Process</h2>
        <p className="section-subtitle">
          Here's exactly what happens on polling day — from arriving at the
          station to casting your vote. Tap any step for more details.
        </p>
      </div>

      <div className="process-steps">
        {PROCESS_STEPS.map((step, index) => {
          const isExpanded = expandedId === step.id;
          return (
            <div
              key={step.id}
              className={`process-step-card glass-card ${isExpanded ? 'expanded' : ''} fade-in-up delay-${Math.min(index + 1, 8)}`}
              onClick={() => toggleExpand(step.id)}
              role="button"
              aria-expanded={isExpanded}
              id={`process-step-${step.id}`}
            >
              <div className="process-step-num">{step.id}</div>
              <div className="process-step-body">
                <h4>{step.title}</h4>
                <p>{step.summary}</p>
                {isExpanded && (
                  <div className="process-step-details">
                    {step.details}
                  </div>
                )}
              </div>
              <ChevronDown size={20} className="process-step-icon" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
