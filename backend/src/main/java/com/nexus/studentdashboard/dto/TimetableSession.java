package com.nexus.studentdashboard.dto;

import com.nexus.studentdashboard.model.TimetableEntry;

// Matches the shape of each session inside GET /timetable/{id}, e.g.
// { time: "9:00 - 9:50", subject: "...", room: "..." }
public class TimetableSession {
    private String time;
    private String subject;
    private String room;

    public TimetableSession(TimetableEntry entry) {
        this.time = entry.getStartTime() + " - " + entry.getEndTime();
        this.subject = entry.getSubject();
        this.room = entry.getRoom();
    }

    public String getTime() { return time; }
    public String getSubject() { return subject; }
    public String getRoom() { return room; }
}
