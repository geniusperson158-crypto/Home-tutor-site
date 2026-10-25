export type TutoringMode = 'home' | 'online' | 'hybrid';

export interface EducationCredential {
  degree: string;
  institution: string;
  year: number;
}

export interface Review {
  id: string;
  authorName: string;
  authorRole: 'Parent' | 'Student';
  studentGrade: string;
  subject: string;
  rating: number;
  date: string;
  comment: string;
  verifiedBooking: boolean;
}

export interface Tutor {
  id: string;
  name: string;
  title: string;
  photoUrl: string;
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  monthlyPackageRate: number;
  experienceYears: number;
  mode: TutoringMode;
  location: string;
  serviceRadiusKm: number;
  subjects: string[];
  gradesTaught: string[];
  education: EducationCredential[];
  bio: string;
  methodology: string;
  verified: boolean;
  backgroundChecked: boolean;
  activeStudents: number;
  availability: {
    days: string[];
    timeSlots: string[];
  };
  sampleReviews: Review[];
}

export interface SubjectItem {
  id: string;
  name: string;
  category: 'STEM' | 'Humanities' | 'Languages' | 'Test Prep';
  shortDescription: string;
  iconName: string;
  tutorCount: number;
  popularGrades: string[];
  subtopics: string[];
}

export interface FilterState {
  searchQuery: string;
  subject: string;
  grade: string;
  location: string;
  mode: 'all' | TutoringMode;
  maxRate: number;
  minExperience: number;
  sortBy: 'rating' | 'price-asc' | 'price-desc' | 'experience';
}

export interface BookingRequestForm {
  studentName: string;
  studentGrade: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  subject: string;
  mode: TutoringMode;
  preferredDays: string[];
  preferredTimeSlot: string;
  address: string;
  notes: string;
  tutorId?: string;
  tutorName?: string;
  isDemoClass: boolean;
}

export interface TutorApplicationForm {
  fullName: string;
  email: string;
  phone: string;
  highestDegree: string;
  university: string;
  graduationYear: string;
  experienceYears: number;
  subjects: string[];
  gradesTaught: string[];
  preferredLocations: string[];
  mode: TutoringMode;
  expectedHourlyRate: number;
  bio: string;
  teachingPhilosophy: string;
  idProofUploaded: boolean;
  agreeToVerification: boolean;
}
