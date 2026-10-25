import { Tutor } from '../types';

export const TUTORS_DATA: Tutor[] = [
  {
    id: "tut-01",
    name: "Dr. Elena Rostova",
    title: "M.Sc. & Ph.D. in Applied Mathematics | 9+ Years Teaching",
    photoUrl: "/src/assets/images/tutor_female_portrait_1792831685920.jpg",
    rating: 4.96,
    reviewCount: 38,
    hourlyRate: 850,
    monthlyPackageRate: 6400,
    experienceYears: 9,
    mode: "hybrid",
    location: "Vashi, Navi Mumbai",
    serviceRadiusKm: 12,
    subjects: ["Mathematics", "Physics", "Competitive Exam Prep"],
    gradesTaught: ["Grade 8-10", "Grade 11-12", "Board & Entrance Prep"],
    education: [
      { degree: "Ph.D. in Applied Mathematics", institution: "IIT Bombay", year: 2017 },
      { degree: "M.Sc. in Mathematics", institution: "Mumbai University", year: 2013 }
    ],
    bio: "Dedicated home tutor based in Sector 17, Vashi. Specializing in demystifying complex calculus, algebra, and classical physics for CBSE, ICSE, and Maharashtra State Board students.",
    methodology: "Diagnostic baseline review followed by visual conceptual models, step-by-step problem sets, and past 10 years board paper solving.",
    verified: true,
    backgroundChecked: true,
    activeStudents: 14,
    availability: {
      days: ["Monday", "Wednesday", "Friday", "Saturday"],
      timeSlots: ["4:00 PM - 6:00 PM", "6:00 PM - 8:00 PM", "Weekend Mornings"]
    },
    sampleReviews: [
      {
        id: "rev-101",
        authorName: "Ananya Deshmukh",
        authorRole: "Parent",
        studentGrade: "Grade 10",
        subject: "ICSE Mathematics",
        rating: 5,
        date: "2 weeks ago",
        comment: "Dr. Elena transformed our daughter's confidence in Math. From being stressed before preliminary exams to scoring 96% in her Vashi school prelims.",
        verifiedBooking: true
      },
      {
        id: "rev-102",
        authorName: "Rohan Patil",
        authorRole: "Student",
        studentGrade: "Grade 12",
        subject: "Physics",
        rating: 5,
        date: "1 month ago",
        comment: "She explains rotational dynamics and electrostatics with clear diagrams at home. Best tutor in Vashi.",
        verifiedBooking: true
      }
    ]
  },
  {
    id: "tut-02",
    name: "David Vance, M.Ed.",
    title: "Master of Science in Chemistry | 11+ Years Teaching Experience",
    photoUrl: "/src/assets/images/tutor_male_portrait_1792831686718.jpg",
    rating: 4.92,
    reviewCount: 44,
    hourlyRate: 750,
    monthlyPackageRate: 5600,
    experienceYears: 11,
    mode: "home",
    location: "Kharghar, Navi Mumbai",
    serviceRadiusKm: 10,
    subjects: ["Chemistry", "Science", "Biology"],
    gradesTaught: ["Grade 6-8", "Grade 9-10", "Grade 11-12"],
    education: [
      { degree: "Master of Science (Organic Chemistry)", institution: "University of Mumbai", year: 2014 },
      { degree: "B.Sc. in Chemistry", institution: "St. Xavier's College", year: 2012 }
    ],
    bio: "Over a decade of home tutoring experience across Kharghar and Belapur nodes. Specialized in organic reaction mechanisms, physical chemistry formulas, and middle school foundational science.",
    methodology: "Hands-on conceptual frameworks, memory retention mnemonics, and structured weekly progress updates for parents.",
    verified: true,
    backgroundChecked: true,
    activeStudents: 18,
    availability: {
      days: ["Tuesday", "Thursday", "Saturday", "Sunday"],
      timeSlots: ["3:30 PM - 5:30 PM", "5:30 PM - 7:30 PM", "Weekend Afternoons"]
    },
    sampleReviews: [
      {
        id: "rev-201",
        authorName: "Sunita Iyer",
        authorRole: "Parent",
        studentGrade: "Grade 10",
        subject: "CBSE Chemistry",
        rating: 5,
        date: "3 weeks ago",
        comment: "David sir's weekly homework notes keep us completely informed. Our son's chemistry score improved remarkably in Kharghar.",
        verifiedBooking: true
      }
    ]
  },
  {
    id: "tut-03",
    name: "Clara Thornton, M.A.",
    title: "M.A. English Literature | Senior ICSE & CBSE Language Specialist",
    photoUrl: "/src/assets/images/tutor_humanities_portrait_1792831686825.jpg",
    rating: 4.98,
    reviewCount: 29,
    hourlyRate: 700,
    monthlyPackageRate: 5200,
    experienceYears: 8,
    mode: "home",
    location: "Nerul, Navi Mumbai",
    serviceRadiusKm: 8,
    subjects: ["English", "Social Studies", "Competitive Exam Prep"],
    gradesTaught: ["Grade 6-8", "Grade 9-10", "Grade 11-12"],
    education: [
      { degree: "M.A. in English Literature", institution: "SNDT Women's University", year: 2017 },
      { degree: "B.A. in English", institution: "Elphinstone College", year: 2015 }
    ],
    bio: "Residing near Nerul East. Guiding students in structured essay crafting, grammar rules, Shakespearean analysis, and board exam writing speed with patient mentorship.",
    methodology: "Paragraph outline architecture, active vocabulary enrichment, and continuous answer-sheet evaluations.",
    verified: true,
    backgroundChecked: true,
    activeStudents: 12,
    availability: {
      days: ["Monday", "Wednesday", "Thursday", "Saturday"],
      timeSlots: ["4:00 PM - 6:00 PM", "6:00 PM - 8:00 PM"]
    },
    sampleReviews: [
      {
        id: "rev-301",
        authorName: "Rajesh Kulkarni",
        authorRole: "Parent",
        studentGrade: "Grade 10",
        subject: "ICSE English",
        rating: 5,
        date: "2 months ago",
        comment: "Clara ma'am helped our daughter write clear, high-scoring essays. Her English marks went from 72% to 91% in Nerul.",
        verifiedBooking: true
      }
    ]
  },
  {
    id: "tut-04",
    name: "Julian Rivera",
    title: "B.Tech Engineering Graduate | Math & Physics Board Specialist",
    photoUrl: "/src/assets/images/tutor_male_portrait_1792831686718.jpg",
    rating: 4.91,
    reviewCount: 31,
    hourlyRate: 900,
    monthlyPackageRate: 6800,
    experienceYears: 7,
    mode: "hybrid",
    location: "Seawoods, Navi Mumbai",
    serviceRadiusKm: 10,
    subjects: ["Mathematics", "Physics", "Competitive Exam Prep"],
    gradesTaught: ["Grade 8-10", "Grade 11-12", "Board & Entrance Prep"],
    education: [
      { degree: "B.Tech in Engineering", institution: "VJTI Mumbai", year: 2018 }
    ],
    bio: "Living in Seawoods near Grand Central. Mentoring school and junior college students in advanced Mathematics, numerical problem solving, and analytical thinking through structured home sessions.",
    methodology: "Interactive step-by-step problem sets, formula derivations, and board practicals coaching.",
    verified: true,
    backgroundChecked: true,
    activeStudents: 15,
    availability: {
      days: ["Tuesday", "Thursday", "Friday", "Sunday"],
      timeSlots: ["5:00 PM - 7:00 PM", "7:00 PM - 9:00 PM", "Weekend Mornings"]
    },
    sampleReviews: [
      {
        id: "rev-401",
        authorName: "Aditya Nair",
        authorRole: "Student",
        studentGrade: "Grade 11",
        subject: "Mathematics",
        rating: 5,
        date: "3 weeks ago",
        comment: "Julian sir cleared all my trigonometry and calculus doubts right at home in Seawoods. Excellent teaching style.",
        verifiedBooking: true
      }
    ]
  },
  {
    id: "tut-05",
    name: "Amina Al-Mansoor, M.Sc.",
    title: "M.Sc. Life Sciences & Biotechnology | 6+ Years School Tutoring",
    photoUrl: "/src/assets/images/tutor_female_portrait_1792831685920.jpg",
    rating: 4.95,
    reviewCount: 26,
    hourlyRate: 700,
    monthlyPackageRate: 5200,
    experienceYears: 6,
    mode: "home",
    location: "CBD Belapur, Navi Mumbai",
    serviceRadiusKm: 8,
    subjects: ["Biology", "Science", "Chemistry"],
    gradesTaught: ["Grade 6-8", "Grade 9-10", "Grade 11-12"],
    education: [
      { degree: "M.Sc. in Biotechnology", institution: "Institute of Chemical Technology (ICT) Mumbai", year: 2019 },
      { degree: "B.Sc. in Life Sciences", institution: "Sophia College", year: 2017 }
    ],
    bio: "Located in CBD Belapur. Passionate about bringing biology to life for students through clear anatomical diagrams, memory tables, and concept maps for board examinations.",
    methodology: "Concept mapping, comparative flashcards, and step-by-step textbook revision.",
    verified: true,
    backgroundChecked: true,
    activeStudents: 11,
    availability: {
      days: ["Monday", "Tuesday", "Thursday", "Saturday"],
      timeSlots: ["3:30 PM - 5:30 PM", "Weekend Afternoons"]
    },
    sampleReviews: [
      {
        id: "rev-501",
        authorName: "Kavita Rao",
        authorRole: "Parent",
        studentGrade: "Grade 9",
        subject: "General Science",
        rating: 5,
        date: "1 month ago",
        comment: "Amina is patient, punctual, and encouraging. Our daughter looks forward to her home tutoring sessions in Belapur.",
        verifiedBooking: true
      }
    ]
  },
  {
    id: "tut-06",
    name: "Arthur Pendelton, M.A.",
    title: "M.A. History & Political Science | 12+ Years Board Exam Faculty",
    photoUrl: "/src/assets/images/tutor_humanities_portrait_1792831686825.jpg",
    rating: 4.89,
    reviewCount: 35,
    hourlyRate: 750,
    monthlyPackageRate: 5400,
    experienceYears: 12,
    mode: "home",
    location: "Airoli, Navi Mumbai",
    serviceRadiusKm: 12,
    subjects: ["Social Studies", "English", "Competitive Exam Prep"],
    gradesTaught: ["Grade 8-10", "Grade 11-12", "Board Social Sciences"],
    education: [
      { degree: "M.A. in History", institution: "University of Pune", year: 2013 },
      { degree: "B.A. in History & Economics", institution: "St. Aloysius College", year: 2010 }
    ],
    bio: "Resident of Airoli, Navi Mumbai. Specialize in structured answer presentation for History, Civics, and Geography for Class 9 and 10 students.",
    methodology: "Chronological narrative framing, timeline memorization, and map-marking practice.",
    verified: true,
    backgroundChecked: true,
    activeStudents: 13,
    availability: {
      days: ["Monday", "Wednesday", "Friday"],
      timeSlots: ["4:30 PM - 6:30 PM", "6:30 PM - 8:30 PM"]
    },
    sampleReviews: [
      {
        id: "rev-601",
        authorName: "Manoj Sawant",
        authorRole: "Parent",
        studentGrade: "Grade 10",
        subject: "Social Studies",
        rating: 5,
        date: "3 weeks ago",
        comment: "Sir taught our son how to frame answers neatly in board exam format. Score moved from 68 to 88 marks in Airoli.",
        verifiedBooking: true
      }
    ]
  }
];
