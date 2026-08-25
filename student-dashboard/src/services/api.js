// This file is the single point of contact between the UI and the backend.
//
// Right now it resolves against local mock data so the app runs standalone.
// To connect the real Spring Boot API, set VITE_API_BASE_URL in a .env file
// and flip USE_MOCK to false — every function below already matches the
// REST endpoints described in the project spec (POST /login, GET /student/{id}, etc.)
// so no other file needs to change.

import axios from "axios";
import {
  student,
  dashboardSummary,
  attendanceOverview,
  attendanceBySubject,
  results,
  assignments,
  timetable,
  announcements,
  notifications,
} from "./mockData";

const USE_MOCK = false;

const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8080",
  headers: { "Content-Type": "application/json" },
});

// Small helper so mock responses still feel like network calls (loading states, etc.)
const mockDelay = (data, ms = 500) =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms));

export const login = (rollNumber, password) => {
  if (USE_MOCK) {
    if (rollNumber === student.rollNumber && password === student.password) {
      return mockDelay({ success: true, student });
    }
    return mockDelay({ success: false, message: "Invalid roll number or password." }, 600);
  }
  return client.post("/login", { rollNumber, password }).then((res) => res.data);
};

export const getStudent = (id) => {
  if (USE_MOCK) return mockDelay(student);
  return client.get(`/student/${id}`).then((res) => res.data);
};

export const getDashboardSummary = (id) => {
  if (USE_MOCK) return mockDelay(dashboardSummary);
  return client.get(`/student/${id}/summary`).then((res) => res.data);
};

export const getAttendance = (id) => {
  if (USE_MOCK) return mockDelay({ overview: attendanceOverview, subjects: attendanceBySubject });
  return client.get(`/attendance/${id}`).then((res) => res.data);
};

export const getResults = (id) => {
  if (USE_MOCK) return mockDelay(results);
  return client.get(`/results/${id}`).then((res) => res.data);
};

export const getAssignments = (id) => {
  if (USE_MOCK) return mockDelay(assignments);
  return client.get(`/assignments/${id}`).then((res) => res.data);
};

export const getAnnouncements = () => {
  if (USE_MOCK) return mockDelay(announcements);
  return client.get("/announcements").then((res) => res.data);
};

export const getNotifications = (id) => {
  if (USE_MOCK) return mockDelay(notifications);
  return client.get(`/notifications/${id}`).then((res) => res.data);
};

export const getTimetable = (id) => {
  if (USE_MOCK) return mockDelay(timetable);
  return client.get(`/timetable/${id}`).then((res) => res.data);
};

export default client;
