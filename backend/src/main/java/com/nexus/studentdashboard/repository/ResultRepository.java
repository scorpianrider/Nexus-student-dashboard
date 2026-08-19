package com.nexus.studentdashboard.repository;

import com.nexus.studentdashboard.model.Result;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResultRepository extends JpaRepository<Result, Integer> {
    List<Result> findByStudentId(Integer studentId);
}
