// Mock data simulating what the Spring Boot + MySQL backend would return.
// Swap the functions in api.js to real axios calls once the backend is live —
// the shape of the data below matches the REST responses described in the spec.

export const student = {
  id: 1,
  rollNumber: "21CS045",
  password: "password123",
  name: "Ananya Rajaraman",
  department: "Computer Science & Engineering",
  year: "3rd Year",
  semester: "Semester 5",
  cgpa: 8.74,
  attendance: 87,
  email: "ananya.rajaraman@nexuscollege.edu",
  phone: "+91 98765 43210",
  bloodGroup: "B+",
  address: "14, Lake View Colony, Tiruchirappalli, Tamil Nadu, India",
  photo: null,
};

export const dashboardSummary = {
  attendance: 87,
  cgpa: 8.74,
  pendingAssignments: 4,
  upcomingExams: 3,
};

export const attendanceOverview = [
  { month: "Feb", percentage: 82 },
  { month: "Mar", percentage: 85 },
  { month: "Apr", percentage: 79 },
  { month: "May", percentage: 88 },
  { month: "Jun", percentage: 90 },
  { month: "Jul", percentage: 87 },
];

export const attendanceBySubject = [
  { subject: "Data Structures & Algorithms", attended: 42, total: 48 },
  { subject: "Database Management Systems", attended: 38, total: 44 },
  { subject: "Operating Systems", attended: 40, total: 46 },
  { subject: "Computer Networks", attended: 35, total: 42 },
  { subject: "Software Engineering", attended: 37, total: 40 },
  { subject: "Web Technologies", attended: 41, total: 44 },
];

export const results = {
  semesterGpa: 8.9,
  overallCgpa: 8.74,
  subjects: [
    { subject: "Data Structures & Algorithms", internal: 28, external: 63, total: 91, grade: "A+" },
    { subject: "Database Management Systems", internal: 25, external: 58, total: 83, grade: "A" },
    { subject: "Operating Systems", internal: 27, external: 55, total: 82, grade: "A" },
    { subject: "Computer Networks", internal: 24, external: 52, total: 76, grade: "B+" },
    { subject: "Software Engineering", internal: 29, external: 60, total: 89, grade: "A+" },
    { subject: "Web Technologies", internal: 26, external: 57, total: 83, grade: "A" },
  ],
};

export const assignments = [
  { id: 1, subject: "Database Management Systems", title: "Normalization & ER Diagram Assignment", dueDate: "2026-08-06", status: "Pending" },
  { id: 2, subject: "Operating Systems", title: "CPU Scheduling Algorithms Report", dueDate: "2026-08-09", status: "Pending" },
  { id: 3, subject: "Web Technologies", title: "React Component Library", dueDate: "2026-08-04", status: "Submitted" },
  { id: 4, subject: "Computer Networks", title: "Subnetting Practice Sheet", dueDate: "2026-08-12", status: "Pending" },
  { id: 5, subject: "Software Engineering", title: "Agile Sprint Retrospective", dueDate: "2026-07-29", status: "Submitted" },
  { id: 6, subject: "Data Structures & Algorithms", title: "AVL Tree Implementation", dueDate: "2026-08-15", status: "Pending" },
];

export const timetable = {
  Monday: [
    { time: "9:00 - 9:50", subject: "Data Structures & Algorithms", room: "CS-201" },
    { time: "9:50 - 10:40", subject: "Database Management Systems", room: "CS-105" },
    { time: "11:00 - 11:50", subject: "Operating Systems", room: "CS-201" },
    { time: "1:00 - 1:50", subject: "Web Technologies Lab", room: "Lab-3" },
  ],
  Tuesday: [
    { time: "9:00 - 9:50", subject: "Computer Networks", room: "CS-104" },
    { time: "9:50 - 10:40", subject: "Software Engineering", room: "CS-201" },
    { time: "11:00 - 12:40", subject: "DBMS Lab", room: "Lab-1" },
  ],
  Wednesday: [
    { time: "9:00 - 9:50", subject: "Data Structures & Algorithms", room: "CS-201" },
    { time: "9:50 - 10:40", subject: "Operating Systems", room: "CS-105" },
    { time: "11:00 - 11:50", subject: "Web Technologies", room: "CS-201" },
    { time: "1:00 - 1:50", subject: "Computer Networks", room: "CS-104" },
  ],
  Thursday: [
    { time: "9:00 - 10:40", subject: "DSA Lab", room: "Lab-2" },
    { time: "11:00 - 11:50", subject: "Software Engineering", room: "CS-201" },
    { time: "1:00 - 1:50", subject: "Database Management Systems", room: "CS-105" },
  ],
  Friday: [
    { time: "9:00 - 9:50", subject: "Computer Networks", room: "CS-104" },
    { time: "9:50 - 10:40", subject: "Data Structures & Algorithms", room: "CS-201" },
    { time: "11:00 - 11:50", subject: "Operating Systems", room: "CS-105" },
    { time: "1:00 - 1:50", subject: "Mentoring Session", room: "CS-301" },
  ],
};

export const announcements = [
  { id: 1, title: "Mid-Semester Exam Timetable Released", description: "The mid-semester examination schedule for Semester 5 has been published. Students are advised to check their exam hall allocations on the notice board.", date: "2026-07-30" },
  { id: 2, title: "Technical Symposium 'Innovex 2026'", description: "The Department of CSE is organizing its annual technical symposium. Registrations are open until August 10th. Prizes worth ₹50,000 to be won.", date: "2026-07-28" },
  { id: 3, title: "Library Timings Extended", description: "The central library will now remain open until 10 PM on weekdays to support exam preparation. ID card required for entry after 6 PM.", date: "2026-07-25" },
  { id: 4, title: "Fee Payment Deadline Reminder", description: "Students yet to pay Semester 5 tuition fees must do so before August 15th to avoid a late fee penalty.", date: "2026-07-22" },
];

export const notifications = [
  { id: 1, type: "assignment", message: "New assignment 'AVL Tree Implementation' uploaded for Data Structures & Algorithms.", time: "2 hours ago", read: false },
  { id: 2, type: "attendance", message: "Your attendance for Computer Networks has been updated.", time: "5 hours ago", read: false },
  { id: 3, type: "exam", message: "Mid-semester exam schedule has been published.", time: "1 day ago", read: false },
  { id: 4, type: "assignment", message: "Reminder: 'CPU Scheduling Algorithms Report' is due in 3 days.", time: "1 day ago", read: true },
  { id: 5, type: "announcement", message: "New announcement posted: Technical Symposium 'Innovex 2026'.", time: "3 days ago", read: true },
  { id: 6, type: "attendance", message: "Your overall attendance has crossed 85%.", time: "4 days ago", read: true },
];
