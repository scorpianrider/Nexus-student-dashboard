package com.nexus.studentdashboard.controller;

import com.nexus.studentdashboard.model.Assignment;
import com.nexus.studentdashboard.repository.AssignmentRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/assignments")
public class AssignmentController {

    private final AssignmentRepository assignmentRepository;

    public AssignmentController(AssignmentRepository assignmentRepository) {
        this.assignmentRepository = assignmentRepository;
    }

    @GetMapping("/{studentId}")
    public List<Assignment> getAssignments(@PathVariable Integer studentId) {
        // Field names on Assignment already match what the frontend expects
        // (id, subject, title, dueDate, status), so no DTO mapping needed here.
        return assignmentRepository.findByStudentId(studentId);
    }
}
