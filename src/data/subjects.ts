import { SubjectItem } from '../types';

export const SUBJECTS_DATA: SubjectItem[] = [
  {
    id: "mathematics",
    name: "Mathematics",
    category: "STEM",
    shortDescription: "From elementary foundations to Calculus, Algebra, and Geometry with conceptual clarity for CBSE, ICSE, and State Boards.",
    iconName: "Calculator",
    tutorCount: 24,
    popularGrades: ["Grade 6-8", "Grade 9-10", "Grade 11-12"],
    subtopics: ["Pre-Algebra", "Algebra I & II", "Geometry", "Trigonometry", "Calculus", "Statistics"]
  },
  {
    id: "science",
    name: "General Science",
    category: "STEM",
    shortDescription: "Integrated STEM foundations for middle school and early secondary school curricula.",
    iconName: "Microscope",
    tutorCount: 19,
    popularGrades: ["Grade 5-8", "Grade 9-10"],
    subtopics: ["Earth Science", "Physical Sciences", "Scientific Method", "Environmental Studies"]
  },
  {
    id: "physics",
    name: "Physics",
    category: "STEM",
    shortDescription: "Classical mechanics, electromagnetism, and modern physics with real-life numerical problem solving.",
    iconName: "Atom",
    tutorCount: 16,
    popularGrades: ["Grade 10-12", "Board & JEE Prep"],
    subtopics: ["Kinematics & Dynamics", "Work & Energy", "Optics", "Thermodynamics", "Electromagnetism"]
  },
  {
    id: "chemistry",
    name: "Chemistry",
    category: "STEM",
    shortDescription: "Stoichiometry, atomic structure, organic chemistry, and chemical equation balancing.",
    iconName: "FlaskConical",
    tutorCount: 17,
    popularGrades: ["Grade 9-10", "Grade 11-12", "Board Exams"],
    subtopics: ["Periodic Table", "Chemical Bonding", "Thermodynamics", "Equilibrium", "Organic Chemistry"]
  },
  {
    id: "biology",
    name: "Biology",
    category: "STEM",
    shortDescription: "Cellular biology, genetics, human physiology, and ecological systems without rote memorization.",
    iconName: "Dna",
    tutorCount: 15,
    popularGrades: ["Grade 8-10", "Grade 11-12", "NEET Prep"],
    subtopics: ["Molecular Genetics", "Cell Structure", "Physiology", "Evolution", "Ecology"]
  },
  {
    id: "english",
    name: "English & Writing",
    category: "Humanities",
    shortDescription: "Reading comprehension, critical essay writing, literature analysis, and grammar mastery.",
    iconName: "BookOpen",
    tutorCount: 22,
    popularGrades: ["Grade 4-8", "Grade 9-12", "College Prep"],
    subtopics: ["Essay Structuring", "Literary Analysis", "Vocabulary & Grammar", "Creative Writing", "Communicative English"]

  },
  {
    id: "social-studies",
    name: "Social Studies & History",
    category: "Humanities",
    shortDescription: "History, geography, political science, and analytical source question writing.",
    iconName: "Globe2",
    tutorCount: 12,
    popularGrades: ["Grade 7-10", "Grade 11-12"],
    subtopics: ["Indian & World History", "Geography", "Civics & Governance", "Economics", "Map Work"]
  },
  {
    id: "competitive-exams",
    name: "Competitive Exam Prep",
    category: "Test Prep",
    shortDescription: "Targeted strategy, timed simulations, and error analysis for Olympiads, NTSE, and entrance exams.",
    iconName: "Award",
    tutorCount: 20,
    popularGrades: ["Grade 8-10", "Grade 11-12"],
    subtopics: ["Quantitative Aptitude", "Logical Reasoning", "Olympiad Math & Science", "Speed & Accuracy Drills"]
  }
];
