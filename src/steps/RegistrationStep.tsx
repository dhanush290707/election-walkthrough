import React, { useState } from 'react';
import { ClipboardCheck, Check, Circle } from 'lucide-react';
import { REGISTRATION_CHECKLIST } from '../data/electionData';

export const RegistrationStep: React.FC = () => {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setChecked(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const progress = Math.round((checked.size / REGISTRATION_CHECKLIST.length) * 100);

  return (
    <div className="fade-in-up">
      <div className="section-header">
        <div className="section-icon">
          <ClipboardCheck size={30} />
        </div>
        <h2 className="section-title">Voter Registration</h2>
        <p className="section-subtitle">
          Make sure you meet all requirements and have the necessary documents
          to register as a voter. Tap each item to mark it as complete.
        </p>
      </div>

      {/* Progress bar */}
      <div style={{
        maxWidth: 700,
        margin: '0 auto var(--space-8)',
        padding: '0 var(--space-4)',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 'var(--space-2)',
          fontSize: '0.8rem',
          fontWeight: 600,
        }}>
          <span style={{ color: 'var(--color-text-secondary)' }}>Checklist Progress</span>
          <span style={{ color: progress === 100 ? 'var(--emerald-400)' : 'var(--indigo-400)' }}>
            {progress}%
          </span>
        </div>
        <div style={{
          height: 6,
          borderRadius: 'var(--radius-full)',
          background: 'var(--color-surface)',
          overflow: 'hidden',
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            borderRadius: 'var(--radius-full)',
            background: progress === 100
              ? 'linear-gradient(90deg, var(--emerald-500), var(--emerald-400))'
              : 'linear-gradient(90deg, var(--indigo-500), var(--violet-500))',
            transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          }} />
        </div>
      </div>

      <div className="checklist-grid">
        {REGISTRATION_CHECKLIST.map((item, index) => {
          const isDone = checked.has(item.id);
          return (
            <div
              key={item.id}
              className={`checklist-item glass-card fade-in-up delay-${index + 1}`}
              onClick={() => toggleItem(item.id)}
              role="checkbox"
              aria-checked={isDone}
              id={`checklist-${item.id}`}
            >
              <div className={`checklist-icon ${isDone ? 'done' : 'pending'}`}>
                {isDone ? <Check size={20} /> : <Circle size={20} />}
              </div>
              <div className="checklist-text">
                <h4 style={isDone ? { textDecoration: 'line-through', opacity: 0.6 } : {}}>
                  {item.title}
                </h4>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
