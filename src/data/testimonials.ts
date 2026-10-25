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
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-01",
    author: "Sneha & Rajesh Deshmukh",
    role: "Parents of 10th Grader",
    gradeSubject: "Grade 10 · ICSE Chemistry & Mathematics",
    headline: "Went from preliminary test anxiety to confident problem-solving.",
    quote: "Finding our tutor through TutorNest was the turning point of 10th grade. Having a verified educator sit at our study table in Vashi twice a week removed the stress. Our son now approaches board papers with clear understanding.",
    rating: 5,
    location: "Vashi, Navi Mumbai",
    outcome: "+22% score improvement in board prelims"
  },
  {
    id: "test-02",
    author: "Priya & Amit Sharma",
    role: "Parents of 8th Grader",
    gradeSubject: "Grade 8 · CBSE Mathematics & Science",
    headline: "The in-home personalized dynamic makes all the difference.",
    quote: "Crowded coaching classes in Nerul just weren't working for Maya. Her home tutor identified foundational doubts in fractions and algebra immediately. Within 8 weeks, she was scoring at the top of her class.",
    rating: 5,
    location: "Nerul, Navi Mumbai",
    outcome: "Ranked top 5 in school term assessments"
  },
  {
    id: "test-03",
    author: "Dr. Vikram Kulkarni",
    role: "Parent of 12th Grader",
    gradeSubject: "Grade 12 · HSC Physics & Mathematics",
    headline: "Rigorous, punctual, and truly inspiring home mentorship.",
    quote: "Our tutor didn't just teach formulas; he elevated our son's analytical speed and numerical discipline. The weekly progress debriefs gave us complete peace of mind right here in Kharghar.",
    rating: 5,
    location: "Kharghar, Navi Mumbai",
    outcome: "94% score in Physics board examinations"
  }
];
