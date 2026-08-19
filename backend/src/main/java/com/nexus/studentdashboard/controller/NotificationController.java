package com.nexus.studentdashboard.controller;

import com.nexus.studentdashboard.dto.NotificationDto;
import com.nexus.studentdashboard.repository.NotificationRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/notifications")
public class NotificationController {

    private final NotificationRepository notificationRepository;

    public NotificationController(NotificationRepository notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    @GetMapping("/{studentId}")
    public List<NotificationDto> getNotifications(@PathVariable Integer studentId) {
        return notificationRepository.findByStudentIdOrderByCreatedAtDesc(studentId).stream()
                .map(NotificationDto::new)
                .collect(Collectors.toList());
    }
}
