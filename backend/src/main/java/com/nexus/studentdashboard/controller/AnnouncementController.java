package com.nexus.studentdashboard.controller;

import com.nexus.studentdashboard.dto.AnnouncementDto;
import com.nexus.studentdashboard.repository.AnnouncementRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/announcements")
public class AnnouncementController {

    private final AnnouncementRepository announcementRepository;

    public AnnouncementController(AnnouncementRepository announcementRepository) {
        this.announcementRepository = announcementRepository;
    }

    @GetMapping
    public List<AnnouncementDto> getAnnouncements() {
        return announcementRepository.findAll().stream()
                .sorted(Comparator.comparing(a -> a.getPostedDate(), Comparator.reverseOrder()))
                .map(AnnouncementDto::new)
                .collect(Collectors.toList());
    }
}
