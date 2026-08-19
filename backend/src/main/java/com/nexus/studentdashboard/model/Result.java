package com.nexus.studentdashboard.model;

import jakarta.persistence.*;

@Entity
@Table(name = "results")
public class Result {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "student_id")
    private Integer studentId;

    private String subject;

    @Column(name = "internal_marks")
    private Integer internalMarks;

    @Column(name = "external_marks")
    private Integer externalMarks;

    @Column(name = "total_marks")
    private Integer totalMarks;

    private String grade;

    @Column(name = "semester_gpa")
    private Double semesterGpa;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public Integer getStudentId() { return studentId; }
    public void setStudentId(Integer studentId) { this.studentId = studentId; }

    public String getSubject() { return subject; }
    public void setSubject(String subject) { this.subject = subject; }

    public Integer getInternalMarks() { return internalMarks; }
    public void setInternalMarks(Integer internalMarks) { this.internalMarks = internalMarks; }

    public Integer getExternalMarks() { return externalMarks; }
    public void setExternalMarks(Integer externalMarks) { this.externalMarks = externalMarks; }

    public Integer getTotalMarks() { return totalMarks; }
    public void setTotalMarks(Integer totalMarks) { this.totalMarks = totalMarks; }

    public String getGrade() { return grade; }
    public void setGrade(String grade) { this.grade = grade; }

    public Double getSemesterGpa() { return semesterGpa; }
    public void setSemesterGpa(Double semesterGpa) { this.semesterGpa = semesterGpa; }
}
