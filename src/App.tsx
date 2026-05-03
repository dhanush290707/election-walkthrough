import { useState, useCallback } from 'react';
import './App.css';
import { StepIndicator } from './components/StepIndicator';
import { Navigation } from './components/Navigation';
import { WelcomeStep } from './steps/WelcomeStep';
import { RegistrationStep } from './steps/RegistrationStep';
import { TimelineStep } from './steps/TimelineStep';
import { ProcessStep } from './steps/ProcessStep';
import { FAQStep } from './steps/FAQStep';
import { Vote, Volume2, VolumeX } from 'lucide-react';

const TOTAL_STEPS = 5;

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const handleNext = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsAudioPlaying(false);
    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentStep]);

  const handleBack = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsAudioPlaying(false);
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentStep]);

  const handleStepClick = useCallback((step: number) => {
    window.speechSynthesis.cancel();
    setIsAudioPlaying(false);
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleAudioNarration = useCallback(() => {
    if (isAudioPlaying) {
      window.speechSynthesis.cancel();
      setIsAudioPlaying(false);
      return;
    }

    if (!('speechSynthesis' in window)) return;

    const narrations: Record<number, string> = {
      0: 'Welcome to the Election Assistant. This interactive guide will help you understand the entire election process, from voter registration to casting your ballot. Use the navigation buttons to explore each section.',
      1: 'This section covers voter registration requirements. Make sure you meet the age eligibility, citizenship, and residency requirements. You will need to fill the registration form with supporting documents.',
      2: 'Here is the election timeline showing all major phases. From the initial announcement to the final results, each step has specific deadlines and activities.',
      3: 'This section explains the step-by-step voting process on polling day. From checking your registration to getting the ink mark, we cover everything you need to know.',
      4: 'Browse through frequently asked questions about elections. Tap any question to see the detailed answer.',
    };

    const utterance = new SpeechSynthesisUtterance(narrations[currentStep] || '');
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;
    utterance.onstart = () => setIsAudioPlaying(true);
    utterance.onend = () => setIsAudioPlaying(false);
    utterance.onerror = () => setIsAudioPlaying(false);
    window.speechSynthesis.speak(utterance);
  }, [currentStep, isAudioPlaying]);

  const renderStep = () => {
    switch (currentStep) {
      case 0: return <WelcomeStep />;
      case 1: return <RegistrationStep />;
      case 2: return <TimelineStep />;
      case 3: return <ProcessStep />;
      case 4: return <FAQStep />;
      default: return <WelcomeStep />;
    }
  };

  return (
    <div className="app-wrapper">
      {/* Header */}
      <header className="app-header">
        <div className="header-inner">
          <div className="header-brand">
            <div className="header-logo">
              <Vote size={22} />
            </div>
            <span className="header-title">Election Assistant</span>
            <span className="header-badge">Interactive Guide</span>
          </div>

          <button
            className={`audio-toggle-btn ${isAudioPlaying ? 'playing' : ''}`}
            onClick={toggleAudioNarration}
            aria-label={isAudioPlaying ? 'Stop narration' : 'Play narration'}
            id="audio-toggle"
          >
            {isAudioPlaying ? <VolumeX size={16} /> : <Volume2 size={16} />}
            {isAudioPlaying ? 'Stop' : 'Listen'}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="app-main">
        <StepIndicator currentStep={currentStep} onStepClick={handleStepClick} />

        <div key={currentStep}>
          {renderStep()}
        </div>
      </main>

      {/* Navigation Footer */}
      <Navigation
        currentStep={currentStep}
        totalSteps={TOTAL_STEPS}
        onNext={handleNext}
        onBack={handleBack}
      />
    </div>
  );
}

export default App;
