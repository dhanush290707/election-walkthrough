import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQ_DATA } from '../data/electionData';

export const FAQStep: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="fade-in-up">
      <div className="section-header">
        <div className="section-icon">
          <HelpCircle size={30} />
        </div>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Got questions about voting? Here are answers to the most common
          queries about the election process.
        </p>
      </div>

      <div className="faq-list">
        {FAQ_DATA.map((item, index) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`faq-item glass-card ${isOpen ? 'open' : ''} fade-in-up delay-${Math.min(index + 1, 8)}`}
              onClick={() => toggleFaq(item.id)}
              role="button"
              aria-expanded={isOpen}
              id={`faq-${item.id}`}
            >
              <div className="faq-question">
                <h4>{item.question}</h4>
                <ChevronDown size={20} className="faq-chevron" />
              </div>
              {isOpen && (
                <div className="faq-answer">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
