import React from 'react';
import { Vote, ClipboardCheck, CalendarClock, ShieldCheck, Sparkles } from 'lucide-react';

export const WelcomeStep: React.FC = () => {
  return (
    <div className="hero-section fade-in-up">
      <div className="hero-icon-cluster">
        <div className="hero-orbit">
          <div className="hero-orbit-dot"><ClipboardCheck size={16} /></div>
          <div className="hero-orbit-dot"><CalendarClock size={16} /></div>
          <div className="hero-orbit-dot"><ShieldCheck size={16} /></div>
          <div className="hero-orbit-dot"><Sparkles size={16} /></div>
        </div>
        <div className="hero-icon-main">
          <Vote size={48} />
        </div>
      </div>

      <h1 className="hero-title">
        Your <span className="gradient-text">Election</span><br />
        Assistant
      </h1>

      <p className="hero-desc">
        Navigate the entire election process with confidence. From voter registration
        to casting your ballot — we'll guide you through every step, timeline, and
        requirement in a clear, interactive way.
      </p>

      <div className="hero-features">
        <div className="hero-feature-card glass-card fade-in-up delay-2">
          <div className="hero-feature-icon indigo">
            <ClipboardCheck size={22} />
          </div>
          <h3 className="hero-feature-title">Registration Guide</h3>
          <p className="hero-feature-desc">
            Check eligibility and learn how to register as a voter
          </p>
        </div>

        <div className="hero-feature-card glass-card fade-in-up delay-3">
          <div className="hero-feature-icon emerald">
            <CalendarClock size={22} />
          </div>
          <h3 className="hero-feature-title">Election Timeline</h3>
          <p className="hero-feature-desc">
            Follow every phase from announcement to results
          </p>
        </div>

        <div className="hero-feature-card glass-card fade-in-up delay-4">
          <div className="hero-feature-icon amber">
            <Vote size={22} />
          </div>
          <h3 className="hero-feature-title">Voting Process</h3>
          <p className="hero-feature-desc">
            Step-by-step walkthrough of what happens on polling day
          </p>
        </div>
      </div>
    </div>
  );
};
