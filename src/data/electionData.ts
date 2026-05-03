export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  status: 'past' | 'current' | 'upcoming';
}

export interface ProcessStep {
  id: number;
  title: string;
  summary: string;
  details: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ChecklistItem {
  id: string;
  title: string;
  description: string;
}

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'announcement',
    date: 'Day 1 — Announcement',
    title: 'Election Announcement',
    description: 'The Election Commission officially announces election dates, schedules, and the Model Code of Conduct comes into effect for all political parties.',
    status: 'past',
  },
  {
    id: 'nomination',
    date: 'Day 7–14 — Filing',
    title: 'Nomination Filing',
    description: 'Candidates file their nomination papers along with required documents, affidavits, and security deposits at the designated returning officer\'s office.',
    status: 'past',
  },
  {
    id: 'scrutiny',
    date: 'Day 15 — Scrutiny',
    title: 'Scrutiny of Nominations',
    description: 'The returning officer examines all nominations, verifies eligibility, checks documents, and rejects any invalid or incomplete nominations.',
    status: 'past',
  },
  {
    id: 'withdrawal',
    date: 'Day 17 — Withdrawal',
    title: 'Last Date of Withdrawal',
    description: 'Candidates who wish to withdraw from the election can do so before the deadline. The final list of contesting candidates is published.',
    status: 'current',
  },
  {
    id: 'campaign',
    date: 'Day 18–30 — Campaigning',
    title: 'Election Campaign Period',
    description: 'Political parties and candidates campaign through rallies, advertisements, door-to-door visits, and media outreach. Campaigning must stop 48 hours before polling.',
    status: 'upcoming',
  },
  {
    id: 'polling',
    date: 'Day 32 — Polling Day',
    title: 'Voting Day',
    description: 'Registered voters cast their votes at assigned polling stations using Electronic Voting Machines (EVMs). Voting is typically held from 7 AM to 6 PM.',
    status: 'upcoming',
  },
  {
    id: 'counting',
    date: 'Day 35 — Counting',
    title: 'Vote Counting & Results',
    description: 'Votes are counted at designated centers. Results are announced constituency by constituency. The candidate with the most votes is declared the winner.',
    status: 'upcoming',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'Check Your Voter Registration',
    summary: 'Verify that your name appears on the electoral roll.',
    details: 'Visit the Election Commission website or your local electoral office to confirm your registration. You will need your name, age, and address to search. If not registered, you can apply using Form 6 before the deadline.',
  },
  {
    id: 2,
    title: 'Locate Your Polling Station',
    summary: 'Find out where you need to go to cast your vote.',
    details: 'Your voter ID card or the election commission website will show your assigned polling booth. Make note of the address and plan your travel. Polling stations are usually within 2 km of your residence.',
  },
  {
    id: 3,
    title: 'Carry Valid Identification',
    summary: 'Bring your Voter ID card or an approved photo ID.',
    details: 'Acceptable IDs include: Voter ID Card (EPIC), Passport, Driving License, Aadhaar Card, PAN Card, or any government-issued photo ID. At least one valid ID is mandatory to vote.',
  },
  {
    id: 4,
    title: 'Arrive at the Polling Station',
    summary: 'Go to your assigned polling station during voting hours.',
    details: 'Polling is typically from 7:00 AM to 6:00 PM. Arrive early to avoid long queues. If you are in the queue before closing time, you will be allowed to vote regardless of the time.',
  },
  {
    id: 5,
    title: 'Verification by Poll Officers',
    summary: 'Present your ID for verification at the check-in desk.',
    details: 'The presiding officer or polling agent will verify your identity against the electoral roll. Your finger will be checked under UV light for any existing ink mark to prevent double voting.',
  },
  {
    id: 6,
    title: 'Cast Your Vote',
    summary: 'Enter the booth and press the button next to your chosen candidate.',
    details: 'Use the Electronic Voting Machine (EVM) to cast your vote. Press the button next to the candidate or party symbol of your choice. A beep sound and a light confirm that your vote has been recorded. You can also verify your vote on the VVPAT slip.',
  },
  {
    id: 7,
    title: 'Get the Ink Mark',
    summary: 'Indelible ink is applied to your finger as proof of voting.',
    details: 'After casting your vote, indelible ink will be applied to your left index finger. This mark prevents duplicate voting and typically lasts for 2-4 weeks. You are now done — congratulations on participating in democracy!',
  },
];

export const REGISTRATION_CHECKLIST: ChecklistItem[] = [
  {
    id: 'age',
    title: 'Age Eligibility',
    description: 'You must be 18 years or older on the qualifying date (January 1st of the year of revision of electoral roll).',
  },
  {
    id: 'citizenship',
    title: 'Citizenship',
    description: 'You must be a citizen of the country. Non-citizens and persons disqualified by law cannot register.',
  },
  {
    id: 'residence',
    title: 'Proof of Residence',
    description: 'You need to provide proof that you are an ordinary resident of the constituency where you wish to register.',
  },
  {
    id: 'form',
    title: 'Fill Registration Form',
    description: 'Complete Form 6 (for new voters) online or at the electoral registration office with supporting documents.',
  },
  {
    id: 'photo',
    title: 'Passport-Size Photo',
    description: 'Submit a recent passport-size photograph along with your registration application form.',
  },
  {
    id: 'id-proof',
    title: 'Identity Proof',
    description: 'Provide a valid government-issued ID such as Aadhaar, Passport, or Driving License for verification.',
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'who-can-vote',
    question: 'Who is eligible to vote in elections?',
    answer: 'Any citizen who is 18 years or older on the qualifying date and is registered as a voter in the electoral roll is eligible to vote. You must not be disqualified under any law due to unsoundness of mind, crime, or corrupt/illegal practices.',
  },
  {
    id: 'how-to-register',
    question: 'How do I register as a voter?',
    answer: 'You can register online through the Election Commission\'s National Voter Service Portal (NVSP) or by visiting your nearest Electoral Registration Office. Fill out Form 6 for new registration along with proof of age, identity, and address.',
  },
  {
    id: 'what-is-epic',
    question: 'What is an EPIC / Voter ID Card?',
    answer: 'EPIC stands for Electors Photo Identity Card. It is the official photo identity document issued by the Election Commission to all registered voters. While not mandatory to vote (other IDs are accepted), it is the primary proof of voter registration.',
  },
  {
    id: 'evm-explained',
    question: 'What is an EVM and how does it work?',
    answer: 'An Electronic Voting Machine (EVM) is a device used for recording votes. It has a ballot unit displaying candidate names and symbols, and a control unit operated by the presiding officer. Voters press the button next to their chosen candidate. The machine is tamper-proof and runs on a battery.',
  },
  {
    id: 'what-is-vvpat',
    question: 'What is VVPAT?',
    answer: 'Voter Verifiable Paper Audit Trail (VVPAT) is a machine attached to the EVM that prints a paper slip showing the candidate name and symbol you voted for. The slip is visible for 7 seconds through a window before it drops into a sealed box, allowing you to verify your vote.',
  },
  {
    id: 'nota-option',
    question: 'What is the NOTA option?',
    answer: 'NOTA stands for "None Of The Above." It is the last option on the EVM ballot unit, allowing voters to officially register their disapproval of all contesting candidates without their vote being invalid.',
  },
  {
    id: 'absentee-voting',
    question: 'Can I vote if I am away from my constituency?',
    answer: 'Currently, you must vote at your assigned polling station in the constituency where you are registered. If you have moved, you should transfer your registration to your new address using Form 6A. Postal ballots are available for certain categories like service voters and senior citizens above 80.',
  },
  {
    id: 'election-day-rules',
    question: 'What should I avoid on election day?',
    answer: 'Do not carry mobile phones or cameras inside the polling booth. Do not reveal or discuss your vote inside the station. Do not wear or display any party symbols. Maintain orderly behavior in the queue. Campaigning within 100 meters of a polling station is prohibited.',
  },
];
