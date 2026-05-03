import React from 'react';
import { CalendarClock } from 'lucide-react';
import { TIMELINE_EVENTS } from '../data/electionData';

export const TimelineStep: React.FC = () => {
  return (
    <div className="fade-in-up">
      <div className="section-header">
        <div className="section-icon">
          <CalendarClock size={30} />
        </div>
        <h2 className="section-title">Election Timeline</h2>
        <p className="section-subtitle">
          Follow the journey from election announcement to final results.
          Each phase has specific activities and deadlines.
        </p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line" />

        {TIMELINE_EVENTS.map((event, index) => (
          <div
            key={event.id}
            className={`timeline-item ${event.status === 'current' ? 'active' : ''} ${event.status === 'past' ? 'past' : ''} fade-in-up delay-${Math.min(index + 1, 8)}`}
          >
            <div className="timeline-dot" />
            <div className="timeline-card glass-card">
              <div className="timeline-date">{event.date}</div>
              <h4>{event.title}</h4>
              <p>{event.description}</p>
              <span className={`timeline-tag ${event.status === 'past' ? 'done' : event.status === 'current' ? 'current' : 'upcoming'}`}>
                {event.status === 'past' ? '✓ Completed' : event.status === 'current' ? '● In Progress' : '○ Upcoming'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
