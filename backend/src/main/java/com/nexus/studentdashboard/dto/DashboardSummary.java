package com.nexus.studentdashboard.dto;

// Matches GET /student/{id}/summary : { attendance, cgpa, pendingAssignments, upcomingExams }
public class DashboardSummary {
    private Integer attendance;
    private Double cgpa;
    private long pendingAssignments;
    private long upcomingExams;

    public DashboardSummary(Integer attendance, Double cgpa, long pendingAssignments, long upcomingExams) {
        this.attendance = attendance;
        this.cgpa = cgpa;
        this.pendingAssignments = pendingAssignments;
        this.upcomingExams = upcomingExams;
    }

    public Integer getAttendance() { return attendance; }
    public Double getCgpa() { return cgpa; }
    public long getPendingAssignments() { return pendingAssignments; }
    public long getUpcomingExams() { return upcomingExams; }
}
