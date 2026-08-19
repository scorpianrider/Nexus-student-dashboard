package com.nexus.studentdashboard.repository;

import com.nexus.studentdashboard.model.Assignment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AssignmentRepository extends JpaRepository<Assignment, Integer> {
    List<Assignment> findByStudentId(Integer studentId);
}
