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
  {
    "category": "AB",
    "name": "Impact over Output",
    "definition": "Hoped for: Proficient teaching. Rewarded: High publication count. Alignment Failure: Overemphasis on visible metrics. Teaching quality is harder to measure objectively compared to publications. Reversed: Reward long-term impact and originality. This can include metrics such as student outcomes or impact factors of journals.",
    "human": "Students take time to understand material and collaborate interdisciplinarily.",
    "organizational": "Universities prioritize social impact of the area and country. ",
    "professional": "Reviewers push novel, reproducible research to journal publication status.",
    "machine": "AI models prioritize rigor of ideas over length of ideas.",
    "failureModes": {
      "human": "Students optimize their resumes instead of creating valuable projects.",
      "organizational": "Universities inflate rankings by valuing publication quantity.",
      "professional": "Reviewers favor 'safe' research that sounds flashy in headlines.",
      "machine": "AI models optimize for token count usage to appear highly used."
    }
  },
  {
    "category": "AB",
    "name": "Cs Get Degrees",
    "definition": "Hoped for: Curiosity and deep understanding. Rewarded: High test scores. Alignment Failure: Fascination with objective criterion: Systems correlate high test grades with understanding of material when its not necessarily true; understanding is hard to objectively measure compared to scores. Reversed: Increase emphasis on novel applications of knowledge. Examples include real-life scenarios and projects.",
    "human": "Stuednts receive constructure feedback on assignments.",
    "organizational": "Adopting initiatives that encourage systematic change within education modules.",
    "professional": "Educators design project-based curriculums based on real-world experience.",
    "machine": "AI models walk users through solutions.",
    "failureModes": {
      "human": "Students cram and memorize concepts for exams over true understanding of material.",
      "organizational": "Institutions push out elearning modules that can be completed within minutes with prior knowledge.",
      "professional": "Teachers 'teach to the test'",
      "machine": "AI models provide answers without explanation."
    }
  },
  {
    "category": "AB",
    "name": "Appeal to People, Not Polls",
    "definition": "Hoped for: Operative Goals. Rewarded: Official Goals. Alignment Failure: Emphasis on morality than efficiency: broad objectives with little impact receive more support than narrow objectives with meaningful change. Reversed: Mandate disclosure of operative goals. Examples include pressing politicians for operative goals and their justification for it through the press.",
    "human": "Citizens support political literacy over sesationalist news cycles.",
    "organizational": "News media organizations ask difficult questions to politicians instead of softballs.",
    "professional": "Politicians become willing to have difficult conversations with elecorate.",
    "machine": "AI models support the long-term improvement of policy instead of immediate approval ratings.",
    "failureModes": {
      "human": "Voters reward charisma and catchy slogans with unfeasible campaign promises.",
      "organizational": "Government agencies chase cosmetic projects to please electorate.",
      "professional": "Policy advisors tailor campaigns to headlines rather than for the prosperity of the country.",
      "machine": "AI models tell voters and officials what they 'want to hear' versus what is best for them."
    }
  },
   
   
]
