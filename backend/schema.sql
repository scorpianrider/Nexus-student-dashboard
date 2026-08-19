-- Nexus Portal / Student Dashboard
-- MySQL schema matching the REST endpoints consumed by the React frontend.

CREATE DATABASE IF NOT EXISTS student_dashboard;
USE student_dashboard;

-- ------------------------------------------------------------
-- Core student record. Login validates roll_number + password
-- directly against this table (no JWT, no Spring Security).
-- ------------------------------------------------------------
CREATE TABLE students (
    id            INT AUTO_INCREMENT PRIMARY KEY,
    roll_number   VARCHAR(20)  NOT NULL UNIQUE,
    password      VARCHAR(255) NOT NULL,
    name          VARCHAR(120) NOT NULL,
    department    VARCHAR(120) NOT NULL,
    year          VARCHAR(20)  NOT NULL,
    semester      VARCHAR(20)  NOT NULL,
    cgpa          DECIMAL(3,2) DEFAULT 0.00,
    attendance    INT          DEFAULT 0,
    email         VARCHAR(150),
    phone         VARCHAR(20),
    blood_group   VARCHAR(5),
    address       VARCHAR(255),
    photo_url     VARCHAR(255),
    created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------
-- Attendance per subject, used to build GET /attendance/{id}
-- ------------------------------------------------------------
CREATE TABLE attendance (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    student_id  INT NOT NULL,
    subject     VARCHAR(120) NOT NULL,
    attended    INT NOT NULL,
    total       INT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
);

-- ------------------------------------------------------------
-- Exam results / marks, used to build GET /results/{id}
-- ------------------------------------------------------------
CREATE TABLE results (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    student_id      INT NOT NULL,
    subject         VARCHAR(120) NOT NULL,
    internal_marks  INT NOT NULL,
    external_marks  INT NOT NULL,
    total_marks     INT NOT NULL,
    grade           VARCHAR(5) NOT NULL,
    semester_gpa    DECIMAL(3,2),
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
);

-- ------------------------------------------------------------
-- Assignments, used to build GET /assignments/{id}
-- ------------------------------------------------------------
CREATE TABLE assignments (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    student_id  INT NOT NULL,
    subject     VARCHAR(120) NOT NULL,
    title       VARCHAR(200) NOT NULL,
    due_date    DATE NOT NULL,
    status      ENUM('Pending', 'Submitted') DEFAULT 'Pending',
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
);

-- ------------------------------------------------------------
-- Weekly timetable, used to build GET /timetable/{id}
-- ------------------------------------------------------------
CREATE TABLE timetable (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    student_id  INT NOT NULL,
    day_of_week ENUM('Monday','Tuesday','Wednesday','Thursday','Friday') NOT NULL,
    start_time  VARCHAR(20) NOT NULL,
    end_time    VARCHAR(20) NOT NULL,
    subject     VARCHAR(120) NOT NULL,
    room        VARCHAR(50),
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
);

-- ------------------------------------------------------------
-- College-wide announcements, used to build GET /announcements
-- ------------------------------------------------------------
CREATE TABLE announcements (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    title       VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    posted_date DATE NOT NULL
);

-- ------------------------------------------------------------
-- Per-student notifications, used to build GET /notifications/{id}
-- ------------------------------------------------------------
CREATE TABLE notifications (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    student_id  INT NOT NULL,
    type        ENUM('assignment','attendance','exam','announcement') NOT NULL,
    message     VARCHAR(255) NOT NULL,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_read     BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
);

-- ------------------------------------------------------------
-- Sample seed data for local testing
-- ------------------------------------------------------------
INSERT INTO students (roll_number, password, name, department, year, semester, cgpa, attendance, email, phone, blood_group, address)
VALUES ('21CS045', 'password123', 'Ananya Rajaraman', 'Computer Science & Engineering', '3rd Year', 'Semester 5', 8.74, 87,
        'ananya.rajaraman@nexuscollege.edu', '+91 98765 43210', 'B+', '14, Lake View Colony, Tiruchirappalli, Tamil Nadu, India');

INSERT INTO attendance (student_id, subject, attended, total) VALUES
(1, 'Data Structures & Algorithms', 42, 48),
(1, 'Database Management Systems', 38, 44),
(1, 'Operating Systems', 40, 46),
(1, 'Computer Networks', 35, 42),
(1, 'Software Engineering', 37, 40),
(1, 'Web Technologies', 41, 44);

INSERT INTO results (student_id, subject, internal_marks, external_marks, total_marks, grade, semester_gpa) VALUES
(1, 'Data Structures & Algorithms', 28, 63, 91, 'A+', 8.90),
(1, 'Database Management Systems', 25, 58, 83, 'A', 8.90),
(1, 'Operating Systems', 27, 55, 82, 'A', 8.90),
(1, 'Computer Networks', 24, 52, 76, 'B+', 8.90),
(1, 'Software Engineering', 29, 60, 89, 'A+', 8.90),
(1, 'Web Technologies', 26, 57, 83, 'A', 8.90);

INSERT INTO assignments (student_id, subject, title, due_date, status) VALUES
(1, 'Database Management Systems', 'Normalization & ER Diagram Assignment', '2026-08-06', 'Pending'),
(1, 'Operating Systems', 'CPU Scheduling Algorithms Report', '2026-08-09', 'Pending'),
(1, 'Web Technologies', 'React Component Library', '2026-08-04', 'Submitted'),
(1, 'Computer Networks', 'Subnetting Practice Sheet', '2026-08-12', 'Pending');

INSERT INTO announcements (title, description, posted_date) VALUES
('Mid-Semester Exam Timetable Released', 'The mid-semester examination schedule for Semester 5 has been published.', '2026-07-30'),
('Technical Symposium Innovex 2026', 'The Department of CSE is organizing its annual technical symposium.', '2026-07-28');

INSERT INTO notifications (student_id, type, message, is_read) VALUES
(1, 'assignment', 'New assignment uploaded for Data Structures & Algorithms.', FALSE),
(1, 'attendance', 'Your attendance for Computer Networks has been updated.', FALSE),
(1, 'exam', 'Mid-semester exam schedule has been published.', FALSE);
