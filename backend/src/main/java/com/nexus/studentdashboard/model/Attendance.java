package com.nexus.studentdashboard.model;

import jakarta.persistence.*;

@Entity
@Table(name = "attendance")
public class Attendance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "student_id")
    private Integer studentId;

    private String subject;
    private Integer attended;
    private Integer total;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public Integer getStudentId() { return studentId; }
    public void setStudentId(Integer studentId) { this.studentId = studentId; }

    public String getSubject() { return subject; }
    public void setSubject(String subject) { this.subject = subject; }

    public Integer getAttended() { return attended; }
    public void setAttended(Integer attended) { this.attended = attended; }

    public Integer getTotal() { return total; }
    public void setTotal(Integer total) { this.total = total; }
}
