package com.nexus.studentdashboard.repository;

import com.nexus.studentdashboard.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, Integer> {
    Optional<Student> findByRollNumber(String rollNumber);
}
