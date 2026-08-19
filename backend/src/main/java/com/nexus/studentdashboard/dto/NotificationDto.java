package com.nexus.studentdashboard.dto;

import com.nexus.studentdashboard.model.Notification;

import java.time.Duration;
import java.time.LocalDateTime;

// Frontend expects { id, type, message, time, read } — this DTO converts
// the stored timestamp into a relative string like "2 hours ago" and
// renames isRead -> read.
public class NotificationDto {
    private Integer id;
    private String type;
    private String message;
    private String time;
    private boolean read;

    public NotificationDto(Notification n) {
        this.id = n.getId();
        this.type = n.getType();
        this.message = n.getMessage();
        this.time = relativeTime(n.getCreatedAt());
        this.read = Boolean.TRUE.equals(n.getIsRead());
    }

    private static String relativeTime(LocalDateTime createdAt) {
        if (createdAt == null) return "";
        Duration diff = Duration.between(createdAt, LocalDateTime.now());
        long minutes = diff.toMinutes();
        if (minutes < 1) return "just now";
        if (minutes < 60) return minutes + (minutes == 1 ? " minute ago" : " minutes ago");
        long hours = diff.toHours();
        if (hours < 24) return hours + (hours == 1 ? " hour ago" : " hours ago");
        long days = diff.toDays();
        return days + (days == 1 ? " day ago" : " days ago");
    }

    public Integer getId() { return id; }
    public String getType() { return type; }
    public String getMessage() { return message; }
    public String getTime() { return time; }
    public boolean isRead() { return read; }
}
