export interface FAQItem {
  id: string;
  category: 'Parents & Students' | 'Tutors' | 'Safety & Billing';
  question: string;
  answer: string;
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-01",
    category: "Parents & Students",
    question: "How do I find a home tutor in Navi Mumbai?",
    answer: "You can request verified tutors across Navi Mumbai nodes (Vashi, Nerul, Kharghar, Belapur, Seawoods, Airoli, and more) by selecting your subject and student's class. Compare verified profiles, credentials, and teaching experience. Once ready, click 'Request a Demo' to schedule an introductory trial session directly at your home."
  },
  {
    id: "faq-02",
    category: "Parents & Students",
    question: "Can I request a demo class?",
    answer: "Yes! Every family is entitled to an introductory 45-minute home demo class with your selected tutor. This session allows the student and tutor to meet, assess learning styles, identify foundational gaps, and build a tailored study plan with zero upfront commitment."
  },
  {
    id: "faq-03",
    category: "Safety & Billing",
    question: "How are tutors verified?",
    answer: "Every tutor on TutorNest completes a stringent 4-step vetting pipeline: 1) Identity and nationwide criminal background check, 2) Academic degree and credential verification directly with institutions, 3) 1-on-1 pedagogical interview with our academic board, and 4) Simulated teaching demonstration."
  },
  {
    id: "faq-04",
    category: "Parents & Students",
    question: "What subjects and classes are available?",
    answer: "We support Kindergarten through Grade 12 as well as college preparatory curricula. Subject specializations include Mathematics (Elementary up to AP Calculus BC), General Sciences, Physics, Chemistry, Biology, English Literature & Writing, Computer Science (Python/Java), Social Studies & AP History, and Competitive Exam Prep (Digital SAT, ACT, and APs)."
  },
  {
    id: "faq-05",
    category: "Parents & Students",
    question: "Can I choose my preferred teaching schedule?",
    answer: "Absolutely. Home tutoring is built entirely around your family's schedule. You can specify preferred days (weekdays or weekends) and time slots (afternoons, evenings, or weekend mornings). Your tutor coordinates consistent weekly sessions directly with you."
  },
  {
    id: "faq-06",
    category: "Safety & Billing",
    question: "How are tutoring fees determined?",
    answer: "Tutor rates are completely transparent. Rates typically range between ₹500 and ₹1,000 per hour depending on the tutor's postgraduate qualifications, board exam experience (CBSE, ICSE, State Board), and curriculum tier. We offer both pay-as-you-go hourly billing and discounted monthly packages with no hidden matching fees."
  },
  {
    id: "faq-07",
    category: "Tutors",
    question: "Can tutors apply to join the platform?",
    answer: "Yes, passionate educators with proven teaching experience and verified academic degrees are welcome to apply. Click 'Become a Tutor' to submit your academic background, subject specialties, service locations, and teaching philosophy. Our admissions committee reviews applications within 2 business days."
  },
  {
    id: "faq-08",
    category: "Safety & Billing",
    question: "What if my child does not connect with the tutor?",
    answer: "We offer our 'TutorNest Tutor Guarantee'. If after your initial session you feel the tutor's teaching pace or personality is not an ideal match, we will arrange a complimentary demo session with an alternative specialist without any additional charge."
  }
];
