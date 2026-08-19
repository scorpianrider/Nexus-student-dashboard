# Nexus Portal — Student Dashboard

A modern student dashboard built with React (Vite), plain CSS, and a
Spring Boot + MySQL backend. Built primarily to practice component-based
architecture, routing, API integration, state management, and responsive UI.

## What's in this download

```
student-dashboard/   → React frontend (the main deliverable)
backend/              → Spring Boot REST API + MySQL schema
```

---

## 1. Running the frontend

The frontend runs standalone out of the box — it uses realistic mock data
under `src/services/mockData.js` so you can see and demo the full app
without setting up the backend first.

```bash
cd student-dashboard
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

**Demo login:** Roll Number `21CS045`, Password `password123`

### Connecting it to the real backend

Everything the UI needs goes through `src/services/api.js`. Each function
in that file (`login`, `getStudent`, `getAttendance`, etc.) already matches
one of the REST endpoints below — right now it resolves from mock data.
To switch to the live API:

1. Set `USE_MOCK = false` at the top of `src/services/api.js`.
2. Create a `.env` file in `student-dashboard/` with:
   ```
   VITE_API_BASE_URL=http://localhost:8080
   ```
3. Start the Spring Boot backend (below).

No other file needs to change — every page calls the functions in
`api.js`, not axios directly.

### Frontend structure

```
src/
  components/   Navbar, Sidebar, DashboardCard, StudentCard, AttendanceCard,
                AssignmentCard, AnnouncementCard, NotificationCard, MarksTable,
                Chart, TimetableCard, Footer, LoadingSpinner, Modal, DashboardLayout
  pages/        Login, Dashboard, Profile, Attendance, Results, Assignments,
                Timetable, Announcements, Notifications
  services/     api.js (REST calls) + mockData.js (local fallback data)
  css/          one external stylesheet per page/component group, all built
                on CSS variables defined in css/common.css
```

---

## 2. Running the backend

The backend is a Spring Boot REST API. Per the spec, there's **no JWT and
no Spring Security** — login is a simple lookup-and-compare against MySQL.

### Setup

1. Create the database and seed data:
   ```bash
   mysql -u root -p < backend/schema.sql
   ```
2. Edit `backend/src/main/resources/application.properties` with your
   MySQL username/password.
3. Run it:
   ```bash
   cd backend
   mvn spring-boot:run
   ```
   The API starts on `http://localhost:8080`.

### Endpoints

| Method | Path                     | Status |
|--------|--------------------------|--------|
| POST   | `/login`                 | ✅ implemented |
| GET    | `/student/{id}`          | ✅ implemented |
| GET    | `/student/{id}/summary`  | ✅ implemented (dashboard stat cards) |
| GET    | `/attendance/{id}`       | ✅ implemented |
| GET    | `/results/{id}`          | ✅ implemented |
| GET    | `/assignments/{id}`      | ✅ implemented |
| GET    | `/announcements`         | ✅ implemented |
| GET    | `/notifications/{id}`    | ✅ implemented |
| GET    | `/timetable/{id}`        | ✅ implemented |

All controllers follow the same Entity → Repository → Controller pattern as
`AuthController`/`StudentController`. A few notes on how the data gets
reshaped to match what the React frontend expects:

- **Attendance**: the `overview` (monthly trend) array in the response is
  currently empty — the schema only stores a current snapshot per subject,
  not history over time. The Dashboard's attendance chart will render blank
  until you add a table that tracks attendance by month.
- **Results**: `overallCgpa` comes from `students.cgpa`; `semesterGpa` comes
  from the first row's `semester_gpa` column.
- **Announcements** / **Notifications**: DTOs rename a couple of columns
  (`posted_date` → `date`, `is_read` → `read`) and notifications convert the
  stored timestamp into a relative string like "2 hours ago".
- **Dashboard summary** (`/student/{id}/summary`): `upcomingExams` is
  hardcoded to `0` for now since there's no `exams` table in the schema yet.

### Database schema

See `backend/schema.sql` for the full `CREATE TABLE` statements (students,
attendance, results, assignments, timetable, announcements, notifications)
plus seed data matching the frontend's mock data, so the demo login
(`21CS045` / `password123`) works identically against the real database.

---

## Tech stack recap

- **Frontend:** React 19 (Vite), React Router DOM, Axios, Recharts, React Icons, plain CSS (Flexbox/Grid, CSS variables)
- **Backend:** Spring Boot 3, Spring Data JPA, MySQL
- **Auth:** Roll number + password validated against MySQL, no JWT/Spring Security
