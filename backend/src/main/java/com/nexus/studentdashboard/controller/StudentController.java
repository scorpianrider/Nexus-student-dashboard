package com.nexus.studentdashboard.controller;

import com.nexus.studentdashboard.dto.DashboardSummary;
import com.nexus.studentdashboard.model.Assignment;
import com.nexus.studentdashboard.model.Student;
import com.nexus.studentdashboard.repository.AssignmentRepository;
import com.nexus.studentdashboard.repository.StudentRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/student")
public class StudentController {

    private final StudentRepository studentRepository;
    private final AssignmentRepository assignmentRepository;

    public StudentController(StudentRepository studentRepository, AssignmentRepository assignmentRepository) {
        this.studentRepository = studentRepository;
        this.assignmentRepository = assignmentRepository;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudent(@PathVariable Integer id) {
        return studentRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/{id}/summary")
    public ResponseEntity<DashboardSummary> getSummary(@PathVariable Integer id) {
        return studentRepository.findById(id)
                .map(student -> {
                    long pending = assignmentRepository.findByStudentId(id).stream()
                            .filter(a -> "Pending".equalsIgnoreCase(a.getStatus()))
                            .count();

                    // No exams table in the schema yet, so this is a placeholder —
                    // wire it up to a real "exams" table if you add one later.
                    long upcomingExams = 0;

                    return ResponseEntity.ok(
                            new DashboardSummary(student.getAttendance(), student.getCgpa(), pending, upcomingExams)
                    );
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
