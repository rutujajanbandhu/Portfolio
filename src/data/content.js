export const profile = {
  name: 'Rutuja Janbandhu',
  role: 'AI / ML Engineer',
  roles: ['AI / ML Engineer', 'Voice Agent Builder', 'Data Scientist', 'Full-Stack Engineer'],
  tagline: 'I build intelligent systems — voice agents, RAG pipelines, and ML products that ship.',
  location: 'India',
  email: 'rutujajanbandhu1@gmail.com',
  phone: '+91 92840 02725',
  socials: {
    github: 'https://github.com/rutujajanbandhu',
    linkedin: 'https://www.linkedin.com/in/rutuja-janbandhu',
    email: 'mailto:rutujajanbandhu1@gmail.com'
  }
};

export const about = {
  body: [
    "I'm an AI / ML engineer with a degree in Artificial Intelligence and Data Science from IIT Jodhpur. I work across the stack — from training models to shipping voice agents that talk to real customers.",
    "Currently at Consultadd, I lead the development of AI voice agents on AWS, building end-to-end pipelines using Bedrock, Twilio, ElevenLabs and FastAPI. I care about products that actually work in production."
  ],
  stats: [
    { value: '50–60%', label: 'Prospect reach lift on live campaigns' },
    { value: '15+', label: 'Enterprise clients served' },
    { value: '$8K/mo', label: 'Saved per client in lead-gen costs' },
    { value: '8%', label: 'First-cycle merit increment' }
  ]
};

export const experience = [
  {
    role: 'Associate Software Engineer',
    company: 'Consultadd Private Limited',
    period: 'Jun 2025 — Mar 2026',
    points: [
      'Led AI voice agent development on AWS (Transcribe, Polly, Bedrock, Twilio, FastAPI) reaching 50–60% of prospects.',
      'Selected to pilot AWS Connect for next-generation voice agent infrastructure.',
      'Recognized with an 8% merit-based increment and expanded project ownership in the first cycle.'
    ]
  },
  {
    role: 'B.Tech, Artificial Intelligence & Data Science',
    company: 'Indian Institute of Technology, Jodhpur',
    period: '2021 — 2025',
    points: [
      'Coursework spanning deep learning, graph neural networks, NLP, statistics and systems.',
      'Research-style projects on GNN feature engineering and imbalanced learning.'
    ]
  }
];

export const skills = [
  { group: 'Languages', items: ['Python', 'C++', 'JavaScript', 'SQL'] },
  { group: 'ML / DL', items: ['PyTorch', 'Scikit-learn', 'NLP', 'GNNs'] },
  { group: 'AI & LLMs', items: ['Agentic AI', 'RAG', 'Generative AI', 'Prompt Engineering'] },
  { group: 'Web & Backend', items: ['FastAPI', 'React', 'Node.js', 'WebSocket', 'REST'] },
  { group: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'] },
  { group: 'Databases', items: ['PostgreSQL', 'MongoDB', 'ChromaDB', 'SQL'] }
];

export const projects = [
  {
    name: 'LORO — AI Voice Agent',
    tags: ['AWS Bedrock', 'Twilio', 'ElevenLabs', 'FastAPI'],
    description:
      'AI-powered SDR platform automating outbound sales calls for AWS partners. End-to-end voice pipeline with mid-call Google Calendar booking and automated redial logic.',
    metrics: [
      { label: 'Enterprise clients', value: '12–15' },
      { label: 'Reach lift', value: '50–60%' },
      { label: 'Client savings', value: '$8K/mo' }
    ]
  },
  {
    name: 'Healthcare Voice Agent — AscentBPO',
    tags: ['AWS Transcribe', 'Polly', 'Claude 3.5', 'Pipecat'],
    description:
      'Voice agent automating end-to-end healthcare appointment scheduling. Real-time STT/TTS pipeline with Twilio telephony and Bedrock as the conversational backbone.',
    metrics: [
      { label: 'Booking errors', value: '−15%' },
      { label: 'Latency', value: 'Real-time' }
    ]
  },
  {
    name: 'AI Knowledge Gap Detector',
    tags: ['Python', 'FastAPI', 'ChromaDB', 'RAG'],
    description:
      'RAG system over organizational documentation that answers 80% of queries instantly and surfaces knowledge gaps with built-in analytics.',
    metrics: [
      { label: 'Queries answered', value: '80%' },
      { label: 'Gaps surfaced', value: '5 key' }
    ]
  },
  {
    name: 'Handwritten Digit Recognition (GNN)',
    tags: ['Deep Learning', 'GNN', 'PyTorch'],
    description:
      'Achieved 98% MNIST accuracy and designed a GNN framework that maps pixel clusters as graph nodes for stronger spatial feature representation.',
    metrics: [{ label: 'Accuracy', value: '98%' }]
  },
  {
    name: 'Credit Risk Analysis',
    tags: ['ML', 'SMOTE', 'ANN + SVM'],
    description:
      'Fraud detection on a 0.172% positive-class dataset. Hybrid ANN–SVM model uncovered 3 previously undetected fraud patterns.',
    metrics: [{ label: 'Fraud patterns', value: '+3 new' }]
  },
  {
    name: 'Job Search Portal',
    tags: ['React', 'MERN', 'Cloudinary'],
    description:
      'Full-stack platform connecting job seekers with listings. Built responsive UI in React and cut image load times by 2s via Cloudinary.',
    metrics: [{ label: 'Load time', value: '−2s' }]
  }
];

export const achievements = [
  { title: '8% Merit Increment', detail: 'Recognized for strong first-cycle performance at Consultadd.' },
  { title: 'AWS Connect Pilot', detail: 'Selected to pilot next-gen voice agent infrastructure.' },
  { title: '98% Accuracy on MNIST', detail: 'Custom deep learning + GNN architecture.' },
  { title: 'IIT Jodhpur', detail: 'B.Tech in Artificial Intelligence & Data Science.' }
];
