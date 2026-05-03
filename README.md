# Election Assistant

Election Assistant is an interactive web application that guides users through the entire election process in a clear, step-by-step format. Designed with accessibility in mind, it makes complex electoral procedures easy to understand for everyone — from first-time voters to those seeking a quick refresher.

## Features

- **Welcome Overview**: An animated landing page introducing the three core areas — Registration, Timeline, and Voting Process — with a floating icon cluster and gradient visuals.
- **Voter Registration Checklist**: An interactive checklist covering all eligibility requirements (age, citizenship, residency) and required documents (Form 6, photo ID, proof of address). Users can tap items to track their readiness with a live progress bar.
- **Election Timeline**: A visual vertical timeline of all 7 major election phases — from announcement and nomination filing, through scrutiny, withdrawal, campaigning, polling day, to vote counting — each with a status badge (completed, in progress, or upcoming).
- **Step-by-Step Voting Process**: A 7-step expandable accordion walkthrough of polling day — checking registration, locating the polling station, carrying valid ID, arriving at the booth, verification by officers, casting the vote on the EVM, and getting the ink mark.
- **Frequently Asked Questions**: Answers to 8 common questions about elections including voter eligibility, EPIC cards, how EVMs work, VVPAT, the NOTA option, absentee voting rules, and election day dos and don'ts.
- **Audio Narration**: Built-in text-to-speech support via the "Listen" button, which reads out a summary of the current section aloud — making the app accessible to users with low literacy or visual impairments.

## Tech Stack

- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite
- **Styling:** Vanilla CSS with CSS Variables, glassmorphism design system, and micro-animations
- **Icons:** Lucide React
- **Audio:** Web Speech Synthesis API (browser-native text-to-speech)

## Getting Started

Follow these steps to run Election Assistant locally.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd election-assistant
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`).

## Deployment

Election Assistant is configured for containerized deployment on GCP Cloud Run using a multi-stage Docker build and Nginx.

### Deploying to GCP Cloud Run

1. **Authenticate with Google Cloud:**
   ```bash
   gcloud auth login
   gcloud config set project YOUR_PROJECT_ID
   ```

2. **Build and Deploy:**
   Use the `gcloud run deploy` command to build the Docker image using Cloud Build and deploy it to Cloud Run in one step:
   ```bash
   gcloud run deploy election-assistant \
     --source . \
     --port 8080 \
     --allow-unauthenticated \
     --region us-central1
   ```
   *Note: Replace `YOUR_PROJECT_ID` and `us-central1` with your actual GCP project ID and preferred region.*

## Project Structure

The codebase is organized modularly for clarity:

- `src/components/` — Reusable UI components (StepIndicator, Navigation).
- `src/steps/` — Individual step pages (WelcomeStep, RegistrationStep, TimelineStep, ProcessStep, FAQStep).
- `src/data/` — Election content data including timeline events, process steps, registration checklist, and FAQ entries.
- `src/index.css` — Global design system with CSS variables, animations, and glassmorphism tokens.
- `src/App.css` — Component-level styles for layout, cards, timeline, and responsive breakpoints.

## Design Aesthetic & Responsiveness

Election Assistant features a premium **dark-mode glassmorphism** design — with semi-transparent cards, backdrop blur, animated gradient backgrounds, and smooth staggered entrance animations. The UI is fully responsive across mobile phones, tablets, and desktops, with optimized spacing, font scales, and touch-friendly interactive elements.
