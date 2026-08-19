package com.nexus.studentdashboard.repository;

import com.nexus.studentdashboard.model.Announcement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnnouncementRepository extends JpaRepository<Announcement, Integer> {
}
