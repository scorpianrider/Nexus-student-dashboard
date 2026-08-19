package com.nexus.studentdashboard.dto;

import com.nexus.studentdashboard.model.Result;

import java.util.List;
import java.util.stream.Collectors;

// Matches what the frontend expects from GET /results/{id}:
// { semesterGpa, overallCgpa, subjects: [{ subject, internal, external, total, grade }] }
public class ResultsResponse {

    private Double semesterGpa;
    private Double overallCgpa;
    private List<SubjectRow> subjects;

    public ResultsResponse(Double semesterGpa, Double overallCgpa, List<Result> rows) {
        this.semesterGpa = semesterGpa;
        this.overallCgpa = overallCgpa;
        this.subjects = rows.stream().map(SubjectRow::new).collect(Collectors.toList());
    }

    public Double getSemesterGpa() { return semesterGpa; }
    public Double getOverallCgpa() { return overallCgpa; }
    public List<SubjectRow> getSubjects() { return subjects; }

    public static class SubjectRow {
        private String subject;
        private Integer internal;
        private Integer external;
        private Integer total;
        private String grade;

        public SubjectRow(Result r) {
            this.subject = r.getSubject();
            this.internal = r.getInternalMarks();
            this.external = r.getExternalMarks();
            this.total = r.getTotalMarks();
            this.grade = r.getGrade();
        }

        public String getSubject() { return subject; }
        public Integer getInternal() { return internal; }
        public Integer getExternal() { return external; }
        public Integer getTotal() { return total; }
        public String getGrade() { return grade; }
    }
}
