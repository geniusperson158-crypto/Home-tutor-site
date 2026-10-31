export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  gradeSubject: string;
  headline: string;
  quote: string;
  rating: number;
  location: string;
  outcome: string;
  date?: string;
  verified?: boolean;
  upvotes?: number;
  tutorName?: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-01",
    author: "Sneha & Rajesh Deshmukh",
    role: "Parents of 10th Grader",
    gradeSubject: "Grade 10 · ICSE Chemistry & Mathematics",
    headline: "Went from preliminary test anxiety to confident problem-solving.",
    quote: "Finding our tutor through TutorNest was the turning point of 10th grade. Having a verified educator sit at our study table in Vashi twice a week removed the stress. Our son now approaches board papers with clear conceptual understanding and speed.",
    rating: 5,
    location: "Vashi, Navi Mumbai",
    outcome: "+22% score improvement in board prelims",
    date: "October 2026",
    verified: true,
    upvotes: 34,
    tutorName: "Prof. Arvind Rao"
  },
  {
    id: "test-02",
    author: "Priya & Amit Sharma",
    role: "Parents of 8th Grader",
    gradeSubject: "Grade 8 · CBSE Mathematics & Science",
    headline: "The in-home personalized dynamic makes all the difference.",
    quote: "Crowded coaching classes in Nerul just weren't working for Maya. Her home tutor identified foundational doubts in fractions and algebra immediately. Within 8 weeks, she was scoring at the top of her class and actually enjoying homework.",
    rating: 5,
    location: "Nerul, Navi Mumbai",
    outcome: "Ranked top 5 in school term assessments",
    date: "September 2026",
    verified: true,
    upvotes: 28,
    tutorName: "Meera Subramanian"
  },
  {
    id: "test-03",
    author: "Dr. Vikram Kulkarni",
    role: "Parent of 12th Grader",
    gradeSubject: "Grade 12 · HSC Physics & Mathematics",
    headline: "Rigorous, punctual, and truly inspiring home mentorship.",
    quote: "Our tutor didn't just teach formulas; he elevated our son's analytical speed and numerical discipline. The weekly progress debriefs gave us complete peace of mind right here in Kharghar without any stressful commutes.",
    rating: 5,
    location: "Kharghar, Navi Mumbai",
    outcome: "94% score in Physics board examinations",
    date: "August 2026",
    verified: true,
    upvotes: 42,
    tutorName: "Dr. Arthur Pendelton"
  },
  {
    id: "test-04",
    author: "Sunita & Deepak Mehta",
    role: "Parents of 6th Grader",
    gradeSubject: "Grade 6 · English & Social Studies",
    headline: "Patient, encouraging, and excellent at building reading habits.",
    quote: "Our daughter used to resist reading and struggled with descriptive answers. Her tutor turned history lessons into vivid storytelling sessions. We noticed a dramatic improvement in her vocabulary and semester grades.",
    rating: 5,
    location: "Seawoods, Navi Mumbai",
    outcome: "A+ grade in term literature & essay evaluations",
    date: "October 2026",
    verified: true,
    upvotes: 19,
    tutorName: "Kavita Nair"
  },
  {
    id: "test-05",
    author: "Kavita & Manoj Joshi",
    role: "Parents of 9th Grader",
    gradeSubject: "Grade 9 · CBSE Biology & Chemistry",
    headline: "Demystified complex science concepts with clear diagram practice.",
    quote: "Science tests were causing constant anxiety before exams. The 1-on-1 attention allowed our son to ask questions freely without hesitation. The tutor's structured revision sheets made midterm preparation completely stress-free.",
    rating: 5,
    location: "CBD Belapur, Navi Mumbai",
    outcome: "Boosted science marks from 64% to 88%",
    date: "September 2026",
    verified: true,
    upvotes: 23,
    tutorName: "Sanjay Iyer"
  },
  {
    id: "test-06",
    author: "Anjali & Suresh Nair",
    role: "Parents of 11th Grader",
    gradeSubject: "Grade 11 · Computer Science (Python) & Maths",
    headline: "Outstanding mentor who ignited a genuine passion for coding.",
    quote: "Finding an experienced home tutor who truly knows modern programming in Python was challenging until TutorNest. The tutor helped our daughter build real algorithmic logic and excel in her school practical lab exams.",
    rating: 5,
    location: "Sanpada, Navi Mumbai",
    outcome: "Perfect 100/100 score in school Python practicals",
    date: "July 2026",
    verified: true,
    upvotes: 31,
    tutorName: "Rohan Varma"
  }
];
