package com.nexus.studentdashboard.dto;

import com.nexus.studentdashboard.model.Attendance;

import java.util.List;

// Matches what the React frontend expects from GET /attendance/{id}:
// { overview: [...], subjects: [{ subject, attended, total }, ...] }
public class AttendanceResponse {

    private List<MonthPoint> overview;
    private List<SubjectRow> subjects;

    public AttendanceResponse(List<MonthPoint> overview, List<SubjectRow> subjects) {
        this.overview = overview;
        this.subjects = subjects;
    }

    public List<MonthPoint> getOverview() { return overview; }
    public List<SubjectRow> getSubjects() { return subjects; }

    // The "overview" chart (attendance trend by month) isn't tracked in the
    // schema — there's only a current snapshot per subject, not history.
    // MonthPoint is here so the shape matches the frontend; wire this up to
    // real monthly data later if you start recording it.
    public static class MonthPoint {
        private String month;
        private int percentage;

        public MonthPoint(String month, int percentage) {
            this.month = month;
            this.percentage = percentage;
        }

        public String getMonth() { return month; }
        public int getPercentage() { return percentage; }
    }

    public static class SubjectRow {
        private String subject;
        private Integer attended;
        private Integer total;

        public SubjectRow(Attendance a) {
            this.subject = a.getSubject();
            this.attended = a.getAttended();
            this.total = a.getTotal();
        }

        public String getSubject() { return subject; }
        public Integer getAttended() { return attended; }
        public Integer getTotal() { return total; }
    }
}
