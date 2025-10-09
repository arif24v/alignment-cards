export const categories = [
  {
    "code": "AP", 
    "name": "Alignment Principles", 
    "pathology": "normative void", 
    "color": "#E6FFE9",
    "description": "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
  }
];
 export const cards = [
  {
    "category": "AP",
    "name": "Transparency and Explainability",
    "definition": "Make decisions and processes visible and understandable for users.",
    "human": "Share reasoning, show work, and admit uncertainty when choices affect others.",
    "organizational": "Publish policies and impact assessments; record major decisions and data.",
    "professional": "Document methods, assumptions, and limitations.",
    "machine": "Provide 'chain of thought', input/output logs, and a mathematical snapshot of how a decision was realized.",
    "failureModes": {
      "human": "When someone says 'because I said so' as reasoning.",
      "organizational": "When policies change quietly without alerting consumers or workers know.",
      "professional": "An expert who doesn't perform the required stress calculations for a building. ",
      "machine": "A medical AI denying insurance claims with one word responses."
    }
  },
  {
    "category": "AP",
    "name": "Accountability",
    "definition": "Assign responsibility and consequences for decisions and harms.",
    "human": "Own outcomes, disclose conflicts, and remediate mistakes.",
    "organizational": "Leave clear documentation of decision pathawys and protocols. Make sure every step in the hierarchy is accounted for and isn't skipped.",
    "professional": "Adhere to codes of conduct and submit to peer review.",
    "machine": "Maintain logs of decisions and version control history of models.",
    "failureModes": {
      "human": "When people start playing 'the blame game' and refusing to own up to a mistake.",
      "organizational": "Outsourcing decisions to third parties so they technically aren't responsible.",
      "professional": "Taking safety shortcuts to meet a deadline.",
      "machine": "Actions can't be traced to a specific conversation or model version."
    }
  },
  {
    "category": "AP",
    "name": "Fairness and Non-Discrimination",
    "definition": "Ensure people are treated fairly, with equal consideration",
    "human": "Avoid biasful judgements, including unconscious systematic bias.",
    "organizational": "Create inclusive products and systems, testing for impact on marginalized communities.",
    "professional": "Report and conduct studies on metrics comparing data between groups to ensure fairness.",
    "machine": "Use representative data and monitor outcomes in testing.",
    "failureModes": {
      "human": "Making judgements about a group of people purely based on skin color",
      "organizational": "Favoring one candidate for promotion over another because they have the same religion as the manager.",
      "professional": "Feeding a model data that underrepresents a certain group.",
      "machine": "Content moderation tends to removes posts in a certain dialect."
    }
  },
  {
    "category": "AP",
    "name": "Privacy",
    "definition": "Respect people’s control over their data and minimize exposure.",
    "human": "Share only what’s necessary. Don't gossip about others' business.",
    "organizational": "Data collection minimization, consent, retention limits, and secure processing.",
    "professional": "Censor data when necessary to protect confidentiality.",
    "machine": "Local storage of PII and promoting deletion of sever-based data.",
    "failureModes": {
      "human": "Forwarding private emails to a group chat.",
      "organizational": "Creating and selling a huge database of consumer information without consent.",
      "professional": "Publishing a review article without removing the names of patients.",
      "machine": "A model spits out someone's SSN to a different user."
    }
  },
  {
    "category": "AP",
    "name": "Safety and Security",
    "definition": "Perform reliably under noise without causing undue harm.",
    "human": "Verify before acting under stress. Practice failure drills.",
    "organizational": "Prepare for threats and training employees while also implementing physical safeguards.",
    "professional": "Report uncertainty and make sure tests are repeatable.",
    "machine": "Defend against data breaches. Do not suggest harmful actions to users.",
    "failureModes": {
      "human": "Falls for a phising email.",
      "organizational": "A ransomware attack leaves the whole company in a stalemate.",
      "professional": "Ignoring edge cases when shipping a product.",
      "machine": "Offers to give instructions to a user on how to build explosives."
    }
  },
  {
    "category": "AP",
    "name": "Non-Maleficence",
    "definition": "Do not cause harm and prevent it when possible.",
    "human": "Take a moment before doing something and consider the impact on others.",
    "organizational": "Assess risks before committing a deployment or change in policy.",
    "professional": "Identify pitfalls and refuse unsafe requests.",
    "machine": "Admit when uncertain. Obey safety constraints and detect/report hazardous conditions.",
    "failureModes": {
      "human": "Spreading gossip that may not be true.",
      "organizational": "Releasing a feature that may cause users to lose access to their accounts.",
      "professional": "Approving a design knowing that it will fail because the deadline is tomorrow.",
      "machine": "A navigation AI paths through sidewalks to reach its destination in the fastest time."
    }
  },
   
   
]
