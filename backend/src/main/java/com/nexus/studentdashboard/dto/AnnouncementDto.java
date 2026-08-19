package com.nexus.studentdashboard.dto;

import com.nexus.studentdashboard.model.Announcement;

import java.time.LocalDate;

// Frontend expects { id, title, description, date } — entity column is
// postedDate, so this DTO renames it to match.
public class AnnouncementDto {
    private Integer id;
    private String title;
    private String description;
    private LocalDate date;

    public AnnouncementDto(Announcement a) {
        this.id = a.getId();
        this.title = a.getTitle();
        this.description = a.getDescription();
        this.date = a.getPostedDate();
    }

    public Integer getId() { return id; }
    public String getTitle() { return title; }
    public String getDescription() { return description; }
    public LocalDate getDate() { return date; }
}
