package com.nexus.studentdashboard.repository;

import com.nexus.studentdashboard.model.TimetableEntry;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TimetableRepository extends JpaRepository<TimetableEntry, Integer> {
    List<TimetableEntry> findByStudentId(Integer studentId);
}
