package com.nexus.studentdashboard.repository;

import com.nexus.studentdashboard.model.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NotificationRepository extends JpaRepository<Notification, Integer> {
    List<Notification> findByStudentIdOrderByCreatedAtDesc(Integer studentId);
}
