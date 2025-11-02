export const categories = [
  {
    "code": "AP", 
    "name": "Alignment Principles", 
    "pathology": "normative void", 
    "color": "#E6FFE9",
    "description": "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
  },
  {
    "code": "AB", 
    "name": "Rewarding A, hoping for B", 
    "pathology": "", 
    "color": "#E6FFE9",
    "description": ""
  },
  {
    "code": "AT", 
    "name": "Alignment Traits", 
    "pathology": "", 
    "color": "#E6FFE9",
    "description": ""
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
  {
  "category": "AT",
  "name": "Epistemic Humility",
  "definition": "Knowing the limits of one's knowledge",
  "people": "When people admit to uncertainty and defer to others when faced with making decisions with an incomplete understanding.",
  "peopleref": "",
  "organizational": "Deferring to leadership and reporting uncertainty rather than acting the opposite.",
  "organizationalref": "",
  "professionals": "In publications or press talks, acknowledging the limitations of designs instead of hiding them.",
  "professionalref": "",
  "machine": "Admitting to not having the answer when asked a difficult question and deferring to humans when uncertain.",
  "machineref": "",
  "failureModes": {
    "human": "Overconfidence and confirmation bias, a wrong undertstanding is used to inform decisions",
    "organizational": "The misconceptions or incorrect information is passed up the ladder and is used to make big decisions",
    "experts": "People are hurt because something that was once a certainty is maybe not true (e.g. the claim that vaccines cause autism)",
    "machine": "Hallucination; people are fed wrong information because models are trained to always give answers."
  },
     "expand": {
    "human": "The bounds are an individual human's knowledge is very limited, and recognizing that one might not know something can be a good first step in making an informed decision on personal matters.",
    "organizational": "In an organization, there can be pressure to report favorable results to the company which can later be used to show investors a good performance chart. However, when employees make these 'innocent' adjustments to data, the change propogated all the way to the top of the company and may be used to inform very important decisions.",
    "experts": "Experts have the authority to affect many lives as their voices are magnified in society. It is important for an expert to be transparent with the public rather than act like they have every answer. ",
    "machine": "Machines have difficulty admitting uncertainty because it seldom happens in their training data. Instead of reporting information it knows is wrong, it is better for it to defer to humans."
  },
  {
  "category": "AT",
  "name": "Role fidelity",
  "definition": "Adhering to the scope of one's role, performing duties faithfully and staying within bounds.",
  "people": "Individuals adhere to their responsibilities and avoid getting 'in over their heads'",
  "peopleref": "",
  "organizational": "A workers performs the tasks in their job descriptions as assigned.",
  "organizationalref": "",
  "professionals": "Experts practice in their licensed area without trying to extrapolate their knowledge to other subjects in which they do not hold expertise.",
  "professionalref": "",
  "machine": "Machines perform the task that is given without trying to do excess that may not be required",
  "machineref": "",
  "failureModes": {
    "human": "When people misrepresent themselves to others and are stuck in uncomfortable situations.",
    "organizational": "When a worker lies about their capabilities and cannot perform the functions of their job.",
    "experts": "When unlicensed healthcare workers give medical advice when it is not their place (chiropractors).",
    "machine": "Machines that try to go 'above and beyond' in their duties but may end up causing problems because of an adverse side effect of their actions."
  },
     "expand": {
    "human": "Humans may often try to misrepresent themselves to others to make themselves appear better socially. However, this can have downstream consequences if every checked for legitimacy.",
    "organizational": "Organizations have an incentive to hold onto people who perform their role at a very high level while sticking to its scope. Not questioning management and faithfully carrying out duties is desirable.",
    "experts": "Experts are individuals who are licensed to reflect a body of knowledge onto others. It is important they know where their knowledge ends so that we can be confident about what they are saying.",
    "machine": "Machines are often really specialized in their tasks. As they are not capable of true learning, straying outside of their domain can have extreme negative consequences."
},
{
  "category": "AT",
  "name": "Reliability/Consistency",
  "definition": "Delivering the same quality of behavior over time.",
  "people": "Individuals who are predictable: they keep promises and maintain routines.",
  "peopleref": "",
  "organizational": "Organizations product outputs and working conditions that regular: they do not change wildly and can be depended on to produce the same quality over time.",
  "organizationalref": "",
  "professionals": "Professionals who consistently adhere to laws and regulations to produce high level outputs.",
  "professionalref": "",
  "machine": "Poducing the same/similar good response when asked multiple times.",
  "machineref": "",
  "failureModes": {
  "human": "An individual may miss deadlines, skip events, and negatively effect their relationships.",
  "organizational": "The public/leadership loses trust in the company/worker because they cannot be relied on to product a consistent product.",
  "experts": "The public loses trust and is harmed because they expected a certain level of accuracy.",
  "machine": "Machines may start spewing harmful information occassionally."
  },
   "expand": {
  "human": "Individuals that maintain schedules and routines can be trusted to do a particular thing on a particular day. They are easy to predict and will generally not encounter unique challenges day-to-day.",
  "organizational": "Organizations need to maintain a certain level of quality to their work so that they gain brand loyalty with their consistency and reliability of products.",
  "experts": "Experts rely on having public trust which they gain off of being reliable and consistent. When this trust is lost, the expert's career can suffer.",
  "machine": "Machines are generally trusted to be correct. So when reliability or consistency is sacrificed, individuals don't realize the mismatch and operate based on the incorrect information."
},
{
  "category": "AT",
  "name": "Trustworthiness",
  "definition": "The expectation that an agent will act honestly and responsibly even at a detriment to themselves",
  "people": "",
  "peopleref": "",
  "organizational": "",
  "organizationalref": "",
  "professionals": "",
  "professionalref": "",
  "machine": "",
  "machineref": "",
  "failureModes": {
  "human": "",
  "organizational": "",
  "experts": "",
  "machine": ""
  },
   "expand": {
  "human": "",
  "organizational": "",
  "experts": "",
  "machine": ""
},
{
  "category": "AT",
  "name": "Shared Intentionality",
  "definition": "The ability to align oneself towards a common goal and maintain an understanding of the objective even without explicit details",
  "people": "",
  "peopleref": "",
  "organizational": "",
  "organizationalref": "",
  "professionals": "",
  "professionalref": "",
  "machine": "",
  "machineref": "",
  "failureModes": {
  "human": "",
  "organizational": "",
  "experts": "",
  "machine": ""
  },
   "expand": {
  "human": "",
  "organizational": "",
  "experts": "",
  "machine": ""
},
{
  "category": "AT",
  "name": "Considerateness",
  "definition": "Proactively accounting for the visible and invisible needs of others even when at a detriment to themselves.",
  "people": "",
  "peopleref": "",
  "organizational": "",
  "organizationalref": "",
  "professionals": "",
  "professionalref": "",
  "machine": "",
  "machineref": "",
  "failureModes": {
  "human": "",
  "organizational": "",
  "experts": "",
  "machine": ""
  },
   "expand": {
  "human": "",
  "organizational": "",
  "experts": "",
  "machine": ""
}
   
   
]
